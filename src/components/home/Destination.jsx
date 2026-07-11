"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Zap,
  Compass,
  Plane,
  Calendar,
  Heart,
} from "lucide-react";

const tabs = [
  {
    icon: Zap,
    label: "By Experience",
    items: [
      {
        number: "01",
        title: "Scenic Flights",
        subtitle: "Everest and Himalayan sightseeing",
        image: "/images/home-section/Image_FilterSection.png",
        badge: "Scenic Flights",
        heading: "Above the World's Rooftop",
        description:
          "Enjoy a breathtaking helicopter flight over Everest, Lhotse, Makalu, and the Himalayan crown in a scenic tour designed for utmost comfort and safety.Perfect for people interested in viewing Nepal’s peaks but don’t wish to undertake a hiking journey.",
        price: "From $650",
        duration: "3–5 hours",
      },
      {
        number: "02",
        title: "Glacier Landing",
        subtitle: "High-altitude landings near Nepal’s iconic peaks",
        image: "/images/home-section/Image_FilterSection.png",
        badge: "Glacier Landing",
        heading: "Touch the Ice",
        description:
          "Land beside ancient glaciers and experience the Himalayas from a place few travelers ever reach.",
        price: "From $850",
        duration: "4–6 hours",
      },
      {
        number: "03",
        title: "Expedition Support",
        subtitle: "Helicopter logistics for remote mountain regions",
        image: "/images/home-section/Image_FilterSection.png",
        badge: "Expedition",
        heading: "Reach the Unreachable",
        description:
          "Specialized helicopter support for mountain expeditions, rescue coordination, and remote logistics.",
        price: "Custom",
        duration: "Flexible",
      },
      {
        number: "04",
        title: "Private Charter",
        subtitle: "Custom helicopter flights from Kathmandu and beyond",
        image: "/images/home-section/Image_FilterSection.png",
        badge: "Private Charter",
        heading: "Fly on Your Schedule",
        description:
          "Private helicopter charters designed around your timing, route, and destination.",
        price: "On Request",
        duration: "Flexible",
      },
      {
        number: "05",
        title: "Photo & Films",
        subtitle: "Aerial filming access across Nepal’s landscapes",
        image: "/images/home-section/Image_FilterSection.png",
        badge: "Photo & Films",
        heading: "Cinematic Himalayan Access",
        description:
          "Aerial filming and photography flights for productions, creators, and brand campaigns.",
        price: "On Request",
        duration: "Flexible",
      },
    ],
  },
  { icon: Compass, label: "By Destination", items: [] },
  { icon: Plane, label: "By Travel Style", items: [] },
  { icon: Calendar, label: "By Duration", items: [] },
  { icon: Heart, label: "By Feeling", items: [] },
];

export default function Destination() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  const currentItems = tabs[activeTab].items.length
    ? tabs[activeTab].items
    : tabs[0].items;

  const selected = currentItems[activeItem] || currentItems[0];

  return (
    <section className="bg-white px-4 py-12 text-[#061827] sm:px-6 sm:py-14 md:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="mb-4 flex items-center gap-3 text-[12px] font-manrope font-bold tracking-[2.5px] uppercase text-[#F2B632] sm:text-[14px] sm:tracking-[3.2px] lg:text-[16px] lg:tracking-[3.8px]">
            <span className="h-px w-8 bg-[#F2B632]" />
            Your Journey Starts Here
          </p>

          <h2 className="font-fraunces text-3xl font-bold leading-none text-[#0A1929] tracking-[-1.39px] sm:text-5xl lg:text-6xl">
            Find Your Himalayan  <br />
            <span className="text-[#003366] cursor-pointer font-fraunces font-bold tracking-[-1.39px]">
              Helicopter Tour Experience.
            </span>
          </h2>

          <p className="mt-5 max-md text-[#6B7886] text-[14px] sm:text-[16px] font-manrope font-light tracking-normal">
            Choose the way you want to see Nepal: scenic Everest flights, glacier landings, private helicopter charters, aerial filming, or expedition support across
          </p>
        </div>

        <div className="mb-4 flex gap-4 overflow-x-auto whitespace-nowrap pb-2 text-[12px] sm:text-[14px] font-manrope tracking-normal font-semibold uppercase text-[#00152B]/70 sm:flex-wrap sm:overflow-visible sm:pb-0">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.label}
                onClick={() => {
                  setActiveTab(index);
                  setActiveItem(0);
                }}
                className={`flex shrink-0 items-center gap-1 transition hover:text-[#F2B632] cursor-pointer ${
                  activeTab === index ? "text-[#00152B]" : ""
                }`}
              >
                <Icon size={15} className="text-[#F2B632]" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {currentItems.map((item, index) => (
            <button
              key={item.number}
              onClick={() => setActiveItem(index)}
              className={`relative border px-4 py-4 text-left transition-all duration-300 hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)] ${
                activeItem === index
                  ? "border-[#F2B632] bg-[#00152B] text-[#ffffff]"
                  : "border-gray-200 bg-[#ffffff] text-[#00152B] hover:bg-white cursor-pointer"
              }`}
            >
              <p
                className={`text-[11px] font-semibold font-manrope tracking-normal ${
                  activeItem === index ? "text-[#F2B632]" : "text-[#6b6b6b]"
                }`}
              >
                {item.number}
              </p>

              <h3 className="mt-1 font-fraunces text-base sm:text-lg font-semibold tracking-normal leading-none cursor-pointer">
                {item.title}
              </h3>

              <p className="mt-1 text-[11px] sm:text-[12px] font-manrope font-semibold tracking-normal">
                {item.subtitle}
              </p>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 cursor-pointer">
          <div className="relative min-h-70 overflow-hidden sm:min-h-105 lg:min-h-125 cursor-pointer">
            <Image
              src={selected.image}
              alt={selected.title}
              fill
              quality={75}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover brightness-105 contrast-105"
            />

            <div className="absolute inset-0 bg-[#071825]/35" />

            <span className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 bg-[#F2B632] px-4 py-2 text-[10px] sm:text-[12px] font-bold uppercase tracking-widest text-[#071825]">
              {selected.badge}
            </span>
          </div>

          <div className="bg-[#0A1929] p-6 text-white sm:p-10 lg:p-14">
            <p className="mb-6 text-[10px] font-manrope font-bold uppercase tracking-[3.2px] text-[#F2B632]">
              Selected Experience
            </p>

            <h3 className="font-bold text-3xl sm:text-3xl lg:text-3xl font-fraunces tracking-normal">
              {selected.heading}
            </h3>

            <p className="mt-6 max-w-md leading-7 text-gray-400 font-manrope text-[14px] tracking-normal font-light">
              {selected.description}
            </p>

            <div className="mt-8 grid max-w-sm grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 border-b border-white/10 pb-8">
              <div>
                <p className="mb-2 text-[11px] sm:text-[12px] uppercase tracking-widest text-gray-500 font-manrope font-normal">
                  Starting From
                </p>
                <p className="font-fraunces text-xl font-bold text-[#F2B632]">
                  {selected.price}
                </p>
              </div>

              <div>
                <p className="mb-2 text-[11px] sm:text-[12px] uppercase tracking-widest text-gray-500 font-manrope font-normal">
                  Duration
                </p>
                <p className="font-serif text-xl font-bold font-manrope text-[14px]">
                  {selected.duration}
                </p>
              </div>
            </div>

            <button className="mt-8 bg-[#F2B632] w-full sm:w-54.25 h-11.5 font-semibold tracking-normal uppercase text-[#071825] transition hover:bg-white cursor-pointer font-manrope text-sm sm:text-base">
              EXPLORE MORE →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}