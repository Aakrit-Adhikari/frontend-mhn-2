import Hero from "@/components/experiences/photo-flight/Hero";
import Highlights from "@/components/experiences/photo-flight/Highlights";
import ExperienceContent from "@/components/experiences/photo-flight/ExperienceContent";
import RelatedExperiences from "@/components/experiences/photo-flight/RelatedExperiences";
import CTA from "@/components/experiences/photo-flight/Cta";
import MobileBookingBar from "@/components/experiences/photo-flight/MobileBookingBar";

export default function PhotoFlightPage() {
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