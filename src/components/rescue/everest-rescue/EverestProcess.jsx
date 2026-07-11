// src/components/rescue/detail/EverestProcess.jsx

const processSteps = [
  {
    number: "01",
    title: "Emergency Call",
    duration: "Typical duration: 3–5 min",
    paragraphs: [
      "The rescue operation begins with contact from the patient, guide, trekking company, expedition leader, lodge, or insurance assistance company. Our dispatch officer collects: patient name, current condition, altitude and location, nationality, insurance details, and emergency contact.",
      "Where phone signal is limited: WhatsApp or email will reach the same dispatch officer. Guides working with satellite messengers, such as Garmin inReach, can send coordinates directly.",
    ],
  },
  {
    number: "02",
    title: "Location & Weather Verification",
    duration: "Typical duration: 5–10 min",
    paragraphs: [
      "Location is confirmed by GPS coordinates, village name, lodge name, established helipad, trail waypoint, or expedition camp identifier. Local weather is cross-checked with our Khumbu Sherpa network, Lukla ATC, and CAAN weather services.",
      "The upper Khumbu weather can change within minutes, so real-time verification with local sources is critical.",
    ],
  },
  {
    number: "03",
    title: "Insurance or Payment Coordination",
    duration: "Typical duration: 10–20 min",
    paragraphs: [
      "For insured patients: policy details and assistance company contact are confirmed. Some insurance providers require payment guarantee, case number, doctor’s note, or guide’s report before dispatch. Our dispatch officer coordinates this in parallel with aircraft preparation.",
      "For uninsured patients: direct payment guarantee is arranged. A cost estimate is provided upfront based on the pickup point.",
    ],
  },
  {
    number: "04",
    title: "Helicopter Dispatch",
    duration: "Typical duration: 15–45 min from confirmed authorization",
    paragraphs: [
      "Aircraft is dispatched from Kathmandu as the primary staging point, or Lukla as secondary staging when Kathmandu departure is weather-blocked but Khumbu conditions are safe.",
      "For high-altitude rescues above 4,500 m, the final safety decision is always the pilot’s. No aircraft launches into unsafe conditions.",
    ],
    flightTimes: [
      ["Lukla", "45 minutes"],
      ["Namche Bazaar", "55 minutes"],
      ["Pheriche", "65 minutes"],
      ["Dingboche", "70 minutes"],
      ["Lobuche", "75 minutes"],
      ["Gorak Shep", "80 minutes"],
      ["Everest Base Camp", "80 minutes"],
      ["Kala Patthar", "85 minutes"],
    ],
  },
  {
    number: "05",
    title: "Patient Pickup & Evacuation",
    duration: "On-scene time: 5–15 min",
    paragraphs: [
      "Patient is collected from the safest available pickup point. Where no direct landing site exists, the patient is moved to the nearest secure helipad, open field, ridge, or lodge site.",
      "Onboard oxygen is supplied throughout the flight. The patient is transferred to Lukla for stabilization and onward transfer by fixed-wing, Kathmandu for direct hospital care, or a designated hospital based on medical assessment.",
    ],
  },
  {
    number: "06",
    title: "Documentation & Insurance Handover",
    duration: "Provided within 24–48 hours",
    paragraphs: [
      "A complete documentation package is prepared: flight log, departure and arrival times, route flown, altitude profile, aircraft tail number, pilot in command, rescue invoice, patient details, GPS coordinates of pickup, and medical crew report where applicable.",
      "Our ground liaison officer supports hospital admission coordination, visa-extension assistance, and accommodation arrangements for accompanying family.",
    ],
  },
];

function ProcessCard({
  number,
  title,
  duration,
  paragraphs,
  flightTimes,
}) {
  return (
    <article className="flex h-full flex-col border border-[#cfd3d5] bg-white p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#b77900] font-manrope text-[10px] font-semibold text-[#9a6700]">
          {number}
        </span>

        <div>
          <h3 className="font-fraunces text-[18px] font-semibold uppercase leading-[1.15] text-[#071825]">
            {title}
          </h3>

          <p className="mt-2 font-manrope text-[8px] font-semibold uppercase tracking-[0.2em] text-[#88939c]">
            {duration}
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-4 font-manrope text-[11px] leading-[1.75] text-[#44515b]">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {flightTimes && (
        <div className="mt-5 border border-[#d9d5ca] bg-[#f7f4ed] p-4">
          <p className="font-manrope text-[8px] font-bold uppercase tracking-[0.18em] text-[#7d8993]">
            Typical flight time from Kathmandu
          </p>

          <div className="mt-3 space-y-1.5">
            {flightTimes.map(([location, time]) => (
              <div
                key={location}
                className="grid grid-cols-[1fr_auto] gap-4 font-manrope text-[9px] leading-4 text-[#4d5962]"
              >
                <span>{location}</span>
                <span className="font-semibold text-[#071825]">{time}</span>
              </div>
            ))}
          </div>

          <p className="mt-3 font-manrope text-[8px] font-semibold uppercase tracking-[0.1em] text-[#c16600]">
            [Client verify: all flight times]
          </p>
        </div>
      )}
    </article>
  );
}

export default function EverestProcess() {
  return (
    <section
      id="process"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[980px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — Our Process
          </p>

          <h2 className="mt-4 font-fraunces text-[40px] font-semibold leading-[1.02] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            From your call to Kathmandu hospital,{" "}
            <span className="italic text-[#9b6b00]">step by step.</span>
          </h2>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step) => (
            <ProcessCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}