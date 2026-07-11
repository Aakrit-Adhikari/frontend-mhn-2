"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "How safe are helicopter flight in Nepal?",
    answer:
      "Safety is the foundation of every decision we make. Our fleet meets EASA and CAAN standards, all pilots hold high-altitude certifications, and every flight uses HTAWS terrain-avoidance technology.",
  },
  {
    question: "What if weather cancels my flight?",
    answer:
      "If weather conditions are unsafe, we reschedule your flight or provide the best available alternative based on your itinerary.",
  },
  {
    question: "What is the best time to fly over the Himalayas?",
    answer:
      "The best seasons are March–May and October–November, when skies are clearer and mountain visibility is excellent.",
  },
  {
    question: "Can children fly on the helicopter tour?",
    answer:
      "Yes, children can fly with an accompanying adult. Safety briefing and seat arrangements are handled before the flight.",
  },
  {
    question: "Can I fully customize my helicopter charter?",
    answer:
      "Absolutely. We can customize routes, timings, destinations, landing points, and charter experiences around your requirements.",
  },
  {
    question: "Do you operate rescue and emergency helicopter services?",
    answer:
      "Yes, we support rescue and emergency operations across remote Himalayan regions when conditions allow.",
  },
  {
    question: "Is Mountain Helicopters Nepal officially certified?",
    answer:
      "We are fully certified by the Civil Aviation Authority of Nepal (CAAN) and comply with international EASA safety standards.",
  },
  {
    question: "How quickly can emergency rescue services be arranged?",
    answer:
      "Our dedicated rescue fleet is on standby around the clock to ensure rapid response in emergencies.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
    <section className="w-full overflow-hidden bg-[#f9f8f6] px-5 py-16 text-[#0d1f3c] sm:px-6 md:px-10 lg:px-20 lg:py-24">
      <div
        ref={faqRef}
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-[320px_1fr] lg:gap-[180px]"
      >
        <aside className="w-full">
          <p className="mb-5 font-manrope text-[13px] font-semibold uppercase tracking-[0.28em] text-[#F2B632] sm:text-[16px]">
            Questions
          </p>

          <h2 className="font-fraunces text-[34px] font-bold leading-[0.95] tracking-[-0.92px] text-[#0A1929] sm:text-[42px] lg:text-[44px]">
            Everything you
            <br />
            need to know.
          </h2>

          <p className="mt-6 max-w-[650px] font-manrope text-[15px] font-medium leading-7 tracking-normal text-gray-500 sm:text-[16px]">
            Still have questions? Our team is available 7 days a week.
          </p>

          <a
            href="/contact"
            className="group mt-7 inline-flex items-center gap-2.5 border-2 border-[#0d1f3c] bg-[#0d1f3c] px-6 py-3 font-manrope text-[14px] font-bold uppercase tracking-[-0.01em] text-white transition-all duration-300 hover:border-[#F2B632] hover:bg-[#fbfbfb] hover:text-[#F2B632] sm:px-8 sm:text-[16px]"
          >
            ASK US DIRECTLY
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </aside>

        <div className="w-full border-t border-[#d1cfc9] font-manrope">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#d1cfc9]">
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                className="group flex w-full cursor-pointer items-center justify-between gap-5 py-5 text-left sm:py-6"
              >
                <span className="font-manrope text-[15px] font-semibold leading-snug tracking-normal text-[#0d1f3c] transition group-hover:text-[#C49A3C] sm:text-[17px]">
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
                    >
                      <path d="M12 5V19" />
                      <path d="M5 12H19" />
                    </svg>
                  )}
                </span>
              </button>

              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-2xl pb-6 font-manrope text-[14px] leading-7 text-gray-500 sm:text-[15px]">
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