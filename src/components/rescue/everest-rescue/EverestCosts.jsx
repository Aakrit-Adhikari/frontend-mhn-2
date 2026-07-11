// src/components/rescue/detail/EverestCosts.jsx

const pickupCosts = [
  {
    point: "Lukla (2,860 m)",
    cost: "USD 2,500 – 3,500",
  },
  {
    point: "Namche Bazaar (3,440 m)",
    cost: "USD 2,500 – 4,000",
  },
  {
    point: "Tengboche (3,867 m)",
    cost: "USD 2,800 – 4,500",
  },
  {
    point: "Pheriche (4,371 m)",
    cost: "USD 3,000 – 5,000",
  },
  {
    point: "Dingboche (4,410 m)",
    cost: "USD 3,000 – 5,000",
  },
  {
    point: "Lobuche (4,910 m)",
    cost: "USD 3,500 – 6,000",
  },
  {
    point: "Gorak Shep (5,140 m)",
    cost: "USD 4,000 – 8,000",
  },
  {
    point: "Everest Base Camp (5,364 m)",
    cost: "USD 4,000 – 8,000+",
  },
  {
    point: "Kala Patthar area (5,545 m)",
    cost: "USD 4,500 – 8,500+",
  },
];

const costFactors = [
  "Multiple shuttle flights required for groups of 4–5 above 4,500 m",
  "Extended search required because of an imprecise pickup location",
  "Weather-related re-attempts",
  "Multi-leg routing through Lukla or direct hospital delivery",
  "Aircraft positioning from Lukla versus Kathmandu staging",
  "Multiple patients requiring separate flights",
];

const includedItems = [
  "Helicopter flight from staging point to rescue location and back",
  "Basic cabin setup for transporting patients",
  "Basic oxygen onboard the helicopter",
  "Coordination with CAAN",
  "Landing costs and airport charges",
  "Transfer from helipad to the hospital entrance",
];

const excludedItems = [
  "Hospital admission and treatment costs",
  "Medical evacuation to the home country",
  "Hotel and meals in Kathmandu during recovery",
  "Insurance excess or deductible",
  "Flight cost from Kathmandu to the home country",
  "Cost of replacing lost or abandoned trekking gear",
];

function CostBullet({ children }) {
  return (
    <li className="flex items-start gap-3 font-manrope text-[10px] leading-[1.7] text-[#4c5963]">
      <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#b77900]" />
      <span>{children}</span>
    </li>
  );
}

function IncludedItem({ children }) {
  return (
    <li className="flex items-start gap-3 font-manrope text-[10px] leading-[1.7] text-[#4c5963]">
      <span className="mt-[1px] font-manrope text-[12px] font-bold text-[#4f8a6d]">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

function ExcludedItem({ children }) {
  return (
    <li className="flex items-start gap-3 font-manrope text-[10px] leading-[1.7] text-[#5d6872]">
      <span className="mt-[1px] font-manrope text-[12px] font-bold text-[#7d8992]">
        ×
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function EverestCosts() {
  return (
    <section
      id="costs"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[980px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — Cost by Point
          </p>

          <h2 className="mt-4 font-fraunces text-[40px] font-semibold leading-[1.02] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            What rescue actually costs.{" "}
            <span className="italic text-[#9b6b00]">
              By pickup point.
            </span>
          </h2>

          <p className="mt-5 max-w-[780px] font-manrope text-[11px] leading-[1.75] text-[#4c5963] sm:text-[12px]">
            Cost depends on pickup altitude, distance from staging, flight
            route, weather delay, aircraft positioning, landing difficulty,
            patient condition, and destination such as Lukla, Kathmandu, or a
            specific hospital. The ranges below are typical for direct
            extraction to Kathmandu. Exact quotations are provided during
            dispatch.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse font-manrope text-left text-[10px]">
            <thead>
              <tr className="bg-[#061523] text-white">
                <th className="border-r border-white/10 px-4 py-3 text-[8px] font-bold uppercase tracking-[0.18em]">
                  Pickup Point
                </th>

                <th className="px-4 py-3 text-right text-[8px] font-bold uppercase tracking-[0.18em]">
                  Typical Cost (USD)
                </th>
              </tr>
            </thead>

            <tbody>
              {pickupCosts.map((item) => (
                <tr
                  key={item.point}
                  className="border-b border-[#d6d8d7] bg-[#f9f7f2]"
                >
                  <td className="border-x border-[#d6d8d7] px-4 py-3 font-medium text-[#071825]">
                    {item.point}
                  </td>

                  <td className="border-r border-[#d6d8d7] px-4 py-3 text-right font-semibold text-[#071825]">
                    {item.cost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 font-manrope text-[8px] font-semibold uppercase tracking-[0.13em] text-[#b96b00]">
          [Client verify: all cost figures require MHN sign-off]
        </p>

        <div className="mt-8">
          <h3 className="font-manrope text-[9px] font-bold uppercase tracking-[0.2em] text-[#53616d]">
            Factors That Increase Cost
          </h3>

          <ul className="mt-4 space-y-2">
            {costFactors.map((factor) => (
              <CostBullet key={factor}>{factor}</CostBullet>
            ))}
          </ul>
        </div>

        <div className="mt-24 lg:mt-32">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — What&apos;s Covered
          </p>

          <h2 className="mt-4 font-fraunces text-[40px] font-semibold leading-[1.02] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            What the rescue cost covers.
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-manrope text-[9px] font-bold uppercase tracking-[0.2em] text-[#4f8a6d]">
                Included
              </h3>

              <ul className="mt-5 space-y-3">
                {includedItems.map((item) => (
                  <IncludedItem key={item}>{item}</IncludedItem>
                ))}
              </ul>
            </div>

            <div className="border-t border-[#d8a244] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <h3 className="font-manrope text-[9px] font-bold uppercase tracking-[0.2em] text-[#6d7780]">
                Not Included
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
    </section>
  );
}