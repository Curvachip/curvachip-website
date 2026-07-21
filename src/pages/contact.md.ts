// src/pages/contact.md.ts
// ═══════════════════════════════════════════════════════
// MARKDOWN ENDPOINT — /contact.md
// ─────────────────────────────────────────────────────────
// Astro API route that serves the Contact page content as markdown.
// AI agents that request /contact.md or send Accept: text/markdown
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
title: Contact Curvachip LLC
description: Contact page overview including support email, form instructions, and social links.
url: https://curvachip.com/contact
---

# Contact Curvachip LLC

## We read every email

The contact page explains how to reach Curvachip with bug reports, app feedback, business inquiries, or technical questions. It emphasizes a small team that cares about every message.

## Send a message

The page includes a mailto-based contact form:

- Name
- Email
- Subject
- Message

A button assembles the email and opens the user’s default mail client.

## Direct contact

It lists a direct support email address and notes a typical response time of 2 business days.

## What to reach out about

The page outlines common reasons to contact Curvachip:

- bug reports
- app feedback
- business inquiries
- technical questions

## Find us elsewhere

The page also includes social and platform links for email, GitHub, LinkedIn, X/Twitter, Instagram, YouTube, TikTok, App Store, and Spotify.
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
