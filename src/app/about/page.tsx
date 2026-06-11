import Link from "next/link"
import PageHero from "@/lib/components/page-hero"

const values = [
  { icon: "Organic", title: "Natural Ingredients", text: "Premium, organic, food-grade plant oils in bars that feel generous on skin." },
  { icon: "NYC", title: "Handmade in NYC", text: "Small-batch soap and gifts made with Jackson Heights energy and market-table warmth." },
  { icon: "Trees", title: "Eco-Conscious", text: "Each purchase plants one tree through One Tree Planted, a 501(c)(3) nonprofit." },
]

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-deep)]">
      <PageHero eyebrow="About Us" title="TREE*STAR was founded on fun, nourishing shower time.">
        <p>Founded in 2017 and based in Jackson Heights, NY.</p>
      </PageHero>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1fr] lg:items-center">
          <div className="fern-slot min-h-[460px] rounded-2xl p-8 text-left">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fern)]">small team, big lather</p>
              <p className="mt-5 max-w-sm font-serif text-5xl leading-none text-[var(--color-cream)]">
                Playful soap, serious plant-oil goodness.
              </p>
            </div>
          </div>
          <div>
            <div className="eyebrow">Stay green while you scrub clean</div>
            <div className="mt-7 space-y-6 text-lg leading-8 text-[var(--color-forest)]">
              <p>
                We believe bath and shower time should be fun, nourishing, sensational experiences you look forward to.
                Our soaps tickle the senses while they feed your skin.
              </p>
              <p>
                We use premium, organic, food-grade, plant oils in all of our products and each purchase plants one tree
                through{" "}
                <Link href="https://onetreeplanted.org/" target="_blank" rel="noreferrer" className="text-[var(--color-gold)] underline underline-offset-4">
                  One Tree Planted
                </Link>
                , so you can stay green while you scrub clean.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Values</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="surface rounded-lg bg-[var(--color-cream)] p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-deep)] font-mono text-[0.62rem] uppercase tracking-[0.08em] text-[var(--color-fern)]">
                  {value.icon}
                </div>
                <h2 className="mt-6 font-serif text-3xl font-semibold">{value.title}</h2>
                <p className="mt-4 leading-7 text-[var(--color-forest)]">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
