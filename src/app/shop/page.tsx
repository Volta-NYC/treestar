import Image from "next/image"

const products = [
  { name: "Sake Kasu Soap", price: "$12.00", badge: "new*", category: "soaps" },
  {
    name: "Tomato Leaf + Mint Soy Candle",
    price: "$25.00",
    badge: "new*",
    rating: "5.0 (2)",
    category: "candles",
  },
  {
    name: "Butterfly Pea Tea Bar Soap",
    stock: "Out of stock",
    badge: "new*",
    rating: "5.0 (1)",
    category: "soaps",
  },
  {
    name: "Bar Soap Ends Bundle - Zero Waste",
    regularPrice: "$32.00",
    salePrice: "$26.00",
    rating: "5.0 (2)",
    category: "goodies",
  },
  {
    name: "Honey + Oatmeal Bar Soap",
    regularPrice: "$12.00",
    salePrice: "$10.00",
    badge: "best-seller",
    rating: "5.0 (4)",
    category: "soaps",
  },
  {
    name: "Cactus Flower + Jade Soy Candle",
    price: "$14.00",
    rating: "5.0 (2)",
    category: "candles",
  },
  {
    name: "Lavender Aromatherapy Bar Soap",
    regularPrice: "$12.00",
    salePrice: "$10.00",
    rating: "5.0 (4)",
    category: "soaps",
  },
  {
    name: "Rose Clay & Charcoal Bar Soap",
    price: "$10.00",
    rating: "5.0 (3)",
    category: "soaps",
  },
  {
    name: "Sea Salt + Orchid Soy Candle",
    regularPrice: "$14.00",
    salePrice: "$12.50",
    rating: "5.0 (1)",
    category: "candles",
  },
  {
    name: "Coffee Soap - Scrub Bar",
    stock: "Out of stock",
    badge: "back!",
    rating: "5.0 (2)",
    category: "soaps",
  },
  {
    name: "Icelandic Kelp Bar Soap - Collab w/Burlap & Barrel",
    price: "$10.00",
    rating: "5.0 (1)",
    category: "soaps",
  },
  {
    name: "The New Yorker Bar Soap",
    regularPrice: "$12.00",
    salePrice: "$10.00",
    category: "soaps",
  },
  {
    name: "White Birch Soy Candle",
    regularPrice: "$14.00",
    salePrice: "$12.50",
    badge: "best-seller",
    rating: "5.0 (1)",
    category: "candles",
  },
  {
    name: "Turmeric Bar Soap",
    price: "$12.00",
    badge: "best-seller",
    rating: "5.0 (2)",
    category: "soaps",
  },
  {
    name: "Lemongrass + Poppy Seeds - Exfoliating Bar Soap",
    stock: "Out of stock",
    category: "soaps",
  },
  {
    name: "Whiskey Bar Soap",
    regularPrice: "$12.00",
    salePrice: "$10.00",
    rating: "5.0 (3)",
    category: "soaps",
  },
  {
    name: "NYC Sunset Candle",
    regularPrice: "$28.00",
    salePrice: "$24.00",
    badge: "sale*",
    rating: "5.0 (2)",
    category: "candles",
  },
  {
    name: "Custom Gift Set",
    regularPrice: "$45.00",
    salePrice: "$43.00",
    badge: "new*",
    category: "goodies",
  },
  {
    name: "Cranberry Woods Soy Candle",
    regularPrice: "$14.00",
    salePrice: "$12.50",
    rating: "5.0 (3)",
    category: "candles",
  },
  {
    name: "Oakmoss + Amber Soy Candle",
    regularPrice: "$14.00",
    salePrice: "$12.50",
    badge: "best-seller",
    rating: "5.0 (2)",
    category: "candles",
  },
  {
    name: "Charcoal Detox Soap Bar",
    price: "$10.00",
    rating: "5.0 (2)",
    category: "soaps",
  },
  {
    name: "The New Yorker Gift Set",
    regularPrice: "$40.00",
    salePrice: "$32.00",
    badge: "gift",
    category: "goodies",
  },
  {
    name: "Sandalwood + Amber Soap Bar",
    stock: "Out of stock",
    category: "soaps",
  },
  {
    name: "Ocean Mist Soy Candle",
    regularPrice: "$14.00",
    salePrice: "$12.50",
    category: "candles",
  },
  {
    name: "Peppermint + Eucalyptus Soy Candle",
    stock: "Out of stock",
    category: "candles",
  },
  {
    name: "Tonka Bean + Oud Soy Candle",
    regularPrice: "$14.00",
    salePrice: "$12.50",
    rating: "5.0 (1)",
    category: "candles",
  },
  {
    name: "Unicorn Rainbow Magic Soap",
    stock: "Out of stock",
    category: "soaps",
  },
  {
    name: "Bath Tub Soap Dish Gift Set",
    stock: "Out of stock",
    category: "goodies",
  },
  {
    name: "Amber Citrus+ Sea Salt Soy Candle",
    regularPrice: "$14.00",
    salePrice: "$12.50",
    rating: "5.0 (1)",
    category: "candles",
  },
  {
    name: "Lavender + Sage Soy Candle",
    stock: "Out of stock",
    rating: "5.0 (1)",
    category: "candles",
  },
  {
    name: "Natural Sea Wool Sponge",
    price: "$8.00",
    category: "goodies",
  },
  {
    name: "Hand Sanitizer",
    stock: "Out of stock",
    category: "goodies",
  },
  {
    name: "Soap Terrarium",
    stock: "Out of stock",
    category: "goodies",
  },
  {
    name: "Bubble Soap Dish",
    stock: "Out of stock",
    rating: "5.0 (1)",
    category: "goodies",
  },
  {
    name: "leaf soap dish",
    stock: "Out of stock",
    category: "goodies",
  },
]

