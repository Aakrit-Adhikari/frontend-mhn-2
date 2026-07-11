
const trustItems = [
  "Since 2009",
  "10,000+ Flights",
  "Zero Fatal Accidents",
  "<5 Min Dispatch",
  "CAAN Certified",
  "AS 350 B3e Fleet",
];

const highlights = [
  "24/7 emergency dispatch coordination across Langtang National Park, including Syabrubesi, Lama Hotel, Ghoda Tabela, Langtang Village and Kyanjin Gompa.",
  "Rapid helicopter dispatch from Kathmandu for urgent Langtang Valley rescue cases when weather, aircraft position and landing access permit.",
  "High-altitude rescue operations across Tserko Ri approaches, Langshisha Kharka, Gosaikunda routes and other remote mountain terrain.",
  "Operations are coordinated under Civil Aviation Authority of Nepal requirements, with the pilot making the final safety decision.",
  "Local guides, lodges, trekking agencies and field contacts assist with patient location verification and preparation of suitable pickup points.",
  "Onboard support may include oxygen, first-aid equipment, stretcher configuration and medical coordination according to the patient’s condition.",
  "Landing operations are planned for challenging alpine points such as Kyanjin Gompa, upper Langtang Valley and nearby ridge or helipad locations.",
  "Direct patient transfer can be coordinated to suitable hospitals and medical facilities in Kathmandu after extraction.",
];

function HighlightItem({ children }) {
  return (
    <li className="flex items-start gap-3 font-manrope text-[11px] leading-[1.8] text-white/80 sm:text-[12px]">
      <span className="mt-[8px] h-[5px] w-[5px] shrink-0 bg-[#f2a10d]" />
      <span>{children}</span>
    </li>
  );
}

export default function LangtangOverview() {
  return (
    <section id="overview" className="scroll-mt-[123px]">
      {/* Trust bar */}
      <div className="border-b border-[#d7d9d7] bg-[#f6f3ed]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 sm:grid-cols-3 sm:px-8 lg:grid-cols-6 lg:px-12 xl:px-[80px] 2xl:px-[125px]">
          {trustItems.map((item, index) => (
            <div
              key={item}
              className={`flex min-h-[74px] items-center justify-center px-3 text-center ${
                index !== trustItems.length - 1
                  ? "lg:border-r lg:border-[#d7a03d]"
                  : ""
              }`}
            >
              <span className="font-manrope text-[9px] font-bold uppercase tracking-[0.2em] text-[#071825] sm:text-[10px]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Overview */}
      <div className="bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-[940px]">
            <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
              — Overview
            </p>

            <h2 className="mt-4 max-w-[1050px] font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
              Langtang Helicopter Rescue Service Overview
            </h2>

            <div className="mt-6 max-w-[840px] space-y-5 font-manrope text-[11px] leading-[1.8] text-[#46545f] sm:text-[12px]">
              <p>
                The Langtang region combines high altitude, remote trails and
                rapidly changing mountain weather. When a patient cannot
                descend safely by foot or reach road-based medical care in
                time, helicopter rescue can provide the fastest route out of
                the valley.
              </p>

              <p>
                Emergency evacuation may be coordinated from Kyanjin Gompa,
                Langtang Village, Ghoda Tabela, Lama Hotel, Syabrubesi, Tserko
                Ri approaches, Gosaikunda routes and other accessible points
                across the wider Langtang region.
              </p>

              <p>
                Each rescue is assessed according to the patient&apos;s
                condition, altitude, exact location, weather, landing access,
                aircraft performance and onward medical requirements. The
                pilot always makes the final go or no-go decision.
              </p>

              <p>
                Mountain Helicopters Nepal coordinates with guides, lodges,
                trekking agencies, insurers, aviation authorities and receiving
                hospitals to support safe extraction and hospital transfer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div
        id="highlights"
        className="scroll-mt-[123px] bg-[#061523] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
      >
        <div className="mx-auto max-w-[1440px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#f2a10d]">
            — Operational Highlights
          </p>

          <h2 className="mt-4 max-w-[1100px] font-fraunces text-[40px] font-semibold leading-[1.04] tracking-[-0.03em] text-[#f6f2ea] sm:text-[50px] lg:text-[60px]">
            Highlights of our Rescue Operation in Langtang Area
          </h2>

          <div className="mt-9 grid gap-x-16 gap-y-5 lg:grid-cols-2">
            {highlights.map((item) => (
              <HighlightItem key={item}>{item}</HighlightItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}