# Backend Setup

This project now uses:

- Cloudflare Pages Functions for backend endpoints
- Stripe Checkout for payments
- Supabase Auth for email, Google, and Apple login
- Supabase Postgres tables for contact requests, analytics, profiles, and orders

## 1. Create the Supabase project

In Supabase, create a new project and then run the SQL from:

- [`supabase/schema.sql`](./supabase/schema.sql)

That file is rerunnable, so it also upgrades older table versions with the newer `customer_user_id`, `payment_status`, and contact `status` fields.

## 2. Enable authentication providers

In Supabase Auth:

- enable Email
- enable Google
- enable Apple

Add your website URLs as redirect URLs, for example:

- `https://your-project.pages.dev/mein-konto.html`
- `https://your-domain.com/mein-konto.html`

## 3. Create the Stripe account setup

In Stripe:

- create or use your Stripe account
- copy the secret key
- create a webhook endpoint that points to:

```text
https://your-project.pages.dev/api/webhooks/stripe
```

or later:

```text
https://your-domain.com/api/webhooks/stripe
```

Listen for:

- `checkout.session.completed`

## 4. Add Cloudflare environment variables

In Cloudflare Pages, open your project and add these variables.

### Public variables

These are safe to expose in the browser:

- `PUBLIC_SITE_URL`
- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_ANON_KEY`

### Server-only variables

These must stay secret:

- `SITE_URL`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `ADMIN_EMAILS`

Use the same full production site URL for both:

- `PUBLIC_SITE_URL`
- `SITE_URL`

Set `ADMIN_EMAILS` to a comma-separated list of the email addresses that should be able to open the admin dashboard inside `mein-konto.html`.

## 5. Local backend testing

The frontend can run with:

```bash
npm run dev
```

But the Cloudflare backend routes live in `functions/`, so for full checkout/contact/auth route testing you should use Cloudflare's local Pages runtime after building:

```bash
cp .dev.vars.example .dev.vars
npm run preview:cloudflare
```

Then replace the placeholder values in `.dev.vars` and open the local Pages URL Wrangler prints.

## 6. What each backend route does

- `/api/contact` stores contact form requests
- `/api/analytics` stores page views and interaction events
- `/api/checkout-session` creates a Stripe Checkout session and stores a pending order
- `/api/account/profile` stores the signed-in customer profile
- `/api/account/orders` loads recent orders for the signed-in customer
- `/api/admin/overview` loads orders, contact requests, customer profiles, and recent events for allowlisted admin emails
- `/api/webhooks/stripe` marks paid orders as completed after Stripe confirms payment

## 7. Important note before going live

The legal pages still need real reviewed legal text before production use. The payment, auth, and order plumbing can be connected now, but the legal copy should be finalized with the actual business data and policies.
