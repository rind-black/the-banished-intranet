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
const contentForm = document.querySelector("[data-content-form]");
const contentStatus = document.querySelector("[data-content-status]");
const contentRows = document.querySelector("[data-content-rows]");
const adminOnlyElements = document.querySelectorAll("[data-admin-only]");

const profileStoreKey = "tb-internal-profile";
const usersStoreKey = "tb-internal-users";
const requestsStoreKey = "tb-internal-requests";
const contentStoreKey = "tb-internal-content";
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
  projects: "Current projects",
  bonuses: "Bonus information",
  benefits: "Benefits and support",
  holidays: "Holidays and days off",
  culture: "Culture and operating principles",
  training: "Training resources",
  internship: "Internship resources",
  "it-requests": "IT request center",
  "hr-requests": "HR request center",
  admin: "Admin console",
  profile: "Profile settings",
};

const editableSections = {
  overview: "Overview",
  announcements: "Announcements",
  documents: "Documents",
  projects: "Projects",
  bonuses: "Bonuses",
  benefits: "Benefits",
  holidays: "Holidays",
  culture: "Culture",
  training: "Training",
  internship: "Internship",
  "it-requests": "IT Requests",
  "hr-requests": "HR Requests",
};

const holidayDescriptions = {
  "The Banished Foundation Day": "Marks the founding of The Banished and the beginning of its shared creative world: film, comics, technology, and the people building them together.",
  "Pride Day": "Recognizes LGBTQ+ history, visibility, and civil rights. June 28 is tied to the Stonewall uprising, a major turning point in the modern Pride movement.",
  "New Year's Day": "The first day of the Gregorian calendar year, widely used for rest, reflection, new goals, and time with family after year-end holidays.",
  "Martin Luther King Jr. Day": "Honors Dr. Martin Luther King Jr.'s leadership in the US civil rights movement and his work toward racial justice, nonviolence, and public service.",
  "Presidents' Day": "A US federal holiday rooted in George Washington's birthday and now commonly used to reflect on the history of the American presidency.",
  "Memorial Day": "A US day of remembrance for military service members who died while serving. It is traditionally observed with memorials and moments of reflection.",
  Juneteenth: "Commemorates June 19, 1865, when enslaved people in Galveston, Texas learned they were free, marking a profound milestone in the end of slavery in the US.",
  "Independence Day": "Marks the adoption of the Declaration of Independence on July 4, 1776 and is widely associated with civic identity, community gatherings, and national history.",
  "Labor Day": "Recognizes workers, labor rights, and the labor movement's role in shaping wages, working conditions, and the modern workweek.",
  "Columbus Day": "A US federal observance connected to Christopher Columbus's 1492 voyage. Many communities also use this date to recognize Indigenous Peoples' Day and Native histories.",
  "Veterans Day": "Honors military veterans and their service. It falls on November 11, the date associated with the armistice that ended World War I.",
  "Thanksgiving Day": "A US holiday centered on gratitude and gathering. It also carries complex historical meaning connected to Indigenous peoples and colonial history.",
  "Day After Thanksgiving": "The Friday after Thanksgiving is widely used for extended family time, travel, and recovery after the national holiday.",
  "Christmas Day": "A Christian holiday celebrating the birth of Jesus Christ, also widely observed culturally with family gatherings, giving, and year-end traditions.",
  "Rosa Parks Day": "Honors Rosa Parks, whose refusal to give up her bus seat became a defining act in the US civil rights movement and the Montgomery Bus Boycott.",
  "Cesar Chavez Day": "Honors Cesar Chavez, labor leader and civil rights activist known for organizing farm workers and advancing worker dignity and fair treatment.",
  "Good Friday": "A Christian observance marking the crucifixion of Jesus before Easter Sunday. It is a statutory holiday in many Canadian provinces.",
  "Victoria Day": "A Canadian holiday honoring Queen Victoria's birthday and the Crown in Canada, often treated as the unofficial start of the summer season.",
  "Canada Day": "Canada's national day, marking Canadian Confederation on July 1, 1867, when colonies united into the Dominion of Canada.",
  "Civic Holiday": "A summer public holiday observed in many Canadian provinces under different names, often focused on local history and community life.",
  "Labour Day": "Canada's Labour Day recognizes workers and the labor movement, similar in spirit to the US holiday but rooted in Canadian labor history.",
  "Thanksgiving (Canada)": "A Canadian holiday for gratitude and harvest traditions, observed in October and distinct from the later US Thanksgiving.",
  "Remembrance Day": "A Canadian day of remembrance for armed forces members who died in service, observed on November 11 with ceremonies and poppies.",
  "Boxing Day": "Observed the day after Christmas in Canada and other Commonwealth countries, traditionally associated with giving, visiting, and post-holiday rest.",
  "Saint-Jean-Baptiste Day": "Quebec's national holiday, celebrating French-Canadian culture, heritage, language, and community identity.",
  "Simcoe Day": "An Ontario civic holiday named for John Graves Simcoe, the first lieutenant governor of Upper Canada, and often used to recognize local heritage.",
  "Winter Break": "A year-end pause spanning major holiday observances and the transition into a new calendar year, allowing meaningful rest and reset.",
  "Birthday Off": "A personal observance of an employee's birthday, recognizing an individual milestone rather than a public or national holiday.",
  "Mental Health Day": "A dedicated day for rest, recovery, and emotional wellbeing, recognizing that sustainable work depends on mental health.",
  "Volunteer Day": "A day for service and civic contribution, giving time to a cause, community, or organization that matters personally.",
  "Floating Holiday": "A flexible day for religious, cultural, family, or personal observances that may not appear on the standard company calendar.",
  "International Holiday": "A home-country or cultural observance requested individually so employees can honor meaningful holidays from their own background.",
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

function getContentItems() {
  return readJson(contentStoreKey, []);
}

function setContentItems(items) {
  writeJson(contentStoreKey, items);
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

function appendTextBlock(parent, text) {
  String(text || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .forEach((line) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = line;
      parent.append(paragraph);
    });
}

function createPublishedCard(item) {
  const card = document.createElement("article");
  const header = document.createElement("div");
  const label = document.createElement("span");
  const title = document.createElement("h3");
  const summary = document.createElement("p");
  const body = document.createElement("div");

  card.className = `admin-published ${item.type === "document" ? "document-style" : ""}`;
  header.className = "admin-published-header";
  label.textContent = item.label || (item.type === "document" ? "Document" : "Update");
  title.textContent = item.title;
  summary.textContent = item.summary;
  body.className = "admin-published-body";

  if (item.type === "document") {
    const icon = document.createElement("span");
    icon.className = "admin-published-icon";
    icon.textContent = "DOC";
    header.append(icon);
  }

  header.append(label, title);
  appendTextBlock(body, item.body);
  card.append(header, summary, body);

  return card;
}

function renderContentItems() {
  document.querySelectorAll("[data-admin-content-rendered]").forEach((element) => {
    element.remove();
  });

  const items = getContentItems();

  Object.keys(editableSections).forEach((sectionId) => {
    const target = document.querySelector(`[data-section="${sectionId}"]`);
    const sectionItems = items.filter((item) => item.section === sectionId);

    if (!target || !sectionItems.length) {
      return;
    }

    const wrapper = document.createElement("div");
    const heading = document.createElement("div");
    const eyebrow = document.createElement("p");
    const title = document.createElement("h2");
    const list = document.createElement("div");

    wrapper.className = "admin-additions";
    wrapper.dataset.adminContentRendered = sectionId;
    heading.className = "section-heading compact";
    eyebrow.className = "eyebrow";
    eyebrow.textContent = "Admin added";
    title.textContent = "Latest additions";
    list.className = "admin-published-list";

    sectionItems
      .slice()
      .reverse()
      .forEach((item) => {
        list.append(createPublishedCard(item));
      });

    heading.append(eyebrow, title);
    wrapper.append(heading, list);
    target.append(wrapper);
  });
}

function renderContentRows() {
  if (!contentRows) {
    return;
  }

  const items = getContentItems();

  contentRows.replaceChildren();

  if (!items.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 5;
    cell.textContent = "No admin content yet.";
    row.append(cell);
    contentRows.append(row);
    return;
  }

  items
    .slice()
    .reverse()
    .forEach((item) => {
      const row = document.createElement("tr");
      const sectionCell = document.createElement("td");
      const typeCell = document.createElement("td");
      const titleCell = document.createElement("td");
      const createdCell = document.createElement("td");
      const actionCell = document.createElement("td");
      const deleteButton = document.createElement("button");

      sectionCell.textContent = editableSections[item.section] || item.section;
      typeCell.textContent = item.type === "document" ? "Document" : "Update";
      titleCell.textContent = item.title;
      createdCell.textContent = item.createdAt;
      deleteButton.className = "table-action";
      deleteButton.type = "button";
      deleteButton.dataset.contentDelete = item.id;
      deleteButton.textContent = "Remove";
      actionCell.append(deleteButton);
      row.append(sectionCell, typeCell, titleCell, createdCell, actionCell);
      contentRows.append(row);
    });
}

function renderAdmin() {
  renderUsers();
  renderRequests();
  renderContentRows();
  renderContentItems();
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

contentForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contentForm);
  const items = getContentItems();
  const section = String(formData.get("contentSection") || "overview");
  const type = String(formData.get("contentType") || "update");
  const title = String(formData.get("contentTitle") || "").trim();
  const summary = String(formData.get("contentSummary") || "").trim();
  const body = String(formData.get("contentBody") || "").trim();
  const label = String(formData.get("contentLabel") || "").trim();

  if (!title || !summary || !body) {
    setRequestStatus(contentStatus, "Content was not published. Add a title, summary, and details.", "error");
    return;
  }

  const createdAt = new Date().toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  items.push({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    section,
    type,
    label,
    title,
    summary,
    body,
    createdAt,
  });

  setContentItems(items);
  renderContentRows();
  renderContentItems();
  setRequestStatus(contentStatus, `Published to ${editableSections[section] || section}.`);
  contentForm.reset();
});

