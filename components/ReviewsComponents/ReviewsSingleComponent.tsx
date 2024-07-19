"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import flag_icon from "./../../public/images/Flag.png";
import user_default_image from "./../../public/images/user.svg";
import PaginationComment from "../Hotel/HotelIdComponents/PaginationComment";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/ui/Loader/Loader";

interface IntItem {
  user: {
    id: number;
    id_user: {
      image: string;
      userName: string;
      lastName: string;
    };
    mark: string;
    description_txt: string;
    userId: string;
    star_hotel: string | null;
    check_in_date: Date;
    check_out_date: Date;
    room_number: number;
    price: string;
    name_hotel: string;
    rate: string;
    geo_hotel: string;
    freebies_options: string[];
    amenities_option: string[];
    variaty_hotel: string;
    idHotel: number;
    main_image: string;
    images_slider: string[];
  }[];
}

const ReviewsSingleComponent = ({ user }: IntItem) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const postNumber: number = 2;
  console.log("pag1");

  const res = useQuery({
    queryKey: ["reviews_main"],
    queryFn: () => fetch("/api/GetReviewMain").then((res) => res.json()),
  });

  const currentPageNumber = (pageNumber - 1) * postNumber;
  const paginatedPosts = res.data?.user.slice(
    currentPageNumber,
    currentPageNumber + postNumber
  );

  const handlePrev = useMemo(
    () => () => {
      if (pageNumber === 1) return;
      setPageNumber(pageNumber - 1);
    },
    [pageNumber]
  );

  const handleNext = useMemo(
    () => () => {
      if (currentPageNumber + postNumber >= res.data?.user.length) return;
      setPageNumber(pageNumber + 1);
    },
    [pageNumber]
  );

  if (res.isPending) {
    return <Loader />;
  }

  if (res.error) {
    return <div>Error...</div>;
  }

  console.log(
    res.data.user.slice(currentPageNumber, currentPageNumber + postNumber)
  );

  return (
    <div className="reviews__main-block-list-item">
      {paginatedPosts.map((item: any) => (
        <div key={item.id} className="reviews__list-item-block">
          <div className="reviews__block-uu">
            <div className="reviews__block-image-user">
              {typeof item.id_user.image === "string" ? (
                <Image
                  src={item.id_user.image}
                  alt="image_user"
                  width={60}
                  height={60}
                  className="reviews__image-user-exist"
                />
              ) : (
                <Image
                  src={user_default_image}
                  alt="image_user"
                  width={60}
                  height={60}
                  className="reviews__image-user-null"
                />
              )}
            </div>
            <div className="reviews__block-description-review">
              <div className="reviews__block-user-mark">
                {item.mark.length === 1 ? (
                  <p className="reviews__description-mark">
                    {item.mark}.0 Amazing
                  </p>
                ) : (
                  <p className="reviews__description-mark">
                    {item.mark} Amazing
                  </p>
                )}
                <hr />
                <p className="reviews__description-main-review">
                  {item.id_user.userName.slice(0, 1).toUpperCase() +
                    item.id_user.userName.slice(1).toLowerCase()}{" "}
                  {item.id_user.lastName.slice(0, 1).toUpperCase() +
                    item.id_user.lastName.slice(1).toLowerCase()}
                </p>
              </div>
              <p className="reviews__main-secr">
                {item.description_txt.slice(0, 1).toUpperCase() +
                  item.description_txt.slice(1).toLowerCase()}
                .
              </p>
            </div>
          </div>
          <div className="reviews__block-flag">
            <Image
              width={25}
              height={25}
              src={flag_icon}
              alt="icon_flag"
              className="reviews__image-flag"
            />
          </div>
        </div>
      ))}
      <PaginationComment
        pageNumber={pageNumber}
        totalPages={Math.ceil(user.length / postNumber)}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
};

export default ReviewsSingleComponent;
