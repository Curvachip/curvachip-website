// src/pages/index.md.ts
// ═══════════════════════════════════════════════════════
// MARKDOWN ENDPOINT — /index.md
// ─────────────────────────────────────────────────────────
// Astro API route that serves the Home page content as markdown.
// AI agents that request /index.md or send Accept: text/markdown
// receive clean markdown instead of HTML.
//
// PATTERN: duplicate this file for each page:
//   src/pages/index.md.ts       → /index.md  (home)
//   src/pages/apps.md.ts        → /apps.md
//   src/pages/privacy.md.ts     → /privacy.md
//   src/pages/contact.md.ts     → /contact.md
//   src/pages/about.md.ts       → /about.md
//
// Only the markdown string inside GET() changes between files.
// ═══════════════════════════════════════════════════════

import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const markdown = `---
title: Curvachip LLC
description: Home page overview for Curvachip’s Apple platform apps, values, featured products, and founder story.
url: https://curvachip.com/
---

# Curvachip LLC

## Software built around you

Curvachip distributes privacy-first apps on the App Store. The home page highlights the company’s focus on practical utility, care for user experience, and apps designed for real needs.

## What we stand for

The page explains Curvachip’s core values:

- user-focused design
- privacy by default
- feedback-driven development

## Featured apps

Three key apps are showcased with short descriptions:

- Shadow Task — focus and task tracking with on-device storage
- TipZap — tip calculator and bill splitting with a custom number pad
- StoneClip — AI-powered rock identification with geological context

## Meet our CEO

The page includes a founder-focused testimonial section that introduces Michael S. as the developer and leader behind Curvachip.

## Navigation hints

It also links to the app catalogue, company story, and the about page for people interested in learning more about Curvachip.
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
