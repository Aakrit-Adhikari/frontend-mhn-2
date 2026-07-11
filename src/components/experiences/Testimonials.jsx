import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I have travelled across the world, but standing at Kala Patthar changed the scale of everything I had seen before.",
    name: "James Whitfield",
    country: "Australia",
    experience: "Kala Patthar Landing",
    accent: "gold",
  },
  {
    quote:
      "My mother had waited most of her life to visit Muktinath. The helicopter made that journey possible for her.",
    name: "Priya Sharma",
    country: "India",
    experience: "Pilgrimage by Air",
    accent: "blue",
  },
  {
    quote:
      "The team managed the entire proposal quietly. She only understood what was happening when we landed.",
    name: "Daniel Kim",
    country: "South Korea",
    experience: "Celebration Flight",
    accent: "gold",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-[#E2E8F0] bg-[#F8FAFC] px-6 py-24 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-16 flex items-end gap-5">
          <span className="select-none font-fraunces text-[72px] font-semibold leading-[0.75] text-[#F2B632]/30 md:text-[110px]">
            05
          </span>

          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8860B]">
              Chapter Five · Moments We Have Made
            </p>

            <h2 className="font-fraunces text-[36px] font-semibold leading-[1.1] tracking-[-1.2px] text-[#003366] md:text-[52px]">
              In their words.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className={`rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-[0_8px_24px_rgba(0,51,102,0.1)] transition hover:shadow-[0_20px_40px_rgba(0,51,102,0.16)] ${
                testimonial.accent === "blue"
                  ? "border-t-4 border-t-[#003366]"
                  : "border-t-4 border-t-[#F2B632]"
              }`}
            >
              <Quote className="mb-5 text-[#F2B632]/40" size={34} />

              <blockquote className="mb-7 font-fraunces text-[19px] italic leading-[1.65] text-[#0A1929]/80">
                “{testimonial.quote}”
              </blockquote>

              <figcaption className="border-t border-[#E2E8F0] pt-5">
                <p className="font-bold text-[#003366]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#B8860B]">
                  {testimonial.country} · {testimonial.experience}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}