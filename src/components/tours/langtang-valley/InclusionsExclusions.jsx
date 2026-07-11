import { CheckCircle2, XCircle } from "lucide-react";

const includes = [
  "Round-trip Airbus H125 helicopter flight between Kathmandu and Langtang",
  "Hotel pickup and drop-off within Kathmandu city",
  "Airport assistance at the Kathmandu Domestic Terminal",
  "Langtang National Park Entry Permit",
  "Kathmandu domestic airport departure taxes",
  "Nepal Government VAT (13%)",
  "Approximately 60–90 minutes of ground time at Kyanjin Gompa",
  "Breakfast at a local teahouse in Kyanjin Gompa",
  "Emergency oxygen cylinder and first-aid kit onboard",
  "Experienced and licensed Himalayan mountain pilot",
  "Mandatory pre-flight safety and operational briefing",
];

const excludes = [
  "Personal travel insurance",
  "Emergency medical evacuation insurance",
  "Warm and windproof clothing",
  "Sunglasses, gloves, beanie and other personal equipment",
  "Personal beverages or additional food beyond the included breakfast",
  "Tips and gratuities for the pilot or ground staff",
  "Any additional cost caused by a personal delay or requested itinerary change",
];

const permitDetails = [
  {
    label: "Foreign Nationals",
    fee: "NPR 3,000",
    description: "Per person",
  },
  {
    label: "Permit Required",
    fee: "Yes",
    description: "Langtang National Park Entry Permit",
  },
  {
    label: "Package Status",
    fee: "Included",
    description: "Arranged before departure in Kathmandu",
  },
  {
    label: "TIMS Card",
    fee: "Not Required",
    description: "Not needed for a helicopter-only tour",
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
            Review what is included in your Langtang helicopter tour package and
            what you should arrange or carry separately before departure.
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

            {/* CLOTHING NOTE */}
            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-4">
              <p className="font-manrope text-xs leading-6 text-amber-800">
                Kyanjin Gompa is located at approximately 3,870 metres. Bring
                warm layers, a windproof jacket, gloves, a beanie, sunglasses
                and suitable walking shoes even when Kathmandu is warm.
              </p>
            </div>
          </div>
        </div>

        {/* LANGTANG NATIONAL PARK PERMIT CARD */}
        <div className="mt-10 overflow-hidden rounded-[24px] bg-[#061b35] px-5 py-8 md:px-8 md:py-10 lg:px-10">
          {/* PERMIT HEADING */}
          <div className="text-center">
            <p className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[#e0a326]">
              Permit Included in Your Flight
            </p>

            <h3 className="mt-3 font-fraunces text-2xl font-semibold text-white md:text-3xl">
              Langtang National Park Entry Permit
            </h3>

            <p className="mt-2 font-manrope text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
              Required for Landing at Kyanjin Gompa
            </p>

            <p className="mx-auto mt-4 max-w-3xl font-manrope text-sm leading-6 text-white/50">
              The helicopter landing area at Kyanjin Gompa lies inside Langtang
              National Park. Foreign nationals therefore require a valid
              national park entry permit before the helicopter can land inside
              the protected area.
            </p>
          </div>

          {/* PERMIT SUMMARY */}
          <div className="mt-8 grid gap-5 border-y border-white/10 py-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h4 className="font-manrope text-sm font-medium text-white">
                  Langtang National Park Entry Permit
                </h4>

                <span className="rounded-full border border-[#e0a326]/30 bg-[#e0a326]/10 px-3 py-1 font-manrope text-[9px] font-bold uppercase tracking-[0.14em] text-[#e0a326]">
                  LNP
                </span>
              </div>

              <p className="mt-2 font-manrope text-xs leading-5 text-white/35">
                Required for foreign passengers entering Langtang National Park
              </p>
            </div>

            <div className="text-left md:text-right">
              <p className="font-manrope text-sm font-bold text-[#e0a326]">
                Included
              </p>

              <p className="mt-1 font-manrope text-xs text-white/35">
                Arranged before departure
              </p>
            </div>
          </div>

          {/* PERMIT DETAILS */}
          <div className="mt-8">
            <p className="font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[#e0a326]">
              Permit Details
            </p>

            <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
              {permitDetails.map((detail, index) => (
                <div
                  key={detail.label}
                  className={`grid gap-4 px-5 py-5 transition-colors duration-300 hover:bg-white/[0.04] md:grid-cols-[1fr_auto] md:items-center ${
                    index !== permitDetails.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <div>
                    <p className="font-manrope text-sm font-medium text-white">
                      {detail.label}
                    </p>

                    <p className="mt-1 font-manrope text-xs leading-5 text-white/35">
                      {detail.description}
                    </p>
                  </div>

                  <p
                    className={`font-manrope text-sm font-bold md:text-right ${
                      detail.fee === "Included" || detail.fee === "Not Required"
                        ? "text-[#e0a326]"
                        : "text-white"
                    }`}
                  >
                    {detail.fee}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FOREIGN NATIONAL PERMIT FEE */}
          <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.035] px-5 py-5">
            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="font-manrope text-xs font-bold uppercase tracking-[0.16em] text-[#e0a326]">
                  Foreign National Permit Fee
                </p>

                <p className="mt-2 max-w-3xl font-manrope text-xs leading-6 text-white/45">
                  The standard Langtang National Park entry permit fee for
                  foreign nationals is approximately NPR 3,000 per person.
                </p>
              </div>

              <p className="font-manrope text-lg font-bold text-white">
                NPR 3,000
              </p>
            </div>
          </div>

          {/* PERMIT ARRANGEMENT */}
          <div className="mt-6 grid gap-5 rounded-xl border border-[#e0a326]/20 bg-[#e0a326]/[0.06] px-5 py-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="font-manrope text-xs font-bold uppercase tracking-[0.16em] text-[#e0a326]">
                Permit Arrangement
              </p>

              <p className="mt-2 max-w-3xl font-manrope text-xs leading-6 text-white/45">
                Mountain Helicopters Nepal arranges the required Langtang
                National Park permit in Kathmandu before departure. The permit
                cost is already included in your confirmed helicopter-tour
                package.
              </p>
            </div>

            <p className="font-manrope text-sm font-bold text-[#e0a326]">
              Included
            </p>
          </div>

          {/* TIMS CARD INFORMATION */}
          <div className="mt-6 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-5 py-5">
            <p className="font-manrope text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
              TIMS Card Not Required
            </p>

            <p className="mt-2 font-manrope text-xs leading-6 text-white/45">
              A TIMS card is generally required for trekking journeys. It is not
              required for a helicopter-only trip to Langtang. Passengers only
              need the Langtang National Park Entry Permit for this tour.
            </p>
          </div>

          {/* IDENTIFICATION NOTE */}
          <p className="mt-7 text-center font-manrope text-xs leading-6 text-white/35">
            Carry your passport or valid government-issued identification.
            Passenger information may be required for permit processing, airport
            security, insurance and flight documentation.
          </p>
        </div>

        {/* OPERATIONAL NOTE */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 md:px-7">
          <p className="font-manrope text-xs leading-6 text-slate-500">
            Final inclusions may vary according to whether you book a shared
            departure or private charter, the confirmed ground time, weather
            conditions and the package stated in your booking agreement.
            Personal delays or requested itinerary changes may result in
            additional operating costs.
          </p>
        </div>
      </div>
    </section>
  );
}
