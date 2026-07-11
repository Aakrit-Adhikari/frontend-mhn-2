// src/components/rescue/gosaikunda/GosaikundaProcess.jsx

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Emergency Call and Patient Information",
    description:
      "The rescue process begins when the patient, guide, trekking agency, lodge, relative, or insurance company contacts Mountain Helicopters Nepal. Our dispatch team records the patient’s name, condition, exact location, altitude, nationality, insurance details, and emergency contact information.",
    details: [
      "Patient name and condition",
      "Current altitude and exact location",
      "GPS coordinates where available",
      "Guide, lodge, or emergency contact",
      "Insurance provider and policy details",
    ],
  },
  {
    number: "02",
    title: "Location and Weather Verification",
    description:
      "The rescue point is confirmed using GPS coordinates, village name, lodge, helipad, trail point, or known locations such as Gosaikunda Lake, Lauribina La, Laurebinayak, Cholang Pati, or Dhunche. Visibility, wind, cloud, terrain, and landing access are checked before departure.",
    details: [
      "GPS and landmark verification",
      "Current visibility and cloud level",
      "Wind speed and direction",
      "Landing-area condition",
      "Latest route and weather update",
    ],
  },
  {
    number: "03",
    title: "Insurance or Payment Confirmation",
    description:
      "For insured patients, policy details and the assistance-company contact are verified. The insurer may require a case number, guarantee letter, doctor’s note, guide report, or rescue authorization. Uninsured cases generally require a direct-payment guarantee before dispatch.",
    details: [
      "Policy and assistance-company verification",
      "Case reference or guarantee letter",
      "Medical or guide report where required",
      "Rescue approval from insurer",
      "Direct-payment arrangement if uninsured",
    ],
  },
  {
    number: "04",
    title: "Helicopter Dispatch",
    description:
      "Once the rescue requirement, location, weather, insurance or payment details, and patient condition are confirmed, an aircraft is prepared for departure. The pilot makes the final decision according to altitude, visibility, route safety, payload, and landing conditions.",
    details: [
      "Aircraft and crew preparation",
      "Route and fuel planning",
      "Payload assessment",
      "CAAN and operational coordination",
      "Final pilot go or no-go decision",
    ],
  },
  {
    number: "05",
    title: "Patient Pickup and Medical Evacuation",
    description:
      "The patient is collected from the safest available point in the Gosaikunda region, including a helipad, lodge area, open field, ridge, or established pickup point. If direct landing is not possible, the patient is moved to the nearest secure landing area before evacuation.",
    details: [
      "Safe pickup-point selection",
      "Patient movement to landing area",
      "Onboard oxygen where required",
      "Basic first-aid and stabilization",
      "Transfer to Kathmandu or another suitable facility",
    ],
  },
  {
    number: "06",
    title: "Documents for Insurance",
    description:
      "After the evacuation, supporting documents are prepared for the patient, agency, hospital, and insurer. These may include flight details, rescue route, pickup location, evacuation time, patient information, dispatch records, and invoice documentation.",
    details: [
      "Flight log and route details",
      "Pickup location and evacuation time",
      "Patient and dispatch information",
      "Rescue invoice",
      "Supporting insurance documents",
    ],
  },
];

function ProcessCard({
  number,
  title,
  description,
  details,
  isOpen,
  onToggle,
}) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden border bg-white transition-all duration-300 ${
        isOpen
          ? "-translate-y-1 border-[#d99a19] shadow-[0_20px_50px_rgba(7,24,37,0.14)]"
          : "border-[#cfd3d5] hover:-translate-y-1 hover:border-[#d99a19] hover:shadow-[0_18px_45px_rgba(7,24,37,0.12)]"
      }`}
    >
      <span
        className={`absolute left-0 top-0 h-[3px] bg-[#f2a10d] transition-all duration-300 ${
          isOpen ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full flex-1 flex-col p-5 text-left sm:p-6"
      >
        <div className="flex items-start gap-4">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-manrope text-[10px] font-semibold transition-all duration-300 ${
              isOpen
                ? "border-[#b77900] bg-[#b77900] text-white"
                : "border-[#b77900] text-[#9a6700] group-hover:bg-[#b77900] group-hover:text-white"
            }`}
          >
            {number}
          </span>

          <div className="flex flex-1 items-start justify-between gap-4">
            <h3
              className={`pt-1 font-fraunces text-[17px] font-semibold leading-[1.15] transition-colors duration-300 sm:text-[18px] ${
                isOpen
                  ? "text-[#9b6b00]"
                  : "text-[#071825] group-hover:text-[#9b6b00]"
              }`}
            >
              {title}
            </h3>

            <ChevronDown
              size={18}
              strokeWidth={1.8}
              className={`mt-1 shrink-0 text-[#a66e00] transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>

        <p className="mt-5 font-manrope text-[10px] leading-[1.75] text-[#4c5963] sm:text-[11px]">
          {description}
        </p>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen
              ? "mt-5 grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-[#dedfdc] pt-4">
              <p className="font-manrope text-[8px] font-bold uppercase tracking-[0.18em] text-[#a66e00]">
                What happens in this step
              </p>

              <ul className="mt-3 space-y-2.5">
                {details.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-manrope text-[10px] leading-[1.65] text-[#56626c]"
                  >
                    <span className="mt-[7px] h-[4px] w-[4px] shrink-0 bg-[#d99a19]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-6">
          <span
            className={`block h-px bg-[#d99a19] transition-all duration-300 ${
              isOpen ? "w-full" : "w-10 group-hover:w-full"
            }`}
          />
        </div>
      </button>
    </article>
  );
}

export default function GosaikundaProcess() {
  const [openStep, setOpenStep] = useState(null);

  const handleToggle = (number) => {
    setOpenStep((current) => (current === number ? null : number));
  };

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
            Our Gosaikunda Helicopter Rescue Process
          </h2>

          <div className="mt-5 max-w-[850px] space-y-5 font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[12px]">
            <p>
              Every Gosaikunda helicopter rescue follows a structured emergency
              process designed to confirm the patient&apos;s condition, exact
              location, current weather, landing possibilities and payment or
              insurance arrangements as quickly as possible.
            </p>

            <p>
              While dispatch verifies the case, aircraft and crew preparation
              can begin in parallel. Depending on the rescue point, weather,
              altitude and aircraft availability, the mission is generally
              coordinated from Kathmandu or another suitable staging location.
            </p>

            <p>
              After pickup, the patient may be transferred to Kathmandu or
              another appropriate medical facility. Our team remains in contact
              with the guide, patient, trekking agency, insurer and receiving
              hospital until the evacuation handover is complete.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step) => (
            <ProcessCard
              key={step.number}
              {...step}
              isOpen={openStep === step.number}
              onToggle={() => handleToggle(step.number)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}