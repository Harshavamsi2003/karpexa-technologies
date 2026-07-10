# Nexora Technologies — Website

Premium, responsive React site for an IT-solutions company. Built with
**React 18 + Vite + React Router**. Every stylesheet is a separate file in
`src/styles/`, so you can open and tweak one piece (navbar, hero, footer…)
without touching anything else.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → /dist
npm run preview   # preview the build
```

Node 18+ (built on Node 22).

## Structure

```
nexora-site/
├─ index.html                # Google Fonts: Bricolage Grotesque + Hanken Grotesk
├─ public/ favicon.svg, _redirects
└─ src/
   ├─ main.jsx  App.jsx
   ├─ data/content.js         ← ALL text, links, stats, menus (edit here)
   ├─ hooks/ useReveal.js  useScrolled.js
   ├─ components/
   │   Navbar  Hero  Story  Partners  SolutionsGrid  Footer
   │   PageHeader  ScrollToTop
   ├─ pages/
   │   Home  Capabilities  Sectors  Company  Contact  NotFound
   └─ styles/                 ← ONE CSS FILE PER PIECE
       variables.css   (colors, fonts, spacing — the design tokens)
       global.css      (base + buttons + reveal)
       navbar.css  megamenu.css  hero.css  story.css  partners.css
       solutions.css  footer.css  pageheader.css
       home.css  capabilities.css  sectors.css  company.css
       contact.css  notfound.css
```

## Pages (5)

Home · Capabilities (What We Do) · Sectors (Industries) · Company (Who We Are) ·
Contact. Careers and Insights were intentionally left out.

## How to customise

- **Colours / fonts:** `src/styles/variables.css` — change `--spruce`,
  `--citron`, or the two font families in one place.
- **All copy, menus, stats, partners:** `src/data/content.js`.
- **A single section's look:** open its file in `src/styles/` (e.g. `hero.css`).
- **Logo:** inline SVG in `Navbar.jsx` / `Footer.jsx` + `public/favicon.svg`.

## Things to finish before launch

1. **Hero images** — currently placeholder photos from picsum.photos. Replace
   the three `img` URLs in `data/content.js` with the client's images (subject
   on the right, left kept plain for the headline).
2. **Partner logos** — the "LOGO 01…" tiles are placeholders. Drop in the
   client's real, licensed partner logos.
3. **Stats** — the `*` figures in `data/content.js` are startup placeholders;
   replace with real numbers.
4. **Contact form** — `submit()` in `pages/Contact.jsx` shows a success state
   but isn't wired to a backend. Connect it to Formspree / Resend / your API.

## Design notes

- Identity: deep **Spruce** + **Citron** accent, **Bricolage Grotesque** +
  **Hanken Grotesk** — deliberately not a generic template look.
- Navbar is transparent over the hero and turns solid Spruce on scroll, with
  two-column mega-menus on Capabilities and Sectors.
- Motion (hero rotator, scroll reveals, hovers) respects
  `prefers-reduced-motion`. Accessible: skip link, focus rings, semantic landmarks.

## Deploy

Static host (Vercel, Netlify, Cloudflare Pages). Single-page app, so add a
catch-all rewrite to `/index.html` (Netlify `_redirects` is included). Build
command `npm run build`, output `dist`.

## Capability pages (added)

Each capability is now its **own page file** in `src/pages/capabilities/`:

```
src/pages/capabilities/
  ITInfrastructure.jsx   Cloud.jsx        ManagedIT.jsx
  TechTalent.jsx         MaintenanceAMC.jsx  DataAnalytics.jsx
  Security.jsx           Workspace.jsx    PrintDevice.jsx
  ERPApps.jsx            index.js         (barrel: routes + list)
```

- To change a capability's copy, open **that one file** and edit its `data`
  object (overview, intro, offerings, benefits, use-cases). Nothing else needs
  touching — the nav mega-menu, the "all capabilities" page, related links and
  the home cards all read from the same list via `index.js`.
- Layout for every capability page lives in `src/components/CapabilityLayout.jsx`
  and `src/styles/capability-detail.css` (edit once, applies to all).
- URLs: `/capabilities` is the "view all" page; each capability is at
  `/capabilities/<slug>` (e.g. `/capabilities/cloud`).

The navbar mega-menu now opens on **click** (not hover), stays open, scrolls if
tall, and closes on click-outside or Esc.

---

## Design rules (please keep)

**The green bookend.** On every capability page the spruce green appears
**exactly twice** — the hero at the top (`styles/pageheader.css`) and the
closing CTA at the bottom (`.cd-cta` in `styles/capability-detail.css`).
Every section between alternates `--paper` and `--paper-2`. Don't add a spruce
background in between.

**Capability page sections** (in order, all in `components/CapabilityLayout.jsx`):
hero → the context + signals → what's included → outcomes → how we deliver →
where it helps + deliverables → tech & partners → FAQ → related → CTA.

**Card art.** The shared muted palette (`g1`–`g8`) lives in `styles/art.css`,
imported globally. Used by the home cards and the "related capabilities" cards.

**Mobile navbar.** No index numbers. Links stagger in, Capabilities and Sectors
expand as accordions (reaching every sub-page), and the lower half is a footer
block with a CTA, email, phone and social links.

## Before launch
1. Replace the 3 hero images in `data/content.js` (currently picsum placeholders).
2. Add real partner logos (the `LOGO 01…` tiles are placeholders).
3. Replace the `*` stats with real numbers.
4. Confirm the **Tech & partners** chips on each capability page — they're
   placeholders (Dell, Tableau, Google Workspace…). Only list real partners.
5. Wire `submit()` in `pages/Contact.jsx` to an email service.
