"use client";

import React, { useState } from "react";

interface BtnInt {
  item: {
    value_data: number;
    value: string;
  };
  setStateHotelRate: any;
}

const BtnSingleRate = ({ item, setStateHotelRate }: BtnInt) => {
  const [state, setState] = useState<boolean>(false);

  return (
    <button
      onClick={() => {
        setStateHotelRate(Number(item.value_data));
        setState(!state);
      }}
      className={
        state ? "hotel__btn-lane-value-active" : "hotel__btn-lane-value"
      }
    >
      {item.value}
    </button>
  );
};

export default BtnSingleRate;
