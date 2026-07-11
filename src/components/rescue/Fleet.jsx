
import Image from "next/image";

const rescueFeatures = [
  "Onboard oxygen supply for patient support",
  "Basic medical kit",
  "Patient restraint harness",
  "Space for one prone patient plus crew",
  "Cold-weather cabin configuration for high-altitude operations",
  "Emergency beacon and satellite communication",
];

const aircraftSpecs = [
  ["Model", "AS 350 B3e (Ecureuil / Squirrel)"],
  ["Manufacturer", "Airbus Helicopters, France"],
  ["Engine", "Safran Arriel 2D turboshaft"],
  ["Maximum passengers", "5 + 1 pilot (reduced in rescue configuration)"],
  ["Maximum takeoff weight", "2,250 kg"],
  ["Service ceiling", "23,000 ft / 7,010 m"],
  ["High-altitude payload", "Reduced above 4,500 m as required by CAAN"],
  ["Communication", "VHF, HF, SATCOM and inReach compatibility"],
  ["Navigation", "GPS and Garmin glass cockpit"],
  ["Night capability", "Limited to VFR conditions under CAAN approval"],
];

const cabinConfigurations = [
  {
    letter: "A",
    title: "Seated Patient",
    items: [
      "Standard passenger seating removed for stretcher access",
      "Patient in seated position with restraints",
      "Supplemental oxygen delivered through nasal cannula",
      "Companion or medic seated adjacent",
    ],
    use: "Standard extraction for altitude sickness, minor trauma",
  },
  {
    letter: "B",
    title: "Prone Patient",
    items: [
      "Reduced passenger seating with one to two seats remaining",
      "Patient on collapsible litter secured to floor rails",
      "Full oxygen delivery and IV pole capability",
      "Medic positioned beside patient with equipment",
    ],
    use: "Serious trauma, spinal precautions, or acute HAPE/HACE",
  },
  {
    letter: "C",
    title: "Critical Patient",
    items: [
      "Full cabin conversion to stretcher configuration",
      "Patient monitoring equipment mounted where applicable",
      "Continuous oxygen and full medical support",
      "Direct hospital handover with physician coordination",
    ],
    use: "Life-threatening conditions requiring active intervention",
  },
];

function BulletList({ items, light = false }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-3 font-manrope text-[11px] leading-[1.65] ${
            light ? "text-white/75" : "text-[#46535e]"
          }`}
        >
          <span className="mt-[7px] h-[4px] w-[4px] shrink-0 bg-[#b77900]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="scroll-mt-[125px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div>
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — Fleet
          </p>

          <h2 className="mt-3 font-fraunces text-[36px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#071825] sm:text-[46px] lg:text-[54px]">
            Aircraft configured{" "}
            <span className="italic text-[#a87300]">for evacuation.</span>
          </h2>

          <p className="mt-4 max-w-[760px] font-manrope text-[11px] leading-[1.75] text-[#4c5963] sm:text-[12px]">
            Mountain Helicopters operates the Airbus AS 350 B3e for tour,
            charter, and rescue flights. The B3e class is designed for
            high-altitude helicopter operations and has demonstrated reliable
            performance in demanding Himalayan terrain.
          </p>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <div className="relative aspect-[16/9] overflow-hidden border-b-4 border-[#d7a33b] bg-[#dedbd4]">
              <Image
                src="/images/rescue/main/as350-b3e-rescue-helicopter.jpg"
                alt="Airbus AS 350 B3e helicopter operated by Mountain Helicopters Nepal"
                fill
                className="object-cover"
              />
            </div>

            <p className="mt-4 font-manrope text-[11px] font-semibold text-[#24333e]">
              For rescue missions, the aircraft is configured with:
            </p>

            <div className="mt-5">
              <BulletList items={rescueFeatures} />
            </div>
          </div>

          <div className="bg-[#061523] p-6 text-white sm:p-8">
            <h3 className="font-manrope text-[10px] font-bold uppercase leading-[1.5] tracking-[0.2em] text-[#e7a315]">
              Airbus AS 350 B3e — Core Specifications Relevant to Rescue
            </h3>

            <div className="mt-7">
              {aircraftSpecs.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[0.9fr_1.4fr] gap-5 border-b border-white/10 py-3"
                >
                  <span className="font-manrope text-[8px] font-bold uppercase tracking-[0.17em] text-[#788795]">
                    {label}
                  </span>

                  <span className="text-right font-manrope text-[10px] font-semibold leading-[1.5] text-white/90">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-5 font-manrope text-[8px] font-semibold uppercase leading-[1.7] tracking-[0.12em] text-[#d77d0b]">
              [Client verify: specific aircraft used for rescue, night
              capability, medical equipment and inventory]
            </p>
          </div>
        </div>

        <div className="mt-12 border-l-2 border-[#b77900] pl-5">
          <h3 className="font-fraunces text-[18px] font-semibold text-[#071825]">
            Same fleet. Same crew. Different mission.
          </h3>

          <p className="mt-3 max-w-[960px] font-manrope text-[11px] leading-[1.75] text-[#4c5963]">
            The aircraft used for sightseeing flights can also be configured
            for patient evacuation. This continuity of equipment, pilot
            familiarity, maintenance standards, and operational readiness
            supports a responsive 24/7 rescue operation without introducing
            unfamiliar aircraft into urgent mountain conditions.
          </p>
        </div>

        <div className="mt-24 lg:mt-32">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — Cabin Configuration
          </p>

          <h2 className="mt-3 font-fraunces text-[36px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#071825] sm:text-[46px] lg:text-[54px]">
            How the aircraft is set up{" "}
            <span className="italic text-[#a87300]">for evacuation.</span>
          </h2>

          <p className="mt-4 max-w-[780px] font-manrope text-[11px] leading-[1.75] text-[#4c5963] sm:text-[12px]">
            Rescue aircraft are configured before dispatch according to the
            patient&apos;s condition. The AS 350 B3e cabin allows several
            evacuation arrangements.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {cabinConfigurations.map((configuration) => (
              <article
                key={configuration.letter}
                className="flex h-full flex-col border border-[#cfd3d5] bg-white p-6"
              >
                <div className="flex items-center gap-4">
                  <span className="font-fraunces text-[29px] font-semibold text-[#b77900]">
                    {configuration.letter}
                  </span>

                  <h3 className="font-manrope text-[10px] font-bold uppercase tracking-[0.18em] text-[#24333e]">
                    {configuration.title}
                  </h3>
                </div>

                <div className="mt-5">
                  <BulletList items={configuration.items} />
                </div>

                <div className="mt-6 border-t border-[#d7d9d9] pt-4">
                  <p className="font-manrope text-[8px] font-bold uppercase leading-[1.7] tracking-[0.16em] text-[#87929b]">
                    Used for: {configuration.use}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 max-w-[850px] font-manrope text-[9px] leading-[1.7] text-[#5b6872]">
            Configuration is confirmed during the dispatch coordination call.
            Where patient condition is uncertain, the aircraft may depart in
            the higher configuration and reconfigure only when operationally
            safe.
          </p>
        </div>
      </div>
    </section>
  );
}