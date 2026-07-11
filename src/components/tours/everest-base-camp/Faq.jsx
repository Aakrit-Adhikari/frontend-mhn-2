"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "How cold does it get at Everest Base Camp?",
    answer:
      "Temperature ranges between 15 degree celsius t0 -5 degrees in spring and winters where below -17 degree celsius in winter",
  },
  {
    question: "Why does the helicopter not land at the Everest base camp?",
    answer:
      "As Everest base camp is a part of the Khumbu Glacier which is an unstable terrain, there is no space for landing a helicopter.",
  },
  {
    question: "What is the age limit of the Everest base camp helicopter tour in Nepal?",
    answer:
      "There is no age limit for the Everest base camp helicopter tour in Nepal as anyone can join the helicopter tour. If there is any emergency or our guest feels uneasy we will immediately fly back to Kathmandu.",
  },
  {
    question: "Which is better, EBC or ABC? ",
    answer:
      "EBC is considered better as you get to see the highest peak in the world and experience massive altitude glaciers.",
  },
  {
    question: "Which is the highest camp a helicopter can go on in Everest?",
    answer:
      "The highest a helicopter reliably landed for routine operation and rescue mission on Mt. Everest is at Camp 2 (approx 6400 meters)",
  },
  {
    question: "Do we need a passport while traveling by helicopter towards Everest base camp?",
    answer:
      "Yes you need to carry a passport for a helicopter tour towards Everest base camp. If you are Nepali and travelling there then you should bring an original official photo ID card for airport security, flight insurance and local entry permits.",
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
    <section id="faq" className="scroll-mt-36 flex min-h-screen items-center justify-center bg-[#f9f8f6] px-6 py-20 text-[#0d1f3c] lg:px-20 lg:py-24">
      <div
        ref={faqRef}
        className="grid w-full max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[320px_1fr] lg:gap-50" >
        <aside >
          <p className="mb-5 text-[16px] font-semibold uppercase tracking-[0.28em] text-[#F2B632] font-manrope">
            Questions
          </p>

          <h2 className="font-fraunces text-[36.95px] font-bold leading-[33.99px] tracking-[-0.92px] text-[#0A1929] ">
            Everything you
            <br />
            need to know.
          </h2>

          <p className="mt-6 max-w-162.5 text-sm font-medium leading-7 text-gray-500 font-manrope tracking-normal">
            Still have questions? Our team is available 7 days a week.
          </p>

          <a
            href="/contact"
            className="mt-6.5 inline-flex items-center gap-2.5 bg-[#0d1f3c] text-white text-[16px] font-bold  uppercase px-8 py-3 border-2 border-[#0d1f3c] transition-all duration-300 group hover:bg-[#fbfbfb] hover:border-[#F2B632] hover:text-[#F2B632] font-manrope tracking-[-0.01em]"
            >
            ASK US DIRECTLY
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
           
        </aside>

        <div className="max-h-155 border-t border-[#d1cfc9] pr-2 font-manrope">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#d1cfc9]">
              <button
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-[16px] font-semibold leading-snug text-[#0d1f3c] transition group-hover:text-[#C49A3C] font-manrope tracking-normal ">
                  {faq.question}
                </span>

                <span
  className="flex h-7 w-7 shrink-0 items-center justify-center text-[#0A1929]"
>
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
