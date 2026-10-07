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
| 7c | Publish outcome update | Updated public pages and existing release checks pass | In progress |

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
- 2026-10-07 — Chunk 7a: added three selected outcomes to the home: Soluntech's monthly discovery-call range, the Cáceres campaign's 104 conversations and client-attributed patient outcome, and Gestor's three current users. Expanded the Soluntech story with the searchable Sheet and manual Pipedrive handoff. Recorded source limitations in CONTENT_SOURCES.md; omitted unconfirmed campaign currency/period and percentage claims. Type/content check and production build passed. Browser inspection covered desktop, 320px mobile and 640px tablet; corrected number wrapping at the intermediate width.
- 2026-10-07 — Chunk 7b: updated Gestor's adoption highlight, outcome narrative and current state to reflect two marketing users and one design user. The end of delays caused by missed awareness is explicitly a team observation, not a measured zero-delay rate or a claim about all production delays. Production case inspected on desktop and 320px mobile; the home-to-case outcome link and case index anchors resolve correctly.
