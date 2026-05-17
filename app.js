const navLinks = document.querySelectorAll("[data-section-link]");
const sections = document.querySelectorAll("[data-section]");
const pageTitle = document.querySelector("[data-page-title]");
const authScreen = document.querySelector("[data-auth-screen]");
const portal = document.querySelector("[data-portal]");
const authForm = document.querySelector("[data-auth-form]");
const authError = document.querySelector("[data-auth-error]");
const authReset = document.querySelector("[data-auth-reset]");
const profileForm = document.querySelector("[data-profile-form]");
const profileEditPanel = document.querySelector(".profile-edit-panel");
const roleButtons = document.querySelectorAll("[data-role-button]");
const documentGroups = document.querySelectorAll("[data-doc-role]");
const documentEmpty = document.querySelector("[data-doc-empty]");
const signOutButton = document.querySelector("[data-sign-out]");
const profileName = document.querySelector("[data-profile-name]");
const profileRole = document.querySelector("[data-profile-role]");
const roleSwitcher = document.querySelector("[data-role-switcher]");
const profileAvatar = document.querySelector("[data-profile-avatar]");
const profileAvatarPreview = document.querySelector("[data-profile-avatar-preview]");
const profileAvatarInput = document.querySelector("[data-profile-avatar-input]");
const profileAvatarRemove = document.querySelector("[data-profile-avatar-remove]");
const profileCountry = document.querySelector("[data-profile-country]");
const profileCountryNote = document.querySelector("[data-profile-country-note]");
const profileBonusCredits = document.querySelector("[data-profile-bonus-credits]");
const profileBonusPotential = document.querySelector("[data-profile-bonus-potential]");
const profileCardName = document.querySelector("[data-profile-card-name]");
const profileCardRole = document.querySelector("[data-profile-card-role]");
const profileCardLevel = document.querySelector("[data-profile-card-level]");
const profileCardCountry = document.querySelector("[data-profile-card-country]");
const profileCardOffice = document.querySelector("[data-profile-card-office]");
const profileCardStatus = document.querySelector("[data-profile-card-status]");
const profileNextRank = document.querySelector("[data-profile-next-rank]");
const profileRankProgress = document.querySelector("[data-profile-rank-progress]");
const overviewName = document.querySelector("[data-overview-name]");
const overviewRole = document.querySelector("[data-overview-role]");
const overviewCredits = document.querySelector("[data-overview-credits]");
const overviewPotential = document.querySelector("[data-overview-potential]");
const overviewLevel = document.querySelector("[data-overview-level]");
const overviewProgress = document.querySelector("[data-overview-progress]");
const challengeMonth = document.querySelector("[data-challenge-month]");
const challengeCredits = document.querySelector("[data-challenge-credits]");
const challengeList = document.querySelector("[data-challenge-list]");
const challengeLevel = document.querySelector("[data-challenge-level]");
const challengeProgress = document.querySelector("[data-challenge-progress]");
const challengeProgressLabel = document.querySelector("[data-challenge-progress-label]");
const challengePlayerCredits = document.querySelector("[data-challenge-player-credits]");
const challengeFilterBar = document.querySelector("[data-challenge-filter-bar]");
const projectFilterBar = document.querySelector("[data-project-filter-bar]");
const projectDetailLabel = document.querySelector("[data-project-detail-label]");
const projectDetailTitle = document.querySelector("[data-project-detail-title]");
const projectDetailSummary = document.querySelector("[data-project-detail-summary]");
const projectDetailStage = document.querySelector("[data-project-detail-stage]");
const projectDetailOwner = document.querySelector("[data-project-detail-owner]");
const projectDetailPriority = document.querySelector("[data-project-detail-priority]");
const projectDetailSignal = document.querySelector("[data-project-detail-signal]");
const projectDetailFocus = document.querySelector("[data-project-detail-focus]");
const projectDetailProgressLabel = document.querySelector("[data-project-detail-progress-label]");
const projectDetailProgressBar = document.querySelector("[data-project-detail-progress-bar]");
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
const unifiedRequestForm = document.querySelector("[data-unified-request-form]");
const scriptReviewForm = document.querySelector("[data-script-review-form]");
const scriptReviewStatus = document.querySelector("[data-script-review-status]");
const scriptFormatSelect = document.querySelector("[data-script-format]");
const scriptToolbar = document.querySelector("[data-script-toolbar]");
const scriptPagesInput = document.querySelector("[data-script-pages]");
const scriptFormatHint = document.querySelector("[data-script-format-hint]");
const scriptWordCount = document.querySelector("[data-script-word-count]");
const scriptLineCount = document.querySelector("[data-script-line-count]");
const scriptEditor = document.querySelector("[data-script-editor]");
const scriptSaveStatus = document.querySelector("[data-script-save-status]");
const scriptExportButtons = document.querySelectorAll("[data-script-export]");
const storyboardForm = document.querySelector("[data-storyboard-form]");
const storyboardOutput = document.querySelector("[data-storyboard-output]");
const comicReviewForm = document.querySelector("[data-comic-review-form]");
const comicReviewStatus = document.querySelector("[data-comic-review-status]");
const comicFilesInput = document.querySelector("[data-comic-files]");
const comicPreview = document.querySelector("[data-comic-preview]");
const marketingPlannerForm = document.querySelector("[data-marketing-planner-form]");
const marketingPlanOutput = document.querySelector("[data-marketing-plan-output]");
const marketingAudience = document.querySelector("[data-marketing-audience]");
const marketingStage = document.querySelector("[data-marketing-stage]");
const marketingChannelCount = document.querySelector("[data-marketing-channel-count]");
const requestDestination = document.querySelector("[data-request-destination]");
const calendarGrid = document.querySelector("[data-calendar-grid]");
const calendarFilterButtons = document.querySelectorAll("[data-calendar-filter]");
const calendarTotal = document.querySelector("[data-calendar-total]");
const calendarNext = document.querySelector("[data-calendar-next]");
const calendarFocus = document.querySelector("[data-calendar-focus]");
const calendarDetailTitle = document.querySelector("[data-calendar-detail-title]");
const calendarDetailCopy = document.querySelector("[data-calendar-detail-copy]");
const calendarDetailList = document.querySelector("[data-calendar-detail-list]");
const calendarScopeNote = document.querySelector("[data-calendar-scope-note]");

const profileStoreKey = "tb-internal-profile";
const usersStoreKey = "tb-internal-users";
const requestsStoreKey = "tb-internal-requests";
const contentStoreKey = "tb-internal-content";
const scriptDraftStoreKey = "tb-script-studio-draft";
const inviteTempPassword = "PortalInvite12!";
const companyEmailDomain = "@the-banished.com";
let activeChallengeDepartment = "all";
let activeProjectFilter = "all";
let activeCalendarFilter = "my";
let selectedCalendarDate = "";
let pendingAvatarDataUrl = null;
let scriptAutosaveTimer = null;
const companyCalendarYear = 2026;
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
    employmentType: "employee",
    calendarRegion: "us",
    ipCountryCode: "US",
    ipCountryName: "United States",
    avatarDataUrl: "",
    admin: true,
    status: "Active",
    bonusCredits: 0,
  },
  "general@the-banished.com": {
    password: inviteTempPassword,
    name: "Employee User",
    role: "Employee",
    department: "Operations",
    timezone: "America/New_York",
    employmentType: "employee",
    calendarRegion: "us",
    ipCountryCode: "US",
    ipCountryName: "United States",
    avatarDataUrl: "",
    admin: false,
    status: "Active",
    bonusCredits: 0,
  },
  "writer@the-banished.com": {
    password: inviteTempPassword,
    name: "Screenwriter User",
    role: "Screenwriter",
    department: "Writing Room",
    timezone: "America/New_York",
    employmentType: "employee",
    calendarRegion: "us",
    ipCountryCode: "US",
    ipCountryName: "United States",
    avatarDataUrl: "",
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
    employmentType: "employee",
    calendarRegion: "us",
    ipCountryCode: "US",
    ipCountryName: "United States",
    avatarDataUrl: "",
    admin: false,
    status: "Active",
    bonusCredits: 0,
  },
  "intern@the-banished.com": {
    password: inviteTempPassword,
    name: "Intern User",
    role: "Intern",
    department: "Internship",
    timezone: "America/New_York",
    employmentType: "employee",
    calendarRegion: "us",
    ipCountryCode: "US",
    ipCountryName: "United States",
    avatarDataUrl: "",
    admin: false,
    status: "Active",
    bonusCredits: 0,
  },
};

const titles = {
  overview: "The Banished employee hub",
  announcements: "Company announcements",
  calendar: "My calendar",
  documents: "Company documents",
  "document-detail": "Document detail",
  projects: "Projects",
  "project-detail": "Project detail",
  "script-studio": "Script Studio",
  storyboards: "AI Storyboards",
  "comic-review": "Comic Artist Review",
  marketing: "Marketing",
  bonuses: "Bonuses",
  "bonus-detail": "Bonus document",
  benefits: "Benefits and support",
  holidays: "Holidays and days off",
  culture: "Culture and operating principles",
  training: "Training resources",
  internship: "Internship resources",
  "monthly-challenge": "Challenge of the Month",
  requests: "Request center",
  admin: "Admin console",
  profile: "Profile",
};

const editableSections = {
  overview: "Overview",
  announcements: "Announcements",
  calendar: "Calendar",
  documents: "Documents",
  projects: "Projects",
  "script-studio": "Script Studio",
  storyboards: "AI Storyboards",
  "comic-review": "Comic Review",
  marketing: "Marketing",
  bonuses: "Bonuses",
  benefits: "Benefits",
  holidays: "Holidays",
  culture: "Culture",
  training: "Training",
  internship: "Internship",
  "monthly-challenge": "Challenge of the Month",
  requests: "Requests",
};

