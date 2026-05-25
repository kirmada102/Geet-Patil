import { getSupabaseUser, json, selectSupabase } from "../../_lib/utils.js";

export async function onRequestGet(context) {
  try {
    const accessToken = (context.request.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
    if (!accessToken) {
      return json({ error: "Missing access token." }, { status: 401 });
    }

    const user = await getSupabaseUser(context.env, accessToken);
    const rows = await selectSupabase(context.env, "orders", {
      select: "order_reference,order_status,total_amount,currency,created_at,items",
      or: `(customer_user_id.eq.${user.id},customer_email.eq.${user.email})`,
      order: "created_at.desc",
      limit: "8"
    });

    return json({ ok: true, orders: rows });
  } catch (error) {
    return json({ error: error.message || "Order lookup failed." }, { status: 500 });
  }
}
