import AA from "@/components/AA";
import AASecond from "@/components/AASecond";
import { db, prisma } from "@/prismaData/db";
import React from "react";
import TESTF from "../../components/TESTF";
import TestHooks from "@/components/testHook";
import { arrFavouritesPlaces } from "@/helpers/arr/arr";
import { authOptions } from "@/type-libs/lib";
import { getServerSession } from "next-auth";

interface getSearchParams {
  searchParams: {
    name_airport_from: string;
    name_airport_to: string;
    type: string;
    min_price: string;
    max_price: string;
    name_airlines: string;
    trips: string;
    sort_price: string;
    date_from: Date;
    route_rate: string;
    sort_date: string;
  };
}

const Test2 = async ({ searchParams }: getSearchParams) => {
  // const user2 = await db.table_room_hotel.findMany({
  //   where: {
  //     id_hotel: {
  //       info_Hotel
  //     }
  //   }
  // })
  const user2 = await db.table_room_hotel.findMany({
    where: {
      variaty_hotel: "Hotels",
    },
  });

  const session = await getServerSession(authOptions);

  const ticket = await db.user.findFirst({
    where: { email: session?.user.email! },
  });

  // const currentPage = Number(searchParams?.page) || 1;
  // const totalPage = posts.length

  return (
    <div>
      {user2.map((item) => (
        <>{item.id}</>
      ))}
      {/* {
        user2.map((item) => (
          <>{item.table_room_hotel.map((value) => (
            <></>
          ))}</>
        ))
      } */}
      <TESTF searchParams={searchParams} />
      {arrFavouritesPlaces.map((item) => (
        <TestHooks
          ticket={ticket}
          searchParams={searchParams}
          key={item.id}
          item={item}
        />
      ))}
      {/* <TestHooks searchParams={searchParams} /> */}
      {/* {posts.map((item) => (
            <>{item.id}{item.price}</>
        ))} */}
    </div>
  );
};

export default Test2;
