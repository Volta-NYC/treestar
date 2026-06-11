import Link from "next/link"

const superFattedSoaps = [
  { name: "Sake Kasu Soap", price: "$12.00", badge: "new*" },
  { name: "Butterfly Pea Tea Bar Soap", stock: "Out of stock", badge: "new*" },
  { name: "Coffee Soap - Scrub Bar", stock: "Out of stock", badge: "back!" },
  { name: "Rose Clay & Charcoal Bar Soap", price: "$10.00" },
  { name: "Lavender Aromatherapy Bar Soap", regularPrice: "$12.00", salePrice: "$10.00" },
  { name: "Honey + Oatmeal Bar Soap", regularPrice: "$12.00", salePrice: "$10.00", badge: "best-seller" },
  { name: "Whiskey Bar Soap", regularPrice: "$12.00", salePrice: "$10.00" },
  { name: "The New Yorker Bar Soap", regularPrice: "$12.00", salePrice: "$10.00" },
  { name: "Lemongrass + Poppy Seeds - Exfoliating Bar Soap", stock: "Out of stock" },
  { name: "Icelandic Kelp Bar Soap - Collab w/Burlap & Barrel", price: "$10.00" },
  { name: "Turmeric Bar Soap", price: "$12.00", badge: "best-seller" },
  { name: "Sandalwood + Amber Soap Bar", stock: "Out of stock" },
  { name: "Charcoal Detox Soap Bar", price: "$10.00" },
  { name: "Bar Soap Ends Bundle - Zero Waste", regularPrice: "$32.00", salePrice: "$26.00" },
  { name: "Unicorn Rainbow Magic Soap", stock: "Out of stock" },
  { name: "The New Yorker Gift Set", regularPrice: "$40.00", salePrice: "$32.00", badge: "gift" },
  { name: "Natural Sea Wool Sponge", price: "$8.00" },
  { name: "Bath Tub Soap Dish Gift Set", stock: "Out of stock" },
  { name: "Bubble Soap Dish", stock: "Out of stock" },
]

const exfoliatingSoaps = [
  { name: "Sake Kasu Soap", price: "$12.00", badge: "new*" },
  { name: "Butterfly Pea Tea Bar Soap", stock: "Out of stock", badge: "new*" },
  { name: "Coffee Soap - Scrub Bar", stock: "Out of stock", badge: "back!" },
  { name: "Honey + Oatmeal Bar Soap", regularPrice: "$12.00", salePrice: "$10.00", badge: "best-seller" },
  { name: "Icelandic Kelp Bar Soap - Collab w/Burlap & Barrel", price: "$10.00" },
  { name: "Lemongrass + Poppy Seeds - Exfoliating Bar Soap", stock: "Out of stock" },
]

const facialSoapBars = [
  { name: "Charcoal Detox Soap Bar", price: "$10.00" },
  { name: "Rose Clay & Charcoal Bar Soap", price: "$10.00" },
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

function ProductSection({ title, products }: { title: string; products: typeof superFattedSoaps }) {
  return (
    <section className="px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-serif text-4xl font-semibold uppercase leading-tight text-[var(--color-deep)] sm:text-5xl">
          {title}
        </h2>
        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={`${title}-${product.name}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function SoapsPage() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-deep)]">
      <section className="hero-forest relative overflow-hidden px-5 pb-20 pt-36 text-center text-[var(--color-cream)] sm:px-8 lg:pt-40">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
        <div className="relative mx-auto max-w-5xl">
          <Link href="/shop" className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-fern)] transition hover:text-[var(--color-gold)]">
            &lt; Shop All
          </Link>
          <div className="mx-auto mt-12 max-w-lg rounded-lg border border-[rgba(184,146,58,0.45)] bg-[rgba(250,247,240,0.92)] px-8 py-12 text-[var(--color-deep)] shadow-[0_18px_42px_rgba(28,51,32,0.18)] backdrop-blur">
            <div className="font-serif text-5xl italic">Pick</div>
            <h1 className="mt-2 font-mono text-4xl font-semibold uppercase tracking-[0.05em]">
              Your Flavor
            </h1>
            <p className="mt-8 text-lg font-bold leading-8">
              We love putting food-grade ingredients in our bars.
            </p>
            <p className="mt-5 text-lg font-bold leading-8">
              When was the last time you treated yourself to a super-fatted soap?
            </p>
          </div>
        </div>
      </section>

      <ProductSection title="Super-Fatted Soaps" products={superFattedSoaps} />
      <ProductSection title="Exfoliating Super-Fatted Soaps" products={exfoliatingSoaps} />
      <ProductSection title="Facial Soap Bars" products={facialSoapBars} />

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
