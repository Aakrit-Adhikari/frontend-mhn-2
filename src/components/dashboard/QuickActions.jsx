import {
  FiArrowUpRight,
  FiCalendar,
  FiHeadphones,
} from "react-icons/fi";

import { MdOutlineFlight } from "react-icons/md";

const actions = [
  {
    title: "Book Tour",
    description: "Explore helicopter tours",
    icon: FiCalendar,
    style:
      "border-blue-500/15 bg-blue-500/[0.07] text-blue-400 hover:bg-blue-500/10",
  },
  {
    title: "Book Helicopter",
    description: "Private charter flights",
    icon: MdOutlineFlight,
    style:
      "border-emerald-500/15 bg-emerald-500/[0.07] text-emerald-400 hover:bg-emerald-500/10",
  },
  {
    title: "Contact Support",
    description: "Speak with our team",
    icon: FiHeadphones,
    style:
      "border-[#f5b82e]/15 bg-[#f5b82e]/[0.07] text-[#f5b82e] hover:bg-[#f5b82e]/10",
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-2xl border border-white/[0.07] bg-[#0d1d2d] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
      <div className="mb-5">
        <h2 className="font-bold text-white">Quick Actions</h2>

        <p className="mt-1 text-xs text-[#71869a]">
          Manage your travel quickly
        </p>
      </div>

      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              type="button"
              key={action.title}
              className={`group flex w-full items-center justify-between rounded-xl border p-4 text-left transition duration-200 ${action.style}`}
            >
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#07111f]/50">
                  <Icon className="text-lg" />
                </span>

                <span>
                  <span className="block text-sm font-semibold text-white">
                    {action.title}
                  </span>

                  <span className="mt-1 block text-[11px] text-[#71869a]">
                    {action.description}
                  </span>
                </span>
              </span>

              <FiArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          );
        })}
      </div>
    </section>
  );
}