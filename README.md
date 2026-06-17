# Panthera Insight — legacy public legal pages

> **The MkDocs version of this site has moved to `../panthera-insight-site/`.** That folder is ready to be its own GitHub repository and is the current source of truth for the public user guide + legal pages.
>
> This folder contains the **previous static-HTML version** of the public legal site. It is kept temporarily for reference during the migration. **Delete this folder once the MkDocs build has been reviewed and deployed.**

## Pages (legacy)

| Path                  | Purpose                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------- |
| `index.html`          | Landing page — overview + nav to the other pages.                                                       |
| `privacy.html`        | Privacy Notice. Covers PDPA (Singapore), UK GDPR, PIPEDA + Quebec Law 25 (Canada).                      |
| `terms.html`          | Terms of Service.                                                                                       |
| `delete-account.html` | Web-based account-deletion landing page. Required by Google Play (in-app deletion is also implemented). |

## Notes

- Operating entity: **Panthera International Asia Capital Pte. Ltd.**, regulated under a Singapore MAS licence.
- DPO mailbox: `it@pantherafo.com`.
- Once the MkDocs site is live at its new URL, update `AppConstants.legalSiteBase` in the main app so the in-app Settings tiles point to the right place, then delete this folder.
