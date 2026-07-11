import Image from "next/image";

export default function SpecialOffer() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-[#0d1d2d] p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-bold">Special Offers</h2>

        <button className="text-xs font-semibold text-blue-600 cursor-pointer hover:underline">
          View all
        </button>
      </div>

      <div className="relative h-40 overflow-hidden rounded-xl">
        <Image
          src="/images/dashboard/offer.jpg"
          alt="Himalayan helicopter tour offer"
          fill
          className="object-cover"
        />

        <span className="absolute left-3 top-3 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white]">
          20% OFF
        </span>
      </div>

      <h3 className="mt-4 font-bold">Himalayan Helicopter Tour</h3>

      <p className="mt-1 text-sm text-slate-500">
        Exclusive discount on selected helicopter bookings.
      </p>

      <button className="mt-4 rounded-lg border border-green-500 px-5 py-2 text-sm font-semibold text-green-600 hover:bg-green-50">
        Book Now
      </button>
    </section>
  );
}