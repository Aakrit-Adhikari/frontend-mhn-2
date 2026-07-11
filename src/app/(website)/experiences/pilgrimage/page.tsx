import Hero from "@/components/experiences/pilgrimage/Hero";
import Highlights from "@/components/experiences/pilgrimage/Highlights";
import ExperienceContent from "@/components/experiences/pilgrimage/ExperienceContent";
import RelatedExperiences from "@/components/experiences/pilgrimage/RelatedExperiences";
import CTA from "@/components/experiences/pilgrimage/Cta";
import MobileBookingBar from "@/components/experiences/pilgrimage/MobileBookingBar";

export default function Pilgrimage() {
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