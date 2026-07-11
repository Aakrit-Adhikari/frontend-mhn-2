const stats = [
  { value: "17+  Years", label: "IN THE SKY", text: "Est 2009 Kathmandu" },
  { value: "CAAN", label: "CERTIFIED OPERATOR", text: "Approved by Nepal's Civil Aviation Authority " },
  { value: "Spotless", label: "SAFETY RECORD", text: "Consistent Safety" },
  { value: "Nepal-Wide ", label: "RESCUE COVERAGE", text: "Rapid response across the Himalayas " },
  { value: "Premium", label: "HELICOPTER FLEET", text: "9N-ALD, 9N-AOP" },
];

export default function StateSection() {
  return (
    <section className="bg-[#060F1A] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 border-y border-white/5 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="border-b border-white/5 px-6 py-8 text-center sm:border-r sm:px-8 sm:py-9 sm:text-left lg:border-b-0 lg:px-8 xl:px-10"
          >
            <h3 className="font-fraunces text-2xl font-bold leading-none tracking-normal text-[#F2B632] sm:text-4xl md:text-5xl lg:text-[36px] xl:text-[29px]">
              {stat.value}
            </h3>

            <p className="mt-3 font-manrope text-[10px] font-bold uppercase tracking-[2px] text-white sm:tracking-[0.28em]">
              {stat.label}
            </p>

            <p className="mt-2 font-manrope text-xs font-normal leading-5 tracking-normal text-gray-400 sm:text-[11px] md:text-xs">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}