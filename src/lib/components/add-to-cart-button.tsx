"use client"

import { useState } from "react"
import type { Product } from "@/lib/products"

type CartItem = {
  slug: string
  name: string
  price: string
  quantity: number
}

export function readCart(): CartItem[] {
  if (typeof window === "undefined") return []

  try {
    return JSON.parse(window.localStorage.getItem("treestar-cart") ?? "[]")
  } catch {
    return []
  }
}

export function writeCart(items: CartItem[]) {
  window.localStorage.setItem("treestar-cart", JSON.stringify(items))
  window.dispatchEvent(new Event("treestar-cart-updated"))
}

export default function AddToCartButton({
  product,
  className = "",
}: {
  product: Product
  className?: string
}) {
  const [added, setAdded] = useState(false)

  if (product.stock) {
    return (
      <button className={`button-primary opacity-60 ${className}`} type="button" disabled>
        Out of stock
      </button>
    )
  }

  return (
    <button
      className={`button-primary ${className}`}
      type="button"
      onClick={() => {
        const cart = readCart()
        const existing = cart.find((item) => item.slug === product.slug)
        const price = product.salePrice ?? product.price ?? product.regularPrice ?? "$0.00"

        if (existing) {
          existing.quantity += 1
        } else {
          cart.push({ slug: product.slug, name: product.name, price, quantity: 1 })
        }

        writeCart(cart)
        setAdded(true)
        window.setTimeout(() => setAdded(false), 1600)
      }}
    >
      {added ? "Added" : "Add to Cart"}
    </button>
  )
}
