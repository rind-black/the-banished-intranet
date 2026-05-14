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
const profileBonusCredits = document.querySelector("[data-profile-bonus-credits]");
const profileBonusPotential = document.querySelector("[data-profile-bonus-potential]");
const challengeMonth = document.querySelector("[data-challenge-month]");
const challengeCredits = document.querySelector("[data-challenge-credits]");
const challengeList = document.querySelector("[data-challenge-list]");
const challengeLevel = document.querySelector("[data-challenge-level]");
const challengeProgress = document.querySelector("[data-challenge-progress]");
const challengeProgressLabel = document.querySelector("[data-challenge-progress-label]");
const challengePlayerCredits = document.querySelector("[data-challenge-player-credits]");
const challengeFilterBar = document.querySelector("[data-challenge-filter-bar]");
const projectDetailLabel = document.querySelector("[data-project-detail-label]");
const projectDetailTitle = document.querySelector("[data-project-detail-title]");
const projectDetailSummary = document.querySelector("[data-project-detail-summary]");
const projectDetailStage = document.querySelector("[data-project-detail-stage]");
const projectDetailOwner = document.querySelector("[data-project-detail-owner]");
const projectDetailPriority = document.querySelector("[data-project-detail-priority]");
const projectDetailRequirements = document.querySelector("[data-project-detail-requirements]");
const projectDetailDeliverables = document.querySelector("[data-project-detail-deliverables]");
const projectDetailNotes = document.querySelector("[data-project-detail-notes]");
const documentDetailContent = document.querySelector("[data-document-detail-content]");
const bonusDetailContent = document.querySelector("[data-bonus-detail-content]");
const inviteForm = document.querySelector("[data-invite-form]");
const inviteStatus = document.querySelector("[data-invite-status]");
const createUserForm = document.querySelector("[data-create-user-form]");
const createUserStatus = document.querySelector("[data-create-user-status]");
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
let activeChallengeDepartment = "all";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const defaultUsers = {
  "support@the-banished.com": {
    password: "BanishedAdmin12!",
    name: "Test Admin",
    role: "Admin",
    department: "Administration",
    timezone: "America/New_York",
    admin: true,
    status: "Active",
    bonusCredits: 0,
  },
  "general@the-banished.com": {
    password: inviteTempPassword,
    name: "General User",
    role: "General",
    department: "Operations",
    timezone: "America/New_York",
    admin: false,
    status: "Active",
    bonusCredits: 0,
  },
  "pm@the-banished.com": {
    password: inviteTempPassword,
    name: "Project Manager",
    role: "Project Manager",
    department: "Production",
    timezone: "America/New_York",
    admin: false,
    status: "Active",
    bonusCredits: 0,
  },
};

const titles = {
  overview: "The Banished employee hub",
  announcements: "Company announcements",
  documents: "Company documents",
  "document-detail": "Document detail",
  projects: "Current projects",
  "project-detail": "Project detail",
  bonuses: "Bonus information",
  "bonus-detail": "Bonus document",
  benefits: "Benefits and support",
  holidays: "Holidays and days off",
  culture: "Culture and operating principles",
  training: "Training resources",
  internship: "Internship resources",
  "monthly-challenge": "Challenge of the Month",
  "it-requests": "IT request center",
  "hr-requests": "HR request center",
  "org-requests": "Organizational request center",
  "ed-requests": "Education request center",
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
  "monthly-challenge": "Challenge of the Month",
  "it-requests": "IT Requests",
  "hr-requests": "HR Requests",
  "org-requests": "Org Requests",
  "ed-requests": "ED Requests",
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
  "Personal Recharge Days": "Two separate monthly day-offs for personal recovery. They are not PTO, not sick days, reset on the first day of each month, and do not roll over.",
  "International Holiday": "A home-country or cultural observance requested individually so employees can honor meaningful holidays from their own background.",
  "Halloween at The Banished Inc.": "A company celebration on October 31: playful, optional, and intentionally less formal than a normal workday.",
  "End of Year Celebration": "A December gathering to close the year properly, recognize what the team built, and spend time together beyond normal work rhythms.",
  "Project Wrap Celebration": "A team celebration after the final deliverable ships, giving people a moment to exhale and mark the work they completed.",
  "Hackathons and Game Jams": "Fast, playful build sessions for technical and creative teams to prototype ideas, test tools, and make something tangible in a short window.",
  "Movie Nights and Screenwriting Meetups": "Story-focused gatherings for production teams and anyone curious about film, writing, structure, character, and craft.",
  "Workshops and Knowledge-Sharing Sessions": "Internal sessions where people teach practical knowledge across departments, from creative workflows to operations and tools.",
  "Themed Thursdays": "A monthly optional culture moment. Themes are announced at least one week in advance and require Organizational sign-off before they go out.",
};

