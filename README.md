# Duschrinnen Profi Modern

Modern Astro rebuild of the Duschrinnen Profi redesign. The site is now structured as a static Astro project with plain CSS, one shared JavaScript file, and file-based `.html` output that keeps the existing URLs intact.

## Stack

- Astro
- Plain CSS
- Lightweight vanilla JavaScript
- Cloudflare Pages Functions for backend routes
- Stripe Checkout + Supabase Auth / data
- Static build output in `dist/`

## Project structure

- `src/layouts/BaseLayout.astro` shared page shell
- `src/components/` shared header, footer, and search modal
- `src/pages/` Astro routes
- `src/content/pages/` raw HTML page fragments migrated from the old static version
- `src/scripts/main.js` bundled frontend logic
- `src/shared/catalog.js` shared product data for frontend and backend validation
- `functions/` Cloudflare Pages backend routes
- `public/styles.css` global stylesheet
- `public/assets/` mirrored images, logo, font, and original media
- `legacy-static/` snapshot of the pre-Astro HTML files for reference

## Local development

Install dependencies:

```bash
npm install
```

Start the Astro dev server:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:4321/index.html
```

## Production build

```bash
npm run build
```

The final static site is written to:

```text
dist/
```

## Deploy options

- Cloudflare Pages: see [CLOUDFLARE-PAGES.md](./CLOUDFLARE-PAGES.md)
- Backend setup: see [BACKEND-SETUP.md](./BACKEND-SETUP.md)
- GitHub Pages: `.github/workflows/pages.yml` now builds Astro and publishes `dist/`

## Notes

- Routes are emitted as file-style URLs such as `about.html`, `sortiment.html`, and `checkout.html` so the existing internal links and JS logic keep working.
- The original product, category, and guide media are preserved in `public/assets/original/`.
- Real checkout and customer features require the environment variables and Supabase / Stripe setup from `BACKEND-SETUP.md`.
