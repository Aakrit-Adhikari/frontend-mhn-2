import StatsSection from "@/components/tours/StatsSection";
import FeatureSection from "@/components/tours/FeaturedSection";
import Testimonial from "@/components/tours/Testimonial";
import Faq from "@/components/tours/Faq";
import Cta from "@/components/tours/Cta";
import Hero from "@/components/tours/Hero";

export default function Tour() {
  return (
    <>
     <Hero/>
     <StatsSection/>
     <FeatureSection/>
     <Testimonial/>
     <Faq/>
     <Cta/>
    </>
  )
}