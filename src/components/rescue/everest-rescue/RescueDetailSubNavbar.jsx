// "use client";

// const navItems = [
//   { label: "When to Call", href: "#when-to-call" },
//   { label: "Process", href: "#process" },
//   { label: "Coverage", href: "#coverage" },
//   { label: "Cost", href: "#costs" },
//   { label: "Insurance", href: "#insurance" },
//   { label: "FAQ", href: "#faq" },
// ];

// export default function RescueDetailSubNavbar() {
//   const handleScroll = (event, href) => {
//     event.preventDefault();

//     const section = document.querySelector(href);

//     if (!section) return;

//     section.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   return (
//     <nav className="sticky top-[75px] z-40 border-t border-[#071825]/10 bg-[#efeeeb]/95 backdrop-blur-md">
//       <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[80px] 2xl:px-[125px]">
//         <div className="flex h-[48px] items-center gap-7 overflow-x-auto whitespace-nowrap lg:gap-8">
//           {navItems.map((item) => (
//             <a
//               key={item.href}
//               href={item.href}
//               onClick={(event) => handleScroll(event, item.href)}
//               className="shrink-0 font-manrope text-[10px] font-bold uppercase tracking-[0.24em] text-[#647386] transition-colors duration-300 hover:text-[#071825]"
//             >
//               {item.label}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }


"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "When to Call", href: "#when-to-call" },
  { label: "Process", href: "#process" },
  { label: "Coverage", href: "#coverage" },
  { label: "Cost", href: "#costs" },
  { label: "Insurance", href: "#insurance" },
  { label: "FAQ", href: "#faq" },
];

export default function RescueDetailSubNavbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(`#${visibleSections[0].target.id}`);
        }
      },
      {
        root: null,

        // 75px main navbar + 48px subnavbar
        rootMargin: "-123px 0px -55% 0px",

        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const handleScroll = (event, href) => {
    event.preventDefault();

    const section = document.querySelector(href);

    if (!section) return;

    setActiveSection(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="sticky top-[75px] z-40 border-t border-[#071825]/10 bg-[#efeeeb]/95 backdrop-blur-md">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[80px] 2xl:px-[125px]">
        <div className="flex h-[48px] items-center gap-7 overflow-x-auto whitespace-nowrap lg:gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleScroll(event, item.href)}
                className={`group relative shrink-0 py-4 font-manrope text-[10px] font-bold uppercase tracking-[0.24em] transition-colors duration-300 ${
                  isActive
                    ? "text-[#071825]"
                    : "text-[#647386] hover:text-[#071825]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-[7px] left-0 h-[2px] bg-[#d99a19] transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}