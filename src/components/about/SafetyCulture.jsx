const aboutImage = "/images/about/rescue.jpg";

const safety = [
  {
    title: "Pilot-in-command authority",
    desc: "The captain's weather decision is final and non-negotiable — commercial pressure never overrides it.",
  },
  {
    title: "Just Culture reporting",
    desc: "Confidential safety reports from anyone — crew, passengers, public. No retaliation, ever. Every report reviewed within 48 hours.",
  },
  {
    title: "In-house engineering",
    desc: "100-hour, 500-hour, and annual inspections done by our own CAAN-certified engineers. No third parties, no shortcuts.",
  },
];

export default function SafetyCulture() {
  return (
    <section className="border-y border-[#E2E8F0] bg-[#F8FAFC] py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="mb-4 block font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#F2B632]">
              Safety Culture
            </span>

            <h2 className="mb-6 font-fraunces text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[#003366]">
              Safety isn&apos;t a department.
              <br />
              It&apos;s the whole company.
            </h2>

            <p className="mb-8 font-manrope text-lg leading-relaxed text-[#0A1929]/75">
              Every flight begins with a documented pre-flight inspection. Every
              weather call is made by the pilot-in-command — never by sales.
              And anyone, from passenger to ground crew, can file a confidential
              safety report.
            </p>

            <div className="space-y-4">
              {safety.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl border border-[#E2E8F0] bg-white p-5 transition hover:border-[#F2B632]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E6F0F8]">
                    <svg
                      className="h-5 w-5 text-[#003366]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M9 12l2 2 4-4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>

                  <div>
                    <h4 className="mb-1 font-manrope font-bold text-[#0A1929]">
                      {item.title}
                    </h4>
                    <p className="font-manrope text-sm leading-relaxed text-[#6B7886]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-[0_20px_40px_rgba(0,51,102,0.18)]">
              <img
                src={aboutImage}
                alt="Mountain Helicopters safety"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-4 max-w-[260px] rounded-2xl border-t-4 border-[#F2B632] bg-white p-6 shadow-[0_20px_40px_rgba(0,51,102,0.18)] md:-left-8">
              <div className="mb-1 font-fraunces text-4xl font-semibold text-[#003366]">
                100%
              </div>
              <div className="mb-2 font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#F2B632]">
                In-house Maintenance
              </div>
              <p className="font-manrope text-xs leading-relaxed text-[#6B7886]">
                Every inspection performed by our own CAAN-certified engineers
                in Kathmandu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}