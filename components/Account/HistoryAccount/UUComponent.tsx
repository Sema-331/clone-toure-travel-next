"use client";

import React, { useState } from "react";
import fly_image from "./../../../public/images/airplane_black.png";
import hotel_image from "./../../../public/images/ion_bed_black.png";
import null_shop_cart from "./../../../public/images/null_shopping_cart.png";
import Ticket from "./Ticket";
import HistoryHotel from "./HistoryHotel";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

interface IntItem {
  user2: {
    userId: string;
    hotelId: number;
    type_room_hotel_id: number;
  }[];
  session: any;
  user3: any;
  data: any;
}

const UUComponent = ({ user2, session, user3, data }: IntItem) => {
  const [state, setState] = useState<String>("fly");

  return (
    <>
      <div className="history-account__block-option-view">
        <div
          onClick={() => setState("fly")}
          className={classNames({
            "history-account__block-fly-history-active": state === "fly",
            "history-account__block-fly-history": state !== "fly",
          })}
        >
          <Image
            src={fly_image}
            alt="image_fly_option"
            className="history-account__image-fly"
          />
          <p className="history-account__name-history">Flyghts</p>
        </div>
        <div className="history-account__hr">
          <hr />
        </div>
        <div
          onClick={() => setState("stay")}
          className={classNames({
            "history-account__block-hotel-history-active": state === "stay",
            "history-account__block-hotel-history": state !== "stay",
          })}
        >
          <Image
            src={hotel_image}
            alt="image_hotel_option"
            className="history-account__image-hotel"
          />
          <p className="history-account__name-history">Stays</p>
        </div>
      </div>
      {/* <Ticket />
        <Ticket />
        <Ticket /> */}
      {state === "fly" ? (
        <>
          {data && data.length > 0 ? (
            <>
              {data.map((item: any) => (
                <Ticket user3={user3} key={item.id} item={item} />
              ))}
            </>
          ) : (
            <div className="history-account__block-shopping-cart-null">
              <div className="history-account__block-images">
                <Image
                  src={null_shop_cart}
                  alt="null_cart"
                  className="history-account__main-image"
                />
              </div>
              <div className="history-account__block-description-continue">
                <h2 className="history-account__header-description">
                  Until you have booked a ticket by plane
                </h2>
                <p className="history-account__description-redirect">
                  to buy a ticket, go{" "}
                  <Link
                    className="history-account__redirect"
                    href="/FindFly/FlightList_result"
                  >
                    here
                  </Link>
                </p>
                <Link
                  href="FindFly/FlightList_result/"
                  type="button"
                  className="history-account__btn-redirect"
                >
                  Go here
                </Link>
              </div>
            </div>
          )}
        </>
      ) : (
        // <><HistoryHotel />
        // <HistoryHotel />
        // <HistoryHotel /></>
        <>
          {user2.length == 0 ? (
            <div className="history-account__block-shopping-cart-null">
              <div className="history-account__block-images">
                <Image
                  src={null_shop_cart}
                  alt="null_cart"
                  className="history-account__main-image"
                />
              </div>
              <div className="history-account__block-description-continue">
                <h2 className="history-account__header-description">
                  Until you have booked a hotel room
                </h2>
                <p className="history-account__description-redirect">
                  to book/buy a hotel room, go{" "}
                  <Link
                    className="history-account__redirect"
                    href="/FindHotel/ResultsHotels/"
                  >
                    here
                  </Link>
                </p>
                <Link
                  href="/FindHotel/ResultsHotels/"
                  type="button"
                  className="history-account__btn-redirect"
                >
                  Go here
                </Link>
              </div>
            </div>
          ) : (
            <>
              {user2.map((item: any) => (
                <HistoryHotel user3={user3} key={item.id} item={item} />
                // <div key={i}>{item.hotelId}, {item.hotel.id}, {item.hotel.price}</div>
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};

export default UUComponent;
