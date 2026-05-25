import { verifyStripeWebhook } from "../../_lib/stripe.js";
import { insertSupabase, json, updateSupabase } from "../../_lib/utils.js";

export async function onRequestPost(context) {
  try {
    const rawBody = await context.request.text();
    const event = await verifyStripeWebhook(context.env, context.request, rawBody);

    if (event.type === "checkout.session.completed") {
      const session = event.data?.object || {};
      const subtotal = Number(session.amount_subtotal || 0) / 100;
      const total = Number(session.amount_total || 0) / 100;
      const shipping = Number((session.total_details && session.total_details.amount_shipping) || 0) / 100;

      await updateSupabase(
        context.env,
        "orders",
        { session_id: session.id },
        {
          order_status: "paid",
          subtotal_amount: subtotal,
          shipping_amount: shipping,
          total_amount: total,
          payment_status: session.payment_status || "paid",
          metadata: {
            stripe_session_status: session.status || "complete",
            stripe_customer_details: session.customer_details || null
          }
        }
      );

      await insertSupabase(context.env, "site_events", {
        event_type: "checkout_completed",
        page_url: session.success_url || "",
        page_title: "Stripe webhook",
        session_id: session.id,
        metadata: {
          order_reference: session.metadata?.order_reference || "",
          customer_email: session.customer_details?.email || session.customer_email || "",
          payment_status: session.payment_status || "paid"
        }
      });
    }

    return json({ received: true });
  } catch (error) {
    return json({ error: error.message || "Webhook failed." }, { status: 400 });
  }
}
