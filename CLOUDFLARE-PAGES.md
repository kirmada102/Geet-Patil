# Cloudflare Deployment

This Astro project builds to a static `dist/` folder. The included `wrangler.jsonc` tells Cloudflare Workers to deploy that folder as static assets.

## Workers build settings

Use these values when Cloudflare shows `Build command`, `Deploy command`, and `Path` fields:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Non-production branch deploy command: `npx wrangler versions upload`
- Path: `/`

The deploy command uses `wrangler.jsonc`, so you do not need a separate build output directory field in this Workers screen.

## Pages build settings

If you create a Cloudflare Pages project instead of a Workers project, use:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

## Required environment variables

Add these in the Cloudflare Pages project settings before testing live checkout or account flows:

### Public

- `PUBLIC_SITE_URL`
- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_ANON_KEY`

### Secret

- `SITE_URL`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

The full backend setup, database schema, and Stripe webhook steps are documented in [BACKEND-SETUP.md](./BACKEND-SETUP.md).

## Option 1: Connect a Git repository

1. Push this project to GitHub or GitLab.
2. In Cloudflare, go to `Workers & Pages` and create a new `Pages` project.
3. Connect your repository.
4. Select the branch you want to deploy.
5. Use the build settings above.
6. Save and deploy.

After the first deploy, every new push to that branch will trigger a fresh build and the Pages Functions in `functions/` will deploy with it.

## Option 2: Direct upload without Git

1. Build the site locally:

   ```bash
   npm install
   npm run build
   ```

2. In Cloudflare Pages, create a new project and choose direct upload.
3. Upload the contents of the local `dist/` folder.

This is the simplest path if you do not want to use GitHub or GitLab.

## Custom domain

After deployment, add your custom domain inside the Cloudflare Pages project and follow the DNS prompts Cloudflare shows for the project.

## Before you deploy

Run these locally:

```bash
npm run build
npm run preview
```

Then open:

```text
http://127.0.0.1:4321/index.html
```

If the site looks correct locally in preview mode, the Cloudflare deploy should match closely because the output is static.

For full backend route testing, use:

```bash
cp .dev.vars.example .dev.vars
npm run preview:cloudflare
```
