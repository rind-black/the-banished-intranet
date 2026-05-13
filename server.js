const crypto = require("crypto");
const fs = require("fs");
const http = require("http");
const net = require("net");
const path = require("path");
const readline = require("readline");
const tls = require("tls");
const { once } = require("events");

const rootDir = __dirname;
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";
const companyDomain = "@the-banished.com";
const allowedRecipients = new Set(["support@the-banished.com", "hr@the-banished.com"]);
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;

      if (body.length > 1024 * 1024) {
        reject(new HttpError(413, "Request is too large."));
        request.destroy();
      }
    });

    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

async function readJson(request) {
  const body = await readBody(request);

  try {
    return JSON.parse(body || "{}");
  } catch {
    throw new HttpError(400, "Invalid JSON request.");
  }
}

function isCompanyEmail(email) {
  return /^[a-z0-9._%+-]+@the-banished\.com$/i.test(String(email || ""));
}

function cleanHeader(value) {
  return String(value || "").replace(/[\r\n]+/g, " ").trim();
}

function cleanEmail(value) {
  return String(value || "").replace(/[<>\r\n]/g, "").trim().toLowerCase();
}

function encodeSubject(value) {
  return `=?UTF-8?B?${Buffer.from(cleanHeader(value), "utf8").toString("base64")}?=`;
}

function mailbox(name, email) {
  const cleanName = cleanHeader(name);
  const cleanAddress = cleanEmail(email);

  return cleanName ? `"${cleanName.replace(/"/g, "'")}" <${cleanAddress}>` : cleanAddress;
}

function dotStuff(message) {
  return message.replace(/\r?\n/g, "\r\n").replace(/^\./gm, "..");
}

function getFromAddress() {
  return cleanEmail(process.env.PORTAL_MAIL_FROM || process.env.SMTP_FROM || process.env.SMTP_USER || "support@the-banished.com");
}

function buildMessage({ to, subject, text, replyTo }) {
  const fromAddress = getFromAddress();
  const fromName = process.env.PORTAL_MAIL_FROM_NAME || "The Banished Internal Portal";
  const headers = [
    `From: ${mailbox(fromName, fromAddress)}`,
    `To: ${cleanEmail(to)}`,
    `Subject: ${encodeSubject(subject)}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@the-banished.com>`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
  ];

  if (replyTo && isCompanyEmail(replyTo)) {
    headers.push(`Reply-To: ${cleanEmail(replyTo)}`);
  }

  return `${headers.join("\r\n")}\r\n\r\n${String(text || "").replace(/\r?\n/g, "\r\n")}`;
}

