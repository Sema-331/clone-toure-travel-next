"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import flag_icon from "./../../../public/images/Flag.png";
import user_default_image from "./../../../public/images/user.svg";

interface ImageInt {
  author_image: string;
  item: any;
}

const SingleCommentComponent = ({ author_image, item }: ImageInt) => {
  return (
    <div className="comment__list-item-block">
      <div className="comment__block-uu">
        <div className="comment__block-image-user">
          {typeof item?.user?.image === "string" ? (
            <Image
              src={item?.user?.image}
              alt="image_user"
              width={60}
              height={60}
              className="comment__image-user-exist"
            />
          ) : (
            <Image
              src={user_default_image}
              alt="image_user"
              width={60}
              height={60}
              className="comment__image-user-null"
            />
          )}
        </div>
        <div className="comment__block-description-review">
          <div className="comment__block-user-mark">
            {item?.rating.length === 1 ? (
              <p className="comment__description-mark">
                {item?.rating}.0 Amazing
              </p>
            ) : (
              <p className="comment__description-mark">{item.rating} Amazing</p>
            )}
            <hr />
            <p className="comment__description-main-review">
              {item.user?.userName?.slice(0, 1).toUpperCase() +
                item.user?.userName.slice(1).toLowerCase()}{" "}
              {item.user?.lastName.slice(0, 1).toUpperCase() +
                item.user?.lastName.slice(1).toLowerCase()}
            </p>
          </div>
          <p className="comment__main-secr">{item.description_review}.</p>
        </div>
      </div>
      <div className="comment__block-flag">
        <Image
          width={25}
          height={25}
          src={flag_icon}
          alt="icon_flag"
          className="comment__image-flag"
        />
      </div>
    </div>
  );
};

export default SingleCommentComponent;
