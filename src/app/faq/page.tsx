"use client"

import { useState } from "react"
import PageHero from "@/lib/components/page-hero"

const faqs = [
  ["Are your soaps vegan?", "Most are vegan. Honey + Oatmeal contains raw honey and is vegetarian, not vegan."],
  ["Are your soaps safe for sensitive skin?", "Yes. We use food-grade, organic plant oils with no synthetic detergents or sulfates."],
  ["How long does a bar last?", "Most bars last 4-6 weeks with proper care. Use a draining soap dish between uses."],
  ["Do you ship internationally?", "Currently we ship in the US only. Free shipping is available on orders over $50."],
  ["What is your return policy?", "Due to the handmade, personal-care nature of our products, we do not accept returns. Contact jose@treestarnyc.com if there is an issue with your order."],
  ["What does plants one tree mean?", "Every purchase triggers a tree planted via One Tree Planted, a 501(c)(3) nonprofit."],
  ["Can I buy in bulk / wholesale?", "Yes. Email jose@treestarnyc.com for wholesale pricing and current minimums."],
  ["Where can I buy in person?", "Queens Night Market, Saturdays 4pm-midnight, April 18-October 31."],
]

export default function FAQPage() {
  const [open, setOpen] = useState(0)

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-deep)]">
      <PageHero eyebrow="FAQ" title="Good clean answers.">
        <p>Everything people ask before they pick a bar, candle, or gift.</p>
      </PageHero>
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map(([question, answer], index) => (
            <div key={question} className="surface overflow-hidden rounded-lg bg-[var(--color-cream)]">
              <button
                className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left font-serif text-2xl font-semibold"
                type="button"
                onClick={() => setOpen(open === index ? -1 : index)}
              >
                {question}
                <span className="font-mono text-xl">{open === index ? "-" : "+"}</span>
              </button>
              {open === index ? <p className="border-t border-[rgba(74,124,82,0.24)] px-5 py-5 leading-7 text-[var(--color-forest)]">{answer}</p> : null}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
