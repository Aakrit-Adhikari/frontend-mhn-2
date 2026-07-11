"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Download,
  Gauge,
  Headphones,
  HeartPulse,
  Hotel,
  House,
  Mail,
  MapPin,
  MessageCircle,
  Mountain,
  Plane,
  ShieldCheck,
  Star,
  Sunrise,
  Trees,
  Users,
  Waves,
} from "lucide-react";

const phoneNumber = "9779712082949";

const message =
  "Hi, I would like to know more about the Gosaikunda  Helicopter Tour.";

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message,
)}`;

const tabs = [
  { label: "Overview", href: "#overview" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Review", href: "#review" },
  { label: "FAQ", href: "#faq" },
];

const quickFacts = [
  {
    label: "Departure Point",
    value: "Tribhuvan International Airport Domestic Terminal, Kathmandu",
  },
  {
    label: "Maximum Altitude",
    value: "4,380 m / 14,370 ft at Gosaikunda Lake",
  },
  {
    label: "One-Way Flight Time",
    value: "Approximately 15–20 minutes",
  },
  {
    label: "Landing Time",
    value: "Approximately 30–40 minutes at Gosaikunda",
  },
  {
    label: "Helicopter Model",
    value: "CAAN-certified Airbus H125 (AS350 B3e)",
  },
  {
    label: "Helicopter Capacity",
    value: "Up to 4 passengers plus 1 pilot",
  },
  {
    label: "Shared Tour Cost",
    value: "From USD 300–400 per person",
  },
  {
    label: "Private Charter Cost",
    value: "From USD 1,500–1,800 for the complete helicopter",
  },
  {
    label: "Best Seasons",
    value: "March–May and September–November",
  },
  {
    label: "Required Permit",
    value: "Langtang National Park Entry Permit",
  },
];

const tourHighlights = [
  {
    icon: Waves,
    title: "Sacred Gosaikunda Lakes",
    description:
      "Fly above the main Gosaikunda Lake and its sacred neighbouring lakes, including Bhairab Kunda and Saraswati Kunda.",
  },
  {
    icon: Mountain,
    title: "Langtang and Ganesh Himal Views",
    description:
      "See Langtang Lirung, Dorje Lakpa, Ganesh Himal and the surrounding Himalayan ridgelines during the flight north from Kathmandu.",
  },
  {
    icon: Trees,
    title: "Shivapuri National Park",
    description:
      "Fly above the forested hills and protected landscapes of Shivapuri National Park shortly after departing Kathmandu.",
  },
  {
    icon: House,
    title: "Traditional Tamang Villages",
    description:
      "View traditional Tamang settlements, slate-roofed houses, terraced fields and remote mountain communities across the Langtang region.",
  },
];

const bookingFacts = [
  {
    icon: Clock3,
    label: "Duration",
    value: "5 Hours",
  },
  {
    icon: Users,
    label: "Guests",
    value: "5 Passengers",
  },
  {
    icon: Mountain,
    label: "Max Altitude",
    value: "5,545 m",
  },
  {
    icon: CalendarDays,
    label: "Best Season",
    value: "Spring & Autumn",
  },
];

const whyBookItems = [
  "Best Price Guarantee",
  "No Hidden Charges",
  "Flexible Booking Options",
  "CAAN Certified Operations",
  "Professional High-Altitude Pilots",
];

const groupPricing = [
  ["1 Passenger", "USD 1,400–1,600"],
  ["2 Passengers", "USD 1,280–1,500"],
  ["3 Passengers", "USD 1,200–1,350"],
  ["4 Passengers", "USD 1,000–1,200"],
  ["5 Passengers", "USD 1,000–1,200"],
];

const designedForItems = [
  {
    title: "Gosaikunda Pilgrims",
    description:
      "Complete a pilgrimage to the sacred Gosaikunda Lake without undertaking the traditional five-to-seven-day trek. The landing normally provides around 30 to 40 minutes for a short puja, photography and quiet time beside the lake.",
  },
  {
    title: "Short-Term Travellers",
    description:
      "Travellers with only a few days in Kathmandu may not have enough time to complete the full Gosaikunda trek. The helicopter journey reaches the lake and returns to the capital within the same morning.",
  },
  {
    title: "Families, Elder Pilgrims and Private Groups",
    description:
      "The helicopter removes most of the physical demands associated with a multi-day mountain trek. Families, older pilgrims and private groups can experience Gosaikunda together, subject to medical suitability and operational conditions.",
  },
  {
    title: "Photographers and First-Time Visitors",
    description:
      "Photograph Shivapuri’s forests, Tamang villages, alpine valleys, Ganesh Himal and the Langtang mountain range from the air. A private charter provides greater flexibility for dedicated photography groups.",
  },
];

export default function OverviewSection() {
  const [activeTab, setActiveTab] = useState("");

  const smoothScrollTo = (targetY, duration = 700) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const easeInOutCubic = (time) =>
      time < 0.5 ? 4 * time * time * time : 1 - Math.pow(-2 * time + 2, 3) / 2;

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const handleTabClick = (href) => {
    setActiveTab(href);

    const section = document.querySelector(href);

    if (!section) return;

    const offset = 150;

    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY - offset;

    smoothScrollTo(sectionTop);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = 170;
      let currentTab = "";

      tabs.forEach((tab) => {
        const section = document.querySelector(tab.href);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= offset && rect.bottom > offset) {
          currentTab = tab.href;
        }
      });

      setActiveTab(currentTab);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* MINI NAVBAR */}
      <section className="sticky top-[75px] z-40 border-b border-slate-200 bg-white">
        <div className="mx-auto flex min-h-[58px] max-w-7xl items-center px-5 md:px-8">
          <nav className="flex h-full w-full items-center gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => handleTabClick(tab.href)}
                className={`flex h-[58px] shrink-0 cursor-pointer items-center border-0 px-5 font-manrope text-xs font-bold uppercase tracking-[0.14em] transition md:px-6 ${
                  activeTab === tab.href
                    ? "bg-[#f6b51f] text-[#073763]"
                    : "bg-white text-slate-500 hover:bg-slate-50 hover:text-[#073763]"
                }`}
              >
                {tab.label}
              </button>
            ))}

            <a
              href="/pdfs/itinerary_of_ebc.pdf"
              download="Gosaikunda-Base-Camp-Itinerary.pdf"
              className="group ml-1 flex h-10 shrink-0 items-center gap-2 rounded-sm bg-[#073763] px-4 font-manrope text-xs font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_20px_rgba(7,55,99,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f6b51f] hover:text-[#073763] md:px-5"
            >
              <Download
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />

              <span className="whitespace-nowrap">Itinerary PDF</span>
            </a>
          </nav>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section
        id="overview"
        className="scroll-mt-36 bg-[#fbfbfa] px-5 py-12 md:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_340px]">
            {/* LEFT CONTENT */}
            <main className="min-w-0">
              <div className="mb-7">
                <p className="mb-4 flex items-center gap-3 font-manrope text-[11px] font-bold uppercase tracking-[0.24em] text-[#ce8e17]">
                  <span className="h-px w-7 bg-[#ce8e17]" />
                  About This Flight
                </p>

                <h2 className="font-fraunces text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a3158] md:text-4xl">
                  Gosaikunda Helicopter Tour
                  <br />
                  <span className="text-[#dfa11e]">in Nepal.</span>
                </h2>
              </div>

              <div className="space-y-4 font-manrope text-sm leading-7 text-[#657180]">
                <p>
                  The Gosaikunda helicopter tour experience is an unforgettable
                  one, as you are transferred from the noisy streets of
                  Kathmandu to the alpine peaks of the Langtang Himalayas within
                  a period of less than 20 minutes. At Mountain Helicopter Tour,
                  our Airbus H125 helicopters offer you this amazing tour
                  experience every day from CAAN-certified aircraft.
                </p>

                <p>
                  Situated at approximately 4,380 m height in the district of
                  Rasuwa, this lake is the most revered and holy among the Hindu
                  pilgrims. The site is actually more than just one lake;
                  Gosaikunda is, in fact, a set of 108 alpine lakes, a number
                  important in both Hinduism and Buddhism.
                </p>

                <p>
                  While the usual trekking tour to Gosaikunda would take about 5
                  to 7 days, the helicopter tour allows you to enjoy a
                  comfortable landing at a 4,380 m altitude and gives you an
                  ample 30 to 40 minute landing period to walk around the shores
                  of the lake and bathe in the holy water or perform pujas and
                  take photographs of the mountains.
                </p>
              </div>

              {/* QUICK FACTS */}
              <section className="mt-9">
                <h3 className="font-fraunces text-xl font-semibold text-[#0a3158]">
                  Quick Facts
                </h3>

                <p className="mt-2 max-w-4xl font-manrope text-xs leading-6 text-[#7b8490]">
                  These are the trip facts of the helicopter tour to Gosaikunda
                  , which makes the helicopter trip to Gosaikunda more
                  predictable of what we are offering you in your journey.
                </p>

                <div className="mt-5 overflow-hidden rounded-xl bg-[#062b55] shadow-[0_15px_35px_rgba(6,43,85,0.12)]">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                    {quickFacts.map((fact, index) => (
                      <div
                        key={`${fact.label}-${index}`}
                        className="border-b border-white/10 p-5 sm:border-r"
                      >
                        <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.16em] text-white/50">
                          {fact.label}
                        </p>

                        <p className="mt-2 font-manrope text-xs font-semibold leading-5 text-white">
                          {fact.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* TOUR HIGHLIGHTS */}
              <section className="mt-8">
                <div className="grid gap-4 md:grid-cols-2">
                  {tourHighlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <article
                        key={item.title}
                        className="group rounded-xl border border-slate-200/80 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#dca121]/50 hover:shadow-[0_16px_35px_rgba(8,46,82,0.08)]"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f4f7fa] text-[#0a4f82] transition group-hover:bg-[#fff5d9] group-hover:text-[#c98d15]">
                            <Icon size={16} strokeWidth={1.8} />
                          </div>

                          <div>
                            <h4 className="font-manrope text-xs font-bold uppercase tracking-[0.08em] text-[#0a3158]">
                              {item.title}
                            </h4>

                            <p className="mt-2 font-manrope text-xs leading-5 text-[#7a8490]">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            </main>

            {/* SIDEBAR */}
            <aside className="space-y-5 lg:sticky lg:top-[155px] lg:self-start">
              {/* BOOKING CARD */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,48,78,0.1)]">
                <div className="h-[3px] bg-[#f3ad20]" />

                <div className="p-5">
                  <h3 className="font-fraunces text-xl font-semibold leading-tight text-[#0a3158]">
                    Gosaikunda
                    <br />
                    Helicopter Tour
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <div className="flex text-[#f3ad20]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          size={11}
                          fill="currentColor"
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>

                    <span className="font-manrope text-[10px] text-slate-400">
                      4.9 | 120+ Verified Reviews
                    </span>
                  </div>

                  <div className="mt-6 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        Starting From
                      </p>

                      <div className="mt-1 flex items-end">
                        <span className="font-fraunces text-4xl font-medium leading-none text-[#0a4e80]">
                          $1,400
                        </span>

                        <span className="mb-1 ml-1 font-manrope text-[9px] text-slate-400">
                          /person
                        </span>
                      </div>

                      <p className="mt-2 font-manrope text-[10px] text-slate-400">
                        Shared & Private Charter
                        <br />
                        Available
                      </p>
                    </div>

                    <span className="rounded-full bg-[#fff4d5] px-3 py-1.5 font-manrope text-[8px] font-bold uppercase tracking-[0.12em] text-[#b87d0d]">
                      Best Seller
                    </span>
                  </div>

                  {/* BOOKING FACTS */}
                  <div className="mt-5 grid grid-cols-2 border-y border-slate-100 py-4">
                    {bookingFacts.map((fact, index) => {
                      const Icon = fact.icon;

                      return (
                        <div
                          key={fact.label}
                          className={`flex items-start gap-2 px-2 py-3 ${
                            index % 2 === 0 ? "border-r border-slate-100" : ""
                          }`}
                        >
                          <Icon
                            size={15}
                            strokeWidth={1.8}
                            className="mt-0.5 shrink-0 text-[#0a568d]"
                          />

                          <div>
                            <p className="font-manrope text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400">
                              {fact.label}
                            </p>

                            <p className="mt-1 font-manrope text-[10px] font-bold leading-4 text-[#0a3158]">
                              {fact.value}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* WHY BOOK */}
                  <div className="mt-5">
                    <h4 className="font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a3158]">
                      Why Book With MHN
                    </h4>

                    <div className="mt-3 space-y-2.5">
                      {whyBookItems.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 font-manrope text-[10px] text-[#64707d]"
                        >
                          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                            <Check size={10} strokeWidth={2.5} />
                          </span>

                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* GROUP PRICING */}
                  <div className="mt-6">
                    <h4 className="font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a3158]">
                      Group Pricing
                    </h4>

                    <div className="mt-3">
                      {groupPricing.map(([person, price]) => (
                        <div
                          key={person}
                          className="flex items-center justify-between border-b border-slate-100 py-2 font-manrope text-[10px]"
                        >
                          <span className="text-slate-500">{person}</span>

                          <span className="font-semibold text-[#0a4775]">
                            {price}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="mt-3 font-manrope text-[9px] leading-4 text-slate-400">
                      Prices change based on group size, operating conditions
                      and available aircraft.
                    </p>
                  </div>

                  {/* BUTTONS */}
                  <div className="mt-5 space-y-2.5">
                    <a
                      href="/contact"
                      className="group flex min-h-11 w-full items-center justify-center gap-2 rounded-sm bg-[#073763] px-4 font-manrope text-[10px] font-bold uppercase tracking-[0.13em] text-white transition hover:bg-[#052947]"
                    >
                      Book Your Journey
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-11 w-full items-center justify-center gap-2 rounded-sm bg-[#25d366] px-4 font-manrope text-[10px] font-bold uppercase tracking-[0.13em] text-white transition hover:bg-[#1fb95a]"
                    >
                      <MessageCircle size={14} fill="currentColor" />
                      WhatsApp Inquiry
                    </a>
                  </div>

                  <div className="mt-5 grid grid-cols-3 border-t border-slate-100 pt-4">
                    <div className="flex flex-col items-center gap-1 font-manrope text-[8px] uppercase tracking-[0.08em] text-slate-400">
                      <ShareIcon />
                      Share Tour
                    </div>

                    <div className="flex flex-col items-center gap-1 border-x border-slate-100 font-manrope text-[8px] uppercase tracking-[0.08em] text-slate-400">
                      <HeartPulse size={13} />
                      Save
                    </div>

                    <div className="flex flex-col items-center gap-1 font-manrope text-[8px] uppercase tracking-[0.08em] text-slate-400">
                      <Headphones size={13} />
                      Easy Tour
                    </div>
                  </div>
                </div>
              </div>

              {/* EXPERT CARD */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,48,78,0.09)]">
                <div className="p-5">
                  <h4 className="font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a3158]">
                    Talk to a Himalayan Expert
                  </h4>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src="/images/Gosaikunda-base-camp/Gosaikunda-gallary3.jpg"
                        alt="Mountain Helicopters Nepal tour expert"
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-fraunces text-base font-semibold text-[#0a3158]">
                        Pemba Sherpa
                      </h3>

                      <p className="font-manrope text-[9px] font-semibold text-[#d59a1b]">
                        Senior Tour Consultant
                      </p>

                      <p className="mt-1 flex items-center gap-1 font-manrope text-[8px] text-emerald-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Usually replies within 15 min
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-1.5 border-y border-slate-100 py-4 font-manrope text-[9px]">
                    <div className="flex justify-between gap-4">
                      <span className="text-slate-400">Experience</span>
                      <span className="text-right font-semibold text-[#0a3158]">
                        10+ years in Himalayan tours
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-slate-400">Languages</span>
                      <span className="text-right font-semibold text-[#0a3158]">
                        English, Nepali, Hindi
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-slate-400">Specialty</span>
                      <span className="text-right font-semibold text-[#0a3158]">
                        Gosaikunda & Khumbu Region
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 font-manrope text-[10px] leading-5 text-slate-500">
                    Need help choosing the perfect helicopter experience? Our
                    Himalayan travel specialists are here to guide you.
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex min-h-10 w-full items-center justify-center gap-2 rounded-sm bg-[#25d366] px-4 font-manrope text-[10px] font-bold text-white transition hover:bg-[#1fb95a]"
                  >
                    <MessageCircle size={14} fill="currentColor" />
                    WhatsApp Pemba
                  </a>

                  <div className="mt-3 grid grid-cols-2">
                    <a
                      href="tel:+9779712082949"
                      className="flex min-h-9 items-center justify-center gap-2 border border-slate-200 font-manrope text-[9px] font-semibold text-[#0a3158] transition hover:bg-slate-50"
                    >
                      <Headphones size={12} />
                      Call
                    </a>

                    <a
                      href="mailto:resources.mountainlhelicopters@gmail.com"
                      className="flex min-h-9 items-center justify-center gap-2 border-y border-r border-slate-200 font-manrope text-[9px] font-semibold text-[#0a3158] transition hover:bg-slate-50"
                    >
                      <Mail size={12} />
                      Email
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white p-4 font-manrope text-[10px] font-semibold text-[#536170]">
                <ShieldCheck size={15} className="text-emerald-500" />
                Direct helicopter operator in Nepal
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* WHO THIS FLIGHT IS FOR */}
      <section className="bg-white px-5 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="flex items-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d89b1d]">
              <span className="h-px w-7 bg-[#d89b1d]" />
              Who This Flight Is For
            </p>

            <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-[#092c52] md:text-4xl">
              Who this flight is
              <br />
              <span className="text-[#e3a62a]">designed directly for.</span>
            </h2>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {designedForItems.map((item, index) => (
                <article
                  key={item.title}
                  className={`px-5 py-6 md:px-7 ${
                    index !== designedForItems.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }`}
                >
                  <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.13em] text-[#0b3d6b]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-4xl font-manrope text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROUTE ELEVATION SECTION */}
      {/* GOSAIKUNDA ROUTE ELEVATION */}
      <section className="bg-white px-5 pb-16 md:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[28px] bg-[#061c38] px-5 py-10 md:px-10 md:py-12 lg:px-14">
            {/* HEADING */}
            <div className="text-center">
              <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#e1a51f]">
                <span className="h-px w-7 bg-[#e1a51f]" />
                The Route
              </p>

              <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight text-white md:text-4xl">
                Kathmandu to Gosaikunda,{" "}
                <span className="text-[#e4ab25]">plotted.</span>
              </h2>
            </div>

            {/* ELEVATION GRAPH */}
            <div className="mt-10 overflow-x-auto">
              <div className="min-w-[820px]">
                <svg
                  viewBox="0 0 1100 270"
                  className="h-auto w-full"
                  role="img"
                  aria-label="Illustrative elevation profile from Kathmandu to Gosaikunda Lake and back"
                >
                  <defs>
                    <linearGradient
                      id="gosaikundaRouteArea"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#f2b321" stopOpacity="0.2" />

                      <stop offset="100%" stopColor="#f2b321" stopOpacity="0" />
                    </linearGradient>

                    <filter
                      id="gosaikundaPointGlow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feGaussianBlur stdDeviation="5" result="blur" />

                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* GRID LINES */}
                  {[35, 75, 115, 155, 195, 235].map((y) => (
                    <line
                      key={y}
                      x1="65"
                      y1={y}
                      x2="1060"
                      y2={y}
                      stroke="#24405d"
                      strokeWidth="1"
                      opacity="0.55"
                    />
                  ))}

                  {/* ELEVATION LABELS */}
                  <g
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="10"
                  >
                    <text x="28" y="39">
                      5k m
                    </text>

                    <text x="28" y="79">
                      4k m
                    </text>

                    <text x="28" y="119">
                      3k m
                    </text>

                    <text x="28" y="159">
                      2k m
                    </text>

                    <text x="28" y="199">
                      1k m
                    </text>

                    <text x="28" y="239">
                      0 m
                    </text>
                  </g>

                  {/* SHADED AREA */}
                  <path
                    d="
                M65 179
                L235 126
                L390 171
                L545 157
                L700 60
                L865 111
                L1060 179
                L1060 235
                L65 235
                Z
              "
                    fill="url(#gosaikundaRouteArea)"
                  />

                  {/* ROUTE LINE */}
                  <path
                    d="
                M65 179
                L235 126
                L390 171
                L545 157
                L700 60
                L865 111
                L1060 179
              "
                    fill="none"
                    stroke="#f2b321"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* KATHMANDU DEPARTURE */}
                  <circle
                    cx="65"
                    cy="179"
                    r="13"
                    fill="#f2b321"
                    opacity="0.13"
                    filter="url(#gosaikundaPointGlow)"
                  />

                  <circle cx="65" cy="179" r="6" fill="#f2b321" />

                  <text
                    x="39"
                    y="160"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    KATHMANDU
                  </text>

                  <text
                    x="48"
                    y="171"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    1,400 m
                  </text>

                  {/* SHIVAPURI */}
                  <circle
                    cx="235"
                    cy="126"
                    r="12"
                    fill="#f2b321"
                    opacity="0.13"
                    filter="url(#gosaikundaPointGlow)"
                  />

                  <circle cx="235" cy="126" r="6" fill="#f2b321" />

                  <text
                    x="205"
                    y="107"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    SHIVAPURI
                  </text>

                  <text
                    x="219"
                    y="118"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    2,732 m
                  </text>

                  {/* TRISHULI VALLEY */}
                  <circle
                    cx="390"
                    cy="171"
                    r="12"
                    fill="#f2b321"
                    opacity="0.13"
                    filter="url(#gosaikundaPointGlow)"
                  />

                  <circle cx="390" cy="171" r="6" fill="#f2b321" />

                  <text
                    x="350"
                    y="151"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    TRISHULI VALLEY
                  </text>

                  <text
                    x="372"
                    y="163"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    1,500 m
                  </text>

                  {/* DHUNCHE */}
                  <circle
                    cx="545"
                    cy="157"
                    r="12"
                    fill="#f2b321"
                    opacity="0.13"
                    filter="url(#gosaikundaPointGlow)"
                  />

                  <circle cx="545" cy="157" r="6" fill="#f2b321" />

                  <text
                    x="522"
                    y="138"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    DHUNCHE
                  </text>

                  <text
                    x="529"
                    y="149"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    1,960 m
                  </text>

                  {/* GOSAIKUNDA */}
                  <circle
                    cx="700"
                    cy="60"
                    r="16"
                    fill="#e34d55"
                    opacity="0.17"
                    filter="url(#gosaikundaPointGlow)"
                  />

                  <circle cx="700" cy="60" r="7" fill="#e34d55" />

                  <text
                    x="663"
                    y="30"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    GOSAIKUNDA LAKE
                  </text>

                  <text
                    x="682"
                    y="43"
                    fill="#9aabc0"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    4,380 m
                  </text>

                  {/* LANGTANG RIDGE RETURN */}
                  <circle
                    cx="865"
                    cy="111"
                    r="12"
                    fill="#f2b321"
                    opacity="0.13"
                    filter="url(#gosaikundaPointGlow)"
                  />

                  <circle cx="865" cy="111" r="6" fill="#f2b321" />

                  <text
                    x="823"
                    y="91"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    LANGTANG RIDGE
                  </text>

                  <text
                    x="843"
                    y="103"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    RETURN
                  </text>

                  {/* KATHMANDU RETURN */}
                  <circle
                    cx="1060"
                    cy="179"
                    r="13"
                    fill="#f2b321"
                    opacity="0.13"
                    filter="url(#gosaikundaPointGlow)"
                  />

                  <circle cx="1060" cy="179" r="6" fill="#f2b321" />

                  <text
                    x="1010"
                    y="160"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    KATHMANDU
                  </text>

                  <text
                    x="1035"
                    y="171"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    1,400 m
                  </text>
                </svg>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-5 font-manrope text-xs leading-6 text-[#7c8da1]">
              Illustrative elevation profile from Kathmandu at 1,400 metres over
              Shivapuri, the Trishuli Valley and Dhunche to Gosaikunda Lake at
              4,380 metres, followed by the return flight to Kathmandu.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function ShareIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="1.8" />

      <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />

      <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.8" />

      <path
        d="M8.6 10.5 15.4 6.6M8.6 13.5l6.8 3.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
