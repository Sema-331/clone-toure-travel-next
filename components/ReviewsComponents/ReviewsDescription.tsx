import React from "react";

interface IntItem {
  user: {
    mark: string;
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

const ReviewsDescription = ({ user }: IntItem) => {
  return (
    <div className="reviews__block-inside-all">
      <div className="reviews__mark-company">
        {user.length < 2
          ? user.map((item) => <>{item.mark}.0</>)
          : (
              user.reduce((prev, item) => prev + Number(item.mark), 0) /
              user.length
            ).toFixed(1)}
      </div>
      <div className="reviews__block-info-mark-company">
        <div className="reviews__block-description-mark-company">
          <p className="reviews__description-company-good">Very Good</p>
          <p className="reviews__description-count-reviews">
            {user.length} Reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsDescription;
