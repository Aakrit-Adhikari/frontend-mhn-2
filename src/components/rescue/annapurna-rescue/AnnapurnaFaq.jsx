
"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question:
      "Are nighttime helicopter rescues permitted in the Annapurna region?",
    answer:
      "Helicopter rescue operations in Nepal are generally conducted during daylight and suitable visual flight conditions. A nighttime mission depends on aviation regulations, aircraft capability, weather, visibility, landing-site conditions, and approval from the relevant authorities.",
  },
  {
    question:
      "What is the estimated price for an Annapurna helicopter evacuation?",
    answer:
      "The cost depends on the pickup location, altitude, aircraft staging point, weather, landing difficulty, patient condition, medical requirements, route, and final destination. Our dispatch team provides an estimated cost after receiving the rescue details.",
  },
  {
    question:
      "Is it possible to evacuate more than one injured trekker in the same flight?",
    answer:
      "It may be possible at lower elevations when aircraft payload, cabin configuration, patient condition, weather, and landing conditions allow it. At higher altitudes, reduced payload may require separate shuttle flights.",
  },
  {
    question:
      "What’s the flight time for a helicopter to Annapurna Base Camp?",
    answer:
      "Flight time depends on whether the aircraft departs from Pokhara or Kathmandu, current weather, routing, fuel requirements, and aircraft availability. Dispatch will confirm the estimated timing for the specific rescue mission.",
  },
  {
    question:
      "Is it possible for the helicopter to land at any random location in the Annapurna Conservation Area?",
    answer:
      "No. The pilot must identify a safe and operationally suitable landing site. The patient may need to be moved to an established helipad, open field, lodge area, ridge, or another nearby pickup point.",
  },
  {
    question:
      "Is the possession of travel insurance made mandatory for an Annapurna helicopter rescue?",
    answer:
      "Travel insurance is not the only way to arrange a rescue, but it is strongly recommended. Insured cases may proceed through the insurer’s assistance company, while uninsured cases generally require a payment guarantee before dispatch.",
  },
  {
    question:
      "To which medical facilities are the patients transferred after the aerial evacuation?",
    answer:
      "Patients may be transferred to hospitals or clinics in Pokhara or Kathmandu depending on their condition, hospital readiness, weather, route, and the recommendation of the coordinating medical team.",
  },
  {
    question:
      "From which specific trekking routes can helicopter evacuations be arranged in the Annapurna region?",
    answer:
      "Rescue may be coordinated from Annapurna Base Camp, Machhapuchhre Base Camp, Chhomrong, Deurali, Ghorepani, Mardi Himal, Manang, Thorong Phedi, High Camp, Thorong La, Tilicho, Muktinath, and other accessible points in the wider Annapurna region.",
  },
  {
    question:
      "What documents are needed to process a travel insurance claim?",
    answer:
      "The insurer may request the policy number, assistance-company case reference, rescue invoice, flight log, pickup details, patient report, medical documents, passport information, and supporting correspondence.",
  },
  {
    question:
      "How is the safety of the Annapurna helicopter rescue operation ensured?",
    answer:
      "Every mission is assessed for weather, visibility, wind, altitude, payload, aircraft performance, landing-site condition, patient requirements, and regulatory clearance. The pilot always makes the final go or no-go decision.",
  },
];

export default function AnnapurnaFaq() {
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
          Frequently asked questions.
        </h2>

        <div className="mt-8 border-t border-[#d4d7d7]">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="border-b border-[#d4d7d7]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`annapurna-faq-answer-${index}`}
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
                  id={`annapurna-faq-answer-${index}`}
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