import { redirect } from 'next/navigation';
import AppLayout from '@/components/AppLayout';
import { createClient } from '@/lib/supabase/server';
import { getDisplayName, getProfileMetadata } from '@/lib/profile';

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect('/login');
  const metadata = getProfileMetadata(user.user_metadata);
  const displayName = getDisplayName(user.email, metadata);

  return (
    <AppLayout activeRoute="/dashboard">
      <section className="px-4 py-8 lg:px-0">
        <h1 className="text-2xl font-semibold">Chào mừng trở lại, {displayName}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Đây là không gian riêng của bạn trên RelationshipTalk.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DashboardLink href="/profile" title="Hồ sơ của tôi" description="Xem và cập nhật thông tin cá nhân." />
          <DashboardLink href="/chat-messaging" title="Tin nhắn" description="Các cuộc trò chuyện của bạn." />
          <DashboardLink href="#posts" title="Bài viết của tôi" description="Chưa có bài viết nào." />
          <DashboardLink href="#matches" title="Matches" description="Tính năng đang được phát triển." />
          <DashboardLink href="#notifications" title="Thông báo" description="Bạn chưa có thông báo mới." />
        </div>
      </section>
    </AppLayout>
  );
}

function DashboardLink({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <a href={href} className="rounded-xl border border-border bg-card p-5 shadow-card transition hover:border-primary hover:shadow-md">
      <h2 className="font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </a>
  );
}
