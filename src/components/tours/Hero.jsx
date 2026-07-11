"use client";

export default function Hero() {
  return (
    <main>
      <section className="relative min-h-screen w-full overflow-hidden bg-[#06182c]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/tour-section/tours.webp')" }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,15,31,0.72)_0%,rgba(2,15,31,0.42)_48%,rgba(2,15,31,0.25)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,15,31,0.10)_0%,rgba(2,15,31,0.20)_55%,rgba(2,15,31,0.82)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1240px] items-center px-6 pt-10 sm:px-10 lg:px-0">
          <div className="-mt-4 max-w-[590px] lg:-mt-2">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-7 bg-[#f5a623]" />
              <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.34em] text-[#f5a623]">
                Mountain Helicopters Nepal
              </p>
            </div>

            <h1 className="font-fraunces text-[clamp(4.7rem,6.6vw,5.1rem)] font-semibold leading-[0.9] tracking-[-0.035em] text-white">
              The Himalaya,
              <br />
              by helicopter.
            </h1>

            <p className="mt-6 max-w-[500px] font-manrope text-[16px] font-semibold leading-[1.65] text-white">
              Explore Nepal from a perspective few will ever know.
              <br />
              Curated helicopter journeys from Everest Base Camp
              <br />
              to sacred Himalayan destinations.
            </p>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row">
              <a
                href="#experiences"
                className="group relative isolate flex h-[46px] w-[157px] items-center justify-center overflow-hidden bg-[#f5a623] font-manrope text-[14px] font-bold uppercase text-[#003366] transition-colors duration-300"
              >
                <span className="absolute inset-0 z-0 -translate-x-[101%] bg-white transition-transform duration-500 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#F2B632]">Explore Journeys</span>
              </a>

              <a
                href="/contact"
                className="group relative isolate flex h-[46px] w-[220px] items-center justify-center gap-[5px] overflow-hidden border-2 border-white bg-transparent px-6 py-2 font-manrope text-[14px] font-bold uppercase text-white transition-colors duration-300"
              >
                <span className="absolute inset-0 z-0 -translate-x-[101%] bg-white transition-transform duration-500 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#003366]">
                  Custom Charter
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}