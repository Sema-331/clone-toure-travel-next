"use client";

import React, { useEffect, useState } from "react";
import BlockForm from "./BlockForm";
import { db, prisma } from "@/prismaData/db";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/helperRedux/helperRedux";
import { handlePuchValue } from "@/slice/slices";
import Cookie from "js-cookie";
import URLSearchTicket from "@/hooks/URLSearchTicket";
import URLSearchHotel from "@/hooks/URLSearchHotel";

interface getSearchParams {
  searchParams: {
    search: string;
    variaty: string;
    sort_price: string;
    hotel_rate: string;
    freebies_options: string;
    amenities_options: string;
    min_price: string;
    max_price: string;
    name_airport_from: string;
    name_airport_to: string;
    type: string;
    date_from_hotel: Date;
    date_from: Date;
    date_check_out: string;
    type_room: string;
  };
}

// async function myFn() {
//   const user = await db.hotel.findMany({
//     include: {
//       table_room_hotel: true,
//     },
//     where: {
//       table_room_hotel: {
//         some: {
//           rate: "Vanilla",
//         },
//       },
//     },
//   });
//   // return user
//   const user2 = await db.table_room_hotel.findMany({});
//   return { user, user2 };
// }

const Hero = ({ searchParams }: getSearchParams) => {
  const gelLogin = Cookie.get("loggedin");
  console.log("getLogin: " + gelLogin);

  /**hotel**/

  const {
    searchQuery,
    setSearchQuery,
    onSearch,
    setNameTypes,
    setDateStartFroms,
    setDateCheckout,
  } = URLSearchHotel(searchParams);

  /**ticket**/

  const {
    setNameType,
    setDateStartFrom,
    setNameAirportTo,
    setNameAirportFrom,
    onSearchTicket,
  } = URLSearchTicket(searchParams);

  return (
    <section>
      <div className="container">
        <div className="search__block-uu">
          <div className="serach">
            <div className="search__block-main">
              <h2 className="search__header-sec">Helping Others</h2>
              <h1 className="search__header-first">LIVE & TRAVEL</h1>
              <p className="search__description-headers">
                Special offers to suit your plan
              </p>
            </div>
          </div>
          <BlockForm
            setNameType={setNameType}
            setDateStartFrom={setDateStartFrom}
            setNameAirportTo={setNameAirportTo}
            setNameAirportFrom={setNameAirportFrom}
            onSearchTicket={onSearchTicket}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={onSearch}
            setNameTypes={setNameTypes}
            setDateStartFroms={setDateStartFroms}
            setDateCheckout={setDateCheckout}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
