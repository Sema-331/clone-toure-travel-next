"use client";

import { dateTrip } from "@/helpers/Helperdb/DateTripTicket";
import React, { useState } from "react";
import InputTrips from "./InputTrips";
import Image from "next/image";
import arrow_down from "./../../../public/images/chevron_down_down.png";
import arrow_up from "./../../../public/images/chevron_down_up.png";

interface PropDate {
  handleFnCheckedInputTrips: (
    v: boolean,
    typeToRemove: string,
    type: string
  ) => void;
}

const BlockTripsTicket = ({ handleFnCheckedInputTrips }: PropDate) => {
  const [stateTrip, setStateTrip] = useState<boolean>(true);

  return (
    <div className="fly-res__block-main-trips">
      <div
        onClick={() => setStateTrip(!stateTrip)}
        className="fly-res__block-trips"
      >
        <h2 className="fly-res__trips">Trips</h2>
        {stateTrip ? (
          <Image
            src={arrow_up}
            alt="image_open_filter"
            className="fly-res__image-trips"
          />
        ) : (
          <Image
            src={arrow_down}
            alt="image_open_filter"
            className="fly-res__image-trips"
          />
        )}
      </div>
      {stateTrip ? (
        <div className="fly-res__block-option-trips">
          {dateTrip.map((item) => (
            <InputTrips
              handleFnCheckedInputTrips={handleFnCheckedInputTrips}
              key={item.id}
              item={item.value}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default BlockTripsTicket;
