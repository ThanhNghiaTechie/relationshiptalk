import Link from 'next/link';
import { register } from './actions';

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

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

        {error && (
          <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </p>
        )}

        <form action={register} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="name@company.com"
              className="w-full rounded-md border border-border px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm text-muted-foreground">
              Mật khẩu
            </label>
            <input
              id="password"
              name="password"
              type="password"
              minLength={6}
              required
              placeholder="••••••••"
              className="w-full rounded-md border border-border px-3 py-2 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground"
          >
            Tạo tài khoản
          </button>
        </form>
      </div>
    </div>
  );
}