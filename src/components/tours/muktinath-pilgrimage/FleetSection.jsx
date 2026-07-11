import Image from "next/image";

const fleet = [
  {
    registration: "9N-ALD",
    model: "Airbus AS350 B3e (H125)",
    image: "/images/fleet/fleet2.jpg",
    specs: [
      ["Manufacturer", "Airbus Helicopters, France"],
      ["Engine", "Safran Arriel 2D"],
      ["Capacity", "Up to 5 passengers + 1 pilot"],
      ["Maximum Takeoff Weight", "2,250 kg"],
      ["Maximum Cruise Speed", "252 km/h"],
      ["Operational Strength", "High-altitude flights"],
    ],
    description:
      "With excellent visibility, a comfortable cabin, and proven performance in high-and-hot environments, the 9N-ALD enables Mountain Helicopters Nepal to operate efficiently across the remote mountain terrain between Kathmandu, Pokhara, and Muktinath. The aircraft is maintained according to Nepalese aviation requirements and operated by experienced pilots familiar with Mustang’s challenging conditions.",
  },
  {
    registration: "9N-AOP",
    model: "Airbus AS350 B3e (H125)",
    image: "/images/fleet/fleet.png",
    specs: [
      ["Manufacturer", "Airbus Helicopters, France"],
      ["Engine", "Safran Arriel 2D"],
      ["Capacity", "Up to 5 passengers + 1 pilot"],
      ["Maximum Takeoff Weight", "2,250 kg"],
      ["Altitude Capability", "Up to 23,000 ft"],
    ],
    description:
      "Powered by the Safran Arriel 2D engine with dual-channel FADEC, the 9N-AOP provides dependable performance, responsive handling, and strong climbing capability. These features make it well suited to operations through the Kali Gandaki Valley and into the high-altitude surroundings of Muktinath.",
  },
];

export default function FleetSection() {
  return (
    <section className="bg-white px-5 py-16 md:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* SECTION HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d99a1b]">
            <span className="h-px w-7 bg-[#d99a1b]" />
            Our Fleet for This Route
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#08294d] md:text-4xl">
            Aircraft operating the{" "}
            <span className="text-[#e0a326]">Muktinath route.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl font-manrope text-sm leading-7 text-slate-500">
            Our Airbus H125 helicopters are designed for dependable performance
            in Nepal&apos;s demanding high-altitude environment, providing
            excellent visibility, responsive handling, and a comfortable flight
            to Muktinath.
          </p>
        </div>

        {/* FLEET CARDS */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {fleet.map((aircraft) => (
            <article
              key={aircraft.registration}
              className="group overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(8,41,77,0.04)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#d99a1b]/50 hover:shadow-[0_24px_55px_rgba(8,41,77,0.14)]"
            >
              {/* AIRCRAFT IMAGE */}
              <div className="relative h-56 w-full overflow-hidden md:h-64">
                <Image
                  src={aircraft.image}
                  alt={`${aircraft.registration} ${aircraft.model} operating the Muktinath helicopter route`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-[#08294d]/20 transition-colors duration-500 group-hover:bg-[#08294d]/10" />

                {/* HOVER GOLD LINE */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#e0a326] transition-all duration-500 group-hover:w-full" />
              </div>

              {/* CARD CONTENT */}
              <div className="p-6 md:p-7">
                <h3 className="font-fraunces text-xl font-semibold text-[#08294d] transition-colors duration-300 group-hover:text-[#d99a1b]">
                  {aircraft.registration}
                </h3>

                <p className="mt-1 font-manrope text-xs font-bold uppercase tracking-[0.14em] text-slate-500 transition-colors duration-300 group-hover:text-[#08294d]">
                  {aircraft.model}
                </p>

                {/* AIRCRAFT SPECIFICATIONS */}
                <div className="mt-6">
                  {aircraft.specs.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-start justify-between gap-5 border-b border-slate-100 px-2 py-3 transition-all duration-300 hover:bg-[#fff9ec]"
                    >
                      <span className="font-manrope text-xs text-slate-500 transition-colors duration-300">
                        {label}
                      </span>

                      <span className="max-w-[55%] text-right font-manrope text-xs font-semibold leading-5 text-[#08294d]">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* DESCRIPTION */}
                <p className="mt-6 font-manrope text-sm leading-7 text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
                  {aircraft.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* OPERATION NOTE */}
        <div className="mt-8 rounded-2xl border border-[#e6d4a8] bg-[#fffaf0] px-5 py-5 text-center md:px-8">
          <p className="font-manrope text-xs leading-6 text-[#6f6245]">
            The aircraft assigned to each departure may vary according to
            aircraft availability, weather, passenger weight, operational
            requirements, and high-altitude performance considerations.
          </p>
        </div>
      </div>
    </section>
  );
}