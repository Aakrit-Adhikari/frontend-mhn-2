// src/components/rescue/Coverage.jsx

const coveragePoints = [
  {
    name: "Muktinath & Lower Mustang",
    time: "1h 45m",
    left: "33%",
    top: "40%",
  },
  {
    name: "Annapurna Region",
    time: "1h 15m",
    left: "40%",
    top: "53%",
  },
  {
    name: "Mardi Himal",
    time: "1h 10m",
    left: "45%",
    top: "62%",
  },
  {
    name: "Tilicho",
    time: "2h",
    left: "47%",
    top: "47%",
  },
  {
    name: "Gosaikunda",
    time: "1h 15m",
    left: "59%",
    top: "57%",
  },
  {
    name: "Langtang Region",
    time: "1h 20m",
    left: "63%",
    top: "45%",
  },
  {
    name: "Gokyo Valley",
    time: "1h 45m",
    left: "72%",
    top: "55%",
  },
  {
    name: "Kala Patthar / Gorak Shep",
    time: "1h 45m",
    left: "75%",
    top: "64%",
  },
  {
    name: "Everest Base Camp",
    time: "1h 50m",
    left: "79%",
    top: "60%",
  },
  {
    name: "Makalu Base Camp",
    time: "2h 15m",
    left: "85%",
    top: "70%",
  },
];

function CoveragePoint({ name, time, left, top }) {
  return (
    <div
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{ left, top }}
    >
      <div className="flex flex-col items-center">
        <span className="mb-2 whitespace-nowrap text-center font-manrope text-[10px] font-bold uppercase leading-[1.3] tracking-[0.16em] text-[#e8edf1] lg:text-[11px]">
          {name}
        </span>

        <span className="h-3 w-3 rounded-full bg-[#f4a10b] shadow-[0_0_18px_rgba(244,161,11,0.35)]" />

        <span className="mt-2 whitespace-nowrap font-manrope text-[9px] font-medium tracking-[0.05em] text-[#84909d] lg:text-[10px]">
          {time}
        </span>
      </div>
    </div>
  );
}

export default function Coverage() {
  return (
    <section
      id="coverage"
      className="scroll-mt-[125px] overflow-hidden bg-[#061523] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[980px]">
          <p className="font-manrope text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#f4a10b]">
            — Operational Coverage
          </p>

          <h2 className="mt-4 font-fraunces text-[36px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#f5f2ec] sm:text-[46px] lg:text-[58px]">
            Where we fly{" "}
            <span className="italic text-[#f4a10b]">
              when the call comes.
            </span>
          </h2>
        </div>

        {/* Desktop operational map */}
        <div className="relative mt-12 hidden h-[520px] lg:block">
          <svg
            viewBox="0 0 1200 520"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <path
              d="
                M120 250
                L205 185
                L315 175
                L400 145
                L490 160
                L590 125
                L690 145
                L795 180
                L895 195
                L1000 225
                L1080 260
                L1065 330
                L1000 365
                L900 378
                L805 405
                L700 390
                L605 420
                L500 405
                L400 420
                L300 395
                L220 360
                L145 310
                Z
              "
              fill="#0a1b2e"
              stroke="#a36d0b"
              strokeWidth="2"
            />

            <path
              d="
                M175 278
                L300 235
                L415 222
                L585 205
                L740 220
                L910 240
                L1020 278
              "
              fill="none"
              stroke="#162a40"
              strokeWidth="20"
              strokeLinecap="round"
            />

            <path
              d="
                M195 310
                L335 280
                L480 270
                L610 252
                L780 268
                L935 280
                L1030 310
              "
              fill="none"
              stroke="#14263a"
              strokeWidth="13"
              strokeLinecap="round"
            />

            <path
              d="
                M570 420
                C590 390, 610 370, 628 343
              "
              fill="none"
              stroke="#7a4e12"
              strokeWidth="1.5"
              strokeDasharray="5 6"
            />

            <circle cx="570" cy="420" r="6" fill="#e56f09" />
          </svg>

          <div className="absolute left-[47.5%] top-[84%] -translate-x-1/2 text-center">
            <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.14em] text-[#7f8b97]">
              Kathmandu Ops
            </p>
          </div>

          {coveragePoints.map((point) => (
            <CoveragePoint key={point.name} {...point} />
          ))}

          <p className="absolute bottom-3 right-0 font-manrope text-[9px] uppercase tracking-[0.08em] text-[#667584]">
            Kathmandu Ops Centre :: 27.6975°N, 85.3592°E
          </p>
        </div>

        {/* Mobile and tablet version */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:hidden">
          {coveragePoints.map((point, index) => (
            <article
              key={point.name}
              className="flex items-center justify-between border border-white/10 bg-[#0a1b2e] px-4 py-4"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#f4a10b]/50 font-manrope text-[9px] font-bold text-[#f4a10b]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="font-manrope text-[10px] font-bold uppercase leading-[1.4] tracking-[0.14em] text-white">
                    {point.name}
                  </h3>

                  <p className="mt-1 font-manrope text-[9px] uppercase tracking-[0.1em] text-[#82909e]">
                    From Kathmandu Ops
                  </p>
                </div>
              </div>

              <span className="ml-4 shrink-0 font-manrope text-[11px] font-semibold text-[#f4a10b]">
                {point.time}
              </span>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 font-manrope text-[10px] leading-5 text-[#8996a3] sm:grid-cols-3">
          <p>
            Flight times are approximate and depend on aircraft staging,
            weather, altitude and required fuel stops.
          </p>

          <p>
            High-altitude evacuation remains subject to the pilot&apos;s final
            safety assessment and landing conditions.
          </p>

          <p>
            Pickup can also be coordinated from nearby lodges, fields,
            ridgelines and established regional helipads.
          </p>
        </div>
      </div>
    </section>
  );
}