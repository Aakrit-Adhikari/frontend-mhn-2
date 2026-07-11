"use client";

const phoneNumber = "9712082949";
const message =
  "Hi — I have a quick question about a Mountain Helicopters flight.";

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message
)}`;

const aircraftImage1 = "/images/fleet/fleet.png";
const aircraftImage2 = "/images/fleet/fleet2.jpg";

const airbusFeatures = [
  "Dual flight controls",
  "Configurable for charter, sightseeing, cargo, or medical evacuation",
  "Wide-glass cabin design",
  "Maintained in-house by CAAN-certified engineers",
];

const bellFeatures = [
  "Dual flight controls",
  "Wide-glass cabin design",
  "Configurable for charter, sightseeing, cargo, or medical evacuation",
  "Maintained in-house by CAAN-certified engineers",
];

const idealForAirbus = [
  "Everest Base Camp",
  "Kailash Darshan",
  "Langtang Valley",
  "Charter Flights",
  "Rescue Operations",
];

const idealForBell = [
  "Annapurna Base Camp",
  "Scenic Mountain Flight",
  "Muktinath Pilgrimage",
  "Group Charter",
  "VIP Experiences",
];

export default function Aircraft() {
  return (
    <section
      id="fleet"
      className="bg-white px-6 py-20 md:px-12 lg:px-[125px] lg:py-[80px]"
    >
      <div className="mx-auto max-w-[1190px]">
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="relative min-h-[520px] overflow-hidden bg-[#e8edf1]">
            <img
              src={aircraftImage1}
              alt="Airbus AS350 B3e helicopter"
              className="h-full w-full object-cover"
            />

            <span className="absolute left-6 top-6 bg-[#f5b82e] px-4 py-2 font-manrope text-[0.56rem] font-bold uppercase tracking-[0.22em] text-[#071825]">
              Flagship Aircraft
            </span>
          </div>

          <div className="flex items-center bg-white px-8 py-12 md:px-12 lg:px-[58px]">
            <div className="w-full max-w-[480px]">
              <p className="mb-4 font-manrope text-[0.58rem] font-bold uppercase tracking-[0.28em] text-[#f5a623]">
                The Altitude Record Holder
              </p>

              <h2 className="mb-4 font-fraunces text-[42px] font-medium leading-[0.95] tracking-[-0.04em] text-[#0b2238]">
                9N-ALD Airbus AS 350 B3e (H125)
              </h2>

              <p className="mb-7 font-manrope text-[15px] font-light leading-7 text-[#5d6b77]">
                The H125 is the same airframe that landed on Everest&apos;s
                summit in 2005, and it&apos;s still the aircraft most operators
                in Nepal reach for when altitude is the problem to solve.
                9N-ALD runs on a single Arriel 2D engine with enough reserve
                power to handle hot, thin air without flinching, and the
                cabin&apos;s built wide enough that all five passenger seats get
                a real view, not just the ones by the window.
              </p>

              <FeatureBlock title="Key Capabilities" features={airbusFeatures} />

              <SpecificationBar />

              <IdealFor items={idealForAirbus} />

              <ActionButtons />
            </div>
          </div>

          <div className="order-4 flex items-center bg-[#f5f7f9] px-8 py-12 md:px-12 lg:order-3 lg:px-[58px]">
            <div className="w-full max-w-[480px]">
              <p className="mb-4 font-manrope text-[0.58rem] font-bold uppercase tracking-[0.28em] text-[#f5a623]">
                The Panoramic Cruiser
              </p>

              <h2 className="mb-4 font-fraunces text-[42px] font-medium leading-[0.95] tracking-[-0.04em] text-[#0b2238]">
                9N-AOP Airbus 
              </h2>

              <p className="mb-7 font-manrope text-[15px] font-light leading-7 text-[#5d6b77]">
               9N-AOP is the newest addition to our fleet, delivered to Nepal in early 2025. It's a five-seat Airbus, built for the same high-altitude flying that's defined our fleet since 2009, 
               and it joins 9N-ALD in giving us the range to run charter, sightseeing, and rescue flights back to back without downtime between them.

              </p>

              <FeatureBlock title="Key Capabilities" features={bellFeatures} />

              <SpecificationBar />

              <IdealFor items={idealForBell} />

              <ActionButtons />
            </div>
          </div>

          <div className="relative order-3 min-h-[560px] overflow-hidden bg-[#e8edf1] lg:order-4">
            <img
              src={aircraftImage2}
              alt="Bell 407GXi helicopter"
              className="h-full w-full object-cover"
            />

            <span className="absolute left-6 top-6 bg-[#f5b82e] px-4 py-2 font-manrope text-[0.56rem] font-bold uppercase tracking-[0.22em] text-[#071825]">
              Best for Groups
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureBlock({ title, features }) {
  return (
    <div className="mb-7">
      <h3 className="mb-4 font-manrope text-[10px] font-bold uppercase tracking-[0.22em] text-[#0b2238]">
        {title}
      </h3>

      <div className="grid gap-x-7 gap-y-3 sm:grid-cols-2">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-2">
            <span className="mt-[3px] font-manrope text-[12px] font-bold text-[#f5a623]">
              ✓
            </span>

            <span className="font-manrope text-[13px] font-light leading-5 text-[#5d6b77]">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpecificationBar() {
  return (
    <details className="mb-6 border-y border-[#d9e1e8] py-4">
      <summary className="flex cursor-pointer list-none items-center justify-between font-manrope text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[#0b2238] [&::-webkit-details-marker]:hidden">
        Full Specifications
        <span className="text-[10px]">⌄</span>
      </summary>

      <div className="mt-4 grid grid-cols-2 gap-4 font-manrope text-[12px] text-[#5d6b77]">
        <div>
          <span className="font-bold text-[#0b2238]">Engine:</span> Turbine
        </div>

        <div>
          <span className="font-bold text-[#0b2238]">Mission:</span> Mountain
          operations
        </div>
      </div>
    </details>
  );
}

function IdealFor({ items }) {
  return (
    <div className="mb-7">
      <h3 className="mb-3 font-manrope text-[10px] font-bold uppercase tracking-[0.22em] text-[#0b2238]">
        Ideal For
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="bg-[#eaf0f5] px-3 py-2 font-manrope text-[11px] font-bold text-[#0b2238]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href="/contact"
        className="inline-flex h-[42px] items-center justify-center bg-[#f5b82e] px-6 font-manrope text-[0.68rem] font-bold uppercase text-[#071825] transition hover:bg-[#071825] hover:text-white"
      >
        Book this aircraft +
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative isolate flex h-[42px] w-[180px] items-center justify-center gap-2 overflow-hidden border border-[#0b2238] bg-transparent font-manrope text-[0.68rem] font-bold uppercase text-[#0b2238] transition-colors duration-300"
      >
        <span className="absolute inset-0 z-0 -translate-x-[101%] bg-[#0b2238] transition-transform duration-500 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0" />

        <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
          <WhatsappIcon />
          Inquiry
        </span>
      </a>
    </div>
  );
}

function WhatsappIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="h-4 w-4 fill-current"
    >
      <path d="M16.04 3.2A12.76 12.76 0 0 0 5.1 22.52L3.2 29l6.65-1.78A12.76 12.76 0 1 0 16.04 3.2Zm0 23.2a10.4 10.4 0 0 1-5.3-1.45l-.38-.23-3.94 1.05 1.05-3.84-.25-.4a10.39 10.39 0 1 1 8.82 4.87Zm5.7-7.8c-.31-.16-1.84-.9-2.13-1s-.49-.16-.7.16-.8 1-.98 1.18-.36.24-.67.08a8.5 8.5 0 0 1-2.5-1.54 9.33 9.33 0 0 1-1.72-2.13c-.18-.31 0-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55s-.7-1.68-.96-2.3c-.25-.6-.5-.52-.7-.53h-.6a1.15 1.15 0 0 0-.83.39 3.48 3.48 0 0 0-1.09 2.59 6.05 6.05 0 0 0 1.27 3.22 13.8 13.8 0 0 0 5.28 4.66 17.76 17.76 0 0 0 1.76.65 4.23 4.23 0 0 0 1.94.12 3.18 3.18 0 0 0 2.09-1.47 2.6 2.6 0 0 0 .18-1.47c-.08-.13-.29-.21-.6-.37Z" />
    </svg>
  );
}