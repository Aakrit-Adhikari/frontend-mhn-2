// export default function StatCard({
//   title,
//   value,
//   icon: Icon,
//   iconStyle,
// }) {
//   return (
//     <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
//       <div className="flex items-center gap-4">
//         <div
//           className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconStyle}`}
//         >
//           <Icon className="text-xl" />
//         </div>

//         <div>
//           <p className="text-xs font-medium text-slate-500">{title}</p>
//           <p className="mt-1 text-2xl font-bold">{value}</p>

//           <button
//             type="button"
//             className="mt-1 text-xs font-semibold text-blue-600"
//           >
//             View all
//           </button>
//         </div>
//       </div>
//     </article>
//   );
// }


// src/components/dashboard/StatCard.jsx

import { FiArrowUpRight } from "react-icons/fi";

export default function StatCard({
  title,
  value,
  icon: Icon,
  iconStyle,
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d1d2d] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:bg-[#102337]">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/[0.02] blur-2xl" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-[#8fa3b8]">
            {title}
          </p>

          <p className="mt-3 text-2xl font-bold tracking-tight text-white">
            {value}
          </p>

          <button
            type="button"
            className="mt-3 flex items-center gap-1 text-xs font-semibold text-blue-400 transition hover:text-blue-300"
          >
            View details
            <FiArrowUpRight />
          </button>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconStyle}`}
        >
          <Icon className="text-xl" />
        </div>
      </div>
    </article>
  );
}