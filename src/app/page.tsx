import Image from "next/image"
import Link from "next/link"
import NewsletterForm from "@/lib/components/newsletter-form"
import ProductPrice from "@/lib/components/product-price"
import ProductVisual from "@/lib/components/product-visual"
import { products } from "@/lib/products"

const testimonials = [
  {
    name: "kendra baumer",
    location: "rochester, ny",
    quote:
      "LOVE this soap. My skin loves it too :) I was buying from Rocky Mountain Soap Factory in Canada previously and didn't think I'd ever try anything else, but my cousin convinced me to try this and it's even better all-natural soap. Not to mention I'm happy to support something local. The owners are also fantastic to work with and very communicative. Package came in a timely manner.",
  },
  {
    name: "david parker",
    location: "sherman oaks, ca",
    quote:
      "Every single one of your soaps leaves me feeling especially clean. I especially like the Icelandic Kelp collab, Sandalwood and Amber, and Lemongrass soaps, but they all make me feel wonderful after I use them.",
  },
  {
    name: "kristen lopez",
    location: "bronx, ny",
    quote:
      "Smells GREAT. Not too strong but enough that you can smell it. The scrub is great at exfoliating.",
  },
  {
    name: "bridget plante",
    location: "queens, ny",
    quote:
      "I am in love with these soaps!! I have battled incredibly sensitive skin my whole life and have tried probably 99% of products out there including very high end, super pricey ones. These soaps are the first thing I have EVER used on my skin that keeps breakouts and eczema flares at bay. My skin feels pampered. Soft, moisturized, even in the middle of winter! I love using the bags the soap comes in as a loofah as well, they offer great exfoliation. This is soap as it is meant to be, pure, natural, kind to your body and kind to the planet. Do yourself a favor and check them out!",
  },
  {
    name: "vienna d'ornellas",
    location: "new york, ny",
    quote:
      "Love these soaps, they are so gentle that one can use them on their face, while at the same time leaving the body clean. They come in different scents and are made with different natural ingredients that are great for my skin. This never dried out my sking nor made it too oily.",
  },
  {
    name: "emily welch",
    location: "knoxville, tn",
    quote:
      "I live in Tennessee and received a soap terranium from my brother in Brooklyn as a gift. I have never loved any soap so much!!! Can't wait to buy more! Such a wonderful product! Thank you!",
  },
]

const trustItems = ["Organic Plant Oils", "1 Tree Planted Per Purchase", "Handmade in NYC"]
const featuredNames = ["Honey + Oatmeal Bar Soap", "Lavender Aromatherapy Bar Soap", "Turmeric Bar Soap", "White Birch Soy Candle"]
const featuredProducts = featuredNames.map((name) => products.find((product) => product.name === name)!).filter(Boolean)

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[var(--color-bg)] text-[var(--color-deep)]">
      <section className="hero-forest relative min-h-[92vh] px-5 pb-20 pt-32 text-[var(--color-cream)] sm:px-8 lg:pt-36">
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
        <div className="relative mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-4xl">
            <div className="eyebrow text-[var(--color-fern)]">EST. 2017</div>
            <Image
              src="/img/logo.avif"
              alt="TREE*STAR"
              width={220}
              height={82}
              priority
              className="mt-8 h-auto w-44 object-contain sm:w-56"
            />
            <p className="mt-8 font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-fern)]">
              Fresh natural soap handmade in NYC
            </p>
            <h1 className="hero-heading fade-up mt-5 max-w-4xl uppercase">
              Elevate your clean
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="button-primary">
                Shop now
              </Link>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-cream)]/76">
                Shipping on us on orders over $50
              </div>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[rgba(250,247,240,0.24)] bg-[rgba(250,247,240,0.08)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_22%,rgba(184,146,58,0.30),transparent_28%),radial-gradient(circle_at_72%_60%,rgba(123,174,127,0.34),transparent_34%)]" />
            <div className="relative grid h-full min-h-[380px] grid-cols-3 gap-3">
              {["Fresh", "Natural", "Soap"].map((word, index) => (
                <div
                  key={word}
                  className={`flex items-center justify-center rounded-2xl border border-[rgba(250,247,240,0.22)] bg-[rgba(28,51,32,0.58)] px-3 text-center font-serif text-4xl italic text-[var(--color-cream)] shadow-inner ${
                    index === 1 ? "translate-y-8" : index === 2 ? "translate-y-16" : ""
                  }`}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(74,124,82,0.22)] bg-[var(--color-cream)] px-5 py-5 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-deep)] md:grid-cols-3">
          {trustItems.map((item) => (
            <div key={item} className="rounded-lg bg-[var(--color-surface)] px-4 py-4 text-center">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="image-slot fern-slot min-h-[440px] overflow-hidden rounded-2xl p-8 text-left">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-fern)]">
                treestar jungle
              </div>
              <div className="mt-5 max-w-xs font-serif text-5xl leading-none text-[var(--color-cream)]">
                Fresh plant oils, clean lather, bright bath rituals.
              </div>
            </div>
          </div>
          <div>
            <div className="eyebrow">About Us</div>
            <h2 className="section-heading mt-4">TREE*STAR was founded on fun, nourishing shower time.</h2>
            <div className="mt-8 space-y-6 text-lg leading-8 text-[var(--color-forest)]">
              <p>
                TREE*STAR was founded on the idea that bath and shower time should be fun,
                nourishing, sensational experiences you look forward to.
              </p>
              <p>
                Our soaps tickle the senses while they feed your skin. We use premium,
                organic, food-grade, plant oils in all of our products and each purchase
                plants one tree, so you can stay green while you scrub clean.
              </p>
            </div>
            <Link href="/about" className="button-primary mt-8">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="eyebrow">Best Sellers</div>
              <h2 className="section-heading mt-4">Customer favorites for fresh starts.</h2>
            </div>
            <Link href="/shop" className="button-secondary text-[var(--color-deep)]">Shop all</Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Link key={product.slug} href={`/shop/${product.slug}`} className="shop-card overflow-hidden rounded-lg border border-[rgba(74,124,82,0.26)] bg-white">
                <ProductVisual product={product} className="aspect-square" />
                <div className="space-y-4 p-5">
                  <h3 className="font-serif text-2xl leading-tight text-[var(--color-deep)]">{product.name}</h3>
                  <ProductPrice product={product} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="eyebrow">What people are saying</div>
            <h2 className="section-heading mt-4">Real words from clean-skin regulars.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <article key={`${item.name}-${item.location}`} className="surface rounded-lg bg-[var(--color-cream)] p-6">
                <p className="text-base leading-7 text-[var(--color-forest)]">&quot;{item.quote}&quot;</p>
                <div className="mt-6 border-t border-[rgba(74,124,82,0.28)] pt-5">
                  <h3 className="font-mono text-sm uppercase tracking-[0.14em] text-[var(--color-deep)]">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.12em] text-[var(--color-moss)]">
                    {item.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1fr]">
          <div className="dark-surface rounded-2xl p-8 text-[var(--color-cream)] sm:p-10">
            <div className="eyebrow text-[var(--color-fern)]">2026 Market Dates</div>
            <h2 className="mt-5 font-serif text-6xl font-semibold leading-none">Queens Night Market</h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-[var(--color-cream)]/78">
              Saturdays, April 18-October 31, 4:00pm-Midnight. Come say hi, sniff the bars, and leave cleaner than you arrived.
            </p>
            <Link href="https://queensnightmarket.com/" target="_blank" rel="noreferrer" className="button-primary mt-8">Market details</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
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
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr]">
          <form className="surface rounded-2xl bg-white p-6 sm:p-8">
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

          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}
