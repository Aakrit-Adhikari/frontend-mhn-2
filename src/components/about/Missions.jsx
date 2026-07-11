const missions = [
  {
    label: "01 — Tourism",
    title: "Helicopter Tours",
    desc: "Same-day Everest, Annapurna, Langtang and 30+ Khumbu sectors. Land at Kala Patthar. Breakfast above the clouds.",
    link: "Explore tours",
    image: "/images/about/9n-ald.png",
  },
  {
    label: "02 — Charter",
    title: "Expedition Charter",
    desc: "Film crews, corporate travel, expedition logistics, weddings, and bespoke Himalayan routes. You name the destination.",
    link: "Charter services",
    image: "/images/about/charter.png",
  },
  {
    label: "03 — Emergency",
    title: "Rescue & Medevac",
    desc: "24/7 helicopter rescue across Nepal. Altitude sickness, injury, hospital transfer. Airborne in 30–45 minutes.",
    link: "Rescue services",
    image: "/images/about/evacuation.png",
    live: true,
  },
];

export default function Missions() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <header className="mx-auto mb-16 max-w-[720px] text-center md:mb-20">
          <span className="mb-4 block font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#F2B632]">
            What We Fly
          </span>

          <h2 className="mb-4 font-fraunces text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]">
            Three missions. One standard.
          </h2>

          <div className="mx-auto h-0.5 w-16 bg-[#F2B632]" />
        </header>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {missions.map((item) => (
            <a
              href="tours"
              key={item.title}
              className="group relative block aspect-[4/5] overflow-hidden rounded-3xl bg-[#003366] text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,51,102,0.18)]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-700 group-hover:scale-105 group-hover:opacity-60"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-[#003366]/60 to-transparent" />

              {item.live && (
                <div className="absolute right-8 top-8 flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#F2B632] shadow-[0_0_10px_rgba(242,182,50,1)]" />
                  <span className="font-manrope text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#F2B632]">
                    On Standby
                  </span>
                </div>
              )}

              <div className="relative flex h-full flex-col justify-end p-8">
                <span className="mb-3 font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#F2B632]">
                  {item.label}
                </span>

                <h3 className="mb-3 font-fraunces text-2xl font-semibold md:text-3xl">
                  {item.title}
                </h3>

                <p className="mb-5 font-manrope text-sm leading-relaxed text-white/85">
                  {item.desc}
                </p>

                <span className="inline-flex items-center gap-2 font-manrope font-semibold text-[#F2B632] transition-all group-hover:gap-3.5">
                  {item.link}
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
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}