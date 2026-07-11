// // src/components/rescue/Regions.jsx

// import Image from "next/image";
// import Link from "next/link";

// const regions = [
//   {
//     title: "Everest Region",
//     places:
//       "EBC, Gorak Shep, Lobuche, Dingboche, Pheriche, Namche, Lukla",
//     response: "1h 30m",
//     cost: "USD 2,800 – 8,000",
//     image: "/images/rescue/regions/everest.jpg",
//     href: "/helicopter-rescue/everest-helicopter-rescue",
//   },
//   {
//     title: "Annapurna Region",
//     places:
//       "ABC, MBC, Chomrong, Ghandruk, Ghorepani, Poon Hill",
//     response: "1h 15m",
//     cost: "USD 2,500 – 5,000",
//     image: "/images/rescue/regions/annapurna.jpg",
//     href: "/helicopter-rescue/annapurna-helicopter-rescue",
//   },
//   {
//     title: "Muktinath & Lower Mustang",
//     places:
//       "Muktinath, Jomsom, Kagbeni, Marpha",
//     response: "1h 45m",
//     cost: "USD 3,000 – 6,000",
//     image: "/images/rescue/regions/muktinath.jpg",
//     href: "/helicopter-rescue/muktinath-helicopter-rescue",
//     featured: true,
//   },
//   {
//     title: "Langtang Region",
//     places:
//       "Kyanjin Gompa, Langtang Village, Ghoda Tabela",
//     response: "1h 15m",
//     cost: "USD 3,000 – 5,500",
//     image: "/images/rescue/regions/langtang.jpg",
//     href: "/helicopter-rescue/langtang-helicopter-rescue",
//   },
//   {
//     title: "Gosaikunda",
//     places:
//       "Lauribinayak, Cholang Pati, Gosaikunda Lake",
//     response: "1h 20m",
//     cost: "USD 3,000 – 5,000",
//     image: "/images/rescue/regions/gosaikunda.jpg",
//     href: "/helicopter-rescue/gosaikunda-helicopter-rescue",
//   },
//   {
//     title: "Tilicho",
//     places:
//       "Tilicho Base Camp, Tilicho Lake, Manang approaches",
//     response: "2h",
//     cost: "USD 4,500 – 7,500",
//     image: "/images/rescue/regions/tilicho.jpg",
//     href: "/helicopter-rescue/tilicho-helicopter-rescue",
//   },
//   {
//     title: "Mardi Himal",
//     places:
//       "Mardi Base Camp, High Camp, Low Camp",
//     response: "1h 10m",
//     cost: "USD 2,500 – 4,500",
//     image: "/images/rescue/regions/mardi-himal.jpg",
//     href: "/helicopter-rescue/mardi-himal-helicopter-rescue",
//   },
//   {
//     title: "Kala Patthar / Gorak Shep",
//     places:
//       "Kala Patthar landing point, Gorak Shep",
//     response: "1h 30m",
//     cost: "USD 4,000 – 8,500",
//     image: "/images/rescue/regions/kala-patthar.jpg",
//     href: "/helicopter-rescue/kala-patthar-helicopter-rescue",
//   },
//   {
//     title: "Gokyo Valley",
//     places:
//       "Gokyo Lakes, Cho La Pass, Machermo, Dole",
//     response: "1h 45m",
//     cost: "USD 4,000 – 7,000",
//     image: "/images/rescue/regions/gokyo.jpg",
//     href: "/helicopter-rescue/gokyo-helicopter-rescue",
//   },
//   {
//     title: "Makalu Base Camp",
//     places:
//       "Makalu Base Camp, Shipton La, Barun Valley",
//     response: "2h 15m",
//     cost: "USD 6,000 – 12,000+",
//     image: "/images/rescue/regions/makalu.jpg",
//     href: "/helicopter-rescue/makalu-helicopter-rescue",
//   },
// ];

