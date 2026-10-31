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
coverCaption: A fictional inquiry processed through the connected services. This is an internal email preview in Resend, not a native HubSpot card.
theme: slate
repository: https://github.com/Maiguelon/aramis-lead-intelligence
highlights:
  - label: Handoff
    value: A CRM record and an owned task
  - label: AI boundary
    value: Evidence first, human decision
  - label: Operating model
    value: Online capture · Local processing
---

## The starting point

A form notification tells someone that an inquiry arrived. It does not establish who owns the follow-up, preserve the context behind the request or make the next action visible.

I built LeadOps for Aramis to connect those steps: capture the inquiry, keep its source and selected services, prepare a brief, and put a review task in HubSpot with an owner and a due date.

**The capture is published and enabled for consented inquiries.** The connected acceptance checks used fictional data with real services. Aramis gets most of its work through referrals, so this case demonstrates a working process and its validation; it does not claim increased lead volume, revenue or time savings.

## My contribution

I defined the process, intake requirements, CRM field mapping and review handoff. I also set the rules for consent, contact matching, AI evidence and recovery when an external service returns an uncertain result.

Using AI-assisted development, I guided the implementation, tested the paths and reviewed what appeared in the CRM and internal card. The product decisions were about making each inquiry usable: keep the original context, show what is missing and give a person a clear next step.

## From inquiry to review

<ol class="workflow" aria-label="Inbound inquiry workflow"><li>01 · Capture</li><li>02 · Validate</li><li>03 · Prepare the brief</li><li>04 · Create the task</li><li>05 · Human review</li></ol>

- **Tally captures the request.** Contact and plan buttons on the Aramis website open the form. Plan inquiries show the selected services; source and UTM information travel with the submission. A displayed plan price is not treated as a declared budget.
- **n8n checks the input.** Explicit consent, identity and completed-event checks come before provider writes. A returning person can reuse the same HubSpot contact while creating a new inquiry activity.
- **Two AI steps prepare the review.** The first creates a brief and bounded research from supplied professional context. The second recommends service fit, with its certainty and missing information shown separately.
- **HubSpot holds the work.** The contact receives an associated note and an assigned review task. An internal Resend card alerts the reviewer and links back to the CRM. A person checks the evidence and chooses the next action.

<figure><a href="/images/leadops-plan.png" target="_blank" rel="noopener"><img src="/images/leadops-plan.png" width="1265" height="712" alt="Empty published Aramis inquiry form showing the selected video plan and four reels per month, with no personal data entered." loading="lazy" /></a><figcaption>The selected plan stays visible when a visitor reaches the form. Empty public form; no inquiry was submitted for this screenshot.</figcaption></figure>

## Decisions behind the handoff

### Keep the person and the inquiry separate

A new inquiry from an existing contact should add context, not duplicate the person. Existing ownership and lifecycle remain unchanged. Each distinct submission gets its own note and review task; a replay of a completed submission stops before repeating those effects.

### Keep fit separate from certainty

An inquiry can fit the service even when its budget or timing is unknown. An inaccessible profile is also a gap in evidence, not a reason to reject the lead. I kept those uncertainties visible rather than hiding them inside a single score.

Research must use observed public sources. Unsupported findings cannot be promoted to verified CRM facts. If an AI step fails or returns invalid output, the inquiry still reaches a person with an explicit manual-assessment label.

### Make consent and recovery explicit

Consent is checked in the workflow; the model cannot infer it. Permission to respond to an inquiry is separate from a marketing subscription.

Before each external write, the workflow records its progress. If a timeout leaves it unclear whether the write succeeded, automatic replay stops for reconciliation. This matters when repeating a request could create another task or email.

## What I verified

The connected pilot exercised real Tally, HubSpot, OpenAI and Resend integrations with fictional inquiries:

- A contact inquiry and a plan inquiry completed the full path, including both AI steps, associated notes, assigned tasks and internal cards.
- A returning inquiry reused the contact and created separate activity. Subsequent polls did not repeat the completed effects.
- Two pilot cards were independently observed as Delivered in Resend. API acceptance on later runs is recorded separately from delivery or readership.
- An inaccessible profile stayed unverified while service fit and certainty remained separate. An integration error also exercised the manual fallback before it was corrected.

The form and card screenshots show the capture and review surfaces without exposing real inquiry data. The public form is the agency's business intake, so it is not offered here as a visitor testing sandbox.

<details><summary>Code checks and the offline demonstration</summary><p>At the portfolio review on 31 October 2026, all 96 automated checks passed. They cover consent, contact conflicts, duplicate events, returning contacts, AI evidence and fallback, recovery states and safe rendering. I also ran the offline demonstration: two fictional contacts produced three notes, tasks and cards; the duplicate produced no extra effects and the inquiry without consent was rejected. That demo uses simulated providers and makes no external calls. These checks support the implementation; they are not acquisition or conversion metrics.</p></details>

## Current operation and limits

Tally keeps capturing online when the computer is off. **Processing runs in local n8n**, polling every five minutes and handling one pending completed submission per execution. It waits until the computer and worker are running. Production execution is serialized, and uncertain writes require reconciliation.

The CRM implementation covers contacts, associated notes and review tasks. Attribution and qualification live primarily in notes. A full sales pipeline, automatic company associations and native HubSpot reporting are outside this MVP.

AI prepares a recommendation for a human. The workflow does not send prospect outreach, create deals or advance existing contacts through a sales lifecycle. Hosting the worker continuously and measuring actual follow-up outcomes are the next steps if inquiry volume makes them useful.
