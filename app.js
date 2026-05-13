const navLinks = document.querySelectorAll("[data-section-link]");
const sections = document.querySelectorAll("[data-section]");
const pageTitle = document.querySelector("[data-page-title]");

const titles = {
  overview: "The Banished employee hub",
  announcements: "Company announcements",
  documents: "Company documents",
  bonuses: "Bonus information",
  training: "Training resources",
  "it-requests": "IT request center",
  "hr-requests": "HR request center",
};

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

showSection(window.location.hash.replace("#", "") || "overview");
