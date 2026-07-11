import { CircleX } from "lucide-react";

const landingExpectations = [
  "Mild breathlessness, especially when walking or climbing steps.",
  "Temporary light-headedness or a slight headache.",
  "A faster heartbeat as your body adjusts to the reduced oxygen level.",
  "Feeling colder than expected because of the altitude, wind, and rapid temperature change.",
];

const safetyActions = [
  "Walk slowly and avoid running or unnecessary physical exertion.",
  "Breathe steadily and take regular pauses while moving around the temple complex.",
  "Stay hydrated before and during the journey.",
  "Wear warm, windproof layers, gloves, and suitable footwear.",
  "Inform the pilot or ground crew immediately if you feel unwell.",
  "Use supplemental oxygen when advised by the pilot or crew.",
];

const contraindications = [
  "A history of serious heart conditions or unstable high blood pressure.",
  "Chronic respiratory conditions such as COPD or severe asthma.",
  "Pregnancy, particularly after the first trimester, because rapid exposure to high altitude may not be suitable.",
  "Major surgery within the previous six weeks.",
  "Any recent medical condition that may be affected by reduced oxygen levels or rapid altitude gain.",
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
            Muktinath Health and Altitude Guidelines{" "}
            <span className="text-[#e0a321]">(AMS)</span>
          </h2>

          <p className="mx-auto mt-5 max-w-4xl font-manrope text-sm leading-7 text-white/60 md:text-base md:leading-8">
            Passenger safety is our highest priority. The helicopter travels
            rapidly from Pokhara at approximately 800 metres or Kathmandu at
            approximately 1,400 metres to Muktinath at 3,710 metres. Because
            this altitude gain occurs within around 45 to 90 minutes, your body
            has limited time to adjust to the lower oxygen level.
          </p>
        </div>

        {/* ATMOSPHERIC PRESSURE */}
        <div className="mt-10 border-t border-white/10 pt-9">
          <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[#e0a321]">
            Atmospheric Pressure and Oxygen Levels
          </h3>

          <p className="mt-6 font-manrope text-sm leading-7 text-white/65 md:text-base md:leading-8">
            At Muktinath, 3,710 metres above sea level, the available oxygen is
            approximately 65% of the sea-level amount. Most healthy passengers
            tolerate a short visit without serious difficulty, but the rapid
            altitude increase may cause temporary symptoms such as mild
            breathlessness, light-headedness, headache, fatigue or feeling
            unusually cold.
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

            {/* WHAT TO DO */}
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

          {/* SAFETY INFORMATION */}
          <div className="mt-8 border-l-2 border-[#e0a321] pl-5">
            <p className="font-manrope text-sm leading-7 text-white/60">
              The helicopter carries emergency oxygen cylinders and a first-aid
              kit. Our CAAN-licensed pilots are experienced in high-altitude
              Himalayan operations. Standard ground time at Muktinath is
              limited to approximately 60 minutes to reduce prolonged exposure
              to the altitude.
            </p>
          </div>
        </div>

        {/* MEDICAL CONTRAINDICATIONS */}
        <div className="mt-10 border-t border-white/10 pt-9">
          <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[#e0a321]">
            Medical Contraindications
          </h3>

          <p className="mt-6 font-manrope text-sm leading-7 text-white/65">
            Please consult your doctor before booking if you:
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

        {/* MEDICAL NOTE */}
        <div className="mt-10 rounded-2xl border border-[#e0a321]/20 bg-[#e0a321]/[0.06] px-5 py-5 md:px-7">
          <p className="font-manrope text-xs leading-6 text-white/55">
            These guidelines provide general travel information and are not a
            substitute for professional medical advice. Passengers with
            existing health conditions should obtain clearance from a qualified
            healthcare professional before travelling rapidly to high altitude.
          </p>
        </div>
      </div>
    </section>
  );
}