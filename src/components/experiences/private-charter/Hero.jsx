import Image from "next/image";
import Link from "next/link";

import {
  BadgeCheck,
  CalendarDays,
  Map,
  MapPin,
  MessageCircle,
  Pencil,
} from "lucide-react";

const details = [
  {
    icon: Pencil,
    label: "Fully custom",
  },
  {
    icon: CalendarDays,
    label: "Single or multi-day",
  },
  {
    icon: MessageCircle,
    label: "Concierge planning",
  },
  {
    icon: MapPin,
    label: "Anywhere we can land",
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[72vh] items-center overflow-hidden bg-[#003366] text-white md:min-h-[88vh]">
      <Image
        src="/images/experiences/private-charter.jpg"
        alt="Helicopter resting on a remote Himalayan ridge at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#001A33] via-[#003366]/60 to-[#003366]/30" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-14 pt-24 md:pb-20 md:pt-32 lg:px-12">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-2 font-manrope text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F2B632]"
        >
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>

          <span className="text-white/50">/</span>

          <Link href="/experiences" className="transition hover:text-white">
            Experience
          </Link>

          <span className="text-white/50">/</span>

          <span className="text-white/90">Private Charter</span>
        </nav>

        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-[#F2B632] px-4 py-2 font-manrope text-[10px] font-bold uppercase tracking-[0.18em] text-[#003366]">
            Bespoke · 07
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-manrope text-xs font-semibold text-white backdrop-blur">
            <Map size={14} className="shrink-0 text-[#F2B632]" />
            The blank-map experience
          </span>
        </div>

        <h1 className="max-w-[900px] font-fraunces text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.03] tracking-[-0.03em]">
          Design Your
          <br />
          Own Day
        </h1>

        <p className="mb-10 mt-6 max-w-[640px] font-manrope text-xl font-light leading-relaxed text-white/90 md:text-2xl">
          Start with a blank map of Nepal. Add the places you&apos;ve dreamed
          about. We&apos;ll fly the rest.
        </p>

        <div className="mb-10 flex flex-wrap gap-x-8 gap-y-4">
          {details.map((detail) => {
            const Icon = detail.icon;

            return (
              <span
                key={detail.label}
                className="inline-flex items-center gap-2 font-manrope text-[11px] font-semibold uppercase tracking-[0.12em] text-white/85"
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
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-[#F2B632] px-8 py-4 font-manrope text-sm font-bold text-[#003366] transition hover:bg-[#E5A82D]"
          >
            Plan your private charter
            <BadgeCheck size={18} />
          </a>

          <Link
            href="/experiences"
            className="inline-flex min-h-[52px] items-center justify-center rounded-lg border-2 border-white/50 px-8 py-4 font-manrope text-sm font-semibold text-white transition hover:border-[#F2B632] hover:text-[#F2B632]"
          >
            See all experiences
          </Link>
        </div>
      </div>
    </section>
  );
}