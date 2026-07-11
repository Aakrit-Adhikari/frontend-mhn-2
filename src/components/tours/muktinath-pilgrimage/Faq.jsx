"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "Is the Muktinath helicopter tour available on a sharing basis?",
    answer:
      "In contrast to our helicopter tours with the ABC or EBC as destinations, the Muktinath tour functions as a private charter most of the time. The majority of visitors travel to Muktinath as a private group or family. Occasionally, it may be possible to share a helicopter when several guests book for the same date. Please inform us in advance if you wish to join a group. Shared-flight availability cannot be guaranteed for specific dates.",
  },
  {
    question: "How long do we spend at Muktinath Temple?",
    answer:
      "Our standard allocated ground time at Muktinath is approximately 60 minutes. This allows time for the 108-tap bath, darshan at the main Vishnu temple, a visit to Jwala Mai Temple, prayer, and exploration. Extended private-charter packages may be available for pilgrims who require additional time for puja or meditation.",
  },
  {
    question: "Can the 60-minute ground time be extended?",
    answer:
      "Yes, it may be extended with a private charter. Subject to weather, aircraft availability, and operational requirements, a private charter may provide approximately two to three hours at Muktinath. Please request extended ground time when making your booking.",
  },
  {
    question: "Is there a Jomsom fuel stop on the Kathmandu route?",
    answer:
      "Helicopters travelling from Kathmandu may make a brief operational or refuelling stop at Jomsom Airport, situated at approximately 2,743 metres. Whether a stop is required depends on aircraft performance, passenger load, fuel planning, weather, and the pilot's operational assessment.",
  },
  {
    question: "Can we get breakfast at Muktinath?",
    answer:
      "Yes. Ranipauwa, close to Muktinath Temple, has teahouses and small restaurants serving Nepali meals, dal bhat, noodles, eggs, tea, and coffee. Carry sufficient Nepali currency because card payment may not always be available.",
  },
  {
    question: "What happens if weather cancels the flight?",
    answer:
      "Our operations team reviews the latest weather and visibility before departure. When conditions are unsafe, the flight may be delayed, rescheduled, rerouted, or cancelled. Depending on your booking terms, you may move the flight to another suitable date or receive the applicable refund for an operator-cancelled flight.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);

  const toggle = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (faqRef.current && !faqRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section
      id="faq"
      className="scroll-mt-36 flex min-h-screen items-center justify-center bg-[#f9f8f6] px-6 py-20 text-[#0d1f3c] lg:px-20 lg:py-24"
    >
      <div
        ref={faqRef}
        className="grid w-full max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[320px_1fr] lg:gap-20"
      >
        <aside>
          <p className="mb-5 font-manrope text-[16px] font-semibold uppercase tracking-[0.28em] text-[#F2B632]">
            Questions
          </p>

          <h2 className="font-fraunces text-[36.95px] font-bold leading-[33.99px] tracking-[-0.92px] text-[#0A1929]">
            Everything you
            <br />
            need to know.
          </h2>

          <p className="mt-6 max-w-[650px] font-manrope text-sm font-medium leading-7 tracking-normal text-gray-500">
            Still have questions? Our team is available seven days a week.
          </p>

          <a
            href="/contact"
            className="group mt-6 inline-flex items-center gap-2.5 border-2 border-[#0d1f3c] bg-[#0d1f3c] px-8 py-3 font-manrope text-[16px] font-bold uppercase tracking-[-0.01em] text-white transition-all duration-300 hover:border-[#F2B632] hover:bg-[#fbfbfb] hover:text-[#F2B632]"
          >
            Ask Us Directly

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </aside>

        <div className="max-h-[620px] overflow-y-auto border-t border-[#d1cfc9] pr-2 font-manrope scroll-smooth">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border-b border-[#d1cfc9]">
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-manrope text-[16px] font-semibold leading-snug tracking-normal text-[#0d1f3c] transition-colors duration-300 group-hover:text-[#C49A3C]">
                  {faq.question}
                </span>

                <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[#0A1929]">
                  {openIndex === index ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M6 6L18 18" />
                      <path d="M18 6L6 18" />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M12 5V19" />
                      <path d="M5 12H19" />
                    </svg>
                  )}
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-2xl pb-7 text-sm leading-7 text-gray-500">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}