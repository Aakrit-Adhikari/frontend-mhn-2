// const safetyImage = "/images/fleet/The-heli.jpg";

// const safetyCards = [
//   {
//     title: "CAAN Certified Operations",
//     description:
//       "Every aircraft, pilot, and flight operation holds a current licence from the Civil Aviation Authority of Nepal. No exceptions.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
//         <path
//           d="M12 3l7 3v5c0 4.5-2.8 8.5-7 10-4.2-1.5-7-5.5-7-10V6l7-3Z"
//           stroke="currentColor"
//           strokeWidth="1.7"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M9 12l2 2 4-5"
//           stroke="currentColor"
//           strokeWidth="1.7"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "Daily Pre-Flight Inspections",
//     description:
//       "EASA-trained engineers inspect every airframe before every departure. A signed logbook entry is mandatory before any passenger boards.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
//         <path
//           d="M12 3v3M12 18v3M4.6 5.6l2.1 2.1M17.3 16.3l2.1 2.1M3 12h3M18 12h3M4.6 18.4l2.1-2.1M17.3 7.7l2.1-2.1"
//           stroke="currentColor"
//           strokeWidth="1.7"
//           strokeLinecap="round"
//         />
//         <circle
//           cx="12"
//           cy="12"
//           r="3.2"
//           stroke="currentColor"
//           strokeWidth="1.7"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "3,000-Hour Pilot Minimum",
//     description:
//       "Himalayan operations demand exceptional experience. Every Mountain Helicopters pilot holds minimum 3,000 hours of high-altitude flight time.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
//         <circle
//           cx="12"
//           cy="7"
//           r="3"
//           stroke="currentColor"
//           strokeWidth="1.7"
//         />
//         <path
//           d="M6 21v-2a6 6 0 0 1 12 0v2"
//           stroke="currentColor"
//           strokeWidth="1.7"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "Real-Time Weather Monitoring",
//     description:
//       "Satellite feeds, summit weather stations, and 04:00 pre-departure meteorology checks. Safety overrides schedule — always.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
//         <path
//           d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.2 4.5 4.5 0 0 0 7 18Z"
//           stroke="currentColor"
//           strokeWidth="1.7"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "Emergency Equipment Standard",
//     description:
//       "All aircraft carry first-aid kits, supplemental oxygen, emergency locator transmitters, and mountain rescue gear on every flight.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
//         <rect
//           x="4"
//           y="7"
//           width="16"
//           height="13"
//           rx="2"
//           stroke="currentColor"
//           strokeWidth="1.7"
//         />
//         <path
//           d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M12 11v5M9.5 13.5h5"
//           stroke="currentColor"
//           strokeWidth="1.7"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "International Safety Standards",
//     description:
//       "Operations aligned with ICAO Annex 6, EASA Part-CAT, and Nepal’s CAAN-OPS regulations. Externally audited every 24 months.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
//         <path
//           d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z"
//           stroke="currentColor"
//           strokeWidth="1.7"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M12 8v5M12 16h.01"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//   },
// ];

// export default function Safety() {
//   return (
//     <section className="bg-[#f5f8fb] px-6 py-20 md:px-12 lg:px-[125px] lg:py-[80px]">
//       <div className="mx-auto grid max-w-[1190px] gap-16 lg:grid-cols-[340px_1fr]">
//         <div>
//           <div className="mb-6 flex items-center gap-3">
//             <span className="h-px w-6 bg-[#f5a623]" />
//             <span className="font-manrope text-[0.62rem] font-bold uppercase tracking-[0.35em] text-[#0062b1]">
//               Safety
//             </span>
//           </div>

//           <h2 className="mb-8 font-fraunces text-[44px] font-medium leading-[0.98] tracking-[-0.04em] text-[#003366]">
//             Safety &
//             <br />
//             <span className="italic text-[#0062b1]">Maintenance</span>
//           </h2>

//           <p className="mb-8 font-manrope text-[15px] font-light leading-8 text-[#6b7886]">
//             The Himalayas demand perfection. Our safety culture is built around
//             a single principle: the standard you walk past is the standard you
//             accept.
//             <br />
//             Seventeen years. Zero major passenger incidents. The record earns
//             itself — through discipline, investment, and a team that refuses to
//             compromise.
//           </p>

//           <div className="relative h-[215px] overflow-hidden">
//             <img
//               src={safetyImage}
//               alt="Pre-flight inspection"
//               className="h-full w-full object-cover"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#071825]/60 to-transparent" />

//             <span className="absolute bottom-5 left-5 font-manrope text-[0.58rem] font-bold uppercase tracking-[0.28em] text-white/80">
//               Pre-flight Inspection
//             </span>
//           </div>
//         </div>

//         <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
//           {safetyCards.map((card) => (
//             <div
//               key={card.title}
//               className="border border-[#e1e8ef] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#f5a623] hover:shadow-[0_12px_30px_rgba(0,51,102,0.08)]"
//             >
//               <div className="mb-6 text-[#003366]">{card.icon}</div>

//               <h3 className="mb-5 font-manrope text-[15px] font-bold leading-snug text-[#003366]">
//                 {card.title}
//               </h3>

//               <p className="font-manrope text-[13px] font-light leading-7 text-[#7b8792]">
//                 {card.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }