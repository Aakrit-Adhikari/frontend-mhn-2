"use client";

import Image from "next/image";

const filters = [
  { label: "All Experiences", href: "/tours" },
  { label: "Everest Region", href: "/tours?region=everest" },
  { label: "Pilgrimage", href: "/tours?category=pilgrimage" },
  { label: "Scenic Flights", href: "/tours?category=scenic-flights" },
  { label: "Charter", href: "/charter" },
  { label: "Luxury", href: "/tours?category=luxury" },
];

const tours = [
  {
    title: "Everest Base Camp",
    location: "Khumbu",
    altitude: "5,364 m",
    duration: "4-5 hrs",
    price: "From $1,050",
    tag: "Most Popular",
    href: "/tours/everest-base-camp",
    image: "/images/tour-section/everest-base-camp.jpg",
    description:
      "The world's most sought-after aerial destination. Land beside the glaciers at the foot of the highest peak on Earth.",
  },
  {
    title: "Muktinath Pilgrimage",
    location: "Mustang",
    altitude: "3,710 m",
    duration: "5-6 hrs",
    price: "From $780",
    tag: "Pilgrimage",
    href: "/tours/muktinath-pilgrimage",
    image: "/images/tour-section/muktinath.jpg",
    description:
      "Ancient temple, mountain silence, and a sacred Himalayan route completed in a single morning.",
  },
  {
    title: "Langtang Valley",
    location: "Langtang",
    altitude: "3,710 m",
    duration: "5-6 hrs",
    price: "From $650",
    tag: "Most Popular",
    href: "/tours/langtang-valley",
    image: "/images/tour-section/langtang.jpg",
    description:
      "A scenic high-altitude escape with dramatic ridges, glaciers, and alpine valleys.",
  },
  {
    title: "Annapurna Base Camp",
    location: "Annapurna",
    altitude: "4,130 m",
    duration: "5-6 hrs",
    price: "From $850",
    tag: "Most Popular",
    href: "/tours/annapurna-base-camp",
    image: "/images/tour-section/annapurna-base-camp.jpg",
    description:
      "Fly deep into the Annapurna sanctuary with panoramic snow peaks surrounding you.",
  },
  {
    title: "Gosaikunda Lake",
    location: "Rasuwa",
    altitude: "4,380 m",
    duration: "5-6 hrs",
    price: "From $780",
    tag: "Most Popular",
    href: "/tours/gosaikunda-lake",
    image: "/images/tour-section/gosaikunda.jpg",
    description:
      "A sacred alpine lake route with beautiful mountain landscapes and crisp Himalayan air.",
  },
];

function TourCard({ tour, large = false, className = "" }) {
  return (
    <a
      href={tour.href}
      className={`group relative block overflow-hidden bg-[#06182c] ${className}`}
    >
      <Image
        src={tour.image}
        alt={`${tour.title} helicopter tour`}
        fill
        priority={large}
        sizes={
          large
            ? "(max-width: 1024px) 100vw, 850px"
            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
        }
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,24,44,0.02)_0%,rgba(5,24,44,0.18)_45%,rgba(4,16,29,0.92)_100%)]" />
      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

      <span className="absolute left-[18px] top-[14px] z-10 bg-[#F2B632] px-[14px] py-[7px] font-manrope text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#003366]">
        {tour.tag}
      </span>

      <span className="absolute right-[14px] top-[14px] z-10 bg-[#003366] px-[12px] py-[7px] font-manrope text-[10px] font-bold text-[#F2B632]">
        {tour.price}
      </span>

      <div className="absolute inset-x-0 bottom-0 z-10 p-[18px]">
        <p className="mb-2 font-manrope text-[9px] font-semibold uppercase tracking-[0.26em] text-white/55">
          {tour.location} · {tour.altitude}
        </p>

        <h3
          className={`font-fraunces leading-none text-white ${
            large ? "text-[24px] md:text-[30px]" : "text-[18px] md:text-[21px]"
          }`}
        >
          {tour.title}
        </h3>

        <p className="mt-3 max-h-0 max-w-[520px] overflow-hidden font-manrope text-[15px] font-semibold leading-[1.35] text-white opacity-0 transition-all duration-500 group-hover:max-h-[70px] group-hover:opacity-100">
          {tour.description}
        </p>

        <div className="mt-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 font-manrope text-[11px] text-white/70">
            <span>{tour.duration}</span>
            <span>{tour.altitude}</span>
          </div>

          <span className="translate-y-1 font-manrope text-[16px] font-bold uppercase text-[#F2B632] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            Explore -&gt;
          </span>
        </div>
      </div>
    </a>
  );
}

export default function FeatureTourSection() {
  const [featured, sideCard, ...bottomCards] = tours;

  return (
    <section id="experiences" className="bg-white py-[56px] md:py-[72px]">
      <div className="mx-auto max-w-[1250px] px-5 md:px-8">
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-6 bg-[#F2B632]" />
            <p className="font-manrope text-[13px] font-bold uppercase tracking-[0.35em] text-[#F2B632]">
              The Collection
            </p>
          </div>

          <h2 className="font-fraunces text-[34px] font-bold leading-[0.92] tracking-[-0.03em] md:text-[45px]">
            <span className="block text-[#003366]">All Helicopter</span>
            <span className="block text-[#6f7c8d]">Experiences</span>
          </h2>
        </div>

        <div className="mb-8 flex flex-wrap gap-4">
          {filters.map((filter) => (
            <a
              key={filter.label}
              href={filter.href}
              className="border border-[#8ea1b8] px-[16px] py-[9px] font-manrope text-[10px] font-bold uppercase tracking-[0.16em] text-[#003366] transition-all duration-300 hover:border-[#F2B632] hover:bg-[#F2B632] hover:text-white"
            >
              {filter.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="mb-[14px] flex gap-[14px]">
            <TourCard tour={featured} large className="h-[330px] w-[850px]" />
            <TourCard tour={sideCard} className="h-[330px] w-[420px]" />
          </div>

          <div className="flex gap-[14px]">
            {bottomCards.map((tour) => (
              <TourCard
                key={tour.title}
                tour={tour}
                className="h-[300px] w-[420px]"
              />
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
          <TourCard
            tour={featured}
            large
            className="h-[320px] sm:col-span-2 md:h-[360px]"
          />

          <TourCard tour={sideCard} className="h-[260px] md:h-[300px]" />

          {bottomCards.map((tour) => (
            <TourCard
              key={tour.title}
              tour={tour}
              className="h-[240px] md:h-[280px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}