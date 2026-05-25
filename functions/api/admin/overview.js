import { countSupabase, getSupabaseUser, isAdminUser, json, selectSupabase } from "../../_lib/utils.js";

export async function onRequestGet(context) {
  try {
    const accessToken = (context.request.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
    if (!accessToken) {
      return json({ error: "Missing access token." }, { status: 401 });
    }

    const user = await getSupabaseUser(context.env, accessToken);
    if (!isAdminUser(context.env, user)) {
      return json({ error: "Admin access required." }, { status: 403 });
    }

    const [ordersTotal, paidOrders, contactsTotal, customerProfilesTotal, recentOrders, recentContacts, recentEvents, recentCustomers] =
      await Promise.all([
        countSupabase(context.env, "orders"),
        countSupabase(context.env, "orders", { order_status: "eq.paid" }),
        countSupabase(context.env, "contact_requests"),
        countSupabase(context.env, "customer_profiles"),
        selectSupabase(context.env, "orders", {
          select:
            "order_reference,customer_name,customer_email,order_status,payment_status,total_amount,currency,created_at,items",
          order: "created_at.desc",
          limit: "10"
        }),
        selectSupabase(context.env, "contact_requests", {
          select: "id,name,email,topic,message,created_at,status",
          order: "created_at.desc",
          limit: "10"
        }),
        selectSupabase(context.env, "site_events", {
          select: "id,event_type,page_title,page_url,created_at,metadata",
          order: "created_at.desc",
          limit: "12"
        }),
        selectSupabase(context.env, "customer_profiles", {
          select: "id,full_name,email,provider,created_at,updated_at",
          order: "updated_at.desc",
          limit: "10"
        })
      ]);

    return json({
      ok: true,
      admin: {
        email: user.email
      },
      stats: {
        ordersTotal,
        paidOrders,
        contactsTotal,
        customerProfilesTotal
      },
      recent: {
        orders: recentOrders,
        contacts: recentContacts,
        events: recentEvents,
        customers: recentCustomers
      }
    });
  } catch (error) {
    return json({ error: error.message || "Admin overview failed." }, { status: 500 });
  }
}
