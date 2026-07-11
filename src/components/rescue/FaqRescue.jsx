// src/components/rescue/Faq.jsx

"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqCategories = [
  {
    id: "before-trek",
    label: "Before You Trek",
    count: 7,
    questions: [
      {
        question: "Do I need travel insurance for helicopter rescue?",
        answer:
          "Travel insurance is strongly recommended for trekking in Nepal. Your policy should specifically include emergency helicopter evacuation, trekking at your planned altitude, medical treatment, and repatriation where required.",
      },
      {
        question: "How do I know if my policy covers evacuation?",
        answer:
          "Check the emergency evacuation section of your policy. Confirm the maximum covered altitude, rescue cost limit, trekking activity coverage, insurer assistance contact, deductible, and whether pre-authorization is required.",
      },
      {
        question: "What altitude does my insurance need to cover?",
        answer:
          "Your insurance should cover at least the highest altitude on your itinerary. For Everest, Annapurna, Langtang, Tilicho, Gokyo, and similar routes, many trekkers choose policies covering trekking up to 5,000 or 6,000 metres.",
      },
      {
        question:
          "Can I pre-arrange rescue coverage without going through insurance?",
        answer:
          "Yes. Trekkers, agencies, expedition teams, and private groups can establish direct rescue coordination arrangements with Mountain Helicopters Nepal before departure.",
      },
      {
        question: "What contact information should my guide have?",
        answer:
          "Your guide should carry our emergency phone and WhatsApp number, your insurance assistance contact, your policy number, your passport details, your itinerary, your emergency contact, and your latest known location.",
      },
      {
        question: "Should I share my itinerary with MHN before the trek?",
        answer:
          "Sharing your itinerary is helpful for remote or high-altitude routes. It can make location verification and dispatch coordination faster during an emergency.",
      },
      {
        question: "What if I’m trekking solo without a guide?",
        answer:
          "Carry a charged phone, power bank, offline map, GPS location tool, insurance details, emergency contacts, and your accommodation plan. Share your daily route with a trusted contact whenever possible.",
      },
    ],
  },
  {
    id: "during-emergency",
    label: "During an Emergency",
    count: 8,
    questions: [
      {
        question: "What information should I provide during the first call?",
        answer:
          "Provide the patient’s name, symptoms, exact location, altitude, GPS coordinates if available, weather conditions, landing possibilities, insurance details, and the caller’s contact number.",
      },
      {
        question: "Who decides whether the helicopter can fly?",
        answer:
          "The pilot makes the final operational decision based on weather, altitude, visibility, aircraft performance, landing conditions, and aviation requirements.",
      },
      {
        question: "How quickly can the helicopter be dispatched?",
        answer:
          "Dispatch time depends on location verification, weather, aircraft availability, insurance or payment authorization, flight clearance, and the condition of the patient.",
      },
      {
        question: "Can you rescue someone without GPS coordinates?",
        answer:
          "Yes, but accurate coordinates make the process faster. We can also work with village names, lodges, trekking camps, established helipads, trail landmarks, guides, and local contacts.",
      },
      {
        question: "What happens when there is no landing site?",
        answer:
          "The patient may need to be moved to the nearest safe helipad, open field, ridge, lodge area, or established pickup point before evacuation.",
      },
      {
        question: "Can a companion travel with the patient?",
        answer:
          "A companion may be allowed when aircraft performance, patient condition, altitude, payload, seating configuration, and the pilot’s safety decision permit it.",
      },
      {
        question: "What if the weather is unsafe?",
        answer:
          "The aircraft will not launch into unsafe conditions. Dispatch may be delayed until visibility, wind, cloud, route access, or landing conditions improve.",
      },
      {
        question: "Can you arrange ground ambulance transfer?",
        answer:
          "Yes. Ground ambulance and hospital handover can be coordinated when required and operationally available.",
      },
    ],
  },
  {
    id: "costs-insurance",
    label: "Costs & Insurance",
    count: 7,
    questions: [
      {
        question: "How much does helicopter rescue cost?",
        answer:
          "Cost depends on pickup location, altitude, route, aircraft staging, weather delays, fuel stops, landing difficulty, patient requirements, and final destination.",
      },
      {
        question: "Do I need to pay before dispatch?",
        answer:
          "For authorized insured cases, dispatch may proceed through the insurer’s assistance company. Uninsured or unauthorized cases generally require a payment guarantee before launch.",
      },
      {
        question: "Can MHN bill my insurance company directly?",
        answer:
          "Direct billing may be possible when the insurer or assistance company confirms authorization and accepts the rescue arrangement.",
      },
      {
        question: "What if my insurer is slow to respond?",
        answer:
          "A direct payment guarantee may be arranged through the patient, family, trekking agency, expedition sponsor, or another responsible party while insurance authorization continues.",
      },
      {
        question: "Are hospital charges included?",
        answer:
          "Hospital treatment, admission, accommodation, international repatriation, and other post-rescue costs are generally separate from the helicopter evacuation charge.",
      },
      {
        question: "Will I receive an itemized invoice?",
        answer:
          "Yes. Rescue documentation can include an itemized invoice, flight information, dispatch timeline, pickup details, patient information, and supporting correspondence.",
      },
      {
        question: "Can the final cost change?",
        answer:
          "Yes. The final cost may change if additional flight legs, weather re-attempts, remote staging, difficult pickup conditions, medical support, or extra coordination are required.",
      },
    ],
  },
  {
    id: "after-rescue",
    label: "After Rescue",
    count: 5,
    questions: [
      {
        question: "Where will the patient be taken?",
        answer:
          "The destination depends on the patient’s condition, route, weather, hospital readiness, and medical coordination. Common destinations include Kathmandu, Pokhara, Lukla, or another suitable medical facility.",
      },
      {
        question: "What documents will I receive?",
        answer:
          "Documents may include the rescue invoice, flight log, patient report, pickup-point data, dispatch timeline, correspondence log, and medical crew report where applicable.",
      },
      {
        question: "How soon is documentation prepared?",
        answer:
          "Documentation is generally prepared after the evacuation and may be delivered within 24 to 48 hours, depending on the case and available supporting information.",
      },
      {
        question: "Can you help with the insurance claim?",
        answer:
          "We can provide rescue-related documentation and coordinate with the insurer or assistance company, but claim approval remains the insurer’s decision.",
      },
      {
        question: "Can you coordinate with the patient’s family?",
        answer:
          "Yes. Our coordination team can assist with hospital updates, admission details, documentation, and communication with designated family contacts.",
      },
    ],
  },
  {
    id: "agencies-insurers",
    label: "For Agencies & Insurers",
    count: 3,
    questions: [
      {
        question: "Can trekking agencies establish a rescue arrangement?",
        answer:
          "Yes. Agencies can establish standing coordination procedures, contact protocols, documentation requirements, and billing arrangements.",
      },
      {
        question: "Can insurers create direct billing relationships?",
        answer:
          "Insurance assistance providers can contact our commercial or operations team to discuss authorization channels, invoicing, documentation, and case coordination.",
      },
      {
        question: "Do you support high-volume agency operations?",
        answer:
          "Yes. Coordination can be structured for agencies handling multiple trekking groups, expeditions, guides, and seasonal operations.",
      },
    ],
  },
];

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState("before-trek");
  const [openQuestion, setOpenQuestion] = useState(null);

  const selectedCategory =
    faqCategories.find((category) => category.id === activeCategory) ??
    faqCategories[0];

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setOpenQuestion(null);
  };

  const toggleQuestion = (questionIndex) => {
    setOpenQuestion((current) =>
      current === questionIndex ? null : questionIndex,
    );
  };

  return (
    <section
      id="faq"
      className="scroll-mt-[125px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
          — Questions, Answered
        </p>

        <h2 className="mt-3 font-fraunces text-[38px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#071825] sm:text-[48px] lg:text-[58px]">
          Thirty questions.{" "}
          <span className="italic text-[#9b6b00]">Straight answers.</span>
        </h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-[280px_1fr] xl:grid-cols-[340px_1fr]">
          <aside className="h-fit border-l-2 border-[#d7d9d7] pl-5">
            <div className="space-y-1">
              {faqCategories.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleCategoryChange(category.id)}
                    className={`flex w-full items-center justify-between py-3 text-left font-manrope text-[9px] font-bold uppercase tracking-[0.2em] transition ${
                      isActive
                        ? "text-[#071825]"
                        : "text-[#74808a] hover:text-[#071825]"
                    }`}
                  >
                    <span>{category.label}</span>

                    <span
                      className={
                        isActive ? "text-[#a66e00]" : "text-[#87929b]"
                      }
                    >
                      ({category.count})
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="border-t border-[#d4d7d7]">
            {selectedCategory.questions.map((item, index) => {
              const isOpen = openQuestion === index;

              return (
                <article
                  key={item.question}
                  className="border-b border-[#d4d7d7]"
                >
                  <button
                    type="button"
                    onClick={() => toggleQuestion(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span
                      className={`font-manrope text-[13px] font-medium leading-[1.5] transition sm:text-[14px] ${
                        isOpen ? "text-[#a66e00]" : "text-[#071825]"
                      }`}
                    >
                      {item.question}
                    </span>

                    <ChevronRight
                      size={17}
                      strokeWidth={1.8}
                      className={`shrink-0 text-[#a66e00] transition-transform duration-300 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[900px] pb-5 pr-10 font-manrope text-[11px] leading-[1.8] text-[#5b6872] sm:text-[12px]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}