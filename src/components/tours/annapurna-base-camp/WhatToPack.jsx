import { CheckCircle2, XCircle } from "lucide-react";

const clothingLayers = [
  {
    layer: "Base Layer",
    item: "Thermal top and bottom",
    reason:
      "Helps retain body heat during the rapid ascent from Pokhara to Annapurna Base Camp.",
  },
  {
    layer: "Mid Layer",
    item: "Fleece jacket or light down vest",
    reason:
      "Provides insulation and can be removed easily after returning to lower altitude.",
  },
  {
    layer: "Outer Layer",
    item: "Warm, windproof down jacket",
    reason:
      "Protects against cold alpine wind and rapidly changing conditions at 4,130 metres.",
  },
  {
    layer: "Hands",
    item: "Insulated gloves",
    reason:
      "Keeps your hands warm while taking photographs and walking around the landing area.",
  },
  {
    layer: "Head",
    item: "Warm hat or beanie covering the ears",
    reason:
      "Provides protection from cold wind and helps reduce heat loss.",
  },
  {
    layer: "Eyes",
    item: "UV-protective sunglasses",
    reason:
      "Protects your eyes from strong high-altitude sunlight and glare from snow and glaciers.",
  },
  {
    layer: "Feet",
    item: "Comfortable walking shoes or light hiking boots",
    reason:
      "The ground around Annapurna Base Camp may be rocky, uneven, wet or covered with snow.",
  },
  {
    layer: "Skin",
    item: "SPF 50+ sunscreen and lip balm",
    reason:
      "High-altitude sunlight, cold air and dry wind can quickly affect exposed skin and lips.",
  },
];

const packingCategories = [
  {
    category: "Clothing",
    item: "Warm down jacket, thermal inner layers, gloves and a warm hat",
  },
  {
    category: "Eyewear",
    item: "UV-protective sunglasses, preferably with polarised lenses",
  },
  {
    category: "Documents",
    item: "Passport or identification, visa copy and booking confirmation",
  },
  {
    category: "Health",
    item: "Personal medication and motion-sickness tablets if required",
  },
  {
    category: "Electronics",
    item: "Camera or smartphone, spare battery and compact power bank",
  },
];

const bringItems = [
  "Passport or valid government-issued identification",
  "Visa copy where applicable",
  "Digital or printed booking confirmation",
  "Travel and emergency evacuation insurance documents",
  "Camera or smartphone with a full charge",
  "Spare battery or compact power bank",
  "Personal medication and prescribed altitude-related medicine",
  "Motion-sickness tablets if recommended for you",
  "Small water bottle",
  "Cash in NPR for optional food, souvenirs or gratuities",
  "Sunscreen, lip balm and hand sanitiser",
];

const leaveBehindItems = [
  "Large suitcases, duffel bags and bulky luggage",
  "Sleeping bags, tents and camping equipment",
  "Heavy trekking equipment not required for the short landing",
  "Extra clothing beyond one suitable warm outfit",
  "Valuables and unnecessary electronic devices",
  "Formal clothing and unsuitable footwear",
  "Drones without the required aviation and conservation-area permissions",
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
            Pack for Annapurna Base Camp at{" "}
            <span className="text-[#e2aa22]">4,130 metres.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-5xl font-manrope text-sm leading-7 text-slate-500">
            Annapurna Base Camp can be cold, windy and exposed even when
            Pokhara is warm. Dress in removable layers and carry only the
            essentials needed during the flight and the short landing.
          </p>
        </div>

        {/* CLOTHING TABLE */}
        <div className="mt-10 overflow-hidden rounded-[18px] border border-slate-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[780px] border-collapse">
              <thead className="bg-[#061f43]">
                <tr>
                  <th className="w-[15%] px-5 py-4 text-left font-manrope text-xs font-bold uppercase tracking-[0.15em] text-white">
                    Layer
                  </th>

                  <th className="w-[32%] px-5 py-4 text-left font-manrope text-xs font-bold uppercase tracking-[0.15em] text-white">
                    Item
                  </th>

                  <th className="px-5 py-4 text-left font-manrope text-xs font-bold uppercase tracking-[0.15em] text-white">
                    Why It Matters at ABC
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

        {/* MINIMUM CHECKLIST */}
        <div className="mt-8">
          <h3 className="font-fraunces text-2xl font-semibold text-[#08294d]">
            Minimum Packing Checklist
          </h3>

          <p className="mt-2 max-w-4xl font-manrope text-sm leading-7 text-slate-500">
            Carry these basic items in a compact daypack. Final luggage limits
            depend on passenger weight, fuel requirements and aircraft
            performance.
          </p>

          <div className="mt-5 overflow-hidden rounded-[18px] border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse">
                <thead className="bg-[#f2f5f8]">
                  <tr>
                    <th className="w-[28%] px-5 py-4 text-left font-manrope text-xs font-bold uppercase tracking-[0.14em] text-[#08294d]">
                      Category
                    </th>

                    <th className="px-5 py-4 text-left font-manrope text-xs font-bold uppercase tracking-[0.14em] text-[#08294d]">
                      Item
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {packingCategories.map((row, index) => (
                    <tr
                      key={row.category}
                      className={
                        index % 2 === 0 ? "bg-white" : "bg-[#fafbfc]"
                      }
                    >
                      <td className="border-t border-slate-200 px-5 py-4 font-manrope text-sm font-semibold text-[#08294d]">
                        {row.category}
                      </td>

                      <td className="border-t border-slate-200 px-5 py-4 font-manrope text-sm leading-6 text-slate-500">
                        {row.item}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* BRING / LEAVE BEHIND */}
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {/* WHAT TO BRING */}
          <article className="rounded-[18px] border border-slate-200 bg-white px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#e2aa22]/50 hover:shadow-[0_16px_40px_rgba(8,41,77,0.08)] md:px-7">
            <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[#dc9d16]">
              What to Bring
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
              What to Leave at Your Hotel
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

        {/* LUGGAGE NOTE */}
        <div className="mt-8 rounded-2xl border border-[#e8d39c] bg-[#fffaf0] px-5 py-5 text-center md:px-8">
          <p className="font-manrope text-xs leading-6 text-[#6f6245]">
            Keep your daypack light, ideally around 5 kg or less. The confirmed
            baggage allowance may be reduced depending on passenger weight,
            weather, fuel load and high-altitude aircraft-performance
            requirements.
          </p>
        </div>
      </div>
    </section>
  );
}