async function sendWithResend({ to, subject, text, replyTo }) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: mailbox(process.env.PORTAL_MAIL_FROM_NAME || "The Banished Internal Portal", getFromAddress()),
      to: [cleanEmail(to)],
      subject: cleanHeader(subject),
      text,
      reply_to: replyTo && isCompanyEmail(replyTo) ? cleanEmail(replyTo) : undefined,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend rejected the email: ${errorText || response.status}`);
  }

  return true;
}

function createSmtpReader(socket) {
  const lines = readline.createInterface({
    input: socket,
    crlfDelay: Infinity,
  });
  const iterator = lines[Symbol.asyncIterator]();

  return {
    close() {
      lines.close();
    },
    async read(expectedCodes) {
      const responseLines = [];

      while (true) {
        const { value, done } = await iterator.next();

        if (done) {
          throw new Error("SMTP connection closed unexpectedly.");
        }

        responseLines.push(value);

        if (/^\d{3} /.test(value)) {
          const code = Number(value.slice(0, 3));

          if (expectedCodes && !expectedCodes.includes(code)) {
            throw new Error(`SMTP error ${code}: ${responseLines.join(" ")}`);
          }

          return { code, lines: responseLines };
        }
      }
    },
  };
}

function openSocket(config) {
  return new Promise((resolve, reject) => {
    const options = {
      host: config.host,
      port: config.port,
      servername: config.host,
    };
    const socket = config.secure ? tls.connect(options) : net.connect(options);
    const readyEvent = config.secure ? "secureConnect" : "connect";

    socket.setEncoding("utf8");
    socket.setTimeout(25000, () => {
      socket.destroy(new Error("SMTP connection timed out."));
    });
    socket.once(readyEvent, () => resolve(socket));
    socket.once("error", reject);
  });
}

async function upgradeToTls(socket, host) {
  const secureSocket = tls.connect({ socket, servername: host });

  await once(secureSocket, "secureConnect");
  secureSocket.setEncoding("utf8");
  return secureSocket;
}

async function sendCommand(socket, reader, command, expectedCodes) {
  socket.write(`${command}\r\n`);
  return reader.read(expectedCodes);
}

async function sendWithSmtp({ to, subject, text, replyTo }) {
  const host = process.env.SMTP_HOST;

  if (!host) {
    return false;
  }

  const config = {
    host,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true" || Number(process.env.SMTP_PORT || 587) === 465,
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  };
  let socket = await openSocket(config);
  let reader = createSmtpReader(socket);
  const localName = process.env.SMTP_EHLO_NAME || "the-banished-internal-portal.local";

  try {
    await reader.read([220]);
    await sendCommand(socket, reader, `EHLO ${localName}`, [250]);

    if (!config.secure && process.env.SMTP_STARTTLS !== "false") {
      await sendCommand(socket, reader, "STARTTLS", [220]);
      reader.close();
      socket = await upgradeToTls(socket, config.host);
      reader = createSmtpReader(socket);
      await sendCommand(socket, reader, `EHLO ${localName}`, [250]);
    }

    if (config.user && config.pass) {
      await sendCommand(socket, reader, "AUTH LOGIN", [334]);
      await sendCommand(socket, reader, Buffer.from(config.user).toString("base64"), [334]);
      await sendCommand(socket, reader, Buffer.from(config.pass).toString("base64"), [235]);
    }

    await sendCommand(socket, reader, `MAIL FROM:<${getFromAddress()}>`, [250]);
    await sendCommand(socket, reader, `RCPT TO:<${cleanEmail(to)}>`, [250, 251]);
    await sendCommand(socket, reader, "DATA", [354]);
    socket.write(`${dotStuff(buildMessage({ to, subject, text, replyTo }))}\r\n.\r\n`);
    await reader.read([250]);
    await sendCommand(socket, reader, "QUIT", [221]).catch(() => {});
  } finally {
    socket.end();
  }

  return true;
}

async function sendEmail(message) {
  const sentWithResend = await sendWithResend(message);

  if (sentWithResend) {
    return;
  }

  const sentWithSmtp = await sendWithSmtp(message);

  if (sentWithSmtp) {
    return;
  }

  console.warn("Email service is not configured. Set RESEND_API_KEY or SMTP_HOST, SMTP_USER, SMTP_PASS, and SMTP_FROM.");
  throw new HttpError(503, "Email service is not configured yet. Please contact the portal administrator.");
}

async function handleInvitation(request, response) {
  const payload = await readJson(request);
  const email = cleanEmail(payload.email);

  if (!isCompanyEmail(email)) {
    throw new HttpError(400, "Invitation must be sent to a @the-banished.com email address.");
  }

  const role = cleanHeader(payload.role || "General");
  const temporaryPassword = String(payload.temporaryPassword || "");

  if (!temporaryPassword) {
    throw new HttpError(400, "Temporary password is missing.");
  }

  const text = [
    "You have been invited to The Banished Internal Portal.",
    "",
    `Company email: ${email}`,
    `Temporary password: ${temporaryPassword}`,
    `Assigned role: ${role}`,
    "",
    "Please sign in and update your profile after first access.",
  ].join("\n");

  await sendEmail({
    to: email,
    subject: "Your The Banished Internal Portal invitation",
    text,
    replyTo: payload.invitedBy,
  });

  sendJson(response, 200, { ok: true });
}

async function handleRequest(request, response) {
  const payload = await readJson(request);
  const recipient = cleanEmail(payload.recipient);
  const from = cleanEmail(payload.from);

  if (!allowedRecipients.has(recipient)) {
    throw new HttpError(400, "This request can only be sent to support@the-banished.com or hr@the-banished.com.");
  }

  if (from && !isCompanyEmail(from)) {
    throw new HttpError(400, "Employee email must be a @the-banished.com address.");
  }

  await sendEmail({
    to: recipient,
    subject: cleanHeader(payload.subject || payload.label || "Internal Portal Request"),
    text: String(payload.body || ""),
    replyTo: from,
  });

  sendJson(response, 200, { ok: true });
}

function serveStatic(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const requestedPath = decodeURIComponent(url.pathname);
  const safePath = path.normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(rootDir, safePath === "/" ? "index.html" : safePath);

  if (!filePath.startsWith(rootDir)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream",
    });
    response.end(content);
  });
}

const server = http.createServer(async (request, response) => {
  try {
    if (request.method === "POST" && request.url === "/api/invitations") {
      await handleInvitation(request, response);
      return;
    }

    if (request.method === "POST" && request.url === "/api/requests") {
      await handleRequest(request, response);
      return;
    }

    if (request.method === "GET" || request.method === "HEAD") {
      serveStatic(request, response);
      return;
    }

    sendJson(response, 405, { ok: false, error: "Method not allowed." });
  } catch (error) {
    const status = error instanceof HttpError ? error.status : 502;
    sendJson(response, status, {
      ok: false,
      error: error.message || "Email could not be sent.",
    });
  }
});

server.listen(port, host, () => {
  console.log(`The Banished Internal Portal is running at http://${host}:${port}`);
});
