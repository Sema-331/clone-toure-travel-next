"use client";

import Image from "next/image";
import React, { useState } from "react";

interface IntItem {
  item: IntDbReview;
}

interface IntDbReview {
  id: number;
  header: string;
  description: string;
  image_star: IntImagesStar[];
  user_name: string;
  name_hotel_ticket: string;
  image_place: string;
}

interface IntImagesStar {
  id: number;
  image: string;
}

const ClientComponentViewMore: React.FC<IntItem> = ({ item }) => {
  const [state, setState] = useState<boolean>(false);

  // const myFnSlice = (s: string, w: 89) => s.length > w ? s.slice(0, w) + '...' : s

  return (
    <div className="reviews__block-description-feedback">
      <p className="reviews__description-inside">
        {state ? (
          <>{item.description}</>
        ) : (
          <>{item.description.slice(0, 100) + "..."}</>
        )}
      </p>
      <button
        onClick={() => setState(!state)}
        className="reviews__btn-feedback-full"
      >
        {state ? <>Close</> : <>View more</>}
      </button>
      <div className="reviews__block-stars-rat">
        {item.image_star.map((item) => (
          <Image
            width={24}
            height={24}
            key={item.id}
            src={item.image}
            alt="image_star_rat"
            className="reviews__image-star"
          />
        ))}
      </div>
    </div>
  );
};

export default ClientComponentViewMore;
