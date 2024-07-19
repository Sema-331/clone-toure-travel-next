import React, { useEffect, useRef, useState } from "react";
import menu_sort from "./../../../public/images/menu.png";
import tick_icon from "./../../../public/images/tick.svg";
import close_icon from "./../../../public/images/close_icon.svg";
import Image from "next/image";
import { ToggleModalClose } from "@/services/ToggleModalClose";

interface Prop {
  setStateSortDate: (v: string) => void;
  setStateSearch: (v: string) => void;
}

const BlockAnotherSort = ({ setStateSortDate, setStateSearch }: Prop) => {
  const [stateTime, setStateTime] = useState<String>("By time");
  const { state, setState, ref } = ToggleModalClose(
    "fly-res__block-another-sorts"
  );

  return (
    <div
      ref={ref}
      onClick={() => setState(!state)}
      className="fly-res__block-another-sorts"
    >
      <div className="fly-res__uu-blocks">
        {state ? (
          <Image
            src={close_icon}
            className="fly-res__image-menu-sort"
            alt="image_another_sort"
          />
        ) : (
          <Image
            src={menu_sort}
            className="fly-res__image-menu-sort"
            alt="image_another_sort"
          />
        )}
        <p className="fly-res__description-another-sorts">Other sort</p>
      </div>
      {state ? (
        <div className="fly-res__block-modal-another-sorts">
          <button
            onDoubleClick={() => setStateSortDate("desc")}
            onClick={() => {
              setStateTime("By time");
              setStateSortDate("asc");
            }}
            className="fly-res__btn-modal-selected-type-sort"
          >
            <p className="fly-res__description-type-name">By time</p>
            {stateTime === "By time" ? (
              <Image
                src={tick_icon}
                alt="icon_selected"
                className="fly-res__modal-another-sort"
              />
            ) : null}
          </button>
          <button
            onDoubleClick={() => setStateSearch("desc")}
            onClick={() => {
              setStateSearch("asc");
              setStateTime("By price");
            }}
            className="fly-res__btn-modal-selected-type-sort"
          >
            <p className="fly-res__description-type-name">By price</p>
            {stateTime === "By price" ? (
              <Image
                src={tick_icon}
                alt="icon_selected"
                className="fly-res__modal-another-sort"
              />
            ) : null}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default BlockAnotherSort;
