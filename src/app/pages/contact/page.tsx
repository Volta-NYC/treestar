import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <section className="grid gap-6 lg:grid-cols-3">
          <div className="surface shop-card rounded-xl p-7">
            <div className="eyebrow">CONTACT US</div>
            <Link
              className="mt-5 block font-serif text-3xl font-semibold text-[var(--color-deep)] transition hover:text-[var(--color-moss)]"
              href="tel:16464890345"
            >
              Tel. 646.489.0345
            </Link>
            <Link
              className="mt-4 block break-words font-serif text-3xl font-semibold text-[var(--color-deep)] transition hover:text-[var(--color-moss)]"
              href="mailto:jose@treestarnyc.com"
            >
              Email: jose@treestarnyc.com
            </Link>
            <p className="mt-4 text-lg text-[var(--color-forest)]">
              Jackson Heights, NY
            </p>
          </div>

          <aside className="dark-surface rounded-xl p-8 text-[var(--color-cream)]">
            <div className="eyebrow text-[var(--color-fern)]">VISIT US</div>
            <h2 className="mt-5 font-serif text-5xl font-semibold leading-[1.02]">
              Queens Night Market
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-8 text-[var(--color-cream)]/78">
              <p>
                April 18th - October 31st
                <br />
                Saturdays 4:00 pm - Midnight
              </p>
              <p>Come say hi!</p>
              <Link
                href="https://queensnightmarket.com/"
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                Market details
              </Link>
            </div>
          </aside>

          <div className="surface rounded-xl p-7">
            <div className="eyebrow">TELL US</div>
            <button className="button-primary mt-6" type="button">
              Submit
            </button>
            <p className="mt-5 font-mono text-sm uppercase tracking-[0.16em] text-[var(--color-forest)]">
              Thanks for submitting!
            </p>
          </div>
        </section>

        <section className="surface mt-8 rounded-xl p-7">
          <h2 className="font-serif text-5xl text-[var(--color-deep)]">
            Join our mailing list
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="contact-email">
              Email*
            </label>
            <input
              id="contact-email"
              className="min-h-12 rounded-full border border-[var(--color-moss)] bg-[var(--color-bg)] px-5 font-mono text-sm text-[var(--color-deep)] outline-none transition placeholder:text-[var(--color-forest)]/70 focus:border-[var(--color-gold)]"
              placeholder="Email*"
              type="email"
            />
            <button className="button-primary" type="button">
              Soapscribe
            </button>
          </div>
          <label className="mt-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-forest)]">
            <input className="h-4 w-4 accent-[var(--color-forest)]" type="checkbox" />
            I want to subscribe to your mailing list.
          </label>
        </section>
      </div>
    </div>
  )
}
