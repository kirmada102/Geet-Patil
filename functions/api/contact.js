import { getClientMeta, insertSupabase, json, readJson } from "../_lib/utils.js";

export async function onRequestPost(context) {
  try {
    const payload = await readJson(context.request);

    if (!payload.name || !payload.email || !payload.message) {
      return json({ error: "Missing required contact fields." }, { status: 400 });
    }

    await insertSupabase(context.env, "contact_requests", {
      name: String(payload.name).trim(),
      email: String(payload.email).trim().toLowerCase(),
      topic: String(payload.topic || "General enquiry").trim(),
      message: String(payload.message).trim(),
      page_url: String(payload.pageUrl || context.request.url),
      source: "website-contact-form",
      metadata: {
        ...getClientMeta(context.request),
        locale: payload.locale || "de"
      }
    });

    return json({ ok: true });
  } catch (error) {
    return json({ error: error.message || "Contact request failed." }, { status: 500 });
  }
}
