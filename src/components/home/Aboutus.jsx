"use client";

import { useEffect, useRef, useState } from "react";

// ── Why Choose Us data ────────────────────────────────────────
const REASONS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        <path d="M15 5.5l1.5 1.5-3 3" />
      </svg>
    ),
    title: "5,000+ Hour Mountain Pilots",
    desc: "Every pilot holds high-altitude Himalayan certification with extensive mountain flight hours.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "CAAN Certified · EASA Compliant",
    desc: "Full regulatory certification, complete service logbooks, and HTAWS terrain-avoidance technology on every aircraft.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15 15" />
      </svg>
    ),
    title: "17 Years, Zero Major Incidents",
    desc: "Our safety record is not a marketing claim — it is 17 years of operational discipline, every single day.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Private Charters Only",
    desc: "We do not operate shared flights. Every charter is exclusively yours.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
        <path d="M5 5l2 2-2 2" />
      </svg>
    ),
    title: "Intelligent Go / No-Go Decisions",
    desc: "Real-time satellite weather monitoring. We fly when conditions are optimal — and only then.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Mountain Rescue Authority",
    desc: "Active emergency operations across five regions. Our reliability in rescue is the foundation of our commercial reputation.",
  },
];

// ── Main Component ────────────────────────────────────────────
export default function AboutUs() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(true);

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
      className="grid min-h-screen grid-cols-1 font-sans md:grid-cols-2"
    >
      {/* LEFT: Our Story */}
      <div className="flex flex-col justify-center bg-[#003366] px-8 py-16 md:px-16 md:py-24 lg:px-20">
        <div
          className={`mb-8 flex items-center gap-3 transition-all duration-700 delay-100 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="h-px w-8 bg-[#f5a623]/80" />
          <span className="text-[0.68rem] font-manrope font-semibold uppercase tracking-[0.2em] text-[#f5a623]">
            Our Story
          </span>
        </div>

        <h2
          className={`mb-8 font-fraunces text-[clamp(2.2rem,3.5vw,3.2rem)] font-extrabold leading-[1.1] text-white transition-all duration-700 delay-200 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
          }`}
        >
          17+ Years of Helicopter
          <br />
         Operations in Nepal
        </h2>

        <div
          className={`transition-all duration-700 delay-[380ms] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <p className="mb-5 font-manrope text-[clamp(1.0rem,1.3vw,1.2rem)] font-light leading-[1.85] text-white/60">
            Mountain Helicopters Nepal, founded in Kathmandu in 2007, was initiated with the belief that the mountains, the Himalayas in this instance, are best seen in safety, 
            in respect & with courtesy for the majestic high Himalayas. The motto at the time of its conception remains to this day guiding its operation & ethic. 
          </p>
          <p className="font-manrope text-[clamp(1.0rem,1.3vw,1.2rem)] font-light leading-[1.85] text-white/60">
            In present times MNH is operating in every major Himalayan zone across Nepal, offering luxury & private charter helicopters, charter operations, high altitude services & assistance, and helicopter rescues. 
          </p>
        </div>

        <div
          className={`mt-10 flex items-center gap-3 transition-all duration-700 delay-[520ms] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="h-px w-10 bg-[#f5a623]/70" />
          <span className="text-[0.68rem] font-manrope font-medium uppercase tracking-[0.16em] text-white/40">
            Captain Rajesh Thapa · Chief Pilot
          </span>
        </div>
      </div>

      {/* RIGHT: Why Choose Us */}
      <div className="flex flex-col justify-center bg-[#001A33] px-8 py-16 md:px-16 md:py-24 lg:px-20">
        <div
          className={`mb-10 flex items-center gap-3 transition-all duration-700 delay-150 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="h-px w-8 bg-[#f5a623]/80" />
          <span className="text-[0.68rem] font-manrope font-semibold uppercase tracking-[0.2em] text-[#f5a623]">
            Why Choose Us
          </span>
        </div>

        <div className="flex flex-col">
          {REASONS.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-5 border-b border-white/10 py-5 transition-all duration-700 ${
                i === 0 ? "border-t border-white/10" : ""
              } ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#f5a623]/30 bg-[#f5a623]/10">
                {item.icon}
              </div>

              <div className="flex-1">
                <p className="font-fraunces mb-1 text-[clamp(0.85rem,1.3vw,0.95rem)] font-semibold leading-[1.3] text-white">
                  {item.title}
                </p>
                <p className="font-manrope text-[clamp(0.78rem,1.1vw,0.85rem)] font-light leading-[1.7] text-white/45">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}