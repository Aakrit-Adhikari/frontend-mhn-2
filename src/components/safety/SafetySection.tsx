import {
  FaShieldAlt,
  FaUserTie,
  FaHelicopter,
} from "react-icons/fa";

export default function SafetySection() {
  return (
    <section className="bg-[#f7f9fc] py-20 px-6 md:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Top Tag */}
        <p className="text-xs tracking-[0.3em] text-yellow-500 uppercase">
          Our Philosophy
        </p>

        {/* Title */}
        <h2 className="mt-3 text-3xl md:text-5xl font-light text-[#0b1b2b]">
          Our Safety{" "}
          <span className="italic text-blue-500 font-medium">
            Commitment
          </span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 max-w-3xl text-sm md:text-base leading-relaxed">
          Safety is not a feature at Mountain Helicopters Nepal — it is the culture.
          From the moment a flight is requested to the moment passengers disembark,
          every decision is made with safety as the first and final consideration.
        </p>

        {/* Quote */}
        <div className="mt-10 border-l-4 border-yellow-400 pl-6">
          <p className="text-lg italic text-gray-700">
            “Every decision we make begins with safety.”
          </p>
        </div>

        {/* Extra Text */}
        <p className="mt-6 text-gray-500 max-w-4xl text-sm leading-relaxed">
          Seventeen years of Himalayan operations have taught us that no schedule,
          no tour, no revenue is worth compromising on safety. Our pilots have the
          authority — and the responsibility — to cancel or delay any flight at their discretion.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* Card 1 */}
          <div className="bg-white shadow-sm border rounded-xl p-6 hover:shadow-md transition">
            <FaShieldAlt className="text-blue-500 text-xl" />
            <h3 className="mt-4 font-semibold text-[#0b1b2b]">
              Certified Operations
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Licensed by CAAN and operating under strict national and international aviation regulations on every flight.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-sm border rounded-xl p-6 hover:shadow-md transition">
            <FaUserTie className="text-blue-500 text-xl" />
            <h3 className="mt-4 font-semibold text-[#0b1b2b]">
              Experienced Mountain Pilots
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              All pilots carry extensive Himalayan flying hours with specialized high-altitude training and recurrent certification.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-sm border rounded-xl p-6 hover:shadow-md transition">
            <FaHelicopter className="text-blue-500 text-xl" />
            <h3 className="mt-4 font-semibold text-[#0b1b2b]">
              Modern High-Altitude Fleet
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              AS350 B3e and Bell 407 aircraft maintained to manufacturer specifications for Nepal’s demanding mountain terrain.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}