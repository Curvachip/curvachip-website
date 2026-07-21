// src/pages/privacy/index.md.ts
// ═══════════════════════════════════════════════════════
// MARKDOWN ENDPOINT — /privacy/index.md
// ─────────────────────────────────────────────────────────
// Astro API route that serves the Privacy hub content as markdown.
// AI agents that request /privacy/index.md or send Accept: text/markdown
// receive clean markdown instead of HTML.
//
// PATTERN: duplicate this file for each page:
//   src/pages/index.md.ts       → /index.md
//   src/pages/apps/index.md.ts  → /apps/index.md
//   src/pages/privacy/index.md.ts → /privacy/index.md
//   src/pages/contact.md.ts     → /contact.md
//   src/pages/about.md.ts       → /about.md
//
// Only the markdown string inside GET() changes between files.
// ═══════════════════════════════════════════════════════

import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const markdown = `---
title: Curvachip Privacy
 description: Overview of Curvachip's privacy commitment, app privacy summaries, website privacy, and deeper privacy resources.
 url: https://curvachip.com/privacy
---

# Privacy at Curvachip

## Privacy is the foundation

The privacy page explains Curvachip’s commitment to building apps with privacy as the baseline. It states that privacy is not a feature, but the foundation for every product decision.

## What we promise

The page outlines four core principles:

- collect only what is necessary
- process on-device by default
- disclose external data use clearly
- no advertising ever

## App-level privacy snapshots

It lists every Curvachip app with privacy labels:

- Shadow Task — Data Not Collected
- TipZap — Data Not Collected
- StoneClip — Data Not Linked to You
- BugClip — Data Not Linked to You
- PlantClip — Data Not Linked to You
- Grocery Wiz — Data Not Collected
- Tally Snap — Data Not Collected

## Website privacy

The page emphasizes that curvachip.com collects nothing, uses no analytics or ads, has no cookies, no form backend, and no tracking scripts.

## Privacy resources

There are direct links to the website privacy policy, terms of use, app-specific privacy pages, and the privacy blog article about AI chatbot data risks.

## Contact prompt

The page closes with an invitation to ask privacy questions directly using the contact page.
`;

  return new Response(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Vary': 'Accept',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
