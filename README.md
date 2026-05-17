# The Banished Internal Portal

Prototype internal portal for The Banished, built with dependency-free frontend assets and a small local Node server for email delivery testing.

## What is included

- Employee-focused overview
- Sign-in screen for invited employees
- Clickable announcement details
- Role-based document library preview for Employee, Admin, and Project Manager
- Film, comics, and IT projects section
- Script Studio with autosave, formatted script blocks, Word/PDF export, and review submission
- Script-based Storyboards generator
- Comic Artist Review upload and review request section
- Benefits section based on `Benefits.docx`
- Culture section based on `The Banished Culture.pptx`
- Bonuses section
- Holidays section based on `Holiday_Guide.docx`
- Clickable holiday meaning popovers
- Training placeholder
- Expandable internship section for interns and early talent
- Unified request form for IT, HR, Organizational, Education, and Legal mailboxes
- Admin console with invitations, user roles, admin permissions, manual content publishing, and local request log
- Employee profile settings
- Responsive desktop and mobile layout

## Open locally

Run the local portal server from this folder:

```bash
node server.js
```

Then visit `http://127.0.0.1:4173`.

Do not use `python3 -m http.server` for this version. It can show the pages, but it cannot handle `/api/invitations` or `/api/requests`, so email forms will fail.

The portal needs a mail provider before invitations and request forms can send real email. Configure either Resend:

```bash
RESEND_API_KEY=your_key \
PORTAL_MAIL_FROM=support@the-banished.com \
node server.js
```

Or SMTP:

```bash
SMTP_HOST=smtp.example.com \
SMTP_PORT=587 \
SMTP_USER=support@the-banished.com \
SMTP_PASS=your_password \
SMTP_FROM=support@the-banished.com \
node server.js
```

If the mail provider is not configured, the portal will show an error instead of saying that an email was sent.

For local testing, the message `Email service is not configured yet` means the portal backend is running correctly, but no mail provider credentials have been supplied.

## Test access

- Company email field: `support`
- Password: `BanishedAdmin12!`
- Extra role tests use password `PortalInvite12!`: `writer`, `pm`, `intern`, and `general`.

## Suggested next steps

- Replace placeholder content with real internal sections.
- Map the final route for the main site, such as `/internal`.
- Connect documents and announcements to the future CMS or backend.
