import React from 'react'
import AnnapurnaRescueSubNavbar from "@/components/rescue/annapurna-rescue/AnnapurnaRescueSubNavbar";
import MardiRescueHero from "@/components/rescue/mardi-rescue/MardiRescueHero";
import MardiWhenToCall from "@/components/rescue/mardi-rescue/MardiWhenToCall";
import MardiProcess from "@/components/rescue/mardi-rescue/MardiProcess";
import MardiCoverage from "@/components/rescue/mardi-rescue/MardiCoverage";
import MardiCosts from "@/components/rescue/mardi-rescue/MardiCosts";

import AnnapurnaWhatsCovered from "@/components/rescue/annapurna-rescue/AnnapurnaWhatsCovered";
import MardiFaq from "@/components/rescue/mardi-rescue/MardiFaq";
import AnnapurnaWhyUs from "@/components/rescue/annapurna-rescue/AnnapurnaWhyUs";
import AnnapurnaEmergencyDispatch from "@/components/rescue/annapurna-rescue/AnnapurnaEmergencyDispatch";

export default function page() {
  return (
    <div>
      <AnnapurnaRescueSubNavbar />
       <MardiRescueHero />
       <MardiWhenToCall />
       <MardiProcess />
       <MardiCoverage />
        <MardiCosts />

      <AnnapurnaWhatsCovered />
         <MardiFaq />
      <AnnapurnaWhyUs />
      <AnnapurnaEmergencyDispatch />
    </div>
  )
}
 