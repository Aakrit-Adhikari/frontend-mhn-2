import Story from "./Story";
import RidgeGuide from "./RidgeGuide";
import Journey from "./Journey";
import Physiology from "./Physiology";
import Comparison from "./Comparison";
import DesignedFor from "./DesignedFor";
import Essentials from "./Essentials";
import SeasonGuide from "./SeasonGuide";
import Testimonials from "./Testimonials";
import FAQ from "./Faq";
import BookingSidebar from "./BookingSidebar";

export default function ExperienceContent() {
  return (
    <section
      id="story"
      className="border-b border-[#E2E8F0] bg-[#F8FAFC] px-6 py-20 md:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid items-start gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <div className="min-w-0 space-y-20">
            <Story />
            <RidgeGuide />
            <Journey />
            <Physiology />
            <Comparison />
            <DesignedFor />
            <Essentials />
            <SeasonGuide />
            <Testimonials />
            <FAQ />
          </div>

          <BookingSidebar />
        </div>
      </div>
    </section>
  );
}