"use client";

import { useEffect, useRef, useState } from "react";

const listClass =
  "mb-7 ml-1 list-disc space-y-3 pl-7 marker:text-[#B8860B] marker:font-bold [&>li]:pl-2 [&>li]:text-[17px] [&>li]:leading-[1.75]";

const legalDocs = [
  { label: "Privacy Policy", href: "/legal/privacy", number: "01" },
  { label: "Terms & Conditions", href: "/legal/terms", number: "02" },
  {
    label: "Cancellation Policy",
    href: "/legal/cancellation",
    number: "03",
    active: true,
  },
  { label: "Refund Policy", href: "/legal/refund", number: "04" },
  { label: "Booking Conditions", href: "/legal/booking", number: "05" },
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
    id: "overview",
    number: "Section 01",
    title: "Overview",
    content: (
      <>
        <p>
          This policy applies to all bookings made through our website, partners,
          or agents. By confirming your booking, you accept this Cancellation
          Policy.
        </p>

        <p>
          This page explains how cancellations are handled. Refund amounts,
          refund timelines, refund deductions, and voucher options are explained
          separately in our{" "}
          <a href="/legal/refund">Refund Policy</a>.
        </p>
      </>
    ),
  },
  {
    id: "customer-cancel",
    number: "Section 02",
    title: "Cancellation by You",
    content: (
      <>
        <p>
          If you need to cancel your booking, your cancellation must be submitted
          in writing before your scheduled flight date.
        </p>

        <ul className={listClass}>
          <li>
            Submit your cancellation request by email, WhatsApp, or through your
            original booking platform.
          </li>
          <li>
            Include your full name, booking reference, scheduled flight date,
            and reason for cancellation.
          </li>
          <li>
            The cancellation date is counted from the date and time we receive
            your written cancellation request.
          </li>
          <li>
            Refund eligibility and refund amount are calculated according to the{" "}
            <a href="/legal/refund">Refund Policy</a>.
          </li>
        </ul>

        <p>
          If you booked through a third-party platform, your cancellation may
          also be subject to that platform’s terms and processing rules.
        </p>
      </>
    ),
  },
  {
    id: "mhn-cancel",
    number: "Section 03",
    title: "Cancellation by MHN",
    content: (
      <>
        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          3.1 Weather Cancellations
        </h3>

        <p>
          If we cancel your flight due to weather, visibility, or other safety
          conditions, we will offer available options based on operational
          possibility and the Refund Policy.
        </p>

        <ul className={listClass}>
          <li>Reschedule to the next available date where possible.</li>
          <li>Request refund review according to the Refund Policy.</li>
          <li>Choose a voucher option where available.</li>
        </ul>

        <p>
          Weather decisions are made by the Pilot in Command and our flight
          operations team. Their decisions are final and are based on aviation
          safety standards.
        </p>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          3.2 Mechanical or Operational Cancellations
        </h3>

        <p>
          If we cancel due to mechanical issues, aircraft availability, crew
          availability, air traffic restrictions, or other operational reasons,
          we will offer the available alternatives listed in our Refund Policy.
        </p>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          3.3 Schedule Changes
        </h3>

        <p>
          We make reasonable efforts to operate flights on the confirmed
          schedule. However, mountain flights may require time changes due to
          weather, safety, air traffic, or operational needs.
        </p>

        <p>
          If we change your flight time by more than <strong>3 hours</strong>{" "}
          from the originally confirmed time and the new time is not acceptable
          to you, you may request rescheduling or refund review according to the
          Refund Policy.
        </p>
      </>
    ),
  },
  {
    id: "force-majeure",
    number: "Section 04",
    title: "Force Majeure",
    content: (
      <>
        <p>
          For cancellations caused by events beyond our reasonable control, we
          will make reasonable efforts to reschedule your flight or provide
          available alternatives according to the Refund Policy.
        </p>

        <ul className={listClass}>
          <li>Severe weather or unsafe visibility.</li>
          <li>Natural disasters, earthquakes, landslides, or floods.</li>
          <li>Government restrictions or airspace closures.</li>
          <li>Civil unrest, strikes, pandemics, or emergency conditions.</li>
          <li>Operational disruptions beyond our reasonable control.</li>
        </ul>

        <p>
          We are not liable for consequential losses such as accommodation,
          missed connections, additional transport, or related travel expenses.
          We strongly recommend comprehensive travel insurance.
        </p>
      </>
    ),
  },
  {
    id: "charter",
    number: "Section 05",
    title: "Charter Cancellation Terms",
    content: (
      <>
        <p>
          Charter bookings involve dedicated aircraft planning, crew allocation,
          route preparation, and operational arrangements. Because of this,
          charter cancellations may follow different conditions from per-seat
          tour bookings.
        </p>

        <ul className={listClass}>
          <li>Private full-helicopter charter flights.</li>
          <li>Corporate flights and VIP movements.</li>
          <li>Aerial photography or filming flights.</li>
          <li>Medical, rescue-related, or specialized operations.</li>
          <li>Multi-day helicopter operations.</li>
        </ul>

        <p>
          Charter refund amounts are explained in the{" "}
          <a href="/legal/refund">Refund Policy</a>. If your signed charter
          contract includes separate cancellation terms, the signed contract will
          apply over the general website policy.
        </p>
      </>
    ),
  },
  {
    id: "medical",
    number: "Section 06",
    title: "Medical Emergency Exceptions",
    content: (
      <>
        <p>
          If you cannot fly due to a documented medical emergency affecting you
          or an immediate family member, we may review your case separately.
        </p>

        <ul className={listClass}>
          <li>Rescheduling to a future date where possible.</li>
          <li>A voucher valid for a future booking where applicable.</li>
          <li>Refund review according to the Refund Policy.</li>
        </ul>

        <p>
          Medical documentation may be required from a licensed practitioner.
          The document should clearly state the condition that prevented travel
          and should be issued near the scheduled flight date.
        </p>
      </>
    ),
  },
  {
    id: "ineligibility",
    number: "Section 07",
    title: "Refusal of Boarding",
    content: (
      <>
        <p>
          No refund is provided if you are refused boarding due to passenger
          conduct, false information, or safety concerns.
        </p>

        <ul className={listClass}>
          <li>Misrepresentation of identity, weight, or medical condition.</li>
          <li>Apparent intoxication or substance use.</li>
          <li>Failure to comply with safety briefings or crew instructions.</li>
          <li>Late arrival beyond the allowed check-in window.</li>
          <li>Behavior that endangers the flight, crew, or other passengers.</li>
          <li>Failure to carry required identification or travel documents.</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-cancel",
    number: "Section 08",
    title: "How to Request a Cancellation",
    content: (
      <>
        <p>
          Submit cancellation requests through one of the following official
          channels:
        </p>

        <ul className={listClass}>
          <li>
            <strong>Email:</strong> enquiry@mountainhelicoptersnepal.com with
            your booking reference number.
          </li>
          <li>
            <strong>WhatsApp:</strong> +977-9712082949 during business hours.
          </li>
          <li>
            <strong>Original booking platform:</strong> If you booked through a
            partner platform, submit your cancellation through that platform’s
            process.
          </li>
        </ul>

        <p>
          Cancellation is effective only when we issue written acknowledgment.
          Please include your full name, booking reference, scheduled flight
          date, and reason for cancellation.
        </p>
      </>
    ),
  },
  {
    id: "contact-cancel",
    number: "Section 09",
    title: "Contact Us",
    content: (
      <>
        <p>
          For cancellation requests or questions, please contact us:
        </p>

        <ContactCard />
      </>
    ),
  },
];

