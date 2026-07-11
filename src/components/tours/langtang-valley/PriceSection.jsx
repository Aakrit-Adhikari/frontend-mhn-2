"use client";

const plans = [
  {
    title: "Shared Seat",
    subtitle: "Join a scheduled early-morning Langtang departure",
    price: "$1,100",
    unit: "per person",
    button: "Book Shared Seat",
    href: "/contact",
    featured: false,
    features: [
      "Round-trip Airbus H125 helicopter flight",
      "Hotel pickup and drop-off in Kathmandu",
      "Airport assistance and safety briefing",
      "Langtang National Park entry permit",
      "Landing at Kyanjin Gompa at 3,870m",
      "60–90 minutes of ground time",
      "Breakfast at a local Kyanjin teahouse",
      "Emergency oxygen and first-aid kit onboard",
    ],
  },
  {
    title: "Private Charter",
    subtitle: "The entire helicopter, reserved for your group",
    price: "$5,800",
    unit: "per helicopter",
    button: "Charter the Helicopter",
    href: "/charter",
    featured: true,
    features: [
      "Everything included with a shared seat",
      "Private Airbus H125 for your group",
      "Flexible departure time where possible",
      "Dedicated ground operations coordinator",
      "Up to 60–90 minutes at Kyanjin Gompa",
      "Private breakfast experience in Kyanjin",
      "Up to 5 passengers in the full aircraft",
      "Priority weather rescheduling assistance",
    ],
  },
];

function PriceCard({ plan }) {
  return (
    <div
      className={`group relative h-auto min-h-[620px] w-full overflow-visible border bg-white px-8 py-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(0,51,102,0.16)] md:w-[414px] ${
        plan.featured
          ? "border-[#F2B632] hover:border-[#003366]"
          : "border-[#e1e8ef] hover:border-[#F2B632]"
      }`}
    >
      {/* HOVER TOP LINE */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[#F2B632] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* HOVER GLOW */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#F2B632]/10 opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-100" />

      {/* FEATURED BADGE */}
      {plan.featured && (
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-[#F2B632] px-8 py-[11px] font-manrope text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#003366] transition-all duration-500 group-hover:bg-[#003366] group-hover:text-white">
          Most Exclusive
        </div>
      )}

      {/* PLAN TITLE */}
      <h3
        className={`relative z-10 font-fraunces text-[27px] font-semibold leading-none transition-all duration-500 group-hover:translate-x-1 ${
          plan.featured ? "text-[#F2B632]" : "text-[#003366]"
        }`}
      >
        {plan.title}
      </h3>

      {/* SUBTITLE */}
      <p
        className={`relative z-10 mt-3 font-manrope text-[13px] leading-5 transition-colors duration-500 ${
          plan.featured ? "text-[#7b8795]" : "text-[#F2B632]"
        }`}
      >
        {plan.subtitle}
      </p>

      {/* PRICE */}
      <div className="relative z-10 mt-7 flex flex-wrap items-end gap-3">
        <span className="mb-[7px] font-manrope text-[11px] font-bold uppercase tracking-[0.12em] text-[#7b8795]">
          From
        </span>

        <span className="font-fraunces text-[44px] font-semibold leading-none tracking-[-0.04em] text-[#003366] transition-all duration-500 group-hover:text-[#F2B632]">
          {plan.price}
        </span>

        <span className="mb-[7px] font-manrope text-[12px] text-[#7b8795]">
          {plan.unit}
        </span>
      </div>

      {/* DIVIDER */}
      <div className="relative z-10 mt-7 h-px w-full bg-[#e8edf2] transition-colors duration-500 group-hover:bg-[#F2B632]/40" />

      {/* FEATURES */}
      <ul className="relative z-10 mt-6 space-y-[15px] pb-20">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex gap-3 font-manrope text-[13px] leading-[1.45] text-[#6f7c8d]"
          >
            <span className="mt-[1px] text-[14px] font-bold text-[#F2B632] transition-transform duration-300 group-hover:scale-125">
              ✓
            </span>

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <a
        href={plan.href}
        className={`absolute bottom-8 left-8 right-8 z-10 flex h-[52px] items-center justify-center font-manrope text-[11px] font-extrabold uppercase tracking-[0.18em] transition-all duration-300 ${
          plan.featured
            ? "bg-[#F2B632] text-[#003366] hover:bg-[#003366] hover:text-white"
            : "border border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white"
        }`}
      >
        {plan.button}

        {plan.featured && (
          <span className="ml-2 text-[16px] transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        )}
      </a>
    </div>
  );
}

export default function PriceSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-36 bg-[#f4f8fc] px-5 py-[88px] sm:px-6"
    >
      <div className="mx-auto max-w-[896px]">
        {/* SECTION HEADING */}
        <div className="text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-5 bg-[#F2B632]" />

            <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.42em] text-[#F2B632]">
              Fares
            </p>
          </div>

          <h2 className="font-fraunces text-[40px] font-semibold leading-none tracking-[-0.03em] text-[#003366] md:text-[52px]">
            Two ways to fly Langtang Valley
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-manrope text-[14px] leading-[1.7] text-[#7b8795]">
            Join a shared Langtang helicopter departure or reserve the full
            aircraft for a private journey to Kyanjin Gompa.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="mt-14 grid gap-[32px] md:grid-cols-2 md:gap-[20px]">
          {plans.map((plan) => (
            <PriceCard key={plan.title} plan={plan} />
          ))}
        </div>

        {/* EXCLUSION NOTE */}
        <p className="mt-8 text-center font-manrope text-[12px] leading-6 text-[#7b8795]">
          Fares exclude: Personal travel insurance · Emergency evacuation
          insurance · Personal expenses · Gratuities
        </p>

        {/* OPERATIONAL NOTE */}
        <p className="mx-auto mt-3 max-w-3xl text-center font-manrope text-[11px] leading-5 text-[#9aa4af]">
          Final fares may vary according to passenger count, aircraft
          availability, weather conditions, fuel requirements and confirmed
          ground time.
        </p>
      </div>
    </section>
  );
}