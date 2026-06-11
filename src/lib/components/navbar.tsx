"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { readCart } from "@/lib/components/add-to-cart-button"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About Us", href: "/about" },
  { label: "Collabs", href: "/collabs" },
  { label: "FAQ", href: "/faq" },
  { label: "Favors + Gifts", href: "/favors" },
  { label: "Wholesale", href: "/wholesale" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const refresh = () => setCartCount(readCart().reduce((sum, item) => sum + item.quantity, 0))

    refresh()
    window.addEventListener("storage", refresh)
    window.addEventListener("treestar-cart-updated", refresh)

    return () => {
      window.removeEventListener("storage", refresh)
      window.removeEventListener("treestar-cart-updated", refresh)
    }
  }, [])

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[rgba(28,51,32,0.16)] bg-[rgba(250,247,240,0.95)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center" aria-label="TREE*STAR home" onClick={() => setOpen(false)}>
          <Image
            src="/img/logo.avif"
            alt="TREE*STAR"
            width={132}
            height={48}
            priority
            className="h-auto w-28 object-contain sm:w-32"
          />
        </Link>

        <nav className="hidden items-center gap-5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[var(--color-deep)] xl:flex">
          {navLinks.map((link) => (
            <Link key={link.href} className="transition hover:text-[var(--color-moss)]" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-deep)] md:flex">
          <Link href="/loyalty" className="transition hover:text-[var(--color-moss)]">
            View Points
          </Link>
          <Link href="/login" className="transition hover:text-[var(--color-moss)]">
            Log In
          </Link>
          <Link
            href="/cart"
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[rgba(28,51,32,0.24)] px-4 transition hover:border-[var(--color-moss)] hover:text-[var(--color-moss)]"
            aria-label={`Cart with ${cartCount} items`}
          >
            Cart
            <span className="grid h-5 min-w-5 place-items-center rounded-full bg-[var(--color-gold)] px-1 text-[0.68rem] text-[var(--color-deep)]">
              {cartCount}
            </span>
          </Link>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-[rgba(28,51,32,0.24)] font-mono text-lg text-[var(--color-deep)] xl:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "x" : "="}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[rgba(28,51,32,0.12)] bg-[var(--color-cream)] px-5 py-5 shadow-lg xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-3 font-mono text-sm uppercase tracking-[0.14em] text-[var(--color-deep)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="rounded-lg px-2 py-2 transition hover:bg-[var(--color-surface)]"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-3 border-t border-[rgba(74,124,82,0.24)] pt-4 md:hidden">
              <Link href="/loyalty" onClick={() => setOpen(false)}>
                View Points
              </Link>
              <Link href="/login" onClick={() => setOpen(false)}>
                Log In
              </Link>
              <Link href="/cart" onClick={() => setOpen(false)}>
                Cart ({cartCount})
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
