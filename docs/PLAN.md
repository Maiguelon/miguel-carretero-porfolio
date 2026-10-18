# Implementation plan

## Goal

Help potential employers and collaborators understand Miguel's experience, inspect his work, and get in touch. Show how he identifies operational friction, makes product decisions and builds useful tools with AI-assisted implementation.

## Approved requirements

- English first; allow Spanish to be added later.
- A clear, restrained visual design with personality, readable typography and project screenshots.
- Home page: introduction, selected work, background, experience and contact.
- Individual case pages for Gestor Aramis and Editorial Cockpit.
- Downloadable English CV, GitHub, LinkedIn and direct email contact.
- Accurate project status and authorship; outcomes must match the available evidence.
- Prepare the project content model for LeadOps and the scheduling bot without publishing empty cases.
- Astro, TypeScript, custom CSS and Markdown content; static hosting on Cloudflare.
- Personal photos can be added later. The first release must look complete without them.
- Verify each meaningful chunk before making a local commit.

## Chunks

| Chunk | Scope | Completion check | Status |
| --- | --- | --- | --- |
| 1 | Requirements, narrative, evidence and asset inventory | Requirements match the conversation; links and evidence identified | Complete |
| 2 | Astro structure, shared components and visual foundations | Development server and production build work; basic mobile layout checked | Complete |
| 3 | Complete home page | Real copy, usable navigation, CV and contact links | Complete |
| 4a | Gestor Aramis case | Problem, contribution, decisions, evidence and status are clear | Complete |
| 4b | Editorial Cockpit case | Human review, development process and demo limitations are clear | Complete |
| 5 | Visual and release review | Desktop/mobile/keyboard checks, metadata, links and production build pass | Complete |
| 6 | Cloudflare publication | Published pages, assets, downloads and 404 checked against the live URL | Complete |
| 7a | Selected outcomes and Soluntech experience | Monthly call ranges, campaign results and current adoption have accurate context; desktop/mobile layout checked | Complete |
| 7b | Gestor adoption update | Three current users and team-reported coordination outcome reflected in the case | Complete |
| 7c | Publish outcome update | Updated public pages and existing release checks pass | Complete |
| 8a | Edit and preserve the personal portrait | Selected image copied into the repository; original preserved; edit prompt recorded | Complete |
| 8b | Add portrait to About | Responsive layout, image loading and existing content checked | Complete |
| 8c | Publish portrait update | Public About section and static assets verified | Complete |
| 12a | Focus the home outcomes | Remove the redundant RFP link and campaign highlight; emphasize Gestor adoption; verify desktop and mobile | Complete |
| 12b | Publish focused outcomes | Existing Cloudflare deployment updated and live content verified | Complete |

## Content structure

Home at `/`, cases at `/projects/gestor-aramis/` and `/projects/editorial-cockpit/`.

Project content has a slug, title, summary, publication flag, project status, role, stack, image and optional repository/demo/walkthrough links. The case body holds the narrative. Project status and publication status are separate: future cases can remain unpublished until they tell a useful, substantiated story.

## Release checks

- Production build and TypeScript/content validation.
- Readable and operable on desktop and narrow mobile screens.
- Visible keyboard focus, meaningful headings, image alternatives and reduced-motion support.
- Contact, resume, case routes and project links behave as labelled.
- Metadata, social preview and error page exist.
- No real client material, credentials or invented results in public assets.

## Decisions

- Use supplied CV content as background; current project status comes from the conversation and project documentation.
- Present Gestor first because it has real adoption. Present Cockpit as a functional project, not an adopted agency system.
- Use fictional demo screenshots from Gestor. Use an inspected public demo or a clearly labelled explanatory diagram for Cockpit.
- Contact uses direct email; a form service is unnecessary for the initial scope.
- Publication will use Cloudflare static assets. Domain and authenticated hosting setup are release concerns.
- Cloudflare's current Pages command delegated new-project creation to Workers. The first release uses a new static-assets Worker; the existing Gestor Pages project is unrelated. Existing login permissions were sufficient, and no new authorization was needed.

## Progress log

