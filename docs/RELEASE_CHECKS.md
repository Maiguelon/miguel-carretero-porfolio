# Release checks — 2026-10-06

## LeadOps case integration — 2026-10-31

- Reviewed LeadOps source `a4b9c51`, source documentation and screenshots. All 96 source checks passed; the offline fictional demo confirmed returning-contact reuse, duplicate suppression and refused consent without provider effects. No new connected inquiry, CRM write, email or AI call was triggered by this review.
- Added `/projects/aramis-leadops/` as a Connected MVP after Gestor and before Cockpit. The case distinguishes published capture, local processing, real-service validation with fictional data and lack of measured commercial outcomes.
- Public assets are exact copies of the reviewed empty Tally form and fictional Resend card. The email card is not labelled as a native HubSpot card. The real agency intake is not exposed as a testing sandbox.
- Home copy, card layout, social preview, project numbering, next-case navigation and live checks now cover three cases. Image dimensions are explicit in the content schema, rather than inferred from a theme.
- `npm run verify`: zero type/content errors, warnings or hints; five HTML pages built. `git diff --check` passed. Generated HTML checks found no missing local routes, anchors or assets; each image has alternative text. Confirmed card order, all next-case targets, correct screenshot dimensions and byte copies, four sitemap entries and no submission form/client script on the new case. Proof: ignored `work/leadops-integration-checks-2026-10-31.json`.
- The regenerated social preview was visually inspected. Local browser use is disabled in Work settings; fresh rendered page/mobile/overflow checks were unavailable and are not reported as passed.
- Published Cloudflare version `eadb44c9-9232-4934-be12-2262509b7577`. Expanded `npm run check:live` passed for all four public routes, CV, social image, both LeadOps screenshots, sitemap, robots and custom 404.
- Public home, all three cases, screenshot assets, social preview and sitemap match the verified build byte for byte. Linked CSS/font/portrait build assets used by the home and new case return HTTP 200. Proof: ignored `work/leadops-publication-2026-10-31.json`. Fresh browser rendering remains unverified because of the Work setting.

## Operations and automation positioning — 2026-10-19

- Home, biography, title, description and social preview now lead with Operations & Automation. Supporting copy names marketing/sales workflows, CRM organization, requirements, team coordination and user validation.
- Programming education remains in Background. Project statuses, personal technical skills and measured/qualitative claim boundaries are preserved; no new performance or engineering claims were added.
- `npm run verify` passed: zero errors, warnings or hints; four static pages built. `git diff --check` passed.
- Reviewed the production preview at 1280px and 320px: readable introductory copy and biography, no horizontal overflow, existing résumé link and all home anchor targets present. Browser recorded no warnings/errors. The regenerated 1200 × 630 social preview was visually inspected.
- Published Cloudflare version `18a9d9c8-15a6-4f90-8f2a-479e9ddc5be1`; `npm run check:live` passed all page, asset, sitemap, robots and custom 404 checks. The public home and social PNG match the verified build byte for byte.
- Browser confirmed the public title, role, introduction and loaded hero image, without horizontal overflow. Proof: ignored `work/operations-positioning-publication-2026-10-19.json` and `work/operations-positioning-published-2026-10-19.png`.

## Outcome paragraph readability — 2026-10-18

- Outcome descriptions now use a maximum width of 48ch, 13px body text and `text-wrap: pretty`; the existing card grid and all copy remain intact.
- `npm run verify` passed with zero errors, warnings or hints and four pages built.
- Reviewed the desktop production preview at 1600px: descriptions are approximately 427px wide, and the RFP paragraph wraps into two balanced lines. At 640px and 320px, both descriptions remain within their cards, with no page horizontal overflow. Mobile text remains 13px. No browser warnings or errors were recorded.
- Published Cloudflare version `92881543-b8d8-48a7-b1c7-ef6bcd575b14`; all existing live checks passed. The public browser confirms the new font size, width limit and paragraph wrapping, without horizontal overflow. Proof: ignored `work/outcome-reading-width-publication-2026-10-18.json` and `work/outcome-reading-width-published.png`.

## Focused home outcomes — 2026-10-18

- The home now features two outcomes: Soluntech's monthly discovery-call improvement and Gestor's adoption by the whole current team. The campaign highlight and redundant RFP-to-background link were removed.
- Gestor's supporting copy retains the three-person count and presents coordination improvements as team feedback. The new headline makes no percentage, time-saving or ROI claim.
- `npm run verify` passed with zero errors, warnings or hints and four static pages built successfully.
- Inspected the production preview at 1280px, 640px and 320px: two desktop/tablet columns, one mobile column, no page/card horizontal overflow, and no console warnings or errors. Followed “See the workflow” to the case's “What changed” heading.
- Published Cloudflare version `18a4e319-1d97-4d35-bfc0-227651fd39f4`; `npm run check:live` passed all existing page, asset, sitemap, robots and custom 404 checks.
- The public home returns HTTP 200 and confirms both outcome cards, the existing Soluntech ranges, Gestor's team-adoption headline and three-person context, and no campaign highlight or redundant RFP link. Browser review confirmed the published layout, no horizontal overflow and zero client scripts. Proof: ignored `work/focused-outcomes-publication-2026-10-18.json` and `work/outcomes-focused-published.png`.

## Anonymous dermatology campaign — 2026-10-15

