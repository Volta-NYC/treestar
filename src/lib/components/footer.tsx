import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[var(--color-deep)] text-[var(--color-cream)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 text-sm sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_auto]">
        <div>
          <Image
            src="/img/logo.avif"
            alt="TREE*STAR"
            width={150}
            height={54}
            className="h-auto w-36 object-contain"
          />
          <p className="mt-5 max-w-md leading-7 text-[var(--color-cream)]/76">
            Fresh natural soap handmade in NYC with organic plant oils, soft
            lather, clean scents, and a tree planted with every purchase.
          </p>
          <Link
            href="https://nyc.voltanpo.org"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex font-medium text-[var(--color-fern)] transition hover:text-[var(--color-gold)]"
          >
            Website made by @VoltaNYC
          </Link>
        </div>
        <div className="space-y-3 text-[var(--color-cream)]/76">
          <div className="font-serif text-2xl text-[var(--color-cream)]">Contact</div>
          <div>646.489.0345</div>
          <div>jose@treestarnyc.com</div>
          <div>Jackson Heights, NY</div>
        </div>
        <div className="space-y-3 text-[var(--color-cream)]/76">
          <div className="font-serif text-2xl text-[var(--color-cream)]">Visit</div>
          <div>Queens Night Market</div>
          <div>Saturdays, 4:00 PM - Midnight</div>
          <div>April 18 - October 31</div>
        </div>
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[var(--color-gold)] font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">
          EST. 2017
        </div>
        <div className="border-t border-[rgba(74,124,82,0.5)] pt-6 text-[var(--color-cream)]/64 md:col-span-4">
          &copy; {new Date().getFullYear()} TREE*STAR NYC. Built with Volta.
        </div>
      </div>
    </footer>
  )
}
