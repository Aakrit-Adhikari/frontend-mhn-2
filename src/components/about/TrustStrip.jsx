const items = [
  "CAAN Certified Operator",
  "17 Years of Himalayan Flying",
  "24/7 Rescue Dispatch",
  "Airbus AS 350 B3e Fleet",
  "In-house Maintenance",
  "NTB Registered",
];

export default function TrustStrip() {
  return (
    <div className="overflow-hidden border-b border-[#F2B632]/20 bg-[#001A33] py-4 text-white/80">
      <div className="flex w-max whitespace-nowrap font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.2em] [animation:marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
        {[...items, ...items, ...items].map((item, index) => (
          <span key={index} className="mx-6 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F2B632]" />
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}