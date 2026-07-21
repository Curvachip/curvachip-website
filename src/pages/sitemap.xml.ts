import { siteUrl, sitemapPaths } from "../lib/sitemap";

export const prerender = true;

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    sitemapPaths.map((path) => {
      return `  <url>\n    <loc>${new URL(path, siteUrl).href}</loc>\n  </url>`;
    }).join("\n") +
    `\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
