// src/components/rescue/langtang/LangtangWhatsCovered.jsx

import { MessageCircle, Phone } from "lucide-react";

const includedItems = [
  "Helicopter flight from the staging point to the rescue location and back",
  "Basic cabin setup for transporting patients",
  "Basic oxygen onboard the helicopter",
  "Coordination with CAAN",
  "Landing costs and airport charges",
  "Transfer from the helipad to the hospital entrance",
];

const excludedItems = [
  "Hospital admission and treatment costs",
  "Medical evacuation to the patient’s home country",
  "Hotel and meals in Kathmandu during the recovery period",
  "Insurance excess or deductible",
  "Flight cost from Kathmandu to the patient’s home country",
  "Replacement cost for lost or abandoned trekking gear",
];

function IncludedItem({ children }) {
  return (
    <li className="flex items-start gap-3 font-manrope text-[11px] leading-[1.75] text-[#46545f] sm:text-[12px]">
      <span className="mt-[1px] shrink-0 font-manrope text-[14px] font-bold text-[#2f8b68]">
        ✓
      </span>

      <span>{children}</span>
    </li>
  );
}

function ExcludedItem({ children }) {
  return (
    <li className="flex items-start gap-3 font-manrope text-[11px] leading-[1.75] text-[#56626c] sm:text-[12px]">
      <span className="mt-[1px] shrink-0 font-manrope text-[14px] font-bold text-[#71808b]">
        ×
      </span>

      <span>{children}</span>
    </li>
  );
}

export default function LangtangWhatsCovered() {
  return (
    <section
      id="whats-covered"
      className="scroll-mt-[123px] bg-[#f6f3ed]"
    >
      {/* Included and excluded costs */}
      <div className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — What&apos;s Covered
          </p>

          <h2 className="mt-4 font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            What is Included in the Rescue Cost?
          </h2>

          <div className="mt-9 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h3 className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#2f8b68]">
                Included
              </h3>

              <ul className="mt-5 space-y-3">
                {includedItems.map((item) => (
                  <IncludedItem key={item}>{item}</IncludedItem>
                ))}
              </ul>
            </div>

            <div className="border-t border-[#d7a03d] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <h3 className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#647386]">
                What Is Not Included in the Rescue Cost?
              </h3>

              <ul className="mt-5 space-y-3">
                {excludedItems.map((item) => (
                  <ExcludedItem key={item}>{item}</ExcludedItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency dispatch banner */}
      <div className="bg-[#061523] px-5 py-12 text-white sm:px-8 lg:px-12 lg:py-14 xl:px-[80px] 2xl:px-[125px]">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#f2a10d]">
              — 24/7 Dispatch
            </p>

            <h2 className="mt-4 max-w-[920px] font-fraunces text-[32px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#f6f2ea] sm:text-[40px] lg:text-[48px]">
              In an emergency, call first.{" "}
              <span className="italic text-[#f2a10d]">Details follow.</span>
            </h2>

            <p className="mt-4 max-w-[760px] font-manrope text-[11px] leading-[1.75] text-white/70 sm:text-[12px]">
              Share the patient&apos;s location, condition, altitude and
              insurance details. We coordinate the rescue; the pilot makes the
              final go or no-go decision according to flight safety.
            </p>
          </div>

          <div className="flex min-w-[260px] flex-col gap-3">
            <a
              href="tel:+9779712082949"
              className="inline-flex min-h-[42px] items-center justify-center gap-2 bg-[#c85d00] px-5 font-manrope text-[10px] font-bold uppercase tracking-[0.13em] text-white transition hover:bg-[#df6b00]"
            >
              <span>[</span>
              <Phone size={14} />
              +977-9712082949
              <span>]</span>
            </a>

            <a
              href="https://wa.me/9779712082949"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center justify-center gap-2 bg-[#328562] px-5 font-manrope text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#3d9974]"
            >
              <span>[</span>
              <MessageCircle size={14} fill="currentColor" />
              WhatsApp Dispatch
              <span>]</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}