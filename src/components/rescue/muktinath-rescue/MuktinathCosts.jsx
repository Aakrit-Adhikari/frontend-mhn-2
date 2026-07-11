import { MessageCircle, Phone } from "lucide-react";

const costFactors = [
  {
    factor: "Rescue location",
    reason:
      "Muktinath Temple, Jomsom, Kagbeni, Marpha, Jharkot and nearby high passes have different flight and landing requirements.",
  },
  {
    factor: "Distance from base",
    reason:
      "Longer flight time from Pokhara or Kathmandu increases aircraft operating time, fuel use and overall mission cost.",
  },
  {
    factor: "Landing difficulty",
    reason:
      "Restricted landing zones, uneven terrain, strong valley winds and confined high-altitude pickup points may require additional assessment.",
  },
  {
    factor: "Weather delays",
    reason:
      "Waiting time, route changes or repeated attempts caused by cloud, wind, rain or poor visibility can affect the final cost.",
  },
  {
    factor: "Patient condition",
    reason:
      "Oxygen, stretcher configuration, medical support or additional crew requirements can change the rescue logistics and pricing.",
  },
  {
    factor: "Insurance approval",
    reason:
      "Some insured cases require written authorization, case references, medical reports or payment guarantees before dispatch.",
  },
  {
    factor: "Private vs shared evacuation",
    reason:
      "A shared evacuation may reduce the total cost when it is operationally safe, medically appropriate and approved by the pilot.",
  },
  {
    factor: "Passenger count",
    reason:
      "Weight affects high-altitude aircraft performance and may require reduced passengers, shuttle flights or separate aircraft movements.",
  },
  {
    factor: "Documentation needs",
    reason:
      "Insurance paperwork, flight logs, rescue invoices and post-rescue documents may require additional coordination.",
  },
];

export default function MuktinathCosts() {
  return (
    <section
      id="costs"
      className="scroll-mt-[123px] bg-[#f6f3ed]"
    >
      {/* Cost section */}
      <div className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-[980px]">
            <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
              — What Drives the Cost
            </p>

            <h2 className="mt-4 font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
              Cost of Muktinath Helicopter Rescue
            </h2>

            <p className="mt-5 max-w-[760px] font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[12px]">
              Exact pricing varies from one rescue mission to another. Rather
              than listing a fixed figure that may not match your situation,
              the factors below explain what usually determines the final cost.
            </p>
          </div>

          <div className="mt-9">
            <h3 className="font-manrope text-[10px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
              Main Factors Affecting Cost
            </h3>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse font-manrope text-left">
                <thead>
                  <tr className="bg-[#061523] text-white">
                    <th className="w-[30%] border-r border-white/10 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em]">
                      Cost Factor
                    </th>

                    <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em]">
                      Why It Matters
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {costFactors.map((item) => (
                    <tr
                      key={item.factor}
                      className="border-b border-[#d5d7d6] bg-[#f9f7f2]"
                    >
                      <td className="border-x border-[#d5d7d6] px-4 py-3 align-top font-manrope text-[10px] font-semibold text-[#071825] sm:text-[11px]">
                        {item.factor}
                      </td>

                      <td className="border-r border-[#d5d7d6] px-4 py-3 font-manrope text-[10px] leading-[1.7] text-[#4d5963] sm:text-[11px]">
                        {item.reason}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 max-w-[760px] border-l border-[#d7a03d] bg-[#f1eee7] px-5 py-4">
              <p className="font-manrope text-[10px] leading-[1.7] text-[#64707a] sm:text-[11px]">
                The safest approach is to share the patient&apos;s exact
                location, altitude, condition, landing access and insurance
                details first. Our dispatch team can then confirm the likely
                rescue requirements and pricing structure before launch.
              </p>
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

            <p className="mt-4 max-w-[700px] font-manrope text-[11px] leading-[1.75] text-white/70 sm:text-[12px]">
              Share the patient&apos;s location, condition, altitude and
              insurance details. We coordinate the mission; the pilot makes the
              final go or no-go decision based on flight safety.
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