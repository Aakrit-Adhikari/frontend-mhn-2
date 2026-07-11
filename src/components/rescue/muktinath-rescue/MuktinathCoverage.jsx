
const rescuePoints = [
  {
    location: "Jomsom",
    altitude: 2743,
    displayAltitude: "2,743 m",
  },
  {
    location: "Kagbeni",
    altitude: 2810,
    displayAltitude: "2,810 m",
  },
  {
    location: "Muktinath Temple",
    altitude: 3710,
    displayAltitude: "3,710 m",
  },
  {
    location: "Nearby High Passes",
    altitude: 4200,
    displayAltitude: "Up to 4,200 m",
  },
];

const maxAltitude = 4200;

export default function MuktinathCoverage() {
  return (
    <section
      id="coverage"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[980px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — Coverage Map
          </p>

          <h2 className="mt-4 font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            Muktinath Rescue Coverage Map
          </h2>

          <p className="mt-5 max-w-[840px] font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[12px]">
            The Muktinath routes pass through the Mustang district, gaining
            significant elevation between Jomsom, Kagbeni, Muktinath and the
            surrounding high passes. Rescue conditions change at every stage
            according to altitude, weather, terrain, landing access and
            aircraft performance.
          </p>
        </div>

        <div className="mt-9 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse font-manrope text-left">
            <thead>
              <tr className="bg-[#061523] text-white">
                <th className="w-[45%] border-r border-white/10 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em]">
                  Location
                </th>

                <th className="w-[16%] border-r border-white/10 px-4 py-3 text-right text-[9px] font-bold uppercase tracking-[0.18em]">
                  Altitude
                </th>

                <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em]">
                  Elevation
                </th>
              </tr>
            </thead>

            <tbody>
              {rescuePoints.map((point) => {
                const barWidth = `${Math.max(
                  12,
                  (point.altitude / maxAltitude) * 100,
                )}%`;

                return (
                  <tr
                    key={point.location}
                    className="border-b border-[#d5d7d6] bg-[#f9f7f2]"
                  >
                    <td className="border-x border-[#d5d7d6] px-4 py-4 font-manrope text-[10px] font-medium text-[#071825] sm:text-[11px]">
                      {point.location}
                    </td>

                    <td className="border-r border-[#d5d7d6] px-4 py-4 text-right font-manrope text-[10px] font-semibold text-[#071825] sm:text-[11px]">
                      {point.displayAltitude}
                    </td>

                    <td className="border-r border-[#d5d7d6] px-4 py-4">
                      <div className="h-[8px] w-full overflow-hidden bg-[#eee9df]">
                        <div
                          className="h-full bg-[#f2dfb4]"
                          style={{ width: barWidth }}
                          aria-label={`${point.location} elevation ${point.displayAltitude}`}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 border-t border-[#d5d7d6] pt-6 sm:grid-cols-3">
          <p className="font-manrope text-[10px] leading-[1.7] text-[#5b6872]">
            Jomsom may serve as an important regional staging and transfer
            point for Lower Mustang rescue operations.
          </p>

          <p className="font-manrope text-[10px] leading-[1.7] text-[#5b6872]">
            Muktinath and nearby high passes can involve reduced payload,
            stronger winds and more restricted landing options.
          </p>

          <p className="font-manrope text-[10px] leading-[1.7] text-[#5b6872]">
            Every mission remains subject to visibility, weather, aircraft
            availability and the pilot&apos;s final go or no-go decision.
          </p>
        </div>
      </div>
    </section>
  );
}