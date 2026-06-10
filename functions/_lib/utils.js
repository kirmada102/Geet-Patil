function getHeader(request, name) {
  return request.headers.get(name) || "";
}

export function json(data, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set("content-type", "application/json; charset=utf-8");
  headers.set("cache-control", "no-store");
  return new Response(JSON.stringify(data), {
    ...init,
    headers
  });
}

export async function readJson(request) {
  const contentType = getHeader(request, "content-type");

  if (contentType.includes("application/json")) {
    return request.json();
  }

  if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    return Object.fromEntries(formData.entries());
  }

  const text = await request.text();
  return text ? JSON.parse(text) : {};
}

export function ensureEnv(env, keys) {
  const missing = keys.filter((key) => !env[key]);
  if (missing.length) {
    throw new Error("Missing environment variables: " + missing.join(", "));
  }
}

export function getSupabaseBaseUrl(env) {
  ensureEnv(env, ["SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"]);

  return String(env.SUPABASE_URL || "")
    .trim()
    .replace(/\/+$/g, "")
    .replace(/\/rest\/v1$/i, "");
}

function getSupabaseRestUrl(env, table) {
  return `${getSupabaseBaseUrl(env)}/rest/v1/${table}`;
}

export function getClientMeta(request) {
  const cf = request.cf || {};
  return {
    ip: getHeader(request, "cf-connecting-ip") || null,
    country: cf.country || null,
    city: cf.city || null,
    region: cf.region || null,
    colo: cf.colo || null,
    timezone: cf.timezone || null,
    user_agent: getHeader(request, "user-agent") || null,
    referer: getHeader(request, "referer") || null,
    accept_language: getHeader(request, "accept-language") || null
  };
}

export function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

export function toCurrencyAmount(value) {
  return Math.round(Number(value || 0) * 100);
}

export async function insertSupabase(env, table, payload) {
  const response = await fetch(getSupabaseRestUrl(env, table), {
    method: "POST",
    headers: {
      apikey: env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Supabase insert failed for ${table}: ${response.status} ${await response.text()}`);
  }

  return response.json();
}

export async function upsertSupabase(env, table, payload, onConflict) {
  const response = await fetch(`${getSupabaseRestUrl(env, table)}?on_conflict=${encodeURIComponent(onConflict)}`, {
    method: "POST",
    headers: {
      apikey: env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates,return=representation"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Supabase upsert failed for ${table}: ${response.status} ${await response.text()}`);
  }

  return response.json();
}

export async function updateSupabase(env, table, filters, payload) {
  const url = new URL(getSupabaseRestUrl(env, table));

  Object.entries(filters).forEach(([key, value]) => {
    url.searchParams.set(key, `eq.${value}`);
  });

  const response = await fetch(url.toString(), {
    method: "PATCH",
    headers: {
      apikey: env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Supabase update failed for ${table}: ${response.status} ${await response.text()}`);
  }

  return response.json();
}

export async function selectSupabase(env, table, query = {}) {
  const url = new URL(getSupabaseRestUrl(env, table));

  Object.entries(query).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const response = await fetch(url.toString(), {
    headers: {
      apikey: env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`
    }
  });

  if (!response.ok) {
    throw new Error(`Supabase select failed for ${table}: ${response.status} ${await response.text()}`);
  }

  return response.json();
}

export async function countSupabase(env, table, query = {}) {
  const url = new URL(getSupabaseRestUrl(env, table));

  Object.entries({
    select: "id",
    limit: "1",
    ...query
  }).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const response = await fetch(url.toString(), {
    headers: {
      apikey: env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
      Prefer: "count=exact"
    }
  });

  if (!response.ok) {
    throw new Error(`Supabase count failed for ${table}: ${response.status} ${await response.text()}`);
  }

  const contentRange = response.headers.get("content-range") || "";
  const total = Number(contentRange.split("/")[1] || 0);
  return Number.isFinite(total) ? total : 0;
}

export async function getSupabaseUser(env, accessToken) {
  const response = await fetch(`${getSupabaseBaseUrl(env)}/auth/v1/user`, {
    headers: {
      apikey: env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${accessToken}`
    }
  });

  if (!response.ok) {
    throw new Error(`Supabase auth user lookup failed: ${response.status}`);
  }

  return response.json();
}

export function getAdminEmails(env) {
  return String(env.ADMIN_EMAILS || "")
    .split(",")
    .map((value) => normalizeEmail(value))
    .filter(Boolean);
}

export function isAdminUser(env, user) {
  const email = normalizeEmail(user && user.email);
  if (!email) {
    return false;
  }

  return getAdminEmails(env).includes(email);
}
