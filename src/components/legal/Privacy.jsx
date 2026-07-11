"use client";

import { useEffect, useRef, useState } from "react";

const listClass =
  "mb-7 ml-1 list-disc space-y-3 pl-7 marker:text-[#B8860B] marker:font-bold [&>li]:pl-2 [&>li]:text-[17px] [&>li]:leading-[1.75]";

const legalDocs = [
  { label: "Privacy Policy", href: "/legal/privacy", number: "01", active: true },
  { label: "Terms & Conditions", href: "/legal/terms", number: "02" },
  { label: "Cancellation Policy", href: "/legal/cancellation", number: "03" },
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
        <a href="tel:+9779712082949" className="font-manrope text-[0.88rem] text-white/70 transition hover:text-[#f5a623]">
          +977-9712082949
        </a>
        <a href="tel:014111051" className="font-manrope text-[0.88rem] text-white/70 transition hover:text-[#f5a623]">
          014111051/51
        </a>
        <a href="tel:014111031" className="font-manrope text-[0.88rem] text-white/70 transition hover:text-[#f5a623]">
          014111031/32
        </a>
        <a href="mailto:enquiry@mountainhelicoptersnepal.com" className="font-manrope text-[0.88rem] text-white/70 transition hover:text-[#f5a623]">
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
    id: "info-we-collect",
    number: "Section 01",
    title: "Information We Collect",
    content: (
      <>
        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          1.1 Information You Provide to Us
        </h3>

        <p>
          When you book a tour, request a charter, sign up for our newsletter, or contact us, we collect:
        </p>

        <ul className={listClass}>
          <li><strong>Identity information:</strong> Full name, date of birth, nationality, passport or national ID number, and gender.</li>
          <li><strong>Contact information:</strong> Email address, phone number, WhatsApp number, postal address, and hotel of stay in Nepal.</li>
          <li><strong>Booking details:</strong> Tour selected, flight date, passenger names, dietary preferences, language preference, and special requests.</li>
          <li><strong>Payment information:</strong> Transaction references and payment confirmations. We do not store full credit card numbers.</li>
          <li><strong>Health and safety information:</strong> Body weight, high-altitude medical notes, and emergency contact details.</li>
          <li><strong>Communication preferences:</strong> Marketing opt-ins and preferred language for communication.</li>
        </ul>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          1.2 Information Collected Automatically
        </h3>

        <p>When you visit our website, we may automatically collect:</p>

        <ul className={listClass}>
          <li><strong>Technical data:</strong> IP address, browser type, device type, operating system, screen resolution, and time zone.</li>
          <li><strong>Usage data:</strong> Pages visited, time spent, referral source, click patterns, and site search queries.</li>
          <li><strong>Cookies:</strong> Cookies and similar technologies used for analytics, functionality, and user experience.</li>
        </ul>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          1.3 Information from Third Parties
        </h3>

        <p>
          We may receive booking and contact information from travel agents, hotels, trekking agencies, online travel agencies, analytics platforms, and marketing providers when they are involved in your booking or interaction with us.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    number: "Section 02",
    title: "How We Use Your Information",
    content: (
      <>
        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          2.1 To Deliver Our Services
        </h3>

        <ul className={listClass}>
          <li>Process bookings, confirmations, and payments.</li>
          <li>Communicate flight schedules, weather updates, and operational changes.</li>
          <li>Coordinate hotel pickup, ground transport, and arrival logistics.</li>
          <li>Calculate safe aircraft loading based on passenger weight.</li>
          <li>Provide customer support and respond to inquiries.</li>
          <li>Issue refunds, vouchers, or rescheduling updates when required.</li>
        </ul>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          2.2 To Comply with Legal Obligations
        </h3>

        <ul className={listClass}>
          <li>Maintain passenger manifests and safety records.</li>
          <li>Meet tax, accounting, and audit requirements under Nepal law.</li>
          <li>Prepare insurance and operational documentation.</li>
          <li>Respond to lawful requests from authorities.</li>
        </ul>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          2.3 For Marketing
        </h3>

        <p>
          We may send tour updates, seasonal travel tips, and promotional offers only when you have opted in. You may unsubscribe at any time.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    number: "Section 03",
    title: "How We Share Your Information",
    content: (
      <>
        <div className="my-9 border-l-[3px] border-[#B8860B] bg-gradient-to-br from-[#FBF6E9] to-[#F4ECD8] px-8 py-7 font-fraunces text-[18px] italic leading-[1.7] text-[#0A1929]">
          <span className="mb-3 block font-manrope text-[10px] font-bold uppercase tracking-[2px] text-[#B8860B] not-italic">
            Our Commitment
          </span>
          We do not sell your personal information. We share only what is necessary to deliver our services, comply with the law, or protect our legitimate interests.
        </div>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          3.1 Service Providers
        </h3>

        <ul className={listClass}>
          <li><strong>Payment processors:</strong> Payment gateway providers.</li>
          <li><strong>Communication tools:</strong> Email, SMS, and WhatsApp tools.</li>
          <li><strong>Hosting and infrastructure:</strong> Website hosting and backup providers.</li>
          <li><strong>Analytics:</strong> Website analytics and marketing pixels.</li>
        </ul>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          3.2 Partners and Authorities
        </h3>

        <p>
          We may share necessary information with hotels, trekking agencies, insurance providers, transport operators, aviation regulators, tax authorities, or law enforcement when required.
        </p>
      </>
    ),
  },
  {
    id: "international",
    number: "Section 04",
    title: "International Data Transfers",
    content: (
      <>
        <p>
          Mountain Helicopters Nepal is based in Kathmandu, Nepal. Your information may be processed in Nepal or in other countries where our service providers operate.
        </p>

        <ul className={listClass}>
          <li>We use reasonable contractual safeguards with service providers.</li>
          <li>We expect service providers to follow applicable data protection standards.</li>
          <li>We use encryption and access controls where appropriate.</li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    number: "Section 05",
    title: "Data Retention",
    content: (
      <>
        <p>
          We retain your information only as long as necessary for the purpose it was collected or as required by law.
        </p>

        <ul className={listClass}>
          <li><strong>Active customer records:</strong> Retained until deletion is requested, unless legal retention applies.</li>
          <li><strong>Booking and flight records:</strong> Retained for aviation and operational records.</li>
          <li><strong>Marketing preference data:</strong> Retained until you opt out.</li>
          <li><strong>Financial records:</strong> Retained according to accounting and tax requirements.</li>
          <li><strong>General inquiries:</strong> Retained only as long as needed for customer support and follow-up.</li>
        </ul>
      </>
    ),
  },
  {
    id: "rights",
    number: "Section 06",
    title: "Your Rights",
    content: (
      <>
        <p>Subject to applicable law, you may have the right to:</p>

        <ul className={listClass}>
          <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
          <li><strong>Correct:</strong> Request correction of inaccurate or incomplete information.</li>
          <li><strong>Delete:</strong> Request deletion of your information, subject to legal retention requirements.</li>
          <li><strong>Restrict:</strong> Limit how we process your information.</li>
          <li><strong>Object:</strong> Object to certain uses, including direct marketing.</li>
          <li><strong>Withdraw consent:</strong> Revoke consent previously given.</li>
        </ul>

        <p>To exercise your rights, contact us using the details listed in the contact section.</p>
      </>
    ),
  },
  {
    id: "security",
    number: "Section 07",
    title: "Security",
    content: (
      <>
        <p>We apply reasonable security measures to protect your information.</p>

        <ul className={listClass}>
          <li>TLS/SSL encryption for data in transit.</li>
          <li>Protected storage for sensitive information.</li>
          <li>Role-based access controls for staff.</li>
          <li>Operational procedures for security incidents.</li>
          <li>Regular review of systems and access permissions.</li>
        </ul>
      </>
    ),
  },
  {
    id: "children",
    number: "Section 08",
    title: "Children's Privacy",
    content: (
      <p>
        Our services are not intended for children under 16 years of age. Helicopter tours involving children are booked by an adult guardian who provides the required information.
      </p>
    ),
  },
  {
    id: "cookies-brief",
    number: "Section 09",
    title: "Cookies",
    content: (
      <p>
        Our website uses cookies and similar technologies. Please see our{" "}
        <a href="/legal/cookie">Cookie Policy</a> for full details.
      </p>
    ),
  },
  {
    id: "updates",
    number: "Section 10",
    title: "Updates to This Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our services, practices, or legal requirements.
        </p>

        <ul className={listClass}>
          <li>Email notification where appropriate.</li>
          <li>A notice on our website for important changes.</li>
          <li>Updated effective date on the policy page.</li>
        </ul>
      </>
    ),
  },
  {
    id: "contact-privacy",
    number: "Section 11",
    title: "Contact Us",
    content: (
      <>
        <p>For privacy-related questions, concerns, or requests, please contact us:</p>
        <ContactCard />
      </>
    ),
  },
];

export default function Privacy() {
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
        setVisited((prev) => (prev.includes(activeId) ? prev : [...prev, activeId]));
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
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-[620px] font-fraunces text-[18px] italic leading-[1.6] text-white/70 md:text-[19px]">
              How we collect, use, and protect your personal information when you book with Mountain Helicopters Nepal.
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
                      doc.active ? "bg-[#FBF6E9] font-semibold text-[#003366]" : "text-[#374151]"
                    }`}
                  >
                    <span className={`h-4 w-[3px] rounded-full transition-colors duration-200 ${doc.active ? "bg-[#B8860B]" : "bg-transparent group-hover:bg-[#F2B632]"}`} />
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
                        isCurrent ? "font-semibold text-[#003366]" : "text-[#4B5563]"
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
              <span className="text-[#B8860B] transition-transform duration-200 group-hover:-translate-y-[1px]">⌘</span>
              Print this page
            </button>

            <a
              href="mailto:?subject=Privacy Policy&body=View this document at:"
              className="group flex w-full items-center gap-3 rounded-md border border-[#E5E4DC] bg-white px-4 py-3 text-left font-manrope text-[13px] font-semibold text-[#0A1929] transition-all duration-200 hover:border-[#003366] hover:bg-[#FBF6E9] hover:text-[#003366]"
            >
              <span className="text-[#B8860B] transition-transform duration-200 group-hover:-translate-y-[1px]">✉</span>
              Email this document
            </a>
          </div>
        </aside>

        <article className="max-w-[680px]">
          <p className="mb-20 font-fraunces text-[21px] leading-[1.6] tracking-[-0.3px] text-[#0A1929] first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:font-fraunces first-letter:text-[76px] first-letter:font-semibold first-letter:leading-[0.85] first-letter:tracking-[-3px] first-letter:text-[#B8860B] md:text-[22px] md:first-letter:text-[84px]">
            <strong className="font-semibold text-[#003366]">Mountain Helicopters Nepal Pvt. Ltd.</strong>{" "}
            is committed to protecting your privacy. This Privacy Policy explains what information we collect when you visit our website, book a helicopter tour or charter, or interact with our services, how we use it, and the rights you have over your information.
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
            <span />

            <a
              href="/legal/terms"
              className="group relative overflow-hidden rounded-lg border border-[#E5E4DC] bg-white px-8 py-7 text-right transition-all duration-300 hover:border-[#F2B632] hover:bg-[#FBF6E9]"
            >
              <span className="mb-2 block font-manrope text-[10px] font-bold uppercase tracking-[2px] text-[#B8860B]">
                Next →
              </span>
              <span className="font-fraunces text-[20px] font-semibold leading-tight tracking-[-0.4px] text-[#003366]">
                Terms & Conditions
              </span>
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#B8860B] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}