import {
  CloudRain,
  PlaneLanding,
  UserRoundX,
} from "lucide-react";

const passengerCancellationRules = [
  {
    period: ">30D",
    description:
      "Cancellations made more than 30 days before departure receive a full refund, less a USD 50 administrative fee per person to cover booking and processing costs.",
    accent: "border-[#d4dae2]",
    periodClass: "text-[#0a4f82]",
  },
  {
    period: "7–30D",
    description:
      "Cancellations made between 7 and 30 days before departure are eligible for a 75% refund of the amount paid.",
    accent: "border-[#d5a023]",
    periodClass: "text-[#a6770c]",
  },
  {
    period: "<7D",
    description:
      "Cancellations made less than 7 days before departure and passenger no-shows incur a 50% cancellation charge.",
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
            Weather conditions in Nepal&apos;s mountain regions can change
            rapidly. The following policy explains what happens when a
            Muktinath helicopter flight is cancelled, rescheduled, diverted or
            changed for operational and safety reasons.
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
              Weather Cancellation
            </h3>

            <p className="mt-5 font-manrope text-sm leading-7 text-[#4f5965]">
              Our operations team reviews the latest weather information at
              approximately 4:00 AM on the day of departure. Guests are normally
              informed of the flight status through WhatsApp or Viber by around
              5:00 AM.
            </p>

            <p className="mt-4 font-manrope text-sm leading-7 text-[#4f5965]">
              If the flight is cancelled because of poor visibility, rain,
              strong wind, cloud cover or unsafe conditions in Kathmandu,
              Pokhara, along the Annapurna crossing or at Muktinath, passengers
              may choose one of the following options:
            </p>

            <ul className="mt-4 space-y-2 pl-5 font-manrope text-sm leading-6 text-[#4f5965]">
              <li className="list-disc">
                Reschedule the flight for the next suitable morning without a
                weather-related change fee.
              </li>

              <li className="list-disc">
                Request a full refund of the eligible booking amount when
                rescheduling is not possible during the Nepal trip.
              </li>
            </ul>
          </article>

          {/* PILOT DECISION */}
          <article className="bg-white">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#f3b52e] text-[#6f5200]">
              <PlaneLanding size={20} strokeWidth={2} />
            </div>

            <h3 className="mt-6 font-fraunces text-2xl font-semibold text-[#8a6400]">
              Pilot&apos;s Decision Over Safety
            </h3>

            <p className="mt-5 font-manrope text-sm leading-7 text-[#4f5965]">
              The pilot has final authority over departure, routing, landing,
              ground time and continuation of the flight. If conditions are
              unsuitable for a safe landing at the Muktinath helipad, the pilot
              may delay the departure, shorten the temple visit, return to
              Kathmandu or Pokhara, or land at another safe and permitted
              location such as Jomsom when operationally appropriate.
            </p>

            <p className="mt-4 font-manrope text-sm leading-7 text-[#4f5965]">
              When part of the journey has already been completed, any
              applicable refund will be calculated after deducting the flying
              time, fuel, landing fees and services already used. Safety
              decisions made by the pilot cannot be overridden by passengers or
              ground staff.
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

            <div className="mt-5 space-y-4">
              {passengerCancellationRules.map((rule) => (
                <div
                  key={rule.period}
                  className={`grid grid-cols-[44px_1fr] gap-3 border-l-2 pl-3 ${rule.accent}`}
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
            All refunds are calculated according to the final booking agreement
            and the services already used. Bank charges, payment gateway fees,
            currency conversion differences and non-refundable third-party
            expenses may be deducted where applicable.
          </p>
        </div>
      </div>
    </section>
  );
}