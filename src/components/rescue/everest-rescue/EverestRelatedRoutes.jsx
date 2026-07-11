// src/components/rescue/detail/EverestRelatedRoutes.jsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const rescueRoutes = [
  {
    title: "Kala Patthar Helicopter Rescue",
    meta: "5,545 m · highest ground evacuation point",
    href: "/helicopter-rescue/kala-patthar-helicopter-rescue",
  },
  {
    title: "Gorak Shep Helicopter Rescue",
    meta: "5,140 m · staging point for EBC visits",
    href: "/helicopter-rescue/gorak-shep-helicopter-rescue",
  },
  {
    title: "Namche Bazaar Helicopter Rescue",
    meta: "3,440 m · gateway to Khumbu",
    href: "/helicopter-rescue/namche-bazaar-helicopter-rescue",
  },
  {
    title: "Lukla Helicopter Evacuation",
    meta: "2,860 m · Tenzing-Hillary Airport",
    href: "/helicopter-rescue/lukla-helicopter-evacuation",
  },
  {
    title: "Pheriche Rescue (HRA post)",
    meta: "4,371 m · Himalayan Rescue Association coordination",
    href: "/helicopter-rescue/pheriche-helicopter-rescue",
  },
  {
    title: "Dingboche Helicopter Rescue",
    meta: "4,410 m · Khumbu Valley",
    href: "/helicopter-rescue/dingboche-helicopter-rescue",
  },
];

const alsoSeeLinks = [
  {
    label: "Everest Base Camp Helicopter Tour",
    href: "/tours/everest-base-camp",
  },
  {
    label: "24/7 Rescue Services (all regions)",
    href: "/helicopter-rescue",
  },
  {
    label: "Fleet: AS 350 B3e specifications",
    href: "/fleet",
  },
  {
    label: "Insurance Coordination",
    href: "#insurance",
  },
];

const reasons = [
  {
    title: "Daily Operational Familiarity",
    description:
      "Our aircraft and crews fly the Everest tour route daily during flying season. Pilot knowledge of the corridor is operational, not learned in an emergency.",
  },
  {
    title: "HRA & Everest ER Coordination",
    description:
      "Established coordination with the HRA post at Pheriche and Everest ER at EBC. Insurance-authorized cases dispatch faster with pre-briefed medical handover.",
  },
  {
    title: "Direct Hospital Partnerships",
    description:
      "Direct working relationships with CIWEC Clinic, Grande International Hospital, and Nepal Mediciti—Kathmandu’s tertiary care centres for altitude-related admissions.",
  },
  {
    title: "Zero Hidden Costs",
    description:
      "Cost quoted at dispatch. Complete documentation package delivered within 24–48 hours. No surprise charges. Insurance direct-billing on authorized cases.",
  },
];

function RouteCard({ title, meta, href }) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col border border-[#cfd3d5] bg-white p-5 transition duration-300 hover:border-[#c18a16]"
    >
      <p className="font-manrope text-[8px] font-bold uppercase tracking-[0.2em] text-[#a66e00]">
        Rescue Point
      </p>

      <h3 className="mt-3 font-fraunces text-[19px] font-semibold leading-[1.2] text-[#071825]">
        {title}
      </h3>

      <p className="mt-3 font-manrope text-[10px] leading-[1.65] tracking-[0.03em] text-[#78838c]">
        {meta}
      </p>

      <span className="mt-5 inline-flex w-fit items-center gap-2 font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-[#0d5ea6]">
        Details
        <ArrowRight
          size={13}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}

export default function EverestRelatedRoutes() {
  return (
    <section className="bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]">
      <div className="mx-auto max-w-[1440px]">
        <div>
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — Related Everest Evacuation Routes
          </p>

          <h2 className="mt-4 font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            Other Everest region rescue routes.
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {rescueRoutes.map((route) => (
              <RouteCard key={route.href} {...route} />
            ))}
          </div>

          <div className="mt-8">
            <h3 className="font-manrope text-[9px] font-bold uppercase tracking-[0.2em] text-[#071825]">
              Also See
            </h3>

            <div className="mt-4 flex flex-col items-start gap-2">
              {alsoSeeLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1 font-manrope text-[10px] text-[#0d5ea6] transition hover:text-[#071825]"
                >
                  {link.label}
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 border border-[#cfd2d3] bg-[#f1eee7] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — Why Mountain Helicopters
          </p>

          <h2 className="mt-4 max-w-[1100px] font-fraunces text-[38px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[48px] lg:text-[58px]">
            The operator that flies the Khumbu{" "}
            <span className="italic text-[#9b6b00]">every morning.</span>
          </h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="border border-[#cfd3d5] bg-white px-5 py-5 sm:px-6"
              >
                <h3 className="font-manrope text-[9px] font-bold uppercase tracking-[0.2em] text-[#a66e00]">
                  {reason.title}
                </h3>

                <p className="mt-4 font-manrope text-[10px] leading-[1.75] text-[#53606a]">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}