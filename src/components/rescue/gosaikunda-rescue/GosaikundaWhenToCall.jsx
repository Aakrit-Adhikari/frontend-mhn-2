

import { Phone } from "lucide-react";

const emergencyCards = [
  {
    title: "Altitude Illness (AMS / HAPE / HACE)",
    items: [
      "Acute Mountain Sickness (AMS)",
      "High Altitude Pulmonary Edema (HAPE)",
      "High Altitude Cerebral Edema (HACE)",
    ],
  },
  {
    title: "Trauma & Injury",
    items: [
      "Falls and fractures on steep rocky trails",
      "Head injuries",
      "Avalanche exposure",
      "Rockfall injuries",
    ],
  },
  {
    title: "Medical Emergencies",
    items: [
      "Exhaustion and severe dehydration, especially during the Janai Purnima festival",
      "Food poisoning and gastrointestinal illness",
      "Cardiac events",
      "Stroke",
      "Respiratory illness",
    ],
  },
  {
    title: "Stranded & Weather",
    items: [
      "Hypothermia from sudden weather changes",
      "Lost or separated trekkers",
      "Weather-related emergencies",
    ],
  },
];

function EmergencyCard({ title, items }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-[#cfd3d5] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#d99a19] hover:shadow-[0_18px_40px_rgba(7,24,37,0.12)]">
      {/* Animated top accent */}
      <span className="absolute left-0 top-0 z-10 h-[3px] w-0 bg-[#f2a10d] transition-all duration-300 group-hover:w-full" />

      <div className="border-b border-[#d99a19] bg-[#061523] px-4 py-3 transition-colors duration-300 group-hover:bg-[#0a1f32]">
        <h3 className="font-manrope text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#f2a10d]">
          {title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col px-5 py-5 sm:px-6">
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 font-manrope text-[11px] leading-[1.65] text-[#263746] sm:text-[12px]"
            >
              <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full border border-[#b77900] transition-all duration-300 group-hover:bg-[#f2a10d]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <span className="block h-px w-10 bg-[#d8d9d7] transition-all duration-300 group-hover:w-full group-hover:bg-[#d99a19]" />
        </div>
      </div>
    </article>
  );
}

export default function GosaikundaWhenToCall() {
  return (
    <section
      id="when-to-call"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[920px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — When to Call
          </p>

          <h2 className="mt-4 max-w-[1050px] font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            When Is Helicopter Rescue Necessary in Gosaikunda?
          </h2>

          <div className="mt-5 max-w-[820px] space-y-5 font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[12px]">
            <p>
              Not every symptom is immediately life-threatening. Some patients
              may be able to rest, descend gradually or continue under close
              observation. The critical decision is knowing when waiting is no
              longer safe.
            </p>

            <p>
              Helicopter evacuation should be considered when the patient is
              deteriorating, cannot descend safely, has suffered a serious
              injury, or is stranded by dangerous weather in a remote part of
              the Gosaikunda route.
            </p>

            <p>Some common rescue situations include:</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {emergencyCards.map((card) => (
            <EmergencyCard key={card.title} {...card} />
          ))}
        </div>

        <div className="mt-6 overflow-hidden bg-[#061523] px-6 py-8 text-white sm:px-8 lg:px-10">
          <div className="max-w-[760px]">
            <h3 className="font-fraunces text-[24px] font-semibold leading-[1.1] text-[#f6f2ea] sm:text-[28px]">
              Uncertain whether it&apos;s an emergency?
            </h3>

            <p className="mt-3 max-w-[680px] font-manrope text-[11px] leading-[1.75] text-white/75 sm:text-[12px]">
              If someone at altitude is deteriorating, do not wait to be
              certain. Call us. We coordinate the assessment. The cost of a
              rescue call that turns out to be unnecessary is zero. The cost of
              delaying a rescue that was needed can be a life.
            </p>

            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="tel:+9779712082949"
                className="group inline-flex h-[42px] items-center justify-center gap-2 bg-[#c65c00] px-5 font-manrope text-[9px] font-extrabold uppercase tracking-[0.15em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#df6b00] hover:shadow-lg"
              >
                <span>[</span>
                <Phone
                  size={13}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
                Call Now
                <span>]</span>
              </a>

              <a
                href="tel:+9779712082949"
                className="font-fraunces text-[22px] font-semibold text-white transition-colors duration-300 hover:text-[#f2a10d] sm:text-[25px]"
              >
                +977-9712082949
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}