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
            What the Muktinath Helicopter Tour{" "}
            <span className="text-[#e0a326]">Feels Like.</span>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="mx-auto mt-8 max-w-6xl space-y-5 font-manrope text-sm leading-7 text-slate-500">
          <p>
            The Muktinath Helicopter Tour begins with a scenic flight above
            Nepal&apos;s green hills, deep river valleys and traditional
            mountain settlements. As the aircraft travels toward Mustang, the
            landscape gradually changes from lush vegetation into the dry,
            dramatic and desert-like terrain for which the region is famous.
          </p>

          <p>
            Throughout the journey, passengers can enjoy spectacular aerial
            views of the Annapurna and Dhaulagiri mountain ranges. The
            helicopter&apos;s elevated perspective creates exceptional
            photography opportunities that are difficult to experience from
            the ground while trekking or travelling by road.
          </p>

          <p>
            After landing near Muktinath, passengers can visit the sacred
            temple complex, receive darshan and explore its important religious
            sites. The experience combines Himalayan scenery with one of
            Nepal&apos;s most significant Hindu and Buddhist pilgrimage
            destinations in a single journey.
          </p>

          <p>
            The complete tour takes approximately three hours from Kathmandu
            and around two hours from Pokhara, including the temple visit. It is
            suitable for families, groups of friends and solo travellers, with
            both private charter and shared-flight options available.
          </p>
        </div>

        {/* ROUTE MAP */}
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/muktinath/muktinath-helicopter-route-map.png"
              alt="Muktinath helicopter tour route map from Kathmandu and Pokhara"
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