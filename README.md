# Developer Portfolio

A premium, dark-themed developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Includes two ReactBits components: `SideRays` (WebGL hero background) and `ClickSpark` (click micro-interaction, wraps the whole app).

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser. To build for production:

```bash
npm run build
npm run preview
```

## Editing your content

Everything personal lives in `src/data/` — you should not need to touch component code to update your info.

| File | What it controls |
|---|---|
| `src/data/profile.js` | Name, role, tagline, email, socials, resume link, About paragraphs, strength cards |
| `src/data/skills.js` | Skill categories and proficiency levels |
| `src/data/projects.js` | Project cards (title, description, tech, links, featured flag) |
| `src/data/timeline.js` | Experience, education, and achievements |

### Resume

The Resume button points to `/resume.pdf`. Drop your actual resume PDF into the `public/` folder as `resume.pdf`, or update `profile.resumeUrl` in `src/data/profile.js` to point elsewhere.

### Project images

Each project in `src/data/projects.js` has an `image` field (currently `null`, rendering a placeholder). Add images to `src/assets/` and set `image` to the imported path, then update `ProjectCard.jsx` to render an `<img>` when `image` is present instead of the placeholder block.

### Contact form

The form in `src/sections/Contact.jsx` currently just shows a success state on submit — it isn't wired to a backend. Connect it to a service like Formspree, Resend, or your own API endpoint inside `handleSubmit`.

## Project structure

```
src/
  components/       Reusable UI (Navbar, cards, Reveal animation wrapper, etc.)
  components/reactbits/   SideRays and ClickSpark (ReactBits components)
  sections/         One file per page section (Hero, About, Skills, ...)
  data/             All editable content
  hooks/            useScrolled, useActiveSection
  App.jsx           Assembles sections, wraps app in ClickSpark
  index.css         Tailwind layers + design tokens (colors, glass, buttons)
```

## Tech stack

- React 19 + Vite
- Tailwind CSS 3
- Framer Motion
- Lucide React (latest, general UI icons)
- `ogl` (WebGL, used by SideRays)

### Brand icons (GitHub, LinkedIn, X/Twitter)

Lucide's icon set intentionally excludes brand/company logos by design (see their [contribution guidelines](https://lucide.dev)) — so GitHub, LinkedIn, and X/Twitter marks aren't available there and won't be added in future releases either. Those three are hand-authored inline SVGs in `src/components/BrandIcons.jsx` (`GithubIcon`, `LinkedinIcon`, `TwitterIcon`), built as drop-in replacements that accept the same `size`/`className` props as a lucide icon. Every other icon in the project comes straight from `lucide-react`.

## Design tokens

Defined in `tailwind.config.js`:
- **Accent:** `#EAB308` (amber)
- **Base:** `#0A0B0D` background, `#131519` surface, `#1C1F26` elevated/glass
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (labels, tags, code accents)
