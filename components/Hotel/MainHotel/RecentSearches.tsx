import { arrFavouritesPlaces, hotelPlace } from "@/helpers/arr/arr";
import Image from "next/image";
import React from "react";

const RecentSearches = () => {
  return (
    <section>
      <div className="container">
        <div className="recent__block-main">
          <div className="recent__block-headers">
            <h2 className="recent__header-block">Your recent searches</h2>
          </div>
          <div className="recent__block-placeses">
            {hotelPlace.map((item) => (
              <div className="recent__block-places-list-box" key={item.id}>
                <div className="recent__block-places-image">
                  <Image
                    alt="image_places"
                    className="recent__images-places"
                    src={item.image}
                  />
                </div>
                <div className="recent__block-description-place">
                  <h2 className="recent__header-places-block">{item.title}</h2>
                  <p className="recent__description-places">
                    {item.countPlaces} places
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentSearches;
