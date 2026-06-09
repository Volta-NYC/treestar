import Link from "next/link"

const products = [
  { name: "Butterfly Pea Tea Bar Soap", detail: "Out of stock", badge: "new*" },
  { name: "Coffee Soap - Scrub Bar", detail: "Out of stock", badge: "back!" },
  { name: "Rose Clay & Charcoal Bar Soap", detail: "$10.00" },
  { name: "Lavender Aromatherapy Bar Soap", detail: "$12.00 $10.00" },
  { name: "Honey Bar Soap", detail: "$10.00", badge: "best-seller" },
  { name: "Whiskey Bar Soap", detail: "$10.00" },
  { name: "Blue Bar Soap", detail: "$10.00" },
  { name: "Lemon Bar Soap", detail: "$10.00" },
]

export default function ShopPage() {
  return (
    <div className="bg-[var(--color-bg)]">
      <section className="hero-forest relative overflow-hidden px-5 py-24 text-center text-[var(--color-cream)] sm:px-8">
        <div className="relative mx-auto max-w-5xl">
          <Link href="/shop" className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-fern)]">
            &lt; Shop All
          </Link>
          <div className="mx-auto mt-12 max-w-md rounded-xl border border-[rgba(184,146,58,0.45)] bg-[rgba(250,247,240,0.90)] px-8 py-12 text-[var(--color-deep)] shadow-[0_18px_42px_rgba(28,51,32,0.18)] backdrop-blur">
            <div className="font-serif text-5xl italic">Pick</div>
            <h1 className="mt-2 font-mono text-4xl font-semibold uppercase tracking-[0.05em]">
              YOUR FLAVOR
            </h1>
            <p className="mt-8 text-lg font-bold leading-7">
              We love putting food-grade ingredients in our bars. When was the
              last time you treated yourself to a super-fatted soap?
            </p>
          </div>
          <div className="image-slot mx-auto mt-12 min-h-[260px] max-w-5xl rounded-xl">
            shop hero soap image slot
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <h2 className="text-center font-serif text-5xl font-semibold uppercase text-[var(--color-deep)]">
          SUPER-FATTED SOAPS
        </h2>
        <div className="mx-auto mt-12 grid max-w-6xl gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.name} className="surface shop-card overflow-hidden rounded-xl">
              <div className="relative">
                {product.badge ? (
                  <div className="absolute left-3 top-3 z-10 rounded-full bg-[var(--color-gold)] px-3 py-1 font-mono text-xs text-[var(--color-deep)]">
                    {product.badge}
                  </div>
                ) : null}
                <div className="image-slot aspect-square min-h-0">
                  product image slot
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl leading-tight text-[var(--color-deep)]">
                  {product.name}
                </h3>
                <p className="mt-3 font-mono text-sm text-[var(--color-forest)]">
                  {product.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
