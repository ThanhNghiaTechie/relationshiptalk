'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { getProfileMetadata } from '@/lib/profile';

export default function EditProfilePage() {
  const [form, setForm] = useState({ full_name: '', username: '', avatar_url: '', bio: '', location: '' });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [supabase] = useState(() => createClient());

  useEffect(() => {
    void supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        const metadata = getProfileMetadata(data.user.user_metadata);
        setForm({
          full_name: metadata.full_name || '',
          username: metadata.username || '',
          avatar_url: metadata.avatar_url || '',
          bio: metadata.bio || '',
          location: metadata.location || '',
        });
      }
      setLoading(false);
    });
  }, [supabase]);

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setMessage('');
    if (!form.full_name.trim()) return setError('Vui lòng nhập họ tên.');
    if (!form.username.trim()) return setError('Vui lòng nhập username.');
    if (!/^[a-zA-Z0-9_]{3,30}$/.test(form.username.trim())) return setError('Username gồm 3-30 ký tự chữ, số hoặc _.');
    if (form.avatar_url && !/^https?:\/\//.test(form.avatar_url)) return setError('Avatar phải là một URL hợp lệ.');

    setSaving(true);
    const { error: updateError } = await supabase.auth.updateUser({
      data: {
        full_name: form.full_name.trim(),
        username: form.username.trim(),
        avatar_url: form.avatar_url.trim(),
        bio: form.bio.trim(),
        location: form.location.trim(),
      },
    });
    if (updateError) setError('Không thể cập nhật hồ sơ. Vui lòng thử lại.');
    else setMessage('Đã cập nhật hồ sơ.');
    setSaving(false);
  }

  if (loading) return <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">Đang tải hồ sơ...</div>;

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg rounded-xl border border-border bg-card p-6 shadow-card">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-xl font-semibold">Chỉnh sửa hồ sơ</h1>
          <Link href="/profile" className="text-sm text-primary hover:underline">Quay lại</Link>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {(['full_name', 'username', 'avatar_url', 'location'] as const).map((field) => (
            <div key={field}>
              <label htmlFor={field} className="mb-1 block text-sm text-muted-foreground">{field === 'full_name' ? 'Họ và tên' : field === 'avatar_url' ? 'Avatar URL' : field === 'username' ? 'Username' : 'Địa điểm'}</label>
              <input id={field} value={form[field]} onChange={(event) => updateField(field, event.target.value)} className="w-full rounded-md border border-border px-3 py-2 text-sm" />
            </div>
          ))}
          <div>
            <label htmlFor="bio" className="mb-1 block text-sm text-muted-foreground">Giới thiệu</label>
            <textarea id="bio" value={form.bio} onChange={(event) => updateField('bio', event.target.value)} maxLength={280} rows={4} className="w-full resize-y rounded-md border border-border px-3 py-2 text-sm" />
          </div>
          {error && <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}
          {message && <p className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">{message}</p>}
          <button type="submit" disabled={saving} className="w-full rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground">{saving ? 'Đang lưu...' : 'Lưu thay đổi'}</button>
        </form>
      </div>
    </div>
  );
}