// function RegionCard({
//   title,
//   places,
//   response,
//   cost,
//   image,
//   href,
//   featured,
// }) {
//   return (
//     <article
//       className={`group flex h-full flex-col overflow-hidden border bg-white transition duration-300 ${
//         featured
//           ? "border-[#d99a19]"
//           : "border-[#cfd3d5] hover:border-[#d99a19]"
//       }`}
//     >
//       <div className="relative aspect-[16/10] overflow-hidden bg-[#e3e0d8]">
//         <Image
//           src={image}
//           alt={`Helicopter rescue coverage — ${title}, Nepal`}
//           fill
//           className="object-cover transition duration-500 group-hover:scale-[1.03]"
//         />

//         <div className="absolute inset-0 bg-gradient-to-t from-[#071825]/20 to-transparent" />
//       </div>

//       <div className="flex flex-1 flex-col px-5 py-5">
//         <p className="font-manrope text-[8px] font-bold uppercase tracking-[0.2em] text-[#a66e00]">
//           Rescue Region
//         </p>

//         <h3 className="mt-2 font-fraunces text-[20px] font-semibold leading-[1.15] text-[#071825]">
//           {title}
//         </h3>

//         <p className="mt-2 min-h-[36px] font-manrope text-[10px] leading-[1.6] text-[#69747d]">
//           {places}
//         </p>

//         <div className="mt-5 border-t border-[#d7d9da] pt-4">
//           <div className="flex items-center justify-between gap-5">
//             <span className="font-manrope text-[8px] font-bold uppercase tracking-[0.18em] text-[#82909b]">
//               Response Typical
//             </span>

//             <span className="font-manrope text-[10px] font-semibold text-[#071825]">
//               {response}
//             </span>
//           </div>

//           <div className="mt-3 flex items-center justify-between gap-5">
//             <span className="font-manrope text-[8px] font-bold uppercase tracking-[0.18em] text-[#82909b]">
//               Cost Typical
//             </span>

//             <span className="font-manrope text-[10px] font-semibold text-[#071825]">
//               {cost}
//             </span>
//           </div>
//         </div>

//         <Link
//           href={href}
//           className={`mt-5 inline-flex w-fit items-center gap-2 border-b pb-1 font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-[#0d5ea6] transition ${
//             featured
//               ? "border-[#0d5ea6]"
//               : "border-transparent hover:border-[#0d5ea6]"
//           }`}
//         >
//           View Regional Details
//           <span aria-hidden="true">→</span>
//         </Link>
//       </div>
//     </article>
//   );
// }

// export default function Regions() {
//   return (
//     <section
//       id="regions"
//       className="scroll-mt-[125px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
//     >
//       <div className="mx-auto max-w-[1440px]">
//         <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
//           — Coverage
//         </p>

//         <h2 className="mt-3 font-fraunces text-[38px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#071825] sm:text-[48px] lg:text-[58px]">
//           Ten regions.{" "}
//           <span className="italic text-[#9b6b00]">
//             One dispatch desk.
//           </span>
//         </h2>

//         <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
//           {regions.map((region) => (
//             <RegionCard key={region.title} {...region} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// src/components/rescue/Regions.jsx

import Image from "next/image";
import Link from "next/link";

