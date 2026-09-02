'use client';

import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function ResetPasswordPage() {
  const supabase = createClient();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    if (!password) return setError('Vui lòng nhập mật khẩu.');
    if (password.length < 6) return setError('Mật khẩu phải có ít nhất 6 ký tự.');
    if (!confirmPassword) return setError('Vui lòng xác nhận mật khẩu.');
    if (password !== confirmPassword) return setError('Mật khẩu xác nhận không khớp.');

    setIsLoading(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    if (updateError) setError('Không thể đổi mật khẩu. Vui lòng mở lại liên kết trong email.');
    else setMessage('Đổi mật khẩu thành công.');
    setIsLoading(false);
    if (!updateError) window.setTimeout(() => window.location.assign('/login'), 800);
  }

  const field = (
    id: string,
    label: string,
    value: string,
    setValue: (value: string) => void,
    visible: boolean,
    setVisible: (value: boolean) => void
  ) => (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm text-muted-foreground">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          required
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={id === 'password' ? 'Nhập mật khẩu mới' : 'Nhập lại mật khẩu mới'}
          className="w-full rounded-md border border-border px-3 py-2 pr-10 text-sm"
        />
        <button
          type="button"
          aria-label={visible ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
          onClick={() => setVisible(!visible)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground"
        >
          {visible ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm rounded-xl border border-border bg-card p-6 shadow-card">
        <h1 className="mb-6 text-xl font-semibold">Đặt lại mật khẩu</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {field('password', 'Mật khẩu mới', password, setPassword, showPassword, setShowPassword)}
          {field(
            'confirmPassword',
            'Xác nhận mật khẩu mới',
            confirmPassword,
            setConfirmPassword,
            showConfirmPassword,
            setShowConfirmPassword
          )}
          {error && <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}
          {message && (
            <p className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">{message}</p>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground"
          >
            {isLoading ? 'Đang cập nhật...' : 'Đổi mật khẩu'}
          </button>
        </form>
        <p className="mt-5 text-center text-sm">
          <Link href="/login" className="text-primary hover:underline">
            Quay lại đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
}
