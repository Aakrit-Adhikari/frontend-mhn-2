import { CloudRain, PlaneLanding, UserRoundX } from "lucide-react";

const weatherOptions = [
  {
    title: "Full Refund",
    description:
      "Receive a 100% refund of the eligible tour-package payment when the operator cancels the flight because of unsafe weather conditions.",
  },
  {
    title: "Free Reschedule",
    description:
      "Move your booking to the next suitable morning without a weather-related rescheduling charge, subject to aircraft availability and your Nepal itinerary.",
  },
];

const pilotOptions = [
  {
    title: "Continue as an Aerial Tour",
    description:
      "When landing is unsafe but the approved flight corridor remains suitable, the pilot may provide an aerial tour over Langtang Valley, glaciers and surrounding Himalayan peaks without landing at Kyanjin Gompa.",
  },
  {
    title: "Use a Lower-Altitude Landing",
    description:
      "When operationally safe and officially permitted, the pilot may select a lower-altitude landing area such as Chandanbari at approximately 3,030 metres or Syabrubesi at approximately 1,460 metres.",
  },
  {
    title: "Return to Kathmandu",
    description:
      "If cloud, wind or visibility affects the wider Langtang region, the helicopter may return directly to Kathmandu without completing the planned landing.",
  },
  {
    title: "Partial Refund for a Diverted Flight",
    description:
      "When the Kyanjin Gompa landing cannot be completed after departure, any applicable refund is calculated after deducting flying time, fuel, airport charges, permits and alternative services already provided.",
  },
];

const passengerCancellationRules = [
  {
    period: ">72H",
    description:
      "Cancellations made more than 72 hours before departure receive a full refund, less a USD 50 administrative fee per person. This fee covers permit preparation, airport flight-slot arrangements and booking administration.",
    accent: "border-[#d4dae2]",
    periodClass: "text-[#0a4f82]",
  },
  {
    period: "24–48H",
    description:
      "Cancellations submitted between 24 and 48 hours before departure are eligible for a 75% refund of the amount paid.",
    accent: "border-[#d5a023]",
    periodClass: "text-[#a6770c]",
  },
  {
    period: "<24H",
    description:
      "Cancellations made less than 24 hours before departure and passenger no-shows are eligible for a 50% refund. Aircraft payload, fuel planning and operational slots may already have been confirmed.",
    accent: "border-[#d92626]",
    periodClass: "text-[#c71919]",
  },
];

export default function CancellationPolicy() {
  return (
    <section className="bg-white px-5 py-16 md:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="border-l-4 border-[#f0b323] pl-5 md:pl-6">
          <h2 className="font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#171717] md:text-4xl">
            Cancellation, Weather and Refund Policies
          </h2>

          <p className="mt-3 max-w-5xl font-manrope text-sm leading-7 text-[#4f5965] md:text-base">
            High-Himalayan aviation can be affected by rapidly changing and
            unpredictable weather. Mountain Helicopters Nepal places passenger
            safety first and applies transparent policies so guests understand
            their rescheduling and refund options before departure.
          </p>
        </div>

        {/* POLICY CARDS */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {/* WEATHER CANCELLATION */}
          <article className="bg-white">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#0a6db7] text-white">
              <CloudRain size={20} strokeWidth={1.8} />
            </div>

            <h3 className="mt-6 font-fraunces text-2xl font-semibold text-[#00569a]">
              Weather-Related Cancellation
            </h3>

            <p className="mt-5 font-manrope text-sm leading-7 text-[#4f5965]">
              A flight may be cancelled at short notice when visibility becomes
              poor, clouds form along the Trishuli River corridor, strong winds
              develop near Kyanjin Gompa, or other conditions make the route
              unsafe.
            </p>

            <p className="mt-4 font-manrope text-sm leading-7 text-[#4f5965]">
              The Chief Pilot makes the final operational assessment in
              accordance with applicable Civil Aviation Authority of Nepal
              requirements. When the operator cancels the flight for safety
              reasons, passengers may select one of the following options:
            </p>

            <div className="mt-5 space-y-4">
              {weatherOptions.map((option) => (
                <div
                  key={option.title}
                  className="border-l-2 border-[#0a6db7] pl-4"
                >
                  <h4 className="font-manrope text-xs font-bold uppercase tracking-[0.1em] text-[#00569a]">
                    {option.title}
                  </h4>

                  <p className="mt-2 font-manrope text-sm leading-6 text-[#4f5965]">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 font-manrope text-xs leading-6 text-[#7a8490]">
              The operations team will make reasonable efforts to match the new
              departure with your remaining travel schedule and available
              aircraft.
            </p>
          </article>

          {/* PILOT DECISION */}
          <article className="bg-white">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#f3b52e] text-[#6f5200]">
              <PlaneLanding size={20} strokeWidth={2} />
            </div>

            <h3 className="mt-6 font-fraunces text-2xl font-semibold text-[#8a6400]">
              In-Flight Adjustments and Pilot Discretion
            </h3>

            <p className="mt-5 font-manrope text-sm leading-7 text-[#4f5965]">
              Mountain weather can change quickly after departure. The pilot
              retains final authority over the route, landing location, ground
              time and continuation of the flight when a landing at Kyanjin
              Gompa at 3,870 metres becomes unsafe.
            </p>

            <div className="mt-5 space-y-4">
              {pilotOptions.map((option) => (
                <div
                  key={option.title}
                  className="border-l-2 border-[#d5a023] pl-4"
                >
                  <h4 className="font-manrope text-xs font-bold uppercase tracking-[0.08em] text-[#8a6400]">
                    {option.title}
                  </h4>

                  <p className="mt-2 font-manrope text-sm leading-6 text-[#4f5965]">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 font-manrope text-xs leading-6 text-[#7a8490]">
              Passengers and ground staff cannot override a safety decision
              made by the pilot.
            </p>
          </article>

          {/* PASSENGER CANCELLATION */}
          <article className="bg-white">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#ffd8d8] text-[#bd0000]">
              <UserRoundX size={20} strokeWidth={2} />
            </div>

            <h3 className="mt-6 font-fraunces text-2xl font-semibold text-[#cc1111]">
              Cancellations by Passengers
            </h3>

            <p className="mt-5 font-manrope text-sm leading-7 text-[#4f5965]">
              Passenger refunds are calculated according to how much notice is
              provided to the Mountain Helicopters Nepal operations team before
              the scheduled departure.
            </p>

            <div className="mt-5 space-y-5">
              {passengerCancellationRules.map((rule) => (
                <div
                  key={rule.period}
                  className={`grid grid-cols-[52px_1fr] gap-3 border-l-2 pl-3 ${rule.accent}`}
                >
                  <span
                    className={`pt-1 font-manrope text-xs font-bold uppercase tracking-[0.06em] ${rule.periodClass}`}
                  >
                    {rule.period}
                  </span>

                  <p className="font-manrope text-sm leading-6 text-[#4f5965]">
                    {rule.description}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* IMPORTANT NOTE */}
        <div className="mt-10 rounded-2xl border border-[#e7d5a8] bg-[#fffaf0] px-5 py-5 md:px-7">
          <p className="font-manrope text-xs leading-6 text-[#6f6245]">
            The cancellation period between 48 and 72 hours should be confirmed
            in the final booking agreement. All refunds are calculated according
            to the confirmed package and services already used. Bank charges,
            payment-gateway fees, currency-conversion differences, permit costs
            and non-refundable third-party expenses may be deducted where
            applicable.
          </p>
        </div>
      </div>
    </section>
  );
}