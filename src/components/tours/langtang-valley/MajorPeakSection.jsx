const peaks = [
  {
    rank: "Highest in Langtang",
    name: "Langtang Lirung",
    height: "7,227 m / 23,711 ft",
    description:
      "The highest summit of the Langtang range and the dominant mountain above Kyanjin Gompa and the upper Langtang Valley.",
    featured: true,
    tag: "Kyanjin Gompa view",
  },
  {
    name: "Ganesh Himal",
    height: "7,422 m / 24,350 ft",
    description:
      "A striking Himalayan massif visible toward the western side of the Langtang region during clear-weather flights.",
    tag: "Western Langtang",
  },
  {
    name: "Dorje Lakpa",
    height: "6,966 m / 22,854 ft",
    description:
      "A distinctive triangular-shaped mountain rising southeast of Langtang and visible from Kyanjin Gompa.",
    tag: "Triangular summit",
  },
  {
    name: "Naya Kanga",
    height: "5,844 m / 19,173 ft",
    description:
      "A beautiful trekking peak overlooking the Langtang Valley and the high-altitude landscape around Kyanjin Gompa.",
  },
  {
    name: "Yala Peak",
    height: "5,500 m / 18,045 ft",
    description:
      "A popular trekking peak positioned near the upper Langtang Valley, surrounded by glaciers and Himalayan ridgelines.",
  },
];

const chartPeaks = [
  {
    name: "Yala Peak",
    height: 5500,
  },
  {
    name: "Naya Kanga",
    height: 5844,
  },
  {
    name: "Dorje Lakpa",
    height: 6966,
  },
  {
    name: "Langtang Lirung",
    height: 7227,
    featured: true,
  },
  {
    name: "Ganesh Himal",
    height: 7422,
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
              Encountered on the Langtang Tour.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-4xl font-manrope text-sm leading-7 text-white/45">
            From the commanding face of Langtang Lirung to the trekking summits
            surrounding Kyanjin Gompa, the Langtang helicopter route reveals a
            dramatic arc of snow-covered peaks above the valley.
          </p>
        </div>

        {/* PEAK CHART */}
        <div className="relative mt-10 overflow-x-auto rounded-2xl border border-white/10 bg-[#031426] px-4 pb-4 pt-6 md:px-6 md:pb-5 md:pt-8">
          <div className="relative h-[250px] min-w-[720px] md:h-[290px]">
            {/* GRID */}
            <div className="absolute inset-x-0 top-[18%] border-t border-dashed border-white/10" />
            <div className="absolute inset-x-0 top-[43%] border-t border-dashed border-white/10" />
            <div className="absolute inset-x-0 top-[68%] border-t border-dashed border-white/10" />

            <span className="absolute left-0 top-[15%] font-manrope text-[10px] text-[#dca41f]">
              7,500 m
            </span>

            <span className="absolute left-0 top-[40%] font-manrope text-[10px] text-white/25">
              6,500 m
            </span>

            <span className="absolute left-0 top-[65%] font-manrope text-[10px] text-white/25">
              5,500 m
            </span>

            {/* MOUNTAINS */}
            <div className="absolute inset-x-8 bottom-0 flex h-[90%] items-end gap-3">
              {chartPeaks.map((peak, index) => {
                const minHeight = 5000;
                const maxHeight = 7500;

                const normalized =
                  ((peak.height - minHeight) / (maxHeight - minHeight)) * 68 +
                  22;

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
                        opacity: peak.featured ? 1 : 0.72 + index * 0.04,
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
                  className={`font-manrope text-xs font-bold tracking-[0.14em] ${
                    peak.featured ? "text-[#e5a923]" : "text-white/20"
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

        {/* VISIBILITY NOTE */}
        <p className="mt-5 text-center font-manrope text-xs text-white/25">
          Visibility of individual peaks depends on weather, cloud cover,
          departure time, the approved flight route and passenger seat
          position.
        </p>
      </div>
    </section>
  );
}