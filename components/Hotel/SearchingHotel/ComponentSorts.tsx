import Image from "next/image";
import React from "react";
import { handleClickChangeVariatyHotel, handleStateDesc } from "@/slice/slices";
import { useAppDispatch, useAppSelector } from "@/helperRedux/helperRedux";
import tick_icon from "./../../../public/images/tick.svg";

interface PropInt {
  setStateSortPrice: (v: string) => void;
  setStateValueSort: (v: string) => void;
  stateValeuSort: string;
}

const ComponentSorts = ({
  setStateSortPrice,
  setStateValueSort,
  stateValeuSort,
}: PropInt) => {
  const dispatch = useAppDispatch();

  const handleCLickGetItemAsc = async () => {
    try {
      const response = await fetch("/api/SortHotel/SortHotelAsc");
      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }
      const data = await response.json();
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  return (
    <div className="fly-res__block-modal-sorts">
      <div
        onClick={() => setStateValueSort("Recommended")}
        className="fly-res__block-btn-sort"
      >
        <button
          onClick={() => {
            setStateSortPrice("asc");
          }}
          className="fly-res__btn-sort-option"
        >
          <p className="fly-res__name-description-sort">Recommended</p>
          {stateValeuSort === "Recommended" ? (
            <Image
              className="fly-res__image-selected"
              src={tick_icon}
              alt="icon_arrow"
            />
          ) : null}
        </button>
      </div>
      <div
        onClick={() => setStateValueSort("Price decrease")}
        className="fly-res__block-btn-sort"
      >
        <button
          onClick={() => {
            dispatch(handleStateDesc());
            setStateSortPrice("desc");
          }}
          className="fly-res__btn-sort-option"
        >
          <p className="fly-res__name-description-sort">Price decrease</p>
          {stateValeuSort === "Price decrease" ? (
            <Image
              className="fly-res__image-selected"
              src={tick_icon}
              alt="icon_arrow"
            />
          ) : null}
        </button>
      </div>
      <div
        onClick={() => {
          handleCLickGetItemAsc();
          setStateSortPrice("asc");
          setStateValueSort("Price increase");
        }}
        className="fly-res__block-btn-sort"
      >
        <button className="fly-res__btn-sort-option">
          <p className="fly-res__name-description-sort">Price increase</p>
          {stateValeuSort === "Price increase" ? (
            <Image
              className="fly-res__image-selected"
              src={tick_icon}
              alt="icon_arrow"
            />
          ) : null}
        </button>
      </div>
    </div>
  );
};

export default ComponentSorts;
