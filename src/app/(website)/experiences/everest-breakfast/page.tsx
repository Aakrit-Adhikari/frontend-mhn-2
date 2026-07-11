import Hero from "@/components/experiences/everest-breakfast/Hero";
import Highlights from "@/components/experiences/everest-breakfast/Highlights";
import ExperienceContent from "@/components/experiences/everest-breakfast/ExperienceContent";
import RelatedExperiences from "@/components/experiences/everest-breakfast/RelatedExperiences";
import CTA from "@/components/experiences/everest-breakfast/Cta";
import MobileBookingBar from "@/components/experiences/everest-breakfast/MobileBookingBar";

export default function EverestBreakfast() {
  return (
    <>
      <Hero />
      <Highlights />
      <ExperienceContent />
      <RelatedExperiences />
      <MobileBookingBar />
      <CTA />
      
    </>
  );
}