const holidayDescriptions = {
  "The Banished Foundation Day": "The company's own birthday on October 31. The guide marks it as a shortened workday plus a company celebration for everyone.",
  "Pride Day": "Recognizes LGBTQ+ history, visibility, and civil rights. June 28 is tied to the Stonewall uprising, a major turning point in the modern Pride movement.",
  "New Year's Day": "The first day of the Gregorian calendar year, widely used for rest, reflection, new goals, and time with family after year-end holidays.",
  "Martin Luther King Jr. Day": "Honors Dr. Martin Luther King Jr.'s leadership in the US civil rights movement and his work toward racial justice, nonviolence, and public service.",
  "Presidents' Day": "A US federal holiday rooted in George Washington's birthday and now commonly used to reflect on the history of the American presidency.",
  "Memorial Day": "A US day of remembrance for military service members who died while serving. It is traditionally observed with memorials and moments of reflection.",
  Juneteenth: "Commemorates June 19, 1865, when enslaved people in Galveston, Texas learned they were free, marking a profound milestone in the end of slavery in the US.",
  "Independence Day": "Marks the adoption of the Declaration of Independence on July 4, 1776 and is widely associated with civic identity, community gatherings, and national history.",
  "Labor Day": "Recognizes workers, labor rights, and the labor movement's role in shaping wages, working conditions, and the modern workweek.",
  "Veterans Day": "Honors military veterans and their service. It falls on November 11, the date associated with the armistice that ended World War I.",
  "Thanksgiving Day": "A US holiday centered on gratitude and gathering. It also carries complex historical meaning connected to Indigenous peoples and colonial history.",
  "Day After Thanksgiving": "The Friday after Thanksgiving is widely used for extended family time, travel, and recovery after the national holiday.",
  "Christmas Day": "A Christian holiday celebrating the birth of Jesus Christ, also widely observed culturally with family gatherings, giving, and year-end traditions.",
  "Cesar Chavez Day": "Honors Cesar Chavez, labor leader and civil rights activist known for organizing farm workers and advancing worker dignity and fair treatment.",
  "Good Friday": "A Christian observance marking the crucifixion of Jesus before Easter Sunday. It is a statutory holiday in many Canadian provinces.",
  "Easter Monday": "The Monday after Easter Sunday. The updated Canadian holiday guide lists it as a national statutory holiday for Canada-based team members.",
  "Victoria Day": "A Canadian holiday honoring Queen Victoria's birthday and the Crown in Canada, often treated as the unofficial start of the summer season.",
  "Canada Day": "Canada's national day, marking Canadian Confederation on July 1, 1867, when colonies united into the Dominion of Canada.",
  "Civic Holiday": "A summer public holiday observed in many Canadian provinces. The guide notes it applies to everyone in Canada except Quebec.",
  "Labour Day": "Canada's Labour Day recognizes workers and the labor movement, similar in spirit to the US holiday but rooted in Canadian labor history.",
  "National Day for Truth and Reconciliation": "A Canadian day of reflection on the history and continuing impact of residential schools and a moment to honor Indigenous communities.",
  "Thanksgiving Day (Canada)": "A Canadian holiday for gratitude and harvest traditions, observed in October and distinct from the later US Thanksgiving.",
  "Remembrance Day": "A Canadian day of remembrance for armed forces members who died in service, observed on November 11 with ceremonies and poppies.",
  "Boxing Day": "Observed the day after Christmas in Canada and other Commonwealth countries, traditionally associated with giving, visiting, and post-holiday rest.",
  "Saint-Jean-Baptiste Day": "Quebec's national holiday, celebrating French-Canadian culture, heritage, language, and community identity.",
  "Winter Break": "A year-end pause spanning major holiday observances and the transition into a new calendar year, allowing meaningful rest and reset.",
  "Birthday Off": "A personal observance of an employee's birthday, recognizing an individual milestone rather than a public or national holiday.",
  "Mental Health Day": "A dedicated day for rest, recovery, and emotional wellbeing, recognizing that sustainable work depends on mental health.",
  "Volunteer Day": "A day for service and civic contribution, giving time to a cause, community, or organization that matters personally.",
  "Floating Holidays": "Two flexible days per year for cultural, religious, family, or personal observances that may not appear on the standard company calendar.",
  "Personal Recharge Days": "Two separate monthly day-offs for personal recovery. They are not PTO, not sick days, reset on the first day of each month, and do not roll over.",
  "International Holiday": "A home-country or cultural observance requested individually so employees can honor meaningful holidays from their own background.",
  "Halloween at The Banished Inc.": "High-energy, creative, optional, and competitive: costume contest, categories, prizes, remote decorating, and a pumpkin-themed food spread.",
  "End of Year Celebration": "A warm company gathering in the second week of December, with dinner or grazing stations and a remote toast so the full team can connect.",
  "Project Wrap Celebration": "Every closed project gets marked. Smaller projects may get a team dinner, medium projects an evening out, and major productions a full wrap party.",
  "Hackathons and Game Jams": "A dedicated window, usually 24 hours, where developers, designers, and writers collaborate on something new and finish something tangible.",
  "Movie Nights and Screenwriting Meetups": "A craft space for film, television, and narrative discussion, with in-office screenings or remote viewing and structured conversation.",
  "Workshops and Knowledge-Sharing Sessions": "Open sessions for masterclasses, panels, webinars, and skill-building. Education handles logistics once a session is approved.",
  "Themed Thursdays": "A monthly optional theme announced at least one week in advance, with a quick sign-off from Organizational before it goes out.",
};

const calendarWeekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const calendarFilterLabels = {
  my: "My calendar",
  all: "All",
  company: "Company",
  us: "US",
  canada: "Canada",
  celebration: "Events",
  break: "Breaks",
};

