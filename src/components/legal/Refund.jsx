"use client";

import { useEffect, useRef, useState } from "react";

const listClass =
  "mb-7 ml-1 list-disc space-y-3 pl-7 marker:text-[#B8860B] marker:font-bold [&>li]:pl-2 [&>li]:text-[17px] [&>li]:leading-[1.75]";

const legalDocs = [
  { label: "Privacy Policy", href: "/legal/privacy", number: "01" },
  { label: "Terms & Conditions", href: "/legal/terms", number: "02" },
  { label: "Cancellation Policy", href: "/legal/cancellation", number: "03" },
  {
    label: "Refund Policy",
    href: "/legal/refund",
    number: "04",
    active: true,
  },
  { label: "Booking Conditions", href: "/legal/booking", number: "05" },
  { label: "Cookie Policy", href: "/legal/cookie", number: "06" },
];

const perSeatRows = [
  {
    days: "30+ days",
    refund: "90%",
    note: "Full refund minus a 10% processing fee.",
    type: "full",
  },
  {
    days: "15 – 29 days",
    refund: "75%",
    note: "Standard cancellation window.",
    type: "full",
  },
  {
    days: "7 – 14 days",
    refund: "50%",
    note: "Late cancellation. Aircraft block already scheduled.",
    type: "partial",
  },
  {
    days: "3 – 6 days",
    refund: "25%",
    note: "Short-notice cancellation.",
    type: "partial",
  },
  {
    days: "0 – 2 days",
    refund: "0%",
    note: "No refund. Seat cannot be resold.",
    type: "zero",
  },
  {
    days: "No-show",
    refund: "0%",
    note: "No refund. Late arrivals beyond 30 minutes are treated as no-show.",
    type: "zero",
  },
];

