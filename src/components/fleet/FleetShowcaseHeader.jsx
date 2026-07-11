const bgImage = "/images/fleet/showcase.jpg";

export default function FleetShowcaseHeader() {
  return (
    <section
      className="relative min-h-[225px] w-full overflow-hidden bg-[#1f5b8b] px-6 py-14 text-white sm:px-8 sm:py-16 lg:px-[58px] lg:py-[74px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.72), rgba(0, 51, 102, 0.72)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center 35%",
      }}
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-14 lg:gap-20">
        <div className="max-w-[470px]">
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className="h-px w-6 bg-[#f5a623]" />
            <span className="font-manrope text-[0.58rem] font-bold uppercase tracking-[0.3em] text-[#f5a623] sm:text-[0.62rem] sm:tracking-[0.35em]">
              Aircraft
            </span>
          </div>

          <h2 className="font-fraunces text-[36px] font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-[42px] md:text-[46px]">
            Complete Fleet
            <br />
            <span className="italic">Showcase</span>
          </h2>
        </div>

        <p className="max-w-[570px] -translate-x-0 font-manrope text-[13px] font-light leading-7 text-white/80 sm:text-[14px] md:-translate-x-10 lg:-translate-x-16">
          Each aircraft was selected for a specific set of Himalayan demands.
          Together they cover every altitude, every passenger requirement, and
          every mission type in our operation.
        </p>
      </div>
    </section>
  );
}