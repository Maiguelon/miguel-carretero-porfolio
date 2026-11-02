---
title: Aramis LeadOps
subtitle: CRM implementation · Workflow automation
summary: An inbound workflow that turns a website inquiry into a HubSpot contact, an AI-assisted brief and an assigned review task.
published: true
order: 2
number: '02'
status: Connected MVP
category: CRM & automation
role: Process design, CRM mapping, AI constraints & validation
context: Aramis Agency · Published capture, local processing
stack: [HubSpot, n8n, Tally, OpenAI, Resend]
cover: /images/leadops-review.png
coverWidth: 1280
coverHeight: 720
coverAlt: Internal LeadOps email card in Resend showing a fictional inquiry, suggested service fit, separate certainty and required human review.
coverCaption: Internal review email in Resend from a fictional connected test. No real inquiry data is shown.
theme: slate
repository: https://github.com/Maiguelon/aramis-lead-intelligence
brief:
  problem: Website inquiries needed an owner, their original context and a clear next step.
  contribution: Defined CRM mapping, consent rules and review tasks; guided AI-assisted implementation in n8n.
  outcome: Capture is live. The full flow was tested with fictional inquiries; processing runs locally.
---

## The workflow

A consented inquiry from the Aramis website is captured in Tally, checked in n8n and handed to HubSpot. Two AI steps prepare a brief and a service-fit recommendation. An internal email links the reviewer back to the CRM.

<ol class="workflow" aria-label="Inbound inquiry workflow"><li>01 · Capture</li><li>02 · Check context</li><li>03 · Prepare the brief</li><li>04 · Assign review</li><li>05 · Human decision</li></ol>

<figure><a href="/images/leadops-plan.png" target="_blank" rel="noopener"><img src="/images/leadops-plan.png" width="1265" height="712" alt="Empty Aramis inquiry form showing the selected video plan, with no personal data entered." loading="lazy" /></a><figcaption>The selected plan stays visible when the visitor reaches the form. Empty published form.</figcaption></figure>

## What reaches the reviewer

- **The contact and its history.** A new note preserves the request, selected services, source and missing information.
- **A specific next step.** A HubSpot task has a responsible person and a due date.
- **A brief to inspect.** Suggested fit, certainty and sources are separate. The reviewer checks them and chooses the next action.

I defined the intake requirements, CRM mapping and review rules, then guided implementation with AI coding tools. The goal was to make the handoff usable before anyone replied to the prospect.

## Decisions behind the handoff

**One person, separate inquiries.** A returning contact keeps their existing owner and lifecycle. A new inquiry creates new activity; a repeat of the same completed submission stops before creating more tasks or emails.

**Fit and certainty are different.** Missing budget, timing or an accessible profile means more questions. It does not automatically make the inquiry a poor fit. Unsupported research stays unverified, and AI failures leave a clearly labelled manual review.

**Consent and ownership are explicit.** Permission to answer the inquiry is required before processing. That permission does not subscribe someone to marketing. The CRM holds the work; email alerts the reviewer.

## Current operation

Tally keeps collecting inquiries when the computer is off. Local n8n polls every five minutes and processes one pending completed submission per execution.

The connected tests completed the flow with fictional inquiries using real services. Capture is enabled for consented inquiries; commercial outcomes have not yet been measured.

<details><summary>Connected tests and technical details</summary><p>The pilot verified contact reuse, separate notes/tasks for new inquiries, both real AI steps and internal cards. Subsequent polls left completed effects unchanged. Two fictional pilot cards were independently observed as Delivered in Resend; API acceptance on other runs is recorded separately.</p><p>At the source review on 31 October 2026, all 96 automated checks passed. The offline demonstration uses simulated providers: two contacts produced three notes, tasks and cards; a duplicate added no effects and refused consent was rejected. These checks validate behavior, not acquisition or conversion.</p><p>Progress is recorded before external writes. Uncertain outcomes stop for reconciliation rather than being retried blindly. Production execution is serialized. The MVP covers contacts, associated notes and review tasks, with attribution primarily in notes; company associations, deals, a full sales pipeline and native HubSpot reporting remain outside its scope.</p><p>AI does not send prospect outreach or advance existing contacts through a lifecycle. The agency form is real business intake, not a visitor testing sandbox.</p></details>
