import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";

export default function Cta() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/images/tours.png"
        alt="Himalayas"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071825]/80 via-[#071825]/70 to-[#071825]/90" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl">

          {/* Small Tag */}
          <p className="mb-4 text-xs tracking-[0.3em] text-yellow-400 uppercase">
            Fly with confidence
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-light leading-tight text-white md:text-6xl">
            Fly the Himalayas{" "}
            <span className="text-yellow-400 italic font-semibold">
              with Confidence
            </span>
          </h1>

          {/* Sub text */}
          <p className="mt-6 text-sm text-gray-300 md:text-base">
            Choose a helicopter operator committed to safety, professionalism,
            and exceptional service on every mission.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">

            {/* CTA Button */}
            <button className="flex items-center gap-2 bg-yellow-400 px-6 py-3 text-sm font-semibold text-[#071825] transition hover:bg-yellow-500 cursor-pointer">
              Book Your Journey
              <HiArrowRight size={18} />
            </button>

            {/* Contact Button */}
            <button className="flex items-center gap-2 border border-white/30 px-6 py-3 text-sm text-white backdrop-blur-md transition hover:bg-white/10 cursor-pointer">
              <FiPhone size={16} />
              Contact Our Team
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}