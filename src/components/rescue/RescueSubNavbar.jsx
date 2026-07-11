"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "When to Call", href: "#when-to-call" },
  { label: "Process", href: "#process" },
  { label: "Coverage", href: "#coverage" },
  { label: "Costs", href: "#costs" },
  { label: "Insurance", href: "#insurance" },
  { label: "Fleet", href: "#fleet" },
  { label: "Regions", href: "#regions" },
  { label: "FAQ", href: "#faq" },
];

export default function RescueSubNavbar() {
  const [activeSection, setActiveSection] = useState("");
  const navContainerRef = useRef(null);
  const linkRefs = useRef({});

  useEffect(() => {
    let frameId;

    const updateActiveSection = () => {
      const sectionOffset = 75 + 50 + 24;
      const currentPosition = window.scrollY + sectionOffset;

      const existingItems = navItems.filter((item) =>
        document.querySelector(item.href),
      );

      let currentSection = "";

      existingItems.forEach((item) => {
        const section = document.querySelector(item.href);

        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
          currentPosition >= sectionTop &&
          currentPosition < sectionBottom
        ) {
          currentSection = item.href;
        }
      });

      const isNearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (isNearBottom && existingItems.length > 0) {
        currentSection = existingItems[existingItems.length - 1].href;
      }

      if (!currentSection && existingItems.length > 0) {
        const firstSection = document.querySelector(existingItems[0].href);

        if (
          firstSection &&
          currentPosition >= firstSection.offsetTop
        ) {
          currentSection = existingItems[0].href;
        }
      }

      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!activeSection) return;

    const activeLink = linkRefs.current[activeSection];
    const navContainer = navContainerRef.current;

    if (!activeLink || !navContainer) return;

    const linkLeft = activeLink.offsetLeft;
    const linkWidth = activeLink.offsetWidth;
    const containerWidth = navContainer.clientWidth;

    navContainer.scrollTo({
      left: linkLeft - containerWidth / 2 + linkWidth / 2,
      behavior: "smooth",
    });
  }, [activeSection]);

  const handleNavigation = (event, href) => {
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
        <div
          ref={navContainerRef}
          className="flex h-[50px] items-center gap-7 overflow-x-auto whitespace-nowrap scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-8"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.href}
                ref={(element) => {
                  linkRefs.current[item.href] = element;
                }}
                href={item.href}
                onClick={(event) =>
                  handleNavigation(event, item.href)
                }
                aria-current={isActive ? "location" : undefined}
                className={`group relative flex h-full shrink-0 items-center font-manrope text-[10px] font-bold uppercase tracking-[0.24em] transition-colors duration-300 ${
                  isActive
                    ? "text-[#071825]"
                    : "text-[#647386] hover:text-[#071825]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#d99a19] transition-all duration-300 ${
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