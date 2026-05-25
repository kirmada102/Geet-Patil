import { getSupabaseUser, json, readJson, upsertSupabase } from "../../_lib/utils.js";

export async function onRequestPost(context) {
  try {
    const accessToken = (context.request.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
    if (!accessToken) {
      return json({ error: "Missing access token." }, { status: 401 });
    }

    const user = await getSupabaseUser(context.env, accessToken);
    const payload = await readJson(context.request);
    const metadata = payload.profile || {};

    const profile = {
      user_id: user.id,
      email: user.email,
      first_name: String(metadata.first_name || user.user_metadata?.first_name || ""),
      last_name: String(metadata.last_name || user.user_metadata?.last_name || ""),
      full_name:
        String(metadata.full_name || "").trim() ||
        [metadata.first_name || user.user_metadata?.first_name || "", metadata.last_name || user.user_metadata?.last_name || ""]
          .join(" ")
          .trim(),
      provider: user.app_metadata?.provider || "email",
      raw_user_meta: user.user_metadata || {}
    };

    await upsertSupabase(context.env, "customer_profiles", profile, "user_id");
    return json({ ok: true, profile });
  } catch (error) {
    return json({ error: error.message || "Profile sync failed." }, { status: 500 });
  }
}
