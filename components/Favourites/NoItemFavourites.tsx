import React from "react";
import image_null from "./../../public/images/favouritesNull.svg";
import Link from "next/link";
import Image from "next/image";

const NoItemFavourites = () => {
  return (
    <div className="favourites__block-no-hotel">
      <div className="favourites__block-description-txt">
        <h2 className="favourites__header-info">
          There is nothing in the selected hotels right now
        </h2>
        <p className="favourites__description-info">
          To add hotels to your favorites, go to hotel
        </p>
        <Link href="/FindHotel" className="favourites__btn-go-to">
          Go to
        </Link>
      </div>
      <div className="favourites__block-image-uu">
        <Image
          src={image_null}
          alt="image_no_hotel"
          className="favourites__image-uu"
        />
      </div>
    </div>
  );
};

export default NoItemFavourites;