const monthlyChallenges = [
  [
    {
      icon: "TOOL",
      title: "Make the Portal Smarter",
      category: "Internal tools",
      credits: 10,
      summary: "Submit one practical improvement that makes the Internal Portal easier to use.",
      details: "Eligible work includes a clearer workflow, a missing document, a useful automation idea, or a better way to route employee requests. The strongest submissions are specific, useful, and simple to implement.",
    },
    {
      icon: "CAST",
      title: "Improve Casting Data",
      category: "AI casting",
      credits: 12,
      summary: "Find one way to make talent data cleaner, easier to compare, or easier to search.",
      details: "Submit a field recommendation, data quality rule, matching signal, or review checklist. Explain who benefits and how it reduces casting friction.",
    },
  ],
  [
    {
      icon: "FILM",
      title: "Pitch a Film Process Upgrade",
      category: "Film",
      credits: 12,
      summary: "Identify one production workflow that could be faster, clearer, or easier to hand off.",
      details: "Explain the current friction, who it affects, and what would change. Bonus consideration goes to ideas that help creative and technical teams collaborate with less ambiguity.",
    },
    {
      icon: "DOC",
      title: "Write a Better Brief",
      category: "Production",
      credits: 10,
      summary: "Turn a messy project request into a sharper brief template or example.",
      details: "Include objective, owner, audience, deadline, constraints, open questions, and what a good first draft should include.",
    },
  ],
  [
    {
      icon: "IP",
      title: "Build the Comics Knowledge Base",
      category: "Comics",
      credits: 10,
      summary: "Add a useful reference, character note, style note, or process suggestion for comics and IP work.",
      details: "The goal is to make the creative universe easier to navigate. Strong contributions help future collaborators understand tone, continuity, character logic, or production standards.",
    },
    {
      icon: "CANON",
      title: "Catch a Continuity Risk",
      category: "Comics",
      credits: 12,
      summary: "Identify one continuity issue before it creates confusion in story, art, or adaptation work.",
      details: "Document the issue, the affected materials, the possible fix, and why it matters to future creative work.",
    },
  ],
  [
    {
      icon: "OPS",
      title: "Improve a Support Request",
      category: "Operations",
      credits: 10,
      summary: "Find one IT or HR request type that needs a better form, clearer instructions, or faster routing.",
      details: "A good submission names the request, explains what information is usually missing, and suggests the fields or instructions that would reduce back-and-forth.",
    },
    {
      icon: "TIME",
      title: "Reduce Meeting Waste",
      category: "Operations",
      credits: 10,
      summary: "Replace one recurring meeting habit with a clearer async update, decision note, or agenda.",
      details: "Show the before and after. The best submissions save time without hiding decisions or making collaboration harder.",
    },
  ],
  [
    {
      icon: "CAST",
      lane: "casting",
      title: "Build an Actor Search Shortlist",
      category: "Casting / actor search",
      credits: 12,
      summary: "Find performers for an active role and explain why each person belongs on the list.",
      details: "Choose one active project or character need. Submit 5-8 actors with links, relevant credits, screen presence notes, possible fit, risk flags, and one sentence on why each person deserves review.",
    },
    {
      icon: "TASK",
      lane: "projects",
      title: "Create a Project Task Pack",
      category: "Project tasks",
      credits: 12,
      summary: "Turn the next step for a real project into a clear task set the team can use.",
      details: "Pick The Banished, Colorblind, Incompatibility, Four Horsemen, or AI Casting. List the next objective, owner type, dependencies, open questions, deadline pressure, and 3-6 concrete tasks that move the project forward.",
    },
    {
      icon: "ART",
      lane: "art",
      title: "Build a Visual Reference Sheet",
      category: "Art direction",
      credits: 10,
      summary: "Create a compact visual direction board for a scene, character, project, or portal asset.",
      details: "Submit 6-10 references with short notes. Explain color, composition, texture, costume, environment, or UI mood. The strongest boards make a creative decision easier, not just prettier.",
    },
    {
      icon: "SOUND",
      lane: "sound",
      title: "Find a Sound Identity Reference",
      category: "Sound",
      credits: 10,
      summary: "Collect audio references that clarify the emotional sound of a project or scene.",
      details: "Submit 3-5 references for score, ambience, sound design, voice tone, trailer rhythm, or theme. Add notes on emotion, tempo, instrumentation, and where the reference should or should not influence the project.",
    },
    {
      icon: "MAP",
      lane: "other",
      title: "Fix One Internal Workflow",
      category: "Other",
      credits: 10,
      summary: "Improve one small internal process that slows people down.",
      details: "Pick a repeated friction point in the portal, handoffs, approvals, requests, folders, or communication. Show the current issue, the proposed fix, who benefits, and what proof would show it worked.",
    },
  ],
  [
    {
      icon: "QA",
      title: "Find a Quality Gap",
      category: "Production",
      credits: 12,
      summary: "Catch and clearly explain one quality risk before it reaches a wider audience.",
      details: "This can be a content issue, workflow risk, inconsistent document, unclear approval path, or user-facing problem. Useful prevention counts.",
    },
    {
      icon: "SAFE",
      title: "Clarify a Confidentiality Risk",
      category: "Security",
      credits: 10,
      summary: "Identify one place where sensitive project information needs clearer handling.",
      details: "Explain the risk, the affected workflow, and the practical rule that would help employees avoid mistakes.",
    },
  ],
  [
    {
      icon: "REMOTE",
      title: "Make Remote Work Cleaner",
      category: "Remote work",
      credits: 10,
      summary: "Improve async collaboration, timezone handoffs, or meeting hygiene for distributed teams.",
      details: "Strong submissions make work easier across locations: clearer updates, fewer unnecessary meetings, better decision logs, or better handoff expectations.",
    },
    {
      icon: "HAND",
      title: "Create a Handoff Standard",
      category: "Remote work",
      credits: 10,
      summary: "Design a compact handoff format for work that crosses time zones or departments.",
      details: "Include owner, status, last decision, next action, risks, links, and what the next person should do first.",
    },
  ],
  [
    {
      icon: "PART",
      title: "Elevate a Partner Experience",
      category: "Partnerships",
      credits: 12,
      summary: "Suggest one way to make partners, vendors, schools, or collaborators experience The Banished as sharper and easier to work with.",
      details: "Focus on communication, onboarding, deliverables, approvals, or relationship moments that make the company feel more professional.",
    },
    {
      icon: "MAIL",
      title: "Rewrite a Partner Email",
      category: "Partnerships",
      credits: 10,
      summary: "Improve one repeatable partner communication so it is clearer, warmer, and easier to act on.",
      details: "Submit the original problem, the revised message, and the reason the new version reduces confusion or delay.",
    },
  ],
  [
    {
      icon: "LEARN",
      title: "Create a Learning Asset",
      category: "Training",
      credits: 10,
      summary: "Build or outline a practical learning asset the team can reuse.",
      details: "This can be a short guide, micro-training, checklist, explainer, example library, or walkthrough for a tool, process, or creative standard.",
    },
    {
      icon: "DEMO",
      title: "Record a Process Walkthrough",
      category: "Training",
      credits: 12,
      summary: "Create a short walkthrough for a repeated workflow, tool, or approval process.",
      details: "Keep it practical: what the person needs, where to click, what good output looks like, and where to ask for help.",
    },
  ],
  [
    {
      icon: "SPEED",
      title: "Speed Up a Repeated Task",
      category: "Automation",
      credits: 12,
      summary: "Find a repeated task that could be templated, automated, or made easier to review.",
      details: "Describe the task, frequency, current time cost, proposed improvement, and what would be needed to test it.",
    },
    {
      icon: "FIX",
      title: "Fix a Portal Friction Point",
      category: "Internal tools",
      credits: 10,
      summary: "Document one portal issue and propose a cleaner interaction or content structure.",
      details: "The strongest entries include the problem, affected users, suggested fix, and a screenshot or mockup if useful.",
    },
  ],
  [
    {
      icon: "THANK",
      title: "Recognize a Team Contribution",
      category: "Culture",
      credits: 10,
      summary: "Write a specific recognition note for a teammate whose work made a measurable difference.",
      details: "Name the contribution, the impact, and what behavior should be reinforced. Recognition must be specific enough to be useful.",
    },
    {
      icon: "CLEAN",
      title: "Clean Up a Shared Folder",
      category: "Knowledge",
      credits: 10,
      summary: "Organize one shared folder, document set, or reference area so employees can find what they need faster.",
      details: "Include what changed, where it lives, naming rules used, and what should be archived or kept current.",
    },
  ],
  [
    {
      icon: "SAVE",
      title: "Year-End Knowledge Save",
      category: "Knowledge",
      credits: 14,
      summary: "Capture something important the company learned this year before it disappears into old messages.",
      details: "Summarize the lesson, where it came from, who it helps, and what should change next time. Clear documentation can become bonus-worthy impact.",
    },
    {
      icon: "PLAN",
      title: "Propose Next Year's First Fix",
      category: "Planning",
      credits: 12,
      summary: "Recommend one practical improvement the company should prioritize early next year.",
      details: "Include the problem, expected impact, owner type, first action, and how success should be measured.",
    },
  ],
];

