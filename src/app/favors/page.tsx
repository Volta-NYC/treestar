import Link from "next/link"
import PageHero from "@/lib/components/page-hero"

const points = ["Eco-friendly", "Plant-based", "Handmade in NYC", "Memorable"]

export default function FavorsPage() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-deep)]">
      <PageHero eyebrow="Favors + Gifts" title="Custom Soap Favors for Weddings & Events">
        <p>
          TREE*STAR makes beautiful, natural soap favors for weddings, showers, corporate events, and parties. Custom
          scents, labels, and quantities available.
        </p>
      </PageHero>
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.78fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {points.map((point) => (
              <article key={point} className="surface rounded-lg bg-[var(--color-cream)] p-7">
                <h2 className="font-serif text-3xl font-semibold">{point}</h2>
                <p className="mt-4 leading-7 text-[var(--color-forest)]">
                  Thoughtful little bars guests can actually use, made with TREE*STAR’s warm, nature-forward style.
                </p>
              </article>
            ))}
          </div>
          <aside className="dark-surface rounded-lg p-8 text-[var(--color-cream)]">
            <p className="eyebrow text-[var(--color-fern)]">Planning notes</p>
            <p className="mt-5 font-serif text-4xl leading-tight">Minimum 24 bars · 3-week lead time</p>
            <p className="mt-6 leading-7 text-[var(--color-cream)]/78">
              Share your date, quantity, scent ideas, and label direction. We will help shape the clean little moment.
            </p>
            <Link href="mailto:jose@treestarnyc.com?subject=Custom soap favor quote" className="button-primary mt-8">Get a quote</Link>
          </aside>
        </div>
      </section>
    </div>
  )
}
