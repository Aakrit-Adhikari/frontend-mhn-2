"use client";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import StatCard from "./StatCard";
import UpcomingBooking from "./UpcomingBooking";
import QuickActions from "./QuickActions";
import RecentBookings from "./RecentBookings";
import SpecialOffer from "./SpecialOffer";
import PopularTours from "./PopularTours";
import Notifications from "./Notifications";

import {
  FiCalendar,
  FiCheckCircle,
  FiHeart,
  FiCreditCard,
} from "react-icons/fi";

const statistics = [
  {
    title: "Upcoming Trips",
    value: "02",
    icon: FiCalendar,
    iconStyle:
      "border border-blue-500/20 bg-blue-500/10 text-blue-400",
  },
  {
    title: "Completed Trips",
    value: "08",
    icon: FiCheckCircle,
    iconStyle:
      "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  },
  {
    title: "Wishlist",
    value: "05",
    icon: FiHeart,
    iconStyle:
      "border border-purple-500/20 bg-purple-500/10 text-purple-400",
  },
  {
    title: "Total Payments",
    value: "$4,560",
    icon: FiCreditCard,
    iconStyle:
      "border border-[#f5b82e]/20 bg-[#f5b82e]/10 text-[#f5b82e]",
  },
];

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#07111f] text-white">
      <Sidebar />

      <div className="lg:ml-[260px]">
        <Topbar />

        <main className="relative overflow-hidden p-4 sm:p-6 lg:p-8">
          <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[140px]" />

          <div className="pointer-events-none absolute bottom-0 left-20 h-[350px] w-[350px] rounded-full bg-[#f5b82e]/5 blur-[130px]" />

          <div className="relative mx-auto max-w-[1500px]">
            <section className="mb-7">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f5b82e]">
                User dashboard
              </p>

              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Welcome back, John! 👋
              </h1>

              <p className="mt-2 text-sm text-[#8fa3b8]">
                Manage your helicopter tours, bookings and Himalayan
                adventures.
              </p>
            </section>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {statistics.map((stat) => (
                <StatCard key={stat.title} {...stat} />
              ))}
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-[1.65fr_0.85fr]">
              <UpcomingBooking />
              <QuickActions />
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-[1.65fr_0.85fr]">
              <RecentBookings />
              <SpecialOffer />
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-[1.65fr_0.85fr]">
              <PopularTours />
              <Notifications />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}