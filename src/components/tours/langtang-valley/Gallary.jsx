"use client";

import Image from "next/image";

const images = [
  {
    src: "/images/langtang-valley/langtang-gallary.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/langtang-valley/langtang-gallary1.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/langtang-valley/langtang-gallary2.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/langtang-valley/langtang-gallary3.jpg",
    className: "col-span-1 row-span-1 md:col-span-2",
  },
  {
    src: "/images/langtang-valley/langtang-gallary4.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/langtang-valley/langtang-gallary5.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/langtang-valley/langtang-gallary6.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/langtang-valley/langtang-gallary7.jpg",
    className: "col-span-1 row-span-1",
  },
];

export default function Gallary() {
  return (
    <section
      id="gallery"
      className="scroll-mt-36 bg-white py-[88px]"
    >
      <div className="mx-auto max-w-[1152px] px-5 md:px-10">
        <div className="mb-[38px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-5 bg-[#F2B632]" />

            <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.42em] text-[#F2B632]">
              In Pictures
            </p>
          </div>

          <h2 className="font-fraunces text-[38px] font-semibold leading-none tracking-[-0.03em] text-[#003366] md:text-[44px]">
            Frames from the flight
          </h2>
        </div>

        <div className="grid gap-2 md:h-[616px] md:grid-cols-3 md:grid-rows-3">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`relative h-[240px] overflow-hidden bg-[#d9e1e8] md:h-auto ${image.className}`}
            >
              <Image
                src={image.src}
                alt={`Langtang Valley gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={95}
                priority={index < 3}
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}