"use client";

import { X } from "lucide-react";
import React, { memo, useEffect, useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import arrow_down from "./../../../public/images/chevron_down.png";
import add_outline from "./../../../public/images/add-outline.png";
import Image from "next/image";
import ModalPromoCode from "./ModalPromoCode";
import dynamic from "next/dynamic";
import BtnNoFill from "@/components/BtnNoFill/BtnNoFill";
import { ToggleModalClose } from "@/services/ToggleModalClose";

interface FormInt {
  register: any;
}

const AddPromoModal = memo(({ register }: FormInt) => {
  console.log("first");
  const ComponentModalPromoCode = dynamic(() => import("./ModalPromoCode"));
  // const [state, setState] = useState<boolean>(false);
  const [secState, setSecState] = useState<boolean>(false);
  const [stateInput, setStateInput] = useState<string>("");

  const handleClickAddPromo = () => {
    if (stateInput.length >= 1) {
      setSecState(true);
      setState(false);
    } else {
      setSecState(false);
    }
  };

  // const wrapRefBase = useRef<HTMLDivElement>(null);
  // const handleAddPromoCode = (e: MouseEvent) => {
  //   if (
  //     wrapRefBase.current &&
  //     wrapRefBase.current.contains(e.target as HTMLDivElement)
  //   ) {
  //     setState(true);
  //   } else if (
  //     wrapRefBase.current &&
  //     !wrapRefBase.current.contains(e.target as HTMLDivElement)
  //   ) {
  //     setState(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("click", handleAddPromoCode);
  //   return () => {
  //     document.removeEventListener("click", handleAddPromoCode);
  //   };
  // }, ["search-xx"]);

  const { state, ref, setState } = ToggleModalClose("search-xx");

  return (
    <div ref={ref} className="search-xx">
      <BtnNoFill
        testid="btnOpenModal"
        type="button"
        onclick={() => setState(!state)}
        className="search__add-promo"
      >
        <Image src={add_outline} alt="add_btn" className="search__image-adds" />
        <p className="search__description-adds">
          {secState ? <>Your code: {stateInput}</> : <>Add Promo Code</>}
        </p>
      </BtnNoFill>
      {/* <button
        data-testid="btnOpenModal"
        type="button"
        onClick={() => setState(!state)}
        className="search__add-promo"
      >
        <Image src={add_outline} alt="add_btn" className="search__image-adds" />
        <p className="search__description-adds">
          {secState ? <>Your code: {stateInput}</> : <>Add Promo Code</>}
        </p>
      </button> */}
      {state ? (
        <ModalPromoCode
          register={register}
          setState={setState}
          stateInput={stateInput}
          setStateInput={setStateInput}
          handleClickAddPromo={handleClickAddPromo}
        />
      ) : null}
    </div>
  );
});

export default AddPromoModal;
