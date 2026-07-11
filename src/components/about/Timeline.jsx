const timeline = [
  {
    year: "2009",
    title: "The company is founded",
    desc: "Mountain Helicopters Pvt. Ltd. is registered in Kathmandu and receives its Air Operator Certificate from the Civil Aviation Authority of Nepal.",
  },
  {
    year: "2012",
    title: "Daily Khumbu operations begin",
    desc: "Scheduled Lukla and Everest-region flights become a daily operation. Our pilots begin building the deepest weather knowledge in the sector.",
  },
  {
    year: "2014",
    title: "9N-ALD joins the fleet",
    desc: "Our Airbus AS 350 B3e — the high-altitude workhorse — enters service, certified for operations up to 23,000 ft.",
  },
  {
    year: "2015",
    title: "Earthquake relief flying",
    desc: "Following the April earthquake, our crews fly relief, supply, and evacuation missions to remote villages across central Nepal.",
  },
  {
    year: "2019",
    title: "A decade of operations",
    desc: "Ten years without compromise. In-house maintenance capability expands to full CAAN Cat A & B approval at our Kathmandu base.",
  },
  {
    year: "Today",
    title: "17 years and counting",
    desc: "Daily tours, expedition charter, and 24/7 rescue dispatch — flown by the team that knows these mountains best.",
    today: true,
  },
];

export default function Timeline() {
  return (
    <section className="border-y border-[#E2E8F0] bg-[#F8FAFC] py-24 md:py-32">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
        <header className="mb-16 text-center md:mb-20">
          <span className="mb-4 block font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#F2B632]">
            The Journey
          </span>

          <h2 className="font-fraunces text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]">
            From one aircraft to a Himalayan institution.
          </h2>
        </header>

        <div className="relative space-y-12 before:absolute before:bottom-0 before:left-[19px] before:top-0 before:w-[2px] before:bg-gradient-to-b before:from-[#F2B632] before:to-[#F2B632]/15 md:space-y-0 md:before:left-1/2 md:before:-ml-px">
          {timeline.map((item, index) => {
            const left = index % 2 === 0;

            return (
              <div
                key={item.year}
                className="relative items-center md:mb-16 md:grid md:grid-cols-2 md:gap-16 last:md:mb-0"
              >
                {left ? (
                  <>
                    <TimelineContent item={item} align="right" />
                    <TimelineDot today={item.today} />
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <TimelineContent item={item} align="left" />
                    <TimelineDot today={item.today} />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TimelineContent({ item, align }) {
  return (
    <div
      className={`pl-14 md:pl-0 ${
        align === "right" ? "md:pr-16 md:text-right" : "md:pl-16"
      }`}
    >
      <span
        className={`mb-2 block font-fraunces text-5xl font-semibold tracking-[-0.02em] tabular-nums ${
          item.today ? "text-[#003366]" : "text-[#F2B632]"
        }`}
      >
        {item.year}
      </span>

      <h3 className="mb-2 font-manrope text-xl font-bold text-[#003366]">
        {item.title}
      </h3>

      <p className="font-manrope text-sm leading-relaxed text-[#6B7886]">
        {item.desc}
      </p>
    </div>
  );
}

function TimelineDot({ today }) {
  return (
    <div
      className={`absolute left-[11px] top-2 h-[18px] w-[18px] rounded-full border-4 border-[#F8FAFC] shadow md:left-1/2 md:-ml-[9px] ${
        today ? "animate-pulse bg-[#003366]" : "bg-[#F2B632]"
      }`}
    />
  );
}