"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@mui/material";
import TripsCity from "./TripsCity";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/helperRedux/helperRedux";
import { Usertype } from "@/interfaces/interface";
import { formatDateString } from "@/helpers/FormDateString";

interface PropDate {
  item: any;
  user2: Usertype | null;
  // formatDateString: any;
}

const TripSolo = ({ item, user2 }: PropDate) => {
  const selector = useAppSelector((item) => item.redSlice.stateCity);
  const [stateGeo, setStateGeo] = useState<boolean>(false);

  const router = useRouter();
  const dates = formatDateString(new Date().toString());
  const onSearchTicket = (event: React.FormEvent) => {
    event.preventDefault();
    if (user2?.adress?.length || selector.length > 0) {
      setStateGeo(false);
      const newUrl = `/FindFly/FlightList_result?name_airport_from=${
        user2?.adress ? user2?.adress : selector
      }&name_airport_to=${item.airport_to}&type=Econom&date_from=${dates}`;

      router.push(newUrl);
    } else {
      setStateGeo(true);
    }
  };

  /*hotel*/
  const datesCheckOut = formatDateString(new Date().toString(), 5);
  const onSearchHotel = (event: React.FormEvent) => {
    event.preventDefault();
    if (user2?.adress?.length || selector.length > 0) {
      setStateGeo(false);
      const newUrl = `/FindHotel/ResultsHotels?search=${item.title}&date_from_hotel=${dates}&date_check_out=${datesCheckOut}&type_room=1 double bed or 2 twin beds&variaty=Hotels`;
      router.push(newUrl);
    } else {
      setStateGeo(true);
    }
  };

  console.log(user2?.adress);
  console.log(selector);

  return (
    <>
      <div className="trip__block-places-list-box" key={item.id}>
        <div className="trip__block-places-image">
          <Image
            alt="image_places"
            className="trip__images-places"
            src={item.image}
          />
        </div>
        <div className="trip__block-description-place">
          <h2 className="trip__header-places-block">{item.title}</h2>
          <div className="trip__block-lis-box-description">
            <Button
              onClick={onSearchTicket}
              type={user2?.adress ? "submit" : "button"}
              variant="contained"
              className="trip__description-places"
            >
              {item.description1}
            </Button>
            <Button
              onClick={onSearchHotel}
              variant="contained"
              className="trip__description-places"
            >
              {item.description2}
            </Button>
            <Button variant="contained" className="trip__description-places">
              {item.description3}
            </Button>
          </div>
        </div>
      </div>
      {/* {
            user2?.adress ? :
        } */}
      {/* {
            stateGeo ? <TripsCity onSearchTicket={onSearchTicket} setStateGeo={setStateGeo} /> : null
        } */}
    </>
  );
};

export default TripSolo;
