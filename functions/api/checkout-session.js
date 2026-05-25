import { products } from "../../src/shared/catalog.js";
import { createStripeCheckoutSession } from "../_lib/stripe.js";
import { getClientMeta, getSupabaseUser, insertSupabase, json, normalizeEmail, readJson, slugify } from "../_lib/utils.js";

const productMap = products.reduce((accumulator, product) => {
  accumulator[product.title] = product;
  return accumulator;
}, {});

export async function onRequestPost(context) {
  try {
    const payload = await readJson(context.request);
    const cart = Array.isArray(payload.cart) ? payload.cart : [];
    const customer = payload.customer || {};
    const accessToken = (context.request.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
    let accountUser = null;

    if (!cart.length) {
      return json({ error: "Cart is empty." }, { status: 400 });
    }

    if (!customer.name || !customer.email) {
      return json({ error: "Customer name and email are required." }, { status: 400 });
    }

    if (accessToken) {
      try {
        accountUser = await getSupabaseUser(context.env, accessToken);
      } catch (error) {
        accountUser = null;
      }
    }

    const items = cart
      .map((entry) => {
        const product = productMap[entry.title];
        if (!product) {
          return null;
        }
        return {
          title: product.title,
          category: product.category,
          unitPrice: product.priceValue,
          quantity: Math.max(1, Number(entry.quantity || 1))
        };
      })
      .filter(Boolean);

    if (!items.length) {
      return json({ error: "No valid products found in cart." }, { status: 400 });
    }

    const orderReference = `dp-${Date.now()}-${slugify(customer.name).slice(0, 12)}`;
    const customerEmail = normalizeEmail(customer.email || accountUser?.email);
    const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    const shipping = subtotal >= 149 ? 0 : 7.9;

    const session = await createStripeCheckoutSession(context.env, {
      orderReference,
      customer: {
        name: String(customer.name),
        email: customerEmail,
        phone: String(customer.phone || ""),
        postal: String(customer.postal || ""),
        notes: String(customer.notes || ""),
        paymentPreference: String(customer.payment || "")
      },
      items,
      shippingAmount: shipping
    });

    await insertSupabase(context.env, "orders", {
      order_reference: orderReference,
      session_id: session.id,
      customer_user_id: accountUser?.id || null,
      customer_name: String(customer.name),
      customer_email: customerEmail,
      customer_phone: String(customer.phone || ""),
      postal_city: String(customer.postal || ""),
      payment_preference: String(customer.payment || ""),
      order_status: "pending",
      payment_status: "pending",
      subtotal_amount: subtotal,
      shipping_amount: shipping,
      total_amount: subtotal + shipping,
      currency: "EUR",
      items,
      notes: String(customer.notes || ""),
      metadata: {
        checkout_url: session.url,
        ...getClientMeta(context.request)
      }
    });

    return json({ ok: true, url: session.url, orderReference });
  } catch (error) {
    return json({ error: error.message || "Checkout session failed." }, { status: 500 });
  }
}
