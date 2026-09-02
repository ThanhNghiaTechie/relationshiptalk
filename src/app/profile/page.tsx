import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { getDisplayName, getProfileMetadata } from '@/lib/profile';
import AppLayout from '@/components/AppLayout';

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const metadata = getProfileMetadata(user.user_metadata);
  const displayName = getDisplayName(user.email, metadata);
  const joinedDate = new Date(user.created_at).toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <AppLayout activeRoute="/profile">
      <section className="mx-auto max-w-2xl px-4 py-8 lg:px-0">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold">Hồ sơ của tôi</h1>
          <Link href="/profile/edit" className="btn-outline">
            Chỉnh sửa hồ sơ
          </Link>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <div className="flex items-center gap-4">
            <div className="profile-avatar-ring h-20 w-20 shrink-0">
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border-4 border-card bg-muted text-2xl font-semibold text-muted-foreground">
                {metadata.avatar_url ? (
                  <img
                    src={metadata.avatar_url}
                    alt="Ảnh đại diện"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  displayName.charAt(0).toUpperCase()
                )}
              </div>
            </div>
            <div className="min-w-0">
              <h2 className="truncate text-xl font-semibold">{displayName}</h2>
              <p className="text-sm text-muted-foreground">
                @{metadata.username || 'chưa đặt tên người dùng'}
              </p>
            </div>
          </div>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-muted-foreground">Email</dt>
              <dd className="mt-1">{user.email}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Giới thiệu</dt>
              <dd className="mt-1">{metadata.bio || 'Chưa cập nhật'}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Địa điểm</dt>
              <dd className="mt-1">{metadata.location || 'Chưa cập nhật'}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Tham gia từ</dt>
              <dd className="mt-1">{joinedDate}</dd>
            </div>
          </dl>
        </div>
      </section>
    </AppLayout>
  );
}
