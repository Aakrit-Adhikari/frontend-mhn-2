export default function FleetIntro() {
  return (
    <section className="bg-[#001b30] px-6 py-10 text-white lg:px-20">
      <div className="mx-auto max-w-[1280px] bg-[#0a1d2c] px-6 py-[30px] md:px-10 lg:px-[125px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-5 bg-[#f5a623]" />
              <span className="font-manrope text-[0.62rem] font-bold uppercase tracking-[0.35em] text-[#f5a623]">
                The Fleet
              </span>
            </div>

            <h2 className="font-fraunces text-[42px] font-medium leading-[1.05] tracking-[-0.04em] text-white md:text-[52px]">
              Built for the
              <br />
              <span className="italic text-white/35">Himalayas</span>
            </h2>
          </div>

          <div className="max-w-[560px] font-manrope text-[15px] font-light leading-8 text-white/45 lg:pt-2">
            <p>
              Our helicopters at Mountain Helicopters Nepal are designed specifically for the mountain region.
              Flights in Nepal are not similar to those in any other part of the world, as there are drastic climatic changes in Nepal, and landing spots can be very remote.
              This is the reason why our company offers Airbus H125 helicopters, which are well known for their great performance in high altitudes.
            </p>

            <p className="mt-6">
              Our helicopters provide scenic helicopter tours, private charters, pilgrimage flight services, rescue services, photo and film shoots, and logistic services to the mountains.
              No matter if you are flying to the region of Everest, Langtang, Annapurna, Muktinath, Gosaikunda, or a remote village of Nepal, we have the helicopters ready for your journey in minimum time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}