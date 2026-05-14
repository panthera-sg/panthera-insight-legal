# Panthera Insight — public legal pages

Static site for the Panthera Insight mobile app's public legal pages.
These URLs are linked from the in-app Settings → Legal section and
from the Apple App Store / Google Play store listings.

## Hosting

This folder is intended to live in its **own public GitHub repository**
served via GitHub Pages. After moving it:

1. Create a new public repo, e.g. `pantherasg/panthera-legal`.
2. Copy the contents of this folder into the repo root.
3. Settings → Pages → Source: `Deploy from a branch` → `main` /
   `(root)`.
4. The site will be served at
   `https://pantherasg.github.io/panthera-legal/`.

If you change the host, update `AppConstants.legalSiteBase` in the app
so the in-app Settings tiles point to the right place.

## Pages

| Path                  | Purpose                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------- |
| `index.html`          | Landing page — overview + nav to the other pages.                                                       |
| `privacy.html`        | Privacy Notice. Covers PDPA (Singapore), UK GDPR, PIPEDA + Quebec Law 25 (Canada).                      |
| `terms.html`          | Terms of Service.                                                                                       |
| `delete-account.html` | Web-based account-deletion landing page. Required by Google Play (in-app deletion is also implemented). |

## Notes

- Operating entity: **Panthera International Asia Capital Pte. Ltd.**,
  regulated under a Singapore MAS licence.
- DPO mailbox: `pantherainsight@gmail.com`.
- Sub-processors disclosed: Supabase (auth, database, storage) and
  Sentry (crash reporting, EU region).
- These pages are engineering drafts. Have counsel review before the
  app goes live in any App Store / Play Store.
