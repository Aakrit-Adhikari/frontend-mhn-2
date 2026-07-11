// src/components/rescue/annapurna/AnnapurnaWhenToCall.jsx

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
      "Falls and fractures",
      "Head injuries",
      "Avalanche exposure",
      "Rockfall injuries",
    ],
  },
  {
    title: "Medical Emergencies",
    items: [
      "Exhaustion and severe dehydration",
      "Food poisoning and gastrointestinal illness",
      "Cardiac events",
      "Stroke",
      "Respiratory illness",
    ],
  },
  {
    title: "Stranded & Weather",
    items: [
      "Hypothermia",
      "Lost or separated trekkers",
      "Weather-related emergencies",
    ],
  },
];

function EmergencyCard({ title, items }) {
  return (
    <article className="flex h-full flex-col border border-[#cfd3d5] bg-white">
      <div className="border-b border-[#d99a19] bg-[#061523] px-4 py-3">
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
              <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full border border-[#b77900]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function AnnapurnaWhenToCall() {
  return (
    <section
      id="when-to-call"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[900px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — When to Call
          </p>

          <h2 className="mt-4 max-w-[980px] font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            When Is Helicopter Rescue Necessary in Annapurna?
          </h2>

          <div className="mt-5 max-w-[820px] space-y-5 font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[12px]">
            <p>
              Not all symptoms are equally urgent, and some situations may be
              monitored while the patient descends on foot. However, when a
              person is deteriorating, unable to walk safely, exposed to severe
              weather, or located far from medical care, helicopter evacuation
              may become the safest option.
            </p>

            <p>
              Choosing between waiting, descending by trail, or requesting
              immediate rescue is one of the most important decisions a trek
              leader, guide, or patient may need to make.
            </p>

            <p>Some of the scenarios where rescues are common:</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {emergencyCards.map((card) => (
            <EmergencyCard key={card.title} {...card} />
          ))}
        </div>

        <div className="mt-6 border border-[#ead9b7] bg-[#f8f4ec] p-3">
          <div className="border-l-2 border-[#c65c00] bg-[#061523] px-6 py-8 text-white sm:px-8 lg:px-10">
            <div className="max-w-[760px]">
              <h3 className="font-fraunces text-[24px] font-semibold leading-[1.1] text-[#f6f2ea] sm:text-[28px]">
                Uncertain whether it&apos;s an emergency?
              </h3>

              <p className="mt-3 max-w-[680px] font-manrope text-[11px] leading-[1.75] text-white/75 sm:text-[12px]">
                If someone at altitude is deteriorating, do not wait to be
                certain. Call us. We coordinate the assessment. The cost of a
                rescue call that turns out to be unnecessary is zero. The cost
                of delaying a rescue that was needed can be a life.
              </p>

              <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href="tel:+9779712082949"
                  className="inline-flex h-[42px] items-center justify-center gap-2 bg-[#c65c00] px-5 font-manrope text-[9px] font-extrabold uppercase tracking-[0.15em] text-white transition hover:bg-[#df6b00]"
                >
                  <span>[</span>
                  <Phone size={13} />
                  Call Now
                  <span>]</span>
                </a>

                <a
                  href="tel:+9779712082949"
                  className="font-fraunces text-[22px] font-semibold text-white sm:text-[25px]"
                >
                  +977-9712082949
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}