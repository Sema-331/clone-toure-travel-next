"use client";

import { btnrate } from "@/helpers/Helperdb/btnRate";
import Image from "next/image";
import React, { useState } from "react";
import arrow_down from "./../../../public/images/chevron_down_down.png";
import arrow_up from "./../../../public/images/chevron_down_up.png";

interface PropDat {
  stateRat: boolean;
  setStateRat: (e: boolean) => void;
  setStateRateRoute: (v: any) => void;
}

const FilterRateByTicket = ({
  stateRat,
  setStateRat,
  setStateRateRoute,
}: PropDat) => {
  const [states, setStates] = useState<any>();
  const handleChangeClick = (value: number) => {
    setStates(value);
  };
  return (
    <div className="fly-res__block-rat">
      <div
        onClick={() => setStateRat(!stateRat)}
        className="fly-res__block-inside-name"
      >
        <h3 className="fly-res__rat-header">Rating</h3>
        {stateRat ? (
          <Image
            src={arrow_up}
            alt="image_close-content"
            className="fly-res__image-rat"
          />
        ) : (
          <Image
            src={arrow_down}
            alt="image_close-content"
            className="fly-res__image-rat"
          />
        )}
      </div>
      {stateRat ? (
        <div className="fly-res__block-class-lane">
          {btnrate.map((item: { id: any; value: string }) => (
            <button
              type="button"
              key={item.id}
              onClick={() => {
                setStateRateRoute(item.id);
                handleChangeClick(item.id);
              }}
              className={
                item.id === states
                  ? "fly-res__btn-lane-value-active"
                  : "fly-res__btn-lane-value"
              }
            >
              {item.value}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FilterRateByTicket;
