const navLinks = document.querySelectorAll("[data-section-link]");
const sections = document.querySelectorAll("[data-section]");
const pageTitle = document.querySelector("[data-page-title]");
const authScreen = document.querySelector("[data-auth-screen]");
const portal = document.querySelector("[data-portal]");
const authForm = document.querySelector("[data-auth-form]");
const authError = document.querySelector("[data-auth-error]");
const profileForm = document.querySelector("[data-profile-form]");
const roleButtons = document.querySelectorAll("[data-role-button]");
const documentGroups = document.querySelectorAll("[data-doc-role]");
const documentEmpty = document.querySelector("[data-doc-empty]");
const signOutButton = document.querySelector("[data-sign-out]");
const profileName = document.querySelector("[data-profile-name]");
const profileRole = document.querySelector("[data-profile-role]");
const profileInitials = document.querySelector("[data-profile-initials]");
const inviteForm = document.querySelector("[data-invite-form]");
const inviteStatus = document.querySelector("[data-invite-status]");
const userRows = document.querySelector("[data-user-rows]");
const requestRows = document.querySelector("[data-request-rows]");
const saveUsersButton = document.querySelector("[data-save-users]");
const adminOnlyElements = document.querySelectorAll("[data-admin-only]");

const profileStoreKey = "tb-internal-profile";
const usersStoreKey = "tb-internal-users";
const requestsStoreKey = "tb-internal-requests";
const inviteTempPassword = "PortalInvite12!";
const companyEmailDomain = "@the-banished.com";

const defaultUsers = {
  "support@the-banished.com": {
    password: "BanishedAdmin12!",
    name: "Test Admin",
    role: "Admin",
    department: "Administration",
    timezone: "America/New_York",
    admin: true,
    status: "Active",
  },
  "general@the-banished.com": {
    password: inviteTempPassword,
    name: "General User",
    role: "General",
    department: "Operations",
    timezone: "America/New_York",
    admin: false,
    status: "Active",
  },
  "pm@the-banished.com": {
    password: inviteTempPassword,
    name: "Project Manager",
    role: "Project Manager",
    department: "Production",
    timezone: "America/New_York",
    admin: false,
    status: "Active",
  },
};

const titles = {
  overview: "The Banished employee hub",
  announcements: "Company announcements",
  documents: "Company documents",
  bonuses: "Bonus information",
  holidays: "Holidays and days off",
  training: "Training resources",
  "it-requests": "IT request center",
  "hr-requests": "HR request center",
  admin: "Admin console",
  profile: "Profile settings",
};

const roleSlugs = {
  General: "general",
  Admin: "admin",
  "Project Manager": "project-manager",
};

const roleNames = Object.keys(roleSlugs);

