# GoHighLevel Workflow Portfolio

A responsive portfolio for clients and hiring teams, featuring the owner's actual whitening-offer workflow screenshot.

## Featured work

Contact-tag trigger → Free Whitening Offer → wait for reply or one hour → reply check → positive-intent routing. The no-reply branch sends a second attempt, waits for a reply, and checks positive intent. Descriptions are based on the supplied screenshot, without performance claims or assumptions about settings not shown.

The original screenshot is preserved in `public/ghl-whitening-workflow.png`. Visitors can open it at full resolution. No generated concept projects remain on the page.

## Local development

Requires Node.js 22.13 or newer.

    npm ci
    npm run dev
    npm run build

Edit `app/page.tsx` for content and `app/globals.css` for styling. Add the owner's name and contact details before outreach. Runtime: React and Vinext on a Workers-compatible target; uploading source does not activate GitHub Pages.

## Validation

Production build and scoped page/layout lint checks are run for updates. The original scaffold's full-project lint has issues in unused generated components. Its dependency audit reported 11 vulnerabilities (8 high); dependency remediation remains before public deployment.
