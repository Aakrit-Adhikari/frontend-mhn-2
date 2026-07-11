// src/components/rescue/Process.jsx

const processSteps = [
  {
    number: "01",
    title: "Emergency Call",
    duration: "Typical duration: 3–5 min",
    description:
      "Caller — patient, guide, expedition leader, agency, or insurance assistance company — reaches MHN dispatch. We collect patient name, condition, current location and altitude, nationality, insurance details, and emergency contact.",
    extra:
      "If unable to reach us by phone: WhatsApp, satellite phone via inReach network, or email. Every incoming channel routes to the same dispatch officer.",
  },
  {
    number: "02",
    title: "Location & Weather Verification",
    duration: "Typical duration: 5–10 min",
    description:
      "Location is confirmed by GPS coordinates, village name, lodge name, established helipad, trail waypoint, or expedition camp identifier. Local weather is cross-checked with our regional Sherpa network and CAAN weather services.",
  },
  {
    number: "03",
    title: "Insurance or Payment Coordination",
    duration: "Typical duration: 10–20 min",
    description:
      "For insured patients: policy details and assistance company contact are confirmed. Some insurance providers require payment guarantee, case number, doctor’s note, or rescue approval before dispatch. Our dispatch officer coordinates this in parallel with helicopter preparation.",
    extra:
      "For uninsured patients: direct payment guarantee arranged. Cost estimate provided upfront. See our Rescue Costs section for typical figures.",
  },
  {
    number: "04",
    title: "Helicopter Dispatch",
    duration: "Typical duration: 15–45 min from confirmed authorization",
    description:
      "Aircraft dispatched considering weather window, route altitude, aircraft availability, and pilot decision. For high-altitude rescues, the final safety call is always the pilot’s. No aircraft launches into unsafe conditions.",
    flightTimes: [
      ["Namche Bazaar", "55 minutes"],
      ["Pheriche", "65 minutes"],
      ["Gorak Shep / EBC", "75 minutes"],
      ["Annapurna region", "80 minutes (via Pokhara staging)"],
      ["Muktinath", "90 minutes (via Pokhara staging)"],
    ],
  },
  {
    number: "05",
    title: "Patient Pickup & Evacuation",
    duration: "On-scene time: 5–15 min",
    description:
      "Patient collected from safest available pickup point. Where no direct landing site exists, patient may be moved to nearest secure helipad, open field, ridge, or lodge site. Onboard oxygen and medical kit available throughout. Patient transferred to Lukla, Kathmandu, or specific hospital based on medical assessment.",
  },
  {
    number: "06",
    title: "Documentation & Insurance Handover",
    duration: "Provided within 24–48 hours post evacuation",
    description:
      "Complete documentation package prepared for insurance claims: flight log, dispatch timeline, altitude, route, altitude profile, rescue invoice, patient details, GPS coordinates of pickup, medical crew report if applicable. Ground liaison officer available for hospital admission coordination, visa extension assistance, and accommodation arrangements for accompanying family.",
  },
];

const responseRows = [
  {
    region: "Everest region",
    typical: "1h 30m",
    bestCase: "1h 15m",
    extension: "Up to 6h if morning window closed",
  },
  {
    region: "Annapurna region",
    typical: "1h 15m",
    bestCase: "1h",
    extension: "Up to 4h if valley cloud persists",
  },
  {
    region: "Langtang",
    typical: "1h 15m",
    bestCase: "1h",
    extension: "Up to 5h if ridge weather",
  },
  {
    region: "Mustang / Muktinath",
    typical: "1h 45m",
    bestCase: "1h 30m",
    extension: "Up to 6h in monsoon",
  },
  {
    region: "Gokyo",
    typical: "1h 45m",
    bestCase: "1h 30m",
    extension: "Up to 6h if pass conditions",
  },
  {
    region: "Tilicho",
    typical: "2h",
    bestCase: "1h 45m",
    extension: "Up to 8h if approach closed",
  },
  {
    region: "Makalu region",
    typical: "2h 15m",
    bestCase: "2h",
    extension: "Up to 8h — remote staging required",
  },
];

const responseFactors = [
  {
    title: "Weather",
    description:
      "Flying window limited to morning hours in most seasons. Afternoon buildup, monsoon cloud, and winter storms delay dispatch until safe.",
  },
  {
    title: "Insurance Clearance",
    description:
      "Cases requiring insurance authorization may add 15–60 min if the assistance company is slow to respond. Direct-payment cases dispatch fastest.",
  },
  {
    title: "Location Verification",
    description:
      "Remote pickup points without established helipads may require nearest-helipad transfer by ground before extraction.",
  },
  {
    title: "Regulatory Clearance",
    description:
      "CAAN flight clearance for high-altitude rescue routes is real-time in most cases, but can add minutes.",
  },
];

