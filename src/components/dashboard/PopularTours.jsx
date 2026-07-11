import Image from "next/image";
import { FiHeart } from "react-icons/fi";

const tours = [
  {
    title: "Everest Base Camp",
    duration: "4 Hours",
    price: "$1,250",
    image: "/images/dashboard/everest.jpg",
  },
  {
    title: "Annapurna Base Camp",
    duration: "3 Hours",
    price: "$850",
    image: "/images/dashboard/annapurna.jpg",
  },
  {
    title: "Gosaikunda Lake",
    duration: "2 Hours",
    price: "$699",
    image: "/images/dashboard/gosaikunda.jpg",
  },
];

export default function PopularTours() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-[#0d1d2d] p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-bold">Popular Tours</h2>

        <button className="text-xs font-semibold text-blue-600 cursor-pointer hover:underline">
          View all
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <article
            key={tour.title}
            className="overflow-hidden rounded-xl border border-slate-200"
          >
            <div className="relative h-36">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold">{tour.title}</h3>

              <p className="mt-1 text-xs text-slate-500">
                {tour.duration}
              </p>

              <div className="mt-3 flex items-center justify-between">
                <p className="font-bold text-green-600">{tour.price}</p>

                <button
                  type="button"
                  className="text-slate-400 hover:text-red-500"
                  aria-label={`Add ${tour.title} to wishlist`}
                >
                  <FiHeart />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}