- 2026-10-06 — Located the empty repository, checked the environment, approved scope and relevant sources. No application code or deployment yet.
- 2026-10-06 — Chunk 2: Astro 7 structure, typed project collection, shared layout, local fonts, CV and initial project assets. Type/content check: zero errors, warnings or hints. Production build passed. The 390px mobile foundation has no horizontal overflow. Updated Sharp through an override for Wrangler's dependency; npm audit reports zero vulnerabilities. Empty collection notices are expected before chunk 4 adds the cases.
- 2026-10-06 — Chunk 3: complete English home, profile/contact/resume links, two project cards and shared case-page structure with initial accurate overviews. Type/content validation and four-page build passed. Desktop and 390px mobile inspection showed both projects and no horizontal overflow. Both case routes and the supplied PDF return HTTP 200. Case narratives are expanded in chunk 4.
- 2026-10-06 — Chunk 4a: Gestor narrative expanded with the operational problem, Miguel's contribution, 122-video decision, Drive/MOV integration, focused workflow, qualitative adoption evidence and current scope. Type/content checks and build passed; the browser confirmed all seven sections and valid table-of-contents targets.
- 2026-10-06 — Chunk 4b: Cockpit case describes the initial GPT workflow, relational model, Excalidraw sketches, chunk-based development, human review boundary and agent responsibilities. Public stub demo and current adoption status are explicit. Type/content checks and build passed; browser confirmed six sections, valid index anchors and the expandable implementation explanation.
- 2026-10-06 — Chunk 5: production build inspected on desktop and 320/390px mobile; keyboard skip/focus and case links checked. Added social preview and noindex error-page metadata; corrected screenshot dimensions. Validation evidence is recorded in RELEASE_CHECKS.md.
- 2026-10-06 — Chunk 6: deployed static assets to https://miguel-carretero-portfolio.miguel-carretero.workers.dev. Final deployment version: 16897ef2-2c11-46ec-8b62-fce6c6e1f35a. Public origin, canonical/social metadata, robots, sitemap and response headers configured. The live check passed all page/asset/status checks, including the custom HTTP 404. Browser confirmed the public home, loaded images and zero client scripts. First-release scope is complete; photos, custom domain, Spanish and future project cases can follow.
- 2026-10-07 — Chunk 7a: added three selected outcomes to the home: Soluntech's monthly discovery-call range, the dermatology campaign's 104 conversations and client-attributed patient outcome, and Gestor's three current users. Expanded the Soluntech story with the searchable Sheet and manual Pipedrive handoff. Recorded source limitations in CONTENT_SOURCES.md; omitted unconfirmed campaign currency/period and percentage claims. Type/content check and production build passed. Browser inspection covered desktop, 320px mobile and 640px tablet; corrected number wrapping at the intermediate width.
- 2026-10-07 — Chunk 7b: updated Gestor's adoption highlight, outcome narrative and current state to reflect two marketing users and one design user. The end of delays caused by missed awareness is explicitly a team observation, not a measured zero-delay rate or a claim about all production delays. Production case inspected on desktop and 320px mobile; the home-to-case outcome link and case index anchors resolve correctly.
- 2026-10-07 — Chunk 7c: published the outcome update to the existing Cloudflare Worker, version 51c769e6-edf8-433b-b102-cc1749e0d6e7. The live smoke check passed all page, asset, sitemap, robots and 404 checks. Browser confirmed the public home outcomes and updated Gestor case, loaded fonts, zero client scripts, no horizontal overflow and no console errors. Local proof is saved under ignored work/outcomes-published.jpg. Campaign timing/currency and the Soluntech measurement details remain follow-up content questions; no unsupported derived metrics were added.
- 2026-10-14 — Chunk 8a: edited Miguel's supplied portrait with built-in imagegen for a closer crop and a softer park background. Selected source lives in src/assets/miguel-portrait-edited.png. The complete prompt and delivery method are recorded in docs/PORTRAIT.md. The supplied original is unchanged; an additional local backup is kept under ignored work/miguel-portrait-original.png.
- 2026-10-14 — Chunk 8b: added the portrait to About, with a full-width introduction and a photo/biography layout that stacks on mobile. Preserved the existing biography, location/languages and resume link. Astro supplies responsive AVIF/WebP assets with dimensions, alt text and lazy loading. Type/content check and four-page production build passed. Visually inspected desktop, tablet and narrow mobile; no horizontal overflow at 1280px, 640px, 390px or 320px, and no browser console errors.
- 2026-10-14 — Chunk 8c: published to the existing Cloudflare Worker, version cca99350-b7e0-4958-8359-45e6291f4371. Live checks passed for all public pages, CV/social assets, robots, sitemap and custom 404; AVIF/WebP portrait assets return 200 with expected content types and immutable cache headers. Public browser confirmed the loaded portrait, fonts, About layout and no console errors. Saved proof under ignored work/about-portrait-published.jpg.
- 2026-10-14 — Chunk 9a: replaced the downloadable résumé with Miguel's supplied 1Miguel_Carretero_CV_EN.pdf and versioned the shared link using its content hash. Confirmed the source is a one-page English PDF, the production asset matches it byte for byte, and all three home links plus both case-page header links use the new version. Type/content validation passed with zero errors, warnings or hints; the four-page production build passed.
- 2026-10-14 — Chunk 9b: published the updated résumé on the existing Cloudflare Worker, version 39fc4ebb-1398-486c-975f-e145248b7562. Public checks passed; both the versioned and original PDF URLs return the exact supplied 92,237-byte file, verified by SHA-256. Confirmed all five public résumé links use the new version. Saved publication evidence under ignored work/cv-publication-checks-2026-10-14.json.
- 2026-10-15 — Chunk 10a: synchronized the revised one-page CV after Miguel approved a summary led by 2+ years of operations/automation experience and leadership of two marketing/design colleagues. Kept the client-attributed dermatology result and omitted campaign spend. Updated the shared résumé link to content version 16081b54bcd1. Type/content validation and four-page production build passed; the production PDF matches the worky source byte for byte and all five résumé links use the new version.
- 2026-10-15 — Chunk 10b: published the revised CV on the existing Worker, version 97e49dc3-1e64-4d25-955d-043a59188c78. Public checks passed; both résumé URLs return the exact 92,272-byte PDF now stored in worky, verified by SHA-256. Confirmed all five public résumé links use the new content version. Evidence saved under ignored work/cv-publication-checks-2026-10-15.json.
- 2026-10-15 — Chunk 11a: anonymized the dermatology client as “a dermatology practice” at Miguel's request. Preserved the three-ad context, 104 conversations and client-attributed patient result. Removed identifying references and the internal source-document URL from current repository documentation; retained the original reference only under ignored work/. Reviewed all three public screenshots and verified the public CV contains no client name. Type/content validation and the four-page production build passed; current source, documentation and generated pages contain no direct client identifiers.
- 2026-10-15 — Chunk 11b: published the anonymous campaign description on the existing Worker, version 5cfc9388-96db-4b3c-b78b-8a1e2ec04839. All public checks passed. Verified the live home retains the original campaign outcomes and contains no direct client identifiers or internal source-document URL. Evidence saved under ignored work/anonymous-campaign-publication-2026-10-15.json.
- 2026-10-18 — Chunk 12a: narrowed the home outcomes to Soluntech and Gestor. Removed the redundant RFP-to-background link and the dermatology highlight; no additional RFP case or screenshots are implied. Changed Gestor's large adoption figure to “Adopted by the whole team”, retaining the three-person count and qualitative coordination feedback below it. Updated the grid for two cards. Type/content checks passed with zero errors, warnings or hints; the four-page production build passed. Browser review at 1280px, 640px and 320px found no page/card horizontal overflow or console errors. Followed the remaining outcome link to the Gestor case's “What changed” heading.
- 2026-10-18 — Chunk 12b: published on the existing Worker, version 18a4e319-1d97-4d35-bfc0-227651fd39f4. All live checks passed. Public HTML and browser review confirmed two outcome cards, the retained Soluntech ranges, Gestor's team-adoption headline and supporting count, and removal of the campaign highlight and redundant RFP link. Publication evidence is saved under ignored work/focused-outcomes-publication-2026-10-18.json and work/outcomes-focused-published.png.
