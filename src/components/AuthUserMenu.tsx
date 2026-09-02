'use client';

import { ChevronDown, LogOut, UserCircle } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function AuthUserMenu({ compact = false }: { compact?: boolean }) {
  const [user, setUser] = useState<Awaited<ReturnType<ReturnType<typeof createClient>['auth']['getUser']>>['data']['user']>(null);
  const [open, setOpen] = useState(false);
  const [supabase] = useState(() => createClient());

  useEffect(() => {
    let mounted = true;
    void supabase.auth.getUser().then(({ data }) => {
      if (mounted) setUser(data.user);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) setUser(session?.user ?? null);
    });
    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, [supabase]);

  async function handleLogout() {
    await supabase.auth.signOut();
    setUser(null);
    window.location.assign('/');
  }

  if (!user) {
    return (
      <Link href="/login" className={compact ? 'p-1 text-muted-foreground' : 'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground'}>
        <UserCircle size={compact ? 28 : 20} />
        {!compact && <span>Đăng nhập</span>}
      </Link>
    );
  }

  const metadata = user.user_metadata as { username?: string; full_name?: string; avatar_url?: string };
  const displayName = metadata.full_name || metadata.username || user.email?.split('@')[0] || 'Bạn';
  const avatarUrl = metadata.avatar_url;

  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Mở menu tài khoản" className={compact ? 'profile-avatar-ring flex h-9 w-9 items-center justify-center' : 'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left hover:bg-muted'}>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted">
          {avatarUrl ? <img src={avatarUrl} alt="Ảnh đại diện" className="h-full w-full object-cover" /> : <UserCircle size={24} className="text-muted-foreground" />}
        </span>
        {!compact && <span className="min-w-0 flex-1 truncate text-sm font-medium">{displayName}</span>}
        {!compact && <ChevronDown size={16} className="shrink-0 text-muted-foreground" />}
      </button>
      {open && (
        <div className={compact ? 'absolute right-0 top-12 z-50 w-48 rounded-xl border border-border bg-card p-1 shadow-card' : 'absolute bottom-12 left-0 z-50 w-56 rounded-xl border border-border bg-card p-1 shadow-card'}>
          <div className="border-b border-border px-3 py-2">
            <p className="truncate text-sm font-semibold">{displayName}</p>
            <p className="truncate text-xs text-muted-foreground">{user.email}</p>
          </div>
          <Link href="/profile" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm hover:bg-muted">Hồ sơ của tôi</Link>
          <Link href="/dashboard" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm hover:bg-muted">Dashboard</Link>
          <button type="button" onClick={() => void handleLogout()} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"><LogOut size={16} />Đăng xuất</button>
        </div>
      )}
    </div>
  );
}
