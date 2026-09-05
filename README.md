# Bun & Fire 🔥

A concept ordering site for a local fast-food brand — built to demonstrate how a small business can replace a static QR-code menu with a real, working online ordering experience, without needing a backend, accounts, or payment infrastructure.

**[Live Demo →](https://bunandfire.netlify.app)**

> This is a self-initiated portfolio project. No real orders are placed — it's a fully functional concept demo.

---

## The Problem

Most local cafes and fast-food spots today have:

- A QR code linking to a static, PDF-style menu — no real website
- No online ordering — customers have to call in
- No shareable web presence worth linking on Instagram or Google Maps

## The Solve

Replace "QR → static menu → phone call" with "QR → real ordering site → order sent straight to the owner via WhatsApp" — removing the phone-call bottleneck while staying simple enough for a small business owner to actually use, with zero backend complexity.

## Features

- Full ordering flow: browse menu → cart → checkout → order confirmation
- Guest checkout (name + phone only, no accounts)
- Order delivery via WhatsApp deep link — the same tool many small businesses already use
- Category browsing with sort/filter, "show more" pagination
- Persistent cart (localStorage), with a responsive drawer (bottom sheet on mobile, side panel on desktop)
- Custom design system built on Tailwind v4's CSS-first `@theme`
- Full motion pass: page transitions, scroll reveals, micro-interactions, custom animated cursor
- Accessible by design: focus traps, ARIA roles, keyboard navigation, WCAG-checked contrast
- SEO-ready: OG tags, sitemap, robots.txt, LocalBusiness JSON-LD structured data

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Animation:** Framer Motion
- **Fonts:** Bricolage Grotesque, Plus Jakarta Sans, Kaushan Script (via `next/font`)

## Why WhatsApp instead of a backend?

Genuinely automatic, silent order delivery would require the paid WhatsApp Business API and a real backend — which contradicts this project's own premise of staying simple enough for a small owner to actually use. The `wa.me` deep-link approach pre-fills the order message and requires one tap to send, mirroring how many small businesses already operate today. It was a deliberate trade-off, not an oversight — full reasoning in the [case study](https://sadafnemani.netlify.app/projects/bun-and-fire).

## Running Locally

```bash
git clone https://github.com/your-username/bun-and-fire.git
cd bun-and-fire
npm install
npm run dev
```

## License

MIT — see [LICENSE](./LICENSE)

## Contact

Built by Sadaf Nemani — [Portfolio](https://sadafnemani.netlify.app) · [Email](mailto:sedefnemani@gmail.com)
