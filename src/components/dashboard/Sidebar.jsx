// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import {
//   FiHome,
//   FiCalendar,
//   FiClock,
//   FiCreditCard,
//   FiHeart,
//   FiStar,
//   FiUser,
//   FiHeadphones,
//   FiSettings,
//   FiLogOut,
//   FiMenu,
//   FiX,
// } from "react-icons/fi";

// import { MdOutlineFlight } from "react-icons/md";
// import { useState } from "react";

// const menuItems = [
//   {
//     label: "Dashboard",
//     href: "/dashboard",
//     icon: FiHome,
//   },
//   {
//     label: "My Bookings",
//     href: "/dashboard/bookings",
//     icon: FiCalendar,
//   },
//   {
//     label: "Helicopter Bookings",
//     href: "/dashboard/helicopter-bookings",
//     icon: MdOutlineFlight,
//   },
//   {
//     label: "Payment History",
//     href: "/dashboard/payments",
//     icon: FiCreditCard,
//   },
//   {
//     label: "Wishlist",
//     href: "/dashboard/wishlist",
//     icon: FiHeart,
//   },
//   {
//     label: "Reviews",
//     href: "/dashboard/reviews",
//     icon: FiStar,
//   },
//   {
//     label: "Profile",
//     href: "/dashboard/profile",
//     icon: FiUser,
//   },
//   {
//     label: "Support",
//     href: "/dashboard/support",
//     icon: FiHeadphones,
//   },
//   {
//     label: "Settings",
//     href: "/dashboard/settings",
//     icon: FiSettings,
//   },
// ];

// export default function Sidebar() {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <button
//         type="button"
//         onClick={() => setIsOpen(true)}
//         className="fixed left-4 top-4 z-40 rounded-lg border bg-white p-2 shadow-sm lg:hidden"
//         aria-label="Open sidebar"
//       >
//         <FiMenu className="text-xl" />
//       </button>

//       {isOpen && (
//         <button
//           type="button"
//           onClick={() => setIsOpen(false)}
//           className="fixed inset-0 z-40 bg-black/40 lg:hidden"
//           aria-label="Close sidebar overlay"
//         />
//       )}

//       <aside
//         className={`fixed left-0 top-0 z-50 flex h-screen w-[250px] flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:translate-x-0 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex h-[82px] items-center justify-between border-b px-6">
//           <Link href="/" className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
//               <MdOutlineFlight className="text-2xl" />
//             </div>

//             <div>
//               <p className="text-lg font-bold text-blue-600">
//                 Mountain Heli
//               </p>
//               <p className="text-[11px] text-slate-500">
//                 Explore the Himalayas
//               </p>
//             </div>
//           </Link>

//           <button
//             type="button"
//             onClick={() => setIsOpen(false)}
//             className="lg:hidden"
//             aria-label="Close sidebar"
//           >
//             <FiX className="text-xl" />
//           </button>
//         </div>

//         <nav className="flex-1 overflow-y-auto px-3 py-5">
//           <div className="space-y-1">
//             {menuItems.map((item) => {
//               const Icon = item.icon;

//               const isActive =
//                 item.href === "/dashboard"
//                   ? pathname === item.href
//                   : pathname.startsWith(item.href);

//               return (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   onClick={() => setIsOpen(false)}
//                   className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
//                     isActive
//                       ? "bg-blue-50 text-blue-600"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <Icon className="text-lg" />
//                   {item.label}
//                 </Link>
//               );
//             })}
//           </div>
//         </nav>

//         <div className="border-t p-4">
//           <button
//             type="button"
//             className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
//           >
//             <FiLogOut className="text-lg" />
//             Logout
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// }


// src/components/dashboard/Sidebar.jsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  FiHome,
  FiCalendar,
  FiCreditCard,
  FiHeart,
  FiStar,
  FiUser,
  FiHeadphones,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { MdOutlineFlight } from "react-icons/md";

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: FiHome,
  },
  {
    label: "My Bookings",
    href: "/dashboard/bookings",
    icon: FiCalendar,
  },
  {
    label: "Helicopter Bookings",
    href: "/dashboard/helicopter-bookings",
    icon: MdOutlineFlight,
  },
  {
    label: "Payment History",
    href: "/dashboard/payments",
    icon: FiCreditCard,
  },
  {
    label: "Wishlist",
    href: "/dashboard/wishlist",
    icon: FiHeart,
  },
  {
    label: "Reviews",
    href: "/dashboard/reviews",
    icon: FiStar,
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: FiUser,
  },
  {
    label: "Support",
    href: "/dashboard/support",
    icon: FiHeadphones,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: FiSettings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4 z-40 rounded-xl border border-white/10 bg-[#0d1d2d] p-2.5 text-white shadow-xl lg:hidden"
        aria-label="Open sidebar"
      >
        <FiMenu className="text-xl" />
      </button>

      {isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
          aria-label="Close sidebar"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[260px] flex-col border-r border-white/[0.07] bg-[#091827] transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[86px] items-center justify-between border-b border-white/[0.07] px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5b82e] text-[#07111f] shadow-lg shadow-[#f5b82e]/10">
              <MdOutlineFlight className="text-2xl" />
            </div>

            <div>
              <p className="text-base font-bold text-white">
                Mountain Heli
              </p>

              <p className="text-[10px] uppercase tracking-[0.15em] text-[#8fa3b8]">
                Explore Nepal
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-[#8fa3b8] lg:hidden"
            aria-label="Close sidebar"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-6">
          <p className="mb-3 px-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5f7488]">
            Navigation
          </p>

          <div className="space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;

              const isActive =
                item.href === "/dashboard"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-500/10 text-blue-400"
                      : "text-[#8fa3b8] hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 h-6 w-[3px] rounded-r-full bg-[#f5b82e]" />
                  )}

                  <Icon
                    className={`text-lg ${
                      isActive
                        ? "text-[#f5b82e]"
                        : "group-hover:text-white"
                    }`}
                  />

                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-white/[0.07] p-4">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10"
          >
            <FiLogOut className="text-lg" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}