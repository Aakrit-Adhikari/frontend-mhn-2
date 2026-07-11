import {
  BadgeDollarSign,
  CloudSun,
  Plane,
  Route,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Route,
    title: "Pilgrimage Without the Long Trek",
    description:
      "The traditional Annapurna Circuit journey to Muktinath requires several days or weeks of demanding trekking and road travel. Our helicopter tour reaches the sacred temple within a few hours while still providing panoramic views of the Annapurna, Dhaulagiri, Nilgiri and Mustang regions.",
  },
  {
    icon: Plane,
    title: "Direct Helicopter Fleet Operator",
    description:
      "Mountain Helicopters Nepal is a direct aviation operator. You communicate with the company operating the aircraft rather than booking through an intermediary, broker or third-party travel agency.",
  },
  {
    icon: ShieldCheck,
    title: "CAAN-Certified Safety Standards",
    description:
      "Flights are operated using Airbus H125 helicopters under applicable Civil Aviation Authority of Nepal requirements. Our mountain pilots are trained and experienced in high-altitude Himalayan operations and challenging Mustang terrain.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Total Pricing",
    description:
      "Our confirmed package clearly explains the helicopter flight, applicable ACAP permit, domestic airport taxes, Nepal Government VAT and other included services. You receive a clear total price without unexpected intermediary commissions or hidden operating charges.",
  },
  {
    icon: CloudSun,
    title: "Weather-Flexible Rescheduling",
    description:
      "When weather or visibility makes the Muktinath route unsafe, eligible bookings can be moved to the next suitable departure or handled according to the confirmed weather-cancellation and refund terms.",
  },
];

export default function WhyBookWithUs() {
  return (
    <section className="bg-[#071a2c] px-5 py-16 md:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.24em] text-[#e0a321]">
            <span className="h-px w-7 bg-[#e0a321]" />
            Why Book With Mountain Helicopters Nepal
          </p>

          <h2 className="mt-5 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-4xl lg:text-5xl">
            Five reasons to book{" "}
            <span className="text-[#e0a321]">directly with us.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-4xl font-manrope text-sm leading-7 text-white/55">
            If you want to combine pilgrimage, adventure and comfort then
            Muktinath Helicopter Tour by Mountain Helicopters Nepal is the
            perfect option for you. Traditional Annapurna Circuit Trek for years
            leads to the temple and it requires weeks of strenuous trekking. In
            comparison the Helicopter tour takes the pilgrim to the temple
            within a few hours. This helicopter journey combines tour and trek,
            thereby offering the visitors the scenic flight experience over the
            entire mountain range and holy pilgrimage to one of the holiest
            temples.
          </p>
        </div>

        {/* REASON CARDS */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className={`group rounded-[24px] bg-white px-6 py-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(0,0,0,0.22)] md:px-8 md:py-8 ${
                  index === reasons.length - 1
                    ? "lg:col-span-2 lg:mx-auto lg:w-[calc(50%-10px)]"
                    : ""
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#07325f] text-[#f0b323] transition-all duration-500 group-hover:rotate-3 group-hover:bg-[#f0b323] group-hover:text-[#07325f]">
                  <Icon size={21} strokeWidth={2} />
                </div>

                <h3 className="mt-6 font-fraunces text-xl font-semibold text-[#08294d] transition-colors duration-300 group-hover:text-[#d99a1b]">
                  {reason.title}
                </h3>

                <p className="mt-3 max-w-xl font-manrope text-sm leading-7 text-slate-500">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