function parseCalendarDate(dateString) {
  return new Date(`${dateString}T12:00:00`);
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function makeCalendarRange(startDate, endDate, event) {
  const dates = [];
  const cursor = parseCalendarDate(startDate);
  const final = parseCalendarDate(endDate);

  while (cursor <= final) {
    dates.push({
      ...event,
      date: toDateKey(cursor),
    });
    cursor.setDate(cursor.getDate() + 1);
  }

  return dates;
}

const companyCalendarEvents = [
  {
    date: "2026-01-01",
    title: "New Year's Day",
    shortTitle: "New Year",
    categories: ["us", "canada"],
    scope: "US + Canada",
    type: "Paid holiday",
    description: holidayDescriptions["New Year's Day"],
  },
  {
    date: "2026-01-01",
    title: "Winter Break",
    shortTitle: "Winter Break",
    categories: ["break"],
    scope: "Company-wide",
    type: "Company break",
    description: "The final day of the winter break window that runs from December 25 through January 1.",
  },
  {
    date: "2026-01-19",
    title: "Martin Luther King Jr. Day",
    shortTitle: "MLK Day",
    categories: ["us"],
    scope: "US",
    type: "Paid holiday",
    description: holidayDescriptions["Martin Luther King Jr. Day"],
  },
  {
    date: "2026-02-16",
    title: "Presidents' Day",
    shortTitle: "Presidents",
    categories: ["us"],
    scope: "US",
    type: "Paid holiday",
    description: holidayDescriptions["Presidents' Day"],
  },
  {
    date: "2026-03-31",
    title: "Cesar Chavez Day",
    shortTitle: "Cesar Chavez",
    categories: ["us"],
    scope: "California",
    type: "State holiday",
    description: holidayDescriptions["Cesar Chavez Day"],
  },
  {
    date: "2026-04-03",
    title: "Good Friday",
    shortTitle: "Good Friday",
    categories: ["canada"],
    scope: "Canada",
    type: "Statutory holiday",
    description: holidayDescriptions["Good Friday"],
  },
  {
    date: "2026-04-06",
    title: "Easter Monday",
    shortTitle: "Easter Mon",
    categories: ["canada"],
    scope: "Canada",
    type: "Statutory holiday",
    description: holidayDescriptions["Easter Monday"],
  },
  {
    date: "2026-05-18",
    title: "Victoria Day",
    shortTitle: "Victoria",
    categories: ["canada"],
    scope: "Canada",
    type: "Statutory holiday",
    description: holidayDescriptions["Victoria Day"],
  },
  {
    date: "2026-05-25",
    title: "Memorial Day",
    shortTitle: "Memorial",
    categories: ["us"],
    scope: "US",
    type: "Paid holiday",
    description: holidayDescriptions["Memorial Day"],
  },
  {
    date: "2026-06-19",
    title: "Juneteenth",
    shortTitle: "Juneteenth",
    categories: ["us"],
    scope: "US",
    type: "Paid holiday",
    description: holidayDescriptions.Juneteenth,
  },
  {
    date: "2026-06-24",
    title: "Saint-Jean-Baptiste Day",
    shortTitle: "St-Jean",
    categories: ["canada"],
    scope: "Quebec",
    type: "Provincial holiday",
    description: holidayDescriptions["Saint-Jean-Baptiste Day"],
  },
  {
    date: "2026-06-28",
    title: "Pride Day",
    shortTitle: "Pride",
    categories: ["company"],
    scope: "Everyone",
    type: "Company day",
    description: holidayDescriptions["Pride Day"],
  },
  {
    date: "2026-07-01",
    title: "Canada Day",
    shortTitle: "Canada Day",
    categories: ["canada"],
    scope: "Canada",
    type: "Statutory holiday",
    description: holidayDescriptions["Canada Day"],
  },
  {
    date: "2026-07-04",
    title: "Independence Day",
    shortTitle: "July 4",
    categories: ["us"],
    scope: "US",
    type: "Paid holiday",
    description: holidayDescriptions["Independence Day"],
  },
  {
    date: "2026-08-03",
    title: "Civic Holiday",
    shortTitle: "Civic",
    categories: ["canada"],
    scope: "Canada, excluding Quebec",
    type: "Regional holiday",
    description: holidayDescriptions["Civic Holiday"],
  },
  {
    date: "2026-09-07",
    title: "Labor Day / Labour Day",
    shortTitle: "Labor Day",
    categories: ["us", "canada"],
    scope: "US + Canada",
    type: "Paid holiday",
    description: "US Labor Day and Canadian Labour Day both land on the first Monday in September.",
  },
  {
    date: "2026-09-30",
    title: "National Day for Truth and Reconciliation",
    shortTitle: "Truth + Reconciliation",
    categories: ["canada"],
    scope: "Canada",
    type: "Statutory holiday",
    description: holidayDescriptions["National Day for Truth and Reconciliation"],
  },
  {
    date: "2026-10-12",
    title: "Thanksgiving Day (Canada)",
    shortTitle: "Thanksgiving CA",
    categories: ["canada"],
    scope: "Canada",
    type: "Statutory holiday",
    description: holidayDescriptions["Thanksgiving Day (Canada)"],
  },
  {
    date: "2026-10-31",
    title: "The Banished Foundation Day",
    shortTitle: "Foundation",
    categories: ["company"],
    scope: "Everyone",
    type: "Company day",
    description: holidayDescriptions["The Banished Foundation Day"],
  },
  {
    date: "2026-10-31",
    title: "Halloween at The Banished Inc.",
    shortTitle: "Halloween",
    categories: ["celebration"],
    scope: "Optional",
    type: "Company celebration",
    description: holidayDescriptions["Halloween at The Banished Inc."],
  },
  {
    date: "2026-11-11",
    title: "Veterans Day / Remembrance Day",
    shortTitle: "Nov 11",
    categories: ["us", "canada"],
    scope: "US + Canada",
    type: "Paid holiday",
    description: "Veterans Day in the US and Remembrance Day in Canada share November 11 as a day of service and remembrance.",
  },
  {
    date: "2026-11-26",
    title: "Thanksgiving Day",
    shortTitle: "Thanksgiving US",
    categories: ["us"],
    scope: "US",
    type: "Paid holiday",
    description: holidayDescriptions["Thanksgiving Day"],
  },
  {
    date: "2026-11-27",
    title: "Day After Thanksgiving",
    shortTitle: "After Thanksgiving",
    categories: ["us"],
    scope: "US",
    type: "Paid holiday",
    description: holidayDescriptions["Day After Thanksgiving"],
  },
  {
    date: "2026-12-10",
    title: "End of Year Celebration",
    shortTitle: "Year End",
    categories: ["celebration"],
    scope: "Optional",
    type: "Company celebration",
    description: holidayDescriptions["End of Year Celebration"],
  },
  {
    date: "2026-12-25",
    title: "Christmas Day",
    shortTitle: "Christmas",
    categories: ["us", "canada"],
    scope: "US + Canada",
    type: "Paid holiday",
    description: holidayDescriptions["Christmas Day"],
  },
  {
    date: "2026-12-26",
    title: "Boxing Day",
    shortTitle: "Boxing Day",
    categories: ["canada"],
    scope: "Canada",
    type: "Statutory holiday",
    description: holidayDescriptions["Boxing Day"],
  },
  ...makeCalendarRange("2026-12-25", "2026-12-31", {
    title: "Winter Break",
    shortTitle: "Winter Break",
    categories: ["break"],
    scope: "Company-wide",
    type: "Company break",
    description: holidayDescriptions["Winter Break"],
  }),
].sort((a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title));

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
    summary: "Talent search, shortlists, and cleaner casting data for production teams.",
    categories: ["it"],
    signal: "Discovery",
    progress: 42,
    focus: "Make the casting workflow clear enough to build: data, review steps, and permissions.",
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
    summary: "Core universe, canon, visuals, and internal planning for the flagship IP.",
    categories: ["film", "comics"],
    signal: "Flagship",
    progress: 58,
    focus: "Keep canon, visual language, and approved materials easy to find and trust.",
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
    summary: "Advertising-world film package with a strong visual hook and identity conflict.",
    categories: ["film"],
    signal: "Active",
    progress: 52,
    focus: "Shape the visual rules so the concept supports character, pressure, and feasibility.",
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
    summary: "Dark romantic comedy with sharp emotional rules and an impossible match.",
    categories: ["film"],
    signal: "Tone lock",
    progress: 46,
    focus: "Keep the comedy sharp while the relationship logic stays clear and pitchable.",
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
    summary: "Comics/IP mythology about students pulled into mythic Horsemen powers.",
    categories: ["comics"],
    signal: "World rules",
    progress: 36,
    focus: "Lock the mythology rules early so powers, costs, and visuals stay consistent.",
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

const roleNames = ["Admin", "Screenwriter", "Project Manager", "Intern", "Employee"];

const roleSlugs = {
  Admin: "admin",
  Screenwriter: "screenwriter",
  "Project Manager": "project-manager",
  Intern: "intern",
  Employee: "employee",
  General: "employee",
};

const roleSectionAccess = {
  Admin: [
    "overview",
    "announcements",
    "calendar",
    "documents",
    "projects",
    "script-studio",
    "storyboards",
    "comic-review",
    "marketing",
    "bonuses",
    "monthly-challenge",
    "benefits",
    "holidays",
    "culture",
    "training",
    "internship",
    "requests",
    "admin",
    "profile",
  ],
  Screenwriter: [
    "overview",
    "announcements",
    "calendar",
    "documents",
    "projects",
    "script-studio",
    "storyboards",
    "comic-review",
    "marketing",
    "bonuses",
    "monthly-challenge",
    "benefits",
    "holidays",
    "culture",
    "requests",
    "profile",
  ],
  "Project Manager": [
    "overview",
    "announcements",
    "calendar",
    "documents",
    "projects",
    "storyboards",
    "comic-review",
    "marketing",
    "bonuses",
    "monthly-challenge",
    "benefits",
    "holidays",
    "culture",
    "training",
    "internship",
    "requests",
    "profile",
  ],
  Intern: [
    "overview",
    "announcements",
    "calendar",
    "documents",
    "monthly-challenge",
    "holidays",
    "culture",
    "internship",
    "requests",
    "profile",
  ],
  Employee: [
    "overview",
    "announcements",
    "calendar",
    "documents",
    "projects",
    "storyboards",
    "comic-review",
    "marketing",
    "bonuses",
    "monthly-challenge",
    "benefits",
    "holidays",
    "culture",
    "training",
    "internship",
    "requests",
    "profile",
  ],
};

const detailSectionParents = {
  "document-detail": "documents",
  "project-detail": "projects",
  "bonus-detail": "bonuses",
};

function normalizeRole(role) {
  const rawRole = String(role || "").trim();
  const matchedRole = roleNames.find((item) => item.toLowerCase() === rawRole.toLowerCase());

  if (matchedRole) {
    return matchedRole;
  }

  if (rawRole.toLowerCase() === "general") {
    return "Employee";
  }

  return "Employee";
}

const scriptStudioModes = {
  film: {
    label: "Film screenplay",
    hint: "Film format uses scene headings, visual action, character cues, dialogue, and transitions.",
    placeholder: `FADE IN:

INT. LOCATION - DAY

Action lines stay visual, present tense, and playable.

                          CHARACTER
             Dialogue sits under the character cue.

CUT TO:`,
    tools: [
      ["scene", "Scene", "INT. LOCATION - DAY\n\n"],
      ["action", "Action", "Action line in present tense.\n\n"],
      ["character", "Character", "                          CHARACTER\n"],
      ["dialogue", "Dialogue", "             Dialogue line.\n\n"],
      ["parenthetical", "Beat", "                    (quietly)\n"],
      ["transition", "Transition", "CUT TO:\n\n"],
    ],
  },
  series: {
    label: "Series / TV script",
    hint: "Series format keeps act breaks clear and uses tight scene work for production-friendly review.",
    placeholder: `TEASER

INT. LOCATION - NIGHT

Action establishes the scene and story engine.

                          CHARACTER
             Dialogue pushes the beat forward.

END OF TEASER`,
    tools: [
      ["act", "Act", "ACT ONE\n\n"],
      ["scene", "Scene", "INT. LOCATION - DAY\n\n"],
      ["action", "Action", "Action beat.\n\n"],
      ["character", "Character", "                          CHARACTER\n"],
      ["dialogue", "Dialogue", "             Dialogue line.\n\n"],
      ["end-act", "End Act", "END OF ACT ONE\n\n"],
    ],
  },
  short: {
    label: "Short / other screenwriting",
    hint: "Short-form scripts still use standard screenplay language, but keep setup and payoff lean.",
    placeholder: `FADE IN:

EXT. LOCATION - DAY

One clear visual image starts the piece.

                          CHARACTER
             One clean line that reveals need or conflict.

FADE OUT.`,
    tools: [
      ["scene", "Scene", "EXT. LOCATION - DAY\n\n"],
      ["image", "Image", "A clear visual image.\n\n"],
      ["character", "Character", "                          CHARACTER\n"],
      ["dialogue", "Dialogue", "             Dialogue line.\n\n"],
      ["transition", "Transition", "FADE OUT.\n\n"],
    ],
  },
  comic: {
    label: "Comic book script",
    hint: "Comic format is page-first and panel-first: page number, panel description, dialogue, caption, and SFX.",
    placeholder: `PAGE 1

Panel 1
Description of the frame, action, and camera feel.

CAPTION:
Caption text.

CHARACTER:
Dialogue balloon text.

SFX:
Sound effect.`,
    tools: [
      ["page", "Page", "PAGE 1\n\n"],
      ["panel", "Panel", "Panel 1\nDescription of the frame.\n\n"],
      ["caption", "Caption", "CAPTION:\nCaption text.\n\n"],
      ["character", "Dialogue", "CHARACTER:\nDialogue balloon text.\n\n"],
      ["sfx", "SFX", "SFX:\nSound effect.\n\n"],
      ["note", "Art Note", "ART NOTE:\nVisual reference or continuity note.\n\n"],
    ],
  },
};

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
    const merged = mergeUserDirectory(users);
    setUsers(merged);
    return merged;
  }

  const mergedDefaults = mergeUserDirectory(defaultUsers);
  writeJson(usersStoreKey, mergedDefaults);
  return mergedDefaults;
}

function setUsers(users) {
  writeJson(usersStoreKey, users);
}

