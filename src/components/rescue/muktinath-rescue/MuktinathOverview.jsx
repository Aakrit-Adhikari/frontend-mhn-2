const trustItems = [
  "Since 2009",
  "10,000+ Flights",
  "Zero Fatal Accidents",
  "<5 Min Dispatch",
  "CAAN Certified",
  "AS 350 B3e Fleet",
];

export default function MuktinathOverview() {
  return (
    <section
      id="overview"
      className="scroll-mt-[123px] bg-[#f6f3ed] text-[#071825]"
    >
      {/* Trust bar */}
      <div className="border-b border-[#d7d9d7]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 sm:grid-cols-3 sm:px-8 lg:grid-cols-6 lg:px-12 xl:px-[80px] 2xl:px-[125px]">
          {trustItems.map((item, index) => (
            <div
              key={item}
              className={`flex min-h-[74px] items-center justify-center px-3 text-center ${
                index !== trustItems.length - 1
                  ? "lg:border-r lg:border-[#d7a03d]"
                  : ""
              }`}
            >
              <span className="font-manrope text-[9px] font-bold uppercase tracking-[0.2em] text-[#071825] sm:text-[10px]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Overview content */}
      <div className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-[980px]">
            <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
              — Overview
            </p>

            <h2 className="mt-4 max-w-[1000px] font-fraunces text-[40px] font-semibold leading-[1.02] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
              Overview of Muktinath Helicopter Rescue Operations
            </h2>

            <div className="mt-6 max-w-[820px] space-y-5 font-manrope text-[12px] leading-[1.8] text-[#46545f] sm:text-[13px]">
              <p>
                Muktinath helicopter rescue provides emergency evacuation for
                pilgrims, trekkers, guides and expedition members affected by
                altitude illness, injury, severe weather or other urgent
                medical conditions across Muktinath and the wider Lower Mustang
                region.
              </p>

              <p>
                The Muktinath area sits at approximately 3,710 metres, while
                surrounding trails and high passes can rise beyond 4,200
                metres. In remote locations where road or ground evacuation is
                unsafe, too slow or unavailable, helicopter extraction can
                provide the fastest route to medical care.
              </p>

              <p>
                Each rescue is coordinated according to the patient&apos;s
                condition, exact location, altitude, weather, landing
                availability and aircraft performance. Operations may be
                supported from Kathmandu, Pokhara or Jomsom depending on the
                mission and current aircraft positioning.
              </p>

              <p>
                Mountain Helicopters Nepal uses high-altitude-capable aircraft
                and experienced mountain pilots for rescue missions. Dispatch
                may also involve trekking agencies, guides, insurance
                assistance companies, aviation authorities and receiving
                hospitals in Pokhara or Kathmandu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}