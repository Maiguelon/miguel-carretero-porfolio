---
title: Gestor Aramis
subtitle: Content operations · Internal tool
summary: A focused workspace for planning, production assets and review, built around the daily work of a small marketing team.
published: true
order: 1
number: '01'
status: In use
category: Content operations
role: Product definition, workflow design & validation
context: Aramis Agency · Internal V1
stack: [React, TypeScript, Supabase, Google Drive, Cloudflare, Resend]
cover: /images/gestor-pending.jpg
coverWidth: 1264
coverHeight: 1070
coverAlt: Gestor Aramis management view showing pending content, deadlines, status and next actions using fictional demo data.
coverCaption: Management view with fictional demo data. An English public demo is available without an account.
theme: olive
repository: https://github.com/Maiguelon/GestorAramis
demo: https://gestor-aramis-demo.pages.dev/
demoLabel: Try the public demo
demoRequiresLogin: false
brief:
  problem: Content status and handoffs were scattered across Drive folders and messages.
  contribution: Defined the workflow and priorities, guided AI-assisted development and tested it with the team.
  outcome: Used by our three-person team. Marketing and design share work status and next actions.
---

## The workflow

A question like “Is the latest reel ready?” used to require checking messages and folders. Gestor gives marketing and design one place to see the stage, material and next action.

<ol class="workflow" aria-label="Content workflow"><li>01 · Plan</li><li>02 · Produce</li><li>03 · Review</li><li>04 · Approved</li></ol>

In the English demo, choose “Try the workflow” for a guided example of review and approval. Changes stay in your browser.

- **Marketing:** prepare each piece and see what is missing.
- **Design:** open the production queue with the script, footage and correction notes together.
- **Review:** approve a delivery or return it with a reason, tied to that version.
- **Follow-up:** email summaries flag production work for design and new deliveries for marketing.

<figure><a href="/images/gestor-design.jpg" target="_blank" rel="noopener"><img src="/images/gestor-design.jpg" width="1280" height="720" alt="Design production queue with a deadline, script and material shortcuts. All displayed client data is fictional." loading="lazy" /></a><figcaption>The production queue keeps the task and its material together. Fictional demo data.</figcaption></figure>

## The 122-video decision

During development, my colleague had trouble uploading **122 clips from a football match**. Their routine was to upload everything to Drive, remove unused footage and tell design when it was ready.

Native Drive uploads handled that batch better. I changed the requirements so marketing could keep using Drive, while design accessed the files from the piece. The app checks the linked folder to bring those files into the workspace. The Google viewer also lets design preview iPhone MOV footage.

This was part of my work on requirements, priorities and validation with the team. I kept the interface focused on the next action and used feedback to adjust the flow.

## What changed

Marketing and design now share the same view of pending work. Our team reports no more delays caused by someone being unaware that a piece needed attention, and my colleague reports more efficient design work.

We spend less time asking someone to check a folder or explaining which part of a reel is still missing. These are observations from our team; time savings have not been measured.

<details><summary>Implementation and current scope</summary><p>AI coding tools handled much of the implementation. The interface uses React and TypeScript; Cloudflare hosts the application and API; Supabase provides authentication and PostgreSQL; Google Drive stores files; a scheduled Worker and Resend deliver summaries. Folder checks run through the app, rather than continuously while it is closed.</p><p>Request identifiers and revision checks help prevent duplicate commands or overwriting newer work. Deliveries retain the approved Drive revision, and notification dispatch uses database leases and email idempotency keys. The repository documents these decisions.</p><p>The internal workspace is deployed for the team. The public demo is a separate static version: changes stay in the visitor's browser, with no live Drive connection or outgoing email.</p></details>
