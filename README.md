# BASHAR KASTALI — Production Line Installation & Industrial Maintenance

Professional bilingual (Arabic/English) website for Bashar Kastali — a production line specialist based in Aleppo, Syria with 20+ years experience in installing, commissioning, calibrating, and maintaining industrial production lines (pharmaceutical, food, chemical).

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 8** (build tool)
- **Tailwind CSS v4** (utility-first styling)
- **Lucide React** — icon library
- **Google Fonts** — Inter (English) + Tajawal (Arabic)

## Features

- **Bilingual** — Full Arabic/English with RTL toggle (persisted to localStorage)
- **Responsive** — Mobile-first, tablet, desktop breakpoints
- **WhatsApp Integration** — Floating button + project inquire links `wa.me/963962401221`
- **Project Portfolio** — Filterable project grid (Pharmaceutical / Food / Industrial)
- **Scroll Animations** — CSS keyframe animations (fade-in, slide-up, stagger)
- **SEO** — Meta tags, Open Graph, semantic HTML

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx         — Fixed top nav with mobile hamburger
│   ├── Hero.tsx           — Full-screen hero with CTA buttons
│   ├── About.tsx          — Bio, specializations, stats, country flags
│   ├── Services.tsx       — 4 service cards (Installation, Maintenance, Calibration, Consulting)
│   ├── Projects.tsx       — Filterable project portfolio with category badges
│   ├── WhyUs.tsx          — 4-pillar value proposition
│   ├── Contact.tsx        — WhatsApp/phone/location + contact form
│   ├── Footer.tsx         — 4-column footer with links
│   └── WhatsAppButton.tsx — Fixed floating WhatsApp CTA
├── hooks/
│   └── useLanguage.tsx    — Lang context provider + toggle
├── i18n/
│   └── translations.ts    — Full EN/AR copy for all sections
├── App.tsx                — Root component
├── main.tsx               — Entry point
└── index.css              — Tailwind + custom animations
```

## Getting Started

```bash
npm install
npm run dev
```

Opens at `http://localhost:8001` — served via Caddy at `http://sakk.local`.

## Build

```bash
npm run build
npm run preview
```

## WhatsApp

All inquire buttons + floating button link to:
`https://wa.me/963962401221`

## Color System

| Token        | Hex       | Usage                     |
|-------------|-----------|---------------------------|
| Navy-500    | `#0a1f44` | Primary backgrounds       |
| Navy-900    | `#040d1c` | Dark sections, nav        |
| Gold-500    | `#c99b00` | Accent, CTAs, highlights  |
| Whitish     | `#f7fafc` | Page background           |

## Credits

Based on real profile at [instagram.com/kastalibashar](https://www.instagram.com/kastalibashar/) and [LinkedIn](https://sy.linkedin.com/in/bashar-kastali-475035339).

© 2026 BASHAR KASTALI. All rights reserved.
