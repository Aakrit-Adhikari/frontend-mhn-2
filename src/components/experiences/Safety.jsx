import { CheckCircle2, ShieldCheck } from "lucide-react";

const safetyPoints = [
  "CAAN Certified",
  "Experienced Himalayan pilots",
  "In-house aircraft maintenance",
  "Oxygen carried on high-altitude flights",
  "Weather-dependent safety decisions",
];

export default function Safety() {
  return (
    <section className="relative overflow-hidden bg-[#003366] px-6 py-24 text-white md:py-32 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(242,182,50,0.08),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(0,98,177,0.35),transparent_50%)]" />

      <div className="relative mx-auto max-w-[1000px] text-center">
        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-[#F2B632]/40 bg-white/5 text-[#F2B632]">
          <ShieldCheck size={30} strokeWidth={1.7} />
        </div>

        <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#F2B632]">
          Chapter Four · The Safety Behind the Experience
        </p>

        <h2 className="font-fraunces text-[38px] font-semibold leading-[1.12] tracking-[-1.2px] md:text-[56px]">
          Wonder in the front of your mind.
          <br />
          <span className="text-[#F2B632]">
            Safety in the back of ours.
          </span>
        </h2>

        <p className="mx-auto mb-12 mt-8 max-w-[820px] text-[17px] leading-[1.8] text-white/80 md:text-[20px]">
          Every experience is planned around aircraft capability, mountain
          weather, altitude, visibility, passenger weight, landing conditions,
          and the final authority of the Pilot in Command.
        </p>

        <ul className="flex list-none flex-wrap justify-center gap-3">
          {safetyPoints.map((point, index) => (
            <li
              key={point}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em] ${
                index === safetyPoints.length - 1
                  ? "border-[#F2B632] bg-[#F2B632] text-[#003366]"
                  : "border-white/20 bg-white/10 text-white"
              }`}
            >
              <CheckCircle2 size={14} />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}