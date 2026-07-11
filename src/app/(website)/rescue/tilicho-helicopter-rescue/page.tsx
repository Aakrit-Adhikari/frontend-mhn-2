import React from 'react'
import AnnapurnaRescueSubNavbar from "@/components/rescue/annapurna-rescue/AnnapurnaRescueSubNavbar";
import TilichoRescueHero from "@/components/rescue/tilicho-rescue/TilichoRescueHero";
import TilichoOverviewHighlights from "@/components/rescue/tilicho-rescue/TilichoOverviewHighlights";
import TilichoWhenToCall from "@/components/rescue/tilicho-rescue/TilichoWhenToCall";
import TilichoProcess from "@/components/rescue/tilicho-rescue/TilichoProcess";
import TilichoCoverage from "@/components/rescue/tilicho-rescue/TilichoCoverage";
import TilichoCosts from "@/components/rescue/tilicho-rescue/TilichoCosts";
import AnnapurnaWhatsCovered from "@/components/rescue/annapurna-rescue/AnnapurnaWhatsCovered";
import TilichoFaq from "@/components/rescue/tilicho-rescue/TilichoFaq";
import AnnapurnaWhyUs from "@/components/rescue/annapurna-rescue/AnnapurnaWhyUs";
import AnnapurnaEmergencyDispatch from "@/components/rescue/annapurna-rescue/AnnapurnaEmergencyDispatch";

export default function page() {
  return (
    <div>
     <AnnapurnaRescueSubNavbar />
     <TilichoRescueHero />
     <TilichoOverviewHighlights />
     <TilichoWhenToCall />
     <TilichoProcess />
     <TilichoCoverage />
     <TilichoCosts />
     <AnnapurnaWhatsCovered />
     <TilichoFaq />
     <AnnapurnaWhyUs />
     <AnnapurnaEmergencyDispatch />
    </div>
  )
}
