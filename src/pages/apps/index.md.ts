// src/pages/apps/index.md.ts
// ═══════════════════════════════════════════════════════
// MARKDOWN ENDPOINT — /apps/index.md
// ─────────────────────────────────────────────────────────
// Astro API route that serves the Apps page content as markdown.
// AI agents that request /apps/index.md or send Accept: text/markdown
// receive clean markdown instead of HTML.
//
// PATTERN: duplicate this file for each page:
//   src/pages/index.md.ts       → /index.md  (home)
//   src/pages/apps/index.md.ts  → /apps/index.md
//   src/pages/privacy.md.ts     → /privacy.md
//   src/pages/contact.md.ts     → /contact.md
//   src/pages/about.md.ts       → /about.md
//
// Only the markdown string inside GET() changes between files.
// ═══════════════════════════════════════════════════════

import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const markdown = `---
title: Curvachip Apps
 description: Overview of the Curvachip apps catalogue, featured products, and App Store review highlight.
 url: https://curvachip.com/apps
---

# Curvachip Apps

## Apps built with purpose

The apps page introduces the Curvachip catalogue and explains that every app is built to solve a real problem, undergoes careful design, and earns its place on the App Store.

## Featured apps

The page lists multiple apps, each with a short description and feature highlights:

- Shadow Task — focus and task tracking with personalized quotes and on-device privacy.
- TipZap — fast tip calculation and split-bill support with a built-in number pad.
- StoneClip — AI-powered rock identification with geological context and chat follow-ups.
- BugClip — insect and arthropod identification with instant AI responses.
- PlantClip — plant identification with care tips, botanical context, and follow-up questions.
- Grocery Wiz — organized grocery lists by aisle, quick entry, and private storage.
- Tally Snap — a fast click counter for tracking counts with share or export support.

## Actions and links

Each app entry includes links to the App Store, a product details page, and a privacy policy page.

## App Store review

The page also displays a customer review praising Shadow Task for helping focus, with a call to action inviting feedback via the contact page.
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
