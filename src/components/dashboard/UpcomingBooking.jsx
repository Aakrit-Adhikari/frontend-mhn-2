// import Image from "next/image";
// import {
//   FiCalendar,
//   FiClock,
//   FiMoreVertical,
//   FiUsers,
// } from "react-icons/fi";

// export default function UpcomingBooking() {
//   return (
//     <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
//       <div className="mb-4 flex items-center justify-between">
//         <h2 className="font-bold">Upcoming Booking</h2>

//         <button type="button" aria-label="Booking options">
//           <FiMoreVertical />
//         </button>
//       </div>

//       <div className="grid gap-5 md:grid-cols-[260px_1fr]">
//         <div className="relative min-h-[190px] overflow-hidden rounded-xl">
//           <Image
//             src="/images/dashboard/helicopter.jpg"
//             alt="Mountain helicopter tour"
//             fill
//             className="object-cover"
//           />
//         </div>

//         <div className="flex flex-col justify-center">
//           <span className="mb-3 w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
//             Helicopter Tour
//           </span>

//           <h3 className="text-xl font-bold">
//             Everest Base Camp Helicopter Tour
//           </h3>

//           <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
//             <span className="flex items-center gap-2">
//               <FiCalendar />
//               24 May 2026
//             </span>

//             <span className="flex items-center gap-2">
//               <FiClock />
//               06:00 AM
//             </span>

//             <span className="flex items-center gap-2">
//               <FiUsers />
//               2 Passengers
//             </span>
//           </div>

//           <div className="mt-6 flex flex-wrap gap-3">
//             <button className="rounded-lg border border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
//               View Details
//             </button>

//             <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
//               Download Ticket
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// src/components/dashboard/UpcomingBooking.jsx

import Image from "next/image";

import {
  FiCalendar,
  FiClock,
  FiMoreVertical,
  FiUsers,
} from "react-icons/fi";

export default function UpcomingBooking() {
  return (
    <section className="rounded-2xl border border-white/[0.07] bg-[#0d1d2d] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="font-bold text-white">
            Upcoming Booking
          </h2>

          <p className="mt-1 text-xs text-[#71869a]">
            Your next Himalayan adventure
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-[#71869a] transition hover:bg-white/[0.05] hover:text-white"
          aria-label="Booking options"
        >
          <FiMoreVertical />
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-[260px_1fr]">
        <div className="relative min-h-[190px] overflow-hidden rounded-xl border border-white/[0.08]">
          <Image
            src="/images/dashboard/helicopter.jpg"
            alt="Everest Base Camp helicopter tour"
            fill
            className="object-cover transition duration-500 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/70 via-transparent to-transparent" />

          <span className="absolute bottom-3 left-3 rounded-lg bg-[#07111f]/75 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
            Mountain Helicopters Nepal
          </span>
        </div>

        <div className="flex flex-col justify-center">
          <span className="mb-3 w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold text-blue-400">
            Helicopter Tour
          </span>

          <h3 className="text-xl font-bold text-white">
            Everest Base Camp Helicopter Tour
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#8fa3b8]">
            Experience Everest with a direct scenic helicopter
            flight from Kathmandu.
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-[#8fa3b8]">
            <span className="flex items-center gap-2">
              <FiCalendar className="text-[#f5b82e]" />
              24 May 2026
            </span>

            <span className="flex items-center gap-2">
              <FiClock className="text-[#f5b82e]" />
              06:00 AM
            </span>

            <span className="flex items-center gap-2">
              <FiUsers className="text-[#f5b82e]" />
              2 Passengers
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-lg border border-white/[0.12] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-white/[0.05]">
              View Details
            </button>

            <button className="rounded-lg bg-[#f5b82e] px-5 py-2.5 text-xs font-bold text-[#07111f] transition hover:bg-[#ffd05a]">
              Download Ticket
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}