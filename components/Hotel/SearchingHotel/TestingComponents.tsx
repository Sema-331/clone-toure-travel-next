import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import location_icons from "./../../../public/images/Location.png";
import star_icon from "./../../../public/images/Star.png";
import coffee_icon from "./../../../public/images/cafe.png";
import BtnToggleFavourites from "./BtnToggleFavourites";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import Image from "next/image";

const TestingComponents = () => {
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

  return (
    <Swiper
      className="mySwiper swiper-pagination-hover-wrap"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Image
          src={location_icons}
          alt="icon_location"
          className="hotel__loaction-image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={star_icon}
          alt="icon_location"
          className="hotel__loaction-image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={coffee_icon}
          alt="icon_location"
          className="hotel__loaction-image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={location_icons}
          alt="icon_location"
          className="hotel__loaction-image"
        />
      </SwiperSlide>
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default TestingComponents;
