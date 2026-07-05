# Geet Patil Portfolio

Astro portfolio website for Geet Patil, adapted from the Hudson template and tailored around product management, medtech commercialization, simulation engineering, business development, and business transformation experience.

## Stack

- Astro static output
- Hudson/StyleShout template structure
- Plain CSS customizations in `public/hudson/css/geet.css`
- Lightweight vanilla JavaScript from the Hudson template
- Montserrat typography
- GitHub Pages workflow in `.github/workflows/pages.yml`

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:4321/
```

## Production Build

```bash
npm run build
```

The static site is emitted to:

```text
dist/
```

## Template Attribution

This portfolio uses the Hudson template by StyleShout, distributed through ThemeWagon. The footer attribution is kept in place to respect the template license.

## GitHub Connection

This folder is currently connected to:

```text
origin -> https://github.com/kirmada102/DuschrinnenProfi-Modern.git
```

I did not replace `origin` with a guessed portfolio repository because the exact target repository URL was not provided. After the GitHub repository exists, connect this project with:

```bash
git remote set-url origin https://github.com/kirmada102/geet-patil-portfolio.git
git push -u origin main
```

The included GitHub Pages workflow will build Astro and publish `dist/` on pushes to `main`.
