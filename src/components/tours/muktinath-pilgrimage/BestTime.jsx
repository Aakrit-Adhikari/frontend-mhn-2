import Image from "next/image";

const seasons = [
  {
    name: "Spring",
    months: "February–May",
    reliability: "Very High",
    visibility: "Excellent",
    temperature: "-3°C to +8°C",
    status: "Most Recommended",
    statusClass: "bg-[#2f8f57] text-white",
    image: "/images/muktinath-pilgrimage/muktinath-gallary1.png",
    description:
      "Spring offers frequent flying windows and generally stable weather. Rhododendron forests bloom across the Annapurna foothills, while the landscape changes dramatically into the dry Mustang Valley beyond the ridge.",
    booking:
      "For departures between March and May, booking 4–6 weeks in advance is recommended.",
  },
  {
    name: "Autumn",
    months: "September–November",
    reliability: "Very High",
    visibility: "Best",
    temperature: "-5°C to +5°C",
    status: "Best Visibility",
    statusClass: "bg-[#2f8f57] text-white",
    image: "/images/muktinath-pilgrimage/muktinath-gallary2.png",
    description:
      "After the monsoon clears, Dhaulagiri, Annapurna and the Nilgiri massif often appear in exceptional detail. The trekking trails around Ghorepani, Poon Hill and the Annapurna Circuit are also lively during this season.",
    booking:
      "Autumn is a popular travel season, so booking 3–4 weeks ahead is recommended.",
  },
  {
    name: "Monsoon",
    months: "July–August",
    reliability: "Low",
    visibility: "Variable",
    temperature: "Cool and humid",
    status: "Possible but Challenging",
    statusClass: "bg-[#d98a1b] text-white",
    image: "/images/muktinath-pilgrimage/muktinath-gallary3.png",
    description:
      "Mustang lies within the Himalayan rain-shadow area and receives less rainfall than Pokhara. However, the helicopter must cross the Annapurna range, where cloud cover can frequently block the route.",
    booking:
      "Early-morning departures before 7:00 AM provide the best chance of flying, although cancellations and rescheduling are more common.",
  },
  {
    name: "Winter",
    months: "December–January",
    reliability: "Moderate",
    visibility: "Excellent on Clear Days",
    temperature: "-15°C to -20°C",
    status: "Cold but Possible",
    statusClass: "bg-[#ef3434] text-white",
    image: "/images/muktinath-pilgrimage/muktinath-gallary4.png",
    description:
      "Muktinath may be covered in snow, including the temple paths, plateau and 108 sacred water taps. Clear winter days can provide outstanding mountain visibility, but extreme cold and wind may reduce temple ground time.",
    booking:
      "Winter flights are suitable for well-prepared pilgrims, subject to daily weather, snow and ground-condition assessments.",
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
            When to fly to Muktinath — and what{" "}
            <span className="text-[#e0a326]">to expect.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl font-manrope text-sm leading-7 text-slate-500">
            Spring and autumn generally provide the most dependable flying
            conditions, while monsoon and winter departures require greater
            flexibility.
          </p>
        </div>

        {/* SEASON CARDS */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {seasons.map((season) => (
            <article
              key={season.name}
              className="group relative min-h-[450px] overflow-hidden rounded-[22px]"
            >
              <Image
                src={season.image}
                alt={`${season.name} season during the Muktinath helicopter tour`}
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
            Himalayan weather can change quickly in every season. Departure
            time, route, temple ground time and flight completion remain subject
            to visibility, wind, cloud cover, snow conditions and the
            pilot&apos;s operational assessment.
          </p>
        </div>
      </div>
    </section>
  );
}