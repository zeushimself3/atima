-- Applied to project qvarggnqgvhfkuxxrmsn on 2026-11-04 via Supabase MCP.
create table public.consultation_requests (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 120),
  phone text not null check (char_length(phone) between 5 and 40),
  interest text not null check (char_length(interest) between 1 and 120),
  message text check (char_length(message) <= 4000),
  channel text not null check (channel in ('whatsapp', 'email')),
  status text not null default 'new' check (status in ('new', 'contacted', 'closed'))
);

comment on table public.consultation_requests is 'Leads submitted from the website "Request a consultation" form.';

alter table public.consultation_requests enable row level security;

-- Website visitors may submit a request but never read, edit or delete any.
revoke all on table public.consultation_requests from anon, authenticated;
grant insert (name, phone, interest, message, channel) on table public.consultation_requests to anon;

create policy "Visitors can submit consultation requests"
  on public.consultation_requests
  for insert
  to anon
  with check (status = 'new');

create index consultation_requests_created_at_idx on public.consultation_requests (created_at desc);
