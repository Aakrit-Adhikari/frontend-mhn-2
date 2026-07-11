

import { Mail, MessageCircle, Phone } from "lucide-react";

export default function EverestEmergencyDispatch() {
  return (
    <section className="bg-[#061523] text-white">
      <div className="mx-auto flex min-h-[680px] max-w-[1440px] flex-col items-center justify-center px-5 py-20 text-center sm:px-8 lg:px-12 xl:px-[80px] 2xl:px-[125px]">
        <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.24em] text-[#f2a10d]">
          — Emergency Dispatch · Everest Region
        </p>

        <h2 className="mt-6 max-w-[850px] font-fraunces text-[42px] font-semibold leading-[0.98] tracking-[-0.03em] text-[#f6f2ea] sm:text-[56px] lg:text-[72px]">
          Call the operator who
          <span className="block">has flown the Khumbu</span>
          <span className="block italic text-[#f2a10d]">
            since 2009
            <span className="not-italic text-[#f6f2ea]">.</span>
          </span>
        </h2>

        <div className="mt-8 flex items-center gap-3">
          <span className="h-2 w-2 bg-[#2f9c75]" />

          <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-white/85">
            24/7 Operational · Everest Region
          </span>
        </div>

        <a
          href="tel:+9779712082949"
          className="mt-8 inline-flex min-h-[54px] items-center justify-center gap-3 bg-[#c85d00] px-7 text-white transition hover:bg-[#df6b00] sm:px-10"
        >
          <span className="font-manrope text-[13px]">[</span>

          <Phone size={17} strokeWidth={2} />

          <span className="font-fraunces text-[27px] font-semibold sm:text-[31px]">
            +977-9712082949
          </span>

          <span className="font-manrope text-[13px]">]</span>
        </a>

        <p className="mt-4 font-manrope text-[9px] font-semibold uppercase tracking-[0.22em] text-[#84909b]">
          Primary Emergency Line
        </p>

        <div className="mt-7 flex w-full max-w-[760px] flex-col justify-center gap-3 sm:flex-row">
          <a
            href="https://wa.me/9779712082949"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 bg-[#2f8b68] px-5 font-manrope text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#3a9c78]"
          >
            <span>[</span>
            <MessageCircle size={14} fill="currentColor" />
            WhatsApp Dispatch
            <span>]</span>
          </a>

          <a
            href="mailto:info@mountainhelicoptersnepal.com"
            className="inline-flex min-h-[42px] flex-[1.5] items-center justify-center gap-2 border-2 border-white/40 px-5 font-manrope text-[10px] font-bold uppercase tracking-[0.12em] text-white transition hover:border-white"
          >
            <span>[</span>
            <Mail size={14} />
            info@mountainhelicoptersnepal.com
            <span>]</span>
          </a>
        </div>

        <div className="mt-9 font-manrope text-[12px] leading-[1.75] tracking-[0.03em] text-[#87939e]">
          <p>Kathmandu Ops Centre</p>
          <p>Old Sinamangal, Pepsicola</p>
          <p>Kathmandu, Nepal</p>
          <p>Coordinates: 27.6975°N, 85.3592°E</p>
        </div>
      </div>
    </section>
  );
}