import { getClientMeta, insertSupabase, json, readJson } from "../_lib/utils.js";

export async function onRequestPost(context) {
  try {
    const payload = await readJson(context.request);

    if (!payload.eventType) {
      return json({ error: "Missing eventType." }, { status: 400 });
    }

    await insertSupabase(context.env, "site_events", {
      event_type: String(payload.eventType),
      page_url: String(payload.pageUrl || context.request.url),
      page_title: String(payload.pageTitle || ""),
      session_id: String(payload.sessionId || ""),
      metadata: {
        extra: payload.extra || {},
        ...getClientMeta(context.request)
      }
    });

    return json({ ok: true });
  } catch (error) {
    return json({ error: error.message || "Analytics write failed." }, { status: 500 });
  }
}
