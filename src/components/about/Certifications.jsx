const certifications = [
  {
    title: "CAAN",
    label: "AOC Holder",
    desc: "Civil Aviation Authority of Nepal",
  },
  {
    title: "NTB",
    label: "Registered Operator",
    desc: "Nepal Tourism Board",
  },
  {
    title: "NAAN",
    label: "Member",
    desc: "Nepal Aviation Association",
  },
  {
    title: "CAAN-M",
    label: "Cat A · B Approval",
    desc: "Maintenance Organisation",
  },
];

export default function Certifications() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="mb-12 text-center">
          <span className="font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#F2B632]">
            Certified · Registered · Recognised
          </span>

          <h2 className="mt-4 font-fraunces text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-tight tracking-[-0.015em] text-[#003366]">
            Regulated by the best.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {certifications.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#E2E8F0] bg-white p-6 text-center transition hover:border-[#F2B632] hover:shadow-[0_8px_24px_rgba(0,51,102,0.12)]"
            >
              <div className="mb-2 font-fraunces text-3xl font-bold tracking-[-0.02em] text-[#003366] md:text-4xl">
                {item.title}
              </div>

              <div className="mb-1 font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#F2B632]">
                {item.label}
              </div>

              <div className="font-manrope text-xs leading-tight text-[#6B7886]">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}