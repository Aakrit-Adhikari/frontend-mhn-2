
import Hero from "@/components/tours/annapurna-base-camp/Hero";
import OverviewSection from "@/components/tours/annapurna-base-camp/OverviewSection";
import FlightExperience from "@/components/tours/annapurna-base-camp/FlightExperience";
import FleetSection from "@/components/tours/annapurna-base-camp/FleetSection";
import Itinerary from "@/components/tours/annapurna-base-camp/Itinerary";
import MajorPeaksSection from "@/components/tours/annapurna-base-camp/MajorPeaksSection";
import InclusionsExclusions from "@/components/tours/annapurna-base-camp/InclusionsExclusions";
import PriceSection from "@/components/tours/annapurna-base-camp/PriceSection"
import BestTime from "@/components/tours/annapurna-base-camp/BestTime"
import HealthSafetyGuidelines from "@/components/tours/annapurna-base-camp/HealthSafetyGuidelines"
import CancellationPolicy from "@/components/tours/annapurna-base-camp/CancellationPolicy"
import WhyBookWithUs from "@/components/tours/annapurna-base-camp/WhyBookWithUs"
import WhatToPack from "@/components/tours/annapurna-base-camp/WhatToPack"
import Gallary from "@/components/tours/annapurna-base-camp/Gallary"
import Testimonial from "@/components/tours/annapurna-base-camp/Testimonial"
import Faq from "@/components/tours/annapurna-base-camp/Faq"
import Cta from "@/components/tours/annapurna-base-camp/Cta"

export default function Page() {
  return (
    <>
      <Hero/>
      <OverviewSection/>
      <FlightExperience/>
      <FleetSection/>
      <Itinerary/>
      <MajorPeaksSection/>
      <InclusionsExclusions/>
      <PriceSection/>
      <BestTime/>
      <HealthSafetyGuidelines />
      <CancellationPolicy/>
      <WhyBookWithUs/>
      <WhatToPack/>
      <Gallary/>
      <Testimonial/>
      <Faq/>
      <Cta/>
      
    </>
  );
}