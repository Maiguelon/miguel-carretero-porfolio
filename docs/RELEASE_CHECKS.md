# Release checks — 2026-10-06

## Build and dependencies

- `npm run verify`: TypeScript/content validation passed with zero errors, warnings and hints; four static pages built successfully.
- `npm audit`: zero vulnerabilities after updating the nested Sharp dependency through an override.
- Social preview generated and visually inspected at 1200 × 630.
- Font files are local assets; no external font service.

## Browser checks

Reviewed the production build with the Codex browser, not only the development server.

- Home inspected on desktop and at 390px and 320px widths.
- Both case pages and the error page checked at 320px: no horizontal overflow, missing image alternatives or missing local anchor targets.
- Home displays both project cards with correct status.
- Navigation to selected work reaches the target section; About/Contact have matching targets.
- First keyboard Tab exposes the visible, outlined skip link; Enter moves focus to the main region.
- Case section indexes match the generated headings.
- The implementation disclosure on the Cockpit case expands correctly.
- Rendered production home contains zero client-side script elements.
- Home and both cases load with HTTP 200; the English PDF returns HTTP 200 and `application/pdf`.
- Source repository links and the two original Cockpit design-note links were checked publicly.

## Editorial checks

- Gestor is described as an adopted internal V1; hosted access is labelled as requiring team login.
- The 122-video decision and qualitative outcomes match Miguel's account.
- Cockpit is a functional project; the public demo's deterministic providers and lack of agency adoption are explicit.
- Both case pages distinguish Miguel's product/process contribution from AI-assisted implementation.
- Gestor screenshots use fictional data. Cockpit screenshot is from the public demo.
- Future projects are not published as empty cases.
- The downloadable PDF is the supplied English CV, unchanged. It predates the latest project descriptions on the site.

## Scope

These checks cover the portfolio's current static pages and links. They do not constitute a formal WCAG certification or verification of the projects' underlying integrations.

## Live publication

- URL: https://miguel-carretero-portfolio.miguel-carretero.workers.dev
- Hosting: Cloudflare Workers static assets; no application server code or runtime bindings.
- Initial release version: `16897ef2-2c11-46ec-8b62-fce6c6e1f35a`.
- `npm run check:live` passed: home and both cases return HTML/200 with the correct page titles, canonical origin, absolute social image and `nosniff` response header.
- Public CV and social PNG return 200 with the expected content types.
- Sitemap contains exactly the three published pages; robots references the same public sitemap.
- An unknown route returns HTTP 404 with the designed error page and noindex metadata.
- Browser verified the public home, loaded images, correct canonical, no horizontal overflow and zero client script elements.
- Desktop proof is saved locally under ignored `work/portfolio-desktop.jpg`.

## Outcome update — 2026-10-07

- `npm run verify` passed with zero TypeScript/content errors, warnings and hints; four static pages built.
- Inspected the updated production home at 1280px, 640px and 320px. No page or outcome-card horizontal overflow. The 640px layout was repaired so monthly ranges remain on one line.
- Checked the Soluntech anchor by following its outcome link; it reaches the expanded experience story. All same-page home anchors exist.
- Followed the Gestor outcome link to the case's “What changed” section. The case displays three current users and the team-reported coordination outcome.
- Gestor case also checked at 320px: no horizontal overflow or missing same-page anchor targets.
- Soluntech uses the user-reported discovery-call ranges without invented percentages, comparison dates, qualification or booked/held labels.
- Cáceres patient attribution remains explicitly client-reported. Campaign spend, currency, period, ROI and conversion rates are omitted pending context.
- Gestor adoption is a current count; coordination improvements remain qualitative team observations.
- Published to the same URL, Cloudflare version `51c769e6-edf8-433b-b102-cc1749e0d6e7`.
- `npm run check:live` passed all existing public page, asset, sitemap, robots and custom 404 checks.
- Browser confirmed the three public outcome blocks and followed the Gestor link to the updated case. Public home inspected at the default 507px width and at 1280px: no horizontal overflow, loaded fonts, zero client scripts and no console errors.
- Publication proof saved locally under ignored `work/outcomes-published.jpg`.
