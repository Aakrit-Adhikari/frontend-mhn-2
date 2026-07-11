import Faq from "@/components/home/Faq";
import StoriesSection from "@/components/home/StoriesSection";
import InstagramSection from "@/components/home/InstagramSection";
import TourSection from "@/components/home/TourSection";
import Destination from "@/components/home/Destination";
import StateSection from "@/components/home/StateSection";
import Hero from "@/components/home/Hero";
import Aboutus from "@/components/home/Aboutus";
import RescueSection from "@/components/home/RescueSection";
import Testimonial from "@/components/home/Testimonial";
import Cta from "@/components/home/Cta";

export default function page() {
  return (
    <> 
      <Hero/>
      <StateSection/>
      <Destination/>
      <TourSection/>
      <Aboutus/>
      <RescueSection/>
      <Testimonial/>
      <InstagramSection/>
      <StoriesSection/>
      <Faq/>
      <Cta/>
    </>
  )
}


