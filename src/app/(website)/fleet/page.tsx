import Hero from "@/components/fleet/Hero";
import FleetIntro from "@/components/fleet/FleetIntro";
import FleetShowcaseHeader from "@/components/fleet/FleetShowcaseHeader";
import Aircraft from "@/components/fleet/Aircraft";
// import Comparison from "@/components/fleet/Comparison";
// import Safety from "@/components/fleet/Safety";
import Cta from "@/components/fleet/Cta";

export default function Fleet() {
  return (
    <>
      <Hero />
      <FleetIntro />
      <FleetShowcaseHeader />
      <Aircraft />
      {/* <Comparison /> */}
      {/* <Safety /> */}
      <Cta />
    </>
  );
}