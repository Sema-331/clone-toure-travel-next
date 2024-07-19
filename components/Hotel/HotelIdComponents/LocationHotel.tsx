import Image from "next/image";
import React from "react";
import image_map from "./../../../public/images/Rectangle 19.png";
import location_icon from "./../../../public/images/Location.png";
import ComponentListAmenitiesOptions from "./ComponentListAmenitiesOptions";

const LocationHotel = () => {
  return (
    <section>
      <div className="container">
        <div className="location">
          <div className="location__block-main">
            <div className="location__main-block-uu">
              <div className="location__block-uu-sec">
                <p className="location__description-block">Location/Map</p>
                <button className="location__btn-google-maps">
                  View on google maps
                </button>
              </div>
              <div className="location__block-image-map">
                <Image
                  src={image_map}
                  alt="image_map"
                  className="location__image-map"
                />
                <div className="location__block-map-hotel">
                  <Image
                    src={location_icon}
                    alt="icon__geo"
                    className="lovation__image-geo"
                  />
                  <p className="location__description-name-place">
                    Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                  </p>
                </div>
              </div>
            </div>
            <div className="location__block-amenities">
              <h2 className="location__header-name">Amenities</h2>
              <ComponentListAmenitiesOptions />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHotel;
