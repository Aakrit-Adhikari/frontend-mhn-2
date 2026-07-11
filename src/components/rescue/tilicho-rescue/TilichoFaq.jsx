// src/components/rescue/tilicho/TilichoFaq.jsx

"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "How much is a helicopter rescue near Tilicho Lake?",
    answer:
      "The final cost depends on the pickup location, altitude, aircraft staging point, weather, landing difficulty, patient condition, medical requirements, passenger weight, insurance approval and the final hospital destination. Our dispatch team provides an estimate after reviewing the full rescue details.",
  },
  {
    question: "Does travel insurance cover helicopter rescue near Tilicho?",
    answer:
      "It may, provided your policy includes emergency helicopter evacuation at the required altitude and trekking is listed as a covered activity. The insurance company or assistance provider may require a case reference, medical report, guide statement or payment guarantee before dispatch.",
  },
  {
    question: "Do I need to pay before the helicopter is dispatched?",
    answer:
      "For approved insured cases, the assistance company may issue a payment guarantee directly. When insurance approval is unavailable or delayed, a direct-payment guarantee or deposit may be required before the helicopter can be dispatched.",
  },
  {
    question: "What happens if my insurance doesn't cover the full cost?",
    answer:
      "The patient, family, trekking agency or another responsible party may need to pay the uncovered balance. This may include the policy excess, deductible, altitude exclusions, non-covered medical items or any amount above the insurer’s approved limit.",
  },
  {
    question:
      "How much does a shared helicopter evacuation cost compared to private?",
    answer:
      "A shared evacuation may reduce the total cost when another compatible flight is available and the arrangement is medically appropriate, operationally safe and approved by the pilot. A private rescue remains dedicated to one patient or group and usually costs more.",
  },
  {
    question: "Do trekking agencies arrange insurance for you?",
    answer:
      "Trekking agencies may help clients select or verify travel insurance, but they do not normally act as the insurance provider. Each traveller should purchase a suitable policy before departure and confirm that it covers trekking, emergency helicopter evacuation and the maximum altitude of the Tilicho route.",
  },
];

export default function TilichoFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
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
          Frequently asked questions.
        </h2>

        <div className="mt-8 border-t border-[#d4d7d7]">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `tilicho-faq-answer-${index}`;

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
                  className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span
                    className={`font-manrope text-[12px] font-medium leading-[1.55] transition-colors duration-300 sm:text-[13px] lg:text-[14px] ${
                      isOpen
                        ? "text-[#0d5ea6]"
                        : "text-[#071825] group-hover:text-[#0d5ea6]"
                    }`}
                  >
                    {item.question}
                  </span>

                  <ChevronRight
                    size={18}
                    strokeWidth={1.8}
                    className={`shrink-0 text-[#a66e00] transition-all duration-300 ${
                      isOpen
                        ? "rotate-90"
                        : "group-hover:translate-x-1"
                    }`}
                  />
                </button>

                <div
                  id={answerId}
                  role="region"
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