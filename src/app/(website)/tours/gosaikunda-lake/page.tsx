import React from 'react'
import Hero from "@/components/tours/gosaikunda-lake/Hero";
import OverviewSection from "@/components/tours/gosaikunda-lake/OverviewSection";
import FlightExperience from "@/components/tours/gosaikunda-lake/FlightExperience";
import FleetSection from "@/components/tours/gosaikunda-lake/FleetSection";
import Itinerary from "@/components/tours/gosaikunda-lake/Itinerary";
import MajorPeakSection from "@/components/tours/gosaikunda-lake/MajorPeakSection";
import InclusionsExclusions from "@/components/tours/gosaikunda-lake/InclusionsExclusions";
import PriceSection from '@/components/tours/gosaikunda-lake/PriceSection'
import BestTime from "@/components/tours/gosaikunda-lake/BestTime"
import HealthSafetyGuidelines from "@/components/tours/gosaikunda-lake/HealthSafetyGuidelines"
import CancellationPolicy from "@/components/tours/gosaikunda-lake/CancellationPolicy"
import WhyBookWithUs from "@/components/tours/gosaikunda-lake/WhyBookWithUs"
import WhatToPack from "@/components/tours/gosaikunda-lake/WhatToPack"
import Gallary from '@/components/tours/gosaikunda-lake/Gallary'
import Testimonial from '@/components/tours/gosaikunda-lake/Testimonial'
import Faq from "@/components/tours/gosaikunda-lake/Faq"
import Cta from "@/components/tours/gosaikunda-lake/Cta"

export default function page() {
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
