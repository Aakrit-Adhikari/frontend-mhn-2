import React from 'react'
import RescueDetailSubNavbar from '@/components/rescue/everest-rescue/RescueDetailSubNavbar'
import EverestRescueHero from '@/components/rescue/everest-rescue/EverestRescueHero'
import EverestOverview from '@/components/rescue/everest-rescue/EverestOverview'
import EverestWhenToCall from '@/components/rescue/everest-rescue/EverestWhenToCall'
import EverestProcess from '@/components/rescue/everest-rescue/EverestProcess'
import EverestCoverage from '@/components/rescue/everest-rescue/EverestCoverage'
import EverestCosts from '@/components/rescue/everest-rescue/EverestCosts'
import EverestAircraftRoute from '@/components/rescue/everest-rescue/EverestAircraftRoute'
import EverestMedicalCoordination from '@/components/rescue/everest-rescue/EverestMedicalCoordination'
import EverestInsurance from '@/components/rescue/everest-rescue/EverestInsurance'
import EverestFaq from '@/components/rescue/everest-rescue/EverestFaq'
import EverestRelatedRoutes from '@/components/rescue/everest-rescue/EverestRelatedRoutes'
import EverestEmergencyDispatch from '@/components/rescue/everest-rescue/EverestEmergencyDispatch'
export default function page() {
  return (
    <div>
    <RescueDetailSubNavbar />
    <EverestRescueHero />
     <EverestOverview />
     <EverestWhenToCall />
     <EverestProcess />
     <EverestCoverage />
     <EverestCosts />
     <EverestAircraftRoute />
     <EverestMedicalCoordination />
      <EverestInsurance />
       <EverestFaq />
       <EverestRelatedRoutes />
       <EverestEmergencyDispatch />
    </div>
  )
}