export default function Cancellation() {
  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState("");
  const [visited, setVisited] = useState([]);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
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
              Cancellation Policy
            </h1>

            <p className="mt-6 max-w-[620px] font-fraunces text-[18px] italic leading-[1.6] text-white/70 md:text-[19px]">
              What happens when you need to cancel, when weather changes your
              flight, or when operations require rescheduling.
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
              href="mailto:?subject=Cancellation Policy&body=View this document at:"
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
            Mountain Helicopters Nepal operates flights in challenging mountain
            conditions. This Cancellation Policy explains what happens when you
            need to cancel, when we need to cancel for weather or safety
            reasons, and how cancellation requests are handled.
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
              href="/legal/terms"
              className="group relative overflow-hidden rounded-lg border border-[#E5E4DC] bg-white px-8 py-7 transition-all duration-300 hover:border-[#F2B632] hover:bg-[#FBF6E9]"
            >
              <span className="mb-2 block font-manrope text-[10px] font-bold uppercase tracking-[2px] text-[#B8860B]">
                ← Previous
              </span>
              <span className="font-fraunces text-[20px] font-semibold leading-tight tracking-[-0.4px] text-[#003366]">
                Terms & Conditions
              </span>
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#B8860B] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="/legal/refund"
              className="group relative overflow-hidden rounded-lg border border-[#E5E4DC] bg-white px-8 py-7 text-right transition-all duration-300 hover:border-[#F2B632] hover:bg-[#FBF6E9]"
            >
              <span className="mb-2 block font-manrope text-[10px] font-bold uppercase tracking-[2px] text-[#B8860B]">
                Next →
              </span>
              <span className="font-fraunces text-[20px] font-semibold leading-tight tracking-[-0.4px] text-[#003366]">
                Refund Policy
              </span>
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#B8860B] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}