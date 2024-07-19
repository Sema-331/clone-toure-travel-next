"use client";

import { airlins } from "@/helpers/Helperdb/AirlinesDb";
import Image from "next/image";
import arrow_down from "./../../../public/images/chevron_down_down.png";
import arrow_up from "./../../../public/images/chevron_down_up.png";
import React, { useState } from "react";
import InputNameCompany from "./InputNameCompany";

interface PropDate {
  handleFnCheckedInput: any;
}

const AirlinesNameFilters = ({ handleFnCheckedInput }: PropDate) => {
  const [stateAirlines, setStateAirlines] = useState<boolean>(true);
  return (
    <div className="fly-res__block-main-company-lane">
      <div
        onClick={() => setStateAirlines(!stateAirlines)}
        className="fly-res__block-name"
      >
        <h2 className="fly-res__name">Airlins</h2>
        {stateAirlines ? (
          <Image
            src={arrow_up}
            alt="image_open_filter"
            className="fly-res__image-airlines-name"
          />
        ) : (
          <Image
            src={arrow_down}
            alt="image_open_filter"
            className="fly-res__image-airlines-name"
          />
        )}
      </div>
      {stateAirlines ? (
        <div className="fly-res__block-option-name-company">
          {airlins.map((item) => (
            <InputNameCompany
              handleFnCheckedInput={handleFnCheckedInput}
              key={item.id}
              item={item.value}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default AirlinesNameFilters;
