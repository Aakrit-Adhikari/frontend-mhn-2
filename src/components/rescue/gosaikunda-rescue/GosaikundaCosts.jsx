// src/components/rescue/gosaikunda/GosaikundaCosts.jsx

const costFactors = [
  {
    factor: "Rescue location",
    reason:
      "Different flight requirements apply to pickup points such as Gosaikunda Lake, Lauribina La Pass, Laurebinayak, Cholang Pati, Ghopte and nearby Helambu routes.",
  },
  {
    factor: "Distance from base",
    reason:
      "Flight time from Kathmandu or another available staging point affects fuel use, aircraft operating time and total mission cost.",
  },
  {
    factor: "Landing difficulty",
    reason:
      "Rocky shores, narrow ridges, confined helipads and uneven mountain terrain may require additional assessment, repositioning or a safer alternate pickup point.",
  },
  {
    factor: "Weather delays",
    reason:
      "Extended waiting time, route changes or repeated flight attempts caused by cloud, wind, rain or poor visibility can increase the final cost.",
  },
  {
    factor: "Patient condition",
    reason:
      "Oxygen, stretcher configuration, medical support, additional crew or special cabin preparation may affect rescue logistics and pricing.",
  },
  {
    factor: "Insurance approval",
    reason:
      "Insurance verification, payment guarantees, medical reports, case references or additional paperwork may be required before dispatch.",
  },
  {
    factor: "Private vs. shared evacuation",
    reason:
      "An approved shared evacuation may cost less than a dedicated private rescue when it is medically appropriate and operationally safe.",
  },
  {
    factor: "Passenger count",
    reason:
      "Passenger weight and total load affect high-altitude helicopter performance and may require reduced payload, shuttle flights or separate movements.",
  },
  {
    factor: "Documentation needs",
    reason:
      "Insurance documents, flight logs, rescue invoices and post-rescue administrative records may require additional coordination.",
  },
];

export default function GosaikundaCosts() {
  return (
    <section
      id="costs"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[1120px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — What Drives the Cost
          </p>

          <h2 className="mt-4 font-fraunces text-[40px] font-semibold uppercase leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            Cost of Gosaikunda Helicopter Rescue
          </h2>

          <p className="mt-5 max-w-[780px] font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[12px]">
            Exact pricing varies from one rescue flight to another. Instead of
            listing a fixed amount that may not match your situation, the
            factors below explain what usually determines the final cost.
          </p>
        </div>

        <div className="mt-9">
          <h3 className="font-manrope text-[10px] font-bold uppercase tracking-[0.22em] text-[#263746]">
            Main Factors Affecting Cost
          </h3>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse font-manrope text-left">
              <thead>
                <tr className="bg-[#061523] text-white">
                  <th className="w-[22%] border-r border-white/10 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em]">
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
                    className="group border-b border-[#d5d7d6] bg-[#f9f7f2] transition-colors duration-300 hover:bg-[#f2eee5]"
                  >
                    <td className="border-x border-[#d5d7d6] px-4 py-3 align-top font-manrope text-[10px] font-semibold text-[#071825] transition-colors duration-300 group-hover:text-[#9b6b00] sm:text-[11px]">
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

          <p className="mt-5 max-w-[860px] font-manrope text-[10px] leading-[1.75] text-[#5b6872] sm:text-[11px]">
            Share the patient&apos;s exact location, altitude, condition,
            landing access and insurance details first. Our dispatch team can
            then verify the rescue requirements and provide the likely pricing
            structure before launch.
          </p>
        </div>
      </div>
    </section>
  );
}