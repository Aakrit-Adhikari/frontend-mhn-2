import {
  FiBell,
  FiCheckCircle,
  FiPercent,
} from "react-icons/fi";

const notifications = [
  {
    title: "Your booking MHN12345 is confirmed.",
    time: "2 hours ago",
    icon: FiCheckCircle,
    style: "bg-blue-100 text-blue-600",
  },
  {
    title: "Get 20% off on selected helicopter bookings.",
    time: "1 day ago",
    icon: FiPercent,
    style: "bg-green-100 text-green-600",
  },
  {
    title: "Your payment of $1,250 was successful.",
    time: "2 days ago",
    icon: FiBell,
    style: "bg-purple-100 text-purple-600",
  },
];

export default function Notifications() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-[#0d1d2d] p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-bold">Notifications</h2>

        <button className="text-xs font-semibold text-blue-600 cursor-pointer hover:underline">
          View all
        </button>
      </div>

      <div className="divide-y">
        {notifications.map((notification) => {
          const Icon = notification.icon;

          return (
            <div
              key={notification.title}
              className="flex gap-3 py-4 first:pt-0 last:pb-0"
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${notification.style}`}
              >
                <Icon />
              </div>

              <div>
                <p className="text-sm font-medium">
                  {notification.title}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {notification.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}