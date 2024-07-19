import HeroBlock from '@/components/Account/Content/HeroBlock'
import React from 'react'
import './../../../styles/Account/board-user.scss'
import HistoryPage from '@/components/Account/HistoryAccount/HistoryPage'
import './../../../styles/Account/history.scss'
import { db } from '@/prismaData/db'

const HistoryAccount = async () => {

//   const user2 = await db.history_table_hotel.findMany({
//     include: {
//         hotel: {
//             include: {
//                 table_type_room: {
//                     where: {
//                         id: Number(Booking_Hotel)
//                     }
//                 }
//             }
//         }
//     }
// })

const res = await db.table_ticket.findFirst ({
  where: {

  }
})

const data = await db.table_history_fly.findMany({
  include: {
    id_type_class: true,
    id_table_route_history: {
      include: {
        Table_ticket: true
      }
    }
  }
})

// console.log(user2)

  return (
    <>
    <div></div>
    {
      data.map((item) => (
        <div key={item.id}>{item.typeClass}{item.idTableRoute}{item.id_table_route_history.Table_ticket.map((item) => (
          <>,,{item.idTableRoute}</>
        ))}</div>
      ))
    }
    {
      data.map((item) => (
        <>{item.id_type_class.idClassTypeTicket}</>
      ))
    }
        <HeroBlock />
        <HistoryPage />
    </>
  )
}

export default HistoryAccount