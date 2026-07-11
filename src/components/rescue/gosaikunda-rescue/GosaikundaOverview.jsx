// src/components/rescue/gosaikunda/GosaikundaOverview.jsx

const trustItems = [
  "Since 2009",
  "10,000+ Flights",
  "Zero Fatal Accidents",
  "<5 Min Dispatch",
  "CAAN Certified",
  "AS 350 B3e Fleet",
];

const highlights = [
  "24/7 emergency dispatch coordination across the Gosaikunda and wider Langtang region.",
  "Rapid rescue deployment from Kathmandu when weather, aircraft position and landing access allow.",
  "High-altitude rescue flights operated by experienced mountain aviation professionals.",
  "Operations conducted under Civil Aviation Authority of Nepal requirements, with the pilot making the final safety decision.",
  "Patient support may include onboard oxygen, first-aid equipment and medical coordination during evacuation.",
  "Pickup operations coordinated from Gosaikunda Lake, Lauribina La, Laurebinayak, Cholang Pati, Dhunche and nearby trekking routes.",
  "Local guides, lodges, trekking agencies and field contacts assist with location verification and preparation of safe pickup points.",
  "Direct patient transfer can be coordinated to suitable hospitals and tertiary-care facilities in Kathmandu.",
];

function HighlightItem({ children }) {
  return (
    <li className="flex items-start gap-3 font-manrope text-[11px] leading-[1.8] text-white/80 sm:text-[12px]">
      <span className="mt-[8px] h-[5px] w-[5px] shrink-0 bg-[#f2a10d]" />
      <span>{children}</span>
    </li>
  );
}

export default function GosaikundaOverview() {
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
              Overview of Gosaikunda Helicopter Rescue Operations
            </h2>

            <div className="mt-6 max-w-[840px] space-y-5 font-manrope text-[11px] leading-[1.8] text-[#46545f] sm:text-[12px]">
              <p>
                The Gosaikunda area lies within Langtang National Park and
                combines high altitude, exposed mountain terrain and rapidly
                changing weather. These conditions can turn illness, injury or
                route delays into serious emergencies, especially when safe
                descent by foot is not possible.
              </p>

              <p>
                Helicopter rescue may be coordinated from Gosaikunda Lake,
                Lauribina La, Laurebinayak, Cholang Pati, Dhunche and other
                accessible points along the Gosaikunda and Langtang trekking
                corridors.
              </p>

              <p>
                Rescue operations above 4,000 metres require careful assessment
                of visibility, wind, temperature, aircraft payload, landing
                access and patient condition. High-altitude-capable aircraft
                and experienced mountain pilots are used according to the
                requirements of each mission.
              </p>

              <p>
                Mountain Helicopters Nepal coordinates with the patient, guide,
                trekking agency, insurer, aviation authorities and receiving
                hospital to support safe extraction and onward medical
                transfer.
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

          <h2 className="mt-4 max-w-[1150px] font-fraunces text-[40px] font-semibold leading-[1.04] tracking-[-0.03em] text-[#f6f2ea] sm:text-[50px] lg:text-[60px]">
            Highlights of Rescue Operation in Gosaikunda Area
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