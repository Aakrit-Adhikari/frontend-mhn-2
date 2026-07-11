
import Hero from "@/components/tours/langtang-valley/Hero";
import OverviewSection from "@/components/tours/langtang-valley/OverviewSection";
import FlightExperience from "@/components/tours/langtang-valley/FlightExperience";
import FleetSection from "@/components/tours/langtang-valley/FleetSection";
import Itinerary from "@/components/tours/langtang-valley/Itinerary";
import MajorPeakSection from "@/components/tours/langtang-valley/MajorPeakSection";
import InclusionsExclusions from "@/components/tours/langtang-valley/InclusionsExclusions";
import PriceSection from "@/components/tours/langtang-valley/PriceSection";
import BestTime from "@/components/tours/langtang-valley/BestTime";
import HealthSafetyGuidelines from "@/components/tours/langtang-valley/HealthSafetyGuidelines";
import CancellationPolicy from "@/components/tours/langtang-valley/CancellationPolicy";
import WhyBookWithUs from "@/components/tours/langtang-valley/WhyBookWithUs";
import WhatToPack from "@/components/tours/langtang-valley/WhatToPack";
import Gallary from "@/components/tours/langtang-valley/Gallary";
import Testimonial from "@/components/tours/langtang-valley/Testimonial";
import Faq from "@/components/tours/langtang-valley/Faq";
import Cta from "@/components/tours/langtang-valley/Cta";

export default function Page() {
  return (
    <>
      <Hero/>
      <OverviewSection/>
      <FlightExperience/>
      <FleetSection/>
      <Itinerary/>
      <MajorPeakSection/>
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