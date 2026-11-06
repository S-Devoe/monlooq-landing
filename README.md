# monlooq.com

Marketing site for MonlooQ. Next.js 16 (App Router), Tailwind 4, same tokens and
fonts as `monlooq-admin-web` (Degular Display headings, Mona Sans body, brand orange).

## Run

```bash
cp .env.example .env.local   # set MONLOOQ_API_URL
pnpm install
pnpm dev
```

| Env | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (default `https://monlooq.com`) |
| `MONLOOQ_API_URL` | API base incl. `/api/v1`. Server only; the contact form posts to `{MONLOOQ_API_URL}/contact` |

## Contact form

`src/app/contact/actions.ts` (server action) → `POST /api/v1/contact` on the
MonlooQ API (`looksyy-api/internal/contact`) → RabbitMQ → Mailgun →
`monlooq.app@gmail.com`, with Reply-To set to the visitor. Spam: honeypot
field, minimum fill time, and a per-IP limit on the API.

## App links

`public/.well-known/apple-app-site-association` and `assetlinks.json` are served
as `application/json` (see `next.config.ts`). After deploying, check:

- https://monlooq.com/.well-known/apple-app-site-association
- https://monlooq.com/.well-known/assetlinks.json
- https://app-site-association.cdn-apple.com/a/v1/monlooq.com (Apple's CDN copy, may lag)

`/post/*`, `/p/*`, `/community/*`, `/user/*` render a noindex "Open in MonlooQ"
page for visitors without the app.

## SEO

Metadata + Open Graph image (`opengraph-image.tsx`), `sitemap.xml`, `robots.txt`
(AI crawlers explicitly allowed), `llms.txt`, JSON-LD (Organization, WebSite,
MobileApplication, FAQPage, ContactPage). Marketing copy lives in
`src/lib/content.ts`; keep it factual, it is what search and AI engines quote.
