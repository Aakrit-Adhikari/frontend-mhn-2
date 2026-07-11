import Hero from "@/components/experiences/celebrations/Hero";
import Highlights from "@/components/experiences/celebrations/Highlights";
import ExperienceContent from "@/components/experiences/celebrations/ExperienceContent";
import RelatedExperiences from "@/components/experiences/celebrations/RelatedExperiences";
import CTA from "@/components/experiences/celebrations/Cta";
import MobileBookingBar from "@/components/experiences/celebrations/MobileBookingBar";

export default function CelebrationsPage() {
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