// src/components/rescue/detail/EverestInsurance.jsx

const policyChecklist = [
  "Helicopter evacuation up to 6,000 m or above Kala Patthar, 5,545 m",
  "Trekking listed as your primary covered activity",
  "Search and rescue (SAR) coordination",
  "Repatriation and hospital admission in Nepal",
  "No Everest-region exclusion in the policy wording",
];

const recordAndCarry = [
  "Policy number",
  "Assistance company 24-hour emergency contact",
  "Coverage limit for evacuation",
  "Deductible or excess amount",
];

function ChecklistItem({ children }) {
  return (
    <li className="flex items-start gap-3 font-manrope text-[11px] leading-[1.7] text-white/78">
      <span className="mt-[7px] h-[7px] w-[7px] shrink-0 rounded-full border border-white/45" />
      <span>{children}</span>
    </li>
  );
}

export default function EverestInsurance() {
  return (
    <section
      id="insurance"
      className="scroll-mt-[123px] bg-[#061523] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Policy alert */}
        <div className="border border-[#9b6b10] px-5 py-6 sm:px-7 lg:px-8">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#f2a10d]">
            — Everest Policy Check
          </p>

          <p className="mt-4 max-w-[900px] font-manrope text-[13px] leading-[1.8] text-white/85 sm:text-[14px]">
            Most Everest trekking insurance policies cover evacuation up to
            6,000 m. Confirm your policy covers the altitude range between
            Lukla (2,860 m) and Kala Patthar (5,545 m) before departure. Some
            policies exclude the Everest region specifically.
          </p>
        </div>

        <div className="mt-12">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#f2a10d]">
            — Insurance
          </p>

          <h2 className="mt-4 font-fraunces text-[40px] font-semibold leading-[1.02] tracking-[-0.03em] text-[#f6f2ea] sm:text-[50px] lg:text-[60px]">
            How insurance coordination works.
          </h2>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.3fr_0.85fr] lg:gap-14">
            {/* Left content */}
            <div className="max-w-[820px] space-y-6 font-manrope text-[13px] leading-[1.8] text-white/82 sm:text-[14px]">
              <p>
                Most experienced Everest trekkers arrive with travel insurance
                that covers helicopter evacuation up to a stated altitude
                ceiling—commonly 6,000 m. Whether your policy covers your rescue
                depends on the altitude of the pickup point, whether trekking is
                your covered activity, and the specific evacuation clauses in
                your policy.
              </p>

              <p>
                MHN coordinates directly with insurance assistance companies
                for confirmed policy cases. Where the assistance company
                authorizes rescue, we dispatch without requiring upfront
                payment from the patient. Documentation is prepared after the
                rescue for direct billing.
              </p>

              <p>
                Where insurance authorization is delayed or unavailable, a
                payment-guarantee arrangement is required before dispatch. This
                may come from the patient&apos;s family, trekking agency,
                expedition sponsor, or embassy. Uninsured cases proceed on
                direct-payment terms with a cost estimate provided upfront.
              </p>
            </div>

            {/* Right checklist */}
            <aside className="border-l border-[#9b6b10] pl-6 sm:pl-8">
              <h3 className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2a10d]">
                Checklist Before Your Trek
              </h3>

              <p className="mt-2 font-manrope text-[9px] uppercase leading-[1.6] tracking-[0.08em] text-[#f2a10d]">
                [Client verify: direct-billing insurance partners for Everest
                cases]
              </p>

              <ul className="mt-6 space-y-3">
                {policyChecklist.map((item) => (
                  <ChecklistItem key={item}>{item}</ChecklistItem>
                ))}
              </ul>

              <h4 className="mt-7 font-manrope text-[11px] font-semibold text-white">
                Record and carry:
              </h4>

              <ul className="mt-4 space-y-3">
                {recordAndCarry.map((item) => (
                  <ChecklistItem key={item}>{item}</ChecklistItem>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}