const charterRows = [
  {
    days: "60+ days",
    refund: "100%",
    note: "Full refund.",
    type: "full",
  },
  {
    days: "30 – 59 days",
    refund: "75%",
    note: "Standard charter cancellation.",
    type: "full",
  },
  {
    days: "14 – 29 days",
    refund: "50%",
    note: "Late charter cancellation.",
    type: "partial",
  },
  {
    days: "7 – 13 days",
    refund: "25%",
    note: "Very late cancellation.",
    type: "partial",
  },
  {
    days: "0 – 6 days",
    refund: "0%",
    note: "No refund. Aircraft and crew already blocked.",
    type: "zero",
  },
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

function RefundTable({ rows }) {
  return (
    <div className="my-8 space-y-2">
      {rows.map((row) => (
        <div
          key={row.days}
          className={`grid overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:border-[#F2B632] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] md:grid-cols-[180px_95px_1fr] ${
            row.type === "full"
              ? "border-l-4 border-l-[#047857]"
              : row.type === "partial"
              ? "border-l-4 border-l-[#B8860B]"
              : "border-l-4 border-l-[#B91C1C]"
          }`}
        >
          <div className="border-b border-[#E5E4DC] px-6 py-5 font-fraunces text-[17px] font-semibold text-[#003366] md:border-b-0 md:border-r md:border-dashed">
            {row.days}
          </div>

          <div
            className={`px-6 py-5 font-fraunces text-[28px] font-semibold leading-none tracking-[-1px] md:text-right ${
              row.type === "full"
                ? "text-[#047857]"
                : row.type === "partial"
                ? "text-[#B8860B]"
                : "text-[#B91C1C]"
            }`}
          >
            {row.refund}
          </div>

          <div className="px-6 py-5 font-manrope text-[14px] leading-[1.5] text-[#374151]">
            {row.note}
          </div>
        </div>
      ))}
    </div>
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
          This Refund Policy explains how refunds are calculated and processed
          for Mountain Helicopters Nepal bookings.
        </p>

        <p>
          Cancellation procedures are explained separately in our{" "}
          <a href="/legal/cancellation">Cancellation Policy</a>. This page only
          explains refund amounts, refund timelines, voucher options, deductions,
          and processing rules.
        </p>
      </>
    ),
  },
  {
    id: "per-seat-refund",
    number: "Section 02",
    title: "Per-seat Refund Schedule",
    content: (
      <>
        <p>
          For per-seat tour bookings, refund amount depends on how many days
          before the scheduled flight your written cancellation request is
          received.
        </p>

        <RefundTable rows={perSeatRows} />

        <p>
          The date your cancellation is received determines the refund tier, not
          the date you intended to send it.
        </p>
      </>
    ),
  },
  {
    id: "charter-refund",
    number: "Section 03",
    title: "Charter Refund Schedule",
    content: (
      <>
        <p>
          Charter bookings follow a separate refund schedule because aircraft,
          crew, and operational resources are blocked for the booking.
        </p>

        <RefundTable rows={charterRows} />

        <p>
          For multi-day charter operations or specialized services such as
          filming, rescue-related work, or medical operations, separate written
          contract terms may apply.
        </p>
      </>
    ),
  },
  {
    id: "weather-refunds",
    number: "Section 04",
    title: "Weather and Operational Refunds",
    content: (
      <>
        <p>
          If we cancel your flight due to weather, visibility, mechanical
          readiness, aircraft availability, crew availability, or other
          operational safety reasons, you may be offered:
        </p>

        <ul className={listClass}>
          <li>
            <strong>Rescheduling:</strong> Move your booking to the next
            available date at no additional cost.
          </li>
          <li>
            <strong>Full refund:</strong> Receive 100% refund of the amount paid.
          </li>
          <li>
            <strong>Voucher:</strong> Receive a voucher valid for a future
            booking.
          </li>
        </ul>

        <p>
          Weather and safety decisions are made by the Pilot in Command and our
          operations team. Their decisions are final and based on aviation safety
          standards.
        </p>
      </>
    ),
  },
  {
    id: "force-majeure-refunds",
    number: "Section 05",
    title: "Force Majeure Refunds",
    content: (
      <>
        <p>
          For cancellations caused by events beyond our reasonable control, we
          will provide refund or voucher options where possible.
        </p>

        <ul className={listClass}>
          <li>Rescheduling at no additional cost when feasible.</li>
          <li>Full refund or voucher when rescheduling is not possible.</li>
          <li>No coverage for consequential losses such as hotel bookings, missed connections, or extra transport.</li>
        </ul>

        <p>
          We strongly recommend that all travelers carry comprehensive travel
          insurance.
        </p>
      </>
    ),
  },
  {
    id: "medical-refunds",
    number: "Section 06",
    title: "Medical Emergency Refunds",
    content: (
      <>
        <p>
          If you are unable to fly due to a documented medical emergency
          affecting you or an immediate family member, we may review your case
          separately.
        </p>

        <ul className={listClass}>
          <li>Rescheduling to a future date within 12 months where possible.</li>
          <li>Voucher for the amount paid, valid for a future booking.</li>
          <li>Partial or full refund in severe cases, at our discretion.</li>
        </ul>

        <p>
          Medical documentation may be required from a licensed practitioner.
          The document should be dated close to the scheduled flight date and
          should clearly mention the condition that prevented travel.
        </p>
      </>
    ),
  },
  {
    id: "refund-processing",
    number: "Section 07",
    title: "Refund Processing",
    content: (
      <>
        <p>
          Refunds are processed to the original payment method where possible.
          Processing time depends on your payment provider, bank, or original
          booking platform.
        </p>

        <ul className={listClass}>
          <li>
            <strong>International cards:</strong> Usually 5 – 10 business days
            after processing.
          </li>
          <li>
            <strong>Domestic digital payments:</strong> Usually 1 – 7 business
            days depending on provider.
          </li>
          <li>
            <strong>Wire transfer:</strong> Usually 7 – 14 business days.
          </li>
          <li>
            <strong>OTA bookings:</strong> Refunds follow the original
            platform’s processing timeline.
          </li>
        </ul>

        <p>
          Bank or payment provider delays are outside our control. For tracking
          issues, contact your bank, card provider, payment gateway, or original
          booking platform.
        </p>
      </>
    ),
  },
  {
    id: "deductions",
    number: "Section 08",
    title: "Processing Fees and Deductions",
    content: (
      <>
        <p>
          Refunds may be reduced by processing costs or third-party charges when
          those charges are not refundable to us.
        </p>

        <ul className={listClass}>
          <li>Payment gateway fees.</li>
          <li>Bank charges or wire transfer fees.</li>
          <li>Currency conversion costs.</li>
          <li>Platform or OTA service fees.</li>
          <li>Administrative processing charges listed in the refund schedule.</li>
        </ul>
      </>
    ),
  },
  {
    id: "voucher",
    number: "Section 09",
    title: "Voucher Option",
    content: (
      <>
        <p>
          Where eligible, you may choose a voucher instead of a cash refund.
          Voucher rules may include:
        </p>

        <ul className={listClass}>
          <li>Voucher validity for a fixed future period.</li>
          <li>Use toward the same or another eligible helicopter service.</li>
          <li>Transferability only when approved by Mountain Helicopters Nepal.</li>
          <li>No cash value after expiry unless required by law.</li>
        </ul>
      </>
    ),
  },
  {
    id: "insurance",
    number: "Section 10",
    title: "Insurance Recommendation",
    content: (
      <div className="my-9 border-l-[3px] border-[#B8860B] bg-gradient-to-br from-[#FBF6E9] to-[#F4ECD8] px-8 py-7 font-fraunces text-[18px] italic leading-[1.7] text-[#0A1929]">
        <span className="mb-3 block font-manrope text-[10px] font-bold uppercase tracking-[2px] text-[#B8860B] not-italic">
          Insurance Recommendation
        </span>
        We strongly recommend comprehensive travel insurance that covers trip
        cancellation, weather-related interruptions, medical emergencies, missed
        connections, accommodation loss, and other travel disruptions.
      </div>
    ),
  },
  {
    id: "contact-refund",
    number: "Section 11",
    title: "Contact Us",
    content: (
      <>
        <p>For refund requests or refund-related questions, please contact us:</p>
        <ContactCard />
      </>
    ),
  },
];

