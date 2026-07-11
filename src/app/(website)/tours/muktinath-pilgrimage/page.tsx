import Hero from "@/components/tours/muktinath-pilgrimage/Hero";
import OverviewSection from "@/components/tours/muktinath-pilgrimage/OverviewSection";
import FlightExperience from "@/components/tours/muktinath-pilgrimage/FlightExperience";
import FleetSection from "@/components/tours/muktinath-pilgrimage/FleetSection";
import Itinerary from "@/components/tours/muktinath-pilgrimage/Itinerary";
import MajorPeaksSection from "@/components/tours/muktinath-pilgrimage/MajorPeaksSection";
import InclusionsExclusions from "@/components/tours/muktinath-pilgrimage/InclusionsExclusions";
import PriceSection from "@/components/tours/muktinath-pilgrimage/PriceSection";
import BestTime from "@/components/tours/muktinath-pilgrimage/BestTime";
import HealthSafetyGuidelines from "@/components/tours/muktinath-pilgrimage/HealthSafetyGuidelines";
import CancellationPolicy from "@/components/tours/muktinath-pilgrimage/CancellationPolicy";
import WhyBookWithUs from "@/components/tours/muktinath-pilgrimage/WhyBookWithUs";
import WhatToPack from "@/components/tours/muktinath-pilgrimage/WhatToPack";
import Gallary from "@/components/tours/muktinath-pilgrimage/Gallary"
import Testimonial from "@/components/tours/muktinath-pilgrimage/Testimonial"
import Faq from "@/components/tours/muktinath-pilgrimage/Faq"
import Cta from "@/components/tours/muktinath-pilgrimage/Cta"


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