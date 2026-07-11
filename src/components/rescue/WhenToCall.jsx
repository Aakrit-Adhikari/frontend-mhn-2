// // src/components/rescue/WhenToCall.jsx

// import { Phone } from "lucide-react";

// const emergencyCards = [
//   {
//     title: "Altitude Illness (HAPE / HACE)",
//     content: (
//       <>
//         <h3 className="mb-3 text-[13px] font-semibold text-[#071825]">
//           Suspected High Altitude Pulmonary Edema (HAPE):
//         </h3>

//         <ul className="space-y-2">
//           <li>Shortness of breath at rest, not improving with rest</li>
//           <li>Cough (dry, then productive with pink or frothy sputum)</li>
//           <li>Chest tightness or congestion</li>
//           <li>Extreme fatigue and weakness</li>
//           <li>Cyanosis (blue lips or fingernails)</li>
//         </ul>

//         <h3 className="mb-3 mt-5 text-[13px] font-semibold text-[#071825]">
//           Suspected High Altitude Cerebral Edema (HACE):
//         </h3>

//         <ul className="space-y-2">
//           <li>Confusion, disorientation, altered mental state</li>
//           <li>Loss of coordination (unable to walk heel-to-toe)</li>
//           <li>Severe headache not responding to painkillers</li>
//           <li>Nausea and vomiting</li>
//           <li>Drowsiness that will not lift</li>
//         </ul>

//         <p className="mt-5 border-t border-[#d9d9d4] pt-4 text-[11px] text-[#bd5b00]">
//           Call immediately if any of these symptoms develop above 3,500 m.
//         </p>
//       </>
//     ),
//   },
//   {
//     title: "Trauma & Injury",
//     items: [
//       "Falls from height, rockfall or icefall strikes",
//       "Broken bones — leg, ankle, arm, ribs, spine",
//       "Head injury with loss of consciousness or confusion",
//       "Deep cuts requiring immediate medical care",
//       "Suspected internal injuries",
//       "Frostbite grade 2 or higher",
//       "Snow blindness with severe eye pain",
//     ],
//   },
//   {
//     title: "Medical Emergencies",
//     items: [
//       "Suspected heart attack — chest pain, arm pain, sweating",
//       "Stroke symptoms — facial droop, speech difficulty, arm weakness",
//       "Severe allergic reaction (anaphylaxis)",
//       "Diabetic emergency — hypoglycaemia or hyperglycaemia",
//       "Severe dehydration with inability to keep fluids down",
//       "Food poisoning with severe symptoms and inability to descend",
//       "Existing medical condition acute exacerbation",
//     ],
//   },
//   {
//     title: "Non-Medical Rescue",
//     items: [
//       "Trail impassable — landslide, snowfall, flood",
//       "Group member missing or separated in remote terrain",
//       "Weather isolation at high altitude with limited supplies",
//       "Expedition emergency requiring immediate extraction",
//       "Time-critical evacuation before deteriorating weather",
//     ],
//   },
// ];

// function EmergencyCard({ title, items, content }) {
//   return (
//     <article className="border border-[#cfd3d6] bg-white">
//       <div className="border-b border-[#d58a00] bg-[#071825] px-4 py-3">
//         <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5a623]">
//           {title}
//         </h3>
//       </div>

//       <div className="px-5 py-5 text-[12px] leading-[1.65] text-[#263442]">
//         {content}

//         {items && (
//           <ul className="space-y-2">
//             {items.map((item) => (
//               <li key={item} className="flex items-start gap-3">
//                 <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#c98100]" />
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </article>
//   );
// }

// export default function WhenToCall() {
//   return (
//     <section
//       id="when-to-call"
//       className="scroll-mt-[125px] bg-[#f5f3ee] px-5 py-14 sm:px-8 lg:px-12 lg:py-16 xl:px-[80px] 2xl:px-[125px]"
//     >
//       <div className="mx-auto max-w-[1440px]">
//         <div className="mb-8 max-w-[760px]">
//           <p className="mb-3 font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-[#bd7900]">
//             — When to Call
//           </p>

//           <h2 className="font-serif text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#071825] sm:text-[42px] lg:text-[50px]">
//             Call us immediately if any of the following:
//           </h2>

//           <p className="mt-4 max-w-[700px] text-[12px] leading-6 text-[#3f4d58] sm:text-[13px]">
//             These are the symptoms and situations where helicopter evacuation
//             is the safest option. When in doubt, call. We coordinate; the pilot
//             makes the final go/no-go call on flight safety.
//           </p>
//         </div>

//         <div className="grid gap-4 md:grid-cols-2">
//           {emergencyCards.map((card) => (
//             <EmergencyCard key={card.title} {...card} />
//           ))}
//         </div>

//         <div className="mt-6 bg-[#071825] px-6 py-8 text-white sm:px-8 lg:px-10">
//           <div className="max-w-[780px]">
//             <h3 className="font-serif text-[24px] font-semibold sm:text-[28px]">
//               Uncertain whether it&apos;s an emergency?
//             </h3>

//             <p className="mt-3 max-w-[650px] text-[12px] leading-6 text-white/75 sm:text-[13px]">
//               If someone at altitude is deteriorating, do not wait to be
//               certain. Call us. We coordinate the assessment. The cost of a
//               rescue call that turns out to be unnecessary is zero. The cost
//               of delaying a rescue that was needed can be a life.
//             </p>

