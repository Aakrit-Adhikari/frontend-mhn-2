import { CheckCircle2, XCircle } from "lucide-react";

const clothingLayers = [
  {
    layer: "Base Layer",
    item: "Thermal top and bottoms (merino wool or synthetic)",
    reason:
      "Helps regulate body temperature during the rapid altitude change from Kathmandu at 1,400 metres to Kyanjin Gompa at 3,870 metres. Moisture-wicking fabric also prevents perspiration from cooling your body.",
  },
  {
    layer: "Mid Layer",
    item: "Fleece jacket or light down vest",
    reason:
      "Provides essential insulation when you step out of the helicopter into the colder mountain air. It can be removed easily after returning to Kathmandu or while walking around Kyanjin Village.",
  },
  {
    layer: "Outer Layer",
    item: "Windproof and waterproof down jacket",
    reason:
      "Langtang Valley can channel cold glacier winds from Langtang Lirung. A quality outer layer reduces wind chill and helps retain body heat during your time on the ground.",
  },
  {
    layer: "Head",
    item: "Warm beanie or thermal hat covering the ears",
    reason:
      "A warm hat helps reduce heat loss and protects your ears while standing on the exposed helipad or walking through the village.",
  },
  {
    layer: "Hands",
    item: "Insulated gloves or mittens",
    reason:
      "Your hands will be exposed to cold air while using cameras and phones. Insulated gloves help prevent numbness and keep you comfortable during the 60–90-minute landing.",
  },
  {
    layer: "Feet",
    item: "Comfortable walking shoes or light hiking boots",
    reason:
      "The ground at Kyanjin Gompa can be rocky and uneven, with possible snow or ice. Footwear with a good grip is important when visiting the monastery, village and cheese factory.",
  },
  {
    layer: "Eyes",
    item: "UV-protective sunglasses, preferably wrap-around",
    reason:
      "High-altitude sunlight and glare from snow and glaciers can be intense. Quality sunglasses help protect your eyes, with polarised lenses being especially useful.",
  },
  {
    layer: "Sun Protection",
    item: "SPF 50+ sunscreen and lip balm with SPF",
    reason:
      "Exposed skin can burn quickly at high altitude. Apply sunscreen before landing and use lip balm regularly to protect against strong sunlight, cold air and dry mountain wind.",
  },
];

const bringItems = [
  "Passport or a clear photocopy of your valid identification",
  "Booking confirmation, either digital or printed",
  "Travel and emergency medical evacuation insurance documents",
  "Camera or smartphone with a full battery",
  "Spare camera batteries kept inside a warm jacket pocket",
  "Additional memory cards for photographs and video",
  "Small water bottle of approximately 0.5–1 litre",
  "Personal medication, including an inhaler, heart medicine or altitude medication prescribed by your doctor",
  "Cash in NPR or USD for gratuities, souvenirs, yak cheese or monastery donations",
  "Lip balm, sunscreen and hand sanitiser",
  "Small snacks such as an energy bar or chocolate",
];

const leaveBehindItems = [
  "Large suitcases, duffel bags or bulky luggage",
  "More than approximately 5 kg of personal carry-on luggage",
  "Sleeping bags, tents, trekking poles and multi-day trekking equipment",
  "Heavy expedition boots when comfortable light hiking shoes are sufficient",
  "Expensive jewellery and unnecessary electronic equipment",
  "Original documents not required during the flight",
  "Formal clothing and additional outfits not needed for the morning tour",
  "Drones unless you have received the required aviation and national park permissions",
];

export default function WhatToPack() {
  return (
    <section className="bg-white px-5 py-16 md:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#e2aa22]">
            <span className="h-px w-7 bg-[#e2aa22]" />
            What to Wear and What to Pack
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#08294d] md:text-4xl">
            Dress for Kyanjin Gompa at{" "}
            <span className="text-[#e2aa22]">3,870 metres.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-5xl font-manrope text-sm leading-7 text-slate-500">
            Temperatures at Kyanjin Gompa can fall below freezing, particularly
            during winter and early-morning departures. Cold glacier winds,
            strong sunlight and rapid altitude gain can make conditions feel
            significantly colder than Kathmandu, so layered clothing is
            essential.
          </p>
        </div>

        {/* CLOTHING TABLE */}
        <div className="mt-10 overflow-hidden rounded-[18px] border border-slate-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse">
              <thead className="bg-[#061f43]">
                <tr>
                  <th className="w-[15%] px-5 py-4 text-left font-manrope text-xs font-bold uppercase tracking-[0.15em] text-white">
                    Layer
                  </th>

                  <th className="w-[30%] px-5 py-4 text-left font-manrope text-xs font-bold uppercase tracking-[0.15em] text-white">
                    Item
                  </th>

                  <th className="px-5 py-4 text-left font-manrope text-xs font-bold uppercase tracking-[0.15em] text-white">
                    Why It Matters for Langtang
                  </th>
                </tr>
              </thead>

              <tbody>
                {clothingLayers.map((row, index) => (
                  <tr
                    key={row.layer}
                    className={
                      index % 2 === 0 ? "bg-white" : "bg-[#f5f7f9]"
                    }
                  >
                    <td className="border-b border-slate-200 px-5 py-4 align-top font-manrope text-sm font-semibold text-[#08294d]">
                      {row.layer}
                    </td>

                    <td className="border-b border-slate-200 px-5 py-4 align-top font-manrope text-sm leading-6 text-[#263c55]">
                      {row.item}
                    </td>

                    <td className="border-b border-slate-200 px-5 py-4 align-top font-manrope text-sm leading-6 text-slate-500">
                      {row.reason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* DAYPACK NOTE */}
        <div className="mt-8 rounded-2xl border border-[#e8d39c] bg-[#fffaf0] px-5 py-5 md:px-7">
          <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[#c88c12]">
            What to Bring in Your Daypack
          </h3>

          <p className="mt-3 font-manrope text-sm leading-7 text-[#6f6245]">
            Bring a small, lightweight daypack weighing approximately 5 kg or
            less. Helicopter luggage capacity is limited, so carry only the
            essentials needed during the flight and your 60–90 minutes at
            Kyanjin Gompa.
          </p>
        </div>

        {/* BRING / LEAVE BEHIND */}
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {/* WHAT TO BRING */}
          <article className="rounded-[18px] border border-slate-200 bg-white px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#e2aa22]/50 hover:shadow-[0_16px_40px_rgba(8,41,77,0.08)] md:px-7">
            <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[#dc9d16]">
              Packing List
            </h3>

            <div className="mt-5 space-y-3">
              {bringItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={15}
                    strokeWidth={1.8}
                    className="mt-1 shrink-0 text-[#0a7bd7]"
                  />

                  <p className="font-manrope text-sm leading-6 text-slate-500">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* WHAT TO LEAVE BEHIND */}
          <article className="rounded-[18px] border border-slate-200 bg-white px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(8,41,77,0.08)] md:px-7">
            <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              What to Leave at Your Kathmandu Hotel
            </h3>

            <div className="mt-5 space-y-3">
              {leaveBehindItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <XCircle
                    size={15}
                    strokeWidth={1.7}
                    className="mt-1 shrink-0 text-slate-400"
                  />

                  <p className="font-manrope text-sm leading-6 text-slate-500">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* FINAL NOTE */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 text-center md:px-8">
          <p className="font-manrope text-xs leading-6 text-slate-500">
            Final luggage allowance depends on passenger weight, group size,
            fuel requirements, weather and aircraft performance. Follow the
            ground team&apos;s instructions when packing for your confirmed
            flight.
          </p>
        </div>
      </div>
    </section>
  );
}