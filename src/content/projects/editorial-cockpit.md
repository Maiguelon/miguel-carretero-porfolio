---
title: Editorial Cockpit
subtitle: AI workflows · Human review
summary: A structured editorial workflow where AI proposes plans and drafts, and a person reviews the decisions before they are applied.
published: true
order: 3
number: '03'
status: Functional MVP
category: AI-assisted editorial workflow
role: Workflow, data model, agent design & iterative testing
context: Personal project · Also called Cabina
stack: [Next.js, TypeScript, Prisma, PostgreSQL, OpenAI]
cover: /images/editorial-cockpit.jpg
coverWidth: 1265
coverHeight: 712
coverAlt: Public Editorial Cockpit demo showing editorial periods and pieces awaiting review.
coverCaption: Public demo with simulated AI responses. The product interface is in Spanish.
theme: clay
repository: https://github.com/Maiguelon/AramisEditorial
demo: https://aramis-editorial.vercel.app/
demoLabel: Explore demo · simulated AI
walkthrough: https://www.loom.com/share/ae1ff2dab0b84381a2bbbad6dc5a79b0
brief:
  problem: Caption drafting was streamlined, but planning and responsibilities still needed coordination.
  contribution: Designed the workflow, relational data model and three AI agent roles with human review.
  outcome: Functional personal MVP with a public demo; not adopted for agency production.
---

## The workflow

We already used custom GPTs to draft captions. Cabina explores how to connect that writing step to client context, an editorial period and individual pieces, while keeping a person in control.

<ol class="workflow" aria-label="Editorial planning workflow"><li>01 · Client context</li><li>02 · AI proposal</li><li>03 · Human review</li><li>04 · Apply the plan</li></ol>

The Planner proposes actions such as creating, updating or rescheduling a piece, with a reason for each. A person can inspect and edit the proposal before applying it. Drafts and captions are reviewed at the piece level.

The important interaction is the review: **a proposed change stays a proposal until a person approves it.**

## The decisions I owned

I started with the workflow and an initial relational data model, then refined it with AI. Separating the commercial plan from the editorial period kept the agreed deliverables distinct from a particular batch of content.

I defined three focused roles: a **Planner** for the plan, a **Writer** for drafts and captions, and a **Story Adapter** for story content. A deterministic Orchestrator routes their tasks; human review was a requirement from the beginning.

I sketched interfaces in Excalidraw and guided AI-assisted development in small chunks, testing and debugging each part before moving on.

## What you can try

The public demo lets you explore editorial periods, pieces and client configuration, using simulated AI responses. It needs no API key. The linked walkthrough gives a guided tour; the interface is in Spanish.

The project made the review boundary concrete and gave me practice turning a process and data model into a working interface. It remains a personal MVP: the agency continues to use its existing GPT workflow for production.

<details><summary>Implementation, design notes and next steps</summary><p>The application uses Next.js and TypeScript, Prisma and PostgreSQL. Backend rules validate proposed operations before saving changes. Stub and OpenAI providers share the same output contracts; the public demo uses stubs and makes no live AI calls.</p><p>The repository preserves the <a href="https://github.com/Maiguelon/AramisEditorial/blob/main/relacional-final.txt">relational-model notes</a> and <a href="https://github.com/Maiguelon/AramisEditorial/blob/main/roles-tecnicos-v1.txt">agent-role definitions</a>. Authentication, multi-tenancy and background jobs are future work. Revisiting the project would start with the current team workflow and an adoption plan.</p></details>
