import React from 'react'
import RescueSubNavbar from '@/components/rescue/RescueSubNavbar'
import RescueHero from '@/components/rescue/RescueHero'
import WhenToCall from '@/components/rescue/WhenToCall'
import Process from '@/components/rescue/Process'
import Coverage from '@/components/rescue/Coverage'
import Costs from '@/components/rescue/Costs'
import Insurance from '@/components/rescue/Insurance'
import Fleet from '@/components/rescue/Fleet'
import Regions from '@/components/rescue/Regions'
import FaqRescue from '@/components/rescue/FaqRescue'
import EmergencyDispatch from '@/components/rescue/EmergencyDispatch'
export default function page() {
  return (
    <div>
      <RescueSubNavbar />
      <RescueHero/>
      <WhenToCall/>
      <Process/>
      <Coverage />
       <Costs />
       <Insurance />
       <Fleet />
       <Regions />
       <FaqRescue/>
       <EmergencyDispatch />
    </div>
  )
}
