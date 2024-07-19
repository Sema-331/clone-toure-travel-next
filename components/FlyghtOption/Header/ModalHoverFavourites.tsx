import React from "react";
import favourites_null from "./../../../public/images/favouritesNull.svg";
import Link from "next/link";
import Image from "next/image";

const ModalHoverFavourites = () => {
  return (
    <div className="change-comp__block-main-modal">
      <div className="change-comp__block-descriptions">
        <h2 className="change-comp__header-description">
          There are no products in favorites
        </h2>
        <p className="change-comp__description-navigation-user">
          To select a flight ticket or a hotel, go to the search
        </p>
        <Link className="change-comp__link-for-search" href="/">
          Search
        </Link>
      </div>
      <div className="change-comp__block-with-image">
        <Image
          src={favourites_null}
          alt="image_favourites_null"
          className="change-comp__image-null-products"
        />
      </div>
    </div>
  );
};

export default ModalHoverFavourites;