export default function Refund() {
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
              Refund Policy
            </h1>

            <p className="mt-6 max-w-[620px] font-fraunces text-[18px] italic leading-[1.6] text-white/70 md:text-[19px]">
              Refund schedules, processing timelines, voucher options, and what
              happens when your helicopter flight is cancelled or rescheduled.
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
              href="mailto:?subject=Refund Policy&body=View this document at:"
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
            This Refund Policy explains how refund amounts are calculated, how
            refunds are processed, and what options are available when a booking
            is cancelled by you or by Mountain Helicopters Nepal.
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
              href="/legal/cancellation"
              className="group relative overflow-hidden rounded-lg border border-[#E5E4DC] bg-white px-8 py-7 transition-all duration-300 hover:border-[#F2B632] hover:bg-[#FBF6E9]"
            >
              <span className="mb-2 block font-manrope text-[10px] font-bold uppercase tracking-[2px] text-[#B8860B]">
                ← Previous
              </span>
              <span className="font-fraunces text-[20px] font-semibold leading-tight tracking-[-0.4px] text-[#003366]">
                Cancellation Policy
              </span>
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#B8860B] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="/legal/booking"
              className="group relative overflow-hidden rounded-lg border border-[#E5E4DC] bg-white px-8 py-7 text-right transition-all duration-300 hover:border-[#F2B632] hover:bg-[#FBF6E9]"
            >
              <span className="mb-2 block font-manrope text-[10px] font-bold uppercase tracking-[2px] text-[#B8860B]">
                Next →
              </span>
              <span className="font-fraunces text-[20px] font-semibold leading-tight tracking-[-0.4px] text-[#003366]">
                Booking Conditions
              </span>
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#B8860B] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}