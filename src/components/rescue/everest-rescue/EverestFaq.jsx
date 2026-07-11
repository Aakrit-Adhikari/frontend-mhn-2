// src/components/rescue/detail/EverestFaq.jsx

"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqCategories = [
  {
    id: "before-trek",
    label: "Before You Trek",
    count: 3,
    questions: [
      {
        question: "Do I need travel insurance for an Everest region trek?",
        answer:
          "Travel insurance is strongly recommended for every Everest region trek. Your policy should specifically include emergency helicopter evacuation, trekking at your planned maximum altitude, medical treatment, and repatriation where required.",
      },
      {
        question:
          "What altitude limit should my insurance cover for Everest?",
        answer:
          "Your policy should cover at least the highest point on your itinerary. For Everest Base Camp, Kala Patthar, Gokyo, and nearby high-altitude routes, coverage up to 6,000 metres is commonly recommended.",
      },
      {
        question:
          "Should I share my Everest itinerary with MHN before the trek?",
        answer:
          "Sharing your itinerary, lodge plan, guide contact, insurance information, and expected route can help speed up location verification and dispatch coordination during an emergency.",
      },
    ],
  },
  {
    id: "during-emergency",
    label: "During Emergency",
    count: 5,
    questions: [
      {
        question: "What information should I provide during the first call?",
        answer:
          "Provide the patient’s name, symptoms, exact location, altitude, GPS coordinates if available, nearby lodge or helipad, weather conditions, insurance details, and a reliable callback number.",
      },
      {
        question: "Who makes the final decision to launch the helicopter?",
        answer:
          "The pilot makes the final operational decision based on weather, visibility, wind, altitude, aircraft performance, landing conditions, payload, and aviation requirements.",
      },
      {
        question: "How quickly can an Everest rescue be dispatched?",
        answer:
          "Dispatch time depends on location verification, weather, aircraft availability, insurance or payment authorization, CAAN clearance, and the patient’s condition.",
      },
      {
        question: "What happens if there is no safe landing site?",
        answer:
          "The patient may need to be moved to the nearest secure helipad, lodge area, open field, ridge, or established pickup point before evacuation.",
      },
      {
        question: "Can a companion travel with the patient?",
        answer:
          "A companion may be permitted when patient condition, altitude, payload, aircraft configuration, and the pilot’s safety decision allow it.",
      },
    ],
  },
  {
    id: "costs-insurance",
    label: "Costs & Insurance",
    count: 4,
    questions: [
      {
        question: "How much does Everest helicopter rescue cost?",
        answer:
          "Cost depends on pickup altitude, route, staging point, weather, fuel stops, landing difficulty, patient requirements, aircraft positioning, and final destination.",
      },
      {
        question: "Do I need to pay before dispatch?",
        answer:
          "Authorized insured cases may proceed through the insurer’s assistance company. Uninsured or unauthorized cases generally require a payment guarantee before launch.",
      },
      {
        question: "Can MHN bill my insurer directly?",
        answer:
          "Direct billing may be possible when the insurer or assistance company confirms authorization and accepts the rescue arrangement.",
      },
      {
        question: "Are hospital charges included in the rescue cost?",
        answer:
          "Hospital admission, treatment, accommodation, international repatriation, and recovery expenses are generally separate from the helicopter evacuation charge.",
      },
    ],
  },
  {
    id: "logistics",
    label: "Logistics",
    count: 3,
    questions: [
      {
        question: "Where will the patient be taken?",
        answer:
          "The patient may be transferred to Lukla for stabilization, Kathmandu for hospital treatment, or another suitable facility based on medical condition, weather, route, and hospital readiness.",
      },
      {
        question: "Can rescue flights operate from Lukla?",
        answer:
          "Lukla staging may be used when aircraft, crew, weather, maintenance support, and operational conditions allow it.",
      },
      {
        question: "What documents are provided after evacuation?",
        answer:
          "Documentation may include an itemized invoice, flight log, dispatch timeline, pickup-point details, patient report, GPS coordinates, and supporting correspondence.",
      },
    ],
  },
];

export default function EverestFaq() {
  const [activeCategory, setActiveCategory] = useState("before-trek");
  const [openQuestion, setOpenQuestion] = useState(null);

  const selectedCategory =
    faqCategories.find((category) => category.id === activeCategory) ??
    faqCategories[0];

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setOpenQuestion(null);
  };

  const toggleQuestion = (index) => {
    setOpenQuestion((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
          — Questions, Answered
        </p>

        <h2 className="mt-4 font-fraunces text-[40px] font-semibold leading-[1.02] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
          Fifteen questions.{" "}
          <span className="italic text-[#9b6b00]">Straight answers.</span>
        </h2>

        <div className="mt-9 grid gap-10 lg:grid-cols-[290px_1fr] xl:grid-cols-[340px_1fr]">
          <aside className="h-fit border-l-2 border-[#d4d7d7] pl-5">
            <div className="space-y-1">
              {faqCategories.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleCategoryChange(category.id)}
                    className={`flex w-full items-center justify-between py-3 text-left font-manrope text-[9px] font-bold uppercase tracking-[0.2em] transition-colors ${
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
                      className={`font-manrope text-[13px] font-medium leading-[1.5] transition-colors sm:text-[14px] ${
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