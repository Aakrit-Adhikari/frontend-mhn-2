"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "Is Gosaikunda Lake frozen?",
    answer:
      "Gosaikunda Lake is commonly frozen during the winter months, particularly from December through February. From spring to late autumn, visitors can normally see the lake’s open blue water, although snow and ice conditions vary each year.",
  },
  {
    question: "Can elderly passengers and children take this tour?",
    answer:
      "The tour does not involve a multi-day trek, making it suitable for many families and elderly pilgrims. However, the helicopter lands at approximately 4,380 metres. Children, elderly passengers and anyone with heart, lung or blood-pressure conditions should consult a qualified medical professional before booking.",
  },
  {
    question: "Do we receive enough time for a holy bath or puja?",
    answer:
      "Passengers normally receive approximately 30 to 40 minutes at Gosaikunda when weather and landing conditions permit. This can provide time for a short puja, photography and touching the sacred water. A full bath may not always be practical because of cold temperatures, altitude, ground conditions and the pilot’s required departure time.",
  },
  {
    question: "What is the helicopter passenger-weight limit?",
    answer:
      "The allowable payload depends on passenger weight, baggage, fuel, temperature, wind and high-altitude aircraft performance. The operations team must receive accurate individual weights before confirming the flight. Passenger capacity may be reduced or split into additional rotations when required.",
  },
  {
    question: "What should I wear for the Gosaikunda flight?",
    answer:
      "Wear thermal inner layers, a warm down jacket, gloves, a beanie covering the ears and comfortable closed-toe shoes with good grip. UV-protective or polarised sunglasses, sunscreen and lip balm are also recommended because sunlight and glare can be intense at altitude.",
  },
  {
    question: "What happens if the flight is cancelled because of weather?",
    answer:
      "When visibility, cloud, rain, snowfall or strong winds make the route unsafe, the flight may be delayed, rescheduled or cancelled. Eligible passengers may move their booking to the next suitable departure or receive a refund according to the confirmed cancellation and refund terms.",
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
      className="scroll-mt-36 bg-[#f9f8f6] px-6 py-20 text-[#0d1f3c] lg:px-20 lg:py-24"
    >
      <div
        ref={faqRef}
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-14 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-24 xl:gap-[150px]"
      >
        {/* LEFT CONTENT */}
        <aside className="flex flex-col justify-center lg:sticky lg:top-[170px]">
          <p className="mb-5 font-manrope text-[14px] font-semibold uppercase tracking-[0.28em] text-[#F2B632]">
            Questions
          </p>

          <h2 className="font-fraunces text-[36px] font-bold leading-[0.98] tracking-[-0.92px] text-[#0A1929] md:text-[42px]">
            Everything you
            <br />
            need to know.
          </h2>

          <p className="mt-6 max-w-[420px] font-manrope text-sm font-medium leading-7 text-gray-500">
            Find practical information about the Gosaikunda landing, weather,
            passenger weight, clothing and pilgrimage experience.
          </p>

          <a
            href="/contact"
            className="group mt-[26px] inline-flex w-fit items-center gap-2.5 border-2 border-[#0d1f3c] bg-[#0d1f3c] px-8 py-3 font-manrope text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:border-[#C49A3C] hover:bg-[#fbfbfb] hover:text-[#C49A3C]"
          >
            Ask Us Directly

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </aside>

        {/* FAQ ACCORDION */}
        <div className="border-t border-[#d1cfc9] font-manrope">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className="border-b border-[#d1cfc9]"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`gosaikunda-faq-${index}`}
                  className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={`font-manrope text-[15px] font-semibold leading-6 transition-colors duration-300 md:text-[16px] ${
                      isOpen
                        ? "text-[#C49A3C]"
                        : "text-[#0d1f3c] group-hover:text-[#C49A3C]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-[#C49A3C] bg-[#C49A3C] text-white"
                        : "border-[#0A1929]/20 text-[#0A1929] group-hover:border-[#C49A3C] group-hover:text-[#C49A3C]"
                    }`}
                  >
                    {isOpen ? (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <path d="M6 12H18" />
                      </svg>
                    ) : (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
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
                  id={`gosaikunda-faq-${index}`}
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-7 pr-8 font-manrope text-sm leading-7 text-gray-500">
                      {faq.answer}
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