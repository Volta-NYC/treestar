import type { Product } from "@/lib/products"

const palette = {
  soaps: "from-[#d9a441] via-[#7bae7f] to-[#1c3320]",
  candles: "from-[#f5d48a] via-[#b8923a] to-[#2d5a34]",
  goodies: "from-[#faf7f0] via-[#dde8d8] to-[#4a7c52]",
}

export default function ProductVisual({
  product,
  className = "",
}: {
  product: Pick<Product, "name" | "category">
  className?: string
}) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${palette[product.category]} ${className}`}>
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_24%_24%,#faf7f0_0_9%,transparent_10%),radial-gradient(circle_at_76%_68%,#faf7f0_0_7%,transparent_8%),repeating-linear-gradient(135deg,rgba(250,247,240,.32)_0_2px,transparent_2px_18px)]" />
      <div className="absolute inset-6 rounded-full border border-[rgba(250,247,240,0.38)]" />
      <div className="absolute inset-x-6 bottom-6 rounded-lg bg-[rgba(28,51,32,0.72)] p-4 text-[var(--color-cream)] backdrop-blur">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--color-fern)]">
          TREE*STAR
        </p>
        <p className="mt-2 line-clamp-2 font-serif text-2xl leading-tight">{product.name}</p>
      </div>
    </div>
  )
}