function mergeUserDirectory(users = {}) {
  const merged = { ...users };

  Object.entries(defaultUsers).forEach(([email, defaultUser]) => {
    merged[email] = {
      ...defaultUser,
      ...(users[email] || {}),
    };

    if (!merged[email].password) {
      merged[email].password = defaultUser.password;
    }
  });

  merged["support@the-banished.com"] = {
    ...merged["support@the-banished.com"],
    password: defaultUsers["support@the-banished.com"].password,
    role: "Admin",
    admin: true,
    status: "Active",
  };

  Object.keys(merged).forEach((email) => {
    const role = normalizeRole(merged[email]?.role);
    const isAdmin = Boolean(merged[email]?.admin || role === "Admin");

    merged[email] = {
      ...merged[email],
      role: isAdmin ? "Admin" : role,
      admin: isAdmin,
    };
  });

  return merged;
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

function renderProfileAvatar(target, profile, avatarOverride = null) {
  if (!target) {
    return;
  }

  const avatarDataUrl = avatarOverride !== null ? avatarOverride : profile?.avatarDataUrl || "";
  target.replaceChildren();
  target.classList.toggle("has-image", Boolean(avatarDataUrl));

  if (avatarDataUrl) {
    const image = document.createElement("img");
    image.src = avatarDataUrl;
    image.alt = "";
    target.append(image);
    return;
  }

  target.textContent = initialsFromName(profile?.name || profile?.email || "TB");
}

function updateAvatarPreviews(profile) {
  const avatarOverride = pendingAvatarDataUrl !== null ? pendingAvatarDataUrl : null;
  renderProfileAvatar(profileAvatar, profile, avatarOverride);
  renderProfileAvatar(profileAvatarPreview, profile, avatarOverride);
}

function roleToSlug(role) {
  return roleSlugs[normalizeRole(role)] || "employee";
}

function slugToRole(slug) {
  if (slug === "general") {
    return "Employee";
  }

  return roleNames.find((role) => roleToSlug(role) === slug) || "Employee";
}

function documentRoleForProfile(profile) {
  const role = normalizeRole(profile?.role);

  if (role === "Admin") {
    return "admin";
  }

  if (role === "Project Manager") {
    return "project-manager";
  }

  return "general";
}

function sectionAccessKey(sectionId) {
  const normalizedSection = normalizeSectionId(sectionId || "overview");
  return detailSectionParents[normalizedSection] || normalizedSection;
}

function allowedSectionsForProfile(profile = currentProfile()) {
  const role = normalizeRole(profile?.role);
  const accessRole = profile?.admin || role === "Admin" ? "Admin" : role;
  return new Set(roleSectionAccess[accessRole] || roleSectionAccess.Employee);
}

function canAccessSection(sectionId, profile = currentProfile()) {
  const accessKey = sectionAccessKey(sectionId);
  return allowedSectionsForProfile(profile).has(accessKey);
}

function firstAllowedSection(profile = currentProfile()) {
  const allowed = allowedSectionsForProfile(profile);
  return allowed.has("overview") ? "overview" : Array.from(allowed)[0] || "overview";
}

function updateRoleNavigation(profile = currentProfile()) {
  navLinks.forEach((link) => {
    const targetSection = normalizeSectionId(link.dataset.sectionLink || "overview");
    const adminOnly = link.hasAttribute("data-admin-only") && !profile?.admin;
    link.hidden = adminOnly || !canAccessSection(targetSection, profile);
  });

  document.querySelectorAll(".nav .nav-link:not([hidden]) span").forEach((number, index) => {
    number.textContent = String(index + 1).padStart(2, "0");
  });
}

function activeSectionId() {
  return document.querySelector(".portal-section.active")?.dataset.section || "overview";
}

function switchPortalRole(role) {
  const current = currentProfile();

  if (!current) {
    return;
  }

  const nextRole = normalizeRole(role);
  const nextProfile = {
    ...current,
    role: nextRole,
    admin: nextRole === "Admin",
  };
  const requestedSection = activeSectionId();
  const nextSection = canAccessSection(requestedSection, nextProfile) ? requestedSection : firstAllowedSection(nextProfile);

  setProfile(nextProfile);
  applyProfile(nextProfile);
  showSection(nextSection);
  history.replaceState(null, "", `#${nextSection}`);
}

function scriptModeConfig() {
  return scriptStudioModes[scriptFormatSelect?.value] || scriptStudioModes.film;
}

function scriptBlockType(snippetKey) {
  return {
    act: "scene",
    scene: "scene",
    action: "action",
    image: "action",
    character: "character",
    dialogue: "dialogue",
    parenthetical: "parenthetical",
    transition: "transition",
    "end-act": "transition",
    page: "comic-page",
    panel: "comic-panel",
    caption: "comic-caption",
    sfx: "comic-sfx",
    note: "comic-note",
  }[snippetKey] || "action";
}

function scriptText() {
  if (scriptEditor) {
    return Array.from(scriptEditor.querySelectorAll(".script-block"))
      .map((block) => block.innerText.trim())
      .filter(Boolean)
      .join("\n\n") || scriptEditor.innerText.trim();
  }

  return scriptPagesInput?.value.trim() || "";
}

function syncScriptDraftFromEditor() {
  if (scriptPagesInput) {
    scriptPagesInput.value = scriptText();
  }

  updateScriptStats();
}

function setScriptAutosaveStatus(message) {
  if (scriptSaveStatus) {
    scriptSaveStatus.textContent = message;
  }
}

function scriptDraftPayload() {
  if (!scriptReviewForm) {
    return null;
  }

  syncScriptDraftFromEditor();

  return {
    title: scriptReviewForm.elements.scriptTitle?.value || "",
    format: scriptFormatSelect?.value || "film",
    project: scriptReviewForm.elements.scriptProject?.value || "The Banished",
    priority: scriptReviewForm.elements.scriptPriority?.value || "General notes",
    logline: scriptReviewForm.elements.scriptLogline?.value || "",
    notes: scriptReviewForm.elements.scriptNotes?.value || "",
    editorHtml: scriptEditor?.innerHTML || "",
    text: scriptPagesInput?.value || "",
    savedAt: Date.now(),
  };
}

function saveScriptDraft() {
  const payload = scriptDraftPayload();

  if (!payload) {
    return;
  }

  writeJson(scriptDraftStoreKey, payload);
  setScriptAutosaveStatus("Saved just now");
}

function scheduleScriptAutosave() {
  if (!scriptReviewForm) {
    return;
  }

  window.clearTimeout(scriptAutosaveTimer);
  setScriptAutosaveStatus("Saving...");
  scriptAutosaveTimer = window.setTimeout(saveScriptDraft, 450);
}

function restoreScriptDraft() {
  const savedDraft = readJson(scriptDraftStoreKey, null);

  if (!savedDraft || !scriptReviewForm) {
    return;
  }

  if (scriptReviewForm.elements.scriptTitle) {
    scriptReviewForm.elements.scriptTitle.value = savedDraft.title || "";
  }

  if (scriptFormatSelect) {
    scriptFormatSelect.value = savedDraft.format || "film";
  }

  if (scriptReviewForm.elements.scriptProject) {
    scriptReviewForm.elements.scriptProject.value = savedDraft.project || "The Banished";
  }

  if (scriptReviewForm.elements.scriptPriority) {
    scriptReviewForm.elements.scriptPriority.value = savedDraft.priority || "General notes";
  }

  if (scriptReviewForm.elements.scriptLogline) {
    scriptReviewForm.elements.scriptLogline.value = savedDraft.logline || "";
  }

  if (scriptReviewForm.elements.scriptNotes) {
    scriptReviewForm.elements.scriptNotes.value = savedDraft.notes || "";
  }

  if (scriptEditor) {
    scriptEditor.innerHTML = savedDraft.editorHtml || "";
  }

  if (scriptPagesInput) {
    scriptPagesInput.value = savedDraft.text || "";
  }

  const savedAt = savedDraft.savedAt ? new Date(savedDraft.savedAt).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }) : "";
  setScriptAutosaveStatus(savedAt ? `Autosaved ${savedAt}` : "Autosave restored");
}

function updateScriptStats() {
  const text = scriptText();
  const words = text ? text.split(/\s+/).length : 0;
  const lines = text ? text.split("\n").length : 0;

  if (scriptWordCount) {
    scriptWordCount.textContent = words;
  }

  if (scriptLineCount) {
    scriptLineCount.textContent = lines;
  }
}

function renderScriptToolbar() {
  if (!scriptToolbar) {
    return;
  }

  const config = scriptModeConfig();
  scriptToolbar.innerHTML = config.tools
    .map(([key, label]) => `<button type="button" data-script-snippet="${key}">${label}</button>`)
    .join("");

  if (scriptFormatHint) {
    scriptFormatHint.textContent = config.hint;
  }

  if (scriptPagesInput && !scriptPagesInput.value) {
    scriptPagesInput.placeholder = config.placeholder;
  }

  if (scriptEditor) {
    scriptEditor.dataset.placeholder = config.placeholder;
  }

  updateScriptStats();
}

function placeCaretAtEnd(element) {
  const selection = window.getSelection();

  if (!selection) {
    return;
  }

  const range = document.createRange();
  range.selectNodeContents(element);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}

function currentScriptBlock() {
  const selection = window.getSelection();
  const node = selection?.anchorNode;
  const element = node?.nodeType === Node.ELEMENT_NODE ? node : node?.parentElement;

  if (!element || !scriptEditor?.contains(element)) {
    return null;
  }

  return element.closest(".script-block");
}

function createScriptBlock(snippetKey, text) {
  const block = document.createElement("div");
  block.className = `script-block is-${scriptBlockType(snippetKey)}`;
  block.dataset.scriptBlock = snippetKey;
  block.textContent = text.replace(/\n+$/g, "");
  return block;
}

function insertScriptSnippet(snippetKey) {
  if (!scriptEditor) {
    return;
  }

  const config = scriptModeConfig();
  const snippet = config.tools.find(([key]) => key === snippetKey)?.[2];

  if (!snippet) {
    return;
  }

  const block = createScriptBlock(snippetKey, snippet);
  const activeBlock = currentScriptBlock();

  if (activeBlock?.parentElement === scriptEditor) {
    activeBlock.insertAdjacentElement("afterend", block);
  } else {
    scriptEditor.append(block);
  }

  scriptEditor.focus();
  placeCaretAtEnd(block);
  syncScriptDraftFromEditor();
  scheduleScriptAutosave();
}

function scriptBlocksHtml() {
  if (!scriptEditor) {
    return "";
  }

  const blocks = Array.from(scriptEditor.querySelectorAll(".script-block"));
  const source = blocks.length ? blocks : [scriptEditor];

  return source
    .map((block) => {
      const className = block.className || "script-block is-action";
      const text = block.innerText
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      return `<p class="${className}">${text.replace(/\n/g, "<br>")}</p>`;
    })
    .join("\n");
}

function scriptExportDocument() {
  const title = String(scriptReviewForm?.elements.scriptTitle?.value || "The Banished Script").trim() || "The Banished Script";
  const format = scriptModeConfig().label;
  const body = scriptBlocksHtml();
  const safeTitle = title.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase() || "script";
  const escapedTitle = escapeHtml(title);
  const escapedFormat = escapeHtml(format);

  return {
    title,
    safeTitle,
    html: `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>${escapedTitle}</title>
  <style>
    @page { margin: 1in 0.8in 1in 1.2in; }
    body { margin: 0; padding: 0; color: #111; background: #fff; font-family: "Courier New", Courier, monospace; font-size: 12pt; line-height: 1.28; }
    h1 { font-family: Arial, sans-serif; font-size: 18pt; margin: 0 0 6pt; }
    .meta { font-family: Arial, sans-serif; font-size: 9pt; margin: 0 0 24pt; color: #555; text-transform: uppercase; }
    p { margin: 0 0 12pt; white-space: pre-wrap; }
    .script-block { page-break-inside: avoid; }
    .is-scene, .is-comic-page, .is-comic-panel { text-transform: uppercase; font-weight: bold; margin-left: 0; }
    .is-character { width: 190pt; margin-left: 205pt; text-align: center; text-transform: uppercase; }
    .is-dialogue { width: 260pt; margin-left: 132pt; text-align: left; }
    .is-parenthetical { width: 180pt; margin-left: 170pt; text-align: left; }
    .is-transition { text-align: right; text-transform: uppercase; }
    .is-comic-caption, .is-comic-sfx, .is-comic-note { margin-left: 30pt; }
  </style>
</head>
<body>
  <h1>${escapedTitle}</h1>
  <p class="meta">${escapedFormat} / Exported from The Banished Internal Portal</p>
  ${body || "<p></p>"}
</body>
</html>`,
  };
}

