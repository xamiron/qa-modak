# Sabuj Kumar Modak | Portfolio

A modern, dark-themed, fully responsive portfolio website for **Sabuj Kumar Modak**, Software QA Engineer specializing in functional, API, security testing, and Selenium automation.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Optimized for deployment on **Vercel**.

## Features

- Modern, professional dark UI with subtle gradients and glow effects
- Fully mobile-responsive (mobile-first design)
- Smooth scroll-triggered animations powered by Framer Motion
- Scroll progress indicator
- Active section highlighting in navigation
- Accessible: keyboard-friendly, reduced-motion support, semantic HTML
- SEO metadata, Open Graph, and Twitter cards
- Optimized fonts via `next/font` (Inter + JetBrains Mono)

## Sections

- Hero with profile card and quick stats
- About with highlighted strengths
- Experience timeline
- Skills (QA, Cyber Security, Tools, Tech & Programming)
- Domain Expertise (FinTech, RegTech, E-commerce, ERP, Biometrics, EV Charging)
- Projects (Brac Bank, B Charge, Pera App, BDJobs automation, and more)
- Education
- Certifications, Achievements, Publication
- Contact CTA
- Footer

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel

The fastest path:

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import your repo.
3. Vercel auto-detects Next.js; just click **Deploy**.

No environment variables required.

## Customizing Content

All textual content lives in [`app/data.ts`](./app/data.ts). Edit:

- `personal`: name, title, contact info, social links
- `stats`: numbers shown in hero card
- `experience`: job history
- `skillGroups`: skill categories and items
- `domains`: industry domain cards
- `projects`: featured projects
- `education`, `certifications`, `achievements`, `publication`

## Theming

Theme tokens are defined in [`tailwind.config.ts`](./tailwind.config.ts) and [`app/globals.css`](./app/globals.css). The primary accent color is `#10b981` (emerald); change it once in the Tailwind config to re-skin the whole site.

## Tech Stack

- [Next.js 14](https://nextjs.org/): React framework, App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/): utility-first styling
- [Framer Motion](https://www.framer.com/motion/): animations
- [Lucide React](https://lucide.dev/): icon set

## License

Personal portfolio. Content © Sabuj Kumar Modak. Code is free to learn from.
