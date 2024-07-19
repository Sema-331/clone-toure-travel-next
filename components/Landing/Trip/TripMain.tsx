"use client";

import { arrFavouritesPlaces } from "@/helpers/arr/arr";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TripSolo from "./TripSolo";
import { useAppDispatch, useAppSelector } from "@/helperRedux/helperRedux";
import { useRouter, useSearchParams } from "next/navigation";
import { handlePuchValue } from "@/slice/slices";
import { Usertype } from "@/interfaces/interface";
import BtnNoFill from "@/components/BtnNoFill/BtnNoFill";
import {
  urlSearchFOrmHotel,
  urlSearchFormTicket,
} from "@/services/UpdateInfoUser";

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
    date_from: Date;
    date_from_hotel: Date;
    type_room: string;
    date_check_out: string;
  };
  user2: Usertype | null;
}

const TripMain = ({ searchParams, user2 }: getSearchParams) => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState([]);

  const search = useSearchParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await urlSearchFormTicket(searchParams);
        setState(data);
        dispatch(handlePuchValue(data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [searchParams]);

  // function formatDateString(dateString: string, day_value: number = 0) {
  //   const decodedDateString = decodeURIComponent(dateString);
  //   const date = new Date(decodedDateString);
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, "0");
  //   const day = String(date.getDate()).padStart(2, "0");
  //   const newRes = Number(day) + Number(day + day_value ? day_value : 0);
  //   console.log(dateString);
  //   return `${year}/${month}/${newRes}`;
  // }

  /*HOTEL*/

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await urlSearchFOrmHotel(searchParams);
        setState(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <section>
      <div className="container">
        <div className="trip__block-main">
          <div className="trip__block-headers">
            <div className="trip__block-headers-inside">
              <h2 className="trip__header-block">Plan your perfect trip</h2>
              <p className="trip__description-block">
                Search Flights & Places Hire to our most popular destinations
              </p>
            </div>
            <BtnNoFill href="/FindHotel" className="trip__btn-more-placeses">
              See more places
            </BtnNoFill>
          </div>
          <div className="trip__block-placeses">
            {arrFavouritesPlaces.map((item) => (
              <TripSolo
                key={item.id}
                // formatDateString={formatDateString}
                user2={user2}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripMain;
