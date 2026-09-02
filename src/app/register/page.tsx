 'use client';

import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function RegisterPage() {
  const supabase = createClient();
  const [email, setEmail] = useState('');
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
    setMessage('');
    if (!email.trim()) return setError('Vui lòng nhập email.');
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError('Email không hợp lệ.');
    if (!password) return setError('Vui lòng nhập mật khẩu.');
    if (password.length < 6) return setError('Mật khẩu phải có ít nhất 6 ký tự.');
    if (!confirmPassword) return setError('Vui lòng xác nhận mật khẩu.');
    if (password !== confirmPassword) return setError('Mật khẩu xác nhận không khớp.');

    setIsLoading(true);
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    });
    if (signUpError) {
      setError('Không thể tạo tài khoản. Vui lòng kiểm tra thông tin và thử lại.');
      setIsLoading(false);
      return;
    }
    if (data.session) window.location.assign('/');
    else setMessage('Đăng ký thành công. Vui lòng kiểm tra email để xác nhận tài khoản.');
    setIsLoading(false);
  }

  const passwordField = (id: string, label: string, placeholder: string, value: string, setValue: (value: string) => void, visible: boolean, setVisible: (value: boolean) => void) => (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm text-muted-foreground">{label}</label>
      <div className="relative">
        <input id={id} name={id} type={visible ? 'text' : 'password'} required placeholder={placeholder} value={value} onChange={(event) => setValue(event.target.value)} className="w-full rounded-md border border-border px-3 py-2 pr-10 text-sm" />
        <button type="button" aria-label={visible ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'} onClick={() => setVisible(!visible)} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground">
          {visible ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-xl border border-border bg-card p-6 shadow-card">
        <div className="mb-6 flex gap-1 rounded-md bg-muted p-1">
          <Link
            href="/login"
            className="flex-1 rounded-md py-2 text-center text-sm text-muted-foreground"
          >
            Đăng nhập
          </Link>
          <span className="flex-1 rounded-md border border-border bg-card py-2 text-center text-sm font-medium">
            Đăng ký
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Nhập email của bạn"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-md border border-border px-3 py-2 text-sm"
            />
          </div>

          {passwordField('password', 'Mật khẩu', 'Nhập mật khẩu', password, setPassword, showPassword, setShowPassword)}
          {passwordField('confirmPassword', 'Xác nhận mật khẩu', 'Nhập lại mật khẩu', confirmPassword, setConfirmPassword, showConfirmPassword, setShowConfirmPassword)}

          {error && <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}
          {message && <p className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">{message}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground"
          >
            {isLoading ? 'Đang tạo tài khoản...' : 'Tạo tài khoản'}
          </button>
        </form>
        <p className="mt-5 text-center text-sm text-muted-foreground">Đã có tài khoản? <Link href="/login" className="font-medium text-primary hover:underline">Đăng nhập</Link></p>
      </div>
    </div>
  );
}