- Replaced the client's name on the home page with “a dermatology practice”. Preserved the three-ad context, 104 conversations and at least six patients attributed by the client.
- Removed direct client identifiers and the internal source-document URL from current repository documentation. Original source reference remains under ignored work/.
- Visually inspected all three public project screenshots; none shows the client's name. Extracted text from the downloadable CV also contains no client identifiers.
- Type/content validation passed with zero errors, warnings or hints, and the four-page production build passed. Checked current source, documentation and generated pages for the removed identifiers.
- Published Cloudflare version `5cfc9388-96db-4b3c-b78b-8a1e2ec04839`; `npm run check:live` passed all checks.
- Public home returns HTTP 200, contains the anonymous description and original campaign outcomes, and contains no direct client identifiers or internal brief URL. Evidence: ignored `work/anonymous-campaign-publication-2026-10-15.json`.

## CV summary and leadership revision — 2026-10-15

- Synchronized the revised CV after improving its operations/automation summary and restoring leadership of two colleagues. The client-attributed dermatology result remains; no campaign spend was added.
- The PDF remains one page with selectable text, 11-point body text and six active links. The editable Word version was also rendered and visually checked as one page.
- `npm run verify` passed with zero errors, warnings or hints. The four-page production build includes the revised PDF and all five résumé links use `/resume/miguel-carretero-cv-en.pdf?v=16081b54bcd1`.
- Published Cloudflare version `97e49dc3-1e64-4d25-955d-043a59188c78`; `npm run check:live` passed all checks.
- Public GET requests to both the versioned and original PDF URLs return HTTP 200, `application/pdf`, and the exact 92,272-byte worky PDF. SHA-256: `16081b54bcd1c2c8e4f968a43ccf0ac728c3060c02f5aa690db2918f96a2fd75`.
- Verified the three home résumé links and both case-page header links use the new version. Proof: ignored `work/cv-publication-checks-2026-10-15.json`.

## Updated English résumé — 2026-10-14

- Replaced the public PDF with Miguel's supplied `../1Miguel_Carretero_CV_EN.pdf` and versioned the shared résumé URL as `/resume/miguel-carretero-cv-en.pdf?v=7583e76099ba`.
- `npm run verify` passed with zero errors, warnings or hints; four static pages built successfully. The production PDF matches the supplied one-page source byte for byte.
- Published Cloudflare version `39fc4ebb-1398-486c-975f-e145248b7562`; `npm run check:live` passed all page, asset, sitemap, robots and custom 404 checks.
- Public GET requests to the versioned and original PDF URLs return HTTP 200 and `application/pdf`. Both return 92,237 bytes with SHA-256 `7583e76099ba369dadc10f7ff79d25185b1a3658fb8a5695b072fc75a8331976`, identical to the supplied source.
- Verified the three public home résumé links and both case-page header links point to the versioned URL. Publication proof is stored under ignored `work/cv-publication-checks-2026-10-14.json`.

## Square portrait display — 2026-10-14

- Kept the 280px maximum width and changed the visible crop to a square, anchored at the top. The source photo remains unchanged; a local backup of the prior photo and layout is under ignored `work/portrait-before-square-2026-10-14/`.
- `npm run verify` passed with zero errors, warnings or hints.
- Reviewed the production build at 1280px and 320px: square portrait loads without horizontal overflow; desktop portrait ends close to the résumé link.
- Published Cloudflare version `52df464a-44ec-4994-a2d1-4c0096994cc5`; `npm run check:live` passed all checks.
- Public HTML verified against the current build using a version query to bypass a cached prior response. Browser confirmed the public portrait renders at 280 × 280px.
- Publication screenshot: ignored `work/about-square-published.png`.

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
- The downloadable PDF is Miguel's approved English CV revised on 2026-10-15. It describes the current project contributions and adoption, retains the original technical skills, and includes TAP participation and the approved 70% degree progress.

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
- Dermatology campaign patient attribution remains explicitly client-reported. Campaign spend, currency, period, ROI and conversion rates are omitted pending context.
- Gestor adoption is a current count; coordination improvements remain qualitative team observations.
- Published to the same URL, Cloudflare version `51c769e6-edf8-433b-b102-cc1749e0d6e7`.
- `npm run check:live` passed all existing public page, asset, sitemap, robots and custom 404 checks.
- Browser confirmed the three public outcome blocks and followed the Gestor link to the updated case. Public home inspected at the default 507px width and at 1280px: no horizontal overflow, loaded fonts, zero client scripts and no console errors.
- Publication proof saved locally under ignored `work/outcomes-published.jpg`.

## Portrait update — 2026-10-14

- `npm run verify` passed: zero TypeScript/content errors, warnings and hints; four static pages built with responsive portrait assets.
- The selected edited portrait is stored in the repository. The original attached image remains unchanged and has a local backup under ignored work/.
- About has a full-width heading followed by a photo and biography; the mobile layout stacks the content.
- Visually inspected the production build at desktop 1280px, tablet 640px and mobile 320px. Also checked dimensions and overflow at 390px. No horizontal overflow at any checked width.
- Portrait loads successfully, includes meaningful alternative text and dimensions, and uses lazy loading. Browser selected the optimized AVIF source.
- Existing About copy, location/languages and resume link remain present. No client-side scripts or new runtime services were added.
- No browser console errors during the local review.
- Published on the existing Worker, version `cca99350-b7e0-4958-8359-45e6291f4371`.
- `npm run check:live` passed all existing page, asset, sitemap, robots and 404 checks.
- Public AVIF and WebP assets return 200, the expected image MIME types and immutable cache headers.
- Browser verified the public About section with a loaded portrait and fonts, no horizontal overflow and no console errors. Saved screenshot under ignored `work/about-portrait-published.jpg`.
