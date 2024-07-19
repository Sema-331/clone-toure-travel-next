import Image from "next/image";
import React from "react";
import star from "./../../../public/images/ion_star.png";

const RateComponent = () => {
  return (
    <>
      <Image src={star} alt="image_star_rat" className="reviews__image-star" />
      <Image src={star} alt="image_star_rat" className="reviews__image-star" />
      <Image src={star} alt="image_star_rat" className="reviews__image-star" />
      <Image src={star} alt="image_star_rat" className="reviews__image-star" />
      <Image src={star} alt="image_star_rat" className="reviews__image-star" />
    </>
  );
};

export default RateComponent;
