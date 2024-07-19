"use client"

import React, { useState } from 'react'
import { useAppSelector } from '@/helperRedux/helperRedux'
import AddFavouritesBtn from './AddFavouritesBtn'
import ComponentModalAuth from './ComponentModalAuth'
import Cookie from 'js-cookie'

interface IntItem {
  item?: {
    id: number;
    name_hotel: string;
    userId: string;
    star_hotel: string | null;
    check_in_date: Date;
    check_out_date: Date;
    room_number: number;
    price: string;
    rate: string;
    geo_hotel: string;
    freebies_options: string[];
    amenities_option: string[];
    variaty_hotel: string;
    idHotel: number;
  },
  user2?: any
}

const  FavouritesComponents = ({item, user2}: IntItem) => {

  const loggedIn = Cookie.get('loggedin')
  const selector = useAppSelector((item) => item.redSlice.checkLoginUser)
  const [stateModalCheckUser, setStateModalCheckUser] = useState<boolean>(false)

  return (
    <> 
      {
          loggedIn ? <>
              <AddFavouritesBtn itemSecond={user2} item={item} />
          </> : <ComponentModalAuth />
      }
    </>
  )
}

export default FavouritesComponents