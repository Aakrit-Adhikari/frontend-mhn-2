"use client";

import { useEffect, useRef, useState } from "react";

function WhatsappIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.04 4C9.42 4 4.04 9.32 4.04 15.86c0 2.1.56 4.15 1.62 5.95L4 28l6.36-1.62a12.1 12.1 0 0 0 5.68 1.42C22.66 27.8 28 22.48 28 15.94 28 9.36 22.66 4 16.04 4Zm0 21.78c-1.82 0-3.6-.5-5.14-1.46l-.36-.22-3.78.96 1-3.64-.24-.38a9.82 9.82 0 0 1-1.5-5.18c0-5.42 4.5-9.84 10.02-9.84 5.5 0 9.98 4.44 9.98 9.92 0 5.42-4.48 9.84-9.98 9.84Zm5.48-7.36c-.3-.14-1.76-.86-2.04-.96-.28-.1-.48-.14-.68.14-.2.3-.78.96-.96 1.16-.18.2-.36.22-.66.08-.3-.14-1.26-.46-2.4-1.48-.88-.78-1.48-1.74-1.66-2.04-.18-.3-.02-.46.14-.6.14-.14.3-.36.46-.54.16-.18.2-.3.3-.5.1-.2.06-.38-.02-.54-.08-.14-.68-1.64-.94-2.24-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.52.08-.8.38-.28.3-1.06 1.04-1.06 2.52s1.08 2.92 1.24 3.12c.16.2 2.12 3.22 5.14 4.52.72.3 1.28.48 1.72.62.72.22 1.38.18 1.9.12.58-.08 1.76-.72 2-1.42.24-.7.24-1.3.18-1.42-.08-.12-.28-.2-.58-.34Z" />
    </svg>
  );
}

export default function CTA() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(true);

  const phoneNumber = "9712082949";
  const message =
    "Hi — I have a quick question about a Mountain Helicopters flight.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    const timer = setTimeout(() => observer.observe(el), 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[620px] w-full items-center justify-center overflow-hidden bg-[#0d1a2d]"
    >
      <div
        className={`absolute inset-0 bg-cover bg-[center_40%] transition-transform duration-[1800ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
          visible ? "scale-100" : "scale-[1.06]"
        }`}
        style={{ backgroundImage: "url('/images/himalayan.jpg')" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,20,40,0.50)_0%,rgba(8,16,32,0.70)_55%,rgba(6,12,26,0.88)_100%)]" />

      <div className="relative z-[2] max-w-[820px] px-6 pb-24 pt-20 text-center">
        <div
          className={`mb-8 flex items-center justify-center gap-4 transition-all duration-700 delay-100 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <span className="h-px w-9 bg-[#f5a623]/80" />
          <span className="font-manrope text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[#f5a623]">
            Begin Your Journey
          </span>
          <span className="h-px w-9 bg-[#f5a623]/80" />
        </div>

        <h2
          className={`mb-6 font-fraunces text-[clamp(3.4rem,6vw,3.8rem)] font-extrabold leading-[1.05] text-white transition-all duration-[850ms] delay-[280ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-9 opacity-0"
          }`}
        >
          Plan Your
          <br />
          <span className="text-[#f5a623]">Helicopter Tour in Nepal</span>
        </h2>

        <p
          className={`mx-auto mb-10 max-[560px] font-manrope text-[clamp(0.9rem,1.6vw,1.05rem)] font-light leading-[1.75] text-white/65 transition-all duration-700 delay-[480ms] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Let us know where you would like to fly: Everest, Annapurna, Langtang, Muktinath, Mustang, or an individualized Himalayas flight plan. 
          We will assist in creating a safe and enjoyable experience that fits your schedule.
        </p>

        <div
          className={`flex flex-col items-center justify-center gap-3 transition-all duration-700 delay-[650ms] sm:flex-row ${
            visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <a
            href="/contact"
            className="group relative isolate flex h-[46px] w-[157px] items-center justify-center overflow-hidden bg-[#f5a623] font-manrope text-[14px] font-bold uppercase tracking-[-0.01em] text-[#06203c] transition-colors duration-300"
          >
            <span className="absolute inset-0 z-0 -translate-x-[101%] bg-white transition-transform duration-500 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0" />
            <span className="relative z-10">Inquiry Now →</span>
          </a>

          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative isolate flex h-[46px] w-[222.5px] items-center justify-center gap-2 overflow-hidden border border-white bg-transparent font-manrope text-[14px] font-bold uppercase text-white transition-colors duration-300"
          >
            <span className="absolute inset-0 z-0 -translate-x-[101%] bg-white transition-transform duration-500 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0" />

            <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#06203c]">
          <WhatsappIcon />
            Chat on WhatsApp
          </span>
        </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[90px] bg-gradient-to-b from-transparent to-[#0d1a2d]" />
    </section>
  );
}