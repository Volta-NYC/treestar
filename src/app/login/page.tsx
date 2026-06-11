import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="bg-[var(--color-bg)] px-5 pb-20 pt-32 text-[var(--color-deep)] sm:px-8 lg:pt-36">
      <form className="surface mx-auto max-w-md rounded-lg bg-white p-8">
        <p className="eyebrow">Log In</p>
        <h1 className="mt-4 font-serif text-5xl font-semibold">Welcome back.</h1>
        <input className="mt-8 w-full rounded-lg border border-[rgba(74,124,82,0.32)] bg-[var(--color-cream)] px-4 py-4 outline-none focus:border-[var(--color-moss)]" placeholder="Email" type="email" />
        <input className="mt-4 w-full rounded-lg border border-[rgba(74,124,82,0.32)] bg-[var(--color-cream)] px-4 py-4 outline-none focus:border-[var(--color-moss)]" placeholder="Password" type="password" />
        <button className="button-primary mt-6 w-full" type="submit">Log In</button>
        <Link href="/loyalty" className="mt-5 block text-center font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-moss)]">View loyalty points</Link>
      </form>
    </div>
  )
}
