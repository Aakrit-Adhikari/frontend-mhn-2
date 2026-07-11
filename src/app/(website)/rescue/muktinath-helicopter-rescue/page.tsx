import React from 'react'
import MuktinathRescueSubNavbar from "@/components/rescue/muktinath-rescue/MuktinathRescueSubNavbar";
import MuktinathRescueHero from "@/components/rescue/muktinath-rescue/MuktinathRescueHero";
import MuktinathOverview from "@/components/rescue/muktinath-rescue/MuktinathOverview";
import MuktinathHighlights from "@/components/rescue/muktinath-rescue/MuktinathHighlights";
import MuktinathWhenToCall from "@/components/rescue/muktinath-rescue/MuktinathWhenToCall";
import MuktinathProcess from "@/components/rescue/muktinath-rescue/MuktinathProcess";
import MuktinathCoverage from "@/components/rescue/muktinath-rescue/MuktinathCoverage";
import MuktinathCosts from "@/components/rescue/muktinath-rescue/MuktinathCosts";
import MuktinathIncluded from "@/components/rescue/muktinath-rescue/MuktinathIncluded";
import MuktinathFaq from "@/components/rescue/muktinath-rescue/MuktinathFaq";
import AnnapurnaWhyUs from "@/components/rescue/annapurna-rescue/AnnapurnaWhyUs";
import AnnapurnaEmergencyDispatch from "@/components/rescue/annapurna-rescue/AnnapurnaEmergencyDispatch";
export default function page() {
  return (
    <div>
      <MuktinathRescueSubNavbar />
      <MuktinathRescueHero />
      <MuktinathOverview />
      <MuktinathHighlights />
      <MuktinathWhenToCall />
      <MuktinathProcess />
      <MuktinathCoverage />
      <MuktinathCosts />
      <MuktinathIncluded />
      <MuktinathFaq />
      <AnnapurnaWhyUs />
      <AnnapurnaEmergencyDispatch />
    </div>
  )
}