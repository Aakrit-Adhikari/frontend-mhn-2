"use client";

import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const images = [
  { src: "/images/charter.png", title: "Flying Above the Glaciers" },
  { src: "/images/The-heli.jpg", title: "Landing in the Himalayas" },
  { src: "/images/nepal-is-a-beautiful.jpg", title: "Aerial View of Nepal" },
  { src: "/images/mountain-villages.jpg", title: "Mountain Valleys" },
  { src: "/images/Worlds-highest.jpg", title: "Walking Through Mustang" },
  { src: "/images/Gokyo-Valley.jpg", title: "Snow Peaks Journey" },
];

export default function InstagramSection() {
  return (
    <section className="bg-white px-4 py-12 text-[#061827] sm:px-6 sm:py-16 md:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center font-fraunces text-[#0A1929] text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl tracking-[-1.23px]">
          Our Instagram
        </h2>

        <div className="mb-6 flex flex-col gap-6 md:mb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 flex items-center gap-3 text-[11px] font-manrope font-bold uppercase text-[#F2B632] sm:text-[12px] sm:tracking-[0.35em] tracking-[2.5px] md:tracking-[3.8px]">
              <span className="h-px w-7 bg-[#F2B632] sm:w-8" />
              Through Our Lenses
            </p>

            <h3 className="font-fraunces text-3xl font-bold leading-none sm:text-4xl md:text-5xl tracking-[-1.23px]">
              Captured Above <br />
              <span className="text-[#F2B632]">the Himalayas.</span>
            </h3>
          </div>

          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest sm:text-xs">
            <FaInstagram className="cursor-pointer text-4xl text-black sm:text-5xl" />

            <div>
              <p className="font-manrope font-bold text-[12px]">Follow us</p>
              <p className="cursor-pointer font-manrope font-medium lowercase tracking-normal transition hover:text-[#F2B632] text-[12px] sm:text-[14px]">
                @mountainhelicoptersnepal
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative h-64 cursor-pointer overflow-hidden sm:h-72 lg:h-80"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                quality={75}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover brightness-90 contrast-105 transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-500 group-hover:bg-black/45">
                <h4 className="translate-y-4 px-4 text-center font-serif text-xl font-bold text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:text-2xl">
                  {image.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}