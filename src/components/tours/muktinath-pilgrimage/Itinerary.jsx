const itineraryPhases = [
  {
    id: "kathmandu",
    eyebrow: "Phase 1",
    title: "Muktinath Helicopter Tour From Kathmandu",
    duration: "Approximately 3–4 hours",
    items: [
      {
        number: "01",
        time: "07:00h",
        title: "Hotel Pickup and Airport Transfer",
        description:
          "Your Muktinath pilgrimage begins with a morning pickup from your hotel in Kathmandu. A private vehicle transfers you to the domestic terminal at Tribhuvan International Airport, where the Mountain Helicopters Nepal ground team assists with check-in and flight preparation.",
        bullets: [
          "Carry a valid passport or identification document.",
          "Wear warm, layered clothing suitable for high-altitude conditions.",
          "Bring personal medicines, sunglasses, and essential religious items.",
          "Complete final passenger weight and luggage checks.",
        ],
      },
      {
        number: "02",
        time: "07:15h",
        title: "Pre-Flight Briefing at Kathmandu Airport",
        description:
          "After reaching the domestic terminal, you meet the flight crew and receive a safety briefing before boarding the Airbus H125 helicopter.",
        bullets: [
          "Receive instructions about boarding and exiting the helicopter.",
          "Review in-flight safety and emergency procedures.",
          "Learn about high-altitude precautions at Muktinath.",
          "Confirm the expected route, weather, and temple ground time.",
        ],
      },
      {
        number: "03",
        time: "07:30h",
        title: "Departure From Kathmandu",
        description:
          "The helicopter departs from Kathmandu and flies northwest toward the Annapurna and Mustang regions. The city gradually disappears below as the flight crosses green hills, river valleys, traditional villages, and Himalayan foothills.",
      },
      {
        number: "04",
        time: "07:45h",
        title: "Aerial Views of the Annapurna and Dhaulagiri Ranges",
        description:
          "As the aircraft continues toward Mustang, passengers enjoy panoramic views of Annapurna I, Annapurna South, Dhaulagiri, Hiunchuli, the Nilgiri massif, Baraha Chuli, and surrounding Himalayan peaks.",
        bullets: [
          "Dhaulagiri at 8,167 metres.",
          "Annapurna I at 8,091 metres.",
          "Annapurna South at 7,219 metres.",
          "Nilgiri North, Central, and South.",
          "Hiunchuli and Baraha Chuli.",
        ],
      },
      {
        number: "05",
        time: "08:00h",
        title: "Flight Through the Kali Gandaki Valley",
        description:
          "The route follows the dramatic Kali Gandaki corridor, where the landscape changes from green hills and forests to the dry, desert-like terrain of Lower Mustang. Depending on visibility, passengers may see Jomsom, Marpha, Kagbeni, Jharkot, Tatopani, Ghorepani, and Poon Hill.",
      },
      {
        number: "06",
        time: "08:15h",
        title: "Landing Near Muktinath Temple (3,710m)",
        description:
          "The helicopter lands at the Muktinath helipad beneath Thorong La Pass. From the helipad, the temple complex is reached by an approximately five-minute walk. Porter or local assistance may be arranged for elderly visitors and passengers with limited mobility.",
        note:
          "Ground time depends on weather, aircraft performance, passenger condition, and operational requirements. Follow the pilot and ground crew's instructions throughout the landing.",
      },
      {
        number: "07",
        time: "08:15h",
        title: "Darshan, Puja and Worship at Muktinath Temple",
        description:
          "Visit the sacred Muktinath Temple, revered by both Hindus and Buddhists. Passengers normally receive approximately 30 minutes for darshan, puja, Havan, personal prayer, photography, and exploration of the temple complex.",
        bullets: [
          "Receive darshan at the main Muktinath Temple.",
          "Perform puja or Havan according to personal preference.",
          "Visit the 108 sacred water taps.",
          "Observe the eternal flame and surrounding shrines.",
          "Experience panoramic views across the Mustang Valley.",
        ],
      },
      {
        number: "08",
        time: "08:45h",
        title: "Departure From Muktinath",
        description:
          "After completing the temple visit, passengers return to the helipad and board the helicopter for the flight back to Kathmandu. The return route provides another opportunity to photograph the Mustang landscape and Himalayan ranges.",
      },
      {
        number: "09",
        time: "09:15h",
        title: "Return Flight Over Mustang and the Annapurna Region",
        description:
          "The helicopter flies back across the Kali Gandaki Valley, offering aerial views of Jomsom, mountain villages, deep river gorges, green hills, and the Annapurna and Dhaulagiri massifs.",
      },
      {
        number: "10",
        time: "10:00h",
        title: "Arrival in Kathmandu and Hotel Transfer",
        description:
          "The helicopter lands at Tribhuvan International Airport at approximately 10:00 AM. After arrival, a private vehicle transfers you back to your hotel, completing the Muktinath helicopter pilgrimage.",
      },
    ],
  },
  {
    id: "pokhara",
    eyebrow: "Phase 2",
    title: "Muktinath Helicopter Tour From Pokhara",
    duration: "Approximately 2–3 hours",
    items: [
      {
        number: "01",
        time: "07:00h",
        title: "Hotel Pickup in Pokhara",
        description:
          "Your journey begins with a morning pickup from your hotel in Pokhara. A private vehicle transfers you to Pokhara International Airport for check-in, passenger verification, and final flight preparation.",
      },
      {
        number: "02",
        time: "07:15h",
        title: "Safety Briefing and Boarding",
        description:
          "At the airport, the flight crew provides a safety briefing covering boarding procedures, high-altitude precautions, weather conditions, and instructions for the Muktinath landing.",
        bullets: [
          "Complete passenger and luggage weight checks.",
          "Review boarding and landing procedures.",
          "Receive information about temple ground time.",
          "Meet the pilot and ground operations team.",
        ],
      },
      {
        number: "03",
        time: "07:30h",
        title: "Departure From Pokhara",
        description:
          "The helicopter departs Pokhara and flies north toward the Annapurna and Mustang regions. Shortly after takeoff, passengers can enjoy views of the Pokhara Valley, surrounding hills, and the Annapurna mountain range.",
      },
      {
        number: "04",
        time: "07:45h",
        title: "Scenic Flight Toward Mustang",
        description:
          "The flight crosses the Annapurna foothills and follows the Kali Gandaki Valley toward Jomsom and Muktinath. The landscape gradually changes from fertile green hills to the dry and dramatic terrain of Mustang.",
        bullets: [
          "Aerial views of the Annapurna massif.",
          "Views of Dhaulagiri and the Nilgiri peaks.",
          "Kali Gandaki Gorge and river corridor.",
          "Jomsom, Marpha, Kagbeni, and nearby settlements.",
          "Mustang's distinctive barren mountain landscape.",
        ],
      },
      {
        number: "05",
        time: "08:15h",
        title: "Landing at Muktinath (3,710m)",
        description:
          "The helicopter lands near Muktinath Temple. Passengers walk approximately five minutes from the helipad to the temple complex, with assistance available for elderly visitors or travellers with limited mobility.",
      },
      {
        number: "06",
        time: "08:15h",
        title: "Muktinath Darshan, Puja and Havan",
        description:
          "Spend approximately 30 minutes visiting the sacred temple complex. Perform darshan, puja or Havan, visit the 108 holy water taps, and experience the spiritual atmosphere shared by Hindu and Buddhist pilgrims.",
        bullets: [
          "Visit the main Muktinath shrine.",
          "Perform prayer, puja, or Havan.",
          "Visit the 108 sacred water taps.",
          "Observe the sacred eternal flame.",
          "Capture photographs of the Mustang Valley.",
        ],
        note:
          "Passengers should walk slowly at 3,710 metres and follow all instructions provided by the pilot and ground crew.",
      },
      {
        number: "07",
        time: "08:45h",
        title: "Return Flight to Pokhara",
        description:
          "After the temple visit, the helicopter departs Muktinath and returns through the Kali Gandaki Valley. Passengers can once again enjoy aerial views of the Annapurna, Dhaulagiri, Nilgiri, and Mustang landscapes.",
      },
      {
        number: "08",
        time: "09:30h",
        title: "Arrival at Pokhara Airport",
        description:
          "The aircraft lands at Pokhara International Airport at approximately 9:30 AM. After landing, the ground team assists passengers with disembarkation and the onward transfer.",
      },
      {
        number: "09",
        time: "09:40h",
        title: "Pokhara Valley Sightseeing Transfer",
        description:
          "Depending on the selected package, passengers may continue with a short Pokhara sightseeing transfer featuring views of Phewa Lake, the Pokhara Valley, and the surrounding Annapurna landscape.",
      },
      {
        number: "10",
        time: "10:00h",
        title: "Tour Completion and Hotel Drop-Off",
        description:
          "The Muktinath helicopter pilgrimage concludes with a transfer back to your hotel in Pokhara. The remainder of the day is free for relaxation or additional sightseeing.",
      },
    ],
  },
];

