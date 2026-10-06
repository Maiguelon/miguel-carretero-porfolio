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

These checks cover the portfolio's current static pages and links. They do not constitute a formal WCAG certification or verification of the projects' underlying integrations. Live hosting, headers, canonical metadata and the actual missing-page response are checked in chunk 6.
