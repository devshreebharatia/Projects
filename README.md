# Devshree Bharatia — Portfolio

A production-grade personal portfolio website built with Next.js 14, Tailwind CSS, and TypeScript.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Custom CSS
- **Language**: TypeScript
- **Fonts**: Playfair Display (display) · DM Sans (body) · DM Mono (code)
- **Deployment**: Vercel (one-click)

## Features

- Custom animated cursor
- Dark/light mode toggle (persisted to localStorage)
- Scroll-triggered reveal animations
- Fully responsive (mobile + desktop)
- Zero external UI dependencies
- Optimized for recruiters — key info visible within 5 seconds

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1: One-click (after pushing to GitHub)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/devshree-portfolio)

Replace `YOUR_USERNAME` with your GitHub username after pushing.

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

## Customization

| What to update | File |
|---|---|
| Name, tagline, bio | `src/components/Hero.tsx` |
| About text | `src/components/About.tsx` |
| Work history | `src/components/Experience.tsx` |
| Projects | `src/components/Projects.tsx` |
| Skills | `src/components/Skills.tsx` |
| Contact links | `src/components/Contact.tsx` |
| SEO metadata | `src/app/layout.tsx` |
| Colors / fonts | `tailwind.config.js` + `globals.css` |

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles, CSS variables, animations
│   ├── layout.tsx        # Root layout + metadata + dark mode init
│   └── page.tsx          # Home page — assembles all sections
└── components/
    ├── Cursor.tsx         # Custom animated cursor
    ├── Navbar.tsx         # Sticky nav + dark mode toggle
    ├── Hero.tsx           # Landing section + stat bar
    ├── About.tsx          # Bio + quick facts
    ├── Experience.tsx     # Career timeline
    ├── Projects.tsx       # Featured project cards
    ├── Skills.tsx         # Tech stack + publications
    └── Contact.tsx        # Links + footer
```

## Screenshots

> Add screenshots here after deploying.

## License

MIT