contentRows?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-content-delete]");

  if (!button) {
    return;
  }

  const nextItems = getContentItems().filter((item) => item.id !== button.dataset.contentDelete);
  setContentItems(nextItems);
  renderContentRows();
  renderContentItems();
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

const holidayCards = document.querySelectorAll(".holiday-list article");

holidayCards.forEach((card) => {
  const title = card.querySelector("span")?.textContent?.trim();
  const description = holidayDescriptions[title] || "A scheduled company observance or approved day away from regular work.";
  const detail = document.createElement("p");

  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-expanded", "false");
  detail.className = "holiday-popover";
  detail.hidden = true;
  detail.textContent = description;
  card.append(detail);

  const toggleHoliday = () => {
    const isOpen = !detail.hidden;

    holidayCards.forEach((holidayCard) => {
      holidayCard.classList.remove("open");
      holidayCard.setAttribute("aria-expanded", "false");
      holidayCard.querySelector(".holiday-popover").hidden = true;
    });

    if (!isOpen) {
      detail.hidden = false;
      card.classList.add("open");
      card.setAttribute("aria-expanded", "true");
    }
  };

  card.addEventListener("click", toggleHoliday);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleHoliday();
    }
  });
});

document.querySelectorAll("[data-internship-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.internshipToggle);

    if (!target) {
      return;
    }

    const isOpen = !target.hidden;

    document.querySelectorAll("[data-internship-toggle]").forEach((item) => {
      item.classList.remove("open");
    });

    document.querySelectorAll(".internship-detail").forEach((detail) => {
      detail.hidden = true;
    });

    if (!isOpen) {
      target.hidden = false;
      button.classList.add("open");
    }
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
