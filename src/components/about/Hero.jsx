const aboutImage = "/images/9n-ald.jpg";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#003366] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={aboutImage}
          alt="Mountain Helicopters 9N-ALD at Lukla"
          className="h-full w-full object-cover opacity-35 [animation:kenburns_18s_ease-out_forwards]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#003366] via-[#003366]/80 to-[#001A33]" />
      </div>

      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#F2B632] via-[#E5A82D] to-[#F2B632]" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 py-24 lg:px-12">
        <nav className="mb-6 font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#F2B632]">
          <a href="/" className="transition hover:text-white">
            Home
          </a>
          <span className="mx-2 opacity-50">/</span>
          <span className="text-white/90">About</span>
        </nav>

        <span className="mb-6 inline-flex items-center gap-3">
          <span className="block h-px w-10 bg-[#F2B632]" />
          <span className="font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#F2B632]">
            EST. 2009 · KATHMANDU · NEPAL
          </span>
        </span>

        <h1 className="mb-8 max-w-[950px] font-fraunces text-[clamp(2.75rem,7.5vw,5.5rem)] font-semibold leading-[1.03] tracking-[-0.03em]">
          Seventeen years above
          <br />
          the highest place on earth.
        </h1>

        <p className="mb-10 max-w-[680px] font-manrope text-xl font-light leading-relaxed text-white/85 md:text-2xl">
          Mountain Helicopters is a Nepali operator built for one purpose —
          flying the Himalayas safely, every single day.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#F2B632] px-8 py-4 font-manrope text-base font-bold text-[#003366] transition-all hover:bg-[#E5A82D] hover:shadow-[0_20px_40px_rgba(0,51,102,0.18)]"
          >
            Book a Flight
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="#story"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-8 py-4 font-manrope text-base font-semibold text-white backdrop-blur-sm transition hover:border-[#F2B632]"
          >
            Read our story
          </a>
        </div>
      </div>

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}