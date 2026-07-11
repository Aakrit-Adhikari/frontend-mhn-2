const peaks = [
  {
    rank: "Highest peak on the route",
    name: "Ganesh Himal I",
    height: "7,422 m / 24,350 ft",
    description:
      "The highest summit of the Ganesh Himal range, visible northwest of Kathmandu during clear-weather flights toward Gosaikunda.",
    featured: true,
    tag: "Ganesh Himal view",
  },
  {
    rank: "Langtang region’s highest",
    name: "Langtang Lirung",
    height: "7,227 m / 23,711 ft",
    description:
      "The defining mountain of the Langtang region, rising above forested valleys, Tamang settlements and the approach toward Gosaikunda.",
    tag: "Langtang panorama",
  },
  {
    name: "Ganesh Himal II",
    height: "7,118 m / 23,353 ft",
    description:
      "A prominent summit within the Ganesh Himal massif, forming part of the broad snow-covered skyline northwest of the Kathmandu Valley.",
  },
  {
    name: "Dorje Lakpa",
    height: "6,966 m / 22,854 ft",
    description:
      "A sharply shaped Himalayan summit recognised for its elegant snow-covered ridges and position east of the Langtang range.",
    tag: "Eastern Langtang view",
  },
  {
    name: "Langtang II",
    height: "6,596 m / 21,640 ft",
    description:
      "A major summit of the Langtang Himal, visible among the surrounding ridgelines during suitable weather and flight conditions.",
  },
];

const chartPeaks = [
  {
    name: "Langtang II",
    height: 6596,
  },
  {
    name: "Dorje Lakpa",
    height: 6966,
  },
  {
    name: "Ganesh Himal II",
    height: 7118,
  },
  {
    name: "Langtang Lirung",
    height: 7227,
  },
  {
    name: "Ganesh Himal I",
    height: 7422,
    featured: true,
  },
];

