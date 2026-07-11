import Image from "next/image";
import Link from "next/link";

import {
  BadgeCheck,
  CalendarDays,
  Check,
  Clock3,
  Flame,
  Users,
} from "lucide-react";

const details = [
  {
    icon: Clock3,
    label: "Half-day to multi-day",
  },
  {
    icon: Users,
    label: "All ages",
  },
  {
    icon: CalendarDays,
    label: "March – November",
  },
  {
    icon: Flame,
    label: "Priest arrangements",
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[72vh] items-center overflow-hidden bg-[#003366] text-white md:min-h-[88vh]">
      <Image
        src="/images/experiences/pilgrimage.jpg"
        alt="Helicopter landed near the Muktinath temple complex with prayer flags and Himalayan peaks behind"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#001A33] via-[#003366]/60 to-[#003366]/30" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-14 pt-24 md:pb-20 md:pt-32 lg:px-12">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F2B632]"
        >
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>

          <span className="text-white/50">/</span>

          <Link href="/experiences" className="transition hover:text-white">
            Experience
          </Link>

          <span className="text-white/50">/</span>

          <span className="text-white/90">Pilgrimage by Air</span>
        </nav>

        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-[#F2B632] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#003366]">
            Sacred Skies · 04
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
            <Check size={14} className="shrink-0 text-[#F2B632]" />
            All ages · Wheelchair friendly
          </span>
        </div>

        <h1 className="max-w-[900px] font-fraunces text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.03] tracking-[-0.03em]">
          Pilgrimage
          <br />
          by Air
        </h1>

        <p className="mb-10 mt-6 max-w-[680px] text-xl font-light leading-relaxed text-white/90 md:text-2xl">
          Muktinath. Gosaikunda. Kailash. Darshan without the days of walking —
          for every body that faith still calls.
        </p>

        <div className="mb-10 flex flex-wrap gap-x-8 gap-y-4">
          {details.map((detail) => {
            const Icon = detail.icon;

            return (
              <span
                key={detail.label}
                className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/85"
              >
                <Icon size={16} className="shrink-0 text-[#F2B632]" />
                {detail.label}
              </span>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="#booking"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-[#F2B632] px-8 py-4 text-sm font-bold text-[#003366] transition hover:bg-[#E5A82D]"
          >
            Plan your pilgrimage
            <BadgeCheck size={18} />
          </a>

          <Link
            href="/experiences"
            className="inline-flex min-h-[52px] items-center justify-center rounded-lg border-2 border-white/50 px-8 py-4 text-sm font-semibold text-white transition hover:border-[#F2B632] hover:text-[#F2B632]"
          >
            See all experiences
          </Link>
        </div>
      </div>
    </section>
  );
}