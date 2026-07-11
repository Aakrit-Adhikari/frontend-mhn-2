"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Download,
  Factory,
  Gauge,
  Headphones,
  HeartPulse,
  Hotel,
  House,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Mountain,
  MountainSnow,
  Plane,
  ShieldCheck,
  Star,
  Sunrise,
  Users,
  Waves,
} from "lucide-react";

const phoneNumber = "9779712082949";

const message =
  "Hi, I would like to know more about the Langtang Valley Helicopter Tour.";

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
    label: "Landing Zone",
    value: "Kyanjin Gompa / Kyanjin Village (3,870 m / 12,697 ft)",
  },
  {
    label: "Major Views",
    value:
      "Langtang Lirung, Ganesh Himal, Dorje Lakpa, Yala Peak and Langtang Glacier",
  },
  {
    label: "One-Way Flight Time",
    value: "Approximately 25 to 35 minutes",
  },
  {
    label: "Total Tour Duration",
    value: "Approximately 2 to 4 hours, including ground time",
  },
  {
    label: "Ground Time",
    value: "Approximately 60 to 90 minutes at Kyanjin Gompa",
  },
  {
    label: "Helicopter Model",
    value: "CAAN-certified Airbus H125 (AS350 B3e)",
  },
  {
    label: "Helicopter Capacity",
    value: "Up to 5 passengers plus 1 pilot",
  },
  {
    label: "Shared / Group Tour Price",
    value: "From USD 250–350 per person",
  },
  {
    label: "Private Charter Price",
    value: "From USD 1,400–2,000 for the full helicopter",
  },
  {
    label: "National Park Permit",
    value: "Langtang National Park Entry Permit",
  },
  {
    label: "Best Season",
    value: "March to May (spring) and September to November (autumn)",
  },
  {
    label: "Difficulty Level",
    value: "Easy, with no physical fitness required",
  },
  {
    label: "Minimum Recommended Age",
    value: "3 years, or 5 years depending on your company policy",
  },
  {
    label: "Meals Included",
    value: "Breakfast at a local teahouse in Kyanjin Gompa",
  },
  {
    label: "Travel Insurance",
    value: "Required, with minimum 4,000 m altitude coverage",
  },
];

