import Link from "next/link"

export default function LoyaltyPage() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-deep)]">
      <section className="hero-forest px-5 pb-20 pt-32 text-[var(--color-cream)] sm:px-8 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-[var(--color-fern)]">Loyalty</p>
          <h1 className="hero-heading mt-5">Points for plant-oil people.</h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-[var(--color-cream)]/82">Earn points when you shop, visit us at markets, and keep your shelf stocked with fresh natural soap handmade in NYC.</p>
          <Link href="/shop" className="button-primary mt-8">Start earning</Link>
        </div>
      </section>
    </div>
  )
}