export default function Itinerary() {
  return (
    <section
      id="itinerary"
      className="relative overflow-hidden bg-[#082f59] px-5 py-16 md:px-8 lg:py-24"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/muktinath/itinerary-bg.jpg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#062b52]/90" />

      {/* EXTRA GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#062b52]/30 via-transparent to-[#062b52]/90" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* MAIN HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#e0a321]">
            <span className="h-px w-7 bg-[#e0a321]" />
            Know Your Destination
          </p>

          <h2 className="mt-4 font-fraunces text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
            Your Muktinath Journey,
            <br />
            <span className="text-[#f0ad1f]">Step by Step.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl font-manrope text-sm leading-7 text-white/70">
            Choose a Muktinath helicopter pilgrimage from Kathmandu or Pokhara
            and reach the sacred temple without completing a long overland
            journey or multi-day trek.
          </p>
        </div>

        {/* ITINERARY PHASES */}
        <div className="mt-16 space-y-24 md:mt-20 lg:space-y-28">
          {itineraryPhases.map((phase) => (
            <div key={phase.id}>
              {/* PHASE HEADING */}
              <div className="mb-12 border-b border-white/15 pb-7">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="rounded-full border border-[#e0a321]/50 bg-[#e0a321]/10 px-4 py-2 font-manrope text-[10px] font-bold uppercase tracking-[0.18em] text-[#f0ad1f]">
                    {phase.eyebrow}
                  </span>

                  <span className="font-manrope text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
                    {phase.duration}
                  </span>
                </div>

                <h3 className="mt-5 max-w-4xl font-fraunces text-2xl font-semibold leading-tight text-white md:text-3xl lg:text-4xl">
                  {phase.title}
                </h3>
              </div>

              {/* TIMELINE */}
              <div className="relative">
                <div className="absolute bottom-0 left-[22px] top-0 w-px bg-[#dda11f] md:left-[26px]" />

                <div className="space-y-10">
                  {phase.items.map((item, index) => (
                    <article
                      key={`${phase.id}-${item.number}`}
                      className="relative grid grid-cols-[46px_minmax(0,1fr)] gap-4 md:grid-cols-[54px_minmax(0,1fr)] md:gap-6"
                    >
                      {/* NUMBER */}
                      <div
                        className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border font-manrope text-xs font-bold transition duration-300 md:h-[52px] md:w-[52px] ${
                          index === 0
                            ? "border-[#e0a321] bg-[#0b4c82] text-[#f0ad1f]"
                            : "border-white/70 bg-white text-[#0a3d69]"
                        }`}
                      >
                        {item.number}
                      </div>

                      {/* CONTENT */}
                      <div className="pb-1 pt-1">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="font-manrope text-xs font-bold uppercase tracking-[0.08em] text-[#f0ad1f]">
                            {item.time}
                          </span>

                          <h4 className="font-fraunces text-lg font-semibold leading-7 text-white md:text-xl">
                            {item.title}
                          </h4>
                        </div>

                        <p className="mt-3 font-manrope text-sm leading-7 text-white/75">
                          {item.description}
                        </p>

                        {item.bullets && (
                          <ul className="mt-3 space-y-1.5 pl-5 font-manrope text-sm leading-6 text-white/75">
                            {item.bullets.map((bullet) => (
                              <li key={bullet} className="list-disc">
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}

                        {item.note && (
                          <p className="mt-4 border-l-2 border-[#e0a321] pl-4 font-manrope text-sm leading-7 text-white/70">
                            {item.note}
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* OPERATIONAL NOTE */}
        <div className="mt-20 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-6 backdrop-blur-sm md:px-7">
          <p className="font-manrope text-xs leading-6 text-white/65">
            All flight times are approximate. The final departure time, route,
            ground duration, passenger capacity, and return schedule may change
            according to weather, visibility, aircraft availability, air
            traffic, passenger weight, and operational safety requirements.
          </p>
        </div>
      </div>
    </section>
  );
}