const categoryCounts = [
  { label: "Soaps", id: "soaps", count: products.filter((product) => product.category === "soaps").length },
  { label: "Candles", id: "candles", count: products.filter((product) => product.category === "candles").length },
  { label: "Goodies", id: "goodies", count: products.filter((product) => product.category === "goodies").length },
]

const testimonials = [
  {
    name: "vienna d'ornellas",
    quote:
      "Love these soaps, they are so gentle that one can use them on their face, but while the same time leaving the body clean. They come in different scents and are made with different natural ingredients that are great for my skin. This never dried out my sking nor made it too oily.",
  },
  {
    name: "kristen lopez",
    quote:
      "Smells GREAT. Not too strong but enought that you can smell it. The scrub is great at exfoliating.",
  },
  {
    name: "kendra baumer",
    quote:
      "LOVE this soap. My skin loves it too :). I was buying from Rocky Mountain Soap Factory in Canada previously and I didn't think I'd try anything else, but my cousin convinced me to try this and it's even better all natural-soap. Not to mention I'm happy to support something local. The owners are fantastic to work with and very communicative.",
  },
]

function ProductPrice({
  price,
  regularPrice,
  salePrice,
  stock,
}: {
  price?: string
  regularPrice?: string
  salePrice?: string
  stock?: string
}) {
  if (stock) {
    return <p className="font-mono text-sm uppercase tracking-[0.12em] text-[var(--color-moss)]">{stock}</p>
  }

  if (regularPrice && salePrice) {
    return (
      <div className="space-y-1 font-mono text-sm">
        <p className="text-[var(--color-forest)] line-through">Regular Price {regularPrice}</p>
        <p className="font-semibold text-[var(--color-deep)]">Sale Price {salePrice}</p>
      </div>
    )
  }

  return <p className="font-mono text-sm font-semibold text-[var(--color-deep)]">Price {price}</p>
}

export default function ShopPage() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-deep)]">
      <section className="hero-forest relative overflow-hidden px-5 pb-20 pt-36 text-[var(--color-cream)] sm:px-8 lg:pt-40">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow text-[var(--color-fern)]">Welcome to</p>
            <Image
              src="/img/logo.avif"
              alt="TREE*STAR"
              width={230}
              height={86}
              priority
              className="mt-8 h-auto w-52 object-contain"
            />
            <h1 className="hero-heading mt-8 max-w-4xl uppercase">Shop</h1>
            <p className="mt-6 max-w-xl text-xl leading-8 text-[var(--color-cream)]/82">
              We take mundane routines and turn them into sensational experiences.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {categoryCounts.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-[rgba(250,247,240,0.18)] bg-[rgba(250,247,240,0.08)] p-5 backdrop-blur"
              >
                <div className="font-serif text-4xl font-semibold">{item.count}</div>
                <div className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-fern)]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 border-b border-[rgba(74,124,82,0.28)] pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Shop all</p>
              <h2 className="section-heading mt-3">Fresh soap, candles, and goodies.</h2>
            </div>
            <label className="flex w-full flex-col gap-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-forest)] md:w-64">
              Sort by
              <select className="rounded-lg border border-[rgba(74,124,82,0.36)] bg-[var(--color-cream)] px-4 py-3 font-sans text-base normal-case text-[var(--color-deep)] outline-none focus:border-[var(--color-moss)]">
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: low to high</option>
                <option>Price: high to low</option>
              </select>
            </label>
          </div>

          <div className="space-y-16 pt-12">
            {categoryCounts.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-36">
                <div className="flex items-end justify-between gap-4">
                  <h3 className="font-serif text-4xl font-semibold capitalize text-[var(--color-deep)]">
                    {category.label}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-moss)]">
                    {category.count} items
                  </p>
                </div>
                <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {products
                    .filter((product) => product.category === category.id)
                    .map((product) => (
                      <article key={product.name} className="shop-card overflow-hidden rounded-lg border border-[rgba(74,124,82,0.26)] bg-[var(--color-cream)]">
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
                          <h4 className="font-serif text-2xl leading-tight text-[var(--color-deep)]">
                            {product.name}
                          </h4>
                          <ProductPrice
                            price={product.price}
                            regularPrice={product.regularPrice}
                            salePrice={product.salePrice}
                            stock={product.stock}
                          />
                          {product.rating ? (
                            <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-moss)]">
                              Rating {product.rating}
                            </p>
                          ) : null}
                        </div>
                      </article>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="eyebrow">What people are saying</div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="surface rounded-lg bg-[var(--color-cream)] p-6">
                <h3 className="font-mono text-sm uppercase tracking-[0.14em] text-[var(--color-deep)]">
                  {item.name}
                </h3>
                <p className="mt-5 text-base leading-7 text-[var(--color-forest)]">{item.quote}</p>
              </article>
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
