// src/components/rescue/langtang/LangtangFaq.jsx

"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "How do I call for helicopter rescue in Langtang?",
    answer:
      "Call or WhatsApp Mountain Helicopters Nepal on +977-9712082949. Share the patient’s name, symptoms, exact location, altitude, GPS coordinates if available, nearby lodge or helipad, insurance details, weather conditions, and a reliable callback number.",
  },
  {
    question:
      "What happens in case of bad weather preventing helicopter rescue?",
    answer:
      "The aircraft will not launch into unsafe weather. Dispatch continues monitoring cloud, wind, visibility, precipitation, route access, and landing conditions. The patient may need to descend, move to a safer pickup point, remain sheltered, or wait until a safe flying window becomes available.",
  },
  {
    question: "What is the cost of Langtang helicopter rescue?",
    answer:
      "The final cost depends on the pickup point, altitude, flight distance, aircraft position, weather delays, landing difficulty, patient condition, medical requirements, insurance approval, and final hospital destination. Dispatch provides an estimate after reviewing the case.",
  },
  {
    question:
      "What documentation will I need for an insurance claim after a helicopter rescue in Langtang?",
    answer:
      "Your insurer may request the rescue invoice, flight log, pickup location, evacuation time, patient report, medical records, passport information, policy number, assistance-company case reference, GPS coordinates, and supporting communication from the guide or rescue team.",
  },
  {
    question: "What are the symptoms of HAPE on the Langtang trail?",
    answer:
      "Possible signs of High Altitude Pulmonary Edema include shortness of breath at rest, worsening cough, chest tightness, extreme fatigue, reduced ability to walk, blue lips or fingertips, and pink or frothy sputum. HAPE is life-threatening and requires immediate descent, oxygen where available, and urgent medical evacuation.",
  },
  {
    question: "How do I prepare for altitude sickness in Langtang?",
    answer:
      "Ascend gradually, schedule acclimatization days, stay hydrated, avoid excessive alcohol, do not sleep significantly higher after a rapid ascent, and never continue climbing when symptoms are worsening. Carry insurance covering your maximum altitude and know your emergency contacts before departure.",
  },
  {
    question:
      "What kind of GPS coordinates should I provide in an emergency situation?",
    answer:
      "Send coordinates in decimal degrees when possible, for example 28.123456, 85.654321. Also include the lodge, village, trail point, nearby landmark, current altitude, and a live-location pin from Google Maps, WhatsApp, Garmin inReach, or another reliable GPS device.",
  },
];

export default function LangtangFaq() {
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
            const answerId = `langtang-faq-answer-${index}`;

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
                        ? "text-[#a66e00]"
                        : "text-[#071825] group-hover:text-[#0d5ea6]"
                    }`}
                  >
                    {item.question}
                  </span>

                  <ChevronRight
                    size={18}
                    strokeWidth={1.8}
                    className={`shrink-0 text-[#a66e00] transition-transform duration-300 ${
                      isOpen ? "rotate-90" : "group-hover:translate-x-1"
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