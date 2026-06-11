import type { Product } from "@/lib/products"

export default function ProductPrice({ product }: { product: Product }) {
  if (product.stock) {
    return <p className="font-mono text-sm uppercase tracking-[0.12em] text-[var(--color-moss)]">{product.stock}</p>
  }

  if (product.regularPrice && product.salePrice) {
    return (
      <div className="space-y-1 font-mono text-sm">
        <p className="text-[var(--color-forest)] line-through">Regular Price {product.regularPrice}</p>
        <p className="font-semibold text-[var(--color-deep)]">Sale Price {product.salePrice}</p>
      </div>
    )
  }

  return <p className="font-mono text-sm font-semibold text-[var(--color-deep)]">Price {product.price}</p>
}
