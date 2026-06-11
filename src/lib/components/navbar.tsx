"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const shopItems = [
  { label: "Soaps", href: "/shop/soaps" },
  { label: "Candles", href: "/shop/candles" },
  { label: "Goodies", href: "/shop/goodies" },
]

const dropdownItems = [
  "Favors & Gifts",
  "Wholesale",
  "Contact",
  "Loyalty",
  "Gift Card",
  "Blog",
  "Notifications",
]

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Collabs", href: "/collabs" },
  { label: "FAQ", href: "/faq" },
]

export default function Navbar() {
  const [shopOpen, setShopOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="bg-[var(--color-deep)] px-4 py-2 text-center font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--color-cream)] sm:text-xs">
        Shipping on us on orders over $50
      </div>
      <div className="border-b border-[rgba(28,51,32,0.16)] bg-[rgba(250,247,240,0.94)] backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:flex-nowrap">
          <Link href="/" className="flex items-center" aria-label="TREE*STAR home">
            <Image
              src="/img/logo.avif"
              alt="TREE*STAR"
              width={132}
              height={48}
              priority
              className="h-auto w-28 object-contain sm:w-32"
            />
          </Link>

          <nav className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-3 overflow-visible font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-deep)] lg:order-none lg:w-auto lg:justify-center lg:gap-x-6">
            <Link className="shrink-0 transition hover:text-[var(--color-moss)]" href="/">
              Home
            </Link>

            <div
              className="relative -my-3 shrink-0 py-3"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <Link className="transition hover:text-[var(--color-moss)]" href="/shop">
                Shop
              </Link>
              {shopOpen ? (
                <div className="absolute left-0 top-full z-50 w-44">
                  <div className="overflow-hidden rounded-lg border border-[rgba(74,124,82,0.22)] bg-[var(--color-cream)] shadow-xl">
                    {shopItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-[0.72rem] text-[var(--color-deep)] transition hover:bg-[var(--color-surface)]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {mainLinks.map((link) => (
              <Link key={link.href} className="shrink-0 transition hover:text-[var(--color-moss)]" href={link.href}>
                {link.label}
              </Link>
            ))}

            <div
              className="relative -my-3 shrink-0 py-3"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button className="transition hover:text-[var(--color-moss)]" type="button">
                More
              </button>
              {moreOpen ? (
                <div className="absolute left-0 top-full z-50 w-60">
                  <div className="overflow-hidden rounded-lg border border-[rgba(74,124,82,0.22)] bg-[var(--color-cream)] shadow-xl">
                    {dropdownItems.map((item) => (
                      <Link
                        key={item}
                        href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-3 text-[0.72rem] text-[var(--color-deep)] transition hover:bg-[var(--color-surface)]"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </nav>

          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-deep)]">
            <Link href="/loyalty" className="hidden transition hover:text-[var(--color-moss)] sm:inline">
              View points
            </Link>
            <Link href="/login" className="transition hover:text-[var(--color-moss)]">
              Log In
            </Link>
            <Link
              href="/cart"
              className="flex h-9 min-w-9 items-center justify-center rounded-full border border-[rgba(28,51,32,0.24)] px-3 transition hover:border-[var(--color-moss)] hover:text-[var(--color-moss)]"
              aria-label="Cart with 0 items"
            >
              0
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
