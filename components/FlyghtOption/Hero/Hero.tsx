"use client";

import React, { useEffect, useState } from "react";
import image from "./../../../public/images/Frame 36.png";
import Image from "next/image";
import Form from "@/components/Landing/Hero/Form";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/helperRedux/helperRedux";
import { handlePuchValue } from "@/slice/slices";
import URLSearchTicket from "@/hooks/URLSearchTicket";

interface getSearchParams {
  searchParams: {
    name_airport_from: string;
    name_airport_to: string;
    type: string;
    date_from: Date;
  };
}

const Hero = ({ searchParams }: getSearchParams) => {
  const {
    setNameType,
    setDateStartFrom,
    setNameAirportTo,
    setNameAirportFrom,
    onSearchTicket,
  } = URLSearchTicket(searchParams);

  return (
    <section>
      <div className="travel__block">
        <Image className="travel__image-font" src={image} alt="image_hero" />
      </div>
      <div className="container">
        <div className="travel__main-block">
          <div className="travel__headers-name">
            <h1 className="travel__header">
              Make your travel whishlist, we’ll do the rest
            </h1>
            <p className="travel__description">
              Special offers to suit your plan
            </p>
          </div>
          <div className="travel__block-forms">
            <h3 className="travel__header-form">Where are you flying? </h3>
            <Form
              setNameType={setNameType}
              setDateStartFrom={setDateStartFrom}
              setNameAirportTo={setNameAirportTo}
              setNameAirportFrom={setNameAirportFrom}
              onSearch={onSearchTicket}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
