import { onRequestGet as getAccountOrders } from "./api/account/orders.js";
import { onRequestPost as postAccountProfile } from "./api/account/profile.js";
import { onRequestGet as getAdminOverview } from "./api/admin/overview.js";
import { onRequestPost as postAnalytics } from "./api/analytics.js";
import { onRequestPost as postCheckoutSession } from "./api/checkout-session.js";
import { onRequestPost as postContact } from "./api/contact.js";
import { onRequestPost as postStripeWebhook } from "./api/webhooks/stripe.js";
import { json } from "./_lib/utils.js";

const routes = {
  "POST /api/analytics": postAnalytics,
  "POST /api/contact": postContact,
  "POST /api/checkout-session": postCheckoutSession,
  "GET /api/account/orders": getAccountOrders,
  "POST /api/account/profile": postAccountProfile,
  "GET /api/admin/overview": getAdminOverview,
  "POST /api/webhooks/stripe": postStripeWebhook
};

function getRouteKey(request) {
  const url = new URL(request.url);
  return `${request.method.toUpperCase()} ${url.pathname.replace(/\/+$/g, "") || "/"}`;
}

function withSecurityHeaders(response) {
  const headers = new Headers(response.headers);
  headers.set("x-content-type-options", "nosniff");
  headers.set("referrer-policy", "strict-origin-when-cross-origin");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

export default {
  async fetch(request, env, ctx) {
    if (request.method.toUpperCase() === "OPTIONS") {
      return new Response(null, { status: 204 });
    }

    const url = new URL(request.url);
    const route = routes[getRouteKey(request)];

    if (route) {
      return route({ request, env, ctx, next: () => env.ASSETS.fetch(request) });
    }

    if (url.pathname.startsWith("/api/")) {
      return json({ error: "API route not found." }, { status: 404 });
    }

    const response = await env.ASSETS.fetch(request);
    return withSecurityHeaders(response);
  }
};