function ProcessCard({
  number,
  title,
  duration,
  description,
  extra,
  flightTimes,
}) {
  return (
    <article className="flex h-full flex-col border border-[#cfd2d3] bg-white p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c9932c] font-manrope text-[10px] font-semibold text-[#a56d00]">
          {number}
        </span>

        <div>
          <h3 className="font-fraunces text-[17px] font-semibold uppercase leading-[1.15] text-[#071825]">
            {title}
          </h3>

          <p className="mt-2 font-manrope text-[8px] font-semibold uppercase tracking-[0.19em] text-[#8a96a0]">
            {duration}
          </p>
        </div>
      </div>

      <div className="mt-4 font-manrope text-[11px] leading-[1.7] text-[#36434d]">
        <p>{description}</p>

        {extra && <p className="mt-4">{extra}</p>}

        {flightTimes && (
          <div className="mt-5 border border-[#d9d5ca] bg-[#f7f4ed] p-4">
            <p className="mb-3 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#7a8791]">
              Typical flight time from staging
            </p>

            <div className="space-y-1.5">
              {flightTimes.map(([place, time]) => (
                <div
                  key={place}
                  className="grid grid-cols-[1fr_auto] gap-4 text-[9px] leading-4"
                >
                  <span>{place}</span>
                  <span className="font-semibold text-[#071825]">{time}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-[125px] bg-[#f5f2eb] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div>
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — Our Process
          </p>

          <h2 className="mt-3 font-fraunces text-[36px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#071825] sm:text-[46px] lg:text-[54px]">
            From call to hospital,{" "}
            <span className="italic text-[#a87300]">step by step.</span>
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step) => (
            <ProcessCard key={step.number} {...step} />
          ))}
        </div>

        <div className="mt-24 lg:mt-32">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — Response Time
          </p>

          <h2 className="mt-3 font-fraunces text-[36px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#071825] sm:text-[46px] lg:text-[54px]">
            What to expect from{" "}
            <span className="italic text-[#a87300]">
              call to extraction.
            </span>
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.45fr_0.95fr]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse font-manrope text-left text-[10px]">
                <thead>
                  <tr className="bg-[#071825] text-white">
                    <th className="border-r border-white/10 px-4 py-3 text-[8px] font-bold uppercase tracking-[0.17em]">
                      Region
                    </th>
                    <th className="border-r border-white/10 px-4 py-3 text-[8px] font-bold uppercase tracking-[0.17em]">
                      Typical
                    </th>
                    <th className="border-r border-white/10 px-4 py-3 text-[8px] font-bold uppercase tracking-[0.17em]">
                      Best Case
                    </th>
                    <th className="px-4 py-3 text-[8px] font-bold uppercase tracking-[0.17em]">
                      Weather-Dependent Extension
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {responseRows.map((row) => (
                    <tr
                      key={row.region}
                      className="border-b border-[#d3d6d7] bg-[#f8f6f1]"
                    >
                      <td className="border-x border-[#d3d6d7] px-4 py-3 font-medium text-[#071825]">
                        {row.region}
                      </td>
                      <td className="border-r border-[#d3d6d7] px-4 py-3 font-semibold text-[#071825]">
                        {row.typical}
                      </td>
                      <td className="border-r border-[#d3d6d7] px-4 py-3 text-[#5c6872]">
                        {row.bestCase}
                      </td>
                      <td className="border-r border-[#d3d6d7] px-4 py-3 text-[#5c6872]">
                        {row.extension}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="mt-3 font-manrope text-[8px] font-medium uppercase tracking-[0.13em] text-[#b26800]">
                [Client verify: all response time figures need actual dispatch
                data]
              </p>
            </div>

            <aside className="border-l border-[#d4a13c] pl-6 sm:pl-8">
              <h3 className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#536270]">
                What Affects Response Time
              </h3>

              <div className="mt-6 space-y-6">
                {responseFactors.map((factor) => (
                  <div key={factor.title}>
                    <h4 className="font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-[#a56e00]">
                      {factor.title}
                    </h4>

                    <p className="mt-2 font-manrope text-[10px] leading-[1.7] text-[#4d5a64]">
                      {factor.description}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}