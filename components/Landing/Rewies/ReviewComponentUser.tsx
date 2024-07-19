import Image from "next/image";
import React, { useState } from "react";
import system_image from "./../../../public/images/flat-color-icons_google.png";
import star from "./../../../public/images/ion_star.png";
import not_image from "./../../../public/images/not_image.jpg";
import ClientComponentViewMore from "./ClientComponentViewMore";

// interface IntItem {
//     item: IntDbReview
// }

// interface IntDbReview {
//     id: number,
//     header: string,
//     description: string,
//     image_star: IntImagesStar[]
//     user_name: string,
//     name_hotel_ticket: string,
//     image_place: string
// }

// interface IntImagesStar {
//     id: number,
//     image: string
// }

interface MyInt {
  item: {
    id: number;
    idUser: string;
    header_txt: string;
    description_txt: string;
    image_review: string | null;
    mark: string;
    id_user: {
      userName: string;
      lastName: string | null;
    };
  };
}

const starElem = [
  {
    id: 1,
    value: star,
  },
  {
    id: 2,
    value: star,
  },
  {
    id: 3,
    value: star,
  },
  {
    id: 4,
    value: star,
  },
  {
    id: 5,
    value: star,
  },
];

const ReviewComponentUser: React.FC<MyInt> = ({ item }) => {
  return (
    <div className="reviews__block-main-list-box">
      <div className="reviews__block-inside">
        <h1 className="reviews__feedback-header">
          {item.header_txt.slice(0, 1).toUpperCase() +
            item.header_txt.slice(1).toLowerCase()}
        </h1>
        <div className="reviews__block-description-feedback">
          <p className="reviews__description-inside">
            {item.description_txt.length > 100
              ? item.description_txt.slice(0, 1).toUpperCase() +
                item.description_txt
                  .slice(1)
                  .toLocaleLowerCase()
                  .slice(0, 100) +
                "..."
              : item.description_txt.slice(0, 1).toUpperCase() +
                item.description_txt.slice(1).toLocaleLowerCase() +
                "."}
          </p>
          {item.description_txt.length > 100 ? (
            <button className="reviews__btn-feedback-full">View more</button>
          ) : null}
        </div>
        <div className="reviews__block-star-value">
          {starElem.slice(0, Number(item.mark)).map((item, i) => (
            <Image
              key={i}
              src={star}
              alt="image_star_rat"
              className="reviews__image-star"
            />
          ))}
        </div>
        <div className="reviews__block-name-user">
          <h2 className="reviews__name-user">
            {item.id_user.userName.slice(0, 1).toUpperCase() +
              item.id_user.userName.slice(1).toLowerCase() +
              " " +
              item?.id_user?.lastName!.slice(0, 1).toUpperCase() +
              "."}
          </h2>
          <p className="reviews__studio-user">Weave Studios – Kai Tak</p>
          <div className="reviews__system-user-block">
            <Image
              src={system_image}
              alt="image_system"
              className="reviews__system-image"
            />
            <p className="reviews__system-name">Google</p>
          </div>
        </div>
        <Image
          src={
            typeof item.image_review !== "string"
              ? not_image
              : item.image_review
          }
          width={380}
          height={220}
          alt="image_place"
          className="image_place"
        />
      </div>
    </div>
  );
};

export default ReviewComponentUser;
