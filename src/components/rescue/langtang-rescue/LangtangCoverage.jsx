// src/components/rescue/langtang/LangtangCoverage.jsx

const rescuePoints = [
  {
    location: "Syabrubesi",
    altitude: 1460,
  },
  {
    location: "Lama Hotel",
    altitude: 2470,
  },
  {
    location: "Ghoda Tabela",
    altitude: 3000,
  },
  {
    location: "Langtang Village",
    altitude: 3430,
  },
  {
    location: "Kyanjin Gompa",
    altitude: 3870,
  },
  {
    location: "Tserko Ri",
    altitude: 4984,
  },
  {
    location: "Langshisha Kharka",
    altitude: 4000,
  },
  {
    location: "Gosaikunda",
    altitude: 4380,
  },
];

const maxAltitude = Math.max(...rescuePoints.map((point) => point.altitude));

function formatAltitude(altitude) {
  return `${altitude.toLocaleString()} m`;
}

export default function LangtangCoverage() {
  return (
    <section
      id="coverage"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[980px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — Rescue Coverage by Altitude
          </p>

          <h2 className="mt-4 font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            Common Langtang Region{" "}
            <span className="italic text-[#9b6b00]">rescue points.</span>
          </h2>

          <p className="mt-5 max-w-[760px] font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[12px]">
            Langtang Valley runs roughly forty-five kilometres from Syabrubesi
            to Langshisha Kharka, gaining more than 3,000 metres in elevation
            along the way. Rescue conditions change significantly at each stage
            of the route.
          </p>
        </div>

        <div className="mt-9 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse font-manrope text-left">
            <thead>
              <tr className="bg-[#061523] text-white">
                <th className="w-[48%] border-r border-white/10 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em]">
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
                    className="border-b border-[#d5d7d6] bg-[#f9f7f2] transition-colors duration-300 hover:bg-[#f2eee5]"
                  >
                    <td className="border-x border-[#d5d7d6] px-4 py-4 font-manrope text-[10px] font-medium text-[#071825] sm:text-[11px]">
                      {point.location}
                    </td>

                    <td className="border-r border-[#d5d7d6] px-4 py-4 text-right font-manrope text-[10px] font-semibold text-[#071825] sm:text-[11px]">
                      {formatAltitude(point.altitude)}
                    </td>

                    <td className="border-r border-[#d5d7d6] px-4 py-4">
                      <div className="h-[8px] w-full overflow-hidden bg-[#eee9df]">
                        <div
                          className="h-full bg-[#f2dfb4] transition-all duration-500"
                          style={{ width: barWidth }}
                          aria-label={`${point.location} elevation ${formatAltitude(
                            point.altitude,
                          )}`}
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
            Lower-elevation points generally allow greater payload and more
            flexible landing options.
          </p>

          <p className="font-manrope text-[10px] leading-[1.7] text-[#5b6872]">
            Above 4,000 metres, wind, cloud, temperature and reduced air density
            can significantly affect aircraft performance.
          </p>

          <p className="font-manrope text-[10px] leading-[1.7] text-[#5b6872]">
            High points such as Tserko Ri and Gosaikunda may require reduced
            payload, shuttle movements or transfer to a safer nearby helipad.
          </p>
        </div>
      </div>
    </section>
  );
}