const regions = [
  {
    title: "Everest Region",
    places:
      "EBC, Gorak Shep, Lobuche, Dingboche, Pheriche, Namche, Lukla",
    response: "1h 30m",
    cost: "USD 2,800 – 8,000",
    image: "/images/rescue/regions/everest.jpg",
    href: "/rescue/everest-helicopter-rescue",
  },
  {
    title: "Annapurna Region",
    places:
      "ABC, MBC, Chomrong, Ghandruk, Ghorepani, Poon Hill",
    response: "1h 15m",
    cost: "USD 2,500 – 5,000",
    image: "/images/rescue/regions/annapurna.jpg",
    href: "/rescue/annapurna-helicopter-rescue",
  },
  {
    title: "Muktinath & Lower Mustang",
    places: "Muktinath, Jomsom, Kagbeni, Marpha",
    response: "1h 45m",
    cost: "USD 3,000 – 6,000",
    image: "/images/rescue/regions/muktinath.jpg",
    href: "/rescue/muktinath-helicopter-rescue",
    featured: true,
  },
  {
    title: "Langtang Region",
    places: "Kyanjin Gompa, Langtang Village, Ghoda Tabela",
    response: "1h 15m",
    cost: "USD 3,000 – 5,500",
    image: "/images/rescue/regions/langtang.jpg",
    href: "/rescue/langtang-helicopter-rescue",
  },
  {
    title: "Gosaikunda",
    places: "Lauribinayak, Cholang Pati, Gosaikunda Lake",
    response: "1h 20m",
    cost: "USD 3,000 – 5,000",
    image: "/images/rescue/regions/gosaikunda.jpg",
    href: "/rescue/gosaikunda-helicopter-rescue",
  },
  {
    title: "Tilicho",
    places: "Tilicho Base Camp, Tilicho Lake, Manang approaches",
    response: "2h",
    cost: "USD 4,500 – 7,500",
    image: "/images/rescue/regions/tilicho.jpg",
    href: "/rescue/tilicho-helicopter-rescue",
  },
  {
    title: "Mardi Himal",
    places: "Mardi Base Camp, High Camp, Low Camp",
    response: "1h 10m",
    cost: "USD 2,500 – 4,500",
    image: "/images/rescue/regions/mardi-himal.jpg",
    href: "/rescue/mardi-helicopter-rescue",
  },
  {
    title: "Kala Patthar / Gorak Shep",
    places: "Kala Patthar landing point, Gorak Shep",
    response: "1h 30m",
    cost: "USD 4,000 – 8,500",
    image: "/images/rescue/regions/kala-patthar.jpg",
    href: "/rescue/kalapatthar-helicopter-rescue",
  },
  {
    title: "Makalu Base Camp",
    places: "Makalu Base Camp, Shipton La, Barun Valley",
    response: "2h 15m",
    cost: "USD 6,000 – 12,000+",
    image: "/images/rescue/regions/makalu.jpg",
    href: "/rescue/makalu-helicopter-rescue",
  },
];

function RegionCard({
  title,
  places,
  response,
  cost,
  image,
  href,
  featured = false,
}) {
  return (
    <Link
      href={href}
      aria-label={`View ${title} helicopter rescue details`}
      className={`group flex h-full flex-col overflow-hidden border bg-white transition duration-300 ${
        featured
          ? "border-[#d99a19]"
          : "border-[#cfd3d5] hover:border-[#d99a19]"
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#e3e0d8]">
        <Image
          src={image}
          alt={`Helicopter rescue coverage — ${title}, Nepal`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071825]/20 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col px-5 py-5">
        <p className="font-manrope text-[8px] font-bold uppercase tracking-[0.2em] text-[#a66e00]">
          Rescue Region
        </p>

        <h3 className="mt-2 font-fraunces text-[20px] font-semibold leading-[1.15] text-[#071825]">
          {title}
        </h3>

        <p className="mt-2 min-h-[36px] font-manrope text-[10px] leading-[1.6] text-[#69747d]">
          {places}
        </p>

        <div className="mt-5 border-t border-[#d7d9da] pt-4">
          <div className="flex items-center justify-between gap-5">
            <span className="font-manrope text-[8px] font-bold uppercase tracking-[0.18em] text-[#82909b]">
              Response Typical
            </span>

            <span className="font-manrope text-[10px] font-semibold text-[#071825]">
              {response}
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between gap-5">
            <span className="font-manrope text-[8px] font-bold uppercase tracking-[0.18em] text-[#82909b]">
              Cost Typical
            </span>

            <span className="font-manrope text-[10px] font-semibold text-[#071825]">
              {cost}
            </span>
          </div>
        </div>

        <span
          className={`mt-5 inline-flex w-fit items-center gap-2 border-b pb-1 font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-[#0d5ea6] transition ${
            featured
              ? "border-[#0d5ea6]"
              : "border-transparent group-hover:border-[#0d5ea6]"
          }`}
        >
          View Regional Details

          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export default function Regions() {
  return (
    <section
      id="regions"
      className="scroll-mt-[125px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
          — Coverage
        </p>

        <h2 className="mt-3 font-fraunces text-[38px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#071825] sm:text-[48px] lg:text-[58px]">
          Ten regions.{" "}
          <span className="italic text-[#9b6b00]">
            One dispatch desk.
          </span>
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {regions.map((region) => (
            <RegionCard key={region.href} {...region} />
          ))}
        </div>
      </div>
    </section>
  );
}