const aboutImage = "/images/about/9n-ald.png";

const specs = [
  ["Max Altitude", "23,000 ft"],
  ["Cruise Speed", "140 KTS"],
  ["Range", "662 KM"],
  ["Capacity", "5 + 1 Pilot"],
  ["Engine", "Arriel 2D"],
  ["Max Weight", "2,200 KG"],
];

export default function FleetShowcase() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-[#003366]">
          <div className="absolute right-6 top-6 z-10 md:right-8 md:top-8">
            <span className="font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#F2B632]">
              Our Fleet
            </span>
          </div>

          <div className="grid items-center lg:grid-cols-2">
            <div className="order-2 p-8 text-white md:p-12 lg:order-1 lg:p-16">
              <span className="mb-6 inline-block rounded-full border border-[#F2B632]/40 bg-[#F2B632]/20 px-3 py-1.5 font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#F2B632]">
                9N-ALD · REG&apos;D 2014 · SERIAL 7808
              </span>

              <h2 className="mb-6 font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
                Airbus AS 350 B3e.
                <br />
                <span className="text-[#F2B632]">
                  The Himalayan workhorse.
                </span>
              </h2>

              <p className="mb-8 font-manrope leading-relaxed text-white/80">
                The only single-engine airframe certified above 23,000 ft — the
                same type that landed on Everest&apos;s summit in 2005. Powered
                by the Turbomeca Arriel 2D delivering stronger performance at
                altitude.
              </p>

              <div className="mb-9 grid grid-cols-2 gap-x-8 gap-y-5">
                {specs.map(([label, value]) => (
                  <div key={label} className="border-l-2 border-[#F2B632]/40 pl-4">
                    <div className="mb-1 font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#F2B632]">
                      {label}
                    </div>
                    <div className="font-manrope text-xl font-bold tabular-nums">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/fleet"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 font-manrope font-bold text-[#003366] transition hover:bg-[#F2B632]"
              >
                See full fleet specs
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
            </div>

            <div className="group relative order-1 h-[300px] overflow-hidden md:h-[420px] lg:order-2 lg:h-[620px]">
              <img
                src={aboutImage}
                alt="9N-ALD Airbus AS 350 B3e at Lukla"
                className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/40 via-transparent to-transparent lg:from-[#003366] lg:via-[#003366]/20" />

              <div className="absolute bottom-6 right-6 rounded-xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur">
                <div className="mb-0.5 font-manrope text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#F2B632]">
                  Registration
                </div>
                <div className="font-fraunces text-2xl font-semibold tabular-nums text-white">
                  9N-ALD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}