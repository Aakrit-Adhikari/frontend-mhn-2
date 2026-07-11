const heroImage = "/images/fleet/home.jpg";

export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#071825] text-white">
      <img
        src={heroImage}
        alt="Mountain Helicopters fleet flying over the Himalayas"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#062033]/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#031827]/70 via-[#031827]/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center px-6 pt-20 lg:px-20">
        <div className="max-w-[650px]">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-8 bg-[#f5a623]" />
            <span className="font-manrope text-[0.68rem] font-bold uppercase tracking-[0.35em] text-[#f5a623]">
              Mountain Helicopters Nepal
            </span>
          </div>

          <h1 className="mb-6 font-fraunces text-[72px] font-bold leading-[0.9] tracking-[-0.04em] text-white sm:text-[88px] md:text-[104px]">
            Our
            <br />
            <span className="text-[#f5b82e]">Fleet.</span>
          </h1>

          <p className="mb-7 max-w-[560px] font-manrope text-[18px] font-medium leading-relaxed text-white">
            Built for the Himalayas. Trusted for every mission.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#fleet"
              className="inline-flex h-[42px] min-w-[140px] items-center justify-center bg-[#f5b82e] px-7 font-manrope text-[13px] font-bold text-[#071825] transition-all duration-300 hover:bg-white"
            >
              Explore Fleet
            </a>

            <a
              href="/contact"
              className="inline-flex h-[42px] min-w-[180px] items-center justify-center border border-white px-7 font-manrope text-[13px] font-bold uppercase text-white transition-all duration-300 hover:border-[#f5b82e] hover:bg-[#f5b82e] hover:text-[#071825]"
            >
              Charter Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}