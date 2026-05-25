create extension if not exists pgcrypto;

create table if not exists contact_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  topic text not null,
  message text not null,
  status text not null default 'new',
  page_url text,
  source text,
  metadata jsonb not null default '{}'::jsonb
);

alter table contact_requests add column if not exists status text not null default 'new';

create table if not exists site_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  event_type text not null,
  page_url text,
  page_title text,
  session_id text,
  metadata jsonb not null default '{}'::jsonb
);

create table if not exists customer_profiles (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  user_id uuid not null unique,
  email text not null,
  first_name text,
  last_name text,
  full_name text,
  provider text,
  raw_user_meta jsonb not null default '{}'::jsonb
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  order_reference text not null unique,
  session_id text unique,
  customer_user_id uuid,
  customer_name text not null,
  customer_email text not null,
  customer_phone text,
  postal_city text,
  payment_preference text,
  order_status text not null default 'pending',
  payment_status text not null default 'pending',
  subtotal_amount numeric(10,2) not null default 0,
  shipping_amount numeric(10,2) not null default 0,
  total_amount numeric(10,2) not null default 0,
  currency text not null default 'EUR',
  items jsonb not null default '[]'::jsonb,
  notes text,
  metadata jsonb not null default '{}'::jsonb
);

alter table orders add column if not exists customer_user_id uuid;
alter table orders add column if not exists payment_status text not null default 'pending';

create index if not exists idx_contact_requests_created_at on contact_requests (created_at desc);
create index if not exists idx_site_events_created_at on site_events (created_at desc);
create index if not exists idx_orders_customer_email on orders (customer_email);
create index if not exists idx_orders_customer_user_id on orders (customer_user_id);
create index if not exists idx_orders_created_at on orders (created_at desc);
create index if not exists idx_orders_status on orders (order_status, payment_status);
create index if not exists idx_customer_profiles_updated_at on customer_profiles (updated_at desc);

create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_customer_profiles_updated_at on customer_profiles;
create trigger trg_customer_profiles_updated_at
before update on customer_profiles
for each row
execute function set_updated_at();

alter table contact_requests enable row level security;
alter table site_events enable row level security;
alter table customer_profiles enable row level security;
alter table orders enable row level security;
