"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "When to Call", href: "#when-to-call" },
  { label: "Process", href: "#process" },
  { label: "Coverage", href: "#coverage" },
  { label: "Costs", href: "#costs" },
  { label: "What's Covered", href: "#whats-covered" },
  { label: "FAQ", href: "#faq" },
  { label: "Why Us", href: "#why-us" },
];

export default function RescueDetailSubNavbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleActiveSection = () => {
      const navbarOffset = 75 + 48 + 24;
      const scrollPosition = window.scrollY + navbarOffset;

      let currentSection = "";

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);

        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          currentSection = item.href;
        }
      });

      /*
       * Keep the last section active near the bottom of the page,
       * even when its height is smaller than the viewport.
       */
      const isNearPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (isNearPageBottom) {
        const lastExistingItem = [...navItems]
          .reverse()
          .find((item) => document.querySelector(item.href));

        if (lastExistingItem) {
          currentSection = lastExistingItem.href;
        }
      }

      setActiveSection(currentSection);
    };

    handleActiveSection();

    window.addEventListener("scroll", handleActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", handleActiveSection);

    return () => {
      window.removeEventListener("scroll", handleActiveSection);
      window.removeEventListener("resize", handleActiveSection);
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

    window.history.replaceState(null, "", href);
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
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex h-full shrink-0 items-center font-manrope text-[10px] font-bold uppercase tracking-[0.24em] transition-colors duration-300 ${
                  isActive
                    ? "text-[#071825]"
                    : "text-[#647386] hover:text-[#071825]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#d99a19] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
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