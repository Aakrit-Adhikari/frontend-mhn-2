// src/components/rescue/annapurna/AnnapurnaOverview.jsx

const trustItems = [
  "Since 2009",
  "10,000+ Flights",
  "Zero Fatal Accidents",
  "<5 Min Dispatch",
  "CAAN Certified",
  "AS 350 B3e Fleet",
];

const highlights = [
  "Full-time emergency dispatch operation throughout the Annapurna Conservation Area.",
  "Quick dispatch from Kathmandu or Pokhara from anywhere within hours.",
  "High-altitude helicopter flights are operated by experienced mountain aviators.",
  "Operation is certified by the Civil Aviation Authority of Nepal (CAAN).",
  "Paramedical care is provided en route to the hospital during air evacuation.",
  "In-flight oxygen cylinder and complete first-aid kit are carried on the aircraft.",
  "Safe landing operations in high-altitude points such as Annapurna Base Camp, Thorong La Pass, Muktinath Temple and Mardi Himal Base Camp.",
  "Direct hospital transfers to tertiary-care hospitals in Pokhara and Kathmandu.",
];

export default function AnnapurnaOverview() {
  return (
    <section id="overview" className="scroll-mt-[123px]">
      {/* Trust bar */}
      <div className="border-b border-[#d6d8d7] bg-[#f6f3ed]">
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
          <div className="max-w-[900px]">
            <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
              — Overview
            </p>

            <h2 className="mt-4 max-w-[900px] font-fraunces text-[38px] font-semibold leading-[1.04] tracking-[-0.03em] text-[#071825] sm:text-[48px] lg:text-[58px]">
              Overview of Annapurna Helicopter Rescue Operations
            </h2>

            <div className="mt-6 max-w-[800px] space-y-5 font-manrope text-[12px] leading-[1.8] text-[#46545f] sm:text-[13px]">
              <p>
                The Annapurna region is defined by extreme altitude, rapidly
                changing weather and remote trekking routes where medical
                emergencies can become critical quickly. Annapurna helicopter
                rescue provides emergency evacuation from locations that are
                difficult or impossible to reach safely by road or on foot.
              </p>

              <p>
                Rescue operations may be required above 4,000 metres at
                Annapurna Base Camp, Thorong La Pass, Tilicho, Mardi Himal,
                Manang and surrounding high-altitude corridors. At these
                elevations, aircraft performance, payload, landing conditions
                and weather must be assessed carefully before every dispatch.
              </p>

              <p>
                Mountain Helicopters Nepal coordinates each rescue with the
                patient, guide, trekking agency, insurer, medical team and
                aviation authorities. Specialized high-altitude aircraft and
                experienced mountain pilots are used to support safe extraction
                and onward hospital transfer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="bg-[#061523] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#f2a10d]">
            — Operational Highlights
          </p>

          <h2 className="mt-4 max-w-[1100px] font-fraunces text-[38px] font-semibold leading-[1.04] tracking-[-0.03em] text-[#f6f2ea] sm:text-[48px] lg:text-[58px]">
            Highlights of Rescue Operation in Annapurna Area
          </h2>

          <div className="mt-8 grid gap-x-14 gap-y-4 lg:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 font-manrope text-[11px] leading-[1.75] text-white/78 sm:text-[12px]"
              >
                <span className="mt-[8px] h-[5px] w-[5px] shrink-0 bg-[#f2a10d]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}