# Nima Rajabi — Portfolio

Personal portfolio website built with **Next.js 15 (App Router) + TypeScript**, deployed as a
static site to GitHub Pages.

**Live:** https://itsnimadrs.github.io

## Features

- Dark / light theme toggle (persisted in `localStorage`, no flash on load)
- Typewriter hero, scroll-reveal animations, active-section nav highlighting
- Scroll progress bar, back-to-top button, cursor glow (fine pointers only)
- Fully responsive — mobile hamburger menu
- Zero runtime dependencies beyond React: content lives in one typed file (`lib/data.ts`)
- Static export (`output: "export"`) → hosted free on GitHub Pages via a GitHub Action

## Getting started

> Requires Node.js **18.18+** (Node 20 recommended).

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # static export → ./out
```

## Project structure

```
app/
  layout.tsx        # fonts, metadata, theme bootstrap script
  page.tsx          # assembles all sections
  globals.css       # design tokens + all styling
  icon.svg          # favicon (NR monogram)
components/
  Header.tsx        # sticky nav, theme toggle, mobile menu (client)
  Hero.tsx          # typewriter + avatar (client)
  ScrollUi.tsx      # progress bar, back-to-top, cursor glow (client)
  Reveal.tsx        # IntersectionObserver fade-in wrapper (client)
  About.tsx  Skills.tsx  Projects.tsx  Experience.tsx  Education.tsx  Footer.tsx   # server components
  Contact.tsx       # contact cards + copy-email (client)
  SectionHead.tsx   # shared section heading
  Icons.tsx         # inline SVG icon set
lib/
  data.ts           # ← ALL content: profile, skills, projects, experience, education
```

## Customization

- **Content** — edit `lib/data.ts` (typed interfaces included; your editor autocompletes everything).
- **Colors / styles** — edit the CSS variables at the top of `app/globals.css`.
- **Photo** — in `components/Hero.tsx`, replace the `<div className="avatar-mono">NR</div>`
  with an `<img>` (see the comment in `globals.css`).

## Deployment

### GitHub Pages (included, automatic)

The repo ships with `.github/workflows/deploy.yml`. On every push to `main` it builds the site
and publishes the `out/` folder.

1. Push the project to a repository named `itsnimadrs.github.io` (for the root URL) or any name.
2. Go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Done — the site goes live after the first workflow run.

> Hosting under a sub-path (`username.github.io/<repo>`)? Add `basePath: "/<repo>"` to
> `next.config.mjs` first.

### Vercel (alternative)

Push to GitHub, import the repo at [vercel.com](https://vercel.com) — zero config.
You can remove `output: "export"` from `next.config.mjs` to unlock server features later.
