import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <section className="grid gap-12 lg:grid-cols-[0.92fr_1fr] lg:items-center">
          <div className="surface overflow-hidden rounded-xl p-3">
            <img
              src="https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=1400&q=80"
              alt="Handmade soap bars with natural botanicals"
              className="min-h-[460px] w-full rounded-lg object-cover"
            />
          </div>

          <div>
            <div className="eyebrow">About Us</div>
            <h1 className="section-heading mt-4">
              TREE*STAR was founded on the idea that bath and shower time should
              be fun, nourishing, sensational experiences you look forward to.
            </h1>
            <p className="lede mt-7">
              Our soaps tickle the senses while they feed your skin. We use
              premium, organic, food-grade, plant oils in all of our products
              and each purchase{" "}
              <Link
                href="https://onetreeplanted.org/"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--color-gold)] underline decoration-[var(--color-gold)]/50 underline-offset-4 hover:text-[var(--color-moss)]"
              >
                plants one tree
              </Link>
              , so you can stay green while you scrub clean.
            </p>
            <Link
              href="https://www.treestarnyc.com/shop"
              target="_blank"
              rel="noreferrer"
              className="button-primary mt-9"
            >
              Shop now
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
