import { ensureEnv, slugify, toCurrencyAmount } from "./utils.js";

function appendFormField(params, key, value) {
  if (Array.isArray(value)) {
    value.forEach((entry) => appendFormField(params, `${key}[]`, entry));
    return;
  }

  params.append(key, String(value));
}

export async function createStripeCheckoutSession(env, payload) {
  ensureEnv(env, ["STRIPE_SECRET_KEY", "SITE_URL"]);

  const params = new URLSearchParams();
  appendFormField(params, "mode", "payment");
  appendFormField(params, "success_url", `${env.SITE_URL}/checkout-success.html?session_id={CHECKOUT_SESSION_ID}`);
  appendFormField(params, "cancel_url", `${env.SITE_URL}/checkout-cancel.html`);
  appendFormField(params, "billing_address_collection", "required");
  appendFormField(params, "allow_promotion_codes", "true");
  appendFormField(params, "phone_number_collection[enabled]", "true");
  appendFormField(params, "customer_email", payload.customer.email);

  payload.items.forEach((item, index) => {
    appendFormField(params, `line_items[${index}][quantity]`, item.quantity);
    appendFormField(params, `line_items[${index}][price_data][currency]`, "eur");
    appendFormField(params, `line_items[${index}][price_data][product_data][name]`, item.title);
    appendFormField(params, `line_items[${index}][price_data][product_data][description]`, item.category);
    appendFormField(params, `line_items[${index}][price_data][product_data][metadata][slug]`, slugify(item.title));
    appendFormField(params, `line_items[${index}][price_data][unit_amount]`, toCurrencyAmount(item.unitPrice));
  });

  if (Number(payload.shippingAmount || 0) > 0) {
    const shippingIndex = payload.items.length;
    appendFormField(params, `line_items[${shippingIndex}][quantity]`, 1);
    appendFormField(params, `line_items[${shippingIndex}][price_data][currency]`, "eur");
    appendFormField(params, `line_items[${shippingIndex}][price_data][product_data][name]`, "DHL Versand");
    appendFormField(params, `line_items[${shippingIndex}][price_data][product_data][description]`, "Lieferung in 1-2 Werktagen");
    appendFormField(params, `line_items[${shippingIndex}][price_data][unit_amount]`, toCurrencyAmount(payload.shippingAmount));
  }

  const metadata = {
    order_reference: payload.orderReference,
    customer_name: payload.customer.name,
    customer_phone: payload.customer.phone || "",
    postal_city: payload.customer.postal || "",
    payment_preference: payload.customer.paymentPreference || "",
    shipping_amount: String(payload.shippingAmount || 0),
    source: "duschrinnenprofi-web"
  };

  Object.entries(metadata).forEach(([key, value]) => {
    appendFormField(params, `metadata[${key}]`, value);
  });

  if (payload.customer.notes) {
    appendFormField(params, "custom_text[submit][message]", payload.customer.notes.slice(0, 120));
  }

  const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params.toString()
  });

  if (!response.ok) {
    throw new Error(`Stripe checkout session failed: ${response.status} ${await response.text()}`);
  }

  return response.json();
}

function timingSafeEqualHex(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  let mismatch = 0;
  for (let index = 0; index < a.length; index += 1) {
    mismatch |= a.charCodeAt(index) ^ b.charCodeAt(index);
  }
  return mismatch === 0;
}

async function hmacSha256(secret, payload) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return Array.from(new Uint8Array(signature))
    .map((value) => value.toString(16).padStart(2, "0"))
    .join("");
}

export async function verifyStripeWebhook(env, request, rawBody) {
  ensureEnv(env, ["STRIPE_WEBHOOK_SECRET"]);
  const signature = request.headers.get("stripe-signature") || "";

  const parts = signature.split(",").reduce((accumulator, part) => {
    const [key, value] = part.split("=");
    if (key && value) {
      accumulator[key] = value;
    }
    return accumulator;
  }, {});

  if (!parts.t || !parts.v1) {
    throw new Error("Missing Stripe signature components.");
  }

  const signedPayload = `${parts.t}.${rawBody}`;
  const expected = await hmacSha256(env.STRIPE_WEBHOOK_SECRET, signedPayload);

  if (!timingSafeEqualHex(expected, parts.v1)) {
    throw new Error("Invalid Stripe webhook signature.");
  }

  return JSON.parse(rawBody);
}
