"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Download,
  Droplets,
  Gauge,
  Gem,
  Headphones,
  HeartPulse,
  Hotel,
  House,
  Landmark,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Mountain,
  MountainSnow,
  Plane,
  Route,
  ShieldCheck,
  Star,
  Sunrise,
  Trees,
  Users,
  Waves,
  Wind,
} from "lucide-react";

const phoneNumber = "9779712082949";

const message =
  "Hi, I would like to know more about the Muktinath Pilgrimage Helicopter Tour.";

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
    label: "Muktinath Temple Elevation",
    value: "3,710 m (12,172 ft); some sources list 3,760 m (12,335 ft)",
  },
  {
    label: "Location",
    value:
      "Mustang District, Gandaki Province, Nepal, at the base of Thorong La Pass",
  },
  {
    label: "Tour Type",
    value: "Pilgrimage and Scenic Helicopter Tour",
  },
  {
    label: "Departure Point",
    value: "Tribhuvan International Airport, Kathmandu",
  },
  {
    label: "Flight Time",
    value: "Approximately 75–90 minutes one way from Kathmandu to Muktinath",
  },
  {
    label: "Total Tour Duration",
    value: "Approximately 4 hours from Kathmandu",
  },
  {
    label: "Temple Ground Time",
    value: "Approximately 60 minutes for worship, exploration, and puja",
  },
  {
    label: "Walk From Helipad to Temple",
    value:
      "Approximately 5 minutes; porter service is available for elderly visitors",
  },
  {
    label: "Helicopter Model",
    value: "CAAN-certified Airbus H125 (AS350 B3e)",
  },
  {
    label: "Maximum Passengers",
    value: "Up to 5 passengers plus 1 pilot",
  },
  {
    label: "Private Charter Price",
    value: "USD 4,800 per helicopter from Kathmandu, for up to 5 passengers",
  },
  {
    label: "Per-Person Cost",
    value: "USD 960 for 5 passengers; USD 2,400 for 2 passengers",
  },
  {
    label: "Required Permits",
    value: "Annapurna Conservation Area Permit (ACAP), included in the package",
  },
  {
    label: "Major Mountains Visible",
    value:
      "Dhaulagiri (8,167 m), Annapurna I (8,091 m), Nilgiri North (7,061 m), Nilgiri Central (6,940 m), Nilgiri South (6,839 m), Annapurna South (7,219 m), Baraha Chuli or Mt. Fang (7,647 m), and Hiunchuli (6,441 m)",
  },
  {
    label: "Major Areas Visible During Flight",
    value:
      "Kali Gandaki Gorge, Jomsom, Kagbeni, Jharkot, Marpha, Tatopani, Ghorepani, Poon Hill, and Mardi Himal",
  },
  {
    label: "Best Seasons",
    value: "Spring from February to May and autumn from September to November",
  },
  {
    label: "Tour Availability",
    value:
      "Available year-round, weather permitting, typically between 7:00 AM and 12:00 PM",
  },
];

const tourHighlights = [
  {
    icon: Landmark,
    title: "Muktinath Temple",
    description:
      "Visit the sacred Muktinath Temple at 3,710 metres, revered by both Hindus and Buddhists as the Lord of Salvation and one of the 108 Vaishnava pilgrimage sites.",
  },
  {
    icon: Droplets,
    title: "108 Sacred Water Spouts",
    description:
      "See the temple's 108 holy water spouts, where pilgrims traditionally take a purifying bath in the water flowing from sacred Himalayan springs.",
  },
  {
    icon: Gem,
    title: "Sacred Shaligram Stones",
    description:
      "Discover the sacred fossil stones found in the Kali Gandaki region, worshipped by Hindus as natural manifestations of Lord Vishnu.",
  },
  {
    icon: MountainSnow,
    title: "Mustang Valley",
    description:
      "Fly across Mustang's dramatic, dry and desert-like landscape, which forms a striking contrast with Nepal's green lower Himalayan hills.",
  },
  {
    icon: Waves,
    title: "Kali Gandaki Gorge",
    description:
      "Experience remarkable aerial views of the Kali Gandaki Gorge, with its winding river, steep valley walls and vast Himalayan surroundings.",
  },
  {
    icon: Plane,
    title: "Jomsom",
    description:
      "Fly above Jomsom, the windswept administrative centre of Mustang District, known for its mountain airport, apple orchards and Himalayan scenery.",
  },
  {
    icon: House,
    title: "Kagbeni Village",
    description:
      "See the medieval village of Kagbeni, recognised for its traditional mud-brick architecture and its position as the gateway to Upper Mustang.",
  },
  {
    icon: Hotel,
    title: "Marpha Village",
    description:
      "View Marpha's distinctive whitewashed houses, traditional lanes, apple orchards and locally produced apple products from the air.",
  },
  {
    icon: MapPin,
    title: "Jharkot and Tatopani",
    description:
      "Observe traditional mountain settlements, high-altitude landscapes and the natural hot-spring area of Tatopani along the flight route.",
  },
  {
    icon: Route,
    title: "Ghorepani and Poon Hill",
    description:
      "Fly above two of the Annapurna region's most popular trekking destinations, known for panoramic Himalayan views and busy mountain trails.",
  },
  {
    icon: Mountain,
    title: "Dhaulagiri — 8,167 m",
    description:
      "Witness the enormous south face of Dhaulagiri, the world's seventh-highest mountain and one of the most commanding peaks visible during the flight.",
  },
  {
    icon: Mountain,
    title: "Annapurna I — 8,091 m",
    description:
      "See Annapurna I, the world's tenth-highest mountain and the dominant summit of the spectacular Annapurna massif.",
  },
  {
    icon: MountainSnow,
    title: "The Nilgiri Massif",
    description:
      "View Nilgiri North at 7,061 m, Nilgiri Central at 6,940 m and Nilgiri South at 6,839 m rising above the Kali Gandaki Valley.",
  },
  {
    icon: Mountain,
    title: "Annapurna South — 7,219 m",
    description:
      "Admire the steep, highly photogenic slopes of Annapurna South, one of the most recognisable peaks in the Annapurna Himalayas.",
  },
  {
    icon: MountainSnow,
    title: "Baraha Chuli — 7,647 m",
    description:
      "See the tall and sharply pointed Baraha Chuli, also known as Mount Fang, standing near the heart of the Annapurna massif.",
  },
  {
    icon: Mountain,
    title: "Hiunchuli — 6,441 m",
    description:
      "View Hiunchuli, the massive eastern shoulder of Annapurna South and a prominent peak above the Annapurna Sanctuary.",
  },
  {
    icon: Sunrise,
    title: "Mardi Himal",
    description:
      "See the beautiful and comparatively less-explored Mardi Himal, offering a distinctive perspective of the wider Annapurna mountain range.",
  },
  {
    icon: MapPin,
    title: "Thorong La Pass",
    description:
      "Fly toward the high mountain landscape beneath Thorong La Pass, one of the most famous crossings on the Annapurna Circuit.",
  },
  {
    icon: Leaf,
    title: "Green Hills to Mustang Desert",
    description:
      "Watch the landscape transform from forested hills and rhododendron country into the dry, windswept and desert-like terrain of Mustang.",
  },
];

const bookingFacts = [
  {
    icon: Clock3,
    label: "Duration",
    value: "4 Hours",
  },
  {
    icon: Users,
    label: "Guests",
    value: "5 Passengers",
  },
  {
    icon: Mountain,
    label: "Max Altitude",
    value: "3,710 m",
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
    title: "Travellers on Short Notice",
    description:
      "A short trip to Nepal may not allow enough time for the weeks-long Annapurna Circuit trek, but it is enough to fly. The helicopter departs in the morning and completes the sacred pilgrimage and return journey in approximately 3 to 4 hours. This tour is designed for travellers with tight itineraries and limited time.",
  },
  {
    title: "Families and Groups",
    description:
      "The journey requires no strenuous trekking, making it suitable for families and multi-generational groups. Children, parents and grandparents can visit Muktinath Temple together, receive sacred darshan and experience the 108 holy water taps without completing a demanding overland journey.",
  },
  {
    title: "Creatives and Photographers",
    description:
      "Charter privately for greater control over the flight, clearer window angles and flexible ground time at the temple. The dramatic transition from lush green hills and rhododendron forests to the barren Mustang Valley, framed by the Dhaulagiri, Annapurna and Nilgiri massifs, is not simply a backdrop. It is the subject. Ask our team about photography-focused charter options.",
  },
  {
    title: "Travellers With Mobility Limitations",
    description:
      "Knee injuries, joint conditions, limited mobility or post-surgery recovery can make the long road journey or multi-day trek unsuitable. The helicopter provides direct access to the Muktinath helipad, followed by an approximately 5-minute walk to the temple. Porter assistance may also be arranged for elderly visitors and travellers who need additional support.",
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
              download="Muktinath-Pilgrimage-Itinerary.pdf"
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
                  Helicopter Tour to,
                  <br />
                  <span className="text-[#dfa11e]">Muktinath.</span>
                </h2>
              </div>

              <div className="space-y-4 font-manrope text-sm leading-7 text-[#657180]">
                <p>
                  The Muktinath Helicopter tour conducted by Mountain
                  Helicopters Nepal is arguably the most exhilarating journey in
                  Nepal. This private helicopter flight to Muktinath Temple,
                  situated at an altitude of 3,710 m (12,172 ft) in the Mustang
                  region below the Thorong-La Pass, is an incredibly fast
                  journey to one of the most revered Hindu pilgrimage sites.
                  Flying by helicopter to Muktinath saves the time and energy
                  required for a multi-day trek while providing an extraordinary
                  panoramic aerial view of the region’s imposing mountain peaks,
                  lush vegetation, and barren lands in Mustang valley.
                </p>
              </div>

              {/* QUICK FACTS */}
              <section className="mt-9">
                <h3 className="font-fraunces text-xl font-semibold text-[#0a3158]">
                  Quick Facts
                </h3>

                <p className="mt-2 max-w-4xl font-manrope text-xs leading-6 text-[#7b8490]">
                  One of the prime Hindu holy shrines in Nepal, the Muktinath
                  Temple, is the only site that can be classified as spiritual.
                  Mukti means 'salvation'. Hindus and Buddhists have the equal
                  religious attachment with this temple. Lord Vishnu, for
                  example, obtained salvation from a curse laid upon him by
                  Brinda, here. Hence, this god has been worshiped in the form
                  of Muktinath, i.e., the lord of salvation. The holy place is
                  counted amongst the 108 Vaishnava sites and the famous
                  Shaligram Stones are believed to be the holy embodiments of
                  Lord Vishnu here, here you get this type of stones at
                  reasonable prices too. People can worship him, get him blessed
                  in such rites and poojas as are conducted here, specially
                  during Rishitarpani, Ram Navami and Bijay Dashami, which are
                  some of the major Hindu festivals.
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
                    Muktinath Pilgrimage
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
                          $600
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
                        src="/images/everest-base-camp/everest-gallary3.jpg"
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
                        Everest & Khumbu Region
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
      {/* MUKTINATH ROUTE ELEVATION SECTION */}
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
                Kathmandu to Muktinath,{" "}
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
                  aria-label="Elevation profile from Kathmandu to Muktinath Temple and back"
                >
                  <defs>
                    <linearGradient
                      id="muktinathRouteArea"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#f2b321" stopOpacity="0.2" />

                      <stop offset="100%" stopColor="#f2b321" stopOpacity="0" />
                    </linearGradient>

                    <filter
                      id="muktinathPointGlow"
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

                  {/* HORIZONTAL GRID LINES */}
                  {[35, 85, 135, 185, 235].map((y) => (
                    <line
                      key={y}
                      x1="70"
                      y1={y}
                      x2="1060"
                      y2={y}
                      stroke="#24405d"
                      strokeWidth="1"
                      opacity="0.6"
                    />
                  ))}

                  {/* ELEVATION LABELS */}
                  <g
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="10"
                  >
                    <text x="28" y="39">
                      4k m
                    </text>

                    <text x="28" y="89">
                      3k m
                    </text>

                    <text x="28" y="139">
                      2k m
                    </text>

                    <text x="28" y="189">
                      1k m
                    </text>

                    <text x="28" y="239">
                      0 m
                    </text>
                  </g>

                  {/* SHADED AREA BELOW THE ROUTE */}
                  <path
                    d="
                M70 165
                L260 98
                L420 95
                L575 50
                L755 98
                L1060 165
                L1060 235
                L70 235
                Z
              "
                    fill="url(#muktinathRouteArea)"
                  />

                  {/* MAIN ROUTE LINE */}
                  <path
                    d="
                M70 165
                L260 98
                L420 95
                L575 50
                L755 98
                L1060 165
              "
                    fill="none"
                    stroke="#f2b321"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* KATHMANDU DEPARTURE */}
                  <circle
                    cx="70"
                    cy="165"
                    r="14"
                    fill="#f2b321"
                    opacity="0.12"
                    filter="url(#muktinathPointGlow)"
                  />

                  <circle cx="70" cy="165" r="6" fill="#f2b321" />

                  <text
                    x="45"
                    y="149"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    KATHMANDU
                  </text>

                  <text
                    x="54"
                    y="159"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    1,400 m
                  </text>

                  {/* JOMSOM */}
                  <circle
                    cx="260"
                    cy="98"
                    r="13"
                    fill="#f2b321"
                    opacity="0.12"
                    filter="url(#muktinathPointGlow)"
                  />

                  <circle cx="260" cy="98" r="6" fill="#f2b321" />

                  <text
                    x="238"
                    y="81"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    JOMSOM
                  </text>

                  <text
                    x="244"
                    y="91"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    2,743 m
                  </text>

                  {/* KAGBENI */}
                  <circle
                    cx="420"
                    cy="95"
                    r="13"
                    fill="#f2b321"
                    opacity="0.12"
                    filter="url(#muktinathPointGlow)"
                  />

                  <circle cx="420" cy="95" r="6" fill="#f2b321" />

                  <text
                    x="397"
                    y="78"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    KAGBENI
                  </text>

                  <text
                    x="405"
                    y="88"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    2,804 m
                  </text>

                  {/* MUKTINATH TEMPLE */}
                  <circle
                    cx="575"
                    cy="50"
                    r="16"
                    fill="#e34d55"
                    opacity="0.16"
                    filter="url(#muktinathPointGlow)"
                  />

                  <circle cx="575" cy="50" r="7" fill="#e34d55" />

                  <text
                    x="537"
                    y="24"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    MUKTINATH TEMPLE
                  </text>

                  <text
                    x="558"
                    y="36"
                    fill="#9aabc0"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    3,710 m
                  </text>

                  {/* JOMSOM RETURN */}
                  <circle
                    cx="755"
                    cy="98"
                    r="13"
                    fill="#f2b321"
                    opacity="0.12"
                    filter="url(#muktinathPointGlow)"
                  />

                  <circle cx="755" cy="98" r="6" fill="#f2b321" />

                  <text
                    x="730"
                    y="81"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    JOMSOM
                  </text>

                  <text
                    x="738"
                    y="91"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    2,743 m
                  </text>

                  {/* KATHMANDU RETURN */}
                  <circle
                    cx="1060"
                    cy="165"
                    r="14"
                    fill="#f2b321"
                    opacity="0.12"
                    filter="url(#muktinathPointGlow)"
                  />

                  <circle cx="1060" cy="165" r="6" fill="#f2b321" />

                  <text
                    x="1008"
                    y="149"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    KATHMANDU
                  </text>

                  <text
                    x="1032"
                    y="159"
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
              Illustrative elevation profile from Kathmandu at 1,400 metres
              through the Kali Gandaki Valley, Jomsom and Kagbeni to Muktinath
              Temple at 3,710 metres, followed by the return flight to
              Kathmandu.
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
