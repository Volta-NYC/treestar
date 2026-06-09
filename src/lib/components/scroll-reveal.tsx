"use client"

import { useEffect } from "react"

export default function ScrollReveal() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll(".testimonial-card"))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.24 },
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return null
}
