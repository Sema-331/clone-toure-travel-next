import AA from '@/components/AA';
import AASecond from '@/components/AASecond';
import { db, prisma } from '@/prismaData/db';
import React from 'react'

interface getSearchParams {
    searchParams: {
      search: string;
      sort_price: string;
      variaty: string
      page: string
    }
}

const Test = async ({ searchParams }: getSearchParams) => {

    const posts = await prisma.table_room_hotel.findMany({

    })

    // const user2 = await db.table_room_hotel.findMany({
    //   where: {
    //     id_hotel: {
    //       info_Hotel
    //     }
    //   }
    // })
    const user2 = await db.table_room_hotel.findMany({
      where: {
        variaty_hotel: 'Hotels'
      }
    })

    const currentPage = Number(searchParams?.page) || 1;
    const totalPage = posts.length

  return (
    <div>
      {
        user2.map((item) => (
          <>{item.id}</>
        ))
      }
      {/* {
        user2.map((item) => (
          <>{item.table_room_hotel.map((value) => (
            <></>
          ))}</>
        ))
      } */}
        <AASecond searchParams={searchParams} posts={posts} />
        {/* {posts.map((item) => (
            <>{item.id}{item.price}</>
        ))} */}
    </div>
  )
}

export default Test