# The Banished Intranet

Prototype intranet for The Banished, built as a dependency-free static site so it can be reviewed quickly and later moved into the main website stack.

## What is included

- Internal dashboard overview
- Announcements area
- Document library preview
- Team directory preview
- Weekly schedule preview
- Responsive desktop and mobile layout

## Open locally

Open `index.html` in a browser, or run a small static server from this folder:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Suggested next steps

- Replace placeholder content with real internal sections.
- Decide whether the intranet needs authentication.
- Map the final route for the main site, such as `/intranet`.
- Connect documents and announcements to the future CMS or backend.
