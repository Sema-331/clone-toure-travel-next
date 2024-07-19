"use client";

import React, { memo, useState } from "react";
import BlockAnotherSort from "./BlockAnotherSort";

const NavOptimalTimeFly = memo(
  ({
    setStateSortDate,
    setStateSearch,
  }: {
    setStateSortDate: (v: string) => void;
    setStateSearch: (v: string | null) => void;
  }) => {
    const [optionClassTicket, setOptionClassTicket] =
      useState<String>("Cheapest");
    console.log("modal");
    return (
      <div className="fly-res__block-optimal-time-fly-list-box">
        <div
          onClick={() => setOptionClassTicket("Cheapest")}
          className={
            optionClassTicket === "Cheapest"
              ? "fly-res__block-list-item-content-active"
              : "fly-res__block-list-item-content"
          }
        >
          <div className="fly-res__uu-blocks">
            <p className="fly-res__name-list-item">Cheapest</p>
            <p className="fly-res__description-time">
              $99 . <span>2h 18m</span>
            </p>
          </div>
        </div>
        <div
          onClick={() => setOptionClassTicket("Best")}
          className={
            optionClassTicket === "Best"
              ? "fly-res__block-list-item-content-active"
              : "fly-res__block-list-item-content"
          }
        >
          <div className="fly-res__uu-blocks">
            <p className="fly-res__name-list-item">Best</p>
            <p className="fly-res__description-time">
              $99 . <span>2h 18m</span>
            </p>
          </div>
        </div>
        <div
          onClick={() => setOptionClassTicket("Quickest")}
          className={
            optionClassTicket === "Quickest"
              ? "fly-res__block-list-item-content-active"
              : "fly-res__block-list-item-content"
          }
        >
          <div className="fly-res__uu-blocks">
            <p className="fly-res__name-list-item">Quickest</p>
            <p className="fly-res__description-time">
              $99 . <span>2h 18m</span>
            </p>
          </div>
        </div>
        <BlockAnotherSort
          setStateSortDate={setStateSortDate}
          setStateSearch={setStateSearch}
        />
      </div>
    );
  }
);

export default NavOptimalTimeFly;
