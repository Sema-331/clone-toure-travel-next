"use client";

import AddPromoModal from "@/components/Landing/Hero/AddPromoModal";
import Image from "next/image";
import React from "react";
import image_dor from "./../../../public/images/Filled=True (1).png";
import { UseFormReturn } from "react-hook-form";
import Link from "next/link";
import dynamic from "next/dynamic";
import BtnNoFill from "@/components/BtnNoFill/BtnNoFill";

interface FormInt {
  register: any;
}

const PromoFormBlock = ({ register }: FormInt) => {
  return (
    <div className="seacrh__block-options-users">
      <AddPromoModal register={register} />
      <BtnNoFill type="submit" className="search__btn-show-variants">
        <Image
          src={image_dor}
          alt="show_btn"
          className="search__image-variants"
        />
        <p className="search__description-variants">Show stay</p>
      </BtnNoFill>
    </div>
  );
};

export default PromoFormBlock;
