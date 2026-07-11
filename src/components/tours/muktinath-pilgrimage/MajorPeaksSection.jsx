const peaks = [
  {
    rank: "World’s 7th highest",
    name: "Dhaulagiri I",
    height: "8,167 m / 26,795 ft",
    description:
      "The highest mountain visible on the Muktinath route, rising dramatically above the Kali Gandaki Valley.",
    featured: true,
  },
  {
    rank: "World’s 10th highest",
    name: "Annapurna I",
    height: "8,091 m / 26,545 ft",
    description:
      "The highest summit of the Annapurna massif and one of Nepal’s most celebrated Himalayan peaks.",
  },
  {
    name: "Baraha Chuli",
    height: "7,647 m / 25,089 ft",
    description:
      "Also known as Mount Fang, this tall and sharply defined summit rises within the Annapurna massif.",
  },
  {
    name: "Annapurna South",
    height: "7,219 m / 23,684 ft",
    description:
      "A steep and highly photogenic summit forming the southern edge of the Annapurna mountain group.",
  },
  {
    name: "Nilgiri North",
    height: "7,061 m / 23,166 ft",
    description:
      "The highest summit of the Nilgiri massif, prominently visible above the Kali Gandaki corridor.",
    tag: "Mustang corridor",
  },
  {
    name: "Machhapuchhre",
    height: "6,993 m / 22,943 ft",
    description:
      "The sacred Fishtail Mountain, especially prominent during departures from Pokhara.",
  },
  {
    name: "Nilgiri Central",
    height: "6,940 m / 22,769 ft",
    description:
      "The central summit of the Nilgiri massif, rising between the northern and southern peaks.",
  },
  {
    name: "Nilgiri South",
    height: "6,839 m / 22,438 ft",
    description:
      "The southernmost summit of the Nilgiri group, overlooking Jomsom and Lower Mustang.",
  },
  {
    name: "Hiunchuli",
    height: "6,441 m / 21,132 ft",
    description:
      "A massive Himalayan shoulder connected to Annapurna South and visible across the Annapurna region.",
  },
  {
    name: "Mardi Himal",
    height: "5,587 m / 18,330 ft",
    description:
      "A beautiful and comparatively less-explored peak rising beneath the southern face of Machhapuchhre.",
  },
];

const chartPeaks = [
  { name: "Mardi Himal", height: 5587 },
  { name: "Hiunchuli", height: 6441 },
  { name: "Nilgiri South", height: 6839 },
  { name: "Nilgiri Central", height: 6940 },
  { name: "Machhapuchhre", height: 6993 },
  { name: "Nilgiri North", height: 7061 },
  { name: "Annapurna South", height: 7219 },
  { name: "Baraha Chuli", height: 7647 },
  { name: "Annapurna I", height: 8091 },
  {
    name: "Dhaulagiri I",
    height: 8167,
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
              Encountered on the Muktinath Tour.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-4xl font-manrope text-sm leading-7 text-white/45">
            From the Annapurna massif to the immense summit of Dhaulagiri, the
            Muktinath helicopter route reveals some of Nepal&apos;s most
            impressive Himalayan peaks above the Kali Gandaki Valley.
          </p>
        </div>

        {/* PEAK CHART */}
        <div className="relative mt-10 overflow-x-auto rounded-2xl border border-white/10 bg-[#031426] px-4 pb-4 pt-6 md:px-6 md:pb-5 md:pt-8">
          <div className="relative h-[250px] min-w-[820px] md:h-[290px]">
            {/* GRID */}
            <div className="absolute inset-x-0 top-[18%] border-t border-dashed border-white/10" />
            <div className="absolute inset-x-0 top-[42%] border-t border-dashed border-white/10" />
            <div className="absolute inset-x-0 top-[67%] border-t border-dashed border-white/10" />

            <span className="absolute left-0 top-[15%] font-manrope text-[10px] text-[#dca41f]">
              8,000 m
            </span>

            <span className="absolute left-0 top-[39%] font-manrope text-[10px] text-white/25">
              7,000 m
            </span>

            <span className="absolute left-0 top-[64%] font-manrope text-[10px] text-white/25">
              6,000 m
            </span>

            <div className="absolute inset-x-4 bottom-0 flex h-[90%] items-end gap-1">
              {chartPeaks.map((peak, index) => {
                const minHeight = 5000;
                const maxHeight = 8167;

                const normalized =
                  ((peak.height - minHeight) / (maxHeight - minHeight)) * 68 +
                  22;

                return (
                  <div
                    key={peak.name}
                    className="relative flex h-full flex-1 items-end justify-center"
                  >
                    {/* PEAK LABEL */}
                    <span
                      className={`absolute left-1/2 z-10 -translate-x-1/2 whitespace-nowrap font-manrope text-[8px] font-bold uppercase md:text-[9px] ${
                        peak.featured
                          ? "text-[#efb01f]"
                          : "text-white/45"
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
                      className={`relative w-full max-w-[130px] transition duration-500 hover:opacity-100 ${
                        peak.featured
                          ? "bg-[#efb01f]"
                          : "bg-gradient-to-t from-[#04376d] to-[#0a69aa]"
                      }`}
                      style={{
                        height: `${normalized}%`,
                        clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
                        opacity: peak.featured ? 1 : 0.68 + index * 0.025,
                      }}
                    />

                    <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1 rounded-full bg-white/55" />
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
              className={`group rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
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
                <span className="mt-4 inline-flex rounded-full bg-white/5 px-3 py-1 font-manrope text-[10px] text-white/35">
                  {peak.tag}
                </span>
              )}
            </article>
          ))}
        </div>

        <p className="mt-5 text-center font-manrope text-xs text-white/25">
          Visibility of individual peaks depends on the departure point,
          weather, cloud cover, flight route, and passenger seat position.
        </p>
      </div>
    </section>
  );
}