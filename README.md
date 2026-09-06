# GoHighLevel Workflow Portfolio

Responsive portfolio draft for prospective clients and employers. Three original workflow diagrams illustrate lead follow-up, appointment reminders, and reactivation. Expand each project to read its logic.

## Status

All examples are explicitly labeled concepts. No client claims, performance metrics, personal details, or live GHL screenshots are included. Replace these with verified work before using the page in applications or outreach.

## Run locally

Requires Node.js 22.13 or newer.

    npm ci
    npm run dev

Open the local URL printed by the server.

    npm run build
    npm run lint

## Personalize

- Edit `app/page.tsx`: owner name, contact links, project descriptions, and actual workflow steps.
- Put redacted screenshots and demo assets in `public/` and reference them in the project entries.
- Add genuine demo links and documented results when available.
- Edit `app/globals.css` for the palette and layout.
- Update the page title in `app/layout.tsx`.

The project uses React and Vinext. The production build targets a Workers-compatible runtime; the source repository by itself does not enable GitHub Pages.

## Validation

Production build and lint checks for the authored page and layout pass. Full-project lint reports existing issues in unused generated UI components. The starter dependency audit reports 11 vulnerabilities (8 high); dependency remediation remains before a public deployment.

