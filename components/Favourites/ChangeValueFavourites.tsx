"use client";

import React, { memo, useEffect, useState } from "react";
import ContentHotel from "./ContentHotel";
import ContentFlight from "./ContentFlight";
import { db } from "@/prismaData/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/type-libs/lib";
import { useQuery } from "@tanstack/react-query";
import { Session } from "next-auth";

interface myInt {
  session: any;
  user2: {
    id: string;
    userName: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    lastName: string | null;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    date_birth: string | null;
  } | null;
  user3: {
    userId: string;
    hotelId: number;
  } | null;
  user4: any;
}

// const handleClickChooseee = async () => {
//   const res = await fetch('/api/GetFavouritesFly',{
//     next: {
//       revalidate: 500
//     }
//   })
//   const result = await res.json()
//   console.log(result)
//   // setState(result)
//   return result
// }

const ChangeValueFavourites = memo(function ({
  session,
  user2,
  user3,
  user4,
}: myInt) {
  const [stateValue, setStateValue] = useState<string>("Flyght");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await handleClickChooseee()
  //     setTest(res.user2)
  //   }
  //   fetchData()
  // }, )

  // console.log(test)

  // useEffect(() => {
  //   const handleClickChoose = async () => {
  //     const res = await fetch('/api/GetFavouritesHotel')
  //     const result = await res.json()
  //     console.log(result)
  //     setState(result.user2)
  //   }
  //   handleClickChoose()
  //   console.log("Изменилось")
  //   return () => {
  //     handleClickChoose()
  //   }
  // }, [])

  // const handleClickChoose = async () => {
  //   const res = await fetch("/api/GetFavouritesHotel");
  //   const result = await res.json();
  //   console.log(result);
  //   setState(result);
  // };

  // console.log(sec);
  // // useEffect(() => {
  // //   handleClickChoose()
  // //   handleClickFly()
  // // }, [])

  // console.log(session.id);
  // // console.log(state.user2.length)
  // // console.log(state.user2.userId)
  // console.log(state);
  // console.log(stateFly);
  // // console.log(state.user2.length)

  // // if (isPending) {
  // //   return <div>...Loading</div>
  // // }

  // // if (error) {
  // //     return <div>Error...</div>
  // // }

  // // console.log(data.user2)

  return (
    <div className="favourites__block-main-uu">
      <div className="favourites__block-type-favourites">
        <div
          onClick={() => setStateValue("Flyght")}
          className="favourites__type-flyght"
        >
          <div
            className={
              stateValue === "Flyght"
                ? "favourites__block-inside-uu-active"
                : "favourites__block-inside-uu"
            }
          >
            <p className="favourites__descrption-name">Flyght</p>
            <p className="favourites__description-count-favourite-item">
              Favourites marked
            </p>
          </div>
        </div>
        <div
          onClick={() => {
            setStateValue("Hotels");
          }}
          className="favourites__type-hotel"
        >
          <div
            className={
              stateValue === "Hotels"
                ? "favourites__block-inside-uu-active"
                : "favourites__block-inside-uu"
            }
          >
            <p className="favourites__description-name">Hotels</p>
            <p className="favourites__description-count-length-hotel-item">
              Favourites marked
            </p>
          </div>
        </div>
      </div>
      {stateValue === "Hotels" ? (
        <ContentHotel user3={user3} user2={user2} session={session} />
      ) : (
        <ContentFlight user4={user4} user2={user2} />
      )}
    </div>
  );
});

export default ChangeValueFavourites;
