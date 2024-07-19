"use client";

import React, { useEffect } from "react";
import ItemHotel from "./ItemHotel";
import Skeleton from "@/ui/Skeleton/Fly_ticket/skeleton";
import LoadMoreProduct from "@/services/LoadMoreProduct";
import ErrorRequest from "./ErrorRequest";

interface IntItem {
  states: any;
  user2: {
    id: string;
    userName: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    lastName: string | null;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    date_birth: string | null;
  } | null;
  stateLoad: boolean;
}

const HotelItems = ({ states, user2, stateLoad }: IntItem) => {
  useEffect(() => {});

  const { handleLoadMore, stateVisibleProduct } = LoadMoreProduct();

  return (
    <div>
      <>
        {!stateLoad ? (
          states.length > 0 ? (
            states
              .slice(0, stateVisibleProduct)
              .map((item: any) => (
                <ItemHotel
                  stateVisibleProduct={stateVisibleProduct}
                  user2={user2}
                  item={item}
                  key={item.id}
                  logo_image={"/images/Rectangle 3 (8).png"}
                  reviews_hotel={371}
                />
              ))
          ) : (
            <ErrorRequest />
          )
        ) : (
          <Skeleton />
        )}
      </>
      <button
        data-testid="btn-show-more"
        type="button"
        onClick={() => handleLoadMore(states.length)}
        className={
          stateVisibleProduct === states.length
            ? "hotel__show-more-res"
            : "hotel__show-more-res-active"
        }
      >
        Show more results
      </button>
    </div>
  );
};

export default HotelItems;

{
  /* Блок когда результат не найден */
}
{
  /* <div className='hotel__block-failed-search'>
        <div className='hotel__image-sad-smile'>
            <Image className='hotel__image-sad' src={sad_smile} alt='icon' />
        </div>
        <div className='hotel__description-recommended-by-failed'>
            <h2 className='hotel__header-recommended'>We didn`t find anything for your request</h2>
            <p className='hotel__description-recommended'>Change the request or refer to our recommendations</p>
        </div>
    </div> */
}
