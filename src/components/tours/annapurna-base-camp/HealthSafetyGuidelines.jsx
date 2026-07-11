import { CircleX } from "lucide-react";

const landingExpectations = [
  "You may feel mildly short of breath when walking or climbing steps.",
  "A slight headache or faster heart rate may occur after the rapid ascent.",
  "Cold temperatures and dry mountain air may make breathing feel different.",
  "These mild sensations often improve after returning to a lower altitude.",
];

const safetyActions = [
  "Move slowly and avoid running or unnecessary physical exertion.",
  "Breathe steadily and take regular pauses while walking.",
  "Stay hydrated before and during the tour.",
  "Remain within the permitted landing area and follow the pilot’s instructions.",
  "Inform the pilot immediately if you feel dizzy, nauseous, unusually weak or severely short of breath.",
  "Use the supplemental oxygen onboard when instructed by the pilot or crew.",
];

const contraindications = [
  "A history of serious heart conditions or unstable high blood pressure.",
  "Chronic respiratory conditions such as COPD or severe asthma.",
  "Pregnancy, particularly after the first trimester, unless approved by your doctor.",
  "Major surgery, serious illness or hospitalisation within the previous six weeks.",
  "Any medical condition that may be affected by rapid ascent to high altitude.",
];

export default function HealthSafetyGuidelines() {
  return (
    <section className="bg-[#071b33] px-5 py-16 md:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl bg-[#061a31] px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-14">
        {/* HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.24em] text-[#e0a321]">
            <span className="h-px w-7 bg-[#e0a321]" />
            Health, Safety and Altitude Guidelines
          </p>

          <h2 className="mt-5 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-4xl">
            Health, Safety and Altitude Guidelines{" "}
            <span className="text-[#e0a321]">(AMS)</span>
          </h2>

          <p className="mx-auto mt-5 max-w-4xl font-manrope text-sm leading-7 text-white/55">
            Flying from Pokhara at approximately 822 metres to Annapurna Base
            Camp at 4,130 metres takes only around 20 to 25 minutes. Because the
            ascent is rapid, your body has limited time to adjust to the
            reduced atmospheric pressure and lower oxygen availability.
          </p>
        </div>

        {/* ATMOSPHERIC PRESSURE */}
        <div className="mt-10 border-t border-white/10 pt-9">
          <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[#e0a321]">
            Atmospheric Pressure and Oxygen Levels
          </h3>

          <p className="mt-6 font-manrope text-sm leading-7 text-white/65 md:text-base md:leading-8">
            At Annapurna Base Camp, 4,130 metres above sea level, atmospheric
            pressure and available oxygen are roughly 60–62% of sea-level
            conditions. Most healthy passengers tolerate a short landing
            without serious difficulty, but the rapid altitude change can
            produce mild and temporary symptoms.
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* WHAT TO EXPECT */}
            <div>
              <h4 className="font-manrope text-sm font-semibold text-white">
                What to expect during the landing:
              </h4>

              <ul className="mt-4 space-y-3">
                {landingExpectations.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-manrope text-sm leading-6 text-white/60"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e0a321]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SAFETY ACTIONS */}
            <div>
              <h4 className="font-manrope text-sm font-semibold text-white">
                What you should do:
              </h4>

              <ul className="mt-4 space-y-3">
                {safetyActions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-manrope text-sm leading-6 text-white/60"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e0a321]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ONBOARD SAFETY */}
        <div className="mt-10 border-t border-white/10 pt-9">
          <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[#e0a321]">
            Onboard and Landing Safety
          </h3>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-6">
              <h4 className="font-fraunces text-lg font-semibold text-white">
                Onboard Safety Equipment
              </h4>

              <p className="mt-3 font-manrope text-sm leading-7 text-white/55">
                The helicopter carries supplemental oxygen cylinders and an
                emergency first-aid kit. The flight is operated by an
                experienced mountain pilot familiar with high-altitude
                Himalayan conditions.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-6">
              <h4 className="font-fraunces text-lg font-semibold text-white">
                Controlled Ground Time
              </h4>

              <p className="mt-3 font-manrope text-sm leading-7 text-white/55">
                Ground time at Annapurna Base Camp is normally limited to
                approximately 30–45 minutes. The pilot may reduce this duration
                because of weather, wind, passenger condition or operational
                safety requirements.
              </p>
            </article>
          </div>
        </div>

        {/* MEDICAL CONTRAINDICATIONS */}
        <div className="mt-10 border-t border-white/10 pt-9">
          <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[#e0a321]">
            Medical Contraindications
          </h3>

          <p className="mt-6 font-manrope text-sm leading-7 text-white/65">
            Please consult a qualified healthcare professional before booking
            if you:
          </p>

          <ul className="mt-6 space-y-4">
            {contraindications.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-manrope text-sm leading-6 text-white/60"
              >
                <CircleX
                  size={16}
                  strokeWidth={1.7}
                  className="mt-1 shrink-0 text-white/50"
                />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* WARNING SIGNS */}
        <div className="mt-10 rounded-2xl border border-red-400/20 bg-red-400/[0.06] px-5 py-5 md:px-7">
          <p className="font-manrope text-xs font-bold uppercase tracking-[0.16em] text-red-300">
            Tell the Pilot Immediately
          </p>

          <p className="mt-2 font-manrope text-xs leading-6 text-white/55">
            Severe headache, confusion, loss of coordination, chest pain,
            persistent vomiting, fainting or significant breathing difficulty
            are not normal. Inform the pilot immediately so that oxygen can be
            provided and the helicopter can descend when required.
          </p>
        </div>

        {/* MEDICAL NOTE */}
        <div className="mt-5 rounded-2xl border border-[#e0a321]/20 bg-[#e0a321]/[0.06] px-5 py-5 md:px-7">
          <p className="font-manrope text-xs leading-6 text-white/55">
            These guidelines provide general travel information and do not
            replace professional medical advice. Passengers with existing
            medical conditions should obtain clearance from a qualified
            healthcare professional before travelling rapidly to high altitude.
          </p>
        </div>
      </div>
    </section>
  );
}