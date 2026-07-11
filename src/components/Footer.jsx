"use client";

import { useState } from "react";

// ── Social Icons ──────────────────────────────────────────────
function FacebookIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="#0d1423" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const TOURS = [
  { label: "Everest Base Camp", href: "/tours/everest-base-camp" },
  { label: "Annapurna Base Camp", href: "/tours/annapurna-base-camp" },
  { label: "Langtang Valley", href: "/tours/langtang-valley" },
  { label: "Muktinath Pilgrimage", href: "/tours/muktinath-pilgrimage" },
  { label: "Mera Peak", href: "/tours/mera-peak" },
  { label: "Cultural Kathmandu", href: "/tours/cultural-kathmandu" },
  { label: "Heli Picnic", href: "/tours/heli-picnic" },
  { label: "Rara Lake", href: "/tours/rara-lake" },
];

const SERVICES = [
  { label: "Charter", href: "/charter" },
  { label: "Rescue", href: "/rescue" },
  { label: "Fleet", href: "/fleet" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const linkClass =
    "relative inline-block font-manrope text-[0.88rem] font-semibold text-white/80 transition hover:text-white after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-[#f5a623] after:transition-all after:duration-300 hover:after:w-full";

  const legalLinkClass =
    "font-manrope text-[0.72rem] uppercase tracking-[0.06em] text-white/40 transition hover:text-[#f5a623]";

  return (
    <footer className="w-full max-w-full overflow-hidden bg-[#0d1423] text-white">
      {/* BIG HEADING */}
      <div className="w-full px-5 pt-12 text-center sm:px-8 sm:pt-14">
        <h1 className="font-fraunces text-[clamp(2rem,9vw,5rem)] font-light leading-[1.08] tracking-[-0.01em] text-white/15">
          Above Everest. Beyond ordinary.
        </h1>
      </div>

      <div className="mx-auto my-8 h-px w-[calc(100%-40px)] max-w-[1200px] bg-[linear-gradient(90deg,transparent,#f5a623,transparent)] opacity-35 sm:my-10" />

      {/* NEWSLETTER */}
      <div className="mx-auto mb-12 w-[calc(100%-40px)] max-w-[1100px] rounded-[1.25rem] border border-white/10 bg-white/5 px-5 py-8 sm:px-8 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
        <div className="min-w-0 lg:flex-[1_1_260px]">
          <p className="mb-2 font-manrope text-[0.72rem] font-semibold lowercase tracking-[0.12em] text-[#f5a623]">
            Newsletter
          </p>

          <h3 className="mb-1 font-manrope text-[1.35rem] font-normal leading-[1.35] text-white sm:text-[1.55rem]">
            Flight news, route updates, seasonal pricing.
          </h3>

          <p className="font-manrope text-[0.82rem] text-white/40">
            No spam. Unsubscribe at any time.
          </p>
        </div>

        <div className="mt-6 flex min-w-0 flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-[1_1_360px]">
          <input
            className="h-[52px] w-full min-w-0 rounded-full border-[1.5px] border-white/15 bg-white/5 px-6 font-manrope text-[0.9rem] text-white outline-none transition placeholder:text-white/30 hover:border-[#f5a623] focus:border-[#f5a623] focus:shadow-[0_0_0_3px_rgba(245,166,35,0.15)]"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="button"
            className="group relative isolate h-[52px] w-full shrink-0 overflow-hidden rounded-full bg-[#e0ac2b] px-7 font-manrope text-[1rem] font-semibold leading-none text-white transition-colors duration-300 sm:w-auto sm:min-w-[150px]"
          >
            <span className="absolute inset-0 z-0 -translate-x-[101%] rounded-full bg-white transition-transform duration-500 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0" />
            <span className="relative z-10 group-hover:text-[#e0ac2b]">
              Subscribe
            </span>
          </button>
        </div>
      </div>

      {/* MAIN FOOTER LINKS */}
      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-10 px-5 pb-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:pb-14">
        {/* BRAND */}
        <div className="min-w-0">
          <div className="mb-5 flex items-center">
            <img
              src="/images/logo.png"
              alt="Mountain Helicopters Logo"
              className="h-auto w-[170px] max-w-full object-contain sm:w-[200px]"
            />
          </div>

          <p className="mb-5 max-w-sm font-manrope text-[0.86rem] leading-[1.75] text-white/70">
            Nepal&apos;s most experienced helicopter operator. Tours, charter,
            and rescue since 2009.
          </p>

         {/* WE ACCEPT */}
            <div className="mb-5">
              <p className="mb-3 font-manrope text-[0.9rem] font-bold text-white">
                We Accept
              </p>

              <div className="flex flex-nowrap items-center gap-3">
                <img
                  src="/images/payment/visa.svg"
                  alt="Visa"
                  className="h-[50px] w-[68px] object-contain"
                />

                <img
                  src="/images/payment/mastercard.svg"
                  alt="Mastercard"
                  className="h-[50px] w-[68px] object-contain"
                />

                <img
                  src="/images/payment/amex.svg"
                  alt="American Express"
                  className="h-[50px] w-[82px] object-contain"
                />
                <img
                  src="/images/payment/paypal.svg"
                  alt="Paypal"
                  className="h-[50px] w-[82px] object-contain"
                />
              </div>
            </div>

          <p className="mb-3 font-manrope text-[0.9rem] font-bold text-white">
            Follow Us On 
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.facebook.com/mtnhelicoptersnepal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-[#f5a623] hover:text-white"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-[#f5a623] hover:text-white"
              aria-label="TikTok"
            >
              <TiktokIcon />
            </a>

            <a
              href="https://www.instagram.com/mountainhelicoptersnepal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-[#f5a623] hover:text-white"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-[#f5a623] hover:text-white"
              aria-label="YouTube"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>

        {/* TOURS */}
        <div className="min-w-0">
          <p className="mb-5 font-manrope text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#f5a623]">
            Tours
          </p>

          <ul className="flex flex-col gap-2.5">
            {TOURS.map((tour) => (
              <li key={tour.label}>
                <a href={tour.href} className={linkClass}>
                  {tour.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div className="min-w-0">
          <p className="mb-5 font-manrope text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#f5a623]">
            Services
          </p>

          <ul className="flex flex-col gap-2.5">
            {SERVICES.map((service) => (
              <li key={service.label}>
                <a href={service.href} className={linkClass}>
                  {service.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="min-w-0">
          <p className="mb-5 font-manrope text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#f5a623]">
            Contact Us
          </p>

          <div className="mb-6 flex min-w-0 flex-col gap-2">
            <span className="font-manrope text-[0.88rem] text-white/70">
              +977-9712082949
            </span>
            <span className="font-manrope text-[0.88rem] text-white/70">
              014111051/51
            </span>
            <span className="font-manrope text-[0.88rem] text-white/70">
              014111031/32
            </span>
            <span className="break-all font-manrope text-[0.88rem] text-white/70">
              enquiry@moutainhelicoptersnepal.com
            </span>
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
            className="mt-2 inline-flex items-center gap-1 font-manrope text-[0.85rem] text-[#4db8cc] transition hover:text-[#f5a623]"
          >
            <PinIcon /> Get Direction ›
          </a>
        </div>
      </div>

      <div className="mx-auto h-px w-[calc(100%-40px)] max-w-[1100px] bg-white/10" />

      {/* BOTTOM BAR */}
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-5 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <span className="font-manrope text-[0.72rem] leading-6 tracking-[0.04em] text-white/40">
          © 2026 MOUNTAIN HELICOPTERS PVT. LTD. ALL RIGHTS RESERVED.
        </span>

        <nav className="grid grid-cols-2 gap-x-5 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-7 sm:gap-y-3 lg:justify-end">
          <a href="/legal/privacy" className={legalLinkClass}>
            Privacy
          </a>
          <a href="/legal/terms" className={legalLinkClass}>
            Terms
          </a>
          <a href="/legal/cancellation" className={legalLinkClass}>
            Cancellation
          </a>
          <a href="/legal/refund" className={legalLinkClass}>
            Refund
          </a>
          <a href="/legal/booking" className={legalLinkClass}>
            Booking Conditions
          </a>
          <a href="/legal/cookie" className={legalLinkClass}>
            Cookie Policy
          </a>
        </nav>
      </div>
    </footer>
  );
}