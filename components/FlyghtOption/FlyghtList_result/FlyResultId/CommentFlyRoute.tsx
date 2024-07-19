import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/type-libs/lib";
import { db } from "@/prismaData/db";
import BtnOpenAddReview from "@/components/Hotel/HotelIdComponents/BtnOpenAddReview";
import NullReviews from "@/components/Hotel/HotelIdComponents/NullReviews";
import CommentComponentUU from "@/components/Hotel/HotelIdComponents/CommentComponentUU";
import { getReviewSingles, getUser } from "@/dbQueries/dbQueries";
// import { handleGetData } from '@/Helperdb/test'

interface IntProp {
  rest: any;
  data: any;
}

const CommentFlyRoute = async ({ data, rest }: IntProp) => {
  const user3 = await getUser();

  const res = await getReviewSingles();
  const value = (
    rest.reduce(
      (prev: number, item: { rating: string }) => prev + Number(item.rating),
      0
    ) / rest.length
  ).toFixed(1);

  return (
    <section>
      {user3?.id}
      {res.map((item) => (
        <>{item.id}</>
      ))}
      {/* <>{(review.reduce((prev, item) => prev + Number(item.rating), 0) / review.length).toFixed(1)}</> */}
      <div className="container">
        <div className="comment">
          <div className="comment__block-main">
            <div className="comment__block-header">
              <h2 className="comment__header-block">Reviews</h2>
              {user3?.id}
              {data.map((item: any, i: number) => (
                <BtnOpenAddReview
                  // session={session}
                  user3={user3}
                  key={i}
                  item={item}
                />
              ))}
            </div>
            {rest.length > 0 ? (
              <div className="comment__block-float-count-mark">
                <div className="comment__block-main-mark">
                  <p className="comment__description-mark">
                    {rest.length === 0 ? (
                      <>5.0</>
                    ) : rest.length === 1 ? (
                      <>
                        {rest.map((item: { rating: string }) => (
                          <>{item.rating}</>
                        ))}
                      </>
                    ) : (
                      <>
                        {(
                          rest.reduce(
                            (prev: number, item: { rating: string }) =>
                              prev + Number(item.rating),
                            0
                          ) / rest.length
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
                    {rest.length} Verified Reviews
                  </p>
                </div>
              </div>
            ) : (
              <NullReviews type="hotel" />
            )}
            <CommentComponentUU userSecond={rest} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentFlyRoute;

/**
 * <div className="comment__block-float-count-mark">
                        <div className="comment__block-main-mark">
                            <p className="comment__description-mark">
                                {
                                    userSecond.length === 0 ? <>5.0</> : userSecond.length === 1 ? <>{userSecond.map((item) => (
                                        <>{item.rating}</>
                                    ))}</> : <>{(userSecond.reduce((prev, item) => prev + Number(item.rating), 0) / userSecond.length).toFixed(1)}</>
                                }
                            </p>
                        </div>
                        <div className="comment__block-uu-inside">
                            <p className="comment__description-short-review">{Number(value) >= 4.5 ? 'Very Good' : Number(value) > 4.0 && Number(value) < 4.5 ? 'Good' : Number(value) > 3.5 && Number(value) < 4.0 ? 'Quite' : 'Bad' }</p>
                            <p className="comment__description-count-review">{userSecond.length} Verified Reviews</p>
                        </div>
                    </div>
 */