function exportScript(format) {
  syncScriptDraftFromEditor();
  saveScriptDraft();

  if (!scriptText()) {
    setRequestStatus(scriptReviewStatus, "Export needs at least one script block.", "error");
    return;
  }

  const documentPayload = scriptExportDocument();

  if (format === "doc") {
    const blob = new Blob([documentPayload.html], { type: "application/msword;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${documentPayload.safeTitle}.doc`;
    link.click();
    URL.revokeObjectURL(url);
    setRequestStatus(scriptReviewStatus, "Word export prepared.");
    return;
  }

  const printWindow = window.open("", "_blank");

  if (!printWindow) {
    setRequestStatus(scriptReviewStatus, "PDF export could not open. Allow popups and try again.", "error");
    return;
  }

  printWindow.document.write(documentPayload.html);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  setRequestStatus(scriptReviewStatus, "PDF print view opened. Choose Save as PDF in the print dialog.");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderStoryboardFrames(formData) {
  if (!storyboardOutput) {
    return;
  }

  const prompt = String(formData.get("storyboardPrompt") || "").trim();
  const project = String(formData.get("storyboardProject") || "New / exploratory");
  const style = String(formData.get("storyboardStyle") || "Cinematic noir");
  const camera = String(formData.get("storyboardCamera") || "Wide to close");
  const frameCount = Math.max(1, Math.min(8, Number(formData.get("storyboardFrames") || 4)));
  const beats = [
    "Establish the world and emotional temperature.",
    "Push the character into motion.",
    "Reveal the conflict or visual problem.",
    "Cut closer to the decision point.",
    "Add a texture detail the art team can use.",
    "Hold on the strongest image.",
    "Create a transition into the next beat.",
    "End with the frame that sells the sequence.",
  ];

  storyboardOutput.innerHTML = "";

  Array.from({ length: frameCount }).forEach((_, index) => {
    const frame = document.createElement("article");
    frame.className = "storyboard-frame";
    frame.style.setProperty("--frame-shift", `${(index % 4) + 1}`);
    frame.innerHTML = `
      <div class="storyboard-visual" aria-hidden="true">
        <span></span>
        <i></i>
        <b>${String(index + 1).padStart(2, "0")}</b>
      </div>
      <div>
        <small>${escapeHtml(project)} / ${escapeHtml(style)}</small>
        <strong>Frame ${index + 1}</strong>
        <p>${escapeHtml(beats[index])}</p>
        <em>${escapeHtml(camera)}. Prompt: ${escapeHtml(prompt)}</em>
      </div>
    `;
    storyboardOutput.append(frame);
  });
}

function renderComicPreviews() {
  if (!comicPreview) {
    return;
  }

  const files = Array.from(comicFilesInput?.files || []);
  comicPreview.innerHTML = "";

  if (!files.length) {
    comicPreview.innerHTML = "<article><strong>No files selected</strong><span>Uploaded artwork previews will appear here.</span></article>";
    return;
  }

  files.forEach((file) => {
    const card = document.createElement("article");
    const isImage = file.type.startsWith("image/");
    const preview = isImage
      ? `<img src="${URL.createObjectURL(file)}" alt="" />`
      : "<div class=\"comic-file-icon\">PDF</div>";
    card.innerHTML = `
      ${preview}
      <strong>${escapeHtml(file.name)}</strong>
      <span>${Math.max(1, Math.round(file.size / 1024))} KB</span>
    `;
    comicPreview.append(card);
  });
}

function renderMarketingPlan(formData) {
  if (!marketingPlanOutput) {
    return;
  }

  const project = String(formData.get("marketingProject") || "The Banished");
  const stage = String(formData.get("marketingStage") || "Development");
  const audience = String(formData.get("marketingAudience") || "Core fans");
  const kpi = String(formData.get("marketingKpi") || "Awareness");
  const channels = formData.getAll("marketingChannels").map(String);
  const selectedChannels = channels.length ? channels : ["Owned social", "Press outreach"];
  const assetMap = {
    Development: ["Positioning memo", "Audience promise", "Visual reference board"],
    "Pre-launch": ["Teaser copy", "Key art direction", "Press angle"],
    "Launch week": ["Launch calendar", "Trailer cutdowns", "Creator captions"],
    "Post-launch growth": ["Performance readout", "Community follow-ups", "Second-wave assets"],
    "Awards / festival push": ["Festival one-sheet", "Industry press kit", "Screening invitation"],
  };

  if (marketingAudience) {
    marketingAudience.textContent = audience;
  }

  if (marketingStage) {
    marketingStage.textContent = stage;
  }

  if (marketingChannelCount) {
    marketingChannelCount.textContent = selectedChannels.length;
  }

  marketingPlanOutput.innerHTML = `
    <p class="eyebrow">Campaign output</p>
    <h3>${escapeHtml(project)} / ${escapeHtml(stage)}</h3>
    <div class="marketing-plan-grid">
      <article><span>Audience</span><strong>${escapeHtml(audience)}</strong></article>
      <article><span>KPI</span><strong>${escapeHtml(kpi)}</strong></article>
      <article><span>Channels</span><strong>${selectedChannels.length}</strong></article>
    </div>
    <div class="marketing-plan-list">
      <strong>Priority assets</strong>
      <ul>${(assetMap[stage] || assetMap.Development).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </div>
    <div class="marketing-plan-list">
      <strong>Activation lanes</strong>
      <ul>${selectedChannels.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </div>
  `;
}

function currentProfile() {
  return getProfile();
}

function formatIpCountry(profile) {
  const name = profile?.ipCountryName || "";
  const code = profile?.ipCountryCode || "";

  if (name && code) {
    return `${name} (${code})`;
  }

  return name || code || "Detecting...";
}

function officeFromCountryCode(countryCode) {
  return {
    US: "us",
    CA: "canada",
  }[String(countryCode || "").toUpperCase()] || "";
}

async function fetchIpLocation() {
  try {
    const response = await fetch("/api/location", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();

    if (!response.ok || !data?.ok) {
      return null;
    }

    return data;
  } catch {
    return null;
  }
}

async function lockProfileCountryFromIp() {
  const profile = currentProfile();

  if (!profile?.email) {
    return;
  }

  const location = await fetchIpLocation();

  if (!location?.countryCode && !location?.countryName) {
    return;
  }

  const latestProfile = currentProfile();

  if (!latestProfile || latestProfile.email !== profile.email) {
    return;
  }

  const detectedOffice = officeFromCountryCode(location.countryCode);
  const updatedProfile = {
    ...latestProfile,
    ipCountryCode: location.countryCode || latestProfile.ipCountryCode || "",
    ipCountryName: location.countryName || latestProfile.ipCountryName || "",
    ipCountrySource: location.source || "ip",
    calendarRegion: latestProfile.calendarRegion || detectedOffice || "us",
  };
  const users = getUsers();

  if (users[updatedProfile.email]) {
    users[updatedProfile.email] = {
      ...users[updatedProfile.email],
      ipCountryCode: updatedProfile.ipCountryCode,
      ipCountryName: updatedProfile.ipCountryName,
      ipCountrySource: updatedProfile.ipCountrySource,
    };
    setUsers(users);
  }

  setProfile(updatedProfile);
  applyProfile(updatedProfile);
}

function normalizeCalendarRegion(region) {
  return ["auto", "us", "canada", "all"].includes(region) ? region : "auto";
}

function normalizeEmploymentType(type) {
  return type === "contractor" ? "contractor" : "employee";
}

function inferCalendarRegion(profile = currentProfile()) {
  const explicitRegion = normalizeCalendarRegion(profile?.calendarRegion || "auto");

  if (explicitRegion !== "auto") {
    return explicitRegion;
  }

  const profileText = [
    profile?.timezone,
    profile?.department,
    profile?.role,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (/canada|toronto|vancouver|montreal|montréal|quebec|québec|ottawa|calgary|edmonton|winnipeg|halifax|st[._ -]?johns/.test(profileText)) {
    return "canada";
  }

  if (/united states|usa|u\.s\.|california|new[._ -]?york|los[._ -]?angeles|chicago|denver|phoenix|america\//.test(profileText)) {
    return "us";
  }

  return "all";
}

function calendarRegionLabel(region) {
  return {
    us: "United States",
    canada: "Canada",
    all: "Full company",
  }[region] || "Full company";
}

function calendarOfficeLabel(region) {
  return {
    us: "the United States office",
    canada: "the Canada office",
    all: "the full company calendar",
  }[region] || "the full company calendar";
}

function employmentTypeLabel(type) {
  return normalizeEmploymentType(type) === "contractor" ? "a contractor/freelancer" : "an employee";
}

function displayEmploymentType(type) {
  return normalizeEmploymentType(type) === "contractor" ? "Contractor / freelancer" : "Employee";
}

function currentMonthlyChallenges() {
  return monthlyChallenges[new Date().getMonth()] || [];
}

function currentMonthlyCreditTotal() {
  return currentMonthlyChallenges().reduce((total, challenge) => total + Number(challenge.credits || 0), 0);
}

function requestPaneFromSection(sectionId) {
  return {
    "it-requests": "it",
    "hr-requests": "hr",
    "org-requests": "org",
    "ed-requests": "ed",
    "legal-requests": "legal",
  }[sectionId] || "it";
}

function normalizeSectionId(sectionId) {
  return {
    "it-requests": "requests",
    "hr-requests": "requests",
    "org-requests": "requests",
    "ed-requests": "requests",
    "legal-requests": "requests",
  }[sectionId] || sectionId;
}

function setRequestDestination(type = "it") {
  if (!requestDestination) {
    return;
  }

  const hasOption = Array.from(requestDestination.options).some((option) => option.value === type);
  requestDestination.value = hasOption ? type : "it";
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

function rankProgressFromCredits(credits) {
  const ranks = [
    { threshold: 0, label: "Scout" },
    { threshold: 20, label: "Builder" },
    { threshold: 50, label: "Specialist" },
    { threshold: 100, label: "Lead" },
    { threshold: 150, label: "Producer" },
  ];
  const currentCredits = Number(credits || 0);
  const nextRankIndex = ranks.findIndex((rank) => currentCredits < rank.threshold);

  if (nextRankIndex === -1) {
    return {
      label: "Top portal rank active",
      progress: 100,
    };
  }

  const nextRank = ranks[nextRankIndex];
  const previousRank = ranks[Math.max(0, nextRankIndex - 1)];
  const span = Math.max(1, nextRank.threshold - previousRank.threshold);
  const earnedInSpan = Math.max(0, currentCredits - previousRank.threshold);
  const remaining = Math.max(0, nextRank.threshold - currentCredits);

  return {
    label: `${remaining} credits to ${nextRank.label}`,
    progress: Math.min(100, Math.round((earnedInSpan / span) * 100)),
  };
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
    role: normalizeRole(user.role),
    department: user.department,
    timezone: user.timezone,
    employmentType: normalizeEmploymentType(user.employmentType || profile.employmentType),
    calendarRegion: normalizeCalendarRegion(user.calendarRegion || profile.calendarRegion || "auto"),
    ipCountryCode: user.ipCountryCode || profile.ipCountryCode || "",
    ipCountryName: user.ipCountryName || profile.ipCountryName || "",
    ipCountrySource: user.ipCountrySource || profile.ipCountrySource || "",
    avatarDataUrl: user.avatarDataUrl || profile.avatarDataUrl || "",
    admin: Boolean(user.admin || normalizeRole(user.role) === "Admin"),
    bonusCredits: Number(user.bonusCredits || 0),
  };
}

function updateAdminVisibility(profile) {
  adminOnlyElements.forEach((element) => {
    element.hidden = !profile?.admin;
  });
}

function configureRoleSelector(profile) {
  const visibleRole = documentRoleForProfile(profile);

  roleButtons.forEach((button) => {
    button.hidden = !profile?.admin && button.dataset.roleButton !== visibleRole;
  });

  showDocumentRole(null);
}

function applyProfile(profile) {
  if (!profile) {
    return;
  }

  profile.role = normalizeRole(profile.role);
  profile.admin = Boolean(profile.admin || profile.role === "Admin");

  const credits = Number(profile.bonusCredits || 0);
  const monthlyPotential = currentMonthlyCreditTotal();
  const creditProgress = monthlyPotential ? Math.min(100, Math.round((credits / monthlyPotential) * 100)) : 0;
  const rankProgress = rankProgressFromCredits(credits);

  if (profileName) {
    profileName.textContent = profile.name || "Employee";
  }

  if (profileRole) {
    profileRole.textContent = profile.role || "Employee";
  }

  if (roleSwitcher) {
    roleSwitcher.value = profile.role || "Employee";
  }

  updateAvatarPreviews(profile);

  if (profileBonusCredits) {
    profileBonusCredits.textContent = credits;
  }

  if (profileBonusPotential) {
    profileBonusPotential.textContent = `+${monthlyPotential}`;
  }

  if (profileCardName) {
    profileCardName.textContent = profile.name || "Employee";
  }

  if (profileCardRole) {
    profileCardRole.textContent = `${profile.role || "Employee"} / ${profile.department || "Team member"}`;
  }

  if (profileCardLevel) {
    profileCardLevel.textContent = challengeLevelFromCredits(credits);
  }

  if (profileNextRank) {
    profileNextRank.textContent = rankProgress.label;
  }

  if (profileRankProgress) {
    profileRankProgress.style.width = `${rankProgress.progress}%`;
  }

  if (profileCardCountry) {
    profileCardCountry.textContent = formatIpCountry(profile);
  }

  if (profileCardOffice) {
    profileCardOffice.textContent = calendarOfficeLabel(inferCalendarRegion(profile)).replace(/^the /, "");
  }

  if (profileCardStatus) {
    profileCardStatus.textContent = displayEmploymentType(profile.employmentType);
  }

  if (overviewName) {
    overviewName.textContent = profile.name || "Employee";
  }

  if (overviewRole) {
    overviewRole.textContent = `${profile.role || "Employee"} / ${profile.department || "Team member"}`;
  }

  if (overviewCredits) {
    overviewCredits.textContent = credits;
  }

  if (overviewPotential) {
    overviewPotential.textContent = `+${monthlyPotential}`;
  }

  if (overviewLevel) {
    overviewLevel.textContent = challengeLevelFromCredits(credits);
  }

  if (overviewProgress) {
    overviewProgress.style.width = `${creditProgress}%`;
  }

  if (profileForm) {
    profileForm.elements.profileName.value = profile.name || "";
    profileForm.elements.profileEmail.value = profile.email || "";
    profileForm.elements.profileRole.value = profile.role || "Employee";
    profileForm.elements.profileRole.disabled = !profile.admin;
    profileForm.elements.profileDepartment.value = profile.department || "";
    profileForm.elements.profileTimezone.value = profile.timezone || "";
    profileForm.elements.profileEmploymentType.value = normalizeEmploymentType(profile.employmentType);
    profileForm.elements.profileCalendarRegion.value = inferCalendarRegion(profile);
  }

  if (profileCountry) {
    profileCountry.value = formatIpCountry(profile);
  }

  if (profileCountryNote) {
    const source = profile.ipCountrySource === "dev-localhost"
      ? "Local development fallback. In production, this locks from the request IP country."
      : "Locked from your request IP country when you sign in.";
    profileCountryNote.textContent = source;
  }

  renderMonthlyChallenge();
  renderCompanyCalendar();
  updateAdminVisibility(profile);
  updateRoleNavigation(profile);
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

  if (profileEditPanel) {
    profileEditPanel.open = false;
  }

  document.body.classList.add("is-authenticated");
  applyProfile(syncedProfile);
  showSection(window.location.hash.replace("#", "") || "overview");
  lockProfileCountryFromIp();
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
  const requestedSection = sectionId || "overview";
  const requestPane = requestPaneFromSection(requestedSection);
  const normalizedSection = normalizeSectionId(requestedSection);
  const nextSection = canAccessSection(normalizedSection, profile) ? normalizedSection : firstAllowedSection(profile);
  const target = document.querySelector(`[data-section="${nextSection}"]`);
  const navSection = sectionAccessKey(nextSection);

  if (!target) {
    return;
  }

  updateRoleNavigation(profile);

  sections.forEach((section) => {
    section.classList.toggle("active", section === target);
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.sectionLink === navSection);
  });

  if (nextSection === "documents") {
    showDocumentRole(null);
  }

  if (nextSection === "requests") {
    setRequestDestination(requestPane);
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
      const userRole = normalizeRole(user.role);
      const roleOptions = roleNames
        .map((role) => `<option ${userRole === role ? "selected" : ""}>${role}</option>`)
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

function calendarEventMatches(event, filter = activeCalendarFilter) {
  if (filter === "my") {
    const region = inferCalendarRegion();

    if (event.categories.some((category) => ["company", "celebration", "break"].includes(category))) {
      return true;
    }

    return region === "all" || event.categories.includes(region);
  }

  return filter === "all" || event.categories.includes(filter);
}

function primaryCalendarCategory(event) {
  return event.categories.includes("company") ? "company" : event.categories[0] || "company";
}

function formatCalendarDate(dateString, options = {}) {
  return parseCalendarDate(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: options.withYear ? "numeric" : undefined,
  });
}

function visibleCalendarEvents(filter = activeCalendarFilter) {
  return companyCalendarEvents.filter((event) => calendarEventMatches(event, filter));
}

function nextCalendarDate(events) {
  if (!events.length) {
    return "";
  }

  const today = new Date();
  const todayKey = today.getFullYear() === companyCalendarYear
    ? toDateKey(today)
    : `${companyCalendarYear}-01-01`;
  const upcoming = events.find((event) => event.date >= todayKey);

  return (upcoming || events[0]).date;
}

function calendarEventsForDate(dateString, filter = activeCalendarFilter) {
  return companyCalendarEvents.filter((event) => event.date === dateString && calendarEventMatches(event, filter));
}

function updateCalendarStats(events) {
  const uniqueDates = new Set(events.map((event) => event.date));
  const nextDate = nextCalendarDate(events);
  const profile = currentProfile();
  const region = inferCalendarRegion(profile);
  const employmentType = normalizeEmploymentType(profile?.employmentType);

  if (calendarTotal) {
    calendarTotal.textContent = uniqueDates.size;
  }

  if (calendarNext) {
    calendarNext.textContent = nextDate ? formatCalendarDate(nextDate) : "None";
  }

  if (calendarFocus) {
    calendarFocus.textContent = activeCalendarFilter === "my" ? calendarRegionLabel(region) : calendarFilterLabels[activeCalendarFilter] || "All";
  }

  if (calendarScopeNote) {
    if (activeCalendarFilter === "my") {
      calendarScopeNote.textContent = employmentType === "contractor"
        ? `You are marked as ${employmentTypeLabel(employmentType)} assigned to ${calendarOfficeLabel(region)}. Use these markers to plan non-working days and company events; payment follows your contract.`
        : `You are marked as ${employmentTypeLabel(employmentType)} assigned to ${calendarOfficeLabel(region)}. Pay attention to the marked paid holidays, company days, events, and break windows.`;
    } else {
      calendarScopeNote.textContent = `${calendarFilterLabels[activeCalendarFilter] || "All"} view is temporarily selected.`;
    }
  }
}

function renderCalendarDetail(dateString) {
  if (!calendarDetailTitle || !calendarDetailCopy || !calendarDetailList) {
    return;
  }

  const events = calendarEventsForDate(dateString);

  calendarDetailList.replaceChildren();

  if (!events.length) {
    calendarDetailTitle.textContent = "Pick a marked day";
    calendarDetailCopy.textContent = "Select any highlighted date to see what is happening and who it applies to.";
    return;
  }

  calendarDetailTitle.textContent = formatCalendarDate(dateString, { withYear: true });
  calendarDetailCopy.textContent = events.length === 1
    ? "One calendar marker is scheduled for this date."
    : `${events.length} calendar markers share this date.`;

  events.forEach((event) => {
    const item = document.createElement("article");
    const title = document.createElement("strong");
    const meta = document.createElement("span");
    const description = document.createElement("p");

    item.className = `calendar-detail-item is-${primaryCalendarCategory(event)}`;
    title.textContent = event.title;
    meta.textContent = `${event.type} · ${event.scope}`;
    description.textContent = event.description;
    item.append(title, meta, description);
    calendarDetailList.append(item);
  });
}

function createCalendarDay(dateString, dayNumber, events) {
  const day = document.createElement(events.length ? "button" : "span");
  const number = document.createElement("b");

  day.className = "calendar-day";
  number.textContent = dayNumber;
  day.append(number);

  if (!events.length) {
    day.setAttribute("aria-hidden", "true");
    return day;
  }

  const categories = [...new Set(events.flatMap((event) => event.categories))];
  const dotRow = document.createElement("span");
  const label = document.createElement("span");

  day.type = "button";
  day.classList.add("has-events", `is-${primaryCalendarCategory(events[0])}`);
  day.classList.toggle("selected", selectedCalendarDate === dateString);
  day.dataset.calendarDate = dateString;
  day.setAttribute("aria-label", `${formatCalendarDate(dateString, { withYear: true })}: ${events.map((event) => event.title).join(", ")}`);

  dotRow.className = "calendar-day-dots";
  categories.slice(0, 5).forEach((category) => {
    const dot = document.createElement("i");
    dot.className = `calendar-dot is-${category}`;
    dotRow.append(dot);
  });

  label.className = "calendar-event-preview";
  label.textContent = events.length > 1 ? `${events.length} markers` : events[0].shortTitle;

  day.append(dotRow, label);
  day.addEventListener("click", () => {
    selectedCalendarDate = dateString;
    renderCompanyCalendar();
  });

  return day;
}

function renderCompanyCalendar() {
  if (!calendarGrid) {
    return;
  }

  const events = visibleCalendarEvents();
  const visibleDates = new Set(events.map((event) => event.date));

  if (!selectedCalendarDate || !visibleDates.has(selectedCalendarDate)) {
    selectedCalendarDate = nextCalendarDate(events);
  }

  calendarGrid.replaceChildren();
  updateCalendarStats(events);

  for (let monthIndex = 0; monthIndex < 12; monthIndex += 1) {
    const month = document.createElement("article");
    const header = document.createElement("header");
    const title = document.createElement("strong");
    const count = document.createElement("span");
    const weekdays = document.createElement("div");
    const days = document.createElement("div");
    const firstDay = new Date(companyCalendarYear, monthIndex, 1).getDay();
    const daysInMonth = new Date(companyCalendarYear, monthIndex + 1, 0).getDate();
    const monthEvents = events.filter((event) => parseCalendarDate(event.date).getMonth() === monthIndex);
    const monthDates = new Set(monthEvents.map((event) => event.date));

    month.className = "calendar-month";
    header.className = "calendar-month-head";
    title.textContent = monthNames[monthIndex];
    count.textContent = `${monthDates.size} marked`;
    header.append(title, count);

    weekdays.className = "calendar-weekdays";
    calendarWeekdays.forEach((weekday) => {
      const label = document.createElement("span");
      label.textContent = weekday;
      weekdays.append(label);
    });

    days.className = "calendar-days";
    for (let blank = 0; blank < firstDay; blank += 1) {
      const emptyDay = document.createElement("span");
      emptyDay.className = "calendar-day empty";
      emptyDay.setAttribute("aria-hidden", "true");
      days.append(emptyDay);
    }

    for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber += 1) {
      const dateString = `${companyCalendarYear}-${String(monthIndex + 1).padStart(2, "0")}-${String(dayNumber).padStart(2, "0")}`;
      days.append(createCalendarDay(dateString, dayNumber, calendarEventsForDate(dateString)));
    }

    month.append(header, weekdays, days);
    calendarGrid.append(month);
  }

  renderCalendarDetail(selectedCalendarDate);
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

function clampProjectProgress(progress) {
  return Math.max(0, Math.min(100, Number(progress || 0)));
}

function projectCategoryTokens(project = {}) {
  if (Array.isArray(project.categories) && project.categories.length) {
    return project.categories.map((category) => String(category).toLowerCase());
  }

  const categoryText = [
    project.category,
    project.label,
    project.title,
    project.summary,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  const tokens = new Set();

  if (/it|product|platform|tool|technology|workflow|dashboard/.test(categoryText)) {
    tokens.add("it");
  }

  if (/film|screen|production|script|casting/.test(categoryText)) {
    tokens.add("film");
  }

  if (/comic|comics|ip|franchise|mythology/.test(categoryText)) {
    tokens.add("comics");
  }

  return tokens.size ? Array.from(tokens) : ["other"];
}

function projectTokenFromTitle(title = "Project") {
  const words = String(title)
    .replace(/[^a-z0-9\s]/gi, " ")
    .split(/\s+/)
    .filter(Boolean);

  if (!words.length) {
    return "PR";
  }

  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function applyProjectFilter(filter = activeProjectFilter) {
  activeProjectFilter = filter;

  projectFilterBar?.querySelectorAll("[data-project-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.projectFilter === filter);
  });

  document.querySelectorAll("[data-project-card]").forEach((card) => {
    const categories = String(card.dataset.projectCategory || "")
      .split(/\s+/)
      .filter(Boolean);
    card.hidden = filter !== "all" && !categories.includes(filter);
  });
}

function openProjectDetail(project) {
  if (!project) {
    return;
  }

  const progress = clampProjectProgress(project.progress || 0);

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

  if (projectDetailSignal) {
    projectDetailSignal.textContent = project.signal || project.priority || "Review";
  }

  if (projectDetailFocus) {
    projectDetailFocus.textContent = project.focus || "Move the clearest next artifact forward and keep the team aligned on what changed.";
  }

  if (projectDetailProgressLabel) {
    projectDetailProgressLabel.textContent = `${progress}%`;
  }

  if (projectDetailProgressBar) {
    projectDetailProgressBar.style.width = `${progress}%`;
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
    categories: projectCategoryTokens(item),
    signal: "Admin brief",
    progress: 18,
    focus: bodyLines[0] || "Admin-added project. Confirm the owner, next milestone, and first usable artifact.",
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
  const project = projectFromContentItem(item);
  const categories = projectCategoryTokens(project);
  const progress = clampProjectProgress(project.progress || 18);
  const card = document.createElement("article");
  const button = document.createElement("button");
  const orb = document.createElement("span");
  const meta = document.createElement("span");
  const laneLabel = document.createElement("small");
  const signal = document.createElement("b");
  const title = document.createElement("h3");
  const summary = document.createElement("p");
  const progressWrap = document.createElement("div");
  const progressLabel = document.createElement("span");
  const progressTrack = document.createElement("i");
  const progressFill = document.createElement("b");
  const needList = document.createElement("ul");
  const open = document.createElement("strong");

  card.className = "project-card";
  card.dataset.projectCard = "";
  card.dataset.projectCategory = categories.join(" ");
  button.type = "button";
  button.className = "project-button";
  button.style.setProperty("--project-progress", `${progress}%`);
  orb.className = "project-orb";
  orb.textContent = projectTokenFromTitle(project.title);
  meta.className = "project-meta";
  laneLabel.textContent = project.label || "Project";
  signal.textContent = project.signal || project.priority || "Review";
  meta.append(laneLabel, signal);
  title.textContent = project.title;
  summary.textContent = project.summary;
  progressWrap.className = "project-progress";
  progressLabel.textContent = "Mission progress";
  progressTrack.setAttribute("aria-hidden", "true");
  progressTrack.append(progressFill);
  progressWrap.append(progressLabel, progressTrack);
  needList.className = "project-need-list";
  (project.deliverables || ["Confirm next milestone", "Add supporting detail"]).slice(0, 2).forEach((need) => {
    const itemNode = document.createElement("li");
    itemNode.textContent = need;
    needList.append(itemNode);
  });
  open.className = "project-open";
  open.textContent = "Open dossier";
  button.append(orb, meta, title, summary, progressWrap, needList, open);
  card.append(button);

  button.addEventListener("click", () => {
    openProjectDetail(project);
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

  applyProjectFilter(activeProjectFilter);
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
          <option value="general">Employee</option>
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

function setAuthStatus(message, state = "error", showReset = false) {
  if (!authError) {
    return;
  }

  authError.hidden = false;
  authError.classList.toggle("pending", state === "pending");
  authError.textContent = message;

  if (authReset) {
    authReset.hidden = !showReset;
  }
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

getUsers();

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const sectionId = link.dataset.sectionLink;
    showSection(sectionId);
    history.replaceState(null, "", `#${normalizeSectionId(sectionId)}`);
  });
});

roleSwitcher?.addEventListener("change", () => {
  switchPortalRole(roleSwitcher.value);
});

scriptFormatSelect?.addEventListener("change", () => {
  renderScriptToolbar();
  scheduleScriptAutosave();
});

scriptToolbar?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-script-snippet]");

  if (button) {
    insertScriptSnippet(button.dataset.scriptSnippet);
  }
});

scriptReviewForm?.addEventListener("input", () => {
  scheduleScriptAutosave();
});

scriptReviewForm?.addEventListener("change", () => {
  scheduleScriptAutosave();
});

scriptEditor?.addEventListener("input", () => {
  syncScriptDraftFromEditor();
  scheduleScriptAutosave();
});

scriptEditor?.addEventListener("keydown", (event) => {
  if (scriptText() || event.key.length !== 1 || event.metaKey || event.ctrlKey || event.altKey) {
    return;
  }

  event.preventDefault();
  const block = createScriptBlock("action", event.key);
  scriptEditor.append(block);
  placeCaretAtEnd(block);
  syncScriptDraftFromEditor();
  scheduleScriptAutosave();
});

scriptExportButtons.forEach((button) => {
  button.addEventListener("click", () => {
    exportScript(button.dataset.scriptExport);
  });
});

storyboardForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(storyboardForm);
  renderStoryboardFrames(formData);
});

marketingPlannerForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(marketingPlannerForm);
  renderMarketingPlan(formData);
});

