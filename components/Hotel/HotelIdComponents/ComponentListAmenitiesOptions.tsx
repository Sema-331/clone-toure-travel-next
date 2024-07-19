"use client";

import React, { useState } from "react";
import pool_image from "./../../../public/images/mdi_pool.png";
import fitness_image from "./../../../public/images/maki_fitness-centre.png";
import bar_image from "./../../../public/images/ion_wine.png";
import spa_image from "./../../../public/images/material-symbols_spa-rounded.png";
import wi_fi_image from "./../../../public/images/Wifi (1).png";
import restaraunt_image from "./../../../public/images/ic_round-restaurant.png";
import tea_image from "./../../../public/images/Breakfast.png";
import room_service_image from "./../../../public/images/material-symbols_room-service-rounded.png";
import Image from "next/image";

const ComponentListAmenitiesOptions = () => {
  const [stateViewFullOption, setStateViewFullOption] =
    useState<boolean>(false);

  return (
    <div className="location__block-list-box">
      <div className="location__block-list-item-amenities">
        <Image src={pool_image} alt="" className="location__image-amenities" />
        <p className="location__description-name-amenities">Outdoor pool</p>
      </div>
      <div className="location__block-list-item-amenities">
        <Image
          src={fitness_image}
          alt=""
          className="location__image-amenities"
        />
        <p className="location__description-name-amenities">Fitness center</p>
      </div>
      <div className="location__block-list-item-amenities">
        <Image src={pool_image} alt="" className="location__image-amenities" />
        <p className="location__description-name-amenities">Indoor pool</p>
      </div>
      <div className="location__block-list-item-amenities">
        <Image src={bar_image} alt="" className="location__image-amenities" />
        <p className="location__description-name-amenities">Bar/lounge</p>
      </div>
      <div className="location__block-list-item-amenities">
        <Image src={spa_image} alt="" className="location__image-amenities" />
        <p className="location__description-name-amenities">
          Spa and Wellness center
        </p>
      </div>
      <div className="location__block-list-item-amenities">
        <Image src={wi_fi_image} alt="" className="location__image-amenities" />
        <p className="location__description-name-amenities">Free Wi-Fi</p>
      </div>
      <div className="location__block-list-item-amenities">
        <Image
          src={restaraunt_image}
          alt=""
          className="location__image-amenities"
        />
        <p className="location__description-name-amenities">Restaraunt</p>
      </div>
      <div className="location__block-list-item-amenities">
        <Image src={tea_image} alt="" className="location__image-amenities" />
        <p className="location__description-name-amenities">
          Tea/coffe machine
        </p>
      </div>
      <div className="location__block-list-item-amenities">
        <Image
          src={room_service_image}
          alt=""
          className="location__image-amenities"
        />
        <p className="location__description-name-amenities">Room service</p>
      </div>
      {stateViewFullOption ? (
        <>
          <div className="location__block-list-item-amenities">
            <Image
              src={room_service_image}
              alt=""
              className="location__image-amenities"
            />
            <p className="location__description-name-amenities">Room service</p>
          </div>
          <div className="location__block-list-item-amenities">
            <Image
              src={room_service_image}
              alt=""
              className="location__image-amenities"
            />
            <p className="location__description-name-amenities">Room service</p>
          </div>
          <div className="location__block-list-item-amenities">
            <Image
              src={room_service_image}
              alt=""
              className="location__image-amenities"
            />
            <p className="location__description-name-amenities">Room service</p>
          </div>
          <div className="location__block-list-item-amenities">
            <Image
              src={room_service_image}
              alt=""
              className="location__image-amenities"
            />
            <p className="location__description-name-amenities">Room service</p>
          </div>
          <div className="location__block-list-item-amenities">
            <Image
              src={room_service_image}
              alt=""
              className="location__image-amenities"
            />
            <p className="location__description-name-amenities">Room service</p>
          </div>
          <div className="location__block-list-item-amenities">
            <Image
              src={room_service_image}
              alt=""
              className="location__image-amenities"
            />
            <p className="location__description-name-amenities">Room service</p>
          </div>
        </>
      ) : null}
      <button
        onClick={() => setStateViewFullOption(!stateViewFullOption)}
        className="location__amenities-more-block"
      >
        <p className="location__more-amenitites-count">
          {stateViewFullOption ? <>Close</> : <>+24 more</>}
        </p>
      </button>
    </div>
  );
};

export default ComponentListAmenitiesOptions;
