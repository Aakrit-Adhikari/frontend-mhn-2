"use client";

const STATS = [
  { value: "3,105+", label: "Lives Assisted through rescue support" },
  { value: "5", label: "Active Himalayan Rescue Regions" },
  { value: "12 min", label: "Avg. Response coordination Time" },
  { value: "24/7", label: "Emergency Operations readiness" },
];

const GALLERY = [
  {
    image: "/images/home-section/helicopter.jpg",
    caption: "High-altitude landing, Khumbu glacier",
  },
  {
    image: "/images/home-section/rescue.jpg",
    caption: "Search and rescue, Everest region",
  },
  {
    image:"/images/home-section/evacuation.png",
    caption: "Emergency medical evacuation in progress",
  },
];
export default function RescueSection() {
  return (
    <section className="w-full bg-[#03142c] py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-[1fr_1.05fr] xl:items-start">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-9 bg-[#f5a623]" />
              <p className="text-[11px] font-manrope font-semibold uppercase tracking-[0.28em] text-[#f5a623]">
                Rescue Operations
              </p>
            </div>

            <h2 className="font-fraunces text-[44px] font-semibold leading-[0.95] text-[#f5a623] sm:text-[46px] lg:text-[40px]">
              We Answer,
              <br />
              <span className="text-white">When the Mountain Calls</span>
            </h2>

            <div className="mt-10 space-y-8 text-[16px] font-manrope font-light leading-10 text-white/50 sm:text-[18px]">
              <p>
               Mountain Helicopters Nepal also participates in various rescue missions in the high altitude regions of Nepal. 
               Our helicopters are highly skilled and knowledgeable about navigating through the challenging mountains, where time is of the essence.
                <br />
                Through rescuing climbers and expedition teams to performing emergency evacuation, 
                our rescue missions set the safety standards for all our flights. 
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 border border-white/10 max-w-[540px]">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-4 sm:p-5 ${
                    i % 2 === 0 ? "border-r border-white/10" : ""
                  } ${i < 2 ? "border-b border-white/10" : ""}`}
                >
                  <p className="font-fraunces text-[30px] font-semibold leading-none text-[#f5a623] sm:text-[36px]">
                    {stat.value}
                  </p>
                  <p className="font-manrope mt-2 text-[10px] uppercase tracking-[0.16em] text-white/35 sm:text-[11px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-white/10 bg-[#04172f] p-6 sm:p-8">
            <p className="mb-6 text-center text-[11px] font-manrope uppercase tracking-[0.28em] text-white/30">
              Active Rescue Regions - Nepal Himalaya
            </p>

            <div className="aspect-[14/10] w-full overflow-hidden rounded-sm border border-white/10">
              <img
                src="/images/home-section/rescue-map.webp"
                alt="Rescue region map"
                className="h-full w-full object-cover opacity-90"
              />
            </div>

            <div className="mt-7 flex items-center justify-center gap-8 text-[12px] uppercase tracking-[0.14em] text-white/35">
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 rounded-full bg-[#f5a623] font-manrope" />
                Rescue Region
              </span>
              <span className="flex items-center gap-2">
                <span className="h-px w-7 border-t border-dashed border-[#f5a623] font-manrope" />
                Flight Route
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {GALLERY.map((item) => (
            <div
              key={item.caption}
              className="group relative h-[230px] overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.caption}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#03142c] to-transparent" />
              <p className="absolute bottom-4 left-5 right-5 text-[15px] text-white/85">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
