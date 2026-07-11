// src/components/rescue/detail/EverestOverview.jsx

import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

const trustItems = [
  "Since 2009",
  "Daily operation in Khumbu",
  "Zero fatal accidents",
  "<5 min dispatch",
  "CAAN certified",
  "AS 350 B3e fleet",
];

export default function EverestOverview() {
  return (
    <section
      id="overview"
      className="scroll-mt-[123px] bg-[#f6f3ed] text-[#071825]"
    >
      {/* Trust bar */}
      <div className="border-b border-[#d8d8d3]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 sm:grid-cols-3 sm:px-8 lg:grid-cols-6 lg:px-12 xl:px-[80px] 2xl:px-[125px]">
          {trustItems.map((item, index) => (
            <div
              key={item}
              className={`flex min-h-[74px] items-center justify-center px-3 text-center ${
                index !== trustItems.length - 1
                  ? "lg:border-r lg:border-[#d8a244]"
                  : ""
              }`}
            >
              <span className="font-manrope text-[9px] font-bold uppercase tracking-[0.2em] text-[#071825] sm:text-[10px]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Overview content */}
      <div className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.3fr_0.7fr] xl:gap-16">
          <div>
            <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
              — Overview
            </p>

            <h2 className="mt-4 max-w-[820px] font-fraunces text-[38px] font-semibold leading-[1.02] tracking-[-0.03em] text-[#071825] sm:text-[48px] lg:text-[58px]">
              The Everest region —{" "}
              <span className="italic text-[#9b6b00]">
                where every hour matters.
              </span>
            </h2>

            <div className="mt-7 max-w-[830px] space-y-6 font-manrope text-[14px] leading-[1.75] text-[#263746] sm:text-[15px]">
              <p>
                Mountain Helicopters Nepal operates 24/7 emergency helicopter
                evacuation across the Everest and Khumbu corridor. Coverage
                includes Everest Base Camp (5,364 m), Kala Patthar (5,545 m),
                Gorak Shep (5,140 m), Lobuche (4,910 m), Dingboche (4,410 m),
                Pheriche (4,371 m), Tengboche (3,867 m), Namche Bazaar
                (3,440 m) and Lukla (2,860 m). We coordinate rescue for
                trekkers, climbers, guides, expedition crews, trekking agencies
                and insurance assistance companies.
              </p>

              <p>
                The beauty of the Everest region can be misleading. Above
                4,000 metres, weather changes in minutes, oxygen is roughly 60%
                of sea level, and walking evacuation options are measured in
                days. Where the safest ground-level descent is a two-day trek
                to Lukla and a hospital transfer flight, a helicopter can
                complete the same evacuation in under 90 minutes. For altitude
                illness — HAPE or HACE — that time difference is often the
                difference in outcome.
              </p>

              <p>
                To coordinate an Everest region rescue, provide the
                patient&apos;s name, current location such as village name,
                lodge name, GPS coordinate or trail point, current altitude if
                known, condition and symptoms, nationality, insurance policy
                details, and a callback number. Contact via phone, WhatsApp or
                email. All three route to the same dispatch officer.
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            {/* Dispatch panel */}
            <div className="border-t border-[#b77900] bg-[#061523] p-5 text-white sm:p-6">
              <div className="flex items-center gap-3 border-b border-white/15 pb-5">
                <span className="h-2 w-2 bg-[#2f9c75]" />

                <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  24/7 Operational
                </span>
              </div>

              <p className="mt-5 font-manrope text-[9px] font-bold uppercase tracking-[0.2em] text-[#e89a0c]">
                Emergency Dispatch
              </p>

              <div className="mt-4 space-y-2.5">
                <a
                  href="tel:+9779712082949"
                  className="flex min-h-[42px] items-center justify-center gap-2 bg-[#c85d00] px-4 font-manrope text-[10px] font-bold uppercase tracking-[0.13em] text-white transition hover:bg-[#df6b00]"
                >
                  <span>[</span>
                  <Phone size={13} />
                  +977-9712082949
                  <span>]</span>
                </a>

                <a
                  href="https://wa.me/9779712082949"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[42px] items-center justify-center gap-2 bg-[#328562] px-4 font-manrope text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#3d9974]"
                >
                  <span>[</span>
                  <MessageCircle size={13} fill="currentColor" />
                  WhatsApp
                  <span>]</span>
                </a>

                <a
                  href="mailto:info@mountainhelicoptersnepal.com"
                  className="flex min-h-[42px] items-center justify-center gap-2 border border-white/45 px-4 font-manrope text-[9px] font-bold uppercase tracking-[0.1em] text-white transition hover:border-white"
                >
                  <span>[</span>
                  <Mail size={12} />
                  info@mountainhelicoptersnepal.com
                  <span>]</span>
                </a>
              </div>

              <div className="mt-5 border-t border-[#b77900]/70 pt-4">
                <p className="font-manrope text-[11px] leading-[1.65] text-white/75">
                  Response typically under 5 minutes to coordinate from any
                  Everest region point.
                </p>

                <p className="mt-2 font-manrope text-[9px] uppercase tracking-[0.13em] text-[#8794a0]">
                  EN · नेपाली · 中文 · Deutsch
                </p>
              </div>
            </div>

            {/* Tour card */}
            <div className="border border-[#cfd2d3] bg-[#f1eee7] p-5 sm:p-6">
              <p className="font-manrope text-[8px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
                Also on this route
              </p>

              <h3 className="mt-3 font-fraunces text-[20px] font-semibold leading-[1.2] text-[#071825]">
                Everest Base Camp Helicopter Tour
              </h3>

              <p className="mt-3 font-manrope text-[11px] leading-[1.65] text-[#68747d]">
                The scenic flight, flown by the same crews and aircraft.
              </p>

              <Link
                href="/tours/everest-base-camp"
                className="mt-5 inline-flex items-center gap-2 font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-[#0d5ea6] transition hover:text-[#071825]"
              >
                View
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}