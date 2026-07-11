// src/components/rescue/tilicho/TilichoProcess.jsx

const processSteps = [
  {
    number: "01",
    title: "Emergency Call and Patient Information",
    description:
      "The Tilicho helicopter rescue process begins when the patient, trekking guide, lodge owner, trekking agency, family member, or insurance company contacts our rescue team. We collect the patient’s condition, exact location, altitude, nationality, insurance details and emergency contact information.",
  },
  {
    number: "02",
    title: "Location and Weather Verification",
    description:
      "We verify the patient’s location using GPS coordinates, nearby landmarks, lodge names or known points such as Tilicho Lake, Tilicho Base Camp, Shree Kharka, Khangsar, Yak Kharka and Manang. Visibility, wind, cloud cover, route conditions and landing safety are checked before dispatch.",
  },
  {
    number: "03",
    title: "Insurance Details or Payment Assurance",
    description:
      "For insured patients, policy details and the insurance assistance-company contact are verified. The insurer may require a case number, guarantee letter, medical note, guide report or rescue approval. When insurance is unavailable, direct payment or a payment guarantee is required before dispatch.",
  },
  {
    number: "04",
    title: "Helicopter Dispatch",
    description:
      "After the rescue request, location, weather, insurance or payment details and patient condition are confirmed, a helicopter is prepared from Pokhara, Kathmandu or the nearest available base. The pilot selects the safest route based on weather, altitude, payload, landing access and operational conditions.",
  },
  {
    number: "05",
    title: "Patient Pickup and Medical Evacuation",
    description:
      "The patient is collected from the safest accessible point in the Tilicho region, including Tilicho Lake, Tilicho Base Camp, Shree Kharka, Khangsar, Yak Kharka or Manang. When direct landing is not possible, the patient is moved to the nearest secure pickup point before evacuation to Pokhara or Kathmandu.",
  },
  {
    number: "06",
    title: "Documents for Insurance",
    description:
      "After the Tilicho helicopter evacuation, supporting documents are prepared for the patient, hospital, agency and insurer. These may include flight details, rescue route, pickup location, evacuation time, patient information, dispatch records and the rescue invoice.",
  },
];

function ProcessCard({ number, title, description }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-[#cfd3d5] bg-white p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#d99a19] hover:shadow-[0_20px_50px_rgba(7,24,37,0.13)] sm:p-6">
      {/* Animated top line */}
      <span className="absolute left-0 top-0 h-[3px] w-0 bg-[#f2a10d] transition-all duration-300 group-hover:w-full" />

      {/* Subtle hover glow */}
      <span className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#f2a10d]/0 blur-3xl transition-all duration-500 group-hover:bg-[#f2a10d]/10" />

      <div className="relative flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b77900] font-manrope text-[10px] font-semibold text-[#9a6700] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#b77900] group-hover:text-white">
          {number}
        </span>

        <h3 className="pt-1 font-fraunces text-[17px] font-semibold leading-[1.15] text-[#071825] transition-colors duration-300 group-hover:text-[#9b6b00] sm:text-[18px]">
          {title}
        </h3>
      </div>

      <p className="relative mt-5 font-manrope text-[10px] leading-[1.75] text-[#4c5963] sm:text-[11px]">
        {description}
      </p>

      {/* Bottom accent */}
      <div className="relative mt-auto pt-6">
        <span className="block h-px w-10 bg-[#d8d9d7] transition-all duration-300 group-hover:w-full group-hover:bg-[#d99a19]" />
      </div>
    </article>
  );
}

export default function TilichoProcess() {
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

          <h2 className="mt-4 max-w-[1120px] font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            Our Tilicho Helicopter Rescue Process
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