comicFilesInput?.addEventListener("change", renderComicPreviews);

comicReviewForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(comicReviewForm);
  const profile = currentProfile();
  const files = Array.from(comicFilesInput?.files || []);
  const recipient = "art@the-banished.com";
  const label = "Comic Art Review";
  const artistName = String(formData.get("artistName") || profile?.name || "Unknown").trim();
  const project = String(formData.get("comicProject") || "New / exploratory");
  const stage = String(formData.get("comicStage") || "Concept sketches");
  const focus = String(formData.get("comicFocus") || "Composition");
  const notes = String(formData.get("comicNotes") || "").trim();
  const createdAt = new Date().toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  if (!files.length) {
    setRequestStatus(comicReviewStatus, "Art review needs at least one uploaded file.", "error");
    return;
  }

  setRequestStatus(comicReviewStatus, `Sending art review request to ${recipient}...`, "pending");

  try {
    await postPortalEmail("/api/requests", {
      recipient,
      label,
      subject: `Comic Art Review: ${project} / ${stage}`,
      body: [
        `Artist: ${artistName}`,
        `Employee email: ${profile?.email || ""}`,
        `Project: ${project}`,
        `Stage: ${stage}`,
        `Review focus: ${focus}`,
        "",
        "Uploaded files listed in portal:",
        files.map((file) => `- ${file.name} (${Math.max(1, Math.round(file.size / 1024))} KB)`).join("\n"),
        "",
        "Notes:",
        notes || "No additional notes.",
      ].join("\n"),
      from: profile?.email || "",
      request: {
        type: `Comic Art Review - ${stage}`,
        priority: "Normal",
        name: artistName,
        details: notes,
      },
    });

    const requests = getRequests();
    requests.push({
      createdAt,
      from: profile?.email || "Unknown",
      type: `Comic Art Review - ${stage}`,
      recipient,
      label,
    });
    setRequests(requests);
    renderRequests();
    setRequestStatus(comicReviewStatus, `Art review request sent to ${recipient}.`);
    comicReviewForm.reset();
    renderComicPreviews();
  } catch (error) {
    setRequestStatus(comicReviewStatus, `Art review failed. ${error.message}`, "error");
  }
});

authForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  setAuthStatus("Checking credentials...", "pending", false);

  const formData = new FormData(authForm);
  const email = companyEmailFromPrefix(formData.get("emailPrefix"));
  const password = String(formData.get("password") || "");
  let users = getUsers();
  let user = users[email];

  if ((!user || user.password !== password) && defaultUsers[email]?.password === password) {
    users = mergeUserDirectory(users);
    users[email] = {
      ...users[email],
      password: defaultUsers[email].password,
      admin: Boolean(defaultUsers[email].admin || users[email].admin),
      status: users[email].status || defaultUsers[email].status || "Active",
    };
    setUsers(users);
    user = users[email];
  }

  if (!user || user.password !== password) {
    setAuthStatus("Invalid credentials. Use support and BanishedAdmin12!, or reset local access data below.", "error", true);
    return;
  }

  const profile = {
    email,
    name: user.name,
    role: normalizeRole(user.role),
    department: user.department,
    timezone: user.timezone,
    employmentType: normalizeEmploymentType(user.employmentType),
    calendarRegion: normalizeCalendarRegion(user.calendarRegion || "auto"),
    ipCountryCode: user.ipCountryCode || "",
    ipCountryName: user.ipCountryName || "",
    ipCountrySource: user.ipCountrySource || "",
    avatarDataUrl: user.avatarDataUrl || "",
    admin: Boolean(user.admin || normalizeRole(user.role) === "Admin"),
    bonusCredits: Number(user.bonusCredits || 0),
  };

  if (authError) {
    authError.hidden = true;
  }

  if (authReset) {
    authReset.hidden = true;
  }

  unlockPortal(profile);
});

