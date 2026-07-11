"use client";

import { useState } from "react";
import Image from "next/image";

const stories = [
  {
    category: "DESTINATION",
    title: "The Sacred Heights: Muktinath Temple by Helicopter",
    date: "23 February 2025",
    read: "8 min read",
    image: "/images/muktinath-pilgrimage/muktinath.jpg",
  },
  {
    category: "DESTINATION",
    title: "Muktinath and Mustang From Above",
    date: "23 February 2025",
    read: "5 min read",
    image: "/images/muktinath-pilgrimage/mustang.jpg",
  },
  {
    category: "DESTINATION",
    title: "Everest Base Camp Helicopter Tour",
    date: "23 February 2025",
    read: "9 min read",
    image: "/images/everest-base-camp/everest-base-camp.jpg",
  },
  {
    category: "TRAVEL",
    title: "Flying Above the Himalayas",
    date: "24 February 2025",
    read: "6 min read",
    image: "/images/fleet/The-heli.jpg",
  },
  {
    category: "ADVENTURE",
    title: "Gokyo Valley From the Sky",
    date: "25 February 2025",
    read: "7 min read",
    image: "/images/home-section/Gokyo-Valley.jpg",
  },
  {
    category: "GUIDE",
    title: "Best Time for Helicopter Tours in Nepal",
    date: "26 February 2025",
    read: "4 min read",
    image: "/images/home-section/mountain-helicopter.jpg",
  },
];

export default function StoriesSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleStories = showAll ? stories : stories.slice(0, 3);

  return (
    <section className="bg-[#071825] px-4 py-12 text-white sm:px-6 sm:py-16 md:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-6 sm:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c9972c] sm:text-xs sm:tracking-[0.35em]">
              <span className="h-px w-7 bg-[#c9972c] sm:w-8" />
              Stories from above
            </p>

            <h2 className="max-w-md font-serif text-3xl font-bold leading-none sm:text-4xl md:text-5xl">
              The journal of <br />
              <span className="text-[#d5a033]">a life aloft.</span>
            </h2>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="w-fit cursor-pointer text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400 transition hover:text-[#d5a033] sm:text-xs sm:tracking-[0.25em]">
            {showAll ? "Show Less" : "All Stories →"}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {visibleStories.map((story, index) => (
            <article
              key={index}
              className="group cursor-pointer overflow-hidden bg-[#0b2233] transition duration-300  hover:bg-[#103048]" >
              <div className="relative h-52 overflow-hidden sm:h-48 md:h-52">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill

                  style={{ filter: "brightness(1.3)" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 35vw"
                  className="object-cover opacity-80 transition duration-500  group-hover:opacity-100" />

                <span className="absolute left-4 top-4 bg-[#d5a033] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#071825]">
                  {story.category}
                </span>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="mb-3 font-serif text-lg font-bold leading-snug text-white transition duration-300 group-hover:text-[#d5a033] sm:text-xl">
                  {story.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-gray-400 sm:mb-8">
                  A pilgrimage that transcends ordinary tours from Pokhara.
                  Witness the spiritual journey from Kathmandu to one of Asia’s
                  most revered high-altitude temples.
                </p>

                <div className="flex flex-wrap justify-between gap-3 text-xs text-gray-500">
                  <span>{story.date}</span>
                  <span>{story.read}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}