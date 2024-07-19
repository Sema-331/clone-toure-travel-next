import React from "react";
import BtnOpenAddReview from "./BtnOpenAddReview";
import { getServerSession } from "next-auth";
import { authOptions } from "@/type-libs/lib";
import { db } from "@/prismaData/db";
import CommentComponentUU from "./CommentComponentUU";
import NullReviews from "./NullReviews";
import { getUser } from "@/dbQueries/dbQueries";
import { getRateSum } from "@/helpers/RateSum";

interface RateInt {
  // user2: {
  //     id: number;
  //     userId: string;
  //     star_hotel: string | null;
  //     check_in_date: Date;
  //     check_out_date: Date;
  //     room_number: number;
  //     price: string;
  //     name_hotel: string;
  //     rate: string;
  //     geo_hotel: string;
  //     freebies_options: string[];
  //     amenities_option: string[];
  //     variaty_hotel: string;
  //     idHotel: number;
  // }[],
  user2: any;
  userSecond: any;
}

const CoomentComponent = async ({ user2, userSecond }: RateInt) => {
  const user3 = await getUser();

  const value = getRateSum(userSecond);

  return (
    <section>
      {user3?.id}
      <>
        {(
          userSecond.reduce(
            (prev: number, item: { rating: string }) =>
              prev + Number(item.rating),
            0
          ) / userSecond.length
        ).toFixed(1)}
      </>
      <div className="container">
        <div className="comment">
          <div className="comment__block-main">
            <div className="comment__block-header">
              <h2 className="comment__header-block">Reviews</h2>
              {user2.id}
              {user2.map((item: any) => (
                <BtnOpenAddReview user3={user3} key={item.id} item={item} />
              ))}
            </div>
            {userSecond.length > 0 ? (
              <div className="comment__block-float-count-mark">
                <div className="comment__block-main-mark">
                  <p className="comment__description-mark">
                    {userSecond.length === 0 ? (
                      <>5.0</>
                    ) : userSecond.length === 1 ? (
                      <>
                        {userSecond.map((item: { rating: string }) => (
                          <>{item.rating}</>
                        ))}
                      </>
                    ) : (
                      <>
                        {(
                          userSecond.reduce(
                            (prev: number, item: { rating: string }) =>
                              prev + Number(item.rating),
                            0
                          ) / userSecond.length
                        ).toFixed(1)}
                      </>
                    )}
                  </p>
                </div>
                <div className="comment__block-uu-inside">
                  <p className="comment__description-short-review">
                    {Number(value) >= 4.5
                      ? "Very Good"
                      : Number(value) > 4.0 && Number(value) < 4.5
                      ? "Good"
                      : Number(value) > 3.5 && Number(value) < 4.0
                      ? "Quite"
                      : "Bad"}
                  </p>
                  <p className="comment__description-count-review">
                    {userSecond.length} Verified Reviews
                  </p>
                </div>
              </div>
            ) : (
              <NullReviews type="hotel" />
            )}
            <CommentComponentUU userSecond={userSecond} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoomentComponent;
