import Link from "next/link"

const candles = [
  { name: "Tomato Leaf + Mint Soy Candle", price: "$25.00", badge: "new*" },
  { name: "NYC Sunset Candle", regularPrice: "$28.00", salePrice: "$24.00", badge: "sale*" },
  { name: "Cactus Flower + Jade Soy Candle", price: "$14.00" },
  { name: "Sea Salt + Orchid Soy Candle", regularPrice: "$14.00", salePrice: "$12.50" },
  { name: "Oakmoss + Amber Soy Candle", regularPrice: "$14.00", salePrice: "$12.50", badge: "best-seller" },
  { name: "White Birch Soy Candle", regularPrice: "$14.00", salePrice: "$12.50", badge: "best-seller" },
  { name: "Cranberry Woods Soy Candle", regularPrice: "$14.00", salePrice: "$12.50" },
  { name: "Peppermint + Eucalyptus Soy Candle", stock: "Out of stock" },
  { name: "Tonka Bean + Oud Soy Candle", regularPrice: "$14.00", salePrice: "$12.50" },
  { name: "Ocean Mist Soy Candle", regularPrice: "$14.00", salePrice: "$12.50" },
  { name: "Amber Citrus+ Sea Salt Soy Candle", regularPrice: "$14.00", salePrice: "$12.50" },
  { name: "Custom Gift Set", regularPrice: "$45.00", salePrice: "$43.00", badge: "new*" },
  { name: "Lavender + Sage Soy Candle", stock: "Out of stock" },
  { name: "The New Yorker Gift Set", regularPrice: "$40.00", salePrice: "$32.00", badge: "gift" },
]

function ProductCard({
  product,
}: {
  product: {
    name: string
    price?: string
    regularPrice?: string
    salePrice?: string
    stock?: string
    badge?: string
  }
}) {
  return (
    <article className="shop-card overflow-hidden rounded-lg border border-[rgba(74,124,82,0.26)] bg-[var(--color-cream)]">
      <div className="relative aspect-square bg-neutral-300">
        {product.badge ? (
          <div className="absolute left-3 top-3 rounded-full bg-[var(--color-gold)] px-3 py-1 font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-deep)]">
            {product.badge}
          </div>
        ) : null}
        <div className="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">
          image
        </div>
        <button className="absolute inset-x-4 bottom-4 rounded-full bg-[rgba(250,247,240,0.92)] px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-deep)] shadow-sm transition hover:bg-white" type="button">
          Quick View
        </button>
      </div>
      <div className="space-y-4 p-5">
        <h3 className="font-serif text-2xl leading-tight text-[var(--color-deep)]">{product.name}</h3>
        {product.stock ? (
          <p className="font-mono text-sm uppercase tracking-[0.12em] text-[var(--color-moss)]">{product.stock}</p>
        ) : product.regularPrice && product.salePrice ? (
          <div className="space-y-1 font-mono text-sm">
            <p className="text-[var(--color-forest)] line-through">Regular Price {product.regularPrice}</p>
            <p className="font-semibold text-[var(--color-deep)]">Sale Price {product.salePrice}</p>
          </div>
        ) : (
          <p className="font-mono text-sm font-semibold text-[var(--color-deep)]">Price {product.price}</p>
        )}
      </div>
    </article>
  )
}

export default function CandlesPage() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-deep)]">
      <section className="hero-forest relative overflow-hidden px-5 pb-20 pt-36 text-[var(--color-cream)] sm:px-8 lg:pt-40">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Link href="/shop" className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-fern)] transition hover:text-[var(--color-gold)]">
              &lt; Shop All
            </Link>
            <h1 className="hero-heading mt-10 max-w-4xl uppercase">
              Enjoy Sunsets From Home
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[var(--color-cream)]/82">
              Our Sunset Candles light up the NYC skyline as your relax in their natural aromas of the outdoors.
            </p>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-[rgba(250,247,240,0.22)] bg-neutral-300 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
            <div className="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">
              Sunset Candle image
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-4 border-b border-[rgba(74,124,82,0.28)] pb-8">
            <div>
              <p className="eyebrow">Candles</p>
              <h2 className="section-heading mt-3">Natural aromas for staying in.</h2>
            </div>
            <p className="hidden font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-moss)] sm:block">
              {candles.length} items
            </p>
          </div>
          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {candles.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <article className="surface rounded-2xl bg-[var(--color-cream)] p-8">
            <div className="eyebrow">Contact Us</div>
            <div className="mt-6 space-y-3 text-lg text-[var(--color-forest)]">
              <p>Tel. 646.489.0345</p>
              <p>Email: jose@treestarnyc.com</p>
              <p>Jackson Heights, NY</p>
            </div>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-moss)]">
              Image by Marc Zimmer
            </p>
          </article>

          <article className="surface rounded-2xl bg-[var(--color-cream)] p-8">
            <div className="eyebrow">Visit Us</div>
            <h3 className="mt-6 font-serif text-4xl text-[var(--color-deep)]">
              Queens Night Market
            </h3>
            <div className="mt-5 space-y-3 text-lg text-[var(--color-forest)]">
              <p>April 18th - October 31st</p>
              <p>Saturdays 4:00 pm - Midnight</p>
              <p>Come say hi!</p>
            </div>
          </article>

          <form className="dark-surface rounded-2xl p-8 text-[var(--color-cream)]">
            <div className="eyebrow text-[var(--color-fern)]">Join our mailing list</div>
            <label className="mt-8 block font-mono text-sm uppercase tracking-[0.14em] text-[var(--color-cream)]/72">
              Email*
            </label>
            <input className="mt-3 w-full rounded-lg border border-[rgba(250,247,240,0.22)] bg-[rgba(250,247,240,0.92)] px-4 py-4 text-[var(--color-deep)] outline-none focus:border-[var(--color-gold)]" type="email" />
            <button className="button-primary mt-5 w-full" type="submit">
              Soapscribe
            </button>
            <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-[var(--color-cream)]/78">
              <input className="mt-1 h-4 w-4 accent-[var(--color-gold)]" type="checkbox" />
              <span>I want to subscribe to your mailing list.</span>
            </label>
          </form>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] px-5 py-20 sm:px-8 lg:py-28">
        <form className="surface mx-auto max-w-4xl rounded-2xl bg-white p-6 sm:p-8">
          <div className="eyebrow">Tell Us</div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <input className="rounded-lg border border-[rgba(74,124,82,0.32)] bg-[var(--color-cream)] px-4 py-4 outline-none focus:border-[var(--color-moss)]" placeholder="Name" />
            <input className="rounded-lg border border-[rgba(74,124,82,0.32)] bg-[var(--color-cream)] px-4 py-4 outline-none focus:border-[var(--color-moss)]" placeholder="Email" type="email" />
            <input className="rounded-lg border border-[rgba(74,124,82,0.32)] bg-[var(--color-cream)] px-4 py-4 outline-none focus:border-[var(--color-moss)] sm:col-span-2" placeholder="Subject" />
            <textarea className="min-h-40 rounded-lg border border-[rgba(74,124,82,0.32)] bg-[var(--color-cream)] px-4 py-4 outline-none focus:border-[var(--color-moss)] sm:col-span-2" placeholder="Type your message here..." />
          </div>
          <button className="button-primary mt-6" type="submit">
            Submit
          </button>
        </form>
      </section>
    </div>
  )
}
