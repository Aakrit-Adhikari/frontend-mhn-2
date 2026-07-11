"use client";

import Link from "next/link";

const tourTabs = [
  { label: "OUR TOURS", href: "/tours" },
  { label: "EVEREST BASE CAMP", href: "/tours/everest-base-camp"},
  { label: "MUKTINATH PILGRIMAGE", href: "/tours/muktinath-pilgrimage" },
  { label: "LANGTANG VALLEY", href: "/tours/langtang-valley",active: true },
  { label: "ANNAPURNA BASE CAMP", href: "/tours/annapurna-base-camp" },
  { label: "GOSAIKUNDA LAKE", href: "/tours/gosaikunda-lake" }, 
];

export default function LangtangValley() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat pt-[75px]"
      style={{
        backgroundImage: "url('/images/langtang-valley/langtang-valley.png')",
      }}
    >
      <div className="absolute inset-0 bg-[#06182c]/55" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 w-full bg-[#0D3D6E]">
        <div className="mx-auto flex min-h-[65px] max-w-[1440px] items-center gap-3 overflow-x-auto px-4 py-[15px] sm:gap-[27px] sm:px-5">
          {tourTabs.map((tab) => (
            <Link
              key={tab.label}
              href={tab.href}
              className={`flex h-[35px] shrink-0 items-center justify-center whitespace-nowrap px-[16px] font-manrope text-[10px] font-semibold uppercase tracking-[1.1px] transition-all duration-300 sm:px-[22px] sm:text-[11px] ${
                tab.active
                  ? "bg-[#f5b82e] text-[#06182c]"
                  : "text-white/80 hover:bg-[#f5b82e] hover:text-[#06182c]"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[560px] py-16 sm:py-20 lg:h-[calc(100vh-168px)] lg:py-0">
        <div className="mx-auto flex h-full max-w-[1250px] items-center px-4 sm:px-5 md:px-8">
          <div className="max-w-[900px]">
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span className="h-px w-8 bg-[#f5b82e] sm:w-10" />
              <p className="font-manrope text-[9px] font-bold uppercase text-[#F2B632] tracking-[2.5px] leading-3.75 sm:text-[10px] sm:tracking-[3.5px]">
                Mountain Helicopters Nepal
              </p>
            </div>

            <h1 className="font-fraunces font-bold leading-[0.95] tracking-[-1.5px] text-[#FFFFFF] text-[42px] sm:text-[68px] md:text-[88px] lg:text-[104px] xl:text-[90.32px] sm:tracking-[-2.83px]">
              Langtang <br />
              Helicopter Tour.
            </h1>

            <p className="mt-6 max-w-[540px] font-manrope text-[17px] font-bold leading-[1.45] text-white sm:mt-7 sm:text-[20px] md:text-[20px] tracking-normal">
              Fly across the beautiful Langtang Himalayas to explore Langtang Valley 
              on a scenic and comfortable Himalayan helicopter journey.

            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-10">
              <Link
                href="/contact"
                className="group relative isolate flex h-[46px] w-full items-center justify-center overflow-hidden bg-[#F2B632] transition sm:w-[157px]"
              >
                <span className="absolute inset-0 translate-x-[-101%] bg-white transition-transform duration-500 group-hover:translate-x-0" />

                <span className="relative z-10 flex items-center gap-2 font-manrope text-[14px] font-bold tracking-[-0.2px] text-[#003366] group-hover:text-[#F2B632]">
                  Plan Your Flight
                </span>
              </Link>

              <Link
                href="/charter"
                className="group relative isolate flex h-[44px] w-full items-center justify-center overflow-hidden border-2 border-white bg-transparent font-manrope text-[15px] font-extrabold uppercase text-white sm:w-[222.5px]"
              >
                <span className="absolute inset-0 translate-x-[-101%] bg-white transition-transform duration-500 group-hover:translate-x-0" />

                <span className="relative z-10 font-manrope text-[14px] font-bold tracking-[-0.2px] uppercase text-white transition-colors duration-300 group-hover:text-[#003366]">
                  Custom Charter
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}