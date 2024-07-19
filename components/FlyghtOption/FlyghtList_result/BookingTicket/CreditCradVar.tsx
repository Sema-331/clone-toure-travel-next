"use client";

import React from "react";
import logo_card from "./../../../../public/images/Vector_visa.png";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/helperRedux/helperRedux";
import { handleClickToggleStatus } from "@/slice/slices";

interface CardInt {
  item: {
    id: number;
    cardholderName: string;
    cvc: string;
    expMonth: string;
    expYear: string;
    card_number: string;
    country_of_region: string | null;
    idUser: string;
    number: string;
  };
}

const CreditCradVar = ({ item }: CardInt) => {
  const selector = useAppSelector(
    (item) => item.redSlice.stateCheckedSelectedCreditCard
  );
  const dispatch = useAppDispatch();
  console.log(selector);

  return (
    <>
      {item.id}
      <label
        data-testid={`credit-card-${item.id}`}
        onClick={() => dispatch(handleClickToggleStatus())}
        className="adds__block-select-card-active"
      >
        <div className="adds__block-info-card">
          <Image
            src={logo_card}
            alt="image_logo_card"
            className="adds__image-logo-card"
          />
          <p className="adds__description-card-num">
            ** {item?.number?.slice(-4)}
          </p>
          <p className="adds__description-date-num">
            {item.expMonth}/{item.expYear}
          </p>
        </div>
        <input type="radio" name="card" className="adds__input" />
      </label>
    </>
  );
};

export default CreditCradVar;
