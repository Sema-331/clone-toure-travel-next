import React from "react";
import image_review_null from "./../../../public/images/—Pngtree—woman write feedback at home_5356577.png";
import Image from "next/image";

interface TypeNull {
  type: string;
}

const NullReviews = ({ type }: TypeNull) => {
  return (
    <div className="comment__block-null">
      <div className="comment__block-images-null">
        <Image
          src={image_review_null}
          alt="image_null"
          className="comment__image-null"
        />
      </div>
      <div className="comment__block-description-reviews-null">
        <h2 className="comment__header-block-null-review">
          There are no reviews about this {type} yet
        </h2>
        <p className="comment__description-review-null">
          Would you like to leave your review about this hotel?
        </p>
        <p className="comment__btn-add-review">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam
          cumque sequi itaque temporibus tenetur eius quisquam voluptates.
        </p>
      </div>
    </div>
  );
};

export default NullReviews;
