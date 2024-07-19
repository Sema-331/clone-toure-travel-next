"use client";

import React from "react";
import HeadersName from "../Options/Headers";
import Image from "next/image";
import first_image from "./../../../public/images/Rectangle 3 (3).png";
import second_image from "./../../../public/images/Rectangle 3 (4).png";
import third_image from "./../../../public/images/Rectangle 3 (5).png";
import forth_image from "./../../../public/images/Rectangle 3 (6).png";
import { usePathname } from "next/navigation";
import BtnNoFill from "@/components/BtnNoFill/BtnNoFill";

const Tender = () => {
  const pathname = usePathname();

  return (
    <section>
      <div className="container">
        <div className="tender__block">
          <HeadersName />
          <div className="tender__block-content">
            <div className="tender__block-main-description">
              <div className="tender__block-header-content">
                <h2 className="tender__header-main">Backpacking Sri Lanka</h2>
                <div className="tender__block-description-price">
                  <p className="tender__price-of">From</p>
                  <p className="tender__price">$700</p>
                </div>
              </div>
              <p className="tender__main-description">
                Traveling is a unique experience as it`s the best way to unplug
                from the pushes and pulls of daily life. It helps us to forget
                about our problems, frustrations, and fears at home. During our
                journey, we experience life in different ways. We explore new
                places, cultures, cuisines, traditions, and ways of living.
              </p>
              <BtnNoFill
                href={
                  pathname === "/FindHotel"
                    ? "/FindHotel/ResultsHotels"
                    : "/FindFly/FlightList_result"
                }
                className="tender__btn-more-details"
              >
                {pathname === "/FindHotel" ? (
                  <>Book Hotels</>
                ) : (
                  <>Book Flight</>
                )}
              </BtnNoFill>
            </div>
            <div className="tender__block-images">
              <div className="tender__list-box-item">
                <div className="tender__list-box-item-front">
                  <Image
                    src={first_image}
                    alt="image_place"
                    className="tender__place-image tender__place-image-first"
                  />
                </div>
                <div className="tender__list-box-item-back">
                  <Image
                    src={first_image}
                    alt="image_place"
                    className="tender__place-image tender__place-image-first"
                  />
                  <p className="tender__description-image">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi, placeat.
                  </p>
                </div>
              </div>
              <div className="tender__list-box-item">
                <div className="tender__list-box-item-front">
                  <Image
                    src={second_image}
                    alt="image_place"
                    className="tender__place-image tender__place-image-first"
                  />
                </div>
                <div className="tender__list-box-item-back">
                  <Image
                    src={second_image}
                    alt="image_place"
                    className="tender__place-image tender__place-image-first"
                  />
                  <p className="tender__description-image">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi, placeat.
                  </p>
                </div>
              </div>
              <div className="tender__list-box-item">
                <div className="tender__list-box-item-front">
                  <Image
                    src={third_image}
                    alt="image_place"
                    className="tender__place-image tender__place-image-first"
                  />
                </div>
                <div className="tender__list-box-item-back">
                  <Image
                    src={third_image}
                    alt="image_place"
                    className="tender__place-image tender__place-image-first"
                  />
                  <p className="tender__description-image">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi, placeat.
                  </p>
                </div>
              </div>
              <div className="tender__list-box-item">
                <div className="tender__list-box-item-front">
                  <Image
                    src={forth_image}
                    alt="image_place"
                    className="tender__place-image tender__place-image-first"
                  />
                </div>
                <div className="tender__list-box-item-back">
                  <Image
                    src={forth_image}
                    alt="image_place"
                    className="tender__place-image tender__place-image-first"
                  />
                  <p className="tender__description-image">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi, placeat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tender;