export default function MajorPeaksSection() {
  return (
    <section className="bg-[#020d1c] px-5 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#062a55] px-5 py-10 md:px-8 md:py-12 lg:px-10">
        {/* HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.24em] text-[#e3a51f]">
            <span className="h-px w-7 bg-[#e3a51f]" />
            In the Flight Window
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-4xl">
            Major Peaks{" "}
            <span className="text-[#e4a923]">
              Encountered on the Gosaikunda Tour.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-4xl font-manrope text-sm leading-7 text-white/45">
            The flight north from Kathmandu reveals the Langtang and Ganesh
            Himal ranges, including Langtang Lirung, Dorje Lakpa and the
            snow-covered summits of the Ganesh Himal massif.
          </p>
        </div>

        {/* PEAK CHART */}
        <div className="relative mt-10 overflow-x-auto rounded-2xl border border-white/10 bg-[#031426] px-4 pb-4 pt-6 md:px-6 md:pb-5 md:pt-8">
          <div className="relative h-[250px] min-w-[720px] md:h-[290px]">
            {/* GRID LINES */}
            <div className="absolute inset-x-0 top-[15%] border-t border-dashed border-white/10" />
            <div className="absolute inset-x-0 top-[43%] border-t border-dashed border-white/10" />
            <div className="absolute inset-x-0 top-[70%] border-t border-dashed border-white/10" />

            {/* GRID LABELS */}
            <span className="absolute left-0 top-[12%] font-manrope text-[10px] text-[#dca41f]">
              7,500 m
            </span>

            <span className="absolute left-0 top-[40%] font-manrope text-[10px] text-white/25">
              7,000 m
            </span>

            <span className="absolute left-0 top-[67%] font-manrope text-[10px] text-white/25">
              6,500 m
            </span>

            {/* MOUNTAINS */}
            <div className="absolute inset-x-8 bottom-0 flex h-[90%] items-end gap-3">
              {chartPeaks.map((peak, index) => {
                const minHeight = 6400;
                const maxHeight = 7422;

                const normalized =
                  ((peak.height - minHeight) / (maxHeight - minHeight)) * 66 +
                  24;

                return (
                  <div
                    key={peak.name}
                    className="group relative flex h-full flex-1 items-end justify-center"
                  >
                    {/* PEAK LABEL */}
                    <span
                      className={`absolute left-1/2 z-10 -translate-x-1/2 whitespace-nowrap font-manrope text-[8px] font-bold uppercase transition-colors duration-300 md:text-[9px] ${
                        peak.featured
                          ? "text-[#efb01f]"
                          : "text-white/45 group-hover:text-white/80"
                      }`}
                      style={{
                        bottom: `${Math.min(normalized + 3, 94)}%`,
                      }}
                    >
                      {peak.featured
                        ? `${peak.name} · ${peak.height.toLocaleString()} m`
                        : peak.name}
                    </span>

                    {/* MOUNTAIN SHAPE */}
                    <div
                      className={`relative w-full max-w-[170px] transition-all duration-500 group-hover:opacity-100 ${
                        peak.featured
                          ? "bg-[#efb01f]"
                          : "bg-gradient-to-t from-[#04376d] to-[#0a69aa]"
                      }`}
                      style={{
                        height: `${normalized}%`,
                        clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
                        opacity: peak.featured ? 1 : 0.7 + index * 0.05,
                      }}
                    />

                    {/* BASE POINT */}
                    <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1 rounded-full bg-white/55 transition-transform duration-300 group-hover:scale-150 group-hover:bg-[#efb01f]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* PEAK CARDS */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {peaks.map((peak) => (
            <article
              key={peak.name}
              className={`group rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)] ${
                peak.featured
                  ? "border-[#d9a229]/50 bg-[#162b3e] hover:border-[#e5a923]"
                  : "border-white/10 bg-white/[0.035] hover:border-[#e5a923]/40 hover:bg-white/[0.06]"
              }`}
            >
              {peak.rank && (
                <p
                  className={`font-manrope text-xs font-bold tracking-[0.1em] ${
                    peak.featured ? "text-[#e5a923]" : "text-white/25"
                  }`}
                >
                  {peak.rank}
                </p>
              )}

              <h3 className="mt-3 font-fraunces text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#e5a923]">
                {peak.name}
              </h3>

              <p className="mt-2 font-manrope text-sm font-bold text-[#e5a923]">
                {peak.height}
              </p>

              <p className="mt-3 font-manrope text-xs leading-5 text-white/35 transition-colors duration-300 group-hover:text-white/55">
                {peak.description}
              </p>

              {peak.tag && (
                <span className="mt-4 inline-flex rounded-full border border-white/5 bg-white/5 px-3 py-1 font-manrope text-[10px] text-white/35 transition-colors duration-300 group-hover:border-[#e5a923]/20 group-hover:bg-[#e5a923]/10 group-hover:text-[#e5a923]">
                  {peak.tag}
                </span>
              )}
            </article>
          ))}
        </div>

        {/* ROUTE ATTRACTIONS */}
        <div className="mt-8 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Sacred Lake System",
              description:
                "Gosaikunda, Bhairab Kunda and Saraswati Kunda form the principal sacred lakes visible near the landing area.",
            },
            {
              title: "Shivapuri Forests",
              description:
                "The journey begins above the protected forests and green ridges north of Kathmandu.",
            },
            {
              title: "Tamang Villages",
              description:
                "Traditional slate-roofed settlements and terraced mountain communities appear beneath the flight path.",
            },
            {
              title: "Langtang Landscapes",
              description:
                "Alpine valleys, rocky ridges and high Himalayan terrain surround the approach to Gosaikunda.",
            },
          ].map((attraction) => (
            <article
              key={attraction.title}
              className="rounded-xl border border-white/10 bg-white/[0.035] px-5 py-5"
            >
              <h3 className="font-fraunces text-base font-semibold text-white">
                {attraction.title}
              </h3>

              <p className="mt-2 font-manrope text-xs leading-5 text-white/35">
                {attraction.description}
              </p>
            </article>
          ))}
        </div>

        {/* VISIBILITY NOTE */}
        <p className="mt-6 text-center font-manrope text-xs leading-6 text-white/25">
          Mountain visibility depends on departure time, cloud cover, weather,
          flight direction and passenger seat position. The exact route may
          change according to operational and safety conditions.
        </p>
      </div>
    </section>
  );
}