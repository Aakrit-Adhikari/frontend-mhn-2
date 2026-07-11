import Image from "next/image";

export default function FlightExperience() {
  return (
    <section className="bg-white px-5 pb-0 pt-8 md:px-8 md:pt-10 lg:pt-12">
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d99a1b]">
            <span className="h-px w-7 bg-[#d99a1b]" />
            What This Flight Feels Like
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#08294d] md:text-4xl">
            What the Langtang Helicopter Tour{" "}
            <span className="text-[#e0a326]">Feels Like.</span>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="mx-auto mt-8 max-w-6xl space-y-5 font-manrope text-sm leading-7 text-slate-500">
          <div>
            <h3 className="font-fraunces text-xl font-semibold text-[#08294d]">
              The Opening of the Valley
            </h3>

            <p className="mt-3">
              Departing from Kathmandu Valley, the helicopter rises above the
              rolling Shivapuri hills before following the winding Trishuli
              River corridor toward Langtang National Park. The city gradually
              disappears behind you as forested hills, remote settlements and
              deep river valleys unfold beneath the aircraft.
            </p>
          </div>

          <p>
            As the flight enters the Langtang region, dense forests of
            rhododendron, oak and pine give way to a dramatic panorama of
            snow-covered Himalayan peaks. Langtang Lirung, Dorje Lakpa, Ganesh
            Himal and the surrounding ridgelines rise sharply above the valley,
            while glaciers and alpine slopes reveal the region&apos;s rugged
            high-altitude landscape.
          </p>

          <div>
            <h3 className="font-fraunces text-xl font-semibold text-[#08294d]">
              Helicopter Landing at Kyanjin Gompa
            </h3>

            <p className="mt-3">
              The helicopter lands at Kyanjin Gompa at approximately 3,870
              metres. When the rotor noise fades, the stillness of the valley
              becomes immediately noticeable. Stone houses, fluttering prayer
              flags, grazing yaks and the immense frozen face of Langtang Lirung
              surround the village.
            </p>
          </div>

          <p>
            During the landing, passengers can explore the traditional Tamang
            settlement, visit Kyanjin Gompa Monastery, see the local yak cheese
            factory and enjoy breakfast at a mountain teahouse. With around 60
            to 90 minutes on the ground, the experience feels less like a brief
            scenic flight and more like stepping directly into the heart of the
            Langtang Himalayas.
          </p>
        </div>

        {/* ROUTE MAP */}
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/langtang/langtang-helicopter-route-map.png"
              alt="Langtang helicopter tour route map from Kathmandu to Kyanjin Gompa"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}