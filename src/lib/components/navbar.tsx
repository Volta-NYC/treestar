"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const dropdownItems = [
  "Favors & Gifts",
  "Wholesale",
  "Contact",
  "Loyalty",
  "Gift Card",
  "Blog",
  "Notifications",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-white/95 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-20 flex items-center justify-between">

            {/* LEFT: LOGO + NAV */}
            <div className="flex items-center gap-10">

              {/* LOGO */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/img/logo.avif"
                  alt="TreeStar NYC"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </Link>

              {/* NAV LINKS */}
              <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-800">

                <Link className="hover:text-black transition" href="/about">
                  About Us
                </Link>

                <Link className="hover:text-black transition" href="/collab">
                  Collab
                </Link>

                <Link className="hover:text-black transition" href="/faq">
                  FAQ
                </Link>

                {/* DROPDOWN */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <button className="hover:text-black transition">
                    More ▾
                  </button>

                  {open && (
                    <div className="absolute top-10 left-0 w-64 z-50 pt-2">
                      <div className="bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden">
                        {dropdownItems.map((item) => (
                          <Link
                            key={item}
                            href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 transition"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* RIGHT: CTAs */}
            <div className="flex items-center gap-4">

              {/* LOGIN (icon + link style) */}
              <Link
                href="/login"
                className="flex items-center gap-2 text-sm text-gray-800 hover:text-black transition"
              >
                {/* user icon */}
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M20 21a8 8 0 10-16 0" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Log in
              </Link>

              {/* CART */}
              <Link
                href="/cart"
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                <svg
                  className="w-5 h-5 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 21h6" />
                </svg>
              </Link>

              {/* SHOP NOW CTA (PRIMARY) */}
              <Link
                href="/shop"
                className="
                  px-6 py-2 rounded-full
                  bg-black text-white font-semibold
                  hover:bg-gray-900
                  shadow-md
                  transition
                "
              >
                Shop Now
              </Link>

            </div>

          </div>
        </div>
      </div>
    </header>
  );
}