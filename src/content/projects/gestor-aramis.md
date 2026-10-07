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
coverAlt: Gestor Aramis management view showing pending content, deadlines, status and next actions using fictional demo data.
coverCaption: Management view with fictional demo data. The internal V1 is deployed and used by the team; access requires a team account.
theme: olive
repository: https://github.com/Maiguelon/GestorAramis
demo: https://gestor-aramis.pages.dev/
demoLabel: Open app · team login
highlights:
  - label: Real adoption
    value: 3 people using it
  - label: Key decision
    value: Keep native Drive uploads
  - label: Design goal
    value: Make the next action clear
---

## The problem

In our agency, a piece of content moves through planning, scripts, footage, design and review. Google Drive already held the files, and messages carried the updates. The difficult part was keeping the handoff clear: what was ready, what was missing and who needed to act next.

A question like “Is the latest reel ready?” could mean that filming was done, that design had delivered it, or that marketing had approved it. We needed the answer to be visible in one place.

We had also tried tools that put useful capabilities behind a paywall, missed parts of our workflow, or offered so many options that we barely used them. The goal was a focused workspace shaped around the way our team actually works.

## My contribution

My main contribution was **product definition, workflow design, prioritization and validation with the team**. AI coding tools handled much of the implementation. I brought the operational context, decided what the tool needed to support, and used feedback from my colleague to adjust the product.

One priority was keeping design's work in the same place: open a piece, read the script, access the source material, see the deadline and submit a delivery for review. The interface should make the next action easy to find.

## The 122-video decision

During development, my colleague ran into trouble uploading **122 clips from a football match**. Their usual process was to upload everything to Drive, remove the footage that would not be used, and then let design know the material was ready.

The native Drive upload flow was better suited to that large batch and its background upload behavior. Requiring every file to pass through the new tool would have made this task slower.

I adapted the workflow so marketing could keep uploading directly to a linked Drive folder. The workspace brings those files into the piece when it checks the folder, and design can access them from the task. These checks run through the app; they are not a continuous background watcher of every Drive folder.

This also exposed a practical file-format issue: much of the footage came from iPhones. Integrating the Google viewer made it possible to preview MOV videos from the workspace.

## Designed for the next action

The tool follows a small, explicit workflow:

<ol class="workflow" aria-label="Content workflow"><li>01 · Plan</li><li>02 · Produce</li><li>03 · Review</li><li>04 · Approved</li></ol>

- **Marketing sees pending work.** Each piece shows its stage, deadline and next step.
- **Design starts with the production queue.** Scripts, material and correction reasons are accessible from the piece.
- **Finished work goes through an explicit review.** Marketing can approve a delivery or return it with a reason. Approval is tied to the specific delivery version.
- **Email summaries make handoffs visible.** Design receives production entries and returns; marketing receives new deliveries awaiting review. Each person can adjust their notification preferences.

<figure><a href="/images/gestor-design.jpg" target="_blank" rel="noopener"><img src="/images/gestor-design.jpg" alt="Design production queue with a content card, deadline, script and material shortcuts. All displayed client data is fictional." loading="lazy" /></a><figcaption>The design workspace brings the task and its material together. Fictional demo data.</figcaption></figure>

## What changed

**Three people now use the internal V1: two in marketing and one in design.** Everyone shares the same view of work status and pending actions. Since adopting the tool, our team reports no more delays caused by someone being unaware of what needed attention.

My colleague also reports that design is working more efficiently. We no longer have to keep sending messages asking someone to check a folder or clarifying which part of a piece is still missing.

Work status is now easier to inspect. The answer to “Is the latest reel ready?” has a clear place in the system, together with the action needed to move it forward.

The three-person adoption count reflects current use. The coordination and efficiency outcomes are observations from our team, rather than a measured delay rate or time-saving percentage.

## Under the hood

The interface uses React and TypeScript. Cloudflare hosts the application and API; Supabase provides authentication and PostgreSQL storage; Google Drive remains the file store. A scheduled Worker and Resend deliver the email summaries.

<details><summary>A few reliability decisions</summary><p>Commands use request identifiers and expected revisions so a retry does not duplicate work or overwrite a newer change. Deliveries pin Drive revisions so an approved file cannot silently change. Notification events are recorded with workflow changes, and dispatch uses database leases and email idempotency keys. The repository documents the verification and trade-offs behind these choices.</p></details>

## Current state

The internal V1 is complete, deployed and used by three people across marketing and design. The hosted application requires a team login; the repository includes a local demo with fictional data.

Client calendars, approvals and material-request flows exist as local prototypes. Connecting that client experience to the live system is the next product phase.
