"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import location_icons from "./../../public/images/Location.png";
import star_icon from "./../../public/images/Star.png";
import image_null from "./../../public/images/favouritesNull.svg";
import coffee_icon from "./../../public/images/cafe.png";
import second_slide from "./../../public/images/Frame 36.png";
import third_slide from "./../../public/images/Rectangle 3 (7).png";
import forth_slide from "./../../public/images/Rectangle 3 (8).png";
import fifth_slide from "./../../public/images/Rectangle 3 (9).png";
import sixth_slide from "./../../public/images/Rectangle 3 (10).png";
import seventh_slide from "./../../public/images/Rectangle 3 (11).png";
import eigth_slide from "./../../public/images/Rectangle 5 (2).png";
import ninth_slide from "./../../public/images/Rectangle 6 (1).png";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import Link from "next/link";
import FavouritesComponents from "@/components/FlyghtOption/FlyghtList_result/FavouritesComponents";
import NoItemFavourites from "./NoItemFavourites";

interface ItemInt {
  state: {
    user2: {
      userId: string;
      hotelId: number;
      hotel: {
        id: number;
        name_hotel: string;
        userId: string;
        star_hotel: string | null;
        check_in_date: Date;
        check_out_date: Date;
        room_number: number;
        price: string;
        rate: string;
        geo_hotel: string;
        freebies_options: string[];
        amenities_option: string[];
        variaty_hotel: string;
        idHotel: number;
      };
    }[];
  };
  user2: any;
}

const HotelFavouritesItem = ({ state, user2 }: ItemInt) => {
  useEffect(() => {
    document
      .querySelectorAll(
        ".swiper-pagination-hover-wrap .swiper-pagination-bullet"
      )
      .forEach((el) => {
        el.addEventListener("mouseover", (event) => {
          (event.currentTarget as HTMLElement).click();
          console.log(event.currentTarget);
        });
      });
  });

  console.log(state?.user2);
  // console.log(item?.userId === user2?.id)

  return (
    <>
      {user2.hotelId}
      {state.length ? (
        state.map((item: any) => (
          <div key={item.hotelId}>
            {item?.userId === user2?.id ? <>true</> : <>false</>}
            {item?.userId === user2?.id ? (
              <div className="hotel__list-item-ticket-buy">
                <div className="hotel__block-image-ticket">
                  <button className="hotel__btn-view-images">9 images</button>
                  <Swiper
                    className="mySwiper swiper-pagination-hover-wrap"
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{
                      el: ".swiper-pagination",
                      clickable: true,
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                  >
                    <SwiperSlide>
                      <Image
                        src={forth_slide}
                        width={200}
                        height={150}
                        alt="image_logo_company_ticket"
                        className="hotel__main-image-ticket"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src={second_slide}
                        width={200}
                        height={150}
                        alt="image_logo_company_ticket"
                        className="hotel__main-image-ticket"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src={third_slide}
                        width={200}
                        height={150}
                        alt="image_logo_company_ticket"
                        className="hotel__main-image-ticket"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src={forth_slide}
                        width={200}
                        height={150}
                        alt="image_logo_company_ticket"
                        className="hotel__main-image-ticket"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src={fifth_slide}
                        width={200}
                        height={150}
                        alt="image_logo_company_ticket"
                        className="hotel__main-image-ticket"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src={sixth_slide}
                        width={200}
                        height={150}
                        alt="image_logo_company_ticket"
                        className="hotel__main-image-ticket"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src={seventh_slide}
                        width={200}
                        height={150}
                        alt="image_logo_company_ticket"
                        className="hotel__main-image-ticket"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src={eigth_slide}
                        width={200}
                        height={150}
                        alt="image_logo_company_ticket"
                        className="hotel__main-image-ticket"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src={ninth_slide}
                        width={200}
                        height={150}
                        alt="image_logo_company_ticket"
                        className="hotel__main-image-ticket"
                      />
                    </SwiperSlide>
                    <div className="swiper-pagination"></div>
                  </Swiper>
                </div>
                <div className="hotel__block-main-info-about-ticket">
                  <div className="hotel__block-info-inside">
                    <div className="hotel__block-name-info">
                      <h2 className="hotel__header-name">
                        {item.hotel.name_hotel}
                      </h2>
                      <div className="hotel__block-loaction-info">
                        <Image
                          src={location_icons}
                          alt="icon_location"
                          className="hotel__loaction-image"
                        />
                        <p className="hotel__location-description">
                          {item.hotel.geo_hotel},{item.userId}
                        </p>
                      </div>
                      <div className="hotel__block-options-hotels">
                        <div className="hotel__block-stars-rat">
                          <Image
                            src={star_icon}
                            alt="icon_star_count"
                            className="hotel__star-count"
                          />
                          <Image
                            src={star_icon}
                            alt="icon_star_count"
                            className="hotel__star-count"
                          />
                          <Image
                            src={star_icon}
                            alt="icon_star_count"
                            className="hotel__star-count"
                          />
                          <Image
                            src={star_icon}
                            alt="icon_star_count"
                            className="hotel__star-count"
                          />
                          <Image
                            src={star_icon}
                            alt="icon_star_count"
                            className="hotel__star-count"
                          />
                          <p className="hotel__description-count-stars">
                            {item.hotel.star_hotel} Star Hotel
                          </p>
                        </div>
                        <div className="hotel__block-aminities">
                          <Image
                            src={coffee_icon}
                            alt="icon_cafe"
                            className="hotel__image-coffee"
                          />
                          <p className="hotel__description-main">
                            <span>20+</span>Aminities
                          </p>
                        </div>
                      </div>
                      <div className="hotel__block-rat-reviews-users">
                        <div className="hotel__block-float-count-rat">
                          {item.hotel.rate}
                        </div>
                        <p className="hotel__description-user-opinion">
                          <span>Very Good</span> 20 reviews
                        </p>
                      </div>
                    </div>
                    <div className="hotel__block-price-info">
                      <p className="hotel__description-startig-from">
                        starting from
                      </p>
                      <p className="hotel__description-total-price-hotel">
                        ${item.hotel.price}
                        <span>/night</span>
                      </p>
                      <p className="hotel__description-tax">excl. tax</p>
                    </div>
                  </div>
                  <div className="hotel__more-info-detailed-ticket">
                    <FavouritesComponents user2={user2} item={item} />
                    {/* <Link href={`/FindHotel/ResultsHotels/${productId}`} className='hotel__btn-view-detailed'>
                    View Details
                  </Link> */}
                    <Link
                      href={`/FindHotel/ResultsHotels/${item.hotel.id}`}
                      className="hotel__btn-view-detailed"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <NoItemFavourites />
            )}
          </div>
        ))
      ) : (
        <>hello</>
      )}
    </>
  );
};

export default HotelFavouritesItem;
