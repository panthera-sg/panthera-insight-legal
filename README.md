# Panthera Insight — public site

Public-facing MkDocs Material site for the Panthera Insight mobile app. Hosts:

- The **user guide** for end clients.
- The **legal documents** (Privacy Notice, Terms of Service, Delete-account landing page) linked from the in-app Settings → Legal section and from the Apple App Store / Google Play store listings.

## Local development

Requires Python 3.10+.

```bash
pip install -r requirements.txt
mkdocs serve
```

The site is served at <http://127.0.0.1:8000>. Edits to files under `docs/` reload live.

## Build

```bash
mkdocs build --strict
```

Output goes to `site/` (gitignored). `--strict` fails the build on broken links or unknown nav entries — keep it that way.

## Hosting

This folder is intended to live in its **own public GitHub repository** served via GitHub Pages. After moving it:

1. Create a new public repo, e.g. `pantherasg/panthera-insight-site`.
2. Copy the contents of this folder into the repo root (preserve the `.github/` directory).
3. Settings → Pages → Source: **GitHub Actions**.
4. Push to `main`; the included `.github/workflows/deploy.yml` workflow builds and deploys automatically.
5. The site will be served at `https://pantherasg.github.io/panthera-insight-site/` (or your custom domain).

If you change the host, update `AppConstants.legalSiteBase` in the app so the in-app Settings tiles point to the right place.

## Structure

```
website/
├── mkdocs.yml              # Site config (theme, nav, plugins)
├── requirements.txt        # Pinned mkdocs-material version
├── overrides/              # (Optional) theme template overrides
├── docs/
│   ├── index.md            # Landing page
│   ├── user-guide/         # End-client documentation
│   ├── legal/              # Privacy, Terms, Delete-account
│   ├── stylesheets/
│   │   └── extra.css       # Panthera palette + light/dark schemes
│   └── assets/
│       ├── panthera-wordmark-gold.png
│       ├── panthera-wordmark-scarlet.png
│       └── user-guide/     # Screenshots / gifs for the user guide
└── .github/workflows/deploy.yml   # GitHub Pages deploy
```

## Theme

The site uses MkDocs Material with two custom palettes:

- **panthera-light** — warm off-white surface (`#F5F5F3`), near-black text, deep-purple primary, gold accents on hover.
- **panthera-dark** — charcoal surface (`#2F3339`), light text, gold accent.

The toggle is in the top-right and respects `prefers-color-scheme` on first load.

Palette source: `lib/core/theme/app_theme.dart`. Keep `docs/stylesheets/extra.css` in sync if the in-app palette changes.

## Inserting images / gifs for the user guide

Several user-guide pages contain placeholder admonitions of the form:

```markdown
!!! example "placeholder"
    📷 Replace with a screenshot of the home screen with the most
    recent report visible.
    Suggested file: `assets/user-guide/home-screen.png`
```

To add the real image:

1. Drop the file into `docs/assets/user-guide/`.
2. Replace the placeholder with a normal image reference:

   ```markdown
   ![Home screen showing the latest report](../assets/user-guide/home-screen.png){ width=320 }
   ```

You can find every outstanding placeholder with:

```bash
grep -rn "placeholder" docs/user-guide/
```

## Notes

- Operating entity: **Panthera International Asia Capital Pte. Ltd.**, regulated under a Singapore MAS licence.
- DPO mailbox: `pantherainsight@gmail.com`.
- Sub-processors disclosed in the Privacy Notice: Supabase and Sentry.
- The legal content is currently engineering-drafted. Have counsel review before the app goes live in any App Store / Play Store.

## Old static-HTML files

The previous static-HTML version of this site is still present at the repo root (`index.html`, `privacy.html`, `terms.html`, `delete-account.html`, `style.css`). It is kept for reference during the migration. Delete once the MkDocs build has been reviewed and deployed.
