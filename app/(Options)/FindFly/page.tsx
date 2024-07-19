import Hero from '@/components/FlyghtOption/Hero/Hero'
import Options from '@/components/FlyghtOption/Options/Options'
import Places from '@/components/FlyghtOption/Places/Places'
import Tender from '@/components/FlyghtOption/Tender/Tender'
import React from 'react'

interface getSearchParams {
  searchParams: {
    name_airport_from: string;
    name_airport_to: string;
    type: string;
    date_from: Date
  }
}

const FindFly = async ({searchParams}: getSearchParams) => {

  return (
    <>
        <Hero searchParams={searchParams} />
        <Places />
        <Options searchParams={searchParams} />
        <Tender />
    </>
  )
}

export default FindFly