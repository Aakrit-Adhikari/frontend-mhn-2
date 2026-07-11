import { CheckCircle2, XCircle } from "lucide-react";

const includes = [
  "Round-trip Airbus H125 helicopter flight between Kathmandu or Pokhara and Muktinath",
  "Hotel pickup and drop-off within Kathmandu or Pokhara city",
  "Annapurna Conservation Area Permit (ACAP)",
  "Domestic airport departure tax in Kathmandu or Pokhara",
  "Nepal Government VAT (13%)",
  "Passenger insurance during the helicopter operation",
  "Emergency oxygen cylinder and first-aid kit onboard",
  "Up to 60 minutes of ground time at Muktinath Temple for darshan, worship, and exploration",
  "CAAN-licensed pilots experienced in Himalayan and high-altitude operations",
  "Mandatory pre-flight safety and operational briefing",
];

const excludes = [
  "Personal travel and medical evacuation insurance, which are strongly recommended for high-altitude travel",
  "Meals and beverages at Muktinath; local teahouses are available near the temple",
  "Puja materials, which can be purchased near the temple complex",
  "Change of clothes after bathing beneath the 108 sacred water taps",
  "Porter assistance for elderly passengers or travellers with limited mobility",
  "Shaligram stones, souvenirs, and other religious items purchased at Muktinath",
  "Tips and gratuities for pilots, ground staff, porters, or local assistants",
];

const permitFees = [
  {
    category: "Foreign Nationals",
    npr: "NPR 3,000",
    usd: "Approximately USD 25",
  },
  {
    category: "SAARC Nationals",
    npr: "NPR 1,000",
    usd: "Approximately USD 8",
  },
  {
    category: "Children Under 10",
    npr: "Free",
    usd: "Permit card still issued",
  },
];

