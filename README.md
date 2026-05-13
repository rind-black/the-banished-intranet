# The Banished Internal Portal

Prototype internal portal for The Banished, built as a dependency-free static site so it can be reviewed quickly and later moved into the main website stack.

## What is included

- Employee-focused overview
- Announcements area
- Document library preview
- Bonuses section
- Training placeholder
- IT request form that opens an email to `support@the-banished.com`
- HR request form that opens an email to `hr@the-banished.com`
- Responsive desktop and mobile layout

## Open locally

Open `index.html` in a browser, or run a small static server from this folder:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Suggested next steps

- Replace placeholder content with real internal sections.
- Decide whether the internal portal needs authentication.
- Map the final route for the main site, such as `/internal`.
- Connect documents and announcements to the future CMS or backend.
