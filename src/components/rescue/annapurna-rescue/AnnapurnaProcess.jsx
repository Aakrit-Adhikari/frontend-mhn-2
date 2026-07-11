// src/components/rescue/annapurna/AnnapurnaProcess.jsx

const processSteps = [
  {
    number: "01",
    title: "Emergency Call and Patient Information",
    description:
      "When a rescue call comes from a patient, guide, trekking company, hotel, relative, or insurance company, Mountain Helicopters Nepal begins the Annapurna helicopter rescue operation. We gather the patient’s name, condition, altitude, location, nationality, insurance provider, and emergency contact person.",
  },
  {
    number: "02",
    title: "Location and Weather Verification",
    description:
      "The rescue location is identified using GPS coordinates, village name, lodge, helipad, trail point, or a known destination such as Annapurna Base Camp, Machhapuchhre Base Camp, Deurali, Thorong High Camp, or another established point. Weather checks include visibility, wind speed, cloud altitude, landing-site security, and the latest forecast.",
  },
  {
    number: "03",
    title: "Insurance or Payment Confirmation",
    description:
      "For insured patients, policy details and the insurance assistance company contact are confirmed. Medical records, doctor’s notes, guide reports, or rescue approval may be requested. For uninsured patients, a payment guarantee or direct deposit may be required before dispatch.",
  },
  {
    number: "04",
    title: "Helicopter Dispatch",
    description:
      "Once the destination, weather, insurance or payment details, and rescue requirements are confirmed, an aircraft is dispatched from Pokhara or Kathmandu according to availability. The pilot makes the final safety decision based on altitude, distance, weather, landing conditions, aircraft performance, and payload.",
  },
  {
    number: "05",
    title: "Patient Pickup and Medical Evacuation",
    description:
      "The patient is collected from the safest available pickup point in the Annapurna region, including Annapurna Base Camp, Machhapuchhre Base Camp, Thorong La approaches, established helipads, open fields, or nearby lodges. The patient is then transferred to Pokhara or Kathmandu for medical treatment when required.",
  },
  {
    number: "06",
    title: "Documents for Insurance",
    description:
      "After the rescue, supporting documents are prepared for insurance and hospital coordination. These may include flight details, route, pickup location, rescue invoice, patient information, dispatch timeline, and other records required to complete the evacuation claim.",
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

export default function AnnapurnaProcess() {
  return (
    <section
      id="process"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[900px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — How a Rescue Unfolds
          </p>

          <h2 className="mt-4 max-w-[1100px] font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            Our Annapurna Helicopter Rescue Process
          </h2>

          <div className="mt-5 max-w-[850px] space-y-5 font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[12px]">
            <p>
              When an Annapurna helicopter rescue call is received, our
              dispatch team begins a structured emergency procedure to reduce
              delays and establish whether the mission can operate safely.
              Aircraft may be prepared at Pokhara or Kathmandu depending on
              location, availability, weather and operational requirements.
            </p>

            <p>
              The patient&apos;s condition, exact location, GPS coordinates,
              landing possibilities and current weather are verified while
              insurance or payment coordination takes place in parallel.
              Experienced mountain pilots and medical support personnel are
              prepared according to the nature of the emergency.
            </p>

            <p>
              During the mission, oxygen and first-aid equipment may be carried
              onboard. The patient is collected from the safest suitable
              landing point and transferred to Pokhara, Kathmandu or another
              appropriate medical facility. Our team remains in contact with
              the guide, patient, agency and hospital until the handover is
              completed.
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