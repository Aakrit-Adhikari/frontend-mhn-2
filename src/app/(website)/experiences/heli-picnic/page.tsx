import Hero from "@/components/experiences/heli-picnic/Hero";
import Highlights from "@/components/experiences/heli-picnic/Highlights";
import ExperienceContent from "@/components/experiences/heli-picnic/ExperienceContent";
import RelatedExperiences from "@/components/experiences/heli-picnic/RelatedExperiences";
import CTA from "@/components/experiences/heli-picnic/Cta";
import MobileBookingBar from "@/components/experiences/heli-picnic/MobileBookingBar";

export default function HeliPicnic() {
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