import Link from "next/link"
import Image from "next/image"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Collabs", href: "/collabs" },
  { label: "Favors", href: "/favors" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "Blog", href: "/blog" },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--color-deep)] text-[var(--color-cream)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 text-sm sm:px-8 lg:grid-cols-[1.25fr_0.8fr_1fr]">
        <div>
          <Image
            src="/img/logo.avif"
            alt="TREE*STAR"
            width={150}
            height={54}
            className="h-auto w-36 object-contain"
          />
          <p className="mt-5 max-w-md leading-7 text-[var(--color-cream)]/76">
            Fresh natural soap handmade in NYC with organic plant oils, playful scents, and a tree planted with every
            purchase. Stay green while you scrub clean.
          </p>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">EST. 2017</p>
        </div>

        <div>
          <div className="font-serif text-2xl text-[var(--color-cream)]">Quick Links</div>
          <div className="mt-5 grid grid-cols-2 gap-3 text-[var(--color-cream)]/76">
            {quickLinks.map((link) => (
              <Link key={link.href} className="transition hover:text-[var(--color-gold)]" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
          <div className="space-y-3 text-[var(--color-cream)]/76">
            <div className="font-serif text-2xl text-[var(--color-cream)]">Contact</div>
            <Link className="block transition hover:text-[var(--color-gold)]" href="tel:16464890345">
              646.489.0345
            </Link>
            <Link className="block transition hover:text-[var(--color-gold)]" href="mailto:jose@treestarnyc.com">
              jose@treestarnyc.com
            </Link>
            <div>Jackson Heights, NY</div>
            <div>@treestarnyc</div>
          </div>
          <div className="space-y-3 text-[var(--color-cream)]/76">
            <div className="font-serif text-2xl text-[var(--color-cream)]">Visit</div>
            <Link
              className="block transition hover:text-[var(--color-gold)]"
              href="https://queensnightmarket.com/"
              target="_blank"
              rel="noreferrer"
            >
              Queens Night Market
            </Link>
            <div>Saturdays, 4:00 PM - Midnight</div>
            <div>April 18 - October 31</div>
          </div>
        </div>

        <div className="border-t border-[rgba(74,124,82,0.5)] pt-6 text-[var(--color-cream)]/64 lg:col-span-3">
          &copy; 2026 TREE*STAR NYC · Built with Volta · Website by @VoltaNYC
        </div>
      </div>
    </footer>
  )
}
