import Link from "next/link"
import PageHero from "@/lib/components/page-hero"

export default function GiftCardPage() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-deep)]">
      <PageHero eyebrow="Gift Card" title="Give the gift of better shower time.">
        <p>Digital gift cards are coming soon. For now, email Jose and we will help build a giftable TREE*STAR bundle.</p>
      </PageHero>
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-wrap gap-3">
          <Link href="mailto:jose@treestarnyc.com?subject=TREE*STAR gift card" className="button-primary">Email Jose</Link>
          <Link href="/shop" className="button-secondary text-[var(--color-deep)]">Shop gifts</Link>
        </div>
      </section>
    </div>
  )
}
