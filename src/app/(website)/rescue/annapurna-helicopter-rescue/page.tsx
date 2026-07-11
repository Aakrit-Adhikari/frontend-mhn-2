import React from 'react'
import AnnapurnaRescueSubNavbar from "@/components/rescue/annapurna-rescue/AnnapurnaRescueSubNavbar";
import AnnapurnaRescueHero from "@/components/rescue/annapurna-rescue/AnnapurnaRescueHero";
import AnnapurnaOverview from "@/components/rescue/annapurna-rescue/AnnapurnaOverview";
import AnnapurnaWhenToCall from "@/components/rescue/annapurna-rescue/AnnapurnaWhenToCall";
import AnnapurnaProcess from "@/components/rescue/annapurna-rescue/AnnapurnaProcess";
import AnnapurnaCoverage from "@/components/rescue/annapurna-rescue/AnnapurnaCoverage";
import AnnapurnaCosts from "@/components/rescue/annapurna-rescue/AnnapurnaCosts";
import AnnapurnaWhatsCovered from "@/components/rescue/annapurna-rescue/AnnapurnaWhatsCovered";
import AnnapurnaFaq from "@/components/rescue/annapurna-rescue/AnnapurnaFaq";
import AnnapurnaWhyUs from "@/components/rescue/annapurna-rescue/AnnapurnaWhyUs";
import AnnapurnaEmergencyDispatch from "@/components/rescue/annapurna-rescue/AnnapurnaEmergencyDispatch";

export default function page() {
  return (
    <div>
      <AnnapurnaRescueSubNavbar />
      <AnnapurnaRescueHero />
      <AnnapurnaOverview />
      <AnnapurnaWhenToCall />
      <AnnapurnaProcess />
      <AnnapurnaCoverage />
      <AnnapurnaCosts />
      <AnnapurnaWhatsCovered />
      <AnnapurnaFaq />
      <AnnapurnaWhyUs />
      <AnnapurnaEmergencyDispatch />
    </div>
  )
}
