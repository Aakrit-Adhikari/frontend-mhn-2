// src/components/rescue/tilicho/TilichoCosts.jsx

const costFactors = [
  {
    factor: "Rescue location",
    reason:
      "Tilicho Lake, Tilicho Base Camp, Khangsar, Shree Kharka, Manang and nearby high-altitude routes have different flight, landing and routing requirements.",
  },
  {
    factor: "Distance from the dispatch base",
    reason:
      "Flight time and fuel use increase when the aircraft must operate from Kathmandu, Pokhara or another distant staging point.",
  },
  {
    factor: "Landing difficulty",
    reason:
      "Restricted landing zones, uneven terrain, narrow ridges and exposed mountain approaches may require additional assessment or repositioning.",
  },
  {
    factor: "Weather delays",
    reason:
      "Cloud, wind, snowfall, poor visibility or repeated landing attempts can increase waiting time and affect the final cost.",
  },
  {
    factor: "Patient condition",
    reason:
      "Oxygen, stretcher configuration, medical support, additional crew or special cabin preparation can change the rescue logistics.",
  },
  {
    factor: "Insurance approval",
    reason:
      "Some insured cases require a written guarantee, medical report, case reference or authorization before the aircraft can be dispatched.",
  },
  {
    factor: "Private vs. shared evacuation",
    reason:
      "A shared evacuation may reduce the total cost when it is medically appropriate, operationally safe and approved by the pilot.",
  },
  {
    factor: "Passenger count",
    reason:
      "Passenger and equipment weight affect high-altitude aircraft performance and may require reduced payload or separate shuttle flights.",
  },
  {
    factor: "Documentation needs",
    reason:
      "Insurance paperwork, flight logs, rescue invoices and post-rescue records may require additional coordination.",
  },
];

export default function TilichoCosts() {
  return (
    <section
      id="costs"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[1100px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — What Drives the Cost
          </p>

          <h2 className="mt-4 font-fraunces text-[40px] font-semibold uppercase leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            Cost of Tilicho Helicopter Rescue
          </h2>

          <p className="mt-5 max-w-[790px] font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[12px]">
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
                  <th className="w-[29%] border-r border-white/10 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em]">
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

          <p className="mt-5 max-w-[820px] font-manrope text-[10px] leading-[1.75] text-[#5b6872] sm:text-[11px]">
            Share the patient&apos;s exact location, altitude, condition,
            landing access and insurance details first. Our dispatch team can
            then verify the likely rescue requirements and pricing structure
            before launch.
          </p>
        </div>
      </div>
    </section>
  );
}