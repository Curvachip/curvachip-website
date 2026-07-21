// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://curvachip.com",
  trailingSlash: "never",

  redirects: {
      "/about-us": "/about",
      "/shadow-task": "/apps/shadow-task",
      "/tipzap": "/apps/tipzap",
      "/stoneclip-rock-identifier": "/apps/stoneclip",
      "/grocery-wiz": "/apps/grocery-wiz",

      "/privacy-policy-shadow-task": "/privacy/shadow-task",
      "/privacy-policy-tipzap": "/privacy/tipzap",
      "/privacy-policy-stoneclip": "/privacy/stoneclip",
      "/privacy-policy-bugclip": "/privacy/bugclip",
      "/privacy-policy-plantclip": "/privacy/plantclip",
      "/privacy-policy-grocery-liz": "/privacy/grocery-wiz",
      "/privacy-policy-tally-snap": "/privacy/tally-snap",

      "/privacy-policy-curvachip": "/privacy/website",
      "/terms-and-conditions-curvachip": "/privacy/terms-of-use",
  },

  integrations: [sitemap()],
});