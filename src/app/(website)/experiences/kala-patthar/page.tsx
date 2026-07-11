import Hero from "@/components/experiences/kala-patthar/Hero";
import Highlights from "@/components/experiences/kala-patthar/Highlights";
import ExperienceContent from "@/components/experiences/kala-patthar/ExperienceContent";
import RelatedExperiences from "@/components/experiences/kala-patthar/RelatedExperiences";
import CTA from "@/components/experiences/kala-patthar/Cta";
import MobileBookingBar from "@/components/experiences/kala-patthar/MobileBookingBar";

export default function KalaPatthar() {
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