const challengeLaneOptions = [
  { key: "casting", label: "Casting" },
  { key: "projects", label: "Projects" },
  { key: "art", label: "Art" },
  { key: "sound", label: "Sound" },
  { key: "other", label: "Other" },
];

const projectPages = {
  "ai-casting": {
    label: "IT / Product",
    title: "AI Casting Platform",
    summary: "Internal casting intelligence for film and television talent discovery, talent data quality, and production-ready matching workflows.",
    stage: "Product discovery and workflow design",
    owner: "Technology / Casting Operations",
    priority: "High",
    requirements: [
      "Define the minimum talent profile fields needed for reliable comparison.",
      "Map the casting search workflow from role brief to shortlist review.",
      "Create quality rules for profile completeness, duplicate prevention, and data consistency.",
      "Identify access permissions for admins, casting reviewers, and project teams.",
    ],
    deliverables: [
      "Casting workflow map",
      "Talent profile data checklist",
      "Reviewer dashboard requirements",
      "Security and access notes",
    ],
    notes: "This project connects the company's creative studio work with practical internal tooling. The immediate goal is clarity: who uses it, what data matters, and what decisions the platform should support first.",
  },
  "the-banished": {
    label: "Film / Comics",
    title: "The Banished",
    summary: "The core dark fantasy universe behind the company name, built for cross-format development across story, visual references, and production planning.",
    stage: "Creative development",
    owner: "Creative / IP",
    priority: "Flagship",
    requirements: [
      "Maintain clear canon rules for characters, magic absence, world logic, and tone.",
      "Organize reference material for visual language, character arcs, and story continuity.",
      "Track which elements belong to film, comics, pitch, and internal reference materials.",
      "Keep approvals clear before any external collaborator receives confidential materials.",
    ],
    deliverables: [
      "Canon and continuity notes",
      "Character reference sheets",
      "Pitch package outline",
      "Production planning checklist",
    ],
    notes: "The Banished should function as a living universe, not a loose folder of ideas. The portal page gives employees one place to understand what exists, what is approved, and what is still in development.",
  },
  colorblind: {
    label: "Film",
    title: "Colorblind",
    summary: "A film project about a successful advertising creative director whose identity and career are disrupted when he realizes he can no longer perceive color.",
    stage: "Script and packaging",
    owner: "Film Development",
    priority: "Active",
    requirements: [
      "Refine story tone between workplace pressure, identity shift, and visual subjectivity.",
      "Build visual references that communicate color perception without becoming gimmicky.",
      "Prepare casting research for lead, agency team, and key personal relationships.",
      "Collect market comps and positioning notes for pitch conversations.",
    ],
    deliverables: [
      "Updated script notes",
      "Visual treatment references",
      "Casting research shortlist",
      "Pitch positioning memo",
    ],
    notes: "The project depends on precision: the visual concept has to support character and theme. Internal work should keep creative ambition aligned with production feasibility.",
  },
  incompatibility: {
    label: "Film",
    title: "Incompatibility",
    summary: "A dark romantic comedy about emotional mismatch, control, obsession, and the everyday absurdity of trying to make an impossible relationship work.",
    stage: "Tone and character development",
    owner: "Film Development",
    priority: "Active",
    requirements: [
      "Clarify the emotional rules of both leads so conflict feels intentional, not random.",
      "Balance dark comedy with empathy and avoid flattening either character into a trope.",
      "Identify key set pieces, recurring motifs, and escalation points.",
      "Build a concise pitch summary that makes the relationship engine clear quickly.",
    ],
    deliverables: [
      "Character arc notes",
      "Tone references",
      "Set-piece list",
      "Pitch summary draft",
    ],
    notes: "This project needs clean tonal control. The portal page should help anyone joining the project understand the premise, the comic engine, and what still needs creative decisions.",
  },
  "four-horsemen": {
    label: "Comics / IP",
    title: "Four Horsemen of the Apocalypse",
    summary: "A supernatural ensemble property about ordinary college students who receive mythic Horsemen powers and are pulled into escalating chaos.",
    stage: "IP architecture",
    owner: "Comics / Franchise Development",
    priority: "Development",
    requirements: [
      "Define the mythology rules for each Horseman power and its personal cost.",
      "Map the ensemble relationships, conflict loops, and season or issue arcs.",
      "Create visual standards for powers, symbols, settings, and character silhouettes.",
      "Identify which story elements are comics-first and which could support adaptation.",
    ],
    deliverables: [
      "Mythology rulebook",
      "Issue or episode arc map",
      "Character and power sheets",
      "Adaptation opportunity notes",
    ],
    notes: "The project has franchise potential, so internal documentation should protect consistency early: rules, visuals, and character logic need to be easy to reuse.",
  },
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

function currentMonthlyChallenges() {
  return monthlyChallenges[new Date().getMonth()] || [];
}

function currentMonthlyCreditTotal() {
  return currentMonthlyChallenges().reduce((total, challenge) => total + Number(challenge.credits || 0), 0);
}

function challengeLevelFromCredits(credits) {
  if (credits >= 150) {
    return "Level 5 / Producer";
  }

  if (credits >= 100) {
    return "Level 4 / Lead";
  }

  if (credits >= 50) {
    return "Level 3 / Specialist";
  }

  if (credits >= 20) {
    return "Level 2 / Builder";
  }

  return "Level 1 / Scout";
}

function challengeDifficulty(challenge) {
  if (challenge.credits >= 15) {
    return { key: "boss", label: "Boss mission", tier: "S" };
  }

  if (challenge.credits >= 12) {
    return { key: "advanced", label: "Advanced quest", tier: "A" };
  }

  return { key: "core", label: "Core quest", tier: "C" };
}

function challengeIconType(challenge) {
  const category = String(challenge.category || "").toLowerCase();
  const icon = String(challenge.icon || "").toLowerCase();
  const lane = String(challenge.lane || "").toLowerCase();

  if (lane === "casting" || category.includes("casting") || category.includes("actor") || category.includes("talent") || icon.includes("cast")) {
    return "casting";
  }

  if (lane === "projects" || category.includes("project") || category.includes("task") || icon.includes("task")) {
    return "project";
  }

  if (lane === "art" || category.includes("art") || category.includes("visual") || category.includes("design") || icon.includes("art")) {
    return "art";
  }

  if (lane === "sound" || category.includes("sound") || category.includes("audio") || category.includes("music") || icon.includes("sound")) {
    return "sound";
  }

  if (category.includes("film") || category.includes("production") || icon.includes("film") || icon.includes("cast")) {
    return "film";
  }

  if (category.includes("comic") || icon.includes("canon") || icon.includes("ip")) {
    return "story";
  }

  if (category.includes("automation") || category.includes("technology") || category.includes("tools") || icon.includes("tech")) {
    return "gear";
  }

  if (category.includes("security") || icon.includes("safe")) {
    return "shield";
  }

  if (category.includes("culture") || category.includes("people") || icon.includes("thank")) {
    return "spark";
  }

  return "map";
}

function challengeDepartment(challenge) {
  const category = String(challenge.category || "").toLowerCase();
  const icon = String(challenge.icon || "").toLowerCase();
  const requestedLane = String(challenge.lane || "").toLowerCase();
  const configuredLane = challengeLaneOptions.find((lane) => lane.key === requestedLane);

  if (configuredLane) {
    return configuredLane;
  }

  if (category.includes("casting") || category.includes("actor") || category.includes("talent") || icon.includes("cast")) {
    return challengeLaneOptions[0];
  }

  if (category.includes("project") || category.includes("task") || category.includes("film") || category.includes("comic") || category.includes("production") || icon.includes("task") || icon.includes("film") || icon.includes("canon") || icon.includes("ip")) {
    return challengeLaneOptions[1];
  }

  if (category.includes("art") || category.includes("visual") || category.includes("design") || category.includes("reference") || icon.includes("art")) {
    return challengeLaneOptions[2];
  }

  if (category.includes("sound") || category.includes("audio") || category.includes("music") || category.includes("score") || icon.includes("sound")) {
    return challengeLaneOptions[3];
  }

  return challengeLaneOptions[4];
}

function renderChallengeDepartmentFilters() {
  if (!challengeFilterBar) {
    return;
  }

  if (activeChallengeDepartment !== "all" && !challengeLaneOptions.some((lane) => lane.key === activeChallengeDepartment)) {
    activeChallengeDepartment = "all";
  }

  challengeFilterBar.replaceChildren();

  [{ key: "all", label: "All departments" }, ...challengeLaneOptions].forEach((department) => {
    const button = document.createElement("button");

    button.type = "button";
    button.dataset.challengeDepartment = department.key;
    button.className = department.key === activeChallengeDepartment ? "active" : "";
    button.textContent = department.label;
    challengeFilterBar.append(button);
  });
}

function challengeMetaText(challenge, department) {
  const category = String(challenge.category || "");
  const departmentLabel = String(department.label || "");

  if (category.toLowerCase().startsWith(departmentLabel.toLowerCase())) {
    return category;
  }

  return `${departmentLabel} / ${category}`;
}

function challengeIconSvg(type) {
  const paths = {
    casting: [
      '<circle cx="52" cy="48" r="22" />',
      '<path d="M68 64l24 24" />',
      '<path d="M38 44c5-8 23-8 28 0" />',
      '<path d="M42 58c7 6 17 6 24 0" />',
      '<path d="M82 30h16v22" />',
    ],
    project: [
      '<path d="M30 24h48l12 12v60H30z" />',
      '<path d="M78 24v16h16" />',
      '<path d="M42 50h28" />',
      '<path d="M42 66h36" />',
      '<path d="M42 82h22" />',
      '<path d="M28 96l64-64" />',
    ],
    art: [
      '<path d="M35 84c8 8 25 11 40 2 20-12 17-44-6-55-22-11-49 2-50 25-1 11 5 18 16 18h8c5 0 7 6 3 10z" />',
      '<circle cx="42" cy="52" r="3" />',
      '<circle cx="56" cy="43" r="3" />',
      '<circle cx="72" cy="50" r="3" />',
      '<path d="M72 78l24-24" />',
      '<path d="M88 46l8 8" />',
    ],
    sound: [
      '<path d="M28 66a32 32 0 0 1 64 0" />',
      '<path d="M28 66v20c0 6 4 10 10 10h8V64h-8c-6 0-10 4-10 10" />',
      '<path d="M92 66v20c0 6-4 10-10 10h-8V64h8c6 0 10 4 10 10" />',
      '<path d="M52 72l8-10v28l8-10" />',
    ],
    film: [
      '<path d="M22 31h76v58H22z" />',
      '<path d="M22 46h76" />',
      '<path d="M35 31l10 15" />',
      '<path d="M55 31l10 15" />',
      '<path d="M75 31l10 15" />',
      '<path d="M48 62l18 10-18 10z" />',
    ],
    story: [
      '<path d="M28 24h28c8 0 14 6 14 14v58H42c-8 0-14-6-14-14z" />',
      '<path d="M70 38c0-8 6-14 14-14h8v72H70" />',
      '<path d="M42 44h14" />',
      '<path d="M42 58h14" />',
      '<path d="M84 44h8" />',
    ],
    gear: [
      '<path d="M60 38a22 22 0 1 0 0 44 22 22 0 0 0 0-44z" />',
      '<path d="M60 22v12" />',
      '<path d="M60 86v12" />',
      '<path d="M22 60h12" />',
      '<path d="M86 60h12" />',
      '<path d="M33 33l9 9" />',
      '<path d="M78 78l9 9" />',
      '<path d="M87 33l-9 9" />',
      '<path d="M42 78l-9 9" />',
    ],
    shield: [
      '<path d="M60 20l34 12v24c0 23-14 38-34 46-20-8-34-23-34-46V32z" />',
      '<path d="M45 60l10 10 22-25" />',
    ],
    spark: [
      '<path d="M60 18l9 26 27 6-23 16 3 28-16-18-16 18 3-28-23-16 27-6z" />',
      '<path d="M22 28l6 10" />',
      '<path d="M98 28l-6 10" />',
      '<path d="M28 96l10-8" />',
      '<path d="M92 96l-10-8" />',
    ],
    map: [
      '<path d="M24 32l24-10 24 10 24-10v66L72 98 48 88 24 98z" />',
      '<path d="M48 22v66" />',
      '<path d="M72 32v66" />',
      '<path d="M40 55h16" />',
      '<path d="M79 64h10" />',
    ],
  };

  return `<svg viewBox="0 0 120 120" focusable="false" aria-hidden="true">${(paths[type] || paths.map).join("")}</svg>`;
}

function renderMonthlyChallenge() {
  const challenges = currentMonthlyChallenges();
  const month = monthNames[new Date().getMonth()];
  const profile = currentProfile();
  const approvedCredits = Number(profile?.bonusCredits || 0);
  const pool = currentMonthlyCreditTotal();
  const progress = pool ? Math.min(100, Math.round((approvedCredits / pool) * 100)) : 0;

  if (challengeMonth) {
    challengeMonth.textContent = month;
  }

  if (challengeCredits) {
    challengeCredits.textContent = `+${pool}`;
  }

  if (challengeLevel) {
    challengeLevel.textContent = challengeLevelFromCredits(approvedCredits);
  }

  if (challengePlayerCredits) {
    challengePlayerCredits.textContent = approvedCredits;
  }

  if (challengeProgress) {
    challengeProgress.style.width = `${progress}%`;
  }

  if (challengeProgressLabel) {
    challengeProgressLabel.textContent = `${progress}%`;
    challengeProgressLabel.closest(".challenge-orbit")?.style.setProperty("--charge", `${progress * 3.6}deg`);
  }

  if (!challengeList) {
    return;
  }

  renderChallengeDepartmentFilters();

  challengeList.replaceChildren();

  challenges.forEach((challenge, index) => {
    const difficulty = challengeDifficulty(challenge);
    const department = challengeDepartment(challenge);

    if (activeChallengeDepartment !== "all" && department.key !== activeChallengeDepartment) {
      return;
    }

    const card = document.createElement("article");
    const button = document.createElement("button");
    const icon = document.createElement("span");
    const content = document.createElement("span");
    const meta = document.createElement("span");
    const title = document.createElement("strong");
    const summary = document.createElement("small");
    const credits = document.createElement("em");
    const action = document.createElement("span");
    const agent = document.createElement("span");
    const agentHead = document.createElement("span");
    const agentHair = document.createElement("span");
    const agentFace = document.createElement("span");
    const agentBody = document.createElement("span");
    const agentProp = document.createElement("span");
    const agentLegs = document.createElement("span");
    const detail = document.createElement("div");
    const stats = document.createElement("div");

    card.className = "challenge-card";
    card.dataset.difficulty = difficulty.key;
    card.dataset.department = department.key;
    button.type = "button";
    button.className = "challenge-card-button";
    button.setAttribute("aria-expanded", "false");
    icon.className = "challenge-icon";
    icon.dataset.tier = difficulty.tier;
    icon.innerHTML = challengeIconSvg(challengeIconType(challenge));
    content.className = "challenge-card-copy";
    meta.textContent = challengeMetaText(challenge, department);
    title.textContent = challenge.title;
    summary.textContent = challenge.summary;
    credits.className = "challenge-credit-pill";
    credits.textContent = `Reward +${challenge.credits} / $${challenge.credits}`;
    action.className = "challenge-action";
    action.textContent = "Start mission";
    agent.className = "challenge-agent";
    agent.dataset.role = difficulty.key;
    agent.dataset.lane = department.key;
    agent.setAttribute("aria-hidden", "true");
    agentHead.className = "challenge-agent-head";
    agentHair.className = "challenge-agent-hair";
    agentFace.className = "challenge-agent-face";
    agentBody.className = "challenge-agent-body";
    agentProp.className = "challenge-agent-prop";
    agentLegs.className = "challenge-agent-legs";
    agentHead.append(agentHair, agentFace);
    agent.append(agentHead, agentBody, agentProp, agentLegs);
    detail.className = "challenge-card-detail";
    detail.hidden = true;
    stats.className = "challenge-detail-stats";

    const detailTitle = document.createElement("h4");
    const detailText = document.createElement("p");
    const detailList = document.createElement("ul");
    const statDifficulty = document.createElement("span");
    const statProof = document.createElement("span");
    const statReward = document.createElement("span");
    const detailSteps = [
      `Complete the challenge during ${month}.`,
      "Send the artifact, link, screenshot, or short summary to your manager.",
      "Approved credits are added to your profile by an admin. 1 credit = $1.",
    ];

    detailTitle.textContent = "Mission dossier";
    detailText.textContent = challenge.details;
    statDifficulty.innerHTML = `<strong>${difficulty.label}</strong><small>Threat tier ${difficulty.tier}</small>`;
    statProof.innerHTML = `<strong>${department.label}</strong><small>Department lane</small>`;
    statReward.innerHTML = `<strong>+${challenge.credits}</strong><small>Credits / $${challenge.credits}</small>`;
    stats.append(statDifficulty, statProof, statReward);
    detailSteps.forEach((step) => {
      const item = document.createElement("li");
      item.textContent = step;
      detailList.append(item);
    });
    detail.append(detailTitle, stats, detailText, detailList);

    content.append(meta, title, summary);
    button.append(icon, content, agent, credits, action);
    card.append(button, detail);
    challengeList.append(card);

    button.addEventListener("click", () => {
      const isOpen = !detail.hidden;

      challengeList.querySelectorAll(".challenge-card.open").forEach((openCard) => {
        const openButton = openCard.querySelector(".challenge-card-button");
        const openDetail = openCard.querySelector(".challenge-card-detail");
        const openAction = openCard.querySelector(".challenge-action");
        openCard.classList.remove("open");
        openButton?.setAttribute("aria-expanded", "false");
        if (openAction) {
          openAction.textContent = "Start mission";
        }

        if (openDetail) {
          openDetail.hidden = true;
        }
      });

      if (!isOpen) {
        card.classList.add("open");
        button.setAttribute("aria-expanded", "true");
        action.textContent = "Mission active";
        detail.hidden = false;
      }
    });
  });

  if (!challengeList.children.length) {
    const empty = document.createElement("article");
    empty.className = "challenge-empty-state";
    empty.innerHTML = "<strong>No missions in this lane</strong><span>Switch department to see the rest of this month's board.</span>";
    challengeList.append(empty);
  }
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
    bonusCredits: Number(user.bonusCredits || 0),
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

  if (profileBonusCredits) {
    profileBonusCredits.textContent = Number(profile.bonusCredits || 0);
  }

  if (profileBonusPotential) {
    profileBonusPotential.textContent = `+${currentMonthlyCreditTotal()}`;
  }

  if (profileForm) {
    profileForm.elements.profileName.value = profile.name || "";
    profileForm.elements.profileEmail.value = profile.email || "";
    profileForm.elements.profileRole.value = profile.role || "General";
    profileForm.elements.profileDepartment.value = profile.department || "";
    profileForm.elements.profileTimezone.value = profile.timezone || "";
  }

  renderMonthlyChallenge();
  updateAdminVisibility(profile);
  configureRoleSelector(profile);
  renderSectionAdminTools(profile);
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
  const navSection = {
    "document-detail": "documents",
    "project-detail": "projects",
    "bonus-detail": "bonuses",
  }[nextSection] || nextSection;

  if (!target) {
    return;
  }

  sections.forEach((section) => {
    section.classList.toggle("active", section === target);
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.sectionLink === navSection);
  });

  if (nextSection === "documents") {
    showDocumentRole(null);
  }

  if (pageTitle) {
    pageTitle.textContent = titles[nextSection] || titles.overview;
  }

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
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
          <td>
            <input type="number" min="0" step="1" data-user-bonus="${email}" value="${Number(user.bonusCredits || 0)}" />
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

function renderTextList(target, items) {
  if (!target) {
    return;
  }

  target.replaceChildren();
  items.forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    target.append(item);
  });
}

