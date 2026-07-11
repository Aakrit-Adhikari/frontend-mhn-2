import { Mail, MessageCircle, Phone } from "lucide-react";

export default function GosaikundaRescueHero() {
  return (
    <section className="relative overflow-hidden bg-[#061523] text-white">
      <div className="mx-auto grid min-h-[730px] max-w-[1440px] items-center gap-12 px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:grid-cols-[1fr_300px] lg:px-12 lg:pb-20 lg:pt-32 xl:px-[80px] 2xl:px-[125px]">
        <div className="max-w-[900px]">
          <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.24em] text-[#f2a10d]">
            — Gosaikunda // 24/7 Helicopter Rescue
          </p>

          <h1 className="mt-7 max-w-[900px] font-fraunces text-[48px] font-semibold leading-[0.98] tracking-[-0.035em] text-[#f6f2ea] sm:text-[62px] lg:text-[76px] xl:text-[84px]">
            <span className="block italic text-[#f2a10d]">Gosaikunda</span>
            <span className="block">Helicopter Rescue -</span>
            <span className="block">Emergency</span>
            <span className="block">Evacuation Services</span>
            <span className="block">and Costs</span>
          </h1>

          <p className="mt-8 max-w-[780px] font-manrope text-[15px] leading-7 text-white/75 sm:text-[17px] sm:leading-8">
            Gosaikunda helicopter rescue provides emergency medical evacuation
            for pilgrims, trekkers, guides and expedition groups facing
            altitude illness, injury, severe weather or other urgent situations
            across the Gosaikunda and Langtang routes. Our high-altitude
            aviation team coordinates rapid extraction from Gosaikunda Lake,
            Lauribina La, Laurebinayak, Cholang Pati, Dhunche and nearby remote
            trekking points.
          </p>

          <div className="mt-10">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="tel:+9779712082949"
                className="inline-flex h-[45px] items-center justify-center gap-2 bg-[#c85d00] px-5 font-manrope text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#df6b00]"
              >
                <span>[</span>
                <Phone size={14} />
                Call Emergency Line
                <span>]</span>
              </a>

              <a
                href="tel:+9779712082949"
                className="font-fraunces text-[31px] font-semibold text-[#f6f2ea] sm:text-[38px]"
              >
                +977-9712082949
              </a>
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/9779712082949"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[44px] items-center justify-center gap-2 bg-[#328562] px-5 font-manrope text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#3d9974]"
              >
                <span>[</span>
                <MessageCircle size={14} fill="currentColor" />
                WhatsApp Dispatch
                <span>]</span>
              </a>

              <a
                href="mailto:info@mountainhelicoptersnepal.com"
                className="inline-flex h-[44px] items-center justify-center gap-2 border border-white/35 px-5 font-manrope text-[10px] font-bold uppercase tracking-[0.14em] text-white/90 transition hover:border-white hover:text-white"
              >
                <span>[</span>
                <Mail size={14} />
                Email Coordination
                <span>]</span>
              </a>
            </div>
          </div>

          <div className="mt-8 space-y-2 font-manrope text-[12px] leading-5 tracking-[0.03em] text-[#8794a0] sm:text-[13px]">
            <p>Kathmandu Ops · 27.6975°N, 85.3592°E</p>
            <p>Typical staging from Kathmandu for Gosaikunda rescue missions</p>
            <p>
              Response depends on weather, aircraft position, landing access
              and patient condition
            </p>
          </div>
        </div>

        <div className="flex justify-start lg:justify-end lg:self-end lg:pb-12">
          <div className="w-full max-w-[270px] border border-[#9c6a12] px-6 py-7 text-center">
            <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.22em] text-[#f2a10d]">
              Highest Evac Point
            </p>

            <p className="mt-3 font-fraunces text-[48px] font-semibold leading-none text-[#f6f2ea] sm:text-[54px]">
              4,610 m
            </p>

            <p className="mt-3 font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8794a0]">
              Lauribina La Pass
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}