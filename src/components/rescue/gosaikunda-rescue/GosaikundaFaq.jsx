// src/components/rescue/gosaikunda/GosaikundaFaq.jsx

"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question:
      "Are night-time helicopter rescues permitted in the Gosaikunda region?",
    answer:
      "Helicopter rescue flights in Nepal are generally operated during daylight and suitable visual flight conditions. Night-time evacuation depends on aviation regulations, aircraft capability, visibility, weather, landing-site safety and approval from the relevant authorities.",
  },
  {
    question:
      "What is the estimated price for a Gosaikunda helicopter evacuation?",
    answer:
      "The cost depends on the pickup point, altitude, flight distance, aircraft staging location, weather, landing difficulty, patient condition, medical requirements, insurance authorization and final destination. Our dispatch team provides an estimate after reviewing the rescue details.",
  },
  {
    question:
      "Is it possible to evacuate more than one injured trekker in the same flight?",
    answer:
      "It may be possible when the combined patient condition, passenger weight, aircraft configuration, altitude, weather and landing conditions remain within safe limits. At higher elevations, payload restrictions may require separate shuttle flights.",
  },
  {
    question:
      "What’s the flight time for a helicopter to Gosaikunda Lake?",
    answer:
      "Flight time varies according to the departure point, aircraft position, weather, routing and operational requirements. A direct flight from Kathmandu is often comparatively short, but dispatch timing also depends on authorization, preparation and a safe weather window.",
  },
  {
    question:
      "Is it possible for the helicopter to land at any random location in the Langtang conservation area?",
    answer:
      "No. The pilot must identify a safe, clear and operationally suitable landing area. The patient may need to be moved to an established helipad, open field, lodge area, ridge or another nearby pickup point before evacuation.",
  },
  {
    question:
      "Is the possession of travel insurance made mandatory for a Gosaikunda helicopter rescue?",
    answer:
      "Travel insurance is not the only way to arrange a rescue, but it is strongly recommended. Insured cases may proceed through the insurer’s assistance company, while uninsured or unauthorized cases generally require a payment guarantee before dispatch.",
  },
  {
    question:
      "To which medical facilities are the patients transferred after the aerial evacuation?",
    answer:
      "Patients are generally transferred to an appropriate hospital or clinic in Kathmandu based on their condition, hospital readiness, route, weather and the advice of the coordinating medical team.",
  },
  {
    question:
      "From which specific trekking routes can helicopter evacuations be arranged in the Gosaikunda region?",
    answer:
      "Rescue may be coordinated from Gosaikunda Lake, Lauribina La Pass, Laurebinayak, Chandanbari, Cholang Pati, Ghopte, Dhunche and other accessible points along the Gosaikunda, Langtang and Helambu routes.",
  },
  {
    question:
      "What documents are needed to process a travel insurance claim?",
    answer:
      "Your insurer may request the policy number, assistance-company case reference, rescue invoice, flight log, pickup details, patient report, medical records, passport information and supporting communication from the guide, hospital or rescue team.",
  },
  {
    question:
      "How is the safety of the Gosaikunda helicopter rescue operation ensured?",
    answer:
      "Every mission is assessed for weather, visibility, wind, altitude, payload, aircraft performance, landing-site condition, patient requirements and regulatory clearance. The pilot always makes the final go or no-go decision.",
  },
];

export default function GosaikundaFaq() {
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
            const answerId = `gosaikunda-faq-answer-${index}`;

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