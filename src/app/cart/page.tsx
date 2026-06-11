"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { readCart, writeCart } from "@/lib/components/add-to-cart-button"

type CartItem = ReturnType<typeof readCart>[number]

function priceNumber(price: string) {
  return Number.parseFloat(price.replace(/[^0-9.]/g, ""))
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => setItems(readCart()), [])

  const subtotal = useMemo(() => items.reduce((sum, item) => sum + priceNumber(item.price) * item.quantity, 0), [items])

  function update(next: CartItem[]) {
    setItems(next)
    writeCart(next)
  }

  return (
    <div className="bg-[var(--color-bg)] px-5 pb-20 pt-32 text-[var(--color-deep)] sm:px-8 lg:pt-36">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">Cart</p>
        <h1 className="section-heading mt-4">Your clean little haul.</h1>
        {items.length === 0 ? (
          <div className="surface mt-10 rounded-lg bg-[var(--color-cream)] p-8">
            <p className="text-lg text-[var(--color-forest)]">Your cart is empty.</p>
            <Link href="/shop" className="button-primary mt-6">Shop now</Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.45fr]">
            <div className="space-y-4">
              {items.map((item) => (
                <article key={item.slug} className="surface flex flex-col gap-4 rounded-lg bg-[var(--color-cream)] p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <Link href={`/shop/${item.slug}`} className="font-serif text-2xl font-semibold hover:text-[var(--color-moss)]">{item.name}</Link>
                    <p className="mt-1 font-mono text-sm text-[var(--color-forest)]">{item.price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="rounded-full border px-3 py-1" type="button" onClick={() => update(items.map((cartItem) => cartItem.slug === item.slug ? { ...cartItem, quantity: Math.max(1, cartItem.quantity - 1) } : cartItem))}>-</button>
                    <span className="font-mono">{item.quantity}</span>
                    <button className="rounded-full border px-3 py-1" type="button" onClick={() => update(items.map((cartItem) => cartItem.slug === item.slug ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))}>+</button>
                    <button className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-moss)]" type="button" onClick={() => update(items.filter((cartItem) => cartItem.slug !== item.slug))}>Remove</button>
                  </div>
                </article>
              ))}
            </div>
            <aside className="dark-surface rounded-lg p-7 text-[var(--color-cream)]">
              <p className="eyebrow text-[var(--color-fern)]">Subtotal</p>
              <p className="mt-4 font-serif text-5xl">${subtotal.toFixed(2)}</p>
              <p className="mt-5 leading-7 text-[var(--color-cream)]/78">Shipping is on us for orders over $50. Checkout integration is ready for the next commerce pass.</p>
              <button className="button-primary mt-7 w-full" type="button">Checkout</button>
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}
