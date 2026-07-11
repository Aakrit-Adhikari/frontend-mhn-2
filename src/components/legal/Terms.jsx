"use client";

import { useEffect, useRef, useState } from "react";

const listClass =
  "mb-7 ml-1 list-disc space-y-3 pl-7 marker:text-[#B8860B] marker:font-bold [&>li]:pl-2 [&>li]:text-[17px] [&>li]:leading-[1.75]";

const orderedListClass =
  "mb-7 ml-1 list-decimal space-y-3 pl-7 marker:text-[#B8860B] marker:font-bold [&>li]:pl-2 [&>li]:text-[17px] [&>li]:leading-[1.75]";

const legalDocs = [
  { label: "Privacy Policy", href: "/legal/privacy", number: "01" },
  { label: "Terms & Conditions", href: "/legal/terms", number: "02", active: true },
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
    id: "agreement",
    number: "Article 01",
    title: "Agreement to Terms",
    content: (
      <p>
        By accessing or using <strong>mountainhelicoptersnepal.com</strong> or
        any related service, you confirm that you have read, understood, and
        agree to be bound by these Terms, our{" "}
        <a href="/legal/privacy">Privacy Policy</a>, our{" "}
        <a href="/legal/cancellation">Cancellation Policy</a>, our{" "}
        <a href="/legal/refund">Refund Policy</a>, and our{" "}
        <a href="/legal/booking-conditions">Booking Conditions</a>. If you do
        not agree, you may not use our services.
      </p>
    ),
  },
  {
    id: "eligibility",
    number: "Article 02",
    title: "Eligibility",
    content: (
      <>
        <p>To book a tour or use our services, you must:</p>

        <ul className={listClass}>
          <li>
            Be at least <strong>18 years of age</strong> or have parental or
            guardian authorization.
          </li>
          <li>Provide accurate and complete information.</li>
          <li>Have legal capacity to enter binding contracts in your jurisdiction.</li>
          <li>Comply with all applicable laws and regulations.</li>
        </ul>

        <p>
          Children under 18 may fly with us when accompanied by a parent or
          legal guardian and where their participation is medically appropriate.
          See our <a href="/legal/booking">Booking Conditions</a> for
          full eligibility rules.
        </p>
      </>
    ),
  },
  {
    id: "bookings",
    number: "Article 03",
    title: "Bookings and Payment",
    content: (
      <>
        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          3.1 Booking Confirmation
        </h3>

        <p>A booking is confirmed only when:</p>

        <ol className={orderedListClass}>
          <li>We receive your completed booking request.</li>
          <li>Payment or required deposit is successfully processed.</li>
          <li>We issue a written booking confirmation by email.</li>
        </ol>

        <p>
          Until all three conditions are met, we make no commitment to operate
          the flight you have requested.
        </p>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          3.2 Pricing and Currency
        </h3>

        <p>
          Prices on our website are listed in US Dollars unless stated otherwise.
          For Indian customers, prices may be displayed in Indian Rupees. For
          Nepali customers, prices may be displayed in Nepalese Rupees. All prices
          include applicable taxes and fees unless explicitly stated otherwise.
        </p>

        <p>
          We reserve the right to change prices at any time. Once your booking is
          confirmed, the price is locked unless the booking is later changed.
        </p>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          3.3 Payment Methods
        </h3>

        <p>We may accept payment via:</p>

        <ul className={listClass}>
          <li>International credit and debit cards where available.</li>
          <li>Domestic digital wallet or bank transfer options where available.</li>
          <li>Wire transfer for charter and large bookings, subject to clearance.</li>
          <li>Other approved payment methods confirmed during booking.</li>
        </ul>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          3.4 Deposits and Balances
        </h3>

        <p>
          Per-seat bookings usually require full payment at the time of booking.
          Charter bookings may require a deposit to secure the booking, with the
          remaining balance due before flight operation. Specific payment terms
          may be listed in your booking confirmation or charter agreement.
        </p>
      </>
    ),
  },
  {
    id: "cancellation-brief",
    number: "Article 04",
    title: "Cancellation and Refunds",
    content: (
      <p>
        Cancellation by you, cancellation by MHN, or changes caused by weather,
        mechanical, or operational reasons are governed by our{" "}
        <a href="/legal/cancellation">Cancellation Policy</a> and{" "}
        <a href="/legal/refund">Refund Policy</a>. Please review both before
        booking.
      </p>
    ),
  },
  {
    id: "service",
    number: "Article 05",
    title: "Service Description and Limitations",
    content: (
      <>
        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          5.1 What We Provide
        </h3>

        <p>
          We provide helicopter tours and charter services in Nepal, operated
          under aviation safety requirements. Flights are conducted by qualified
          pilots and supported by operational staff.
        </p>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          5.2 Operational Discretion
        </h3>

        <p>
          Helicopter operations are subject to weather, visibility, aircraft
          readiness, crew availability, and pilot judgment. The Pilot in Command
          has <strong>absolute authority</strong> to cancel, delay, divert, or
          modify any flight for safety reasons. Our decisions in matters of
          safety are final.
        </p>

        <div className="my-9 border-l-[3px] border-[#B45309] bg-gradient-to-br from-[#FEF5E7] to-[#FCE7B6] px-8 py-7 font-fraunces text-[18px] italic leading-[1.7] text-[#0A1929]">
          <span className="mb-3 block font-manrope text-[10px] font-bold uppercase tracking-[2px] text-[#B45309] not-italic">
            Important
          </span>
          Mountain weather changes rapidly. Delays and cancellations for safety
          reasons are not uncommon and are not grounds for additional
          compensation beyond what is provided in our policies.
        </div>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          5.3 Schedule Changes
        </h3>

        <p>
          We make reasonable efforts to operate flights on the schedule confirmed
          at booking. We reserve the right to modify schedules, depart earlier or
          later, or substitute aircraft when operationally necessary.
        </p>
      </>
    ),
  },
  {
    id: "conduct",
    number: "Article 06",
    title: "User Conduct and Responsibilities",
    content: (
      <>
        <p>By booking and flying with us, you agree to:</p>

        <ul className={listClass}>
          <li>Provide accurate identity, weight, and health information.</li>
          <li>Arrive on time at designated pickup or check-in points.</li>
          <li>Carry valid identification, including passport where required.</li>
          <li>Follow all safety briefings and crew instructions.</li>
          <li>Refrain from consuming alcohol or non-prescription substances before flight.</li>
          <li>Disclose medical conditions that may affect your ability to fly.</li>
          <li>Behave respectfully toward crew, ground staff, and other passengers.</li>
        </ul>

        <p>
          We reserve the right to refuse boarding to any passenger who appears
          intoxicated, presents a safety risk, fails to comply with safety
          instructions, or has misrepresented health or weight information. No
          refund is provided in such cases.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    number: "Article 07",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          All content on our website, including text, graphics, logos,
          photographs, video, and software, is the property of Mountain
          Helicopters Nepal or our licensors and is protected by copyright and
          trademark laws.
        </p>

        <p>
          You may not reproduce, distribute, modify, or create derivative works
          from our content without our prior written permission, except for
          personal, non-commercial use.
        </p>

        <p>
          “Mountain Helicopters Nepal,” our logo, and related brand assets are
          trademarks or brand identifiers of Mountain Helicopters Nepal Pvt. Ltd.
        </p>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          7.1 Your Content
        </h3>

        <p>
          If you submit photos, reviews, or other content to us or our platforms,
          you grant us a non-exclusive, royalty-free, worldwide license to use,
          reproduce, and display that content for marketing and service purposes,
          with attribution where reasonable.
        </p>
      </>
    ),
  },
  {
    id: "disclaimers",
    number: "Article 08",
    title: "Disclaimers",
    content: (
      <>
        <p>
          Our services are provided “as is” and “as available.” To the maximum
          extent permitted by law, we disclaim all warranties, express or implied,
          including warranties of merchantability, fitness for a particular
          purpose, and non-infringement.
        </p>

        <p>Specifically, we do not warrant that:</p>

        <ul className={listClass}>
          <li>Our website will be uninterrupted, error-free, or secure.</li>
          <li>Weather, visibility, or aircraft availability will allow your scheduled flight.</li>
          <li>Information on our website is always complete, accurate, or current.</li>
        </ul>

        <p>
          For specific risks of helicopter tours and high-altitude flight, please
          see our Disclaimer and risk-related information where available.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    number: "Article 09",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by Nepal law and applicable
          international conventions, our total liability arising from or related
          to your use of our services shall not exceed the total amount you paid
          us for the specific booking giving rise to the claim.
        </p>

        <p>We shall not be liable for:</p>

        <ul className={listClass}>
          <li>Indirect, incidental, consequential, or punitive damages.</li>
          <li>Loss of profits, revenue, business opportunities, or data.</li>
          <li>Damage caused by force majeure events.</li>
          <li>Acts or omissions of third parties, hotels, OTAs, transport providers, or other operators.</li>
          <li>Lost or damaged personal items unless caused by our gross negligence.</li>
        </ul>

        <p>
          Nothing in these Terms limits or excludes liability that cannot be
          limited or excluded under applicable law.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    number: "Article 10",
    title: "Indemnification",
    content: (
      <>
        <p>
          You agree to indemnify, defend, and hold harmless Mountain Helicopters
          Nepal Pvt. Ltd., its directors, employees, pilots, and contractors from
          any claims, damages, losses, or expenses arising from:
        </p>

        <ul className={listClass}>
          <li>Your breach of these Terms or any applicable law.</li>
          <li>Your misrepresentation of identity, weight, or medical conditions.</li>
          <li>Your conduct during a tour or charter that causes harm or damage.</li>
          <li>Your violation of the rights of any third party.</li>
        </ul>
      </>
    ),
  },
  {
    id: "force-majeure",
    number: "Article 11",
    title: "Force Majeure",
    content: (
      <>
        <p>
          We are not liable for any failure or delay in performance caused by
          events beyond our reasonable control, including severe weather, natural
          disasters, earthquakes, landslides, government actions, airspace
          closures, civil unrest, strikes, acts of terrorism, pandemics, or
          aircraft mechanical failures despite reasonable maintenance.
        </p>

        <p>
          In such events, we will make reasonable efforts to reschedule your
          flight or provide available alternatives as described in our
          Cancellation and Refund policies.
        </p>
      </>
    ),
  },
  {
    id: "law",
    number: "Article 12",
    title: "Governing Law and Dispute Resolution",
    content: (
      <>
        <p>
          These Terms are governed by the laws of Nepal. Any dispute arising from
          or related to these Terms or our services shall first be addressed
          through good-faith negotiation between the parties.
        </p>

        <p>
          If negotiation fails, disputes shall be handled through the appropriate
          legal or arbitration process in Kathmandu, Nepal, unless applicable law
          requires otherwise.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    number: "Article 13",
    title: "Changes to These Terms",
    content: (
      <p>
        We may update these Terms from time to time. Material changes may be
        communicated by email or through a prominent notice on our website.
        Continued use of our services after the effective date constitutes
        acceptance.
      </p>
    ),
  },
  {
    id: "general",
    number: "Article 14",
    title: "General Provisions",
    content: (
      <ul className={listClass}>
        <li>
          <strong>Entire agreement:</strong> These Terms, along with our linked
          policies, constitute the entire agreement between you and MHN regarding
          our services.
        </li>
        <li>
          <strong>Severability:</strong> If any provision is found unenforceable,
          the remaining provisions shall remain in effect.
        </li>
        <li>
          <strong>No waiver:</strong> Our failure to enforce any provision shall
          not constitute a waiver of that provision.
        </li>
        <li>
          <strong>Assignment:</strong> You may not assign your rights or
          obligations under these Terms without our written consent.
        </li>
        <li>
          <strong>Notices:</strong> Notices to MHN should be sent using the
          contact details below.
        </li>
      </ul>
    ),
  },
  {
    id: "contact-terms",
    number: "Article 15",
    title: "Contact Us",
    content: (
      <>
        <p>For questions about these Terms, please contact us:</p>
        <ContactCard />
      </>
    ),
  },
];

export default function Terms() {
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
              Terms & Conditions
            </h1>

            <p className="mt-6 max-w-[620px] font-fraunces text-[18px] italic leading-[1.6] text-white/70 md:text-[19px]">
              The agreement between you and Mountain Helicopters Nepal when you
              use our website or book a tour.
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
              href="mailto:?subject=Terms & Conditions&body=View this document at:"
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
            These Terms and Conditions govern your use of the Mountain
            Helicopters Nepal website and services. By accessing our website or
            booking a tour, you agree to be bound by these Terms. Please read
            them carefully.
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
              href="/legal/privacy"
              className="group relative overflow-hidden rounded-lg border border-[#E5E4DC] bg-white px-8 py-7 transition-all duration-300 hover:border-[#F2B632] hover:bg-[#FBF6E9]"
            >
              <span className="mb-2 block font-manrope text-[10px] font-bold uppercase tracking-[2px] text-[#B8860B]">
                ← Previous
              </span>
              <span className="font-fraunces text-[20px] font-semibold leading-tight tracking-[-0.4px] text-[#003366]">
                Privacy Policy
              </span>
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#B8860B] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="/legal/cancellation"
              className="group relative overflow-hidden rounded-lg border border-[#E5E4DC] bg-white px-8 py-7 text-right transition-all duration-300 hover:border-[#F2B632] hover:bg-[#FBF6E9]"
            >
              <span className="mb-2 block font-manrope text-[10px] font-bold uppercase tracking-[2px] text-[#B8860B]">
                Next →
              </span>
              <span className="font-fraunces text-[20px] font-semibold leading-tight tracking-[-0.4px] text-[#003366]">
                Cancellation Policy
              </span>
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#B8860B] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}