function openProjectDetail(project) {
  if (!project) {
    return;
  }

  if (projectDetailLabel) {
    projectDetailLabel.textContent = project.label || "Project";
  }

  if (projectDetailTitle) {
    projectDetailTitle.textContent = project.title;
  }

  if (projectDetailSummary) {
    projectDetailSummary.textContent = project.summary;
  }

  if (projectDetailStage) {
    projectDetailStage.textContent = project.stage || "Planning";
  }

  if (projectDetailOwner) {
    projectDetailOwner.textContent = project.owner || "Project owner TBD";
  }

  if (projectDetailPriority) {
    projectDetailPriority.textContent = project.priority || "Normal";
  }

  renderTextList(projectDetailRequirements, project.requirements || []);
  renderTextList(projectDetailDeliverables, project.deliverables || []);

  if (projectDetailNotes) {
    projectDetailNotes.textContent = project.notes || "No internal notes have been added yet.";
  }

  showSection("project-detail");

  if (pageTitle) {
    pageTitle.textContent = project.title;
  }

  history.replaceState(null, "", "#project-detail");
}

function projectFromContentItem(item) {
  const bodyLines = String(item.body || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return {
    label: item.label || "Project",
    title: item.title,
    summary: item.summary,
    stage: "Admin-added project",
    owner: "Assigned by admin",
    priority: "Review",
    requirements: bodyLines.length ? bodyLines : ["Review the project brief and confirm what is required next."],
    deliverables: ["Confirm owner", "Confirm next milestone", "Add supporting documents or links"],
    notes: "This project was added manually by an admin. Use the details above as the current internal brief.",
  };
}

function openBonusDetail(documentId) {
  const source = document.getElementById(documentId);

  if (!source || !bonusDetailContent) {
    return;
  }

  const detail = source.cloneNode(true);
  const heading = detail.querySelector("h3");
  const title = heading?.textContent || "Bonus document";

  detail.hidden = false;
  detail.removeAttribute("id");
  heading?.setAttribute("id", "bonus-detail-title");
  bonusDetailContent.replaceChildren(detail);
  showSection("bonus-detail");

  if (pageTitle) {
    pageTitle.textContent = title;
  }

  history.replaceState(null, "", "#bonus-detail");
}

function openDocumentDetail(documentId) {
  const source = document.getElementById(documentId);

  if (!source || !documentDetailContent) {
    return;
  }

  const detail = source.cloneNode(true);
  const heading = detail.querySelector("h3");
  const title = heading?.textContent || "Document";

  detail.hidden = false;
  detail.removeAttribute("id");
  heading?.setAttribute("id", "document-detail-title");
  documentDetailContent.replaceChildren(detail);
  showSection("document-detail");

  if (pageTitle) {
    pageTitle.textContent = title;
  }

  history.replaceState(null, "", "#document-detail");
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

function createProjectCard(item) {
  const card = document.createElement("article");
  const button = document.createElement("button");
  const label = document.createElement("span");
  const title = document.createElement("h3");
  const summary = document.createElement("p");

  card.className = "project-card";
  button.type = "button";
  button.className = "project-button";
  label.textContent = item.label || "Project";
  title.textContent = item.title;
  summary.textContent = item.summary;
  button.append(label, title, summary);
  card.append(button);

  button.addEventListener("click", () => {
    openProjectDetail(projectFromContentItem(item));
  });

  return card;
}

function createDocumentCard(item) {
  const link = document.createElement("a");
  const icon = document.createElement("span");
  const text = document.createElement("span");
  const title = document.createElement("strong");
  const summary = document.createElement("small");

  link.className = "document";
  link.href = "#";
  icon.className = "document-icon";
  icon.textContent = "DOC";
  title.textContent = item.title;
  summary.textContent = item.summary;
  text.append(title, summary);
  link.append(icon, text);

  return link;
}

function renderProjectItems() {
  const list = document.querySelector("[data-project-list]");

  if (!list) {
    return;
  }

  list.querySelectorAll("[data-admin-project]").forEach((element) => element.remove());

  getContentItems()
    .filter((item) => item.section === "projects" && item.type === "project")
    .forEach((item) => {
      const card = createProjectCard(item);
      card.dataset.adminProject = item.id;
      list.append(card);
    });
}

function renderDocumentItems() {
  document.querySelectorAll("[data-admin-document]").forEach((element) => element.remove());
  document.querySelectorAll("[data-doc-role]").forEach((group) => {
    const emptyState = group.querySelector(".document-empty.inline");

    if (emptyState) {
      emptyState.hidden = Boolean(group.querySelector(".document"));
    }
  });

  getContentItems()
    .filter((item) => item.section === "documents")
    .forEach((item) => {
      const role = item.role || "general";
      const group = document.querySelector(`[data-doc-role="${role}"]`);

      if (!group) {
        return;
      }

      const card = createDocumentCard(item);
      card.dataset.adminDocument = item.id;
      group.append(card);

      const emptyState = group.querySelector(".document-empty.inline");
      if (emptyState) {
        emptyState.hidden = true;
      }
    });
}

function renderContentItems() {
  document.querySelectorAll("[data-admin-content-rendered]").forEach((element) => {
    element.remove();
  });

  renderProjectItems();
  renderDocumentItems();

  const items = getContentItems();

  Object.keys(editableSections).forEach((sectionId) => {
    const target = document.querySelector(`[data-section="${sectionId}"]`);
    const sectionItems = items.filter((item) => {
      if (item.section === "documents" || item.type === "project") {
        return false;
      }

      return item.section === sectionId;
    });

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
      typeCell.textContent = contentTypeLabel(item.type);
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

function contentTypeLabel(type) {
  if (type === "document") {
    return "Document";
  }

  if (type === "project") {
    return "Project";
  }

  return "Update";
}

function typeOptionsForSection(sectionId) {
  if (sectionId === "documents") {
    return [
      ["document", "Document"],
    ];
  }

  if (sectionId === "projects") {
    return [
      ["project", "Project"],
      ["update", "Update"],
      ["document", "Document"],
    ];
  }

  return [
    ["update", "Update"],
    ["document", "Document"],
  ];
}

function normalizeContentPayload(formData, fallbackSection = "overview") {
  const section = String(formData.get("contentSection") || fallbackSection);
  let type = String(formData.get("contentType") || "update");
  const title = String(formData.get("contentTitle") || "").trim();
  const summary = String(formData.get("contentSummary") || "").trim();
  const body = String(formData.get("contentBody") || "").trim();
  const label = String(formData.get("contentLabel") || "").trim();
  const role = String(formData.get("contentRole") || "general");

  if (section === "documents") {
    type = "document";
  }

  if (section !== "projects" && type === "project") {
    type = "update";
  }

  return {
    section,
    type,
    label,
    title,
    summary,
    body,
    role,
  };
}

function publishContentItem(payload) {
  const items = getContentItems();
  const createdAt = new Date().toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  const item = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt,
    ...payload,
  };

  items.push(item);
  setContentItems(items);
  renderContentRows();
  renderContentItems();

  return item;
}

function syncContentRoleVisibility(form) {
  const section = form.dataset.fixedSection || form.elements.contentSection?.value || "overview";
  const roleField = form.querySelector("[data-content-role-field]");

  if (roleField) {
    roleField.hidden = section !== "documents";
  }
}

function createSectionAdminForm(sectionId) {
  const sectionTitle = editableSections[sectionId];
  const panel = document.createElement("div");
  const toggle = document.createElement("button");
  const form = document.createElement("form");
  const typeOptions = typeOptionsForSection(sectionId)
    .map(([value, label]) => `<option value="${value}">${label}</option>`)
    .join("");

  panel.className = "section-admin-panel";
  panel.dataset.sectionAdminTools = sectionId;
  toggle.className = "section-admin-toggle";
  toggle.type = "button";
  toggle.textContent = `Edit ${sectionTitle}`;
  form.className = "section-admin-tools";
  form.dataset.fixedSection = sectionId;
  form.hidden = true;
  form.innerHTML = `
    <div class="section-admin-head">
      <div>
        <p class="eyebrow">Admin tools</p>
        <h3>Add or edit ${sectionTitle}</h3>
      </div>
      <span>Visible to admins only</span>
    </div>
    <div class="section-admin-grid">
      <label>
        Type
        <select name="contentType">
          ${typeOptions}
        </select>
      </label>
      <label data-content-role-field>
        Document role
        <select name="contentRole">
          <option value="general">General</option>
          <option value="admin">Admin</option>
          <option value="project-manager">Project Manager</option>
        </select>
      </label>
      <label>
        Label
        <input name="contentLabel" type="text" placeholder="Policy, guide, project, memo" />
      </label>
      <label>
        Title
        <input name="contentTitle" type="text" placeholder="Title employees will see" required />
      </label>
    </div>
    <label>
      Short summary
      <input name="contentSummary" type="text" placeholder="One clear sentence" required />
    </label>
    <label>
      Details
      <textarea name="contentBody" rows="5" placeholder="Add the content, document description, project details, or page update" required></textarea>
    </label>
    <button class="primary-button" type="submit">Publish to this section</button>
    <p class="request-status" data-section-admin-status hidden></p>
  `;

  toggle.addEventListener("click", () => {
    const isOpening = form.hidden;
    form.hidden = !isOpening;
    panel.classList.toggle("open", isOpening);
    toggle.textContent = isOpening ? `Close ${sectionTitle} editor` : `Edit ${sectionTitle}`;
  });

  syncContentRoleVisibility(form);

  form.addEventListener("change", () => {
    syncContentRoleVisibility(form);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    formData.set("contentSection", sectionId);
    const payload = normalizeContentPayload(formData, sectionId);
    const status = form.querySelector("[data-section-admin-status]");

    if (!payload.title || !payload.summary || !payload.body) {
      setRequestStatus(status, "Content was not published. Add a title, summary, and details.", "error");
      return;
    }

    publishContentItem(payload);
    setRequestStatus(status, `Published to ${editableSections[sectionId] || sectionId}.`);
    form.reset();
    syncContentRoleVisibility(form);
  });

  panel.append(toggle, form);
  return panel;
}

function renderSectionAdminTools(profile) {
  document.querySelectorAll("[data-section-admin-tools]").forEach((tool) => tool.remove());

  if (!profile?.admin) {
    return;
  }

  Object.keys(editableSections).forEach((sectionId) => {
    const target = document.querySelector(`[data-section="${sectionId}"]`);

    if (!target) {
      return;
    }

    const tool = createSectionAdminForm(sectionId);
    const anchor = target.querySelector(".section-heading, .intro-panel");

    if (anchor) {
      anchor.insertAdjacentElement("afterend", tool);
    } else {
      target.prepend(tool);
    }
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
    bonusCredits: Number(user.bonusCredits || 0),
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
    bonusCredits: Number(previousProfile.bonusCredits || 0),
  };
  const users = getUsers();

  if (profile.email && users[profile.email]) {
    profile.bonusCredits = Number(users[profile.email].bonusCredits || 0);
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

challengeFilterBar?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-challenge-department]");

  if (button) {
    activeChallengeDepartment = button.dataset.challengeDepartment || "all";
    renderMonthlyChallenge();
  }
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
    bonusCredits: Number(users[email]?.bonusCredits || 0),
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

createUserForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(createUserForm);
  const email = companyEmailFromPrefix(formData.get("createEmailPrefix"));
  const role = formData.get("createRole") || "General";
  const isAdmin = formData.get("createAdmin") === "on" || role === "Admin";
  const name = String(formData.get("createName") || "").trim();
  const password = String(formData.get("createPassword") || inviteTempPassword).trim();
  const bonusCredits = Math.max(0, Number(formData.get("createBonusCredits") || 0));

  if (!email.endsWith(companyEmailDomain) || email === companyEmailDomain) {
    setRequestStatus(createUserStatus, "User was not added. Enter a valid The Banished company email.", "error");
    return;
  }

  if (!name || !password) {
    setRequestStatus(createUserStatus, "User was not added. Add a name and temporary password.", "error");
    return;
  }

  const users = getUsers();
  users[email] = {
    password,
    name,
    role,
    department: users[email]?.department || "",
    timezone: users[email]?.timezone || "America/New_York",
    admin: isAdmin,
    status: users[email]?.status || "Active",
    bonusCredits,
  };

  setUsers(users);
  renderUsers();
  setRequestStatus(createUserStatus, `User added: ${email}.`);
  createUserForm.reset();
  createUserForm.elements.createPassword.value = inviteTempPassword;
  createUserForm.elements.createBonusCredits.value = 0;
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
      users[email].role = "Admin";
    }
  });

  userRows?.querySelectorAll("[data-user-bonus]").forEach((input) => {
    const email = input.dataset.userBonus;
    users[email].bonusCredits = Math.max(0, Number(input.value || 0));
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
  const payload = normalizeContentPayload(formData);

  if (!payload.title || !payload.summary || !payload.body) {
    setRequestStatus(contentStatus, "Content was not published. Add a title, summary, and details.", "error");
    return;
  }

  publishContentItem(payload);
  setRequestStatus(contentStatus, `Published to ${editableSections[payload.section] || payload.section}.`);
  contentForm.reset();
  syncContentRoleVisibility(contentForm);
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

contentForm?.addEventListener("change", () => {
  syncContentRoleVisibility(contentForm);
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

document.querySelectorAll("[data-bonus-page]").forEach((button) => {
  button.addEventListener("click", () => {
    openBonusDetail(button.dataset.bonusPage);
  });
});

document.querySelectorAll("[data-document-page]").forEach((button) => {
  button.addEventListener("click", () => {
    openDocumentDetail(button.dataset.documentPage);
  });
});

document.querySelectorAll("[data-project-page]").forEach((button) => {
  button.addEventListener("click", () => {
    openProjectDetail(projectPages[button.dataset.projectPage]);
  });
});

document.querySelectorAll("[data-return-section]").forEach((button) => {
  button.addEventListener("click", () => {
    const sectionId = button.dataset.returnSection || "overview";
    showSection(sectionId);
    if (button.dataset.returnRole) {
      showDocumentRole(button.dataset.returnRole);
    }
    history.replaceState(null, "", `#${sectionId}`);
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

const internshipPopupCards = document.querySelectorAll("[data-internship-popup]");
const internshipActionButtons = document.querySelectorAll("[data-internship-action]");

function toggleInternshipPopup(card) {
  const detail = card.querySelector(".internship-popover");

  if (!detail) {
    return;
  }

  const isOpen = !detail.hidden;

  internshipPopupCards.forEach((item) => {
    item.classList.remove("open");
    item.setAttribute("aria-expanded", "false");
    const popover = item.querySelector(".internship-popover");

    if (popover) {
      popover.hidden = true;
    }
  });

  if (!isOpen) {
    card.classList.add("open");
    card.setAttribute("aria-expanded", "true");
    detail.hidden = false;
  }
}

internshipPopupCards.forEach((card) => {
  card.addEventListener("click", () => {
    toggleInternshipPopup(card);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleInternshipPopup(card);
    }
  });
});

internshipActionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const edForm = document.querySelector('form[data-label="ED Request"]');
    const details = edForm?.elements.details;

    showSection("ed-requests");
    history.replaceState(null, "", "#ed-requests");

    if (edForm?.elements.type) {
      edForm.elements.type.value = "Assignment request";
    }

    if (details && !details.value) {
      details.placeholder = "Tell ED which internship track you are in, what you have already completed, and what assignment or brief you need next.";
      details.focus();
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

if (contentForm) {
  syncContentRoleVisibility(contentForm);
}

renderMonthlyChallenge();

const savedProfile = getProfile();

if (savedProfile) {
  unlockPortal(savedProfile);
} else {
  showDocumentRole(null);
  renderAdmin();
}
