
const processSteps = [
  {
    number: "01",
    title: "Emergency Call and Patient Information",
    description:
      "When someone requires a Muktinath helicopter rescue, the patient, guide, trekking agency, hotel, relative, or insurance provider can contact Mountain Helicopters Nepal. Our 24/7 dispatch team collects the patient’s name, symptoms, current condition, altitude, exact location, nationality, insurance details, and emergency contact information. Medical advisers may also verify the patient’s condition by phone or satellite communication.",
  },
  {
    number: "02",
    title: "Location and Weather Verification",
    description:
      "The rescue point is confirmed using GPS coordinates, village name, lodge, trail point, established helipad, or a known location such as Muktinath Temple, Jomsom, Kagbeni, Marpha, or Jharkot. Visibility, wind, cloud cover, landing-area condition, aircraft access, and the latest regional weather information are reviewed before departure.",
  },
  {
    number: "03",
    title: "Insurance or Payment Confirmation",
    description:
      "For insured patients, policy details and the insurance assistance company contact are verified. A guarantee letter, case reference, doctor’s note, guide report, or rescue authorization may be required before dispatch. Uninsured cases generally require a payment guarantee or direct deposit before the operation proceeds.",
  },
  {
    number: "04",
    title: "Helicopter Dispatch",
    description:
      "Once the rescue request, location, weather, insurance or payment details, and patient requirements are confirmed, an aircraft is dispatched from Pokhara, Kathmandu, Jomsom, or another suitable staging point according to availability. The pilot makes the final safety decision based on altitude, weather, landing conditions, payload, distance, and aircraft performance.",
  },
  {
    number: "05",
    title: "Patient Pickup and Medical Evacuation",
    description:
      "The patient is collected from the safest available pickup point in the Muktinath and Lower Mustang region. Ground crew, guides, or local responders may assist with moving the patient to a secure helipad, open field, road-access point, or lodge area. Onboard oxygen, first-aid support, and medical coordination may be arranged according to the patient’s condition.",
  },
  {
    number: "06",
    title: "Documents for Insurance",
    description:
      "After evacuation, supporting records are prepared for the patient, agency, hospital, and insurance company. These may include flight details, rescue route, pickup location, evacuation time, patient information, dispatch records, rescue invoice, and other documents required for an insurance claim or hospital handover.",
  },
];

function ProcessCard({ number, title, description }) {
  return (
    <article className="flex h-full flex-col border border-[#cfd3d5] bg-white p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#b77900] font-manrope text-[10px] font-semibold text-[#9a6700]">
          {number}
        </span>

        <h3 className="pt-1 font-fraunces text-[17px] font-semibold leading-[1.15] text-[#071825] sm:text-[18px]">
          {title}
        </h3>
      </div>

      <p className="mt-5 font-manrope text-[10px] leading-[1.75] text-[#4c5963] sm:text-[11px]">
        {description}
      </p>
    </article>
  );
}

export default function MuktinathProcess() {
  return (
    <section
      id="process"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[900px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — How a Rescue Runs
          </p>

          <h2 className="mt-4 max-w-[1100px] font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            Our Muktinath Helicopter Rescue Process
          </h2>

          <div className="mt-5 max-w-[860px] space-y-5 font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[12px]">
            <p>
              Muktinath helicopter rescue operations follow a structured
              emergency procedure designed to reduce delays and establish
              whether the mission can be carried out safely. Once the first
              signs of an urgent medical or situational emergency are reported,
              our dispatch team begins verifying the patient, location,
              altitude, weather, landing possibilities, and rescue
              requirements.
            </p>

            <p>
              Insurance authorization or direct-payment coordination takes
              place alongside aircraft preparation. Depending on aircraft
              position, weather, patient condition, and the exact rescue point,
              the mission may be staged from Pokhara, Kathmandu, Jomsom, or
              another suitable operational base.
            </p>

            <p>
              After pickup, the patient may be transferred to Pokhara,
              Kathmandu, or another appropriate medical facility. Our team
              remains in contact with the caller, guide, agency, insurer, and
              receiving hospital until the evacuation handover is complete.
            </p>
          </div>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step) => (
            <ProcessCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}