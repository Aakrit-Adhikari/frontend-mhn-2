// src/components/rescue/tilicho/TilichoOverviewHighlights.jsx

const trustItems = [
  "Since 2009",
  "10,000+ Flights",
  "Zero Fatal Accidents",
  "<5 Min Dispatch",
  "CAAN Certified",
  "AS 350 B3e Fleet",
];

const highlights = [
  "Daytime emergency dispatch coordination across the Tilicho Lake and wider Manang region, including Manang, Khangsar, Shree Kharka, Tilicho Base Camp and nearby trekking routes.",
  "Rapid helicopter dispatch can be coordinated from Kathmandu or Pokhara according to aircraft position, patient urgency, weather and the earliest safe flying window.",
  "High-altitude rescue operations may be conducted around Tilicho Base Camp, Tilicho Lake, Mesokanto La approaches and adjoining Annapurna circuit trails.",
  "Every mission is operated under Civil Aviation Authority of Nepal requirements, with the pilot making the final safety decision.",
  "Dispatch maintains continuous communication with trekking agencies, guides, lodges, local contacts and rescue coordinators to verify the patient’s condition and safest available pickup point.",
  "Patient support may include onboard oxygen, first-aid equipment, stretcher preparation and medical coordination according to the patient’s condition.",
];

function TrustItem({ item, index }) {
  return (
    <div
      className={`flex min-h-[88px] items-center justify-center px-4 text-center ${
        index !== trustItems.length - 1
          ? "lg:border-r lg:border-[#d7a03d]"
          : ""
      }`}
    >
      <span className="font-manrope text-[9px] font-bold uppercase tracking-[0.2em] text-[#071825] sm:text-[10px]">
        {item}
      </span>
    </div>
  );
}

function HighlightItem({ children }) {
  return (
    <li className="group flex items-start gap-4 font-manrope text-[12px] leading-[1.8] text-white/80 sm:text-[13px]">
      <span className="mt-[9px] h-[5px] w-[5px] shrink-0 bg-[#f2a10d] transition-transform duration-300 group-hover:scale-150" />
      <span className="transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
    </li>
  );
}

export default function TilichoOverviewHighlights() {
  return (
    <section id="overview" className="scroll-mt-[123px]">
      {/* Trust bar */}
      <div className="border-b border-[#d7d9d7] bg-[#f6f3ed]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 sm:grid-cols-3 sm:px-8 lg:grid-cols-6 lg:px-12 xl:px-[80px] 2xl:px-[125px]">
          {trustItems.map((item, index) => (
            <TrustItem key={item} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Dark operational overview */}
      <div
        id="highlights"
        className="scroll-mt-[123px] bg-[#061523] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
      >
        <div className="mx-auto max-w-[1440px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#f2a10d]">
            — Operational Highlights
          </p>

          <h2 className="mt-5 max-w-[1220px] font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#f6f2ea] sm:text-[50px] lg:text-[60px]">
            Rescue Operation Overview in Tilicho Area
          </h2>

          <div className="mt-10 grid gap-x-16 gap-y-6 lg:grid-cols-2">
            {highlights.map((item) => (
              <HighlightItem key={item}>{item}</HighlightItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}