"use client";

import { useEffect, useRef, useState } from "react";

const records = [
  {
    target: 17,
    suffix: "+",
    title: "Years Flying",
    desc: "Since 2009 · Nepal",
    icon: "activity",
  },
  {
    target: 23,
    suffix: "k",
    title: "FT Max Altitude",
    desc: "Airbus H125 certified",
    icon: "shield",
  },
  {
    target: 365,
    suffix: "",
    title: "Days Operational",
    desc: "Year-round flying",
    icon: "clock",
  },
  {
    fixed: "24/7",
    title: "Dispatch Centre",
    desc: "Kathmandu ops",
    icon: "phone",
  },
];

export default function Records() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#003366] py-20 text-white md:py-28"
    >
      <div className="absolute inset-0 opacity-5 [background-image:radial-gradient(circle_at_1px_1px,#F2B632_1px,transparent_0)] [background-size:40px_40px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <header className="mb-16 text-center md:mb-20">
          <span className="mb-4 block font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#F2B632]">
            By The Numbers
          </span>

          <h2 className="font-fraunces text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
            The record speaks.
          </h2>
        </header>

        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {records.map((item) => (
            <div key={item.title} className="group text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 transition-all duration-500 group-hover:bg-[#F2B632] group-hover:text-[#003366]">
                <RecordIcon name={item.icon} />
              </div>

              <div className="mb-3 font-fraunces text-5xl font-semibold leading-none tracking-[-0.03em] tabular-nums text-white md:text-6xl">
                {item.fixed ? (
                  item.fixed
                ) : (
                  <>
                    <Counter target={item.target} start={start} />
                    {item.suffix}
                  </>
                )}
              </div>

              <div className="mb-1 font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#F2B632]">
                {item.title}
              </div>

              <div className="font-manrope text-xs text-white/60">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ target, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame;
    const duration = 1400;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return count.toLocaleString();
}

function RecordIcon({ name }) {
  const common = "h-6 w-6";

  if (name === "shield") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}