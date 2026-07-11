import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MessageCircle } from "lucide-react";

const stats = [
  {
    value: "17 Years",
    label: "Crafting Himalayan moments",
  },
  {
    value: "5,545 M",
    label: "Highest experience altitude",
  },
  {
    value: "< 4 Hrs",
    label: "Most experiences door-to-door",
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[94vh] items-center overflow-hidden bg-[#003366] text-white">
      <Image
        src="/images/experiences/experience-hero.jpg"
        alt="Mountain Helicopters Nepal flying over the Himalayas"
        fill
        priority
        className="object-cover opacity-45"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/55 via-[#003366]/75 to-[#001A33]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-24 text-center lg:px-12">
        <div className="mb-8 inline-flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#F2B632]" />

          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F2B632]">
            Helicopter Experiences · Nepal
          </span>

          <span className="h-px w-10 bg-[#F2B632]" />
        </div>

        <h1 className="mx-auto max-w-[1050px] font-fraunces text-[44px] font-semibold leading-[1.04] tracking-[-2px] sm:text-[58px] md:text-[74px] lg:text-[88px]">
          Some moments cannot be booked.
          <br />
          <span className="text-[#F2B632]">
            They can only be flown to.
          </span>
        </h1>

        <p className="mx-auto mb-12 mt-8 max-w-[780px] text-[18px] font-light leading-[1.75] text-white/85 md:text-[22px]">
          A photograph of Everest is everywhere. The feeling of standing beneath
          it at sunrise, with prayer flags moving in the wind and the Himalayas
          filling the horizon, belongs only to the people who go.
        </p>

        <div className="mb-16 flex flex-wrap justify-center gap-3">
          <a
            href="#experiences"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-[#F2B632] px-8 py-4 text-[15px] font-bold text-[#003366] transition hover:bg-[#E5A82D] hover:shadow-[0_20px_40px_rgba(0,51,102,0.2)]"
          >
            Find Your Experience
            <ArrowDown size={18} />
          </a>

          <Link
            href="/contact"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-white/50 px-8 py-4 text-[15px] font-semibold text-white transition hover:border-[#F2B632] hover:text-[#F2B632]"
          >
            <MessageCircle size={18} />
            Talk to a Flight Designer
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-fraunces text-[28px] font-semibold uppercase text-[#F2B632] md:text-[34px]">
                {stat.value}
              </p>

              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/65">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}