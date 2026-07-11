// const bgImage = "/images/comparison-bg.jpg";

// const comparisonRows = [
//   {
//     label: "Passenger Capacity",
//     airbus: "5 passengers",
//     bell: "6 passengers",
//   },
//   {
//     label: "Cruise Speed",
//     airbus: "222 km/h",
//     bell: "246 km/h",
//   },
//   {
//     label: "Maximum Altitude",
//     airbus: "6,300 m",
//     bell: "6,400 m",
//   },
//   {
//     label: "Flight Range",
//     airbus: "611 km",
//     bell: "630 km",
//   },
//   {
//     label: "Window Seats",
//     airbus: "All 5",
//     bell: "All 6",
//   },
//   {
//     label: "Rescue Capable",
//     airbus: "✓",
//     bell: "—",
//   },
//   {
//     label: "Charter Available",
//     airbus: "✓",
//     bell: "✓",
//   },
//   {
//     label: "Best Altitude Tours",
//     airbus: "Everest / Kailash",
//     bell: "Scenic / Group",
//   },
// ];

// export default function Comparison() {
//   return (
//     <section
//       className="relative min-h-[961px] overflow-hidden bg-[#003366] py-[100px] text-white"
//       style={{
//         backgroundImage: `linear-gradient(rgba(0, 39, 72, 0.86), rgba(0, 39, 72, 0.9)), url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="mx-auto max-w-[920px] px-6">
//         <div className="mb-16">
//           <div className="mb-6 flex items-center gap-3">
//             <span className="h-px w-6 bg-[#f5a623]" />
//             <span className="font-manrope text-[0.62rem] font-bold uppercase tracking-[0.35em] text-[#f5a623]">
//               Compare
//             </span>
//           </div>

//           <h2 className="text-center font-fraunces text-[48px] font-medium leading-[0.95] tracking-[-0.04em] text-white md:text-[56px]">
//             Side-by-side
//             <br />
//             <span className="text-white/35">comparison</span>
//           </h2>
//         </div>

//         <div className="overflow-hidden">
//           <table className="w-full border-collapse font-manrope">
//             <thead>
//               <tr className="border-b border-white/10">
//                 <th className="w-[36%] pb-8 text-left"></th>

//                 <th className="w-[32%] pb-8 text-center font-fraunces text-[22px] font-medium text-white">
//                   Airbus AS350 B3e
//                 </th>

//                 <th className="w-[32%] pb-8 text-center font-fraunces text-[22px] font-medium text-white">
//                   Bell 407GXi
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {comparisonRows.map((row) => (
//                 <tr
//                   key={row.label}
//                   className="border-b border-white/10 transition hover:bg-white/5"
//                 >
//                   <td className="py-6 text-left text-[14px] font-medium text-white">
//                     {row.label}
//                   </td>

//                   <td
//                     className={`py-6 text-center text-[15px] font-light ${
//                       row.airbus === "✓"
//                         ? "font-bold text-[#f5a623]"
//                         : "text-white/85"
//                     }`}
//                   >
//                     {row.airbus}
//                   </td>

//                   <td
//                     className={`py-6 text-center text-[15px] font-light ${
//                       row.bell === "✓"
//                         ? "font-bold text-[#f5a623]"
//                         : row.bell === "—"
//                         ? "text-white/35"
//                         : "text-white/85"
//                     }`}
//                   >
//                     {row.bell}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <p className="mt-7 font-manrope text-[12px] font-light text-white/70">
//           Hover a row to highlight. All figures are operational at standard
//           Himalayan conditions.
//         </p>
//       </div>
//     </section>
//   );
// }