"use client";

import { useEffect, useRef, useState } from "react";

const listClass =
  "mb-7 ml-1 list-disc space-y-3 pl-7 marker:text-[#B8860B] marker:font-bold [&>li]:pl-2 [&>li]:text-[17px] [&>li]:leading-[1.75]";

const legalDocs = [
  { label: "Privacy Policy", href: "/legal/privacy", number: "01" },
  { label: "Terms & Conditions", href: "/legal/terms", number: "02" },
  { label: "Cancellation Policy", href: "/legal/cancellation", number: "03" },
  { label: "Refund Policy", href: "/legal/refund", number: "04" },
  { label: "Booking Conditions", href: "/legal/booking", number: "05" },
  {
    label: "Cookie Policy",
    href: "/legal/cookie",
    number: "06",
    active: true,
  },
];

const necessaryCookies = [
  ["mhn_session", "Maintains your session and booking flow state.", "Session"],
  ["mhn_csrf", "Security token to prevent cross-site request forgery.", "Session"],
  ["cookie_consent", "Records your cookie preferences.", "1 year"],
  ["currency", "Stores your preferred display currency.", "30 days"],
];

const analyticsCookies = [
  ["_ga", "Google Analytics", "Distinguishes unique users.", "2 years"],
  ["_ga_*", "Google Analytics", "Stores session state.", "2 years"],
  ["_gid", "Google Analytics", "Distinguishes users for 24 hours.", "24 hours"],
  ["_clck", "Microsoft Clarity", "User behavior recording.", "1 year"],
  ["_clsk", "Microsoft Clarity", "Session-level recording state.", "1 day"],
];

const marketingCookies = [
  ["_fbp", "Meta Facebook", "Tracks conversion events for Meta Ads.", "3 months"],
  ["fr", "Meta Facebook", "Ad targeting and measurement.", "3 months"],
  ["IDE", "Google DoubleClick", "Google Ads conversion tracking.", "1 year"],
  ["NID", "Google", "Stores preferences for Google services.", "6 months"],
];

