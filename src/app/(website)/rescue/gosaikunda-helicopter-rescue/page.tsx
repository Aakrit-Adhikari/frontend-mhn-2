import React from 'react'
import AnnapurnaRescueSubNavbar from "@/components/rescue/annapurna-rescue/AnnapurnaRescueSubNavbar";
import GosaikundaRescueHero from "@/components/rescue/gosaikunda-rescue/GosaikundaRescueHero";
import GosaikundaOverview from "@/components/rescue/gosaikunda-rescue/GosaikundaOverview";
import GosaikundaWhenToCall from "@/components/rescue/gosaikunda-rescue/GosaikundaWhenToCall";
import GosaikundaProcess from "@/components/rescue/gosaikunda-rescue/GosaikundaProcess";
import GosaikundaCoverage from "@/components/rescue/gosaikunda-rescue/GosaikundaCoverage";
import GosaikundaCosts from "@/components/rescue/gosaikunda-rescue/GosaikundaCosts";
import AnnapurnaWhatsCovered from "@/components/rescue/annapurna-rescue/AnnapurnaWhatsCovered";
import GosaikundaFaq from "@/components/rescue/gosaikunda-rescue/GosaikundaFaq";
import GosaikundaWhyUs from "@/components/rescue/gosaikunda-rescue/GosaikundaWhyUs";
import AnnapurnaEmergencyDispatch from "@/components/rescue/annapurna-rescue/AnnapurnaEmergencyDispatch";


export default function page() {
  return (
    <div>
      <AnnapurnaRescueSubNavbar />
      <GosaikundaRescueHero />
      <GosaikundaOverview />
      <GosaikundaWhenToCall />
       <GosaikundaProcess />
       <GosaikundaCoverage />
        <GosaikundaCosts />
         <AnnapurnaWhatsCovered />
          <GosaikundaFaq />
          <GosaikundaWhyUs />
           <AnnapurnaEmergencyDispatch />

    </div>
  )
}
