import Image from "next/image";

const seasons = [
  {
    name: "Spring",
    months: "March–May",
    reliability: "Very High",
    visibility: "Excellent",
    temperature: "-2°C to 12°C",
    status: "Highly Recommended",
    statusClass: "bg-[#2f8f57] text-white",
    image: "/images/langtang-valley/langtang-gallary.jpg",
    description:
      "Spring is one of the best seasons for the Langtang helicopter tour. Early mornings often provide clear skies and excellent mountain visibility, while the forests below come alive with colourful rhododendron blooms. Langtang Lirung, Ganesh Himal and Dorje Lakpa are often clearly visible during stable weather.",
    booking:
      "Reserve your flight 3–4 weeks in advance, especially during April and May.",
  },
  {
    name: "Autumn",
    months: "September–November",
    reliability: "Very High",
    visibility: "Best",
    temperature: "Cool to cold",
    status: "Best Visibility",
    statusClass: "bg-[#2f8f57] text-white",
    image: "/images/langtang-valley/langtang-gallary1.jpg",
    description:
      "Autumn is considered the most reliable season for the Langtang helicopter tour. After the monsoon rains, the atmosphere becomes clean and clear, producing exceptional views of Langtang Lirung, Ganesh Himal, Dorje Lakpa and the surrounding Himalayan ranges.",
    booking:
      "Autumn is the busiest season, so advance booking is strongly recommended.",
  },
  {
    name: "Monsoon",
    months: "June–August",
    reliability: "Low",
    visibility: "Variable",
    temperature: "Cool and humid",
    status: "Weather Dependent",
    statusClass: "bg-[#d98a1b] text-white",
    image: "/images/langtang-valley/langtang-gallary2.jpg",
    description:
      "The monsoon brings rain, cloud cover and reduced visibility across the Langtang region. Flights may still operate during clear early-morning windows, but delays, cancellations and rescheduling are more common. The valley becomes especially green, and waterfalls flow at their strongest after rainfall.",
    booking:
      "Keep your travel dates flexible and remain available for an early-morning departure.",
  },
  {
    name: "Winter",
    months: "December–February",
    reliability: "Moderate",
    visibility: "Excellent on Clear Days",
    temperature: "Often below freezing",
    status: "Cold but Scenic",
    statusClass: "bg-[#ef3434] text-white",
    image: "/images/langtang-valley/langtang-gallary3.jpg",
    description:
      "Winter brings cold temperatures and possible snowfall around Kyanjin Gompa at 3,870 metres. However, clear winter mornings can provide remarkable views of snow-covered peaks, glaciers and the upper Langtang Valley. Ground time may be reduced when wind or snow conditions become severe.",
    booking:
      "Bring thermal layers, a windproof jacket, gloves, a beanie, sunglasses and suitable winter footwear.",
  },
];

export default function BestTime() {
  return (
    <section className="bg-white px-5 py-16 md:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d99a1b]">
            <span className="h-px w-7 bg-[#d99a1b]" />
            Seasons
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#08294d] md:text-4xl">
            When to fly to Langtang — and what{" "}
            <span className="text-[#e0a326]">to expect.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl font-manrope text-sm leading-7 text-slate-500">
            Langtang helicopter tours can operate throughout the year, although
            spring and autumn generally offer the clearest skies, most reliable
            flying conditions and best Himalayan visibility.
          </p>
        </div>

        {/* SEASON CARDS */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {seasons.map((season) => (
            <article
              key={season.name}
              className="group relative min-h-[470px] overflow-hidden rounded-[22px]"
            >
              <Image
                src={season.image}
                alt={`${season.name} season during the Langtang helicopter tour`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b35]/90 via-[#061b35]/25 to-[#061b35]/5" />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-[#061b35]/0 transition-colors duration-500 group-hover:bg-[#061b35]/10" />

              {/* CONTENT CARD */}
              <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/20 bg-white/80 px-5 py-5 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-white/90 md:inset-x-7 md:bottom-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-fraunces text-xl font-semibold text-[#0a4d83]">
                      {season.name}
                    </h3>

                    <p className="mt-1 font-manrope text-xs font-semibold text-[#d99a1b]">
                      {season.months}
                    </p>
                  </div>

                  <span
                    className={`rounded-sm px-3 py-1.5 font-manrope text-[9px] font-bold uppercase tracking-[0.12em] ${season.statusClass}`}
                  >
                    {season.status}
                  </span>
                </div>

                {/* SEASON STATS */}
                <div className="mt-4 grid grid-cols-3 gap-3 border-y border-slate-200 py-4">
                  <div>
                    <p className="font-manrope text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Reliability
                    </p>

                    <p className="mt-1 font-manrope text-xs font-semibold leading-5 text-[#25384b]">
                      {season.reliability}
                    </p>
                  </div>

                  <div>
                    <p className="font-manrope text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Visibility
                    </p>

                    <p className="mt-1 font-manrope text-xs font-semibold leading-5 text-[#25384b]">
                      {season.visibility}
                    </p>
                  </div>

                  <div>
                    <p className="font-manrope text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Temperature
                    </p>

                    <p className="mt-1 font-manrope text-xs font-semibold leading-5 text-[#25384b]">
                      {season.temperature}
                    </p>
                  </div>
                </div>

                <p className="mt-4 font-manrope text-xs leading-6 text-slate-600">
                  {season.description}
                </p>

                <div className="mt-4 border-l-2 border-[#e0a326] pl-3">
                  <p className="font-manrope text-[11px] leading-5 text-slate-500">
                    <span className="font-bold text-[#0a4d83]">
                      Booking advice:
                    </span>{" "}
                    {season.booking}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* WEATHER NOTE */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 text-center md:px-8">
          <p className="font-manrope text-xs leading-6 text-slate-500">
            All Langtang helicopter flights are weather dependent. Departure
            time, route, landing approval, ground duration and flight completion
            remain subject to visibility, wind, cloud cover, rainfall, snow
            conditions and the pilot&apos;s final operational assessment.
          </p>
        </div>
      </div>
    </section>
  );
}