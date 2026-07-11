"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question:
      "Is the Langtang helicopter tour safe for children and elderly passengers?",
    answer:
      "Yes, Langtang helicopter tours can be done with children and the elderly because it is easy with the ease that trekking is not involved and no physical fitness is needed. The altitude of landing at Kyanjin Gompa is 3,870 meters with a minimum ground time of 60 to 90 minutes. Nevertheless, those individuals having life-threatening problems with heart, lung or respiratory organs must seek medical attention before planning.",
  },
  {
    question: "Where does the helicopter land during the Langtang tour?",
    answer:
      "The helicopter commonly lands at the Kyanjin Gompa (also called Kyanjin Village) which is at the altitude of 3,870m / 12,696ft. It is the highlight of the Langtang helicopter tour where one can witness clear views of Langtang Lirung, Langtang Glacier, Dorje Lakpa, Yala Peak, and surrounding Himalayan peaks.",
  },
  {
    question: "How long is the Langtang helicopter tour from Kathmandu?",
    answer:
      "Kathmandu to Kyanjin Gompa Flight duration: Usually a one-way flight to Kyanjin Gompa takes about 25-35 mins. Helicopter tour time: Normally helicopter tours including hotel pick-up, drop-off, airport check-in, flight, and time on the ground for the trip to Kyanjin Gompa will take approximately 2-4 hours.",
  },
  {
    question: "Why do you ask for passenger weight before the flight?",
    answer:
      "We do need to know the passenger weight for the helicopter safety and the balance of the aircraft. The pilot of the helicopter calculates the weight of passengers for payload, fuel capacity, performance at altitude, and condition of landing with the help of your weight. This is a common safety question to make safe travel on altitude of helicopters Nepal.",
  },
  {
    question: "What happens if the weather is bad on the flight day?",
    answer:
      "In case of flight cancellation due to any weather and visibility issues we will give you a free rescheduling for the following available sunny day or refund you based on booking terms and condition. Your safety comes first. Langtang helicopter flight will not be conducted if our pilot thinks that the weather is not suitable.",
  },
  {
    question: "What should I wear for the Langtang helicopter tour?",
    answer:
      "As Kyanjin Gompa is significantly colder than Kathmandu, you need to dress yourself warm and windproof. We recommend down jackets, a thermal layer, gloves, warm hat, sunglasses, and good comfortable shoes. Sunglasses are essential as the ultraviolet rays become stronger as you ascend to high altitude.",
  },
  {
    question: "Is altitude sickness a problem on the Langtang helicopter tour?",
    answer:
      "Since there is a short ground time at Kyanjin Gompa, the chances of serious altitude sickness is low. We get occasional few passengers complaining about slight shortness of breath, slight headache, faster pulse rate due to high landing altitude of 3870m. We recommend passengers to not run or exert themselves unnecessarily and let the pilot know immediately if they are not feeling well.",
  },
  {
    question: "Can I book the Langtang helicopter tour for 2 or 3 people?",
    answer:
      "Yes, bookings for 2 or 3 people can be made. For shared group join ups, we will attempt to group you with other passengers. If you require privacy, or wish to fly immediately, and don’t wish to wait for other passengers to join your trip, then a private helicopter charter may be purchased.",
  },
  {
    question: "Is the Kyanjin cheese factory included in the tour?",
    answer:
      "Sure you can visit the Kyanjin cheese factory during your ground time if it is open and the weather permits, and it is one of the most peculiar local attractions to Kyanjin Gompa as part of the cultural aspect to the helicopter tour.",
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
    <section
  id="faq"
  className="scroll-mt-36 flex min-h-screen items-start justify-center bg-[#f9f8f6] px-6 py-20 text-[#0d1f3c] lg:px-20 lg:py-24"
>
      <div
        ref={faqRef}
        className="grid w-full max-w-6xl grid-cols-1 items-start gap-14 lg:grid-cols-[320px_1fr] lg:gap-[200px]"
      >
        <aside className="flex flex-col justify-center lg:min-h-[620px]">
          <p className="mb-5 font-manrope text-[16px] font-semibold uppercase tracking-[0.28em] text-[#F2B632]">
            Questions
          </p>

          <h2 className="font-fraunces text-[36.95px] font-bold leading-[33.99px] tracking-[-0.92px] text-[#0A1929]">
            Everything you
            <br />
            need to know.
          </h2>

          <p className="mt-6 max-w-[650px] font-manrope text-sm font-medium leading-7 tracking-normal text-gray-500">
            Still have questions? Our team is available 7 days a week.
          </p>

          <a
            href="/contact"
            className="group mt-[26px] inline-flex w-fit items-center gap-2.5 border-2 border-[#0d1f3c] bg-[#0d1f3c] px-8 py-3 font-manrope text-[16px] font-bold uppercase tracking-[-0.01em] text-white transition-all duration-300 hover:border-[#C49A3C] hover:bg-[#fbfbfb] hover:text-[#C49A3C]"
          >
            ASK US DIRECTLY
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </aside>

        <div className="border-t border-[#d1cfc9] pr-2 font-manrope">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#d1cfc9]">
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
              >
                <span
                  className={`font-manrope text-[16px] font-semibold leading-snug tracking-normal transition-colors duration-300 ${
                    openIndex === index
                      ? "text-[#C49A3C]"
                      : "text-[#0d1f3c] group-hover:text-[#C49A3C]"
                  }`}
                >
                  {faq.question}
                </span>

                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center transition-colors duration-300 ${
                    openIndex === index
                      ? "text-[#C49A3C]"
                      : "text-[#0A1929] group-hover:text-[#C49A3C]"
                  }`}
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
                  <p className="max-w-2xl pb-7 font-manrope text-sm leading-7 text-gray-500">
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