import Link from "next/link"
import PageHero from "@/lib/components/page-hero"
import { products } from "@/lib/products"

const kelp = products.find((product) => product.name.includes("Icelandic Kelp"))!

export default function CollabsPage() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-deep)]">
      <PageHero eyebrow="Collaborations" title="Fresh bars with friends.">
        <p>
          Tree*Star loves product collabs that bring delicious ingredients, neighborhood stories, and new shower rituals
          into one small-batch bar.
        </p>
      </PageHero>
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.8fr]">
          <article className="surface rounded-lg bg-[var(--color-cream)] p-8">
            <p className="eyebrow">Past / Current Collab</p>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-none">Burlap & Barrel</h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-forest)]">
              Our Icelandic Kelp Bar Soap celebrates mineral-rich kelp and the beautiful world of single-origin spices
              with Burlap & Barrel. It is briny, bright, and made for people who like their soap with a story.
            </p>
            <Link href={`/shop/${kelp.slug}`} className="button-primary mt-8">Shop the collab</Link>
          </article>
          <aside className="dark-surface rounded-lg p-8 text-[var(--color-cream)]">
            <p className="eyebrow text-[var(--color-fern)]">Want to collaborate?</p>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-none">Let's make something lush.</h2>
            <p className="mt-6 leading-7 text-[var(--color-cream)]/78">
              Food brands, artists, shops, venues, and neighborly dreamers are welcome.
            </p>
            <Link href="mailto:jose@treestarnyc.com?subject=TREE*STAR collaboration" className="button-primary mt-8">Email Jose</Link>
          </aside>
        </div>
      </section>
    </div>
  )
}
