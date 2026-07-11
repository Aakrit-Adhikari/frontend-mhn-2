import Hero from "@/components/about/Hero";
import TrustStrip from "@/components/about/TrustStrip";
import Story from "@/components/about/Story";
import Timeline from "@/components/about/Timeline";
import Records from "@/components/about/Records";
import Missions from "@/components/about/Missions";
import SafetyCulture from "@/components/about/SafetyCulture";
import FleetShowcase from "@/components/about/FleetShowcase";
import Testimonials from "@/components/about/Testimonials";
import Certifications from "@/components/about/Certifications";
import CTA from "@/components/about/Cta";

export default function About() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Story />
      <Timeline />
      <Records />
      <Missions />
      <SafetyCulture />
      <FleetShowcase />
      <Testimonials />
      <Certifications />
      <CTA />
    </>
  );
}