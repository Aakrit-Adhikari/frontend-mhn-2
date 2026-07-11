const aboutImage = "/images/about/9n-ald.png";

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="mb-4 block font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#F2B632]">
              Our Story
            </span>

            <h2 className="mb-8 font-fraunces text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[#003366]">
              Built for the mountains we fly.
            </h2>

            <div className="mb-8 inline-flex items-center gap-5 rounded-r-2xl border-l-4 border-[#F2B632] bg-[#E6F0F8] p-6">
              <div>
                <div className="mb-1 font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#003366]/70">
                  Founded
                </div>
                <div className="font-fraunces text-4xl font-bold leading-none tabular-nums text-[#003366]">
                  2009
                </div>
              </div>

              <div className="h-14 w-px bg-[#003366]/20" />

              <div>
                <div className="mb-1 font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#003366]/70">
                  Headquarters
                </div>
                <div className="font-manrope text-lg font-bold leading-tight text-[#003366]">
                  Kathmandu, Nepal
                </div>
              </div>
            </div>

            <div className="hidden overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,51,102,0.12)] lg:block">
              <img
                src={aboutImage}
                alt="9N-ALD at Lukla airport"
                className="h-56 w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-6 font-manrope text-lg leading-relaxed text-[#0A1929]/80">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-fraunces first-letter:text-6xl first-letter:font-bold first-letter:leading-none first-letter:text-[#003366]">
              Mountain Helicopters Pvt. Ltd. was established in 2009 in
              Kathmandu with a single conviction: the Himalayas deserve an
              operator engineered for them — not adapted from lowland flying.
              Every decision since, from the airframe we chose to the pilots we
              train, has flowed from that conviction.
            </p>

            <p>
              The mountains here are not a backdrop. They are an operating
              environment unlike anywhere else in aviation: valleys deeper than
              anywhere on earth, weather that turns in minutes, landing zones
              above 5,000 metres where the air holds half the lift it does at
              sea level. Flying here safely is not a product of luck or bravado
              — it is the product of systems, currency, and respect.
            </p>

            <p>
              We fly the Airbus AS 350 B3e — now the H125 — the only
              single-engine helicopter certified for operations above 23,000 ft,
              and the same airframe that touched down on Everest&apos;s summit in
              2005. Our aircraft are maintained exclusively in-house by
              CAAN-certified engineers at our Kathmandu base.
            </p>

            <p>
              Seventeen years in, we remain deliberately focused. We don&apos;t
              chase volume. We fly the Khumbu daily, we answer our rescue line
              at 3 AM, and we cancel flights when the mountain says no.
            </p>

            <blockquote className="relative my-12">
              <svg
                className="absolute -left-2 -top-4 h-16 w-16 text-[#F2B632]/20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983z" />
              </svg>

              <p className="pl-10 font-fraunces text-2xl font-medium leading-tight tracking-[-0.01em] text-[#003366] md:text-3xl">
                “The mountain doesn&apos;t care about your schedule.
                <br />
                <span className="text-[#003366]/60">
                  The pilot who does — that&apos;s the difference.”
                </span>
              </p>

              <footer className="mt-4 pl-10 font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#6B7886]">
                — Operations Principle Nº 1
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}