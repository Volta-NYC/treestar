"use client"

import { FormEvent, useState } from "react"

export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle")

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!email.includes("@") || !email.includes(".")) {
      setStatus("error")
      return
    }

    setStatus("success")
    setEmail("")
  }

  return (
    <form className="dark-surface rounded-2xl p-8 text-[var(--color-cream)] sm:p-10" onSubmit={onSubmit}>
      <div className="eyebrow text-[var(--color-fern)]">Join our mailing list</div>
      {!compact ? (
        <h2 className="mt-5 font-serif text-5xl font-semibold leading-none">Soapscribe</h2>
      ) : null}
      <label className="mt-8 block font-mono text-sm uppercase tracking-[0.14em] text-[var(--color-cream)]/72">
        Email*
      </label>
      <input
        className="mt-3 w-full rounded-lg border border-[rgba(250,247,240,0.22)] bg-[rgba(250,247,240,0.92)] px-4 py-4 text-[var(--color-deep)] outline-none focus:border-[var(--color-gold)]"
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
          setStatus("idle")
        }}
        required
      />
      <button className="button-primary mt-5 w-full" type="submit">
        Soapscribe
      </button>
      <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-[var(--color-cream)]/78">
        <input className="mt-1 h-4 w-4 accent-[var(--color-gold)]" type="checkbox" required />
        <span>I want to subscribe to your mailing list.</span>
      </label>
      {status === "success" ? (
        <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-fern)]">
          Thanks for subscribing!
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-gold)]">
          Please enter a valid email.
        </p>
      ) : null}
    </form>
  )
}
