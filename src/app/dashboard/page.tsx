import { redirect } from 'next/navigation';
import AppLayout from '@/components/AppLayout';
import { createClient } from '@/lib/supabase/server';

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  return (
    <AppLayout activeRoute="/dashboard">
      <section className="px-4 py-8 lg:px-0">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="mt-2 text-sm text-muted-foreground">Chào mừng bạn quay lại, {user.email}.</p>
      </section>
    </AppLayout>
  );
}
