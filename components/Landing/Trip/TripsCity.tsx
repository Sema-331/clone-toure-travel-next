"use client";

import { useAppDispatch } from "@/helperRedux/helperRedux";
import { handleChooseCity } from "@/slice/slices";
import React, { useState } from "react";
import close_icon from "./../../../public/images/close_icon.svg";
import Image from "next/image";

const TripsCity = ({ setStateGeo, onSearchTicket }: any) => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState(false);
  const [stateCity, setStateCity] = useState("");

  return (
    <>
      <div className="trips__block-city-info">
        <div className="trips__block-trips-first-city">
          <p className="trips__description-first-city-name">
            Is your city <span>Moscow ?</span>
          </p>
        </div>
        <div className="trips__block-btn-actions">
          <button type="submit" onClick={onSearchTicket}>
            TEST
          </button>
          <button
            type="button"
            onClick={() => {
              // onSearchTicket()
              setStateGeo(false);
              setStateCity("Moscow");
              dispatch(handleChooseCity("Moscow"));
            }}
            className="trips__btn-true"
          >
            All Right
          </button>
          <button
            onClick={() => setState(true)}
            type="button"
            className="trips__btn-change-city"
          >
            Change
          </button>
        </div>
        <button
          onClick={() => setStateGeo(false)}
          className="trips__btn-close"
          type="button"
        >
          <Image
            src={close_icon}
            alt="icon_close"
            className="trips__modal-close"
          />
        </button>
      </div>
      {state ? <div>Hello</div> : null}
    </>
  );
};

export default TripsCity;
