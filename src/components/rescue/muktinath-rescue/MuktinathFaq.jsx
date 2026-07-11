"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "How is the Muktinath helicopter rescue cost calculated?",
    answer:
      "The final cost depends on the pickup location, flight distance, aircraft staging point, weather, landing difficulty, patient condition, passenger weight, medical requirements, insurance authorization and final hospital destination. Our dispatch team provides an estimate after reviewing the rescue details.",
  },
  {
    question: "Is travel insurance accepted for the Muktinath rescue?",
    answer:
      "Yes. Travel insurance may be used when the policy includes emergency helicopter evacuation at the required altitude and the insurer or assistance company authorizes the rescue. Some cases require a guarantee of payment, policy reference, medical report or rescue approval before dispatch.",
  },
  {
    question:
      "What is the maximum weight limit for the Muktinath rescue helicopter?",
    answer:
      "There is no single fixed passenger-weight limit for every mission. Allowable payload depends on altitude, temperature, fuel requirement, aircraft configuration, weather, landing conditions and the number of people onboard. The pilot determines the final safe payload for each rescue.",
  },
  {
    question:
      "How is altitude sickness managed during the Muktinath rescue flight?",
    answer:
      "The patient may receive supplemental oxygen and basic first-aid support during evacuation when required. Guides or local responders should begin safe descent and provide oxygen before the helicopter arrives whenever possible. Severe HAPE or HACE requires urgent medical evacuation and hospital assessment.",
  },
  {
    question: "Can the Muktinath rescue be arranged from Jomsom to Muktinath?",
    answer:
      "Yes, rescue coordination may be arranged from Jomsom, Pokhara, Kathmandu or another suitable staging point depending on aircraft position, weather, crew availability, fuel planning and operational conditions.",
  },
  {
    question:
      "What immediate actions should be taken while waiting for the helicopter?",
    answer:
      "Keep the patient warm and protected from wind, provide oxygen if available, avoid unnecessary movement after serious injury, prepare insurance and identity documents, share accurate GPS coordinates, clear loose objects from the landing area and remain available by phone or radio for dispatch instructions.",
  },
];

export default function MuktinathFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
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

        <h2 className="mt-4 font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 border-t border-[#d4d7d7]">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `muktinath-faq-answer-${index}`;

            return (
              <article
                key={item.question}
                className="border-b border-[#d4d7d7]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span
                    className={`font-manrope text-[12px] font-medium leading-[1.55] transition-colors sm:text-[13px] lg:text-[14px] ${
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
                  id={answerId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[1050px] pb-5 pr-10 font-manrope text-[11px] leading-[1.8] text-[#5b6872] sm:text-[12px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}