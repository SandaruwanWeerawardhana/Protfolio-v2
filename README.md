# Portfolio — Sandaruwan Weerawardhana

Single-page developer portfolio built with **React 18 + TypeScript + Vite + Tailwind CSS**, animated with **Framer Motion** and deployed to GitHub Pages under the `/Portfolio/` base path.

```bash
npm install
npm run dev        # local dev server
npm run build      # production build (dist/)
npm run preview    # serve the production build
npm run lint       # eslint
npm run deploy     # build + publish dist/ with gh-pages
```

## Project structure

```
src/
├─ assets/          Local images (optimized webp + png, plus the original)
├─ components/
│  ├─ animations/   Reveal, Stagger, shared motion variants
│  ├─ cards/        Content cards: project, skill category, certification, timeline item
│  ├─ forms/        ContactForm
│  ├─ layout/       Header, NavLink, Logo, Footer, Background, ScrollToTop, Layout
│  ├─ providers/    Analytics + performance providers
│  ├─ sections/     Page sections: Hero, Skills, Education, Projects, Contact, Services
│  ├─ seo/          SEOHead (react-helmet-async + JSON-LD)
│  └─ ui/           Primitives: Button, Badge, Container, Section, SectionHeading,
│                   SpotlightCard, OptimizedImage, IconLink, Spinner, DecryptedText
├─ data/            All page content (site, skills, projects, education, services)
├─ hooks/           useActiveSection, useScrolled, useRotatingIndex, useInViewOnce, useAnalytics
├─ lib/             cn (class merge), analytics, performance helpers
├─ pages/           HomePage — composes the sections in order
├─ styles/          Tailwind entry + design tokens as component classes
└─ types/           Shared content types
```

## Updating content

Content is data-driven — no JSX edits needed for routine updates.

| Change | File |
| --- | --- |
| Name, role, links, resume, hero copy, nav items | `src/data/site.ts` |
| Skills and categories | `src/data/skills.ts` |
| Projects (set `featured: true` for the wide card) | `src/data/projects.ts` |
| Education timeline and certifications | `src/data/education.ts` |
| Services (section currently disabled in `HomePage`) | `src/data/services.ts` |

Adding a new section: create it in `components/sections/` using `<Section>` + `<SectionHeading>`, add its id to `navItems` in `src/data/site.ts`, and render it in `src/pages/HomePage.tsx`.

## Design system

- Tokens live in `tailwind.config.js` (colors, fluid display sizes, shadows, gradients, keyframes) and `src/styles/index.css` (`.surface`, `.surface-interactive`, `.eyebrow`, `.field`, `.section-shell`).
- Dark theme only; the palette is deep navy with a sky→violet brand gradient.
- Entrance animations go through `<Reveal>` / `<Stagger>`; `MotionConfig reducedMotion="user"` plus a CSS media query honour `prefers-reduced-motion`.
- Hover effects use CSS transforms (no JS per frame), and `SpotlightCard` writes pointer position to CSS variables instead of React state.
