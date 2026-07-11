import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B3F6F] text-white">
      {/* right dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B3F6F] via-[#0B3F6F] to-[#07335E]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-[100px]">
        <div className="max-w-[850px]">
          {/* Breadcrumb */}
          <div className="mb-6 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[3px] sm:mb-8 sm:gap-6 sm:text-[13px] sm:tracking-[5px]">
            <Link href="/" className="text-[#F6AD19] hover:text-white">
              Home
            </Link>
            <span className="text-white/45">/</span>
            <span className="text-white">Safety Report</span>
          </div>

          {/* Top Badge */}
          <div className="mb-7 inline-flex flex-wrap items-center gap-2 rounded-full border border-[#F6AD19]/55 px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] text-[#F6AD19] sm:mb-8 sm:gap-3 sm:text-[13px] sm:tracking-[3px]">
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#F6AD19]"
              >
                <path
                  d="M12 3L19 6V11C19 15.5 16.1 19.7 12 21C7.9 19.7 5 15.5 5 11V6L12 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Confidential</span>
            <span className="h-1 w-1 rounded-full bg-[#F6AD19]" />
            <span>Just Culture</span>
          </div>

          {/* Heading */}
          <h1 className="mb-5 text-[40px] font-extrabold leading-[1.05] tracking-[-1px] sm:mb-6 sm:text-[56px] lg:text-[72px]">
            Safety Reporting
          </h1>

          {/* Text */}
          <p className="max-w-[820px] text-[18px] leading-[1.6] text-white/90 sm:text-[22px] lg:text-[24px]">
            Your safety is our priority. Report any occurrence, hazard, or
            improvement suggestion.
          </p>

          {/* Bottom Pills */}
          <div className="mt-9 flex flex-wrap gap-3 sm:mt-11 sm:gap-4">
            {[
              "Anonymous if you prefer",
              "No retaliation policy",
              "Reviewed within 48 hours",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-[14px] font-semibold text-white shadow-sm backdrop-blur-sm sm:gap-3 sm:px-5 sm:text-[18px]"
              >
                <span className="text-[#F6AD19]">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}