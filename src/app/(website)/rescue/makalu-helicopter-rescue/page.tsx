import React from 'react'
import AnnapurnaRescueSubNavbar from "@/components/rescue/annapurna-rescue/AnnapurnaRescueSubNavbar";
import MakaluRescueHero from "@/components/rescue/makalu-rescue/MakaluRescueHero";
import MakaluOverview from "@/components/rescue/makalu-rescue/MakaluOverview";
import MakaluWhenToCall from "@/components/rescue/makalu-rescue/MakaluWhenToCall";
import MakaluProcess from "@/components/rescue/makalu-rescue/MakaluProcess";
import MakaluCoverage from "@/components/rescue/makalu-rescue/MakaluCoverage";
import MakaluCosts from "@/components/rescue/makalu-rescue/MakaluCosts";
import AnnapurnaWhatsCovered from "@/components/rescue/annapurna-rescue/AnnapurnaWhatsCovered";
import MakaluFaq from "@/components/rescue/makalu-rescue/MakaluFaq";
import AnnapurnaWhyUs from "@/components/rescue/annapurna-rescue/AnnapurnaWhyUs";
import AnnapurnaEmergencyDispatch from "@/components/rescue/annapurna-rescue/AnnapurnaEmergencyDispatch";

export default function page() {
  return (
    <div>
      <AnnapurnaRescueSubNavbar />
       <MakaluRescueHero />
       <MakaluOverview />
       <MakaluWhenToCall />
       <MakaluProcess />
       <MakaluCoverage />
       <MakaluCosts />
      <AnnapurnaWhatsCovered />
      <MakaluFaq />
      <AnnapurnaWhyUs />
      <AnnapurnaEmergencyDispatch />
    </div>
  )
}
