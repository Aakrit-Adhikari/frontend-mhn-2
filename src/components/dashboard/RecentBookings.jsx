const bookings = [
  {
    id: "MHN12345",
    package: "Everest Base Camp",
    date: "24 May 2026",
    amount: "$1,250",
    status: "Upcoming",
  },
  {
    id: "MHN12344",
    package: "Annapurna Base Camp",
    date: "10 Apr 2026",
    amount: "$850",
    status: "Completed",
  },
  {
    id: "MHN12343",
    package: "Langtang Valley",
    date: "15 Mar 2026",
    amount: "$780",
    status: "Completed",
  },
  {
    id: "MHN12342",
    package: "Gosaikunda Tour",
    date: "20 Feb 2026",
    amount: "$650",
    status: "Cancelled",
  },
];

const statusStyles = {
  Upcoming: "bg-blue-50 text-blue-600",
  Completed: "bg-green-50 text-green-600",
  Cancelled: "bg-red-50 text-red-600",
};


export default function RecentBookings() {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-[#0d1d2d]shadow-sm">
      <div className="flex items-center justify-between p-5">
        <h2 className="font-bold">Recent Bookings</h2>

        <button className="text-xs font-semibold text-blue-600 cursor-pointer hover:underline">
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-left text-sm">
          <thead className="border-y bg-slate-50 text-xs text-slate-500">
            <tr>
              <th className="px-5 py-4 font-medium">Booking ID</th>
              <th className="px-5 py-4 font-medium">Package</th>
              <th className="px-5 py-4 font-medium">Date</th>
              <th className="px-5 py-4 font-medium">Amount</th>
              <th className="px-5 py-4 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-b border-white/[0.06] transition-colors last:border-b-0 hover:bg-white/[0.025]">
                <td className="px-5 py-4 font-medium">{booking.id}</td>
                <td className="px-5 py-4">{booking.package}</td>
                <td className="px-5 py-4 text-slate-500">
                  {booking.date}
                </td>
                <td className="px-5 py-4">{booking.amount}</td>
                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium cursor-pointer ${
                      statusStyles[booking.status]
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}