//             <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
//               <a
//                 href="tel:+9779712082949"
//                 className="inline-flex h-[42px] items-center gap-2 bg-[#c65c00] px-5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#df6b00]"
//               >
//                 <span>[</span>
//                 <Phone size={13} />
//                 Call Now
//                 <span>]</span>
//               </a>

//               <a
//                 href="tel:+9779712082949"
//                 className="font-serif text-[22px] font-semibold text-white sm:text-[25px]"
//               >
//                 +977-9712082949
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// src/components/rescue/WhenToCall.jsx

import { Phone } from "lucide-react";

const emergencyCards = [
  {
    title: "Altitude Illness (HAPE / HACE)",
    groups: [
      {
        heading: "Suspected High Altitude Pulmonary Edema (HAPE):",
        items: [
          "Shortness of breath at rest, not improving with rest",
          "Cough (dry, then productive with pink or frothy sputum)",
          "Chest tightness or congestion",
          "Extreme fatigue and weakness",
          "Cyanosis (blue lips or fingernails)",
        ],
      },
      {
        heading: "Suspected High Altitude Cerebral Edema (HACE):",
        items: [
          "Confusion, disorientation, altered mental state",
          "Loss of coordination (unable to walk heel-to-toe)",
          "Severe headache not responding to painkillers",
          "Nausea and vomiting",
          "Drowsiness that will not lift",
        ],
      },
    ],
    note: "Call immediately if any of these symptoms develop above 3,500 m.",
  },
  {
    title: "Trauma & Injury",
    items: [
      "Falls from height, rockfall or icefall strikes",
      "Broken bones — leg, ankle, arm, ribs, spine",
      "Head injury with loss of consciousness or confusion",
      "Deep cuts requiring immediate medical care",
      "Suspected internal injuries",
      "Frostbite grade 2 or higher",
      "Snow blindness with severe eye pain",
    ],
  },
  {
    title: "Medical Emergencies",
    items: [
      "Suspected heart attack — chest pain, arm pain, sweating",
      "Stroke symptoms — facial droop, speech difficulty, arm weakness",
      "Severe allergic reaction (anaphylaxis)",
      "Diabetic emergency — hypoglycaemia or hyperglycaemia",
      "Severe dehydration with inability to keep fluids down",
      "Food poisoning with severe symptoms and inability to descend",
      "Existing medical condition acute exacerbation",
    ],
  },
  {
    title: "Non-Medical Rescue",
    items: [
      "Trail impassable — landslide, snowfall, flood",
      "Group member missing or separated in remote terrain",
      "Weather isolation at high altitude with limited supplies",
      "Expedition emergency requiring immediate extraction",
      "Time-critical evacuation before deteriorating weather",
    ],
  },
];

function BulletList({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-[8px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#c98100]" />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function EmergencyCard({ title, items, groups, note }) {
  return (
    <article className="h-full border border-[#cfd3d6] bg-white">
      <div className="border-b border-[#d58a00] bg-[#071825] px-4 py-3">
        <h3 className="font-manrope text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#f5a623]">
          {title}
        </h3>
      </div>

      <div className="font-manrope px-5 py-5 text-[12px] leading-[1.65] text-[#263442]">
        {groups?.map((group, index) => (
          <div key={group.heading} className={index > 0 ? "mt-5" : ""}>
            <h4 className="mb-3 font-manrope text-[13px] font-bold text-[#071825]">
              {group.heading}
            </h4>

            <BulletList items={group.items} />
          </div>
        ))}

        {items && <BulletList items={items} />}

        {note && (
          <p className="mt-5 border-t border-[#d9d9d4] pt-4 font-manrope text-[11px] font-medium text-[#bd5b00]">
            {note}
          </p>
        )}
      </div>
    </article>
  );
}

export default function WhenToCall() {
  return (
    <section
      id="when-to-call"
      className="scroll-mt-[125px] bg-[#f5f3ee] px-5 py-14 sm:px-8 lg:px-12 lg:py-16 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 max-w-[760px]">
          <p className="mb-3 font-manrope text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#bd7900]">
            — When to Call
          </p>

          <h2 className="font-fraunces text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#071825] sm:text-[42px] lg:text-[50px]">
            Call us immediately if any of the following:
          </h2>

          <p className="mt-4 max-w-[700px] font-manrope text-[12px] leading-6 text-[#3f4d58] sm:text-[13px]">
            These are the symptoms and situations where helicopter evacuation
            is the safest option. When in doubt, call. We coordinate; the pilot
            makes the final go/no-go call on flight safety.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {emergencyCards.map((card) => (
            <EmergencyCard key={card.title} {...card} />
          ))}
        </div>

        <div className="mt-6 bg-[#071825] px-6 py-8 text-white sm:px-8 lg:px-10">
          <div className="max-w-[780px]">
            <h3 className="font-fraunces text-[24px] font-semibold sm:text-[28px]">
              Uncertain whether it&apos;s an emergency?
            </h3>

            <p className="mt-3 max-w-[650px] font-manrope text-[12px] leading-6 text-white/75 sm:text-[13px]">
              If someone at altitude is deteriorating, do not wait to be
              certain. Call us. We coordinate the assessment. The cost of a
              rescue call that turns out to be unnecessary is zero. The cost
              of delaying a rescue that was needed can be a life.
            </p>

            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="tel:+9779712082949"
                className="inline-flex h-[42px] items-center gap-2 bg-[#c65c00] px-5 font-manrope text-[10px] font-extrabold uppercase tracking-[0.15em] text-white transition hover:bg-[#df6b00]"
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