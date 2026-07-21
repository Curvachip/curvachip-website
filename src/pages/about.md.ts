// src/pages/about.md.ts
// ═══════════════════════════════════════════════════════════════
// MARKDOWN ENDPOINT — /about.md
// ───────────────────────────────────────────────────────────────
// Astro API route that serves the About page content as markdown.
// AI agents that request /about.md or send Accept: text/markdown
// receive clean markdown instead of HTML.
//
// PATTERN: duplicate this file for each page:
//   src/pages/index.md.ts       → /index.md  (home)
//   src/pages/apps.md.ts        → /apps.md
//   src/pages/privacy.md.ts     → /privacy.md
//   src/pages/contact.md.ts     → /contact.md
//   src/pages/about.md.ts       → /about.md  (this file)
//
// Only the markdown string inside GET() changes between files.
// ═══════════════════════════════════════════════════════════════

import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const markdown = `---
title: About Curvachip LLC
description: Company mission, vision, values, timeline, and leadership.
url: https://curvachip.com/about
---

# About Curvachip LLC

## Mission — Apps born from real needs

Each app that Curvachip launches is built for a purpose. That purpose is
discovered through the people we encounter every day — the frustrated dinner
guest doing mental arithmetic, the hiker who can't identify a plant, the
professional who can't stay focused.

A great app idea is not founded on some revolutionary principle. It is founded
on meeting a real need for a real group of people. Every product begins as a
concept, matures through design and testing, and earns its place on the App
Store only when that need has been genuinely served.

## Vision — Connecting people to what matters

Technology is humanity's greatest friend and its greatest distraction. As
artificial intelligence and always-on connectivity pull people further into
their screens, something valuable gets lost.

Through the apps Curvachip builds, the goal is to bring people back to the
real world — to nature, to focused work, to shared meals — in some way or
another. Software should be a tool that serves a moment, not a trap that
consumes your attention.

## Values

- **User first, always** — Every product decision asks: does this make life
  better for the person holding the phone?
- **Privacy is not a feature** — Privacy is a baseline expectation. On-device
  processing, minimal data collection, and transparent disclosures are not
  selling points — they are requirements.
- **Criticism is a gift** — Negative feedback is the most valuable input we
  receive. We read every review, log every bug report, and treat constructive
  criticism as a roadmap.
- **Ship with intention** — No app ships without a clearly validated purpose.
  Ideas go through design, testing, and honest self-scrutiny before reaching
  the App Store.

## Timeline

- **2023** — The idea for Curvachip begins
- **2024** — Curvachip LLC formally established; first apps on the App Store
- **2025** — The Clip family grows: StoneClip, BugClip, and PlantClip launch
- **2026** — Continuing to develop, refine, and listen

## Leadership

Curvachip is led by Michael S., its founder, CEO, and sole developer. Michael
handles product management, design, marketing, and deployment — but most
importantly, he focuses on the user.

"I build the apps I wish existed. And then I listen very carefully to the
people who tell me how to make them better." — Michael S., CEO

## Privacy commitment

None of our apps collect data unless strictly necessary. We believe that the
violation of your privacy is a direct infringement upon the trust you place in
us. We take extra care to protect your data and process it on-device whenever
possible.

When an app requires external data processing — such as an AI request — this
is always disclosed clearly on the App Store listing and in the accompanying
privacy policy. No surprises.

## Links

- Privacy overview: https://curvachip.com/privacy
- Website privacy policy: https://curvachip.com/privacy/website
- Terms of use: https://curvachip.com/privacy/terms-of-use
- Contact: https://curvachip.com/contact
- All apps: https://curvachip.com/apps
`;

  return new Response(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      // Tell caches to store markdown and HTML as separate variants
      'Vary': 'Accept',
      // Cache for 1 hour — same as a typical HTML page
      'Cache-Control': 'public, max-age=3600',
    },
  });
};