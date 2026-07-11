import { Clock3, MapPin, Mountain, Wind } from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    title: "Closest legal Everest viewpoint",
    description: "2.5 km from the mountain, face-on",
  },
  {
    icon: Mountain,
    title: "5,545 m landing",
    description: "Higher than any peak in Europe",
  },
  {
    icon: Wind,
    title: "50% of sea-level oxygen",
    description: "You will feel it — that is the thrill",
  },
  {
    icon: Clock3,
    title: "15 sacred minutes",
    description: "Short by design, unforgettable by nature",
  },
];

export default function Highlights() {
  return (
    <section
      aria-label="Experience highlights"
      className="border-b border-[#F2B632]/20 bg-[#001A33] px-6 py-10 text-white lg:px-12"
    >
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((highlight) => {
          const Icon = highlight.icon;

          return (
            <div key={highlight.title} className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F2B632]/15 text-[#F2B632]">
                <Icon size={24} strokeWidth={1.8} />
              </div>

              <div>
                <h2 className="text-sm font-bold leading-tight">
                  {highlight.title}
                </h2>

                <p className="mt-1 text-xs leading-relaxed text-white/60">
                  {highlight.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}