"use client";

export default function StatsSection() {
  return (
    <section className="w-full bg-[#003366]">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 gap-10 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-2 md:gap-12 lg:min-h-[370px] lg:grid-cols-[500px_600px] lg:gap-[110px] lg:px-0 lg:py-0 lg:pt-[66px]">
        <div>
          <div className="mb-5 flex items-center gap-[14px] sm:mb-[30px]">
            <span className="h-px w-[26px] bg-[#F2B632]" />

            <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.32em] text-[#F2B632] sm:text-[12px] sm:tracking-[0.42em]">
              The Principle
            </p>
          </div>

          <h2 className="font-fraunces text-[38px] leading-[1.12] tracking-[-0.035em] text-white sm:text-[48px] md:text-[54px] lg:text-[64px]">
            We fly small.
            <br />
            We fly early.
            <br />
            We fly with care.
          </h2>
        </div>

        <p className="font-manrope text-[16px] leading-[1.75] tracking-[-0.03em] text-[#8A96A1] sm:text-[18px] md:pt-[10px] lg:pt-[20px] lg:text-[22px] lg:leading-[1.8]">
          Most helicopter operators in Nepal sell volume. We have chosen to fly
          fewer flights, with more care, in a single aircraft maintained to
          standards above regulatory minimum. The result is a tour that respects
          the mountain and respects the passenger. Seventeen years. Zero major
          incidents. The numbers earn themselves.
        </p>
      </div>
    </section>
  );
}