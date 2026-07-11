import {
  BadgeDollarSign,
  Clock3,
  CloudSun,
  Plane,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Plane,
    title: "Direct Helicopter Fleet Operator",
    description:
      "Mountain Helicopters Nepal is a licensed helicopter operator in Nepal. You communicate directly with the company operating the aircraft rather than booking through an intermediary, broker or third-party travel agency.",
  },
  {
    icon: ShieldCheck,
    title: "CAAN-Certified Safety Standards",
    description:
      "Our Langtang flights are operated using CAAN-certified Airbus H125 helicopters. Experienced mountain pilots manage changing Himalayan weather, confined valleys and the operational requirements of high-altitude landings.",
  },
  {
    icon: Clock3,
    title: "60–90 Minutes at Kyanjin Gompa",
    description:
      "The itinerary normally provides approximately 60 to 90 minutes at Kyanjin Gompa. This allows time for breakfast, photography, a monastery visit and a short walk through the traditional village without making the experience feel rushed.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent, All-Inclusive Pricing",
    description:
      "Your confirmed package clearly explains the helicopter flight, airport taxes, Nepal Government VAT, Langtang National Park entry permit, Kathmandu airport transfers, safety briefing and basic ground arrangements. There are no unexpected intermediary commissions or hidden operating charges.",
  },
  {
    icon: CloudSun,
    title: "Weather Rescheduling and Refund Options",
    description:
      "When weather or visibility makes the Langtang route unsafe, eligible bookings may be moved to the next suitable morning or refunded according to the confirmed weather-cancellation terms. All departures remain subject to aircraft availability and the pilot’s final safety assessment.",
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
            Five reasons to book your Langtang flight{" "}
            <span className="text-[#e0a321]">directly with us.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-4xl font-manrope text-sm leading-7 text-white/55">
            A traditional Langtang Valley trek normally requires several days
            of walking through remote Himalayan terrain. Our helicopter tour
            reaches Kyanjin Gompa in approximately 25 to 35 minutes, combining
            mountain scenery, Tamang culture, breakfast and high-altitude
            exploration in a single morning.
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

        {/* OPERATIONAL NOTE */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-5 text-center md:px-7">
          <p className="font-manrope text-xs leading-6 text-white/45">
            Flight time, route, landing approval and ground duration remain
            subject to weather, visibility, passenger weight, aircraft
            availability, air-traffic requirements and the pilot&apos;s final
            operational decision.
          </p>
        </div>
      </div>
    </section>
  );
}