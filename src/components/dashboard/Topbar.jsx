// import Image from "next/image";
// import { FiBell, FiSearch } from "react-icons/fi";

// export default function Topbar() {
//   return (
//     <header className="sticky top-0 z-30 flex h-[82px] items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
//       <div className="ml-12 hidden w-full max-w-md items-center rounded-xl border border-slate-200 bg-slate-50 px-4 lg:ml-0 lg:flex">
//         <FiSearch className="text-slate-400" />

//         <input
//           type="text"
//           placeholder="Search for destinations, tours..."
//           className="w-full bg-transparent px-3 py-3 text-sm outline-none"
//         />
//       </div>

//       <div className="ml-auto flex items-center gap-4">
//         <button
//           type="button"
//           className="relative rounded-full p-2 transition hover:bg-slate-100"
//           aria-label="Notifications"
//         >
//           <FiBell className="text-xl text-slate-700" />

//           <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] text-white">
//             3
//           </span>
//         </button>

//         <div className="flex items-center gap-3">
//           <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
//             <Image
//               src="/images/dashboard/user.jpg"
//               alt="John Doe"
//               fill
//               className="object-cover"
//             />
//           </div>

//           <div className="hidden sm:block">
//             <p className="text-sm font-semibold">John Doe</p>
//             <p className="text-xs text-slate-500">Traveller</p>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }


// src/components/dashboard/Topbar.jsx

import Image from "next/image";
import { FiBell, FiChevronDown, FiSearch } from "react-icons/fi";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-[86px] items-center justify-between border-b border-white/[0.07] bg-[#07111f]/90 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="ml-12 hidden w-full max-w-md items-center rounded-xl border border-white/[0.08] bg-[#0d1d2d] px-4 transition focus-within:border-blue-500/50 lg:ml-0 lg:flex">
        <FiSearch className="text-[#71869a]" />

        <input
          type="text"
          placeholder="Search destinations, bookings, tours..."
          className="w-full bg-transparent px-3 py-3.5 text-sm text-white outline-none placeholder:text-[#617589]"
        />
      </div>

      <div className="ml-auto flex items-center gap-3 sm:gap-5">
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-[#0d1d2d] text-[#b4c2cf] transition hover:border-blue-500/30 hover:text-white"
          aria-label="Notifications"
        >
          <FiBell className="text-lg cursor-pointer" />

          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#07111f] bg-red-500 px-1 text-[9px] font-bold text-white">
            3
          </span>
        </button>

        <button
          type="button"
          className="flex items-center gap-3 rounded-xl border border-transparent p-1.5 transition hover:border-white/[0.08] hover:bg-white/[0.03]"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-[#13283b]">
            <Image
              src="/images/dashboard/user.jpg"
              alt="John Doe"
              fill
              className="object-cover"
            />
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-white">
              John Doe
            </p>

            <p className="text-[11px] text-[#71869a]">
              Traveller
            </p>
          </div>

          <FiChevronDown className="hidden text-[#71869a] sm:block cursor-pointer" />
        </button>
      </div>
    </header>
  );
}