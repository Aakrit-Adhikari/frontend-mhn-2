import Hero from "@/components/experiences/Hero";
import Feeling from "@/components/experiences/Feeling";
import Experiences from "@/components/experiences/Experiences";
import Process from "@/components/experiences/Process";
import Safety from "@/components/experiences/Safety";
import Testimonials from "@/components/experiences/Testimonials";
import FAQ from "@/components/experiences/Faq";
import CTA from "@/components/experiences/Cta";

export default function Experience() {
  return (
    <>
      <Hero />
      <Feeling />
      <Experiences />
      <Process />
      <Safety />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}