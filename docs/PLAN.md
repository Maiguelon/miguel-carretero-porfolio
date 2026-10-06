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
| 3 | Complete home page | Real copy, usable navigation, CV and contact links | Pending |
| 4a | Gestor Aramis case | Problem, contribution, decisions, evidence and status are clear | Pending |
| 4b | Editorial Cockpit case | Human review, development process and demo limitations are clear | Pending |
| 5 | Visual and release review | Desktop/mobile/keyboard checks, metadata, links and production build pass | Pending |
| 6 | Cloudflare publication | Published pages, assets, downloads and 404 checked against the live URL | Pending |

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

## Progress log

- 2026-10-06 — Located the empty repository, checked the environment, approved scope and relevant sources. No application code or deployment yet.
- 2026-10-06 — Chunk 2: Astro 7 structure, typed project collection, shared layout, local fonts, CV and initial project assets. Type/content check: zero errors, warnings or hints. Production build passed. The 390px mobile foundation has no horizontal overflow. Updated Sharp through an override for Wrangler's dependency; npm audit reports zero vulnerabilities. Empty collection notices are expected before chunk 4 adds the cases.
