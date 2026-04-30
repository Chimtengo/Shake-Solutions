create extension if not exists pgcrypto;

create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content text not null,
  category text default 'News',
  author text default 'admin',
  cover_image text,
  views integer default 0,
  read_time integer default 1,
  featured boolean default false,
  published boolean default false,
  published_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.articles enable row level security;

drop policy if exists "Published articles are readable by everyone" on public.articles;
create policy "Published articles are readable by everyone"
on public.articles
for select
using (published = true or auth.role() = 'authenticated');

drop policy if exists "Authenticated users can create articles" on public.articles;
create policy "Authenticated users can create articles"
on public.articles
for insert
to authenticated
with check (true);

drop policy if exists "Authenticated users can update articles" on public.articles;
create policy "Authenticated users can update articles"
on public.articles
for update
to authenticated
using (true)
with check (true);

drop policy if exists "Authenticated users can delete articles" on public.articles;
create policy "Authenticated users can delete articles"
on public.articles
for delete
to authenticated
using (true);

insert into storage.buckets (id, name, public)
values ('article-images', 'article-images', true)
on conflict (id) do nothing;

drop policy if exists "Article images are public" on storage.objects;
create policy "Article images are public"
on storage.objects
for select
using (bucket_id = 'article-images');

drop policy if exists "Authenticated users can upload article images" on storage.objects;
create policy "Authenticated users can upload article images"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'article-images');

drop policy if exists "Authenticated users can update article images" on storage.objects;
create policy "Authenticated users can update article images"
on storage.objects
for update
to authenticated
using (bucket_id = 'article-images')
with check (bucket_id = 'article-images');

drop policy if exists "Authenticated users can delete article images" on storage.objects;
create policy "Authenticated users can delete article images"
on storage.objects
for delete
to authenticated
using (bucket_id = 'article-images');

create table if not exists public.vacancies (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  department text default 'General',
  location text default 'Lilongwe, Malawi',
  type text default 'Full-time',
  excerpt text,
  description text not null,
  requirements text,
  application_email text default 'sales@shakesolutions.net',
  featured boolean default false,
  published boolean default false,
  closing_date date,
  published_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.vacancies enable row level security;

drop policy if exists "Published vacancies are readable by everyone" on public.vacancies;
create policy "Published vacancies are readable by everyone"
on public.vacancies
for select
using (published = true or auth.role() = 'authenticated');

drop policy if exists "Authenticated users can create vacancies" on public.vacancies;
create policy "Authenticated users can create vacancies"
on public.vacancies
for insert
to authenticated
with check (true);

drop policy if exists "Authenticated users can update vacancies" on public.vacancies;
create policy "Authenticated users can update vacancies"
on public.vacancies
for update
to authenticated
using (true)
with check (true);

drop policy if exists "Authenticated users can delete vacancies" on public.vacancies;
create policy "Authenticated users can delete vacancies"
on public.vacancies
for delete
to authenticated
using (true);
