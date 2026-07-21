# Implement Markdown Content Negotiation

Support `Accept: text/markdown` content negotiation so agents can request
markdown versions of your pages.

## Requirements

- When a request includes `Accept: text/markdown`, return a markdown representation of the page
- Set `Content-Type: text/markdown` on the response
- HTML remains the default for requests without the markdown accept header
- Include an `x-markdown-tokens` header with the token count if available

## Cloudflare

This site is served through Cloudflare Pages and Cloudflare Workers, so Markdown for Agents can be enabled at the edge for this zone. When enabled, Cloudflare converts HTML responses to Markdown on the fly for agent requests while preserving HTML for standard browser traffic.

## Notes

- `Content-Type` will be `text/markdown; charset=utf-8` for markdown responses.
- Cloudflare adds `Vary: Accept` and token-count headers such as `x-markdown-tokens` when conversion occurs.
- HTML responses remain unchanged for normal browser requests.
