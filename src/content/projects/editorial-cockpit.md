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

## Overview

Editorial Cockpit, or Cabina, organizes client context, editorial periods and content pieces around an AI-assisted planning and writing flow. AI suggestions are reviewable operations; a person decides which changes to apply.

I designed the workflow and initial relational model, defined the agents and human review boundary, sketched interfaces in Excalidraw, and tested implementation chunks built with Codex. It remains a functional project; the agency has not adopted it for daily content production.
