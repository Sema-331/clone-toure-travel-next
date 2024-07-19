"use client";

import React, { useEffect, useRef, useState } from "react";
import arrow_down from "./../../../public/images/chevron_down_down.png";
import Image from "next/image";
import dynamic from "next/dynamic";

const ModalFilters = () => {
  const ComponentModalSorts = dynamic(() => import("./ModalSorts"));

  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<boolean>(false);
  const [stateFilter, setStateFilter] = useState<string>("Upcoming");

  const handleToggleModal = (e: MouseEvent) => {
    if (ref.current && ref.current.contains(e.target as HTMLDivElement)) {
      setState(true);
    } else if (
      ref.current &&
      !ref.current.contains(e.target as HTMLDivElement)
    ) {
      setState(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleToggleModal);
    return () => {
      document.removeEventListener("click", handleToggleModal);
    };
  }, ["history-account__block-uus"]);

  return (
    <div ref={ref} className="history-account__block-uus">
      <div
        onClick={() => setState(!state)}
        className="history-account__show-sorts"
      >
        <button className="history-account__name-sort">{stateFilter}</button>
        <Image
          src={arrow_down}
          alt="image_arrow_down"
          className="history-account__image-arrow-down"
        />
      </div>
      {state ? (
        <ComponentModalSorts
          setStateFilter={setStateFilter}
          stateFilter={stateFilter}
        />
      ) : null}
    </div>
  );
};

export default ModalFilters;
