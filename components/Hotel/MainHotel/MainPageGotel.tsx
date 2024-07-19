"use client";

import Image from "next/image";
import image from "./../../../public/images/Frame 36_font.png";
import React, { useEffect, useState } from "react";
import FormHotel from "./FormHotel";
import { useRouter, useSearchParams } from "next/navigation";
import URLSearchHotel from "@/hooks/URLSearchHotel";

interface getSearchParams {
  searchParams: {
    search: string;
    variaty: string;
    date_from_hotel: Date;
    date_check_out: string;
    type_room: string;
  };
}

const MainPageHotel = ({ searchParams }: getSearchParams) => {
  const {
    searchQuery,
    setSearchQuery,
    onSearch,
    setNameTypes,
    setDateStartFroms,
    setDateCheckout,
  } = URLSearchHotel(searchParams);

  return (
    <section>
      <div className="hotel__block">
        <Image className="hotel__image-font" src={image} alt="image_hero" />
      </div>
      <div className="container">
        <div className="hotel__main-block">
          <div className="hotel__headers-name">
            <h1 className="hotel__header">
              Make your hotel whishlist, we’ll do the rest
            </h1>
            <p className="hotel__description">
              Special offers to suit your plan
            </p>
          </div>
          <div className="hotel__block-forms">
            <h3 className="hotel__header-form">Where are you stay? </h3>
            <FormHotel
              setDateCheckout={setDateCheckout}
              setDateStartFroms={setDateStartFroms}
              setNameTypes={setNameTypes}
              setSearchQuery={setSearchQuery}
              onSearch={onSearch}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPageHotel;
