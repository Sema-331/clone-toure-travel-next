"use client";

import React from "react";
import logo from "./../../public/images/Logo_black.png";
import slider from "./../../public/images/Rectangle 20.png";
import sliderSecond from "./../../public/images/Rectangle 20 (1).png";
import sliderThird from "./../../public/images/Rectangle 20.png";
import Image from "next/image";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface IntClasses {
  name_class: string;
  image_class: string;
}

const SwiperImages = ({ name_class, image_class }: IntClasses) => {
  return (
    <div className={`${name_class}`}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        autoplay={{
          delay: 5000,
        }}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Image src={slider} alt="image_login" className={`${image_class}`} />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={sliderSecond}
            alt="image_login"
            className={`${image_class}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={sliderThird}
            alt="image_login"
            className={`${image_class}`}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperImages;
