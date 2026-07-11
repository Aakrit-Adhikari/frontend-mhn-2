// src/components/rescue/annapurna/AnnapurnaCosts.jsx

const costFactors = [
  {
    factor: "Rescue location",
    reason:
      "Flight requirements vary by pickup point, including Annapurna Base Camp, Thorong La Pass, Tilicho Lake, Mardi Himal, Manang and other remote locations.",
  },
  {
    factor: "Distance from base",
    reason:
      "Longer flight time from Pokhara or Kathmandu increases fuel use, crew time and aircraft operating cost.",
  },
  {
    factor: "Landing difficulty",
    reason:
      "Restricted landing zones, uneven terrain, steep slopes and confined helipads can require additional planning or repositioning.",
  },
  {
    factor: "Weather delays",
    reason:
      "Waiting time, repeated attempts or route changes caused by cloud, wind, rain or poor visibility can affect the final cost.",
  },
  {
    factor: "Patient condition",
    reason:
      "Oxygen, stretcher configuration, medical support or additional crew requirements may increase the operational cost.",
  },
  {
    factor: "Insurance approval",
    reason:
      "Some insured cases require authorization, supporting documents or a payment guarantee before dispatch.",
  },
  {
    factor: "Private vs shared evacuation",
    reason:
      "A private evacuation is dedicated to one case, while an approved shared movement may reduce the total cost where operationally possible.",
  },
  {
    factor: "Passenger count",
    reason:
      "Payload affects aircraft performance at altitude and may require fewer passengers, additional shuttle flights or separate aircraft movements.",
  },
  {
    factor: "Documentation needs",
    reason:
      "Insurance, hospital and post-rescue documentation may require additional coordination and case processing.",
  },
];

export default function AnnapurnaCosts() {
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
            Cost of Annapurna Helicopter Rescue
          </h2>

          <p className="mt-5 max-w-[760px] font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[12px]">
            Exact pricing varies from one rescue flight to another. Rather than
            listing a fixed figure that may not match your situation, the
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

          <p className="mt-5 max-w-[900px] font-manrope text-[10px] leading-[1.7] text-[#6a4e2a] sm:text-[11px]">
            Share the exact location, altitude, patient condition and preferred
            destination with our dispatch team first. We will then verify the
            rescue requirements and explain the likely pricing structure before
            launch.
          </p>
        </div>
      </div>
    </section>
  );
}