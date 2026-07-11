"use client";

import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Flying into the Annapurna Sanctuary was the defining moment of our time in Nepal. The transition from Pokhara's green hills to the enormous walls of Annapurna I and Machhapuchhre was unforgettable.",
    name: "Catherine Whitmore",
    location: "London, UK",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&fit=crop",
  },
  {
    quote:
      "Flying over Annapurna was a dream I carried for years. The crew was calm, precise and deeply experienced. I felt well informed throughout the journey.",
    name: "James Hartley",
    location: "London, UK",
    date: "April 2026",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80&fit=crop",
  },
  {
    quote:
      "We booked a private anniversary charter and every moment was handled beautifully. The morning light inside the Annapurna Sanctuary was perfect for photography.",
    name: "Sophie Marceau",
    location: "Paris, France",
    date: "March 2026",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80&fit=crop",
  },
  {
    quote:
      "The safety briefing, passenger-weight checks and high-altitude guidance were clear and professional. The landing at Annapurna Base Camp was carefully managed.",
    name: "Dr. Kenji Watanabe",
    location: "Tokyo, Japan",
    date: "February 2026",
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80&fit=crop",
  },
  {
    quote:
      "From hotel pickup in Pokhara to the return transfer, the experience was seamless. Standing beneath Annapurna I was deeply moving.",
    name: "Anita Sharma",
    location: "Mumbai, India",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80&fit=crop",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const goNext = () => {
    setActive((previous) => (previous + 1) % TESTIMONIALS.length);
  };

  const goPrev = () => {
    setActive((previous) =>
      previous === 0 ? TESTIMONIALS.length - 1 : previous - 1,
    );
  };

  useEffect(() => {
    if (TESTIMONIALS.length <= 1) return undefined;

    const timeoutId = window.setTimeout(() => {
      goNext();
    }, 4000);

    return () => window.clearTimeout(timeoutId);
  }, [active]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      return;
    }

    const distance = touchStartX.current - touchEndX.current;
    const minimumSwipeDistance = 50;

    if (Math.abs(distance) >= minimumSwipeDistance) {
      if (distance > 0) {
        goNext();
      } else {
        goPrev();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="review"
      className="scroll-mt-36 w-full bg-[#031a36] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="mb-3 font-manrope text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f5a623]">
            Traveller Stories
          </p>

          <h2 className="font-fraunces text-[40px] font-semibold leading-[0.95] text-white sm:text-[45px]">
            What it feels like
            <br />
            to enter the Annapurna Sanctuary.
          </h2>
        </div>

        <div
          className="mx-auto mt-12 max-w-5xl touch-pan-y select-none overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${active * 100}%)`,
            }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex min-w-full flex-col items-start gap-6 md:flex-row md:items-center md:gap-8"
              >
                <div className="h-[170px] w-[170px] shrink-0 overflow-hidden rounded-xl sm:h-[200px] sm:w-[220px]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-manrope text-[18px] leading-[1.5] text-white/85">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <p className="mt-5 font-fraunces text-[30px] font-semibold leading-none text-white/70 sm:text-[25px]">
                    {testimonial.name}
                  </p>

                  <p className="mt-2 font-manrope text-[18px] leading-[1.35] text-white/40 sm:text-[15px]">
                    {testimonial.location}
                    <br />
                    {testimonial.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2.5">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setActive(index)}
              className="flex h-5 w-9 items-center justify-center"
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={active === index ? "true" : undefined}
            >
              <span
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === active
                    ? "w-8 bg-[#f5a623]"
                    : "w-6 bg-white/70 hover:bg-white"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}