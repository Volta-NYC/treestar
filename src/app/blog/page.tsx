import Link from "next/link"
import PageHero from "@/lib/components/page-hero"

export default function BlogPage() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-deep)]">
      <PageHero eyebrow="Blog" title="Notes from the soap table.">
        <p>Coming soon: market notes, ingredient stories, and clean little dispatches from Jackson Heights.</p>
      </PageHero>
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <Link href="/shop" className="button-primary">Shop while we write</Link>
        </div>
      </section>
    </div>
  )
}
