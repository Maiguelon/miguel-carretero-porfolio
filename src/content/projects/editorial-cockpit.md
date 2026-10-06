---
title: Editorial Cockpit
subtitle: AI workflows · Human review
summary: A structured editorial workflow where AI proposes plans and drafts, and a person reviews the decisions before they are applied.
published: true
order: 2
number: '02'
status: Functional MVP
category: AI-assisted editorial workflow
role: Workflow, data model, agent design & iterative testing
context: Personal project · Also called Cabina
stack: [Next.js, TypeScript, Prisma, PostgreSQL, OpenAI]
cover: /images/editorial-cockpit.jpg
coverAlt: Public Editorial Cockpit demo showing editorial periods and pieces awaiting review.
coverCaption: Screenshot of the public demo. It uses deterministic stub providers; clicking through the demo does not make live AI calls.
theme: clay
repository: https://github.com/Maiguelon/AramisEditorial
demo: https://aramis-editorial.vercel.app/
demoLabel: Explore the public demo
walkthrough: https://www.loom.com/share/ae1ff2dab0b84381a2bbbad6dc5a79b0
highlights:
  - label: Core principle
    value: A person approves the plan
  - label: System design
    value: Three focused AI agents
  - label: Current state
    value: Functional project & demo
---

## The starting point

In the agency, we already used custom GPTs to draft captions from a short input: client, topic, objective and details. The GPT used previous captions as context. That helped with writing, but planning the work and keeping responsibilities clear still needed coordination.

Cabina explored a more structured editorial process: keep the client context, commercial plan, editorial period and individual pieces together, then use AI within that workflow. The central question was how to make planning and generation useful while preserving a person's control over the result.

## My contribution

I first thought through the workflow and wrote an initial **relational data model**, then refined it with AI. Separating a client's commercial plan from an editorial period helped model the difference between what we had agreed to deliver and the particular batch of content we were working on.

I defined the agent responsibilities and deterministic Orchestrator early in the project, with human review as a core requirement. For the interface, I drew layouts in Excalidraw and used those sketches to guide implementation with Codex.

Development followed an implementation plan split into chunks. I tried each part, debugged issues with the coding assistant, and moved on once it worked. That gave me a concrete way to evaluate the system throughout development.

The repository keeps the [relational-model notes](https://github.com/Maiguelon/AramisEditorial/blob/main/relacional-final.txt) and [agent-role definitions](https://github.com/Maiguelon/AramisEditorial/blob/main/roles-tecnicos-v1.txt) alongside the application.

## Review before applying

The Planner returns a proposed set of operations: create a piece, update it, discard it or reschedule it. Each operation includes a reason. The interface lets a person inspect and edit that proposal before applying it.

<ol class="workflow" aria-label="Editorial planning workflow"><li>01 · Client context</li><li>02 · AI proposal</li><li>03 · Human review</li><li>04 · Apply the plan</li></ol>

The backend validates the operation shape and domain rules before persisting changes. Drafts, captions and story adaptations are then reviewed at the piece level. Human approval is built into the workflow.

## Focused agents, explicit responsibilities

The system separates three AI responsibilities:

- **Planner:** proposes the editorial plan as reviewable operations.
- **Writer:** creates drafts and captions using the piece and client context.
- **Story Adapter:** adapts a piece into story content.

A **deterministic Orchestrator** routes events and triggers those flows. Routing is implemented in code; the language model works inside the defined generation tasks. Each agent returns structured output that the backend validates.

This separation makes each responsibility easier to inspect and keeps the review points clear. The technical notes describe the context and contracts associated with each role.

## What you can try

The public demo runs with **deterministic stub providers**. It lets a reviewer explore the planning and review interface without requiring an API key or consuming AI tokens. The application also implements an OpenAI provider behind the same agent contracts.

The interface is in Spanish. You can explore editorial periods, individual pieces and the client configuration, or watch the linked product walkthrough for a guided tour.

<details><summary>The implementation</summary><p>The application uses Next.js and TypeScript, with Prisma and PostgreSQL for persistence. Agents use structured output contracts and backend validation. Stub and OpenAI providers share those contracts; the public demo uses stubs. The relational model distinguishes clients, commercial plans, editorial periods and content pieces.</p></details>

## Current state and learning

Cabina is a **functional MVP and personal project**. The agency continues to use its existing GPT workflow for daily content production. Cabina has not been adopted operationally, so this case describes its design and implementation rather than measured agency outcomes.

The project made the review boundary concrete: a proposed operation can be inspected, edited and approved, and its application can be validated by the backend. It also gave me practice moving from a process and data model to a working interface through small implementation steps.

Authentication, multi-tenancy and background jobs are future product work. Revisiting Cabina would start with today's team workflow and an adoption plan, then determine which parts of the system are worth extending.
