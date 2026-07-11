"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  Search,
  UserRound,
  X,
  ShoppingCart,
} from "lucide-react";

const navLinks = [
  { label: "Tours", href: "/tours" },
  { label: "Experiences", href: "/experiences" },
  { label: "Fleet", href: "/fleet" },
  { label: "Rescue", href: "/rescue" },
  { label: "Safety Report", href: "/safety" },
];

const searchPages = [
  {
    keywords: ["experiences", "experience"],
    href: "/experiences",
  },
  {
    keywords: ["tours", "tour"],
    href: "/tours",
  },
  {
    keywords: ["everest base camp", "everest", "ebc"],
    href: "/tours/everest-base-camp",
  },
  {
    keywords: ["annapurna base camp", "annapurna", "abc"],
    href: "/tours/annapurna-base-camp",
  },
  {
    keywords: ["muktinath", "muktinath tour", "muktinath helicopter"],
    href: "/tours/muktinath",
  },
  {
    keywords: ["langtang valley", "langtang", "lv"],
    href: "/tours/langtang-valley",
  },
  {
    keywords: ["gosaikunda lake", "gosaikunda", "gk"],
    href: "/tours/gosaikunda-lake",
  },
  {
    keywords: ["fleet", "our fleet", "aircraft"],
    href: "/fleet",
  },
  {
    keywords: ["safety report", "safety"],
    href: "/safety",
  },
  {
    keywords: ["contact", "contact us", "contact form"],
    href: "/contact",
  },
  {
    keywords: ["about us", "about"],
    href: "/about",
  },
];

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const pathname = usePathname();
  const router = useRouter();
  const desktopSearchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowSearch(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      const clickedDesktopSearch =
        desktopSearchRef.current &&
        desktopSearchRef.current.contains(event.target);

      const clickedMobileSearch =
        mobileSearchRef.current &&
        mobileSearchRef.current.contains(event.target);

      if (!clickedDesktopSearch && !clickedMobileSearch) {
        setShowSearch(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const query = searchValue.trim().toLowerCase();

    if (!query) return;

    const matchedPage = searchPages.find((page) =>
      page.keywords.some((keyword) => query.includes(keyword))
    );

    if (matchedPage) {
      router.push(matchedPage.href);
    } else {
      router.push(
        `/tours?search=${encodeURIComponent(searchValue.trim())}`
      );
    }

    setShowSearch(false);
    setShowMobileMenu(false);
    setSearchValue("");
  };

  const isHomeTop = pathname === "/" && !isScrolled;
  const navTextColor = isHomeTop
    ? "text-white"
    : "text-[#071825]";

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isHomeTop
          ? "bg-transparent"
          : "bg-white/75 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-[75px] w-full max-w-[1440px] items-center justify-between px-5 py-[10px] sm:px-8 lg:px-12 xl:px-[80px] 2xl:px-[125px]">
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Link href="/" aria-label="Mountain Helicopters home">
            <Image
              src="/images/navbar-logo-clear.png"
              alt="Mountain Helicopters Nepal"
              width={150}
              height={60}
              className="h-auto w-24 sm:w-28 md:w-32 lg:w-36"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div
          className={`hidden items-center gap-5 text-[16px] font-semibold uppercase lg:flex xl:gap-6 2xl:gap-7 ${navTextColor}`}
        >
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative whitespace-nowrap transition hover:text-[#f7b51e]"
              >
                {link.label}

                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-[#f5b82e] transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop Right Side */}
        <div
          className={`hidden items-center gap-5 lg:flex xl:gap-7 2xl:gap-8 ${navTextColor}`}
        >
          <button
            type="button"
            aria-label="Menu"
            className="transition hover:text-[#f7b51e]"
          >
            <Menu size={26} strokeWidth={2.4} />
          </button>

          {/* Desktop Search */}
          <div
            ref={desktopSearchRef}
            className="flex items-center gap-3"
          >
            <form
              onSubmit={handleSearchSubmit}
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                showSearch
                  ? "w-[180px] opacity-100 xl:w-[230px] 2xl:w-[290px]"
                  : "w-0 opacity-0"
              }`}
            >
              <input
                type="search"
                placeholder="Search..."
                value={searchValue}
                onChange={(event) =>
                  setSearchValue(event.target.value)
                }
                className="h-10 w-[180px] rounded-full bg-white/95 px-5 text-[15px] text-[#333] outline-none placeholder:text-[#8c8c8c] xl:w-[230px] 2xl:w-[290px]"
              />
            </form>

            <button
              type="button"
              aria-label={
                showSearch ? "Close search" : "Open search"
              }
              onClick={() =>
                setShowSearch((previous) => !previous)
              }
              className="cursor-pointer transition hover:text-[#f7b51e]"
            >
              {showSearch ? (
                <X size={25} strokeWidth={2.4} />
              ) : (
                <Search size={25} strokeWidth={2.4} />
              )}
            </button>
          </div>

          <button
            type="button"
            aria-label="Cart"
            className="transition hover:text-[#f7b51e]"
          >
            <ShoppingCart size={25} strokeWidth={2.2} />
          </button>

          <Link
            href="/account"
            aria-label="Account"
            className="transition hover:text-[#f7b51e]"
          >
            <UserRound size={25} strokeWidth={2.2} />
          </Link>
        </div>

        {/* Mobile Buttons */}
        <div
          className={`flex items-center gap-4 transition-colors duration-300 lg:hidden ${navTextColor}`}
        >
          <button
            type="button"
            aria-label={
              showSearch ? "Close search" : "Open search"
            }
            onClick={() => {
              setShowSearch((previous) => !previous);
              setShowMobileMenu(false);
            }}
            className="transition hover:text-[#f7b51e]"
          >
            {showSearch ? (
              <X size={25} strokeWidth={2.4} />
            ) : (
              <Search size={25} strokeWidth={2.4} />
            )}
          </button>

          <button
            type="button"
            aria-label="Cart"
            className="transition hover:text-[#f7b51e]"
          >
            <ShoppingCart size={24} strokeWidth={2.2} />
          </button>

          <button
            type="button"
            aria-label="Mobile menu"
            onClick={() => {
              setShowMobileMenu((previous) => !previous);
              setShowSearch(false);
            }}
            className="transition hover:text-[#f7b51e]"
          >
            {showMobileMenu ? (
              <X size={31} />
            ) : (
              <Menu size={32} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Search */}
      <div
        ref={mobileSearchRef}
        className={`mx-auto w-full max-w-[1440px] overflow-hidden px-5 transition-all duration-500 ease-in-out sm:px-8 lg:hidden ${
          showSearch
            ? "max-h-16 pb-3 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <form onSubmit={handleSearchSubmit}>
          <input
            type="search"
            placeholder="Search Everest Base Camp, Annapurna, Muktinath..."
            value={searchValue}
            onChange={(event) =>
              setSearchValue(event.target.value)
            }
            className="h-11 w-full rounded-full bg-white/95 px-5 text-[15px] text-[#333] outline-none placeholder:text-[#8c8c8c]"
          />
        </form>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`mx-5 overflow-hidden bg-[#071825]/95 backdrop-blur-md transition-all duration-500 ease-in-out sm:mx-8 lg:hidden ${
          showMobileMenu
            ? "max-h-[520px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 text-[15px] font-semibold uppercase text-white">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setShowMobileMenu(false)}
                className="group relative border-b border-white/10 py-4 transition hover:text-[#f7b51e]"
              >
                {link.label}

                <span
                  className={`absolute bottom-2 left-0 h-0.5 bg-[#f5b82e] transition-all duration-300 ${
                    isActive
                      ? "w-20"
                      : "w-0 group-hover:w-20"
                  }`}
                />
              </Link>
            );
          })}

          <button
            type="button"
            className="mt-5 flex items-center gap-3 text-white transition hover:text-[#f7b51e]"
          >
            <ShoppingCart size={24} />
            Cart
          </button>

          <button className="mt-5 flex items-center gap-3 text-white transition hover:text-[#f7b51e]">
            <ShoppingCart size={24} />
            Cart
          </button>

          <Link
            href="/account"
            onClick={() => setShowMobileMenu(false)}
            className="mt-5 flex items-center gap-3 text-white transition hover:text-[#f7b51e]"
          >
            <UserRound size={24} />
            Account
          </Link>
        </div>
      </div>
    </header>
  );
}