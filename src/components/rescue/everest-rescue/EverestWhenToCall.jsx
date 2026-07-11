// src/components/rescue/detail/EverestWhenToCall.jsx

import { Phone } from "lucide-react";

const emergencyCards = [
  {
    title: "Altitude Illness (HAPE / HACE)",
    subtitle: "Most common cause of rescue from the Everest region",
    groups: [
      {
        heading: "Suspected HAPE (High Altitude Pulmonary Edema):",
        items: [
          "Shortness of breath at rest, not improving with rest",
          "Cough — dry, then productive with pink or frothy sputum",
          "Chest tightness or congestion",
          "Extreme fatigue and weakness",
          "Cyanosis — blue lips or fingernails",
          "Coughing up frothy or blood-streaked phlegm",
        ],
      },
      {
        heading: "Suspected HACE (High Altitude Cerebral Edema):",
        items: [
          "Confusion, disorientation, altered mental state",
          "Loss of coordination — unable to walk heel-to-toe",
          "Severe headache not responding to painkillers",
          "Nausea and vomiting",
          "Drowsiness that will not lift",
        ],
      },
    ],
    note:
      "Call immediately if any of these symptoms develop above 3,500 m. Descent by foot is always the first option — but if the patient cannot walk or is deteriorating, evacuation becomes life-critical.",
  },
  {
    title: "Trauma & Injury",
    items: [
      "Falls from height on trekking or climbing routes",
      "Rockfall or icefall strikes",
      "Broken bones — leg, ankle, arm, ribs, spine",
      "Head injury with loss of consciousness or confusion",
      "Deep cuts requiring immediate medical care",
      "Suspected internal injuries",
      "Frostbite grade 2 or higher",
      "Snow blindness with severe eye pain",
    ],
  },
  {
    title: "Medical Emergencies at Altitude",
    items: [
      "Suspected heart attack — chest pain, arm pain, sweating",
      "Stroke symptoms — facial droop, speech difficulty, arm weakness",
      "Severe allergic reaction (anaphylaxis)",
      "Diabetic emergency — hypoglycaemia or hyperglycaemia",
      "Severe dehydration with inability to keep fluids down",
      "Food poisoning with severe symptoms and inability to descend",
      "Existing medical condition acute exacerbation",
      "Exhaustion after reaching Everest Base Camp or Kala Patthar",
    ],
  },
  {
    title: "Situational Rescue",
    items: [
      "Trail impassable — Khumbu region landslide, snowfall, flood",
      "Group member missing between key waypoints",
      "Weather isolation at Gorak Shep, EBC, or Kala Patthar approach",
      "Expedition emergency requiring immediate extraction from Base Camp",
      "Time-critical evacuation before deteriorating weather window closes",
      "Guide or porter medical emergency requiring immediate extraction",
    ],
  },
];

function BulletList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 font-manrope text-[11px] leading-[1.65] text-[#263746]"
        >
          <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#b77900]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function EmergencyCard({ title, subtitle, groups, items, note }) {
  return (
    <article className="flex h-full flex-col border border-[#cfd3d5] bg-white">
      <div className="border-b border-[#d99a19] bg-[#061523] px-4 py-3">
        <h3 className="font-manrope text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#f2a10d]">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-1 font-manrope text-[7px] font-semibold uppercase tracking-[0.08em] text-white/55">
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 py-5">
        {groups?.map((group, index) => (
          <div key={group.heading} className={index > 0 ? "mt-5" : ""}>
            <h4 className="mb-3 font-manrope text-[11px] font-bold text-[#071825]">
              {group.heading}
            </h4>

            <BulletList items={group.items} />
          </div>
        ))}

        {items && <BulletList items={items} />}

        {note && (
          <p className="mt-5 border-t border-[#d8d9d7] pt-4 font-manrope text-[10px] leading-[1.6] text-[#c65c00]">
            {note}
          </p>
        )}
      </div>
    </article>
  );
}

export default function EverestWhenToCall() {
  return (
    <section
      id="when-to-call"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[820px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — When to Call
          </p>

          <h2 className="mt-3 font-fraunces text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#071825] sm:text-[48px] lg:text-[56px]">
            Call immediately if any of the following.
          </h2>

          <p className="mt-4 max-w-[760px] font-manrope text-[11px] leading-[1.75] text-[#4c5963] sm:text-[12px]">
            These are the symptoms and situations where helicopter evacuation
            from the Everest region is the safest option. When in doubt, call.
            We coordinate; the pilot makes the final go/no-go decision on flight
            safety.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {emergencyCards.map((card) => (
            <EmergencyCard key={card.title} {...card} />
          ))}
        </div>

        <div className="mt-6 border-l-2 border-[#c65c00] bg-[#061523] px-6 py-8 text-white sm:px-8 lg:px-10">
          <div className="max-w-[720px]">
            <h3 className="font-fraunces text-[24px] font-semibold leading-[1.1] text-[#f6f2ea] sm:text-[28px]">
              Uncertain whether it&apos;s an emergency?
            </h3>

            <p className="mt-3 max-w-[660px] font-manrope text-[11px] leading-[1.75] text-white/75 sm:text-[12px]">
              At altitude, decisions must be made before symptoms become
              unmistakable. If someone above 3,500 m is deteriorating, do not
              wait to be certain. Call us. The cost of a rescue call that turns
              out to be unnecessary is zero. The cost of delaying a rescue that
              was needed can be a life.
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
    </section>
  );
}