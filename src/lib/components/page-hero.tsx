export default function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <section className="hero-forest relative overflow-hidden px-5 pb-20 pt-32 text-[var(--color-cream)] sm:px-8 lg:pt-36">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <p className="eyebrow text-[var(--color-fern)]">{eyebrow}</p>
        <h1 className="hero-heading mt-5 max-w-5xl">{title}</h1>
        {children ? <div className="mt-7 max-w-3xl text-xl leading-8 text-[var(--color-cream)]/82">{children}</div> : null}
      </div>
    </section>
  )
}
