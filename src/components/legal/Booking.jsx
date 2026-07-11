"use client";

import { useEffect, useRef, useState } from "react";

const listClass =
  "mb-7 ml-1 list-disc space-y-3 pl-7 marker:text-[#B8860B] marker:font-bold [&>li]:pl-2 [&>li]:text-[17px] [&>li]:leading-[1.75]";

const orderedListClass =
  "mb-7 ml-1 list-decimal space-y-3 pl-7 marker:text-[#B8860B] marker:font-bold [&>li]:pl-2 [&>li]:text-[17px] [&>li]:leading-[1.75]";

const legalDocs = [
  { label: "Privacy Policy", href: "/legal/privacy", number: "01" },
  { label: "Terms & Conditions", href: "/legal/terms", number: "02" },
  { label: "Cancellation Policy", href: "/legal/cancellation", number: "03" },
  { label: "Refund Policy", href: "/legal/refund", number: "04" },
  {
    label: "Booking Conditions",
    href: "/legal/booking",
    number: "05",
    active: true,
  },
  { label: "Cookie Policy", href: "/legal/cookie", number: "06" },
];

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

function ContactCard() {
  return (
    <div className="relative mt-10 overflow-hidden rounded-xl bg-gradient-to-br from-[#001A33] to-[#003366] px-7 py-8 text-white shadow-[0_12px_40px_rgba(0,51,102,0.15)] sm:px-11 sm:py-12">
      <div className="absolute left-0 top-0 h-1 w-[60px] bg-gradient-to-r from-[#B8860B] to-[#F2B632]" />

      <p className="mb-5 font-manrope text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#f5a623]">
        Contact Us
      </p>

      <div className="mb-6 flex flex-col gap-2">
        <a
          href="tel:+9779712082949"
          className="font-manrope text-[0.88rem] text-white/70 transition hover:text-[#f5a623]"
        >
          +977-9712082949
        </a>

        <a
          href="tel:014111051"
          className="font-manrope text-[0.88rem] text-white/70 transition hover:text-[#f5a623]"
        >
          014111051/51
        </a>

        <a
          href="tel:014111031"
          className="font-manrope text-[0.88rem] text-white/70 transition hover:text-[#f5a623]"
        >
          014111031/32
        </a>

        <a
          href="mailto:enquiry@mountainhelicoptersnepal.com"
          className="font-manrope text-[0.88rem] text-white/70 transition hover:text-[#f5a623]"
        >
          enquiry@mountainhelicoptersnepal.com
        </a>
      </div>

      <p className="mb-3 font-manrope text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#f5a623]">
        Visit Us
      </p>

      <div className="font-manrope text-[0.88rem] leading-[1.75] text-white/70">
        Old Sinamangal · Pepsicola
        <br />
        Kathmandu, Bagmati
        <br />
        P.O. Box 20320, Nepal
      </div>

      <a
        href="https://maps.app.goo.gl/tUSRcRCpKZbjaM1B9"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-1 font-manrope text-[0.85rem] text-[#4db8cc] transition hover:text-[#f5a623]"
      >
        <PinIcon /> Get Direction ›
      </a>
    </div>
  );
}

const sections = [
  {
    id: "types",
    number: "Section 01",
    title: "Types of Bookings",
    content: (
      <>
        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          1.1 Per-Seat Tour Bookings
        </h3>

        <p>
          Individual seats on a shared helicopter flight. Aircraft seats up to 5
          passengers plus the pilot. Minimum passenger requirements may apply to
          operate shared flights. If the minimum is not met, Mountain Helicopters
          Nepal may reschedule or offer available alternatives.
        </p>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          1.2 Private Charter
        </h3>

        <p>
          A private charter gives your group the full helicopter. There is no
          shared-seat passenger requirement. Maximum passengers depend on
          aircraft type, route, altitude, weather, and weight balance.
        </p>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          1.3 Special Services
        </h3>

        <p>
          Aerial photography, filming, medical evacuation support, corporate
          events, wedding pre-shoots, and similar specialized services are
          arranged through a separate inquiry and charter contract process.
        </p>
      </>
    ),
  },
  {
    id: "eligibility-detail",
    number: "Section 02",
    title: "Passenger Eligibility",
    content: (
      <>
        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          2.1 Age
        </h3>

        <ul className={listClass}>
          <li>
            <strong>Adults:</strong> Full ticket and individual seat required.
          </li>
          <li>
            <strong>Children:</strong> Must be accompanied by a parent or legal
            guardian and may count as a passenger for weight balance.
          </li>
          <li>
            <strong>Infants:</strong> Generally not recommended for
            high-altitude helicopter tours due to altitude, pressure, and noise.
          </li>
        </ul>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          2.2 Weight Limits
        </h3>

        <p>For aircraft safety, we operate strict weight limits:</p>

        <ul className={listClass}>
          <li>
            <strong>Total passenger weight:</strong> Depends on aircraft type,
            altitude, fuel load, and weather conditions.
          </li>
          <li>
            <strong>Individual passenger weight:</strong> Must be declared
            accurately during booking.
          </li>
          <li>
            Passengers with higher body weight must inform us at booking so that
            aircraft balance and seat planning can be checked.
          </li>
        </ul>

        <div className="my-9 border-l-[3px] border-[#B45309] bg-gradient-to-br from-[#FEF5E7] to-[#FCE7B6] px-8 py-7 font-fraunces text-[18px] italic leading-[1.7] text-[#0A1929]">
          <span className="mb-3 block font-manrope text-[10px] font-bold uppercase tracking-[2px] text-[#B45309] not-italic">
            Honesty Matters
          </span>
          Misrepresenting weight is a serious safety issue. We reserve the right
          to weigh passengers at check-in. If actual weight materially differs
          from declared weight, we may refuse boarding without refund.
        </div>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          2.3 Medical Conditions
        </h3>

        <p>
          Helicopter tours may involve rapid altitude gain. Please consult your
          physician before booking if you have:
        </p>

        <ul className={listClass}>
          <li>Heart conditions or recent cardiac events.</li>
          <li>Severe respiratory conditions such as COPD or severe asthma.</li>
          <li>Uncontrolled high blood pressure.</li>
          <li>Recent surgery.</li>
          <li>Pregnancy after the second trimester.</li>
          <li>Severe motion sickness history.</li>
          <li>Inner ear conditions affecting balance.</li>
        </ul>

        <p>
          We may request a medical clearance certificate for high-risk
          conditions. The Pilot in Command has discretion to refuse boarding to
          any passenger appearing medically unfit to fly.
        </p>
      </>
    ),
  },
  {
    id: "confirmation",
    number: "Section 03",
    title: "Booking Confirmation Process",
    content: (
      <>
        <ol className={orderedListClass}>
          <li>
            <strong>Submit booking request</strong> through website, WhatsApp,
            email, phone, or an approved booking partner.
          </li>
          <li>
            <strong>Receive provisional confirmation</strong> from our bookings
            team.
          </li>
          <li>
            <strong>Complete payment</strong> either full payment or required
            deposit.
          </li>
          <li>
            <strong>Receive official booking confirmation</strong> with booking
            reference, flight details, reporting time, and checklist.
          </li>
          <li>
            <strong>Submit passenger details</strong> including names, weights,
            ID details, and emergency contacts when requested.
          </li>
          <li>
            <strong>Receive pre-flight communication</strong> before the flight
            with weather update and final logistics.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "payment-detail",
    number: "Section 04",
    title: "Payment Terms",
    content: (
      <>
        <ul className={listClass}>
          <li>
            <strong>Per-seat bookings:</strong> Full payment may be required at
            the time of booking.
          </li>
          <li>
            <strong>Charter bookings:</strong> Deposit may be required to secure
            the aircraft, with balance due before flight operation.
          </li>
          <li>
            <strong>Last-minute bookings:</strong> Full payment may be required
            before confirmation.
          </li>
          <li>
            <strong>Corporate accounts:</strong> Payment terms may follow a
            separate written agreement.
          </li>
        </ul>

        <p>
          Your booking is confirmed only after payment requirements are met and
          Mountain Helicopters Nepal issues written confirmation.
        </p>
      </>
    ),
  },
  {
    id: "pickup",
    number: "Section 05",
    title: "Hotel Pickup and Check-In",
    content: (
      <>
        <p>
          Hotel pickup may be available depending on your hotel location, booking
          type, and tour package. Pickup times depend on flight schedule, weather,
          airport reporting requirements, and route.
        </p>

        <ul className={listClass}>
          <li>
            Be ready in the hotel lobby at the confirmed pickup time.
          </li>
          <li>
            Carry your passport or valid identification.
          </li>
          <li>
            Wear comfortable clothing suitable for early morning and
            high-altitude conditions.
          </li>
          <li>
            Bring sunglasses, personal medication, and only a small day bag.
          </li>
        </ul>

        <p>
          Exact pickup time is usually confirmed by call, SMS, or WhatsApp before
          your flight.
        </p>
      </>
    ),
  },
  {
    id: "what-to-bring",
    number: "Section 06",
    title: "What to Bring",
    content: (
      <>
        <ul className={listClass}>
          <li>
            <strong>Passport or valid ID:</strong> Required for passenger
            manifest and airport formalities.
          </li>
          <li>
            <strong>Warm clothing:</strong> Mountain landing points can be cold
            even during warmer seasons.
          </li>
          <li>
            <strong>Sunglasses:</strong> High-altitude sun and snow glare can be
            intense.
          </li>
          <li>
            <strong>Camera or phone:</strong> Small personal devices are allowed.
          </li>
          <li>
            <strong>Personal medications:</strong> Bring any required medication
            with you.
          </li>
          <li>
            <strong>Cash:</strong> Useful for optional meals, personal expenses,
            or local payments not included in the package.
          </li>
        </ul>

        <p>
          <strong>Strictly prohibited:</strong> drones, weapons, hazardous
          materials, large bags, and any item restricted by aviation security.
        </p>
      </>
    ),
  },
  {
    id: "multilingual",
    number: "Section 07",
    title: "Language and Communication",
    content: (
      <p>
        Our team communicates mainly in English and Nepali. Other language
        support may be arranged depending on availability, route, and advance
        notice. For special charters, language support can be discussed during
        booking.
      </p>
    ),
  },
  {
    id: "changes",
    number: "Section 08",
    title: "Modifications to Your Booking",
    content: (
      <>
        <p>
          Date changes may be permitted before the flight, subject to
          availability, aircraft scheduling, weather, and operational approval.
        </p>

        <ul className={listClass}>
          <li>
            Date changes requested early are easier to accommodate.
          </li>
          <li>
            Last-minute date changes are subject to availability and may incur
            extra costs.
          </li>
          <li>
            Passenger name changes may be allowed before flight after
            verification.
          </li>
          <li>
            Route, pickup, or timing changes are subject to aircraft schedule and
            safety approval.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "contact-booking",
    number: "Section 09",
    title: "Contact",
    content: (
      <>
        <p>
          For booking questions, modifications, or availability, please contact
          us:
        </p>

        <ContactCard />
      </>
    ),
  },
];

export default function Booking() {
  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState("");
  const [visited, setVisited] = useState([]);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(Math.min(nextProgress, 100));

      const viewportPoint = scrollTop + window.innerHeight / 3;
      let activeId = "";

      sections.forEach((section) => {
        const element = sectionRefs.current[section.id];
        if (!element) return;
        if (element.offsetTop < viewportPoint) activeId = section.id;
      });

      setCurrentSection(activeId);

      if (activeId) {
        setVisited((prev) =>
          prev.includes(activeId) ? prev : [...prev, activeId]
        );
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#FCFAF4] font-manrope text-[#0A1929]">
      <div className="fixed left-0 right-0 top-0 z-[100] h-[3px] bg-[#003366]/10">
        <div
          className="h-full bg-gradient-to-r from-[#B8860B] to-[#F2B632] shadow-[0_0_8px_rgba(184,134,11,0.4)] transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#001A33] via-[#003366] to-[#1E3A5F] px-6 py-20 text-white md:px-10 lg:py-[100px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(242,182,50,0.08)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(0,98,177,0.15)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F2B632] to-transparent" />

        <div className="relative mx-auto max-w-[1280px]">
          <div className="max-w-[760px]">
            <h1 className="font-fraunces text-[42px] font-medium leading-[1.05] tracking-[-1.5px] text-white md:text-[64px] md:tracking-[-2.5px]">
              Booking Conditions
            </h1>

            <p className="mt-6 max-w-[620px] font-fraunces text-[18px] italic leading-[1.6] text-white/70 md:text-[19px]">
              Eligibility, payment terms, weight limits, pickup logistics, and
              everything you need to know before booking.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-12 md:px-10 lg:grid-cols-[280px_1fr] lg:gap-20 lg:py-20">
        <aside className="lg:sticky lg:top-[40px] lg:self-start">
          <div className="relative mb-4 rounded-lg border border-[#E5E4DC] bg-white p-6">
            <div className="absolute left-6 top-0 h-[2px] w-6 bg-[#F2B632]" />

            <p className="mb-5 font-manrope text-[10px] font-bold uppercase tracking-[2px] text-[#B8860B]">
              Legal Documents
            </p>

            <ul className="space-y-1">
              {legalDocs.map((doc) => (
                <li key={doc.label}>
                  <a
                    href={doc.href}
                    className={`group flex items-center gap-3 rounded px-3 py-[10px] font-manrope text-[13.5px] font-medium transition-all duration-200 hover:bg-[#FBF6E9] hover:text-[#003366] ${
                      doc.active
                        ? "bg-[#FBF6E9] font-semibold text-[#003366]"
                        : "text-[#374151]"
                    }`}
                  >
                    <span
                      className={`h-4 w-[3px] rounded-full transition-colors duration-200 ${
                        doc.active
                          ? "bg-[#B8860B]"
                          : "bg-transparent group-hover:bg-[#F2B632]"
                      }`}
                    />

                    <span>{doc.label}</span>

                    <span className="ml-auto font-fraunces text-[11px] font-semibold text-[#9CA3AF] group-hover:text-[#B8860B]">
                      {doc.number}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mb-4 rounded-lg border border-[#E5E4DC] bg-white p-6">
            <div className="absolute left-6 top-0 h-[2px] w-6 bg-[#F2B632]" />

            <p className="mb-5 font-manrope text-[10px] font-bold uppercase tracking-[2px] text-[#B8860B]">
              On This Page
            </p>

            <ul className="space-y-1">
              {sections.map((section) => {
                const isCurrent = currentSection === section.id;
                const isVisited = visited.includes(section.id);

                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`group flex gap-3 py-[6px] font-manrope text-[13px] leading-[1.5] transition-all duration-200 hover:text-[#003366] ${
                        isCurrent
                          ? "font-semibold text-[#003366]"
                          : "text-[#4B5563]"
                      }`}
                    >
                      <span
                        className={`mt-[8px] h-[7px] w-[7px] shrink-0 rounded-full border transition-all duration-200 ${
                          isCurrent
                            ? "border-[#B8860B] bg-[#B8860B] shadow-[0_0_0_4px_#FAEDC4]"
                            : isVisited
                            ? "border-[#B8860B] bg-[#F2B632]"
                            : "border-[#D1D0C6] bg-white group-hover:border-[#B8860B]"
                        }`}
                      />

                      <span>{section.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="space-y-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="group flex w-full items-center gap-3 rounded-md border border-[#E5E4DC] bg-white px-4 py-3 text-left font-manrope text-[13px] font-semibold text-[#0A1929] transition-all duration-200 hover:border-[#003366] hover:bg-[#FBF6E9] hover:text-[#003366]"
            >
              <span className="text-[#B8860B] transition-transform duration-200 group-hover:-translate-y-[1px]">
                ⌘
              </span>
              Print this page
            </button>

            <a
              href="mailto:?subject=Booking Conditions&body=View this document at:"
              className="group flex w-full items-center gap-3 rounded-md border border-[#E5E4DC] bg-white px-4 py-3 text-left font-manrope text-[13px] font-semibold text-[#0A1929] transition-all duration-200 hover:border-[#003366] hover:bg-[#FBF6E9] hover:text-[#003366]"
            >
              <span className="text-[#B8860B] transition-transform duration-200 group-hover:-translate-y-[1px]">
                ✉
              </span>
              Email this document
            </a>
          </div>
        </aside>

        <article className="max-w-[680px]">
          <p className="mb-20 font-fraunces text-[21px] leading-[1.6] tracking-[-0.3px] text-[#0A1929] first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:font-fraunces first-letter:text-[76px] first-letter:font-semibold first-letter:leading-[0.85] first-letter:tracking-[-3px] first-letter:text-[#B8860B] md:text-[22px] md:first-letter:text-[84px]">
            These Booking Conditions detail what is included in your booking,
            who can fly with us, what you need to bring, and how the booking
            process works. They supplement our{" "}
            <a
              href="/legal/terms"
              className="text-[#0062B1] transition hover:text-[#003366] hover:underline hover:decoration-[#F2B632] hover:decoration-2 hover:underline-offset-4"
            >
              Terms & Conditions
            </a>
            .
          </p>

          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => {
                sectionRefs.current[section.id] = el;
              }}
              className="scroll-mt-10"
            >
              <h2 className="relative mb-8 mt-[88px] font-fraunces text-[34px] font-medium leading-[1.15] tracking-[-1.2px] text-[#003366] md:text-[38px]">
                <span className="mb-[18px] flex items-center gap-4 font-fraunces text-[13px] font-semibold uppercase tracking-[3px] text-[#B8860B]">
                  <span className="h-px w-10 bg-[#B8860B]" />
                  {section.number}
                </span>
                {section.title}
              </h2>

              <div className="font-manrope text-[17px] leading-[1.78] text-[#0A1929] [&_a]:text-[#0062B1] [&_a]:transition [&_a:hover]:text-[#003366] [&_a:hover]:underline [&_a:hover]:decoration-[#F2B632] [&_a:hover]:decoration-2 [&_a:hover]:underline-offset-4 [&_p]:mb-5 [&_strong]:font-semibold [&_strong]:text-[#003366]">
                {section.content}
              </div>
            </section>
          ))}

          <div className="relative mt-[72px] grid gap-4 border-t border-[#E5E4DC] pt-12 sm:grid-cols-2">
            <div className="absolute left-1/2 top-[-1px] h-px w-[60px] -translate-x-1/2 bg-[#B8860B]" />

            <a
              href="/legal/refund"
              className="group relative overflow-hidden rounded-lg border border-[#E5E4DC] bg-white px-8 py-7 transition-all duration-300 hover:border-[#F2B632] hover:bg-[#FBF6E9]"
            >
              <span className="mb-2 block font-manrope text-[10px] font-bold uppercase tracking-[2px] text-[#B8860B]">
                ← Previous
              </span>
              <span className="font-fraunces text-[20px] font-semibold leading-tight tracking-[-0.4px] text-[#003366]">
                Refund Policy
              </span>
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#B8860B] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="/legal/cookie"
              className="group relative overflow-hidden rounded-lg border border-[#E5E4DC] bg-white px-8 py-7 text-right transition-all duration-300 hover:border-[#F2B632] hover:bg-[#FBF6E9]"
            >
              <span className="mb-2 block font-manrope text-[10px] font-bold uppercase tracking-[2px] text-[#B8860B]">
                Next →
              </span>
              <span className="font-fraunces text-[20px] font-semibold leading-tight tracking-[-0.4px] text-[#003366]">
                Cookie Policy
              </span>
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#B8860B] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}