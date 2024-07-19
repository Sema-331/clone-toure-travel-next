import { arrFavouritesPlaces } from "@/helpers/arr/arr";
import Image from "next/image";
import React from "react";

const Plan = () => {
  return (
    <section className="plan">
      <div className="container">
        <div className="plan__block-main">
          <div className="plan__block-info-titles">
            <div className="plan__block-title">
              <h2 className="plan__title-main">Plan your perfect trip</h2>
              <p className="plan__description-main">
                Search Flights & Places Hire to our most popular destinations
              </p>
            </div>
            <div className="plan__block-more-places">
              <button className="plan__btn-places">See more places</button>
            </div>
          </div>
          <div className="plan__block-favourites-places">
            {arrFavouritesPlaces.map((item) => (
              <div key={item.id}>
                <Image src={item.image} alt="hh" />
                <div>
                  <h3>{item.title}</h3>
                  <p></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
