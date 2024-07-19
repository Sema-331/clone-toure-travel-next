"use client";

import React, { useState } from "react";
import Image from "next/image";
import arrow_down from "./../../../public/images/chevron_down_down.png";
import arrow_up from "./../../../public/images/chevron_down_up.png";
import PriceSliderHotel from "./PIceSliderHotel";
import { btnrate } from "@/helpers/Helperdb/btnRate";
import BtnSingleRate from "./BtnSingleRate";
import { options } from "../../../helpers/Helperdb/Freebiesoption";
import { amenitiesOption } from "../../../helpers/Helperdb/AmenitiesOption";
import FreebiesSingleComponent from "./FreebiesSingleComponent";
import AmenitiesOptionsSingle from "./AmenitiesOptionsSingle";
import InputField from "@/components/FormEvents/InputField/InputField";

interface IntForm {
  onSearch: (e: React.FormEvent) => void;
  setStateHotelRate: (v: string) => void;
  setStateAmenitiesOptions: (v: string[]) => void;
  setStateFreebiesoptions: (v: string[]) => void;
  setStateMinPrice: (v: string) => void;
  setStateMaxPrice: (v: string) => void;
  stateMinPrice: string | null;
  stateMaxPrice: string | null;
}

const ComponentFiltersSideLeft = ({
  onSearch,
  setStateHotelRate,
  setStateAmenitiesOptions,
  setStateFreebiesoptions,
  setStateMinPrice,
  setStateMaxPrice,
  stateMaxPrice,
  stateMinPrice,
}: IntForm) => {
  const [stateAmenities, setStateAmenitites] = useState<boolean>(false);
  const [testState, setTestState] = useState<boolean>(false);
  const [setRate, setStateRate] = useState<boolean>(true);
  const [setAirlines, setStateAirlines] = useState<boolean>(true);
  const [setTrips, setStateTrips] = useState<boolean>(true);

  const handleEnterMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateMinPrice(e.target.value);
  };

  const handleEnterMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateMaxPrice(e.target.value);
  };

  return (
    <form onSubmit={onSearch} className="hotel__block-search-results">
      <div className="hotel__block-search-results-inside">
        <h2 className="hotel__block-header">Filters</h2>
        <div className="hotel__filter-price">
          <div className="hotel__price-filter-name">
            <h2 className="hotel__name-header-sort">Price</h2>
            <button type="button" onClick={() => setTestState(!testState)}>
              <Image
                src={testState ? arrow_up : arrow_down}
                alt="arrow_down"
                className="hotel__image-arrow-down"
              />
            </button>
          </div>
          <div className="hotel__block-fill-field-values">
            <div className="hotel__block-price-start">
              <label className="hotel__label-price-start" htmlFor="">
                Min
              </label>
              <InputField
                className="hotel__field-fill"
                type="number"
                placeholder="Min price..."
                onChange={handleEnterMinPrice}
                value={stateMinPrice as string}
              />
            </div>
            <div className="hotel__block-price-end">
              <label className="hotel__label-price-end" htmlFor="">
                Max
              </label>
              <InputField
                className="hotel__field-fill"
                type="number"
                placeholder="Max price..."
                value={stateMaxPrice as string}
                onChange={handleEnterMaxPrice}
              />
            </div>
          </div>
        </div>
        <div className="hotel__block-rat">
          <div
            onClick={() => setStateRate(!setRate)}
            className="hotel__block-inside-name"
          >
            <h3 className="hotel__rat-header">Rating</h3>
            {setRate ? (
              <Image
                src={arrow_up}
                alt="image_close-content"
                className="hotel__image-rat"
              />
            ) : (
              <Image
                src={arrow_down}
                alt="image_close-content"
                className="hotel__image-rat"
              />
            )}
          </div>
          {setRate ? (
            <div className="hotel__block-class-lane">
              {btnrate.map((item) => (
                <BtnSingleRate
                  setStateHotelRate={setStateHotelRate}
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          ) : null}
        </div>
        <div className="hotel__block-main-company-lane">
          <div
            onClick={() => setStateAirlines(!setAirlines)}
            className="hotel__block-name"
          >
            <h2 className="hotel__name">Freebies</h2>
            {setAirlines ? (
              <Image
                src={arrow_up}
                alt="image_open_filter"
                className="hotel__image-airlines-name"
              />
            ) : (
              <Image
                src={arrow_down}
                alt="image_open_filter"
                className="hotel__image-airlines-name"
              />
            )}
          </div>
          {setAirlines ? (
            <div className="hotel__block-option-name-company">
              {options.map((item) => (
                <FreebiesSingleComponent
                  setStateFreebiesoptions={setStateFreebiesoptions}
                  key={item.id}
                  item={item.value}
                />
              ))}
            </div>
          ) : null}
        </div>
        <div className="hotel__block-main-trips">
          <div
            onClick={() => setStateTrips(!setTrips)}
            className="hotel__block-trips"
          >
            <h2 className="hotel__trips">Amenitites</h2>
            {setTrips ? (
              <Image
                src={arrow_up}
                alt="image_open_filter"
                className="hotel__image-trips"
              />
            ) : (
              <Image
                src={arrow_down}
                alt="image_open_filter"
                className="hotel__image-trips"
              />
            )}
          </div>
          {setTrips ? (
            <div className="hotel__block-option-trips">
              {amenitiesOption
                .slice(0, stateAmenities ? amenitiesOption.length : 4)
                .map((item) => (
                  <AmenitiesOptionsSingle
                    setStateAmenitiesOptions={setStateAmenitiesOptions}
                    key={item.id}
                    item={item.value}
                  />
                ))}
              <button
                onClick={() => setStateAmenitites(!stateAmenities)}
                type="button"
                className="hotel__description-other-options"
              >
                {stateAmenities ? <>Close</> : <>+24more</>}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </form>
  );
};

export default ComponentFiltersSideLeft;