const functionalCookies = [
  ["language", "Stores your preferred language.", "1 year"],
  ["recent_tours", "Remembers tours you have viewed for personalization.", "30 days"],
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

function CookieTable({ headers, rows }) {
  return (
    <div className="my-8 overflow-x-auto rounded-lg border border-[#E5E4DC] bg-white">
      <table className="w-full min-w-[620px] border-collapse font-manrope text-[14px]">
        <thead>
          <tr className="border-b-2 border-[#F2B632] bg-[#FBF6E9]">
            {headers.map((header) => (
              <th
                key={header}
                className="px-[18px] py-[14px] text-left font-manrope text-[10px] font-bold uppercase tracking-[1.5px] text-[#003366]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr
              key={`${row[0]}-${index}`}
              className="border-b border-[#F3F2EC] transition hover:bg-[#FBF6E9] last:border-b-0"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`${cell}-${cellIndex}`}
                  className="px-[18px] py-[14px] align-top leading-[1.55] text-[#374151]"
                >
                  {cellIndex === 0 ? (
                    <code className="rounded bg-[#FBF6E9] px-2 py-1 font-mono text-[12px] font-semibold tracking-[-0.3px] text-[#003366]">
                      {cell}
                    </code>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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
    id: "what-are-cookies",
    number: "Section 01",
    title: "What Are Cookies?",
    content: (
      <>
        <p>
          Cookies are small text files that websites place on your device when
          you visit them. They allow websites to remember information about your
          visit, such as language, preferences, and booking flow state.
        </p>

        <p>
          We may also use similar technologies including pixels, web beacons, and
          local storage that serve comparable purposes.
        </p>
      </>
    ),
  },
  {
    id: "cookies-we-use",
    number: "Section 02",
    title: "Cookies We Use",
    content: (
      <>
        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          2.1 Strictly Necessary Cookies
        </h3>

        <p>
          These cookies are required for the website to function and cannot be
          disabled through our cookie settings.
        </p>

        <CookieTable
          headers={["Cookie", "Purpose", "Duration"]}
          rows={necessaryCookies}
        />

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          2.2 Analytics Cookies
        </h3>

        <p>
          These cookies help us understand how visitors use our website. They are
          set only with your consent.
        </p>

        <CookieTable
          headers={["Cookie", "Provider", "Purpose", "Duration"]}
          rows={analyticsCookies}
        />

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          2.3 Marketing and Advertising Cookies
        </h3>

        <p>
          These cookies help deliver relevant ads and measure marketing campaign
          effectiveness. They are set only with your consent.
        </p>

        <CookieTable
          headers={["Cookie", "Provider", "Purpose", "Duration"]}
          rows={marketingCookies}
        />

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          2.4 Functional Cookies
        </h3>

        <p>
          These cookies enable enhanced functionality and personalization, such
          as remembering your language preference.
        </p>

        <CookieTable
          headers={["Cookie", "Purpose", "Duration"]}
          rows={functionalCookies}
        />
      </>
    ),
  },
  {
    id: "third-party",
    number: "Section 03",
    title: "Third-Party Cookies",
    content: (
      <>
        <p>
          Some cookies on our website are set by third parties whose services we
          use. These may include:
        </p>

        <ul className={listClass}>
          <li>
            <strong>Google:</strong> Analytics, Ads, Maps, Fonts, and related
            website services.
          </li>
          <li>
            <strong>Meta:</strong> Facebook Pixel and advertising measurement.
          </li>
          <li>
            <strong>Microsoft:</strong> Clarity behavior analytics.
          </li>
          <li>
            <strong>YouTube:</strong> When video content is embedded.
          </li>
          <li>
            <strong>Stripe:</strong> Payment processing and fraud detection.
          </li>
        </ul>

        <p>
          Each third party has its own privacy and cookie policies. We encourage
          you to review those policies directly.
        </p>
      </>
    ),
  },
  {
    id: "manage",
    number: "Section 04",
    title: "How to Manage Cookies",
    content: (
      <>
        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          4.1 Through Our Cookie Banner
        </h3>

        <p>
          When you first visit our website, you may see a cookie banner allowing
          you to accept all cookies, reject non-essential cookies, or customize
          your preferences.
        </p>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          4.2 Through Your Browser
        </h3>

        <p>You can also manage cookies directly in your browser settings:</p>

        <ul className={listClass}>
          <li>
            <strong>Chrome:</strong> Settings → Privacy and security → Cookies
            and other site data.
          </li>
          <li>
            <strong>Safari:</strong> Preferences → Privacy → Manage Website
            Data.
          </li>
          <li>
            <strong>Firefox:</strong> Settings → Privacy & Security → Cookies
            and Site Data.
          </li>
          <li>
            <strong>Edge:</strong> Settings → Cookies and site permissions →
            Manage and delete cookies.
          </li>
        </ul>

        <h3 className="mb-4 mt-11 font-fraunces text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#003366]">
          4.3 Opt-Out Tools
        </h3>

        <ul className={listClass}>
          <li>
            <strong>Google Analytics:</strong>{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Install the Google Analytics Opt-out Browser Add-on.
            </a>
          </li>
          <li>
            <strong>Meta:</strong> Manage ad preferences in your Facebook
            account settings.
          </li>
          <li>
            <strong>Network Advertising Initiative:</strong>{" "}
            <a
              href="https://optout.networkadvertising.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit optout.networkadvertising.org.
            </a>
          </li>
        </ul>

        <div className="my-9 border-l-[3px] border-[#B8860B] bg-gradient-to-br from-[#FBF6E9] to-[#F4ECD8] px-8 py-7 font-fraunces text-[18px] italic leading-[1.7] text-[#0A1929]">
          <span className="mb-3 block font-manrope text-[10px] font-bold uppercase tracking-[2px] text-[#B8860B] not-italic">
            Effect of Disabling Cookies
          </span>
          Blocking essential cookies may affect the booking flow and prevent you
          from completing a reservation. Blocking analytics cookies has no major
          impact on your experience but limits our ability to improve the site.
        </div>
      </>
    ),
  },
  {
    id: "updates-cookies",
    number: "Section 05",
    title: "Updates to This Policy",
    content: (
      <p>
        We may update this Cookie Policy as we adopt new technologies, services,
        or respond to legal or regulatory changes. Material changes may be
        communicated through a banner or notice on the website.
      </p>
    ),
  },
  {
    id: "contact-cookies",
    number: "Section 06",
    title: "Contact Us",
    content: (
      <>
        <p>
          For questions about cookies or tracking technologies, please contact
          us:
        </p>

        <ContactCard />
      </>
    ),
  },
];

export default function Cookies() {
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
              Cookie Policy
            </h1>

            <p className="mt-6 max-w-[620px] font-fraunces text-[18px] italic leading-[1.6] text-white/70 md:text-[19px]">
              The cookies and similar technologies we use on our website, what
              they do, and how to manage your preferences.
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
              href="mailto:?subject=Cookie Policy&body=View this document at:"
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
            This Cookie Policy explains how Mountain Helicopters Nepal uses
            cookies and similar tracking technologies on our website, what types
            we use, why we use them, and how you can manage your preferences.
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
              href="/legal/booking"
              className="group relative overflow-hidden rounded-lg border border-[#E5E4DC] bg-white px-8 py-7 transition-all duration-300 hover:border-[#F2B632] hover:bg-[#FBF6E9]"
            >
              <span className="mb-2 block font-manrope text-[10px] font-bold uppercase tracking-[2px] text-[#B8860B]">
                ← Previous
              </span>
              <span className="font-fraunces text-[20px] font-semibold leading-tight tracking-[-0.4px] text-[#003366]">
                Booking Conditions
              </span>
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#B8860B] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="/legal/privacy"
              className="group relative overflow-hidden rounded-lg border border-[#E5E4DC] bg-white px-8 py-7 text-right transition-all duration-300 hover:border-[#F2B632] hover:bg-[#FBF6E9]"
            >
              <span className="mb-2 block font-manrope text-[10px] font-bold uppercase tracking-[2px] text-[#B8860B]">
                Next →
              </span>
              <span className="font-fraunces text-[20px] font-semibold leading-tight tracking-[-0.4px] text-[#003366]">
                Privacy Policy
              </span>
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#B8860B] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}