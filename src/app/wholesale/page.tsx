import Link from "next/link"
import PageHero from "@/lib/components/page-hero"

export default function WholesalePage() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-deep)]">
      <PageHero eyebrow="Wholesale" title="Carry TREE*STAR in your shop.">
        <p>Interested in carrying TREE*STAR in your shop? We work with boutiques, spas, gift shops, and specialty retailers.</p>
      </PageHero>
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1fr]">
          <aside className="surface rounded-lg bg-[var(--color-cream)] p-8">
            <p className="eyebrow">Minimums</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold">Opening orders from 48 bars or 24 candles.</h2>
            <p className="mt-5 leading-7 text-[var(--color-forest)]">
              Placeholder minimums are flexible while we finish the wholesale catalog. Local NYC delivery may be
              available for qualified accounts.
            </p>
            <Link href="mailto:jose@treestarnyc.com?subject=TREE*STAR wholesale inquiry" className="button-primary mt-8">Email wholesale inquiry</Link>
          </aside>
          <form className="surface rounded-lg bg-white p-6 sm:p-8">
            <p className="eyebrow">Inquiry Form</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <input required className="rounded-lg border border-[rgba(74,124,82,0.32)] bg-[var(--color-cream)] px-4 py-4 outline-none focus:border-[var(--color-moss)]" placeholder="Name" />
              <input required className="rounded-lg border border-[rgba(74,124,82,0.32)] bg-[var(--color-cream)] px-4 py-4 outline-none focus:border-[var(--color-moss)]" placeholder="Business name" />
              <input required className="rounded-lg border border-[rgba(74,124,82,0.32)] bg-[var(--color-cream)] px-4 py-4 outline-none focus:border-[var(--color-moss)] sm:col-span-2" placeholder="Email" type="email" />
              <textarea className="min-h-40 rounded-lg border border-[rgba(74,124,82,0.32)] bg-[var(--color-cream)] px-4 py-4 outline-none focus:border-[var(--color-moss)] sm:col-span-2" placeholder="Tell us about your shop..." />
            </div>
            <button className="button-primary mt-6" type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  )
}
