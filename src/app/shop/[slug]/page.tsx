import { notFound } from "next/navigation"
import Link from "next/link"
import AddToCartButton from "@/lib/components/add-to-cart-button"
import ProductPrice from "@/lib/components/product-price"
import ProductVisual from "@/lib/components/product-visual"
import { categoryLabels, getProductBySlug, products } from "@/lib/products"

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) notFound()

  const related = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3)

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-deep)]">
      <section className="px-5 pb-16 pt-32 sm:px-8 lg:pt-36">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="grid gap-4">
            <ProductVisual product={product} className="min-h-[420px] rounded-2xl lg:min-h-[650px]" />
            <div className="grid grid-cols-3 gap-4">
              {[0, 1, 2].map((item) => (
                <ProductVisual key={item} product={product} className="aspect-square rounded-lg" />
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <Link href="/shop" className="font-mono text-sm uppercase tracking-[0.16em] text-[var(--color-moss)] transition hover:text-[var(--color-gold)]">
              &lt; Shop all
            </Link>
            <p className="eyebrow mt-8">{categoryLabels[product.category]}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.badge ? (
                <span className="rounded-full bg-[var(--color-gold)] px-3 py-1 font-mono text-xs uppercase tracking-[0.1em] text-[var(--color-deep)]">
                  {product.badge}
                </span>
              ) : null}
              {product.stock ? (
                <span className="rounded-full bg-[var(--color-deep)] px-3 py-1 font-mono text-xs uppercase tracking-[0.1em] text-[var(--color-cream)]">
                  Out of stock
                </span>
              ) : null}
            </div>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-none text-[var(--color-deep)] sm:text-6xl">
              {product.name}
            </h1>
            <div className="mt-6">
              <ProductPrice product={product} />
            </div>
            <p className="mt-7 text-lg leading-8 text-[var(--color-forest)]">{product.description}</p>
            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-moss)]">Ingredient highlights</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.ingredients.map((ingredient) => (
                  <span key={ingredient} className="rounded-full bg-[var(--color-surface)] px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-deep)]">
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
            <AddToCartButton product={product} className="mt-8 w-full sm:w-auto" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">You may also like</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/shop/${item.slug}`} className="shop-card overflow-hidden rounded-lg border border-[rgba(74,124,82,0.26)] bg-[var(--color-cream)]">
                <ProductVisual product={item} className="aspect-square" />
                <div className="p-5">
                  <h2 className="font-serif text-2xl leading-tight">{item.name}</h2>
                  <div className="mt-4">
                    <ProductPrice product={item} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
