import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#F6F7F3] text-[#123024] overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center">

        {/* background image layer */}
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center" />

        {/* dark green overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2D22]/70 via-[#0F2D22]/40 to-[#F6F7F3]" />

        {/* floating glow blobs */}
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-[#2D6A4F]/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#52B788]/20 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-5xl text-center px-6 space-y-8">

          <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-xs tracking-widest">
            EST. 2017 · NYC ARTISAN SOAP
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold text-white leading-tight">
            Fresh Natural Soap <br /> Handmade in NYC
          </h1>

          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Elevate your clean with botanical ingredients crafted in small batches.
            Every bar is designed to feel like a ritual, not a routine.
          </p>

          <div className="flex justify-center gap-4 pt-4">

            <Link
              href="/shop"
              className="
                px-8 py-3 rounded-full
                bg-[#2D6A4F]
                text-white font-medium
                shadow-lg shadow-black/20
                hover:scale-[1.03]
                transition
              "
            >
              Shop Now
            </Link>

            <Link
              href="#about"
              className="
                px-8 py-3 rounded-full
                bg-white/10 text-white
                backdrop-blur
                border border-white/20
                hover:bg-white/20 transition
              "
            >
              Explore Story
            </Link>

          </div>

        </div>
      </section>

      {/* ================= ABOUT (FLOATING CARD LAYOUT) ================= */}
      <section id="about" className="py-28 px-6 relative">

        <div className="absolute inset-0 bg-gradient-to-b from-[#F6F7F3] to-[#E8F3EC]" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* image card */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#2D6A4F]/10 blur-2xl rounded-3xl" />
            <div className="relative bg-gray-300 aspect-square rounded-3xl shadow-2xl" />
          </div>

          {/* text card */}
          <div className="bg-white rounded-3xl shadow-xl p-10 space-y-6 border border-[#E6EFE8]">

            <h2 className="text-4xl font-semibold text-[#1F4D3A]">
              About Us
            </h2>

            <p className="text-[#4E6B5A] leading-relaxed">
              TREE*STAR was founded on the idea that bath and shower time should be
              fun, nourishing, sensational experiences you look forward to.
              Our soaps tickle the senses while they feed your skin.
              Each purchase plants a tree so you can stay green while you scrub clean.
            </p>

            <Link
              href="/about"
              className="inline-block px-6 py-3 rounded-full bg-[#1F4D3A] text-white hover:opacity-90 transition"
            >
              Learn More
            </Link>

          </div>

        </div>
      </section>

      {/* ================= FEATURE CARDS (INSPIRATION STYLE LAYERING) ================= */}
      <section className="py-24 px-6 bg-[#E8F3EC]">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          {[
            ["Natural Ingredients", "Plant-based oils for skin nourishment"],
            ["Small Batch Craft", "Made in limited NYC studio runs"],
            ["Eco Impact", "Every order plants a tree"]
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="
                bg-white/70 backdrop-blur
                border border-white
                rounded-2xl p-6
                shadow-lg
                hover:translate-y-[-4px]
                transition
              "
            >
              <h3 className="font-semibold text-[#1F4D3A] text-lg">
                {title}
              </h3>
              <p className="text-sm text-[#4E6B5A] mt-2">
                {desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= REVIEWS (LAYERED FLOATING CARDS) ================= */}
      <section className="py-28 px-6">

        <div className="max-w-6xl mx-auto space-y-14">

          <h2 className="text-4xl font-semibold text-center text-[#1F4D3A]">
            What People Are Saying
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "LOVE this soap. My skin loves it too :)",
              "Every soap leaves me feeling especially clean.",
              "Smells great but not overpowering.",
              "First product that helped my sensitive skin."
            ].map((text, i) => (
              <div
                key={i}
                className="
                  group relative p-6 rounded-2xl
                  bg-white
                  shadow-lg
                  border border-[#E6EFE8]
                  hover:shadow-2xl
                  transition
                "
              >
                <p className="text-[#4E6B5A] italic">
                  “{text}”
                </p>

                <div className="absolute inset-0 rounded-2xl bg-[#2D6A4F]/0 group-hover:bg-[#2D6A4F]/5 transition" />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-28 px-6 bg-[#0F2D22] text-white text-center">

        <h2 className="text-4xl font-semibold">
          Elevate Your Clean
        </h2>

        <p className="text-white/70 mt-4">
          Natural skincare made to feel like a ritual.
        </p>

        <Link
          href="/shop"
          className="inline-block mt-8 px-8 py-3 bg-[#52B788] text-black font-medium rounded-full hover:scale-105 transition"
        >
          Shop Now
        </Link>

      </section>

    </main>
  );
}