import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#071825]">
      
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5 text-center text-white md:px-10">
        <div className="max-w-6xl pt-24">
          <h1 className="font-fraunces tracking-[-2.6px] text-[40px] font-bold leading-[0.95] sm:text-6xl md:text-7xl lg:text-[75px]">
            Above Everest,{" "}
            <span className="text-[#f5b82e]">Beyond Ordinary</span>
          </h1>

          <p className="font-manrope font-medium tracking-normal mx-auto mt-6 max-2xl text-[18.6px] leading-6 text-white/90 sm:text-sm md:text-base">
            Enjoy Nepal’s finest helicopter tours in Nepal by Mountain Helicopters Nepal from high mountain landings to helicopter overflight of Everest to specially designed private chartered tours that are centered on safety, luxury and astounding views of the majestic Himalayan  mountains.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-9 sm:flex-row">
            <Link
              href="/contact"
              className="group relative isolate flex min-w-37.5 items-center justify-center overflow-hidden bg-[#f5b82e] w-40.25 h-11.5 text-[15px] font-bold uppercase text-[#071825]"
            >
              <span className="absolute inset-0 translate-x-[-101%] bg-white transition-transform duration-500 group-hover:translate-x-0" />

              <span className="relative z-10 flex items-center gap-2 font-manrope font-bold text-[16px] tracking-[-0.01em] text-[#003366]">
                Inquiry Now
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>

            <Link
              href="/experiences"
              className="group relative isolate flex min-w-42.5 items-center justify-center overflow-hidden border border-white bg-transparent w-[222.5px] h-11.5 text-[15px] font-bold uppercase text-[#ffffff]">
              <span className="absolute inset-0 translate-x-[-101%] bg-white transition-transform duration-500 group-hover:translate-x-0" />

              <span className=" font-manrope font-bold text-[16px] tracking-[-0.01em] relative z-10 transition-colors duration-300 group-hover:text-[#003366]">
                Find Your Experience
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}