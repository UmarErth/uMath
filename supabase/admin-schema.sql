-- Nova Gaming admin authorization and audit tables.
-- Run this in the Supabase SQL editor for a new deployment.

create table if not exists public.nova_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.nova_admins enable row level security;
revoke all on table public.nova_admins from anon, authenticated;

create policy "deny client access" on public.nova_admins
for all to anon, authenticated
using (false)
with check (false);

create table if not exists public.nova_admin_audit (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  action text not null check (action in ('add', 'update', 'delete')),
  game_title text not null,
  game_url text,
  github_commit_sha text,
  created_at timestamptz not null default now()
);

create index if not exists nova_admin_audit_user_id_idx
on public.nova_admin_audit (user_id);

alter table public.nova_admin_audit enable row level security;
revoke all on table public.nova_admin_audit from anon, authenticated;

create policy "deny client access" on public.nova_admin_audit
for all to anon, authenticated
using (false)
with check (false);

-- Add an existing Auth user after replacing the UUID:
-- insert into public.nova_admins (user_id) values ('00000000-0000-0000-0000-000000000000');
