// src/components/rescue/langtang/LangtangProcess.jsx

const processSteps = [
  {
    number: "01",
    title: "Emergency Call and Patient Information",
    description:
      "The Langtang helicopter rescue process begins when the patient, guide, trekking agency, hotel, family member, or insurance company contacts Mountain Helicopters Nepal. Our dispatch team records the patient’s name, condition, exact location, altitude, nationality, insurance details, and emergency contact information.",
  },
  {
    number: "02",
    title: "Verification of Location and Weather",
    description:
      "The rescue point is verified using GPS coordinates, village name, lodge, helipad, trail point, or known locations such as Kyanjin Gompa, Lama Hotel, Langtang Village, Ghoda Tabela, or Syabrubesi. Weather, visibility, wind, cloud level, terrain, and landing access are checked before departure.",
  },
  {
    number: "03",
    title: "Insurance Details or Payment Assurance",
    description:
      "For insured patients, policy information and assistance-company contacts are verified. The insurer may request a guarantee letter, case number, doctor’s recommendation, guide report, or rescue authorization. Without insurance, a direct-payment guarantee is generally required before dispatch.",
  },
  {
    number: "04",
    title: "Helicopter Dispatch",
    description:
      "After the rescue requirement, location, weather, insurance or payment details, and patient condition are confirmed, an aircraft is prepared for departure from Kathmandu or another suitable staging point. The pilot makes the final decision based on altitude, visibility, landing conditions, payload, and route safety.",
  },
  {
    number: "05",
    title: "Patient Pickup and Medical Evacuation",
    description:
      "The patient is collected from the safest available point in the Langtang region, including Kyanjin Gompa, Lama Hotel, Langtang Village, Syabrubesi, an established helipad, ridge, lodge area, or open field. If necessary, the patient is moved to a safer nearby pickup point before evacuation to Kathmandu or another suitable medical facility.",
  },
  {
    number: "06",
    title: "Documents for Insurance",
    description:
      "After evacuation, supporting documents are prepared for the patient, agency, hospital, and insurer. These may include flight details, rescue route, pickup location, evacuation time, patient information, dispatch records, invoice, and other official documents required for claim processing.",
  },
];

function ProcessCard({ number, title, description }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-[#cfd3d5] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c68a12] hover:shadow-[0_18px_45px_rgba(7,24,37,0.12)] sm:p-6">
      {/* Hover accent line */}
      <span className="absolute left-0 top-0 h-[3px] w-0 bg-[#d89212] transition-all duration-300 group-hover:w-full" />

      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b77900] font-manrope text-[10px] font-semibold text-[#9a6700] transition-all duration-300 group-hover:bg-[#b77900] group-hover:text-white">
          {number}
        </span>

        <h3 className="pt-1 font-fraunces text-[17px] font-semibold leading-[1.15] text-[#071825] transition-colors duration-300 group-hover:text-[#9b6b00] sm:text-[18px]">
          {title}
        </h3>
      </div>

      <p className="mt-5 font-manrope text-[10px] leading-[1.75] text-[#4c5963] sm:text-[11px]">
        {description}
      </p>

      {/* Bottom hover indicator */}
      <div className="mt-auto pt-6">
        <span className="block h-px w-10 bg-[#d8d9d7] transition-all duration-300 group-hover:w-full group-hover:bg-[#d89212]" />
      </div>
    </article>
  );
}

export default function LangtangProcess() {
  return (
    <section
      id="process"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[1050px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — How a Rescue Unfolds
          </p>

          <h2 className="mt-4 max-w-[1150px] font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            Our Langtang Helicopter Rescue Process
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step) => (
            <ProcessCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}