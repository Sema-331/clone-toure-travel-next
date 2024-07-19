import Image from "next/image";
import React, { memo } from "react";
import arrow_down from "./../../../public/images/chevron_down_down.png";
import tick_icon from "./../../../public/images/tick.svg";
import arrow_up from "./../../../public/images/chevron_down_up.png";
import { ToggleModalClose } from "@/services/ToggleModalClose";

interface PropDate {
  stateVisibleProduct: number;
  stateRoute: any;
  stateModalSort: string;
  setStateModalSort: (v: string) => void;
  setStateSearch: (v: string) => void;
  test: any;
}

const ComponentShowingContent = memo(
  ({
    stateVisibleProduct,
    stateRoute,
    stateModalSort,
    setStateModalSort,
    setStateSearch,
    test,
  }: PropDate) => {
    const { state, setState, ref } = ToggleModalClose(
      "fly-res__block-show-content-length"
    );
    console.log("show content");

    return (
      <div ref={ref} className="fly-res__block-show-content-length">
        <div className="fly-res__block-length-content-inside">
          <p className="fly-res__description-content">
            Showing {stateVisibleProduct} of
          </p>
          <span>
            {test?.length == undefined ? 0 : stateRoute.length} places
          </span>
        </div>
        <div className="fly-res__block-sorts-uu-modal">
          <div
            onClick={() => setState(!state)}
            className="fly-res__block-sort-by"
          >
            <p className="fly-res__description-sorts">
              <span>Sort by: </span>
              {stateModalSort}
            </p>
            {state ? (
              <Image
                src={arrow_up}
                alt="image_arrow_down"
                className="fly-res__image-uu"
              />
            ) : (
              <Image
                src={arrow_down}
                alt="image_arrow_down"
                className="fly-res__image-uu"
              />
            )}
          </div>
          {state ? (
            <div className="fly-res__block-modal-sorts">
              <div
                onClick={() => {
                  setStateSearch("asc");
                  setStateModalSort("Recommended");
                }}
                className="fly-res__block-btn-sort"
              >
                <button className="fly-res__btn-sort-option">
                  <p className="fly-res__name-description-sort">Recommended</p>
                  {stateModalSort === "Recommended" ? (
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
                  setStateSearch("asc");
                  setStateModalSort("Price decrease");
                }}
                className="fly-res__block-btn-sort"
              >
                <button className="fly-res__btn-sort-option">
                  <p className="fly-res__name-description-sort">
                    Price decrease
                  </p>
                  {stateModalSort === "Price decrease" ? (
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
                  setStateSearch("desc");
                  setStateModalSort("Price increase");
                }}
                className="fly-res__block-btn-sort"
              >
                <button className="fly-res__btn-sort-option">
                  <p className="fly-res__name-description-sort">
                    Price increase
                  </p>
                  {stateModalSort === "Price increase" ? (
                    <Image
                      className="fly-res__image-selected"
                      src={tick_icon}
                      alt="icon_arrow"
                    />
                  ) : null}
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
);

export default ComponentShowingContent;
