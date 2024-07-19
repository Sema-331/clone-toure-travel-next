"use client";

import Image from "next/image";
import React, { useState } from "react";
import main_image from "./../../../public/images/Rectangle 3 (12).png";
import image_first from "./../../../public/images/Rectangle 5 (1).png";
import image_second from "./../../../public/images/Rectangle 6 (1).png";
import image_third from "./../../../public/images/Rectangle 5 (2).png";
import image_forht from "./../../../public/images/Rectangle 6 (2).png";

interface IntItem {
  item: {
    id: number;
    userId: string;
    star_hotel: string | null;
    check_in_date: Date;
    check_out_date: Date;
    room_number: number;
    price: string;
    name_hotel: string;
    rate: string;
    geo_hotel: string;
    freebies_options: string[];
    amenities_option: string[];
    variaty_hotel: string;
    idHotel: number;
    main_image: string;
    images_slider: string[];
  };
}

const ComponentViewFullImages = ({ item }: IntItem) => {
  const [stateViewFullImages, setStateViewFullImages] =
    useState<boolean>(false);

  return (
    <div className="single-hotel__block-view-image">
      <div
        className={
          stateViewFullImages
            ? "single-hotel__block-single-image-active"
            : "single-hotel__block-single-image"
        }
      >
        <Image
          src={item.main_image}
          width={780}
          height={550}
          alt=""
          className="single-hotel__image-main"
        />
      </div>
      <div className="single-hotel__block-mini-gallery-image">
        <Image
          src={image_first}
          alt="image_gallery"
          className="single-hotel__image-gallery image_gallery"
        />
        <Image
          src={image_second}
          alt="image_gallery image_gallery"
          className="single-hotel__image-gallery image_gallery"
        />
        <Image
          src={image_third}
          alt="image_gallery"
          className="single-hotel__image-gallery"
        />
        <div className="single-hotel__block-interactive-view-full-gallery">
          <Image
            src={image_forht}
            alt="image_gallery"
            className="single-hotel__image-image-gallery-font"
            fill={true}
          />
          {!stateViewFullImages ? (
            <button
              onClick={() => setStateViewFullImages(true)}
              className="single-hotel__btn-imteractive"
            >
              View all photos
            </button>
          ) : null}
        </div>
      </div>
      {stateViewFullImages ? (
        <div className="single-hotel__block-full-images">
          <Image
            src={image_first}
            alt="image_gallery"
            className="single-hotel__image-gallery image_gallery"
          />
          <Image
            src={image_second}
            alt="image_gallery image_gallery"
            className="single-hotel__image-gallery image_gallery"
          />
        </div>
      ) : null}
    </div>
  );
};

export default ComponentViewFullImages;
