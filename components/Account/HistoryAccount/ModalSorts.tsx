import Image from "next/image";
import React from "react";
import tick_icon from "./../../../public/images/tick.svg";

interface PropDate {
  setStateFilter: (v: string) => void;
  stateFilter: string;
}

const ModalSorts = ({ setStateFilter, stateFilter }: PropDate) => {
  return (
    <div className="history-account__block-modal-sort">
      <button
        onClick={() => setStateFilter("Upcoming")}
        className="history-account__block-upcoming"
      >
        <p className="history-account__description-name">Upcoming</p>
        {stateFilter === "Upcoming" ? (
          <Image
            className="history-account__image-selected"
            src={tick_icon}
            alt="icon_selected"
          />
        ) : null}
      </button>
      <button
        onClick={() => setStateFilter("Past")}
        className="history-account__block-past-res"
      >
        <p className="history-account__description-name">Past</p>
        {stateFilter === "Past" ? (
          <Image
            className="history-account__image-selected"
            src={tick_icon}
            alt="icon_selected"
          />
        ) : null}
      </button>
      <button
        onClick={() => setStateFilter("All")}
        className="history-account__block-all-res"
      >
        <p className="history-account__description-name">All</p>
        {stateFilter === "All" ? (
          <Image
            className="history-account__image-selected"
            src={tick_icon}
            alt="icon_selected"
          />
        ) : null}
      </button>
    </div>
  );
};

export default ModalSorts;
