import { CircleX } from "lucide-react";

const landingExpectations = [
  "Mild shortness of breath, especially when walking around the village.",
  "A temporary headache, light-headedness or unusual tiredness.",
  "A faster heartbeat as the body responds to the reduced oxygen level.",
  "Feeling colder because of the altitude, wind and rapid temperature change.",
];

const safetyActions = [
  "Walk slowly and avoid running or unnecessary physical activity.",
  "Take regular pauses while exploring Kyanjin Gompa.",
  "Stay hydrated before and during the journey.",
  "Wear thermal layers, a windproof jacket, gloves and suitable footwear.",
  "Tell the pilot or ground crew immediately if you feel unwell.",
  "Use supplemental oxygen when advised by the pilot or crew.",
];

const contraindications = [
  "Have a serious or unstable heart condition.",
  "Have severe or poorly controlled asthma, COPD or another chronic respiratory condition.",
  "Are more than 24 weeks pregnant, unless your doctor has approved high-altitude travel.",
  "Have recently undergone major surgery or experienced a serious illness.",
  "Have any medical condition that may be affected by rapid altitude gain or reduced oxygen levels.",
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
            Langtang Health and Altitude Guidelines{" "}
            <span className="text-[#e0a321]">(AMS)</span>
          </h2>

          <p className="mx-auto mt-5 max-w-4xl font-manrope text-sm leading-7 text-white/60 md:text-base md:leading-8">
            Passenger safety is our highest priority. The helicopter travels
            rapidly from Kathmandu at approximately 1,400 metres to Kyanjin
            Gompa at 3,870 metres. Because this altitude gain occurs in around
            25 to 35 minutes, your body has very little time to adjust to the
            lower oxygen level.
          </p>
        </div>

        {/* ATMOSPHERIC PRESSURE */}
        <div className="mt-10 border-t border-white/10 pt-9">
          <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[#e0a321]">
            Oxygen and Atmospheric Pressure
          </h3>

          <p className="mt-6 font-manrope text-sm leading-7 text-white/65 md:text-base md:leading-8">
            Kyanjin Gompa is located at approximately 3,870 metres above sea
            level, where the available oxygen is roughly 65% of the amount at
            sea level. Most healthy passengers tolerate a short visit, but the
            rapid ascent may cause temporary symptoms such as breathlessness,
            headache, light-headedness, fatigue or an increased heart rate.
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* WHAT TO EXPECT */}
            <div>
              <h4 className="font-manrope text-sm font-semibold text-white">
                Possible effects during the landing:
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

            {/* PREVENTATIVE MEASURES */}
            <div>
              <h4 className="font-manrope text-sm font-semibold text-white">
                Preventative measures:
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
              Ground time at Kyanjin Gompa is normally limited to approximately
              60 to 90 minutes to reduce prolonged exposure to high altitude.
              Each helicopter carries an emergency oxygen cylinder and a
              first-aid kit, and the pilot monitors passenger comfort
              throughout the landing.
            </p>
          </div>
        </div>

        {/* MEDICAL CONTRAINDICATIONS */}
        <div className="mt-10 border-t border-white/10 pt-9">
          <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[#e0a321]">
            Who Should Consult a Doctor Before Flying
          </h3>

          <p className="mt-6 font-manrope text-sm leading-7 text-white/65">
            Medical advice is recommended before booking if you:
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
            Mild symptoms can occur after rapid altitude gain, but passengers
            should never ignore worsening headache, severe breathlessness,
            confusion, chest pain, loss of balance or persistent nausea. Report
            symptoms immediately so the pilot can provide assistance or begin
            descent. These guidelines are general information and are not a
            substitute for professional medical advice.
          </p>
        </div>
      </div>
    </section>
  );
}