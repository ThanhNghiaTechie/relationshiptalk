import Link from 'next/link';
import { login, loginWithGoogle } from './actions';

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>;
}) {
  const { error, message } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-xl border border-border bg-card p-6 shadow-card">
        <div className="mb-6 flex gap-1 rounded-md bg-muted p-1">
          <span className="flex-1 rounded-md bg-card py-2 text-center text-sm font-medium border border-border">
            Đăng nhập
          </span>
          <Link
            href="/register"
            className="flex-1 rounded-md py-2 text-center text-sm text-muted-foreground"
          >
            Đăng ký
          </Link>
        </div>

        {error && (
          <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </p>
        )}
        {message && (
          <p className="mb-4 rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
            {message}
          </p>
        )}

        <form action={login} className="space-y-4">
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
              required
              placeholder="••••••••"
              className="w-full rounded-md border border-border px-3 py-2 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground"
          >
            Đăng nhập
          </button>
        </form>

        <div className="my-4 flex items-center gap-2">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">hoặc</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <form action={loginWithGoogle}>
          <button
            type="submit"
            className="w-full rounded-md border border-border py-2.5 text-sm font-medium"
          >
            Tiếp tục với Google
          </button>
        </form>
      </div>
    </div>
  );
}