authReset?.addEventListener("click", () => {
  localStorage.removeItem(usersStoreKey);
  localStorage.removeItem(profileStoreKey);
  getUsers();
  authForm?.reset();
  setAuthStatus("Local access data reset. Enter support and BanishedAdmin12! again.", "pending", false);
});

signOutButton?.addEventListener("click", () => {
  localStorage.removeItem(profileStoreKey);
  pendingAvatarDataUrl = null;
  document.body.classList.remove("is-authenticated");

  if (portal) {
    portal.hidden = true;
  }

  if (authScreen) {
    authScreen.hidden = false;
  }

  authForm?.reset();
});

profileAvatarInput?.addEventListener("change", () => {
  const file = profileAvatarInput.files?.[0];

  if (!file) {
    return;
  }

  if (!file.type.startsWith("image/")) {
    profileAvatarInput.value = "";
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    pendingAvatarDataUrl = String(reader.result || "");
    updateAvatarPreviews(currentProfile() || {});
  });
  reader.readAsDataURL(file);
});

profileAvatarRemove?.addEventListener("click", () => {
  pendingAvatarDataUrl = "";
  updateAvatarPreviews(currentProfile() || {});

  if (profileAvatarInput) {
    profileAvatarInput.value = "";
  }
});

profileForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const previousProfile = currentProfile() || {};
  const formData = new FormData(profileForm);
  const nextRole = profileForm.elements.profileRole.disabled
    ? normalizeRole(previousProfile.role)
    : normalizeRole(formData.get("profileRole") || previousProfile.role);
  const profile = {
    name: formData.get("profileName") || "Employee",
    email: formData.get("profileEmail") || "",
    role: nextRole,
    department: formData.get("profileDepartment") || "",
    timezone: formData.get("profileTimezone") || "",
    employmentType: normalizeEmploymentType(formData.get("profileEmploymentType")),
    calendarRegion: normalizeCalendarRegion(formData.get("profileCalendarRegion") || "auto"),
    ipCountryCode: previousProfile.ipCountryCode || "",
    ipCountryName: previousProfile.ipCountryName || "",
    ipCountrySource: previousProfile.ipCountrySource || "",
    avatarDataUrl: pendingAvatarDataUrl !== null ? pendingAvatarDataUrl : previousProfile.avatarDataUrl || "",
    admin: Boolean(previousProfile.admin || nextRole === "Admin"),
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
      employmentType: profile.employmentType,
      calendarRegion: profile.calendarRegion,
      ipCountryCode: profile.ipCountryCode,
      ipCountryName: profile.ipCountryName,
      ipCountrySource: profile.ipCountrySource,
      avatarDataUrl: profile.avatarDataUrl,
    };
    setUsers(users);
  }

  setProfile(profile);
  pendingAvatarDataUrl = null;
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

projectFilterBar?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-project-filter]");

  if (button) {
    applyProjectFilter(button.dataset.projectFilter || "all");
  }
});

inviteForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(inviteForm);
  const email = companyEmailFromPrefix(formData.get("inviteEmailPrefix"));
  const role = normalizeRole(formData.get("inviteRole") || "Employee");
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
    employmentType: normalizeEmploymentType(users[email]?.employmentType),
    calendarRegion: normalizeCalendarRegion(users[email]?.calendarRegion || "us"),
    ipCountryCode: users[email]?.ipCountryCode || "",
    ipCountryName: users[email]?.ipCountryName || "",
    ipCountrySource: users[email]?.ipCountrySource || "",
    avatarDataUrl: users[email]?.avatarDataUrl || "",
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
  const role = normalizeRole(formData.get("createRole") || "Employee");
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
    employmentType: normalizeEmploymentType(users[email]?.employmentType),
    calendarRegion: normalizeCalendarRegion(users[email]?.calendarRegion || "us"),
    ipCountryCode: users[email]?.ipCountryCode || "",
    ipCountryName: users[email]?.ipCountryName || "",
    ipCountrySource: users[email]?.ipCountrySource || "",
    avatarDataUrl: users[email]?.avatarDataUrl || "",
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
    users[email].role = normalizeRole(select.value);
  });

  userRows?.querySelectorAll("[data-user-admin]").forEach((checkbox) => {
    const email = checkbox.dataset.userAdmin;
    users[email].admin = checkbox.checked || normalizeRole(users[email].role) === "Admin";

    if (users[email].admin && users[email].role !== "Admin") {
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

calendarFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCalendarFilter = button.dataset.calendarFilter || "all";
    calendarFilterButtons.forEach((filterButton) => {
      filterButton.classList.toggle("active", filterButton === button);
    });
    renderCompanyCalendar();
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
    const details = unifiedRequestForm?.elements.details;

    showSection("requests");
    setRequestDestination("ed");
    history.replaceState(null, "", "#requests");

    if (unifiedRequestForm?.elements.type) {
      unifiedRequestForm.elements.type.value = "Assignment request";
    }

    if (details && !details.value) {
      details.placeholder = "Tell ED which internship track you are in, what you have already completed, and what assignment or brief you need next.";
      details.focus();
    }
  });
});

scriptReviewForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  syncScriptDraftFromEditor();

  const formData = new FormData(scriptReviewForm);
  const profile = currentProfile();
  const title = String(formData.get("scriptTitle") || "").trim();
  const scriptMode = scriptStudioModes[String(formData.get("scriptFormat") || "film")] || scriptStudioModes.film;
  const format = scriptMode.label;
  const project = String(formData.get("scriptProject") || "New / unassigned project").trim();
  const priority = String(formData.get("scriptPriority") || "General notes").trim();
  const logline = String(formData.get("scriptLogline") || "").trim();
  const pages = String(formData.get("scriptPages") || "").trim();
  const notes = String(formData.get("scriptNotes") || "").trim();
  const recipient = "scripts@the-banished.com";
  const label = "Script Review";
  const from = profile?.email || "";
  const createdAt = new Date().toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  if (!canAccessSection("script-studio", profile)) {
    setRequestStatus(scriptReviewStatus, "Script review is available only to screenwriters and admins.", "error");
    return;
  }

  if (!title || !logline || !pages) {
    setRequestStatus(scriptReviewStatus, "Script review was not sent. Add a title, logline, and pages.", "error");
    return;
  }

  const subject = `Script Review: ${title}`;
  const body = [
    `Project: ${project}`,
    `Format: ${format}`,
    `Review need: ${priority}`,
    `Writer: ${profile?.name || "Unknown"}`,
    `Writer email: ${from}`,
    "",
    "Logline:",
    logline,
    "",
    "Reviewer notes:",
    notes || "No additional notes.",
    "",
    "Pages / excerpt:",
    pages,
  ].join("\n");

  setRequestStatus(scriptReviewStatus, `Sending script review to ${recipient}...`, "pending");

  try {
    await postPortalEmail("/api/requests", {
      recipient,
      label,
      subject,
      body,
      from,
      request: {
        type: `${format} / ${priority}`,
        priority,
        name: profile?.name || "",
        details: `${logline}\n\n${pages}`,
      },
    });

    const requests = getRequests();
    requests.push({
      createdAt,
      from: from || "Unknown",
      type: `Script Review - ${format}`,
      recipient,
      label,
    });
    setRequests(requests);
    renderRequests();
    setRequestStatus(scriptReviewStatus, `Script review email sent to ${recipient}.`);
    scriptReviewForm.reset();
  } catch (error) {
    setRequestStatus(scriptReviewStatus, `Script review failed. ${error.message}`, "error");
  }
});

document.querySelectorAll("[data-request-form]").forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const profile = currentProfile();
    const destination = form.elements.destination;
    const selectedDestination = destination?.options?.[destination.selectedIndex];
    const label = selectedDestination?.dataset.label || form.dataset.label || "Request";
    const recipient = selectedDestination?.dataset.recipient || form.dataset.recipient || "";
    const destinationLabel = selectedDestination?.textContent?.trim() || "Support";
    const name = formData.get("name") || profile?.name || "[your name]";
    const type = formData.get("type") || "General request";
    const priority = formData.get("priority") || "Normal";
    const details = formData.get("details") || "[describe the request here]";
    const subject = `${label}: ${type}`;
    const body = [
      `Destination: ${destinationLabel}`,
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

    if (!recipient) {
      setRequestStatus(status, `${label} failed. Select a request destination.`, "error");
      return;
    }

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

restoreScriptDraft();
renderScriptToolbar();
syncScriptDraftFromEditor();
renderMonthlyChallenge();
renderCompanyCalendar();

const savedProfile = getProfile();

if (savedProfile) {
  unlockPortal(savedProfile);
} else {
  showDocumentRole(null);
  renderAdmin();
}
