import React from 'react'
import KalaPattharSubNavbar from "@/components/rescue/kalapatthar-rescue/KalaPattharSubNavbar";
import KalaPattharHero from "@/components/rescue/kalapatthar-rescue/KalaPattharHero";
import KalaPattharCoverage from "@/components/rescue/kalapatthar-rescue/KalaPattharCoverage";
import KalaPattharProcess from "@/components/rescue/kalapatthar-rescue/KalaPattharProcess";
import AnnapurnaWhatsCovered from "@/components/rescue/annapurna-rescue/AnnapurnaWhatsCovered";

import AnnapurnaWhyUs from "@/components/rescue/annapurna-rescue/AnnapurnaWhyUs";
import AnnapurnaEmergencyDispatch from "@/components/rescue/annapurna-rescue/AnnapurnaEmergencyDispatch";

export default function page() {
  return (
    <div>
      <KalaPattharSubNavbar />
      <KalaPattharHero />
      <KalaPattharCoverage />
      <KalaPattharProcess />

      <AnnapurnaWhatsCovered />
     
      <AnnapurnaWhyUs />
      <AnnapurnaEmergencyDispatch />
    </div>
  )
}
