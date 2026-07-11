"use client";

import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "The Gosaikunda helicopter tour was peaceful, spiritual, and beautifully organized. Flying over Pokhara, Jomsom, and Mustang before reaching the temple made the journey feel truly special.",
    name: "Rajesh Sharma",
    location: "Kathmandu, Nepal",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80&fit=crop",
  },
  {
    quote:
      "We wanted to visit Gosaikunda without the long road journey, and this flight made it possible in one day. The crew handled everything smoothly, from pickup to temple visit and return.",
    name: "Priya Mehta",
    location: "Mumbai, India",
    date: "April 2026",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80&fit=crop",
  },
  {
    quote:
      "The views of Annapurna, Dhaulagiri, and the Mustang valley were unforgettable. Reaching Gosaikunda by helicopter felt safe, comfortable, and deeply meaningful.",
    name: "Amit Verma",
    location: "Delhi, India",
    date: "March 2026",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80&fit=crop",
  },
  {
    quote:
      "My parents had always wished to visit Gosaikunda. The helicopter tour made the pilgrimage easy for them, with enough time for darshan and blessings at the temple.",
    name: "Sunita Adhikari",
    location: "Pokhara, Nepal",
    date: "February 2026",
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80&fit=crop",
  },
  {
    quote:
      "Everything was well planned. The flight route, mountain views, temple landing, and return journey were all handled professionally. A once-in-a-lifetime Gosaikunda experience.",
    name: "Vikram Patel",
    location: "Ahmedabad, India",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&fit=crop",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const goNext = () => {
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const goPrev = () => {
    setActive((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (TESTIMONIALS.length <= 1) return;

    const id = setTimeout(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 2000);

    return () => clearTimeout(id);
  }, [active]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      goNext();
    } else {
      goPrev();
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
            Pilgrim Stories
          </p>

          <h2 className="font-fraunces text-[40px] font-semibold leading-[0.95] text-white sm:text-[45px]">
            What it feels like
            <br />
            to fly to Gosaikunda.
          </h2>
        </div>

        <div
          className="mx-auto mt-12 max-w-5xl overflow-hidden touch-pan-y select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="flex min-w-full flex-col items-start gap-6 md:flex-row md:items-center md:gap-8"
              >
                <div className="h-[170px] w-[170px] shrink-0 overflow-hidden rounded-xl sm:h-[200px] sm:w-[220px]">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-manrope text-[18px] leading-[1.5] text-white/85 sm:text-[18px]">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <p className="mt-5 font-fraunces text-[30px] font-semibold leading-none text-white/70 sm:text-[25px]">
                    {t.name}
                  </p>

                  <p className="mt-2 font-manrope text-[18px] leading-[1.35] text-white/40 sm:text-[15px]">
                    {t.location}
                    <br />
                    {t.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className="flex h-5 w-7 items-center justify-center"
              aria-label={`Go to testimonial ${i + 1}`}
            >
              <span
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-[#f5a623]" : "w-6 bg-white/70"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
