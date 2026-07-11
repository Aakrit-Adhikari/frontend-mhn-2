import React from 'react'
import AnnapurnaRescueSubNavbar from "@/components/rescue/annapurna-rescue/AnnapurnaRescueSubNavbar";
import LangtangRescueHero from "@/components/rescue/langtang-rescue/LangtangRescueHero";
import LangtangOverview from "@/components/rescue/langtang-rescue/LangtangOverview";
import LangtangWhenToCall from "@/components/rescue/langtang-rescue/LangtangWhenToCall";
import LangtangProcess from "@/components/rescue/langtang-rescue/LangtangProcess";
import LangtangCoverage from "@/components/rescue/langtang-rescue/LangtangCoverage";
import LangtangCosts from "@/components/rescue/langtang-rescue/LangtangCosts";
import LangtangWhatsCovered from "@/components/rescue/langtang-rescue/LangtangWhatsCovered";
import LangtangFaq from "@/components/rescue/langtang-rescue/LangtangFaq";
import AnnapurnaWhyUs from "@/components/rescue/annapurna-rescue/AnnapurnaWhyUs";
import AnnapurnaEmergencyDispatch from "@/components/rescue/annapurna-rescue/AnnapurnaEmergencyDispatch";
export default function page() {
  return (
    <div>
      <AnnapurnaRescueSubNavbar />
      <LangtangRescueHero />
      <LangtangOverview />
      <LangtangWhenToCall />
      <LangtangProcess />
      <LangtangCoverage />
      <LangtangCosts />
      <LangtangWhatsCovered />
      <LangtangFaq />
      <AnnapurnaWhyUs />
      <AnnapurnaEmergencyDispatch />

    </div>
  )
}
