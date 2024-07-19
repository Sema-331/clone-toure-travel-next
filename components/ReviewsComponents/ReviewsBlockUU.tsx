import React from "react";
import ReviewsDescription from "./ReviewsDescription";
import ReviewsSingleComponent from "./ReviewsSingleComponent";
import { TableReviews } from "@/interfaces/interface";

interface IntItem {
  user: {
    id: number;
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

interface Prop {
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

interface IntTabRev {
  user: TableReviews[];
}

const ReviewsBlockUU = ({ user }: any) => {
  return (
    <>
      <ReviewsDescription user={user} />
      <ReviewsSingleComponent user={user} />
    </>
  );
};

export default ReviewsBlockUU;
