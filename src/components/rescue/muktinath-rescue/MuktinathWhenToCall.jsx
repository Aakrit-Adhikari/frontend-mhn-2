
import { Phone } from "lucide-react";

const emergencyCases = [
  {
    title: "Altitude Mountain Sickness (AMS) Evacuation",
    description:
      "Helicopter rescue may be necessary when severe oxygen deprivation develops, including High Altitude Cerebral Edema (HACE) or High Altitude Pulmonary Edema (HAPE), especially when the patient cannot descend safely.",
  },
  {
    title: "Trauma and Accident Rescue",
    description:
      "Immediate evacuation may be required for injuries caused by falls, fractures, landslides, road accidents, or other trauma along the Muktinath and Mustang routes.",
  },
  {
    title: "Weather-Stranded Tourist Extraction",
    description:
      "Rescue may be required when snowstorms, strong winds, blocked roads, flooding, or deteriorating mountain weather prevent safe onward travel or descent.",
  },
];

function EmergencyCard({ title, description }) {
  return (
    <article className="flex h-full flex-col border border-[#cfd3d5] bg-white">
      <div className="border-b border-[#d99a19] bg-[#061523] px-4 py-3">
        <h3 className="font-manrope text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#f2a10d]">
          {title}
        </h3>
      </div>

      <div className="flex flex-1 items-center px-5 py-5 sm:px-6">
        <p className="font-manrope text-[11px] leading-[1.75] text-[#34434f] sm:text-[12px]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function MuktinathWhenToCall() {
  return (
    <section
      id="when-to-call"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[920px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — When to Call
          </p>

          <h2 className="mt-4 max-w-[980px] font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            When Is Helicopter Rescue Necessary in Muktinath?
          </h2>

          <div className="mt-5 max-w-[820px] space-y-5 font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[12px]">
            <p>
              Not every illness or delay on the trail requires helicopter
              evacuation. Some situations can be monitored while the patient
              descends by road or on foot. The most important decision is
              knowing when waiting is no longer safe.
            </p>

            <p>
              A rescue call should be considered when the patient is
              deteriorating, cannot descend safely, has suffered serious
              injury, or is stranded by dangerous weather. Common rescue cases
              in the Muktinath and Lower Mustang region include:
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {emergencyCases.map((item, index) => (
            <div
              key={item.title}
              className={index === 2 ? "md:col-span-1" : ""}
            >
              <EmergencyCard {...item} />
            </div>
          ))}
        </div>

        <div className="mt-6 bg-[#061523] px-6 py-8 text-white sm:px-8 lg:px-10">
          <div className="max-w-[760px]">
            <h3 className="font-fraunces text-[24px] font-semibold leading-[1.1] text-[#f6f2ea] sm:text-[28px]">
              Uncertain whether it&apos;s an emergency?
            </h3>

            <p className="mt-3 max-w-[680px] font-manrope text-[11px] leading-[1.75] text-white/75 sm:text-[12px]">
              If someone at altitude is deteriorating, do not wait to be
              certain. Call us. We coordinate the assessment. The cost of a
              rescue call that turns out to be unnecessary is zero. The cost
              of delaying a rescue that was needed can be a life.
            </p>

            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="tel:+9779712082949"
                className="inline-flex h-[42px] items-center justify-center gap-2 bg-[#c65c00] px-5 font-manrope text-[9px] font-extrabold uppercase tracking-[0.15em] text-white transition hover:bg-[#df6b00]"
              >
                <span>[</span>
                <Phone size={13} />
                Call Now
                <span>]</span>
              </a>

              <a
                href="tel:+9779712082949"
                className="font-fraunces text-[22px] font-semibold text-white sm:text-[25px]"
              >
                +977-9712082949
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}