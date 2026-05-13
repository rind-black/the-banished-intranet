const navLinks = document.querySelectorAll("[data-section-link]");
const sections = document.querySelectorAll("[data-section]");
const pageTitle = document.querySelector("[data-page-title]");
const authScreen = document.querySelector("[data-auth-screen]");
const portal = document.querySelector("[data-portal]");
const authForm = document.querySelector("[data-auth-form]");
const profileForm = document.querySelector("[data-profile-form]");
const roleButtons = document.querySelectorAll("[data-role-button]");
const documentGroups = document.querySelectorAll("[data-doc-role]");
const signOutButton = document.querySelector("[data-sign-out]");
const profileName = document.querySelector("[data-profile-name]");
const profileRole = document.querySelector("[data-profile-role]");
const profileInitials = document.querySelector("[data-profile-initials]");

const profileStoreKey = "tb-internal-profile";

const titles = {
  overview: "The Banished employee hub",
  announcements: "Company announcements",
  documents: "Company documents",
  bonuses: "Bonus information",
  training: "Training resources",
  "it-requests": "IT request center",
  "hr-requests": "HR request center",
  profile: "Profile settings",
};

const roleSlugs = {
  General: "general",
  "Project Manager": "project-manager",
  Production: "production",
  Casting: "casting",
  Finance: "finance",
  HR: "hr",
};

function getProfile() {
  const saved = localStorage.getItem(profileStoreKey);

  if (!saved) {
    return null;
  }

  try {
    return JSON.parse(saved);
  } catch {
    localStorage.removeItem(profileStoreKey);
    return null;
  }
}

function setProfile(profile) {
  localStorage.setItem(profileStoreKey, JSON.stringify(profile));
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

  showDocumentRole(roleToSlug(profile.role));
}

function unlockPortal(profile) {
  if (authScreen) {
    authScreen.hidden = true;
  }

  if (portal) {
    portal.hidden = false;
  }

  document.body.classList.add("is-authenticated");
  applyProfile(profile);
  showSection(window.location.hash.replace("#", "") || "overview");
}

function showDocumentRole(roleId) {
  roleButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.roleButton === roleId);
  });

  documentGroups.forEach((group) => {
    group.classList.toggle("active", group.dataset.docRole === roleId);
  });
}

function showSection(sectionId) {
  const target = document.querySelector(`[data-section="${sectionId}"]`);

  if (!target) {
    return;
  }

  sections.forEach((section) => {
    section.classList.toggle("active", section === target);
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.sectionLink === sectionId);
  });

  if (pageTitle) {
    pageTitle.textContent = titles[sectionId] || titles.overview;
  }
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
  const email = String(formData.get("email") || "");
  const name = email.split("@")[0].replace(/[._-]+/g, " ");
  const profile = {
    email,
    name: name.replace(/\b\w/g, (letter) => letter.toUpperCase()),
    role: "General",
    department: "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
  };

  setProfile(profile);
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

  const formData = new FormData(profileForm);
  const profile = {
    name: formData.get("profileName") || "Employee",
    email: formData.get("profileEmail") || "",
    role: formData.get("profileRole") || "General",
    department: formData.get("profileDepartment") || "",
    timezone: formData.get("profileTimezone") || "",
  };

  setProfile(profile);
  applyProfile(profile);
  showSection("profile");
});

roleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showDocumentRole(button.dataset.roleButton);
  });
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
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const label = form.dataset.label;
    const recipient = form.dataset.recipient;
    const name = formData.get("name") || "[your name]";
    const type = formData.get("type") || "General request";
    const priority = formData.get("priority") || "Normal";
    const details = formData.get("details") || "[describe the request here]";
    const subject = `${label}: ${type}`;
    const body = [
      `Request type: ${type}`,
      `Priority: ${priority}`,
      `Employee name: ${name}`,
      "",
      "Request details:",
      details,
    ].join("\n");
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.assign(mailto);
  });
});

window.addEventListener("hashchange", () => {
  showSection(window.location.hash.replace("#", "") || "overview");
});

const savedProfile = getProfile();

if (savedProfile) {
  unlockPortal(savedProfile);
} else {
  showDocumentRole("general");
}
