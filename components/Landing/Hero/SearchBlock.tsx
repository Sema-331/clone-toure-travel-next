"use client";

import Image from "next/image";
import React, { useState } from "react";
import img_flights from "./../../../public/images/airplane_black.png";
import img_stays from "./../../../public/images/ion_bed_black.png";
import Form from "./Form";
import FormHotel from "@/components/Hotel/MainHotel/FormHotel";
import classNames from "classnames";
import BtnNoFill from "@/components/BtnNoFill/BtnNoFill";

// interface Int {
//     onSearch: any
//     setSearchQuery: any
//     searchQuery: any
//     onSearchTicket: any
//     setNameType: any,
//     setDateStartFrom: any,
//     setNameAirportTo: any,
//     setNameAirportFrom: any
//     setNameTypes: any,
//     setDateStartFroms: any,
//     setDateCheckout: any,
//   }

interface Int {
  onSearch: () => void;
  setSearchQuery: (v: string) => void;
  searchQuery: string | null;
  onSearchTicket: () => void;
  setNameType: (v: string) => void;
  setDateStartFrom: (v: string) => void;
  setNameAirportTo: (v: string) => void;
  setNameAirportFrom: (v: string) => void;
  setNameTypes: (v: string) => void;
  setDateStartFroms: (v: string) => void;
  setDateCheckout: (v: string) => void;
}

const SearchBlock = ({
  onSearch,
  searchQuery,
  setSearchQuery,
  onSearchTicket,
  setNameAirportFrom,
  setNameAirportTo,
  setDateStartFrom,
  setNameType,
  setNameTypes,
  setDateStartFroms,
  setDateCheckout,
}: Int) => {
  const [state, setState] = useState<Boolean>(true);

  return (
    <div className="search__block-form">
      <div className="search__block-icons-options">
        <div className="search__block-options-uu">
          <div className="search__block-options-inside-first">
            <button
              onClick={() => setState(true)}
              className={classNames({
                "search__block-flights-active": state,
                "search__block-flights": !state,
              })}
            >
              <Image
                src={img_flights}
                alt="image_flight"
                className="search__image-fly"
              />
              <p className="search__descr-fly">Flyghts</p>
            </button>
          </div>
          <div className="search__block-options-inside-second">
            <BtnNoFill
              onclick={() => setState(false)}
              className={classNames({
                "search__block-stays": state,
                "search__block-stays-active": !state,
              })}
            >
              <Image
                src={img_stays}
                className="search__image-stay"
                alt="image_stays"
              />
              <p className="search__descr-stays">Stays</p>
            </BtnNoFill>
            {/* <button
              onClick={() => setState(false)}
              className={classNames({
                "search__block-stays": state,
                "search__block-stays-active": !state,
              })}
            >
              
            </button> */}
          </div>
        </div>
      </div>
      {state ? (
        <Form
          setNameType={setNameType}
          setDateStartFrom={setDateStartFrom}
          setNameAirportTo={setNameAirportTo}
          setNameAirportFrom={setNameAirportFrom}
          onSearch={onSearchTicket}
        />
      ) : (
        <FormHotel
          setDateCheckout={setDateCheckout}
          setDateStartFroms={setDateStartFroms}
          setNameTypes={setNameTypes}
          setSearchQuery={setSearchQuery}
          onSearch={onSearch}
        />
      )}
    </div>
  );
};

export default SearchBlock;
