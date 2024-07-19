"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import location_icons from "./../../../public/images/Location.png";
import star_icon from "./../../../public/images/Star.png";
import coffee_icon from "./../../../public/images/cafe.png";
import second_slide from "./../../../public/images/Frame 36.png";
import third_slide from "./../../../public/images/Rectangle 3 (7).png";
import forth_slide from "./../../../public/images/Rectangle 3 (8).png";
import fifth_slide from "./../../../public/images/Rectangle 3 (9).png";
import sixth_slide from "./../../../public/images/Rectangle 3 (10).png";
import seventh_slide from "./../../../public/images/Rectangle 3 (11).png";
import eigth_slide from "./../../../public/images/Rectangle 5 (2).png";
import ninth_slide from "./../../../public/images/Rectangle 6 (1).png";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import Link from "next/link";
import FavouritesComponents from "@/components/FlyghtOption/FlyghtList_result/FavouritesComponents";

interface HotelInfo {
  reviews_hotel: number;
  item: {
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
    main_image: string;
    images_slider: string[];
  };
  user2: any;
  stateVisibleProduct: number;
  logo_image?: string;
}

const ItemHotel = ({
  reviews_hotel,
  item,
  user2,
  stateVisibleProduct,
  logo_image,
}: HotelInfo) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [stateModal, setStateModal] = useState<boolean>(false);

  const handleToggleOpenModal = (e: any) => {
    if (ref.current && ref.current.contains(e.tagret)) {
      console.log("true");
    } else if (ref.current && !ref.current.contains(e.target)) {
      console.log("false");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleToggleOpenModal);
    return () => {
      document.removeEventListener("click", handleToggleOpenModal);
    };
  }, ["hotel__btn-view-images"]);

  // useEffect(() => {
  //     const bulletElements: NodeListOf<Element> = document.querySelectorAll('.swiper-pagination-hover-wrap .swiper-pagination-bullet');
  //     bulletElements.forEach(el => {
  //       el.addEventListener('mouseover', () => {
  //         (el as HTMLElement).click();
  //       });
  //     });

  //     // Очистка обработчиков событий при размонтировании компонента
  //     return () => {
  //       bulletElements.forEach(el => {
  //         el.removeEventListener('mouseover', () => {
  //           (el as HTMLElement).click();
  //         });
  //       });
  //     };
  //   }, []);

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

  const [stateItem, setStateItem] = useState([]);
  const handleCLickGetItemAsc = async () => {
    try {
      const response = await fetch("/api/SortHotel/SortHotelAsc");
      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }
      const data = await response.json();
      setStateItem(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  console.log(stateItem);

  const [stateTypeRoom, setStateTypeRoom] = useState([]);

  useEffect(() => {
    const getTypesRooms = async () => {
      const res = await fetch("/api/getSearhHotel");
      console.log(res);
      const result = await res.json();
      setStateTypeRoom(result.user2);
    };

    getTypesRooms();
  }, []);

  return (
    <>
      <button onClick={() => handleCLickGetItemAsc()}>BUTTON</button>
      <>
        {stateTypeRoom.map((item: any) => {
          const reviews = item.review_table_single_hotel;
          if (reviews.length === 0) {
            return <>0.0</>;
          }

          const totalRating = reviews.reduce(
            (accum: number, value: { rating: string }) => {
              const rating = Number(value.rating);
              return !isNaN(rating) ? accum + rating : accum;
            },
            0
          );

          const averageRating = (totalRating / reviews.length).toFixed(1);
          return <>{averageRating}</>;
        })}
      </>
      <div className="hotel__list-item-ticket-buy">
        <div className="hotel__block-image-ticket">
          <button
            ref={ref}
            onClick={() => setStateModal(!stateModal)}
            className="hotel__btn-view-images"
          >
            9 images
          </button>
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
                src={item.main_image}
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
              <h2 className="hotel__header-name">{item.name_hotel}</h2>
              <div className="hotel__block-loaction-info">
                <Image
                  src={location_icons}
                  alt="icon_location"
                  className="hotel__loaction-image"
                />
                <p className="hotel__location-description">{item.geo_hotel}</p>
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
                    {item.star_hotel} Star Hotel
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
                  {stateTypeRoom.map((item: any) => (
                    <>
                      {(
                        item.review_table_single_hotel.reduce(
                          (accum: number, value: { rating: string }) =>
                            accum + Number(value.rating),
                          0
                        ) / item.review_table_single_hotel.length
                      ).toFixed(1)}
                    </>
                  ))}
                </div>
                <p className="hotel__description-user-opinion">
                  <span>Very Good</span> {reviews_hotel} reviews
                </p>
              </div>
            </div>
            <div className="hotel__block-price-info">
              <p className="hotel__description-startig-from">starting from</p>
              <p className="hotel__description-total-price-hotel">
                ${item.price}
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
              data-testid={`test-view-details-hotel-${item.id}`}
              href={`/FindHotel/ResultsHotels/${item.id}`}
              className="hotel__btn-view-detailed"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemHotel;
