import React from "react";
import ReviewsFormComponent from "./ReviewsFormComponent";
import ReviewsBlockUU from "./ReviewsBlockUU";
import NullReviews from "../Hotel/HotelIdComponents/NullReviews";
import { getReviews, getUser } from "@/dbQueries/dbQueries";

const ReviewsMainComponent = async () => {
  const user = await getReviews();
  const userSecond = await getUser();

  return (
    <section>
      <div className="container">
        <div className="reviews_company-block">
          <div className="reviews__block-company-inside">
            <h1 className="reviews__header-page">Leave your feedback</h1>
            <p className="reviews__description-think">
              What do you think about our company
            </p>
            <ReviewsFormComponent userSecond={userSecond} />
          </div>
          <div className="reviews__block-all-views">
            <h2 className="reviews__header-view">All Reviews</h2>
            {user.length > 0 ? (
              <ReviewsBlockUU user={user} />
            ) : (
              <NullReviews type="company" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsMainComponent;
