# Portfolio - Sandaruwan Weerawardhana

Single-page developer portfolio built with Next.js App Router, React, TypeScript, and Tailwind CSS. It is a static export deployed to GitHub Pages on the custom domain <https://sandaruwanweerawardhana.me>, served from the domain root (no base path).

```bash
npm install
npm run dev       # Next.js development server
npm run build     # production static export (out/)
npm run lint      # ESLint, Next.js, TypeScript, and SonarJS rules
```

The app is available locally at `http://localhost:3000/`. Deployment is handled by `.github/workflows/deploy.yml` on every push to `main`; it uploads `out/` with `actions/upload-pages-artifact` and publishes with `actions/deploy-pages`.

## Environment

No environment variables are required. The site is served from the apex custom
domain root, so `next.config.ts` sets no `basePath` or `assetPrefix` and every
asset resolves at `/`. `public/CNAME` pins the custom domain on each deploy.

## Project structure

```text
app/
  globals.css      Tailwind entry and global design-system styles
  layout.tsx       Root document, shared chrome, providers, and Vercel integrations
  manifest.ts      App Router web manifest
  page.tsx         Home route, Metadata API, JSON-LD, and section composition
public/
  assets/          Resume PDF
  Certificate/     Certificate images
src/
  assets/          Local profile images
  components/
    animations/    Reveal, Stagger, and shared motion variants
    cards/         Project, skill, certification, and timeline cards
    forms/         ContactForm
    layout/        Header, navigation, footer, background, and page chrome
    providers/     Client provider boundary, analytics, and performance tracking
    sections/      Hero, Skills, Education, Projects, Contact, and optional Services
    ui/            Shared UI primitives
  data/            Site, skill, project, education, and service content
  hooks/           Browser interaction hooks
  lib/             Class, analytics, performance, and spotlight helpers
  types/           Shared TypeScript types
```

## Updating content

| Change | File |
| --- | --- |
| Name, role, links, resume, hero copy, nav items | `src/data/site.ts` |
| Skills and categories | `src/data/skills.ts` |
| Projects (set `featured: true` for the wide card) | `src/data/projects.ts` |
| Education timeline and certifications | `src/data/education.ts` |
| Services (section currently disabled on the home page) | `src/data/services.ts` |

To add a section, create it in `src/components/sections`, add its id to `navItems` in `src/data/site.ts`, and render it from `app/page.tsx`.

## Design system

- Tokens remain in `tailwind.config.js`; global component classes are in `app/globals.css`.
- The dark navy, sky-to-violet palette and all existing responsive classes are unchanged.
- Entrance animations still use `Reveal` and `Stagger`. `MotionConfig reducedMotion="user"` and the CSS reduced-motion query respect the operating-system preference.
- `next/image` now renders local, project, and skill images. Remote image hosts are allowlisted in `next.config.ts`.
