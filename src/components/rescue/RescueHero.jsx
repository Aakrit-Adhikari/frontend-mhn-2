import {
  Phone,
  MessageCircle,
  Mail,
} from "lucide-react";

export default function RescueHero() {
  return (
    <section className="bg-[#061523] text-white">
      <div className="mx-auto max-w-[1350px] px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-28 lg:pb-20 lg:pt-32">
        <div className="max-w-[760px]">
          <p className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
            — 24/7 Helicopter Rescue // Across Nepal&apos;s Himalayas
          </p>

          <h1 className="font-serif text-[40px] font-semibold leading-[0.98] tracking-[-0.03em] text-[#f6f3ed] sm:text-[62px] lg:text-[70px]">
            Helicopter rescue and
            <span className="mt-3 block font-serif italic text-[#f4a30b]">
              emergency
            </span>
            <span className="block font-serif italic text-[#f4a30b]">
              evacuation
              <span className="text-[#f6f3ed]">.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-[640px] text-[16px] leading-8 text-white/75 sm:text-[18px]">
            Same-day extraction from Everest Base Camp, Annapurna,
            Langtang, Mustang, Makalu and Nepal&apos;s other high-altitude
            trekking and climbing regions. Since 2009.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="tel:+9779712082949"
                className="inline-flex h-[44px] items-center justify-center gap-2 bg-[#c85b00] px-5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#e36a00]"
              >
                <span>[</span>
                <Phone size={14} />
                Call Emergency Line
                <span>]</span>
              </a>

              <a
                href="tel:+9779712082949"
                className="font-serif text-[29px] font-semibold text-[#f4f1eb] sm:text-[36px]"
              >
                +977-9712082949
              </a>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/9779712082949"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[44px] items-center justify-center gap-2 bg-[#328562] px-5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#3d9974]"
              >
                <span>[</span>
                <MessageCircle size={14} fill="currentColor" />
                WhatsApp Dispatch
                <span>]</span>
              </a>

              <a
                href="mailto:resources.mountainlhelicopters@gmail.com"
                className="inline-flex h-[44px] items-center justify-center gap-2 border border-white/35 px-5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-white/85 transition hover:border-white hover:text-white"
              >
                <span>[</span>
                <Mail size={14} />
                Email Coordination
                <span>]</span>
              </a>
            </div>
          </div>

          <div className="mt-8 space-y-2 font-mono text-[12px] leading-5 tracking-[0.04em] text-[#8b98a6]">
            <p>
              Coordinates: 27.6975°N, 85.3592°E (Kathmandu Ops Centre)
            </p>

            <p>
              Response time: typically &lt;5 min for insured cases from any
              Nepal trekking region
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}