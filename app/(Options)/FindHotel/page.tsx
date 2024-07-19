import Options from '@/components/FlyghtOption/Options/Options'
import Tender from '@/components/FlyghtOption/Tender/Tender'
import MainPageGotel from '@/components/Hotel/MainHotel/MainPageGotel'
import OptionsHotel from '@/components/Hotel/MainHotel/OptionsHotel'
import RecentSearches from '@/components/Hotel/MainHotel/RecentSearches'
import React from 'react'

interface getSearchParams {
  searchParams: {
    search: string;
    variaty: string;
    date_from_hotel: Date,
    date_check_out: string,
    type_room: string,
  }
}

const FindHotelMain = ({ searchParams }: getSearchParams) => {
  return (
    <>
        <MainPageGotel searchParams={searchParams} />
        <RecentSearches />
        <OptionsHotel searchParams={searchParams}/>
        <Tender />
    </>
  )
}

export default FindHotelMain