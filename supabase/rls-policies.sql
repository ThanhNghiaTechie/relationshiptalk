-- Run once in Supabase SQL Editor.
-- These guards add only missing policies and do not recreate or drop tables.
do $$
begin
  if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'profiles' and cmd = 'SELECT') then
    create policy profiles_select_authenticated on public.profiles for select to authenticated using (true);
  end if;
  if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'profiles' and cmd = 'INSERT') then
    create policy profiles_insert_own on public.profiles for insert to authenticated with check (id = auth.uid());
  end if;
  if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'profiles' and cmd = 'UPDATE') then
    create policy profiles_update_own on public.profiles for update to authenticated using (id = auth.uid()) with check (id = auth.uid());
  end if;
  if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'posts' and cmd = 'SELECT') then
    create policy posts_select_authenticated on public.posts for select to authenticated using (true);
  end if;
  if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'posts' and cmd = 'INSERT') then
    create policy posts_insert_own on public.posts for insert to authenticated with check (user_id = auth.uid());
  end if;
  if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'posts' and cmd = 'UPDATE') then
    create policy posts_update_own on public.posts for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
  end if;
  if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'posts' and cmd = 'DELETE') then
    create policy posts_delete_own on public.posts for delete to authenticated using (user_id = auth.uid());
  end if;
  if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'categories' and cmd = 'SELECT') then
    create policy categories_select_authenticated on public.categories for select to authenticated using (true);
  end if;
end
$$;

alter table public.profiles enable row level security;
alter table public.posts enable row level security;
alter table public.categories enable row level security;
