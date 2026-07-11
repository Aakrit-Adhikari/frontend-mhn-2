import Hero from "@/components/experiences/private-charter/Hero";
import Highlights from "@/components/experiences/private-charter/Highlights";
import ExperienceContent from "@/components/experiences/private-charter/ExperienceContent";
import RelatedExperiences from "@/components/experiences/private-charter/RelatedExperiences";
import CTA from "@/components/experiences/private-charter/Cta";
import MobileBookingBar from "@/components/experiences/private-charter/MobileBookingBar";

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