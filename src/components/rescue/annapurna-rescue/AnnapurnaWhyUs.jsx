
const reasons = [
  "Our flight crews have intimate knowledge of the Annapurna Conservation Area and understand how to identify the most stable flight routes during low-visibility conditions.",
  "We operate with transparent rescue pricing and no surprise charges after the mission. A full pricing estimate is provided before dispatch whenever the situation allows.",
  "Every case includes a ground liaison officer who can assist the patient’s family with hospital admission, visa extensions and accommodation coordination.",
  "Full post-rescue support is available, including medical records, detailed flight logs and supporting documents for insurance claims.",
  "We coordinate directly with major hospitals in Pokhara and Kathmandu and can help arrange hospital readiness before the patient arrives.",
  "Our AS 350 B3e aircraft are selected for high-altitude performance, with payload and flight planning adjusted according to terrain, weather and patient condition.",
  "Our dispatch and customer-support teams remain available 24/7 to assist international trekkers, guides, agencies and families during a medical emergency.",
];

function ReasonItem({ children }) {
  return (
    <li className="flex items-start gap-3 font-manrope text-[11px] leading-[1.8] text-[#46545f] sm:text-[12px]">
      <span className="mt-[8px] h-[5px] w-[5px] shrink-0 bg-[#a66e00]" />
      <span>{children}</span>
    </li>
  );
}

export default function AnnapurnaWhyUs() {
  return (
    <section
      id="why-us"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="border border-[#cfd2d3] bg-[#f1eee7] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — Why Mountain Helicopters
          </p>

          <h2 className="mt-4 max-w-[1100px] font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            Why Mountain Helicopters Nepal for Rescue?
          </h2>

          <div className="mt-8 grid gap-x-14 gap-y-5 lg:grid-cols-2">
            {reasons.map((reason) => (
              <ReasonItem key={reason}>{reason}</ReasonItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}