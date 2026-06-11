"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import AddToCartButton from "@/lib/components/add-to-cart-button"
import ProductPrice from "@/lib/components/product-price"
import ProductVisual from "@/lib/components/product-visual"
import { categoryCounts, categoryLabels, getPriceValue, products, type Product, type ProductCategory } from "@/lib/products"

const testimonials = [
  {
    name: "vienna d'ornellas",
    quote:
      "Love these soaps, they are so gentle that one can use them on their face, while at the same time leaving the body clean.",
  },
  {
    name: "kristen lopez",
    quote: "Smells GREAT. Not too strong but enough that you can smell it. The scrub is great at exfoliating.",
  },
  {
    name: "kendra baumer",
    quote:
      "LOVE this soap. My skin loves it too. The owners are fantastic to work with and very communicative.",
  },
]

type Filter = "all" | ProductCategory
type Sort = "Featured" | "Newest" | "Price: low to high" | "Price: high to low"

function ProductCard({ product, onQuickView }: { product: Product; onQuickView: (product: Product) => void }) {
  const outOfStock = Boolean(product.stock)

  return (
    <article
      className={`shop-card overflow-hidden rounded-lg border border-[rgba(74,124,82,0.26)] bg-[var(--color-cream)] ${
        outOfStock ? "opacity-70" : ""
      }`}
    >
      <div className="relative aspect-square">
        <ProductVisual product={product} className="absolute inset-0" />
        {product.badge ? (
          <div className="absolute left-3 top-3 rounded-full bg-[var(--color-gold)] px-3 py-1 font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-deep)]">
            {product.badge}
          </div>
        ) : null}
        {outOfStock ? (
          <div className="absolute inset-0 grid place-items-center bg-[rgba(28,51,32,0.42)]">
            <div className="rounded-full bg-[var(--color-cream)] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-deep)]">
              Out of Stock
            </div>
          </div>
        ) : null}
        <button
          className="absolute inset-x-4 bottom-4 rounded-full bg-[rgba(250,247,240,0.94)] px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-deep)] shadow-sm transition hover:bg-white"
          type="button"
          onClick={() => onQuickView(product)}
        >
          Quick View
        </button>
      </div>
      <div className="space-y-4 p-5">
        <Link href={`/shop/${product.slug}`} className="block transition hover:text-[var(--color-moss)]">
          <h3 className="font-serif text-2xl leading-tight text-[var(--color-deep)]">{product.name}</h3>
        </Link>
        <ProductPrice product={product} />
        {product.rating ? (
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-moss)]">Rating {product.rating}</p>
        ) : null}
        {!outOfStock ? <AddToCartButton product={product} className="min-h-11 w-full text-xs" /> : null}
      </div>
    </article>
  )
}

function QuickView({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto bg-[rgba(28,51,32,0.72)] px-5 py-8 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl bg-[var(--color-cream)] shadow-2xl lg:grid-cols-[0.92fr_1.08fr]">
        <ProductVisual product={product} className="min-h-[320px] lg:min-h-[560px]" />
        <div className="p-6 sm:p-9">
          <button
            className="mb-6 ml-auto block rounded-full border border-[rgba(28,51,32,0.24)] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-deep)] transition hover:border-[var(--color-moss)]"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
          <p className="eyebrow">{categoryLabels[product.category]}</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold leading-none text-[var(--color-deep)]">{product.name}</h2>
          <div className="mt-6">
            <ProductPrice product={product} />
          </div>
          <p className="mt-6 text-lg leading-8 text-[var(--color-forest)]">{product.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {product.ingredients.map((item) => (
              <span key={item} className="rounded-full bg-[var(--color-surface)] px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-deep)]">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <AddToCartButton product={product} />
            <Link href={`/shop/${product.slug}`} className="button-secondary text-[var(--color-deep)]" onClick={onClose}>
              Full product page
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ShopPage() {
  const [filter, setFilter] = useState<Filter>("all")
  const [sort, setSort] = useState<Sort>("Featured")
  const [quickView, setQuickView] = useState<Product | null>(null)

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => filter === "all" || product.category === filter)

    return [...filtered].sort((a, b) => {
      if (sort === "Newest") return Number(Boolean(b.newest)) - Number(Boolean(a.newest))
      if (sort === "Price: low to high") return getPriceValue(a) - getPriceValue(b)
      if (sort === "Price: high to low") return getPriceValue(b) - getPriceValue(a)
      return Number(Boolean(b.featured || b.badge)) - Number(Boolean(a.featured || a.badge))
    })
  }, [filter, sort])

  const filters = [{ id: "all" as const, label: "All", count: products.length }, ...categoryCounts]

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-deep)]">
      <section className="hero-forest relative overflow-hidden px-5 pb-20 pt-32 text-[var(--color-cream)] sm:px-8 lg:pt-36">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow text-[var(--color-fern)]">Welcome to</p>
            <Image src="/img/logo.avif" alt="TREE*STAR" width={230} height={86} priority className="mt-8 h-auto w-52 object-contain" />
            <h1 className="hero-heading mt-8 max-w-4xl uppercase">Shop</h1>
            <p className="mt-6 max-w-xl text-xl leading-8 text-[var(--color-cream)]/82">
              We take mundane routines and turn them into sensational experiences.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {categoryCounts.map((item) => (
              <button
                key={item.label}
                className="rounded-lg border border-[rgba(250,247,240,0.18)] bg-[rgba(250,247,240,0.08)] p-5 text-left backdrop-blur transition hover:border-[var(--color-gold)]"
                type="button"
                onClick={() => setFilter(item.id)}
              >
                <div className="font-serif text-4xl font-semibold">{item.count}</div>
                <div className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-fern)]">
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 border-b border-[rgba(74,124,82,0.28)] pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Shop all</p>
              <h2 className="section-heading mt-3">Fresh soap, candles, and goodies.</h2>
              <div className="mt-7 flex flex-wrap gap-3">
                {filters.map((item) => (
                  <button
                    key={item.id}
                    className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] transition ${
                      filter === item.id
                        ? "border-[var(--color-deep)] bg-[var(--color-deep)] text-[var(--color-cream)]"
                        : "border-[rgba(74,124,82,0.34)] bg-[var(--color-cream)] text-[var(--color-deep)] hover:border-[var(--color-moss)]"
                    }`}
                    type="button"
                    onClick={() => setFilter(item.id)}
                  >
                    {item.label} ({item.count})
                  </button>
                ))}
              </div>
            </div>
            <label className="flex w-full flex-col gap-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-forest)] md:w-64">
              Sort by
              <select
                className="rounded-lg border border-[rgba(74,124,82,0.36)] bg-[var(--color-cream)] px-4 py-3 font-sans text-base normal-case text-[var(--color-deep)] outline-none focus:border-[var(--color-moss)]"
                value={sort}
                onChange={(event) => setSort(event.target.value as Sort)}
              >
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: low to high</option>
                <option>Price: high to low</option>
              </select>
            </label>
          </div>

          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleProducts.map((product) => (
              <ProductCard key={product.slug} product={product} onQuickView={setQuickView} />
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
                <h3 className="font-mono text-sm uppercase tracking-[0.14em] text-[var(--color-deep)]">{item.name}</h3>
                <p className="mt-5 text-base leading-7 text-[var(--color-forest)]">{item.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {quickView ? <QuickView product={quickView} onClose={() => setQuickView(null)} /> : null}
    </div>
  )
}