export default function InclusionsExclusions() {
  return (
    <section className="bg-white px-5 py-16 md:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* SECTION HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d99a1b]">
            <span className="h-px w-7 bg-[#d99a1b]" />
            What Your Flight Covers
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#08294d] md:text-4xl">
            Included. Excluded.{" "}
            <span className="text-[#e0a326]">Itemised.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl font-manrope text-sm leading-7 text-slate-500">
            Review what is covered in your Muktinath helicopter tour package
            and what you should arrange or carry separately before departure.
          </p>
        </div>

        {/* INCLUDES AND EXCLUDES */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* INCLUDED */}
          <div>
            <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[#d99a1b]">
              Included
            </h3>

            <div className="mt-5 space-y-4">
              {includes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    strokeWidth={1.8}
                    className="mt-0.5 shrink-0 text-[#0b7dd8]"
                  />

                  <p className="font-manrope text-sm leading-6 text-slate-500">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* NOT INCLUDED */}
          <div>
            <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Not Included
            </h3>

            <div className="mt-5 space-y-4">
              {excludes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <XCircle
                    size={16}
                    strokeWidth={1.7}
                    className="mt-0.5 shrink-0 text-slate-400"
                  />

                  <p className="font-manrope text-sm leading-6 text-slate-500">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* PORTER NOTE */}
            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-4">
              <p className="font-manrope text-xs leading-6 text-amber-800">
                Porter assistance can normally be arranged near the Muktinath
                helipad for approximately USD 5–10, depending on availability
                and the level of assistance required.
              </p>
            </div>
          </div>
        </div>

        {/* ACAP PERMIT CARD */}
        <div className="mt-10 overflow-hidden rounded-[24px] bg-[#061b35] px-5 py-8 md:px-8 md:py-10 lg:px-10">
          {/* PERMIT HEADING */}
          <div className="text-center">
            <p className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[#e0a326]">
              Permit Included in Your Flight
            </p>

            <h3 className="mt-3 font-fraunces text-2xl font-semibold text-white md:text-3xl">
              ACAP Permit
            </h3>

            <p className="mt-2 font-manrope text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
              Annapurna Conservation Area Permit
            </p>

            <p className="mx-auto mt-4 max-w-3xl font-manrope text-sm leading-6 text-white/50">
              The Muktinath helicopter route enters the Annapurna Conservation
              Area. Mountain Helicopters Nepal arranges the required ACAP
              documentation as part of the confirmed tour package.
            </p>
          </div>

          {/* PERMIT AUTHORITY */}
          <div className="mt-8 grid gap-5 border-y border-white/10 py-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h4 className="font-manrope text-sm font-medium text-white">
                  Annapurna Conservation Area Permit
                </h4>

                <span className="rounded-full border border-[#e0a326]/30 bg-[#e0a326]/10 px-3 py-1 font-manrope text-[9px] font-bold uppercase tracking-[0.14em] text-[#e0a326]">
                  ACAP
                </span>
              </div>

              <p className="mt-2 font-manrope text-xs leading-5 text-white/35">
                Issued for entry into the Annapurna Conservation Area
              </p>
            </div>

            <div className="text-left md:text-right">
              <p className="font-manrope text-sm font-bold text-[#e0a326]">
                Included
              </p>

              <p className="mt-1 font-manrope text-xs text-white/35">
                Processed with your booking
              </p>
            </div>
          </div>

          {/* ACAP FEE TABLE */}
          <div className="mt-8">
            <p className="font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[#e0a326]">
              Standard ACAP Permit Fees
            </p>

            <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
              {/* TABLE HEADER */}
              <div className="hidden grid-cols-[1fr_auto_auto] gap-6 border-b border-white/10 bg-white/[0.05] px-5 py-4 md:grid">
                <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.14em] text-white/35">
                  Passenger Category
                </p>

                <p className="min-w-[100px] text-right font-manrope text-[10px] font-bold uppercase tracking-[0.14em] text-white/35">
                  Fee
                </p>

                <p className="min-w-[170px] text-right font-manrope text-[10px] font-bold uppercase tracking-[0.14em] text-white/35">
                  Approximate Value
                </p>
              </div>

              {/* TABLE ROWS */}
              {permitFees.map((permit, index) => (
                <div
                  key={permit.category}
                  className={`grid gap-3 px-5 py-5 transition-colors duration-300 hover:bg-white/[0.04] md:grid-cols-[1fr_auto_auto] md:items-center md:gap-6 ${
                    index !== permitFees.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <div>
                    <p className="font-manrope text-sm font-medium text-white">
                      {permit.category}
                    </p>

                    {permit.category === "Children Under 10" && (
                      <p className="mt-1 font-manrope text-xs leading-5 text-white/35">
                        No entry fee is charged, but an individual permit card
                        is still issued.
                      </p>
                    )}
                  </div>

                  <div className="md:min-w-[100px] md:text-right">
                    <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.12em] text-white/30 md:hidden">
                      Fee
                    </p>

                    <p className="mt-1 font-manrope text-sm font-bold text-white md:mt-0">
                      {permit.npr}
                    </p>
                  </div>

                  <div className="md:min-w-[170px] md:text-right">
                    <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.12em] text-white/30 md:hidden">
                      Approximate Value
                    </p>

                    <p className="mt-1 font-manrope text-xs text-white/45 md:mt-0">
                      {permit.usd}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PERMIT ARRANGEMENT */}
          <div className="mt-8 grid gap-5 rounded-xl border border-[#e0a326]/20 bg-[#e0a326]/[0.06] px-5 py-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="font-manrope text-xs font-bold uppercase tracking-[0.16em] text-[#e0a326]">
                Permit Arrangement
              </p>

              <p className="mt-2 max-w-3xl font-manrope text-xs leading-6 text-white/45">
                Mountain Helicopters Nepal arranges the required ACAP
                documentation before departure, so passengers do not need to
                purchase the permit separately on the morning of the flight.
              </p>
            </div>

            <p className="font-manrope text-sm font-bold text-[#e0a326]">
              Included
            </p>
          </div>

          {/* IDENTIFICATION NOTE */}
          <p className="mt-7 text-center font-manrope text-xs leading-6 text-white/35">
            Carry your passport or valid government-issued identification.
            Passenger details may be required for ACAP processing, airport
            security, insurance, and flight documentation.
          </p>
        </div>

        {/* OPERATIONAL NOTE */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 md:px-7">
          <p className="font-manrope text-xs leading-6 text-slate-500">
            Inclusions may vary depending on whether the flight departs from
            Kathmandu or Pokhara, whether you book a private charter or shared
            flight, and the final package confirmed in your booking agreement.
            Permit fees and approximate currency conversions may change if the
            responsible authority revises its rates.
          </p>
        </div>
      </div>
    </section>
  );
}