function readJson(key, fallback) {
  const saved = localStorage.getItem(key);

  if (!saved) {
    return fallback;
  }

  try {
    return JSON.parse(saved);
  } catch {
    localStorage.removeItem(key);
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getUsers() {
  const users = readJson(usersStoreKey, null);

  if (users) {
    const merged = { ...defaultUsers, ...users };
    setUsers(merged);
    return merged;
  }

  writeJson(usersStoreKey, defaultUsers);
  return { ...defaultUsers };
}

function setUsers(users) {
  writeJson(usersStoreKey, users);
}

function getProfile() {
  return readJson(profileStoreKey, null);
}

function setProfile(profile) {
  writeJson(profileStoreKey, profile);
}

function getRequests() {
  return readJson(requestsStoreKey, []);
}

function setRequests(requests) {
  writeJson(requestsStoreKey, requests);
}

function initialsFromName(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "TB";
}

function roleToSlug(role) {
  return roleSlugs[role] || "general";
}

function slugToRole(slug) {
  return roleNames.find((role) => roleToSlug(role) === slug) || "General";
}

function currentProfile() {
  return getProfile();
}

function syncProfileFromDirectory(profile) {
  if (!profile?.email) {
    return profile;
  }

  const users = getUsers();
  const user = users[profile.email];

  if (!user) {
    return null;
  }

  return {
    ...profile,
    name: user.name,
    role: user.role,
    department: user.department,
    timezone: user.timezone,
    admin: Boolean(user.admin),
  };
}

function updateAdminVisibility(profile) {
  adminOnlyElements.forEach((element) => {
    element.hidden = !profile?.admin;
  });
}

function configureRoleSelector(profile) {
  roleButtons.forEach((button) => {
    const role = slugToRole(button.dataset.roleButton);
    button.hidden = !profile?.admin && role !== profile?.role;
  });

  showDocumentRole(null);
}

function applyProfile(profile) {
  if (!profile) {
    return;
  }

  if (profileName) {
    profileName.textContent = profile.name || "Employee";
  }

  if (profileRole) {
    profileRole.textContent = profile.role || "General";
  }

  if (profileInitials) {
    profileInitials.textContent = initialsFromName(profile.name || profile.email || "TB");
  }

  if (profileForm) {
    profileForm.elements.profileName.value = profile.name || "";
    profileForm.elements.profileEmail.value = profile.email || "";
    profileForm.elements.profileRole.value = profile.role || "General";
    profileForm.elements.profileDepartment.value = profile.department || "";
    profileForm.elements.profileTimezone.value = profile.timezone || "";
  }

  updateAdminVisibility(profile);
  configureRoleSelector(profile);
  renderAdmin();
}

function unlockPortal(profile) {
  const syncedProfile = syncProfileFromDirectory(profile);

  if (!syncedProfile) {
    localStorage.removeItem(profileStoreKey);
    return;
  }

  setProfile(syncedProfile);

  if (authScreen) {
    authScreen.hidden = true;
  }

  if (portal) {
    portal.hidden = false;
  }

  document.body.classList.add("is-authenticated");
  applyProfile(syncedProfile);
  showSection(window.location.hash.replace("#", "") || "overview");
}

function showDocumentRole(roleId) {
  roleButtons.forEach((button) => {
    button.classList.toggle("active", Boolean(roleId) && button.dataset.roleButton === roleId);
  });

  documentGroups.forEach((group) => {
    group.classList.toggle("active", Boolean(roleId) && group.dataset.docRole === roleId);
  });

  if (documentEmpty) {
    documentEmpty.hidden = Boolean(roleId);
  }
}

function showSection(sectionId) {
  const profile = currentProfile();
  const nextSection = sectionId === "admin" && !profile?.admin ? "overview" : sectionId;
  const target = document.querySelector(`[data-section="${nextSection}"]`);

  if (!target) {
    return;
  }

  sections.forEach((section) => {
    section.classList.toggle("active", section === target);
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.sectionLink === nextSection);
  });

  if (nextSection === "documents") {
    showDocumentRole(null);
  }

  if (pageTitle) {
    pageTitle.textContent = titles[nextSection] || titles.overview;
  }
}

function renderUsers() {
  if (!userRows) {
    return;
  }

  const users = getUsers();
  userRows.innerHTML = Object.entries(users)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([email, user]) => {
      const roleOptions = roleNames
        .map((role) => `<option ${user.role === role ? "selected" : ""}>${role}</option>`)
        .join("");

      return `
        <tr>
          <td>
            <strong>${user.name}</strong>
            <small>${email}</small>
          </td>
          <td>
            <select data-user-role="${email}">
              ${roleOptions}
            </select>
          </td>
          <td>
            <input type="checkbox" data-user-admin="${email}" ${user.admin ? "checked" : ""} />
          </td>
          <td>${user.status || "Active"}</td>
        </tr>
      `;
    })
    .join("");
}

function renderRequests() {
  if (!requestRows) {
    return;
  }

  const requests = getRequests();

  if (!requests.length) {
    requestRows.innerHTML = `<tr><td colspan="4">No local requests yet.</td></tr>`;
    return;
  }

  requestRows.innerHTML = requests
    .slice()
    .reverse()
    .map((request) => `
      <tr>
        <td>${request.createdAt}</td>
        <td>${request.from}</td>
        <td>${request.type}</td>
        <td>${request.recipient}</td>
      </tr>
    `)
    .join("");
}

function renderAdmin() {
  renderUsers();
  renderRequests();
}

function createDisplayName(email) {
  return email
    .split("@")[0]
    .replace(/[._-]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function companyEmailFromPrefix(prefix) {
  const cleanPrefix = String(prefix || "")
    .trim()
    .toLowerCase()
    .replace(companyEmailDomain, "")
    .replace(/@.*/, "");

  return `${cleanPrefix}${companyEmailDomain}`;
}

function setRequestStatus(element, message, state = "success") {
  if (!element) {
    return;
  }

  element.hidden = false;
  element.classList.toggle("error", state === "error");
  element.classList.toggle("pending", state === "pending");
  element.textContent = message;
}

async function postPortalEmail(endpoint, payload) {
  let response;

  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error("Email service is not running. Start the portal backend before sending email.");
  }

  let data = null;
  let rawResponse = "";

  try {
    rawResponse = await response.text();
    data = rawResponse ? JSON.parse(rawResponse) : null;
  } catch {
    data = null;
  }

  if (!data) {
    throw new Error("Email backend is not connected on this URL. Open the portal through the Node server, not the static preview server.");
  }

  if (!response.ok || !data?.ok) {
    throw new Error(data?.error || "Email service did not confirm delivery.");
  }

  return data;
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const sectionId = link.dataset.sectionLink;
    showSection(sectionId);
    history.replaceState(null, "", `#${sectionId}`);
  });
});

authForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(authForm);
  const email = companyEmailFromPrefix(formData.get("emailPrefix"));
  const password = String(formData.get("password") || "");
  const user = getUsers()[email];

  if (!user || user.password !== password) {
    if (authError) {
      authError.hidden = false;
    }

    return;
  }

  const profile = {
    email,
    name: user.name,
    role: user.role,
    department: user.department,
    timezone: user.timezone,
    admin: Boolean(user.admin),
  };

  if (authError) {
    authError.hidden = true;
  }

  unlockPortal(profile);
});

signOutButton?.addEventListener("click", () => {
  localStorage.removeItem(profileStoreKey);
  document.body.classList.remove("is-authenticated");

  if (portal) {
    portal.hidden = true;
  }

  if (authScreen) {
    authScreen.hidden = false;
  }

  authForm?.reset();
});

profileForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const previousProfile = currentProfile() || {};
  const formData = new FormData(profileForm);
  const profile = {
    name: formData.get("profileName") || "Employee",
    email: formData.get("profileEmail") || "",
    role: formData.get("profileRole") || "General",
    department: formData.get("profileDepartment") || "",
    timezone: formData.get("profileTimezone") || "",
    admin: Boolean(previousProfile.admin),
  };
  const users = getUsers();

  if (profile.email && users[profile.email]) {
    users[profile.email] = {
      ...users[profile.email],
      name: profile.name,
      role: profile.role,
      department: profile.department,
      timezone: profile.timezone,
    };
    setUsers(users);
  }

  setProfile(profile);
  applyProfile(profile);
  showSection("profile");
});

roleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showDocumentRole(button.dataset.roleButton);
  });
});

inviteForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(inviteForm);
  const email = companyEmailFromPrefix(formData.get("inviteEmailPrefix"));
  const role = formData.get("inviteRole") || "General";
  const isAdmin = formData.get("inviteAdmin") === "on" || role === "Admin";

  if (!email.endsWith(companyEmailDomain) || email === companyEmailDomain) {
    setRequestStatus(inviteStatus, "Invitation failed. Enter a valid The Banished company email.", "error");
    return;
  }

  const users = getUsers();
  const temporaryPassword = users[email]?.password || inviteTempPassword;
  users[email] = {
    password: temporaryPassword,
    name: users[email]?.name || createDisplayName(email),
    role,
    department: users[email]?.department || "",
    timezone: users[email]?.timezone || "",
    admin: isAdmin,
    status: "Invited",
  };

  setRequestStatus(inviteStatus, `Sending invitation to ${email}...`, "pending");

  try {
    await postPortalEmail("/api/invitations", {
      email,
      role,
      isAdmin,
      temporaryPassword,
      invitedBy: currentProfile()?.email || "",
    });

    setUsers(users);
    setRequestStatus(inviteStatus, `Invitation email sent to ${email}.`);
    inviteForm.reset();
    renderUsers();
  } catch (error) {
    setRequestStatus(inviteStatus, `Invitation failed. ${error.message}`, "error");
  }
});

saveUsersButton?.addEventListener("click", () => {
  const users = getUsers();

  userRows?.querySelectorAll("[data-user-role]").forEach((select) => {
    const email = select.dataset.userRole;
    users[email].role = select.value;
  });

  userRows?.querySelectorAll("[data-user-admin]").forEach((checkbox) => {
    const email = checkbox.dataset.userAdmin;
    users[email].admin = checkbox.checked;

    if (checkbox.checked && users[email].role !== "Admin") {
      users[email].role = users[email].role || "Admin";
    }
  });

  setUsers(users);

  const profile = syncProfileFromDirectory(currentProfile());
  if (profile) {
    setProfile(profile);
    applyProfile(profile);
  }
});

document.querySelectorAll("[data-announcement-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.announcementToggle);

    if (target) {
      target.hidden = !target.hidden;
      button.classList.toggle("open", !target.hidden);
    }
  });
});

document.querySelectorAll("[data-policy-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const documentId = button.dataset.policyToggle;
    const policy = document.getElementById(documentId);

    if (!policy) {
      return;
    }

    policy.hidden = !policy.hidden;
    button.classList.toggle("open", !policy.hidden);
  });
});

document.querySelectorAll("[data-request-form]").forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const profile = currentProfile();
    const label = form.dataset.label;
    const recipient = form.dataset.recipient;
    const name = formData.get("name") || profile?.name || "[your name]";
    const type = formData.get("type") || "General request";
    const priority = formData.get("priority") || "Normal";
    const details = formData.get("details") || "[describe the request here]";
    const subject = `${label}: ${type}`;
    const body = [
      `Request type: ${type}`,
      `Priority: ${priority}`,
      `Employee name: ${name}`,
      `Employee email: ${profile?.email || ""}`,
      "",
      "Request details:",
      details,
    ].join("\n");
    const status = form.querySelector("[data-request-status]");
    const requests = getRequests();
    const createdAt = new Date().toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
    const from = profile?.email || "";

    setRequestStatus(status, `Sending ${label.toLowerCase()} to ${recipient}...`, "pending");

    try {
      await postPortalEmail("/api/requests", {
        recipient,
        label,
        subject,
        body,
        from,
        request: {
          type,
          priority,
          name,
          details,
        },
      });

      requests.push({
        createdAt,
        from: from || "Unknown",
        type,
        recipient,
        label,
      });
      setRequests(requests);
      renderRequests();
      setRequestStatus(status, `${label} email sent to ${recipient}.`);
      form.reset();
    } catch (error) {
      setRequestStatus(status, `${label} failed. ${error.message}`, "error");
    }
  });
});

window.addEventListener("hashchange", () => {
  showSection(window.location.hash.replace("#", "") || "overview");
});

const savedProfile = getProfile();

if (savedProfile) {
  unlockPortal(savedProfile);
} else {
  showDocumentRole(null);
  renderAdmin();
}
