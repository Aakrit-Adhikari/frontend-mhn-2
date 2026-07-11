import Hero from "@/components/tours/everest-base-camp/Hero";
import OverviewSection from "@/components/tours/everest-base-camp/OverviewSection";
import FlightExperience from "@/components/tours/everest-base-camp/FlightExperience";
import FleetSection from "@/components/tours/everest-base-camp/FleetSection";
import Itinerary from "@/components/tours/everest-base-camp/Itinerary";
import MajorPeaksSection from "@/components/tours/everest-base-camp/MajorPeaksSection";
import InclusionsExclusions from "@/components/tours/everest-base-camp/InclusionsExclusions";
import PriceSection from "@/components/tours/everest-base-camp/PriceSection";
import BestTime from "@/components/tours/everest-base-camp/BestTime";
import HealthSafetyGuidelines from "@/components/tours/everest-base-camp/HealthSafetyGuidelines";
import CancellationPolicy from "@/components/tours/everest-base-camp/CancellationPolicy";
import WhyBookWithUs from "@/components/tours/everest-base-camp/WhyBookWithUs";
import WhatToPack from "@/components/tours/everest-base-camp/WhatToPack";
import Gallary from "@/components/tours/everest-base-camp/Gallary";
import Testimonial from "@/components/tours/everest-base-camp/Testimonial";
import Faq from "@/components/tours/everest-base-camp/Faq";
import Cta from "@/components/tours/everest-base-camp/Cta";

export default function Page() {
  return (
    <>
      <Hero />
      <OverviewSection />
      <FlightExperience />
      <FleetSection />
      <Itinerary />
      <MajorPeaksSection />
      <InclusionsExclusions />
      <PriceSection />
      <BestTime />
      <HealthSafetyGuidelines />
      <CancellationPolicy />
      <WhyBookWithUs />
      <WhatToPack />
      <Gallary />
      <Testimonial />
      <Faq />
      <Cta />
    </>
  );
}