const tourHighlights = [
  {
    icon: Landmark,
    title: "Kyanjin Gompa Monastery",
    description:
      "Visit the historic Buddhist monastery at Kyanjin Gompa, surrounded by the dramatic peaks and glaciers of the Langtang Valley.",
    className: "",
  },
  {
    icon: House,
    title: "Traditional Tamang Village",
    description:
      "Experience Kyanjin Gompa’s traditional Tamang settlement, local stone houses, Buddhist culture and peaceful Himalayan lifestyle.",
    className: "",
  },
  {
    icon: Factory,
    title: "Yak Cheese Factory",
    description:
      "Visit the local yak cheese factory and learn how traditional Himalayan cheese is produced using milk from high-altitude yak herds.",
    className: "",
  },
  {
    icon: MountainSnow,
    title: "Langtang Glacier",
    description:
      "Enjoy remarkable aerial and ground-level views of Langtang Glacier, surrounded by snow-covered mountains and rugged alpine terrain.",
    className: "",
  },
  {
    icon: Waves,
    title: "Bird’s-Eye View of Gosaikunda Lake",
    description:
      "See the sacred turquoise waters of Gosaikunda Lake from above when weather, visibility and the approved flight route permit.",
    className: "md:col-span-2",
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
    title: "Short-Trip Travellers",
    description:
      "A traditional Langtang Valley trek normally requires 7 to 9 full days of hiking through remote Himalayan terrain. For travellers spending only a few days in Kathmandu, the helicopter tour turns a week-long journey into a single morning. Depart after sunrise, land in the heart of the Langtang Himalayas, enjoy breakfast in Kyanjin Gompa, and return to Kathmandu by early afternoon.",
  },
  {
    title: "Families, Seniors and Non-Trekkers",
    description:
      "The beauty of the Himalayas should not be limited to experienced trekkers. This flight is suitable for families, senior travellers, children and guests who prefer not to complete a strenuous multi-day trek or stay in basic mountain teahouses. With no heavy luggage or prolonged hiking, passengers can experience Kyanjin Gompa at 3,870 metres, surrounded by prayer flags, grazing yaks and snow-covered peaks.",
  },
  {
    title: "Photographers, Creatives and Avid Explorers",
    description:
      "The Langtang helicopter route offers photographers and visual storytellers a rare aerial perspective. Capture the Trishuli River corridor, Shivapuri’s forested hills, alpine valleys and the dramatic ice formations of Langtang Glacier. After landing at Kyanjin Gompa, the immense face of Langtang Lirung creates an exceptional Himalayan backdrop, while the aircraft’s spacious windows and 60 to 90 minutes of ground time provide greater flexibility for photography.",
  },
  {
    title: "Culture and Nature Enthusiasts",
    description:
      "Known as the Valley of Glaciers, Langtang combines high-altitude scenery with a well-preserved Tamang and Tibetan Buddhist cultural heritage. The tour allows guests to visit Kyanjin Gompa Monastery, explore a traditional stone-built village and see the historic yak cheese factory without completing the physically demanding trek through the valley.",
  },
  {
    title: "VIP Clients and Special Occasions",
    description:
      "Celebrate an anniversary, birthday, family gathering or private corporate experience with an exclusive Himalayan flight. Enjoy breakfast at a local teahouse while looking toward Langtang Lirung, Dorje Lakpa and the surrounding peaks. A private charter creates a peaceful and memorable mountain experience shared only with your family, friends or colleagues.",
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
              download="Everest-Base-Camp-Itinerary.pdf"
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
                  Langtang Helicopter Tour
                  <br />
                  <span className="text-[#dfa11e]">
                    - Fly to Kyanjin Gompa from Kathmandu in 25-35 Minutes
                  </span>
                </h2>
              </div>

              <div className="space-y-4 font-manrope text-sm leading-7 text-[#657180]">
                <p>
                  Langtang Helicopter tour offers you the experience of Langtang
                  himalayan Ranges. The Langtang Helicopter Tour is a method
                  that allows you to have a view of the Langtang Himalayan
                  Ranges. This way you can have an overview of the Langtang
                  Himalayan Ranges as well as the beautiful mountains covered by
                  the snow. Langtang Region is also known as the Valley of
                  Glaciers.It is quite beautiful. There are lots of interesting
                  and nice things that one can have the view of in Langtang
                  Region. The view of the Langtang Region looks like a green
                  carpet with its various types of forests and vegetation on the
                  top if one looks from a high place like a helicopter. And
                  after that we will be able to have the great visibility of
                  mountains and it’s just superb to have a look of such big
                  mountains watching us always. From the Langtang Helicopter
                  Tour we will be able to enjoy the splendid view of huge
                  ivories mountains and azure blue glaciers and Tibetan highland
                  as well.
                </p>
              </div>

              {/* QUICK FACTS */}
              <section className="mt-9">
                <h3 className="font-fraunces text-xl font-semibold text-[#0a3158]">
                  Quick Facts
                </h3>

                <p className="mt-2 max-w-4xl font-manrope text-xs leading-6 text-[#7b8490]">
                  The Langtang Heli Tour offers glimpses of Gosaikunda Lake and
                  the Himalayas that cover an elevation of 5500-7300m. With a
                  shorter and sweet trip, the heli tour over this beautiful land
                  gets you all giddy while also providing you a taste of
                  nature’s marvel. Get all thrilled with an exciting helicopter
                  ride over the beautiful Gosaikunda Lake and nearby mountains.
                  Due to the presence of trees like oak, maple and pine, this
                  area enjoys nature's glory of deciduous and evergreen forest
                  alike. Rhododendron blooms are present there to grace the
                  natural charm. Mounts such as Mount Langtang, Mount Lirung,
                  Ganesh Himal, Lakpa Dorje, Yala Peak, Naya Kanga, and Mount
                  Gaurishankar all are found there adding charm to the Langtang
                  Helicopter Tour.
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
                        className={`group rounded-xl border border-slate-200/80 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#dca121]/50 hover:shadow-[0_16px_35px_rgba(8,46,82,0.08)] ${item.className}`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f4f7fa] text-[#0a4f82] transition duration-300 group-hover:bg-[#fff5d9] group-hover:text-[#c98d15]">
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
                    Langtang Valley
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

      {/* LANGTANG ROUTE ELEVATION SECTION */}
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
                Kathmandu to Kyanjin Gompa,{" "}
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
                  aria-label="Elevation profile from Kathmandu to Kyanjin Gompa and back"
                >
                  <defs>
                    <linearGradient
                      id="langtangRouteArea"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#f2b321" stopOpacity="0.2" />

                      <stop offset="100%" stopColor="#f2b321" stopOpacity="0" />
                    </linearGradient>

                    <filter
                      id="langtangPointGlow"
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

                  {/* HORIZONTAL GRID */}
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
                      5k m
                    </text>

                    <text x="28" y="89">
                      4k m
                    </text>

                    <text x="28" y="139">
                      3k m
                    </text>

                    <text x="28" y="189">
                      2k m
                    </text>

                    <text x="28" y="239">
                      1k m
                    </text>
                  </g>

                  {/* SHADED AREA */}
                  <path
                    d="
                M70 215
                L255 185
                L435 115
                L575 88
                L760 150
                L1060 215
                L1060 235
                L70 235
                Z
              "
                    fill="url(#langtangRouteArea)"
                  />

                  {/* ROUTE LINE */}
                  <path
                    d="
                M70 215
                L255 185
                L435 115
                L575 88
                L760 150
                L1060 215
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
                    cy="215"
                    r="14"
                    fill="#f2b321"
                    opacity="0.12"
                    filter="url(#langtangPointGlow)"
                  />

                  <circle cx="70" cy="215" r="6" fill="#f2b321" />

                  <text
                    x="43"
                    y="198"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    KATHMANDU
                  </text>

                  <text
                    x="54"
                    y="208"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    1,400 m
                  </text>

                  {/* DHUNCHE */}
                  <circle
                    cx="255"
                    cy="185"
                    r="13"
                    fill="#f2b321"
                    opacity="0.12"
                    filter="url(#langtangPointGlow)"
                  />

                  <circle cx="255" cy="185" r="6" fill="#f2b321" />

                  <text
                    x="232"
                    y="168"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    DHUNCHE
                  </text>

                  <text
                    x="239"
                    y="178"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    1,960 m
                  </text>

                  {/* LANGTANG VILLAGE */}
                  <circle
                    cx="435"
                    cy="115"
                    r="13"
                    fill="#f2b321"
                    opacity="0.12"
                    filter="url(#langtangPointGlow)"
                  />

                  <circle cx="435" cy="115" r="6" fill="#f2b321" />

                  <text
                    x="394"
                    y="96"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    LANGTANG VILLAGE
                  </text>

                  <text
                    x="418"
                    y="106"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    3,430 m
                  </text>

                  {/* KYANJIN GOMPA */}
                  <circle
                    cx="575"
                    cy="88"
                    r="16"
                    fill="#e34d55"
                    opacity="0.16"
                    filter="url(#langtangPointGlow)"
                  />

                  <circle cx="575" cy="88" r="7" fill="#e34d55" />

                  <text
                    x="539"
                    y="61"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    KYANJIN GOMPA
                  </text>

                  <text
                    x="558"
                    y="74"
                    fill="#9aabc0"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    3,870 m
                  </text>

                  {/* LANGTANG VALLEY RETURN */}
                  <circle
                    cx="760"
                    cy="150"
                    r="13"
                    fill="#f2b321"
                    opacity="0.12"
                    filter="url(#langtangPointGlow)"
                  />

                  <circle cx="760" cy="150" r="6" fill="#f2b321" />

                  <text
                    x="725"
                    y="133"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    LANGTANG VALLEY
                  </text>

                  <text
                    x="741"
                    y="143"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    RETURN
                  </text>

                  {/* KATHMANDU RETURN */}
                  <circle
                    cx="1060"
                    cy="215"
                    r="14"
                    fill="#f2b321"
                    opacity="0.12"
                    filter="url(#langtangPointGlow)"
                  />

                  <circle cx="1060" cy="215" r="6" fill="#f2b321" />

                  <text
                    x="1008"
                    y="198"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    KATHMANDU
                  </text>

                  <text
                    x="1032"
                    y="208"
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
              through Dhunche and Langtang Valley to Kyanjin Gompa at 3,870
              metres, followed by the return flight to Kathmandu.
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
