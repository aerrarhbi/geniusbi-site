# GeniusBI Site — Repository Summary

**GeniusBI** is a static website for a Data & AI consulting firm based in Casablanca, Morocco. Built with vanilla HTML/CSS/JS (no frameworks), deployed on **Vercel** at `geniusbi.ma`. The site is entirely in French.

## Project Structure

```
geniusbi-site/
├── HTML Pages (25 total)
│   ├── Core: index, about, services, technologies, contact, 404
│   ├── Blog: blog listing + 11 articles
│   └── Support: academy, Power BI training (2), realisations, inscription, rejoindre
├── css/ (3 files, ~37 KB)
│   ├── shared.css          — Design system, navbar, footer, animations
│   ├── magic-animations.css — Advanced animation effects
│   └── services.css        — Page-specific styles
├── js/ (2 files)
│   ├── main.js             — Navbar, scroll effects, shared logic
│   └── magic-animations.js — Animation effects
├── images/, images_v2/, logos/, og/ — Visual assets
├── vercel.json             — Deployment config (clean URLs)
├── robots.txt, sitemap.xml — SEO crawling/indexing
├── site.webmanifest        — PWA manifest
└── Documentation: README, deployment guide, SEO audit reports
```

## Tech Stack

- **HTML5** — Semantic markup with structured data (JSON-LD, Schema.org)
- **CSS3** — Custom design system with CSS variables, Flexbox, Grid
  - Color palette: Navy (#0B1120), Purple (#8A65C4), Teal (#7DBCDB)
  - Google Fonts: Outfit (headings) + DM Sans (body)
- **Vanilla JavaScript** — No frameworks or libraries
  - Intersection Observer for scroll animations
  - Parallax orb effects, 3D tilt, navbar scroll transitions
- **Vercel** — Serverless deployment with clean URLs
- **SEO** — OpenGraph tags, Twitter Cards, JSON-LD, breadcrumbs, sitemap

## Pages Overview

### Core Pages
| Page | Description |
|------|-------------|
| `index.html` | Homepage with hero, service cards, value props, testimonials, newsletter |
| `about.html` | Company information |
| `services.html` | Detailed service offerings with FAQ |
| `technologies.html` | Technology stack showcase |
| `contact.html` | Lead capture form with contact info |

### Blog (11 Articles)
Topics covering the Moroccan data/AI market:
- Data strategy for SMEs, Data governance, Data quality
- Power BI (DAX formulas, dashboard design)
- Microsoft Fabric guide, Databricks vs Snowflake, Lakehouse vs Data Mesh
- Generative AI for enterprises, Cloud migration (Azure)
- Data consultant career in Morocco, Data & AI roadmap

### Support Pages
- **Academy** — Training programs
- **Power BI Training** — 2 course pages
- **Realisations** — Case studies/portfolio
- **Inscription** — Registration
- **Rejoindre** — Join the team

## Configuration

- **Vercel**: Clean URLs enabled (`/services` instead of `/services.html`)
- **robots.txt**: All crawlers allowed; `/realisations` blocked
- **sitemap.xml**: 14 URLs indexed
- **PWA**: Web manifest with theme color #0B1120
- **Favicons**: 9 variants (16px to 1024px)
- **Analytics**: Bing Webmaster Tools verification

## AI/SEO Integration

- 20+ Claude AI skills for SEO optimization (keyword research, content auditing, schema generation, competitor analysis, etc.)
- SEO audit reports included with current score of 56/100
- Key improvement areas: structured data, AI/GEO optimization, content depth

## Key Metrics

- **No build system** — Purely static site, no package.json
- **25 HTML pages**, 3 CSS files (~37 KB), 2 JS files
- **Language**: French (Moroccan market focus)
- **Status**: Active development, deployed at geniusbi.ma
