"use client";

import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    title: "Everest Base Camp",
    location: "4–5 HRS | 5,364M | KHUMBU, NEPAL",
    price: "From $1,200",
    image: "/images/home-section/everest-base-camp.jpg",
    tag: "Signature",
    size: "large",
    href: "/tours/everest-base-camp",
    details:
      "Experience a breathtaking helicopter journey to Everest Base Camp with panoramic views of the Himalayas, glaciers, and iconic peaks.",
  },
  {
    title: "Muktinath Temple",
    price: "From $900",
    image: "/images/home-section/muktinath.jpg",
    tag: "Spiritual",
    href: "/tours/muktinath-pilgrimage",
    details:
      "A sacred helicopter tour to Muktinath Temple, perfect for pilgrims and travelers seeking a high-altitude spiritual journey.",
  },
  {
    title: "Annapurna Sanctuary",
    price: "From $850",
    image: "/images/home-section/Image_Annapurna.png",
    tag: "Exclusive",
    href: "/tours/annapurna-base-camp",
    details:
      "Fly deep into the Annapurna region and witness dramatic mountain walls, valleys, and remote Himalayan landscapes.",
  },
  {
    title: "Langtang Valley",
    price: "From $650",
    image: "/images/home-section/Image_LangtangValley.png",
    tag: "Hidden Gem",
    href: "/tours/langtang-valley",
    details:
      "Explore the beautiful Langtang Valley from above with scenic mountain views and peaceful Himalayan terrain.",
  },
  {
    title: "Gosaikunda Lake",
    price: "From $1,500",
    image: "/images/home-section/Gokyo-Valley.jpg",
    tag: "Bucket Journey",
    href: "/tours/gosaikunda-lake",
    details:
      "A premium helicopter-assisted journey designed for travelers heading toward the sacred Kailash region.",
  },
];

export default function TourSection() {
  return (
    <section className="bg-[#0A1929] px-4 py-14 text-white sm:px-6 md:px-10 lg:px-20 xl:px-7.5 lg:py-24">
      <div className="mx-auto max-w-292">
        <div className="mb-8">
          <p className="mb-3 flex items-center gap-3 text-[14px] sm:text-[16px] font-manrope font-bold tracking-[3px] sm:tracking-[3.8px] uppercase text-[#F2B632]">
            <span className="h-px w-8 bg-[#F2B632]" />
            Signature Helicopter Routes in Nepal
          </p>

          <h2 className="font-fraunces text-[32px] leading-8 tracking-[-0.8px] font-bold text-white sm:text-[40px] sm:leading-10 md:text-[49.27px] md:leading-[45.33px] md:tracking-[-1.23px]">
            Five Himalayan Destinations.
            <br />
            <span className="text-[#F2B632]"> Zero Compromises.</span>
          </h2>

          <p className="mt-4 max-xs text-sm leading-relaxed text-[#FFFFFF] font-manrope font-medium tracking-normal">
            We operate some of Nepal’s finest and most popular helicopter touring options from Annapurna, Muktinath, and Kailash to Everest Base Camp and Langtang. 
          </p>
        </div>

        <div className="flex flex-col gap-7 xl:flex-row xl:items-start xl:gap-7.5">
          <Link
            href={tours[0].href}
            className="group relative h-105 w-full overflow-hidden text-left sm:h-140 xl:h-177 xl:w-190.25"
          >
            <TourImage tour={tours[0]} large />
          </Link>

          <div className="flex flex-col gap-7 xl:gap-7">
            {tours.slice(1, 3).map((tour) => (
              <Link
                href={tour.href}
                key={tour.title}
                className="group relative h-70 w-full overflow-hidden text-left sm:h-85 xl:w-94.25"
              >
                <TourImage tour={tour} />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-7 sm:flex-row xl:gap-7">
          {tours.slice(3).map((tour) => (
            <Link
              href={tour.href}
              key={tour.title}
              className="group relative h-70 w-full overflow-hidden text-left sm:w-1/2 xl:w-[377.5px]"
            >
              <TourImage tour={tour} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TourImage({ tour, large = false }) {
  return (
    <>
      <Image
        src={tour.image}
        alt={tour.title}
        fill
        quality={75}
        sizes={
          large
            ? "(max-width: 1280px) 100vw, 761px"
            : "(max-width: 1280px) 100vw, 377px"
        }
        className="object-cover brightness-95 contrast-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

      <span className="absolute left-4 top-4 inline-flex items-center justify-center px-3 py-2 sm:px-4 bg-[#F2B632] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#071825]">
        {tour.tag}
      </span>

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-700 group-hover:translate-y-0">
        {tour.location && (
          <p className="mb-1 text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-gray-300">
            {tour.location}
          </p>
        )}

        <h3 className="font-fraunces text-xl sm:text-2xl font-semibold transition group-hover:text-[#F2B632] tracking-[1.93px]">
          {tour.title}
        </h3>

        <div className="mt-2 flex items-center justify-between text-[12px] sm:text-[16px] font-manrope font-bold uppercase tracking-normal">
          <span className="text-[#F2B632]">{tour.price}</span>
          <span>Inquiry →</span>
        </div>

        <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-700 group-hover:mt-4 group-hover:max-h-40 group-hover:opacity-100">
          <p className="text-sm leading-6 text-white/90">{tour.details}</p>
        </div>
      </div>
    </>
  );
}