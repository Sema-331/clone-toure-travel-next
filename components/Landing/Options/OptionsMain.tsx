import Image from "next/image";
import React from "react";
import img_flight from "./../../../public/images/Rectangle 40.png";
import img_hotels from "./../../../public/images/Rectangle 41.png";
import flight from "./../../../public/images/Filled=True.png";
import hotel from "./../../../public/images/ion_bed_black.png";
import Link from "next/link";
import BtnNoFill from "@/components/BtnNoFill/BtnNoFill";

const OptionsMain = () => {
  return (
    <section>
      <div className="container">
        <div className="options">
          <div className="options__block-main">
            <div className="options__flights-block">
              <Image
                src={img_flight}
                alt="image_flight_option"
                className="option__image-fight"
                fill={true}
              />
              <div className="option__flight-block-content">
                <h2 className="option__header-flight">Flights</h2>
                <p className="option__description-flight">
                  Search Flights & Places Hire to our most popular destinations
                </p>
                {/* <BtnNoFill className="option__btn-fligth">
                <Image
                    className="option__btn-flight-inside"
                    src={flight}
                    alt="image_btn-flight"
                  />
                  <Link href="/FindFly" className="option__btn-fligth-name">
                    Show Filghts
                  </Link>
                </BtnNoFill> */}
                <button className="option__btn-fligth">
                  <Image
                    className="option__btn-flight-inside"
                    src={flight}
                    alt="image_btn-flight"
                  />
                  <Link href="/FindFly" className="option__btn-fligth-name">
                    Show Filghts
                  </Link>
                </button>
              </div>
            </div>
            <div className="options__hotels-block">
              <Image
                src={img_hotels}
                alt="image_hotel_option"
                className="option__image-hotel"
                fill={true}
              />
              <div className="option__hotel-block-content">
                <h2 className="option__header-hotel">Hotels</h2>
                <p className="option__description-hotel">
                  Search hotels & Places Hire to our most popular destinations
                </p>
                {/* <BtnNoFill className="option__btn-hotel">
                <Image
                    className="option__btn-hotel-inside"
                    src={hotel}
                    alt="image_btn-hotel"
                  />
                  <Link href="/FindHotel" className="option__btn-hotel-name">
                    Show Hotels
                  </Link>
                </BtnNoFill> */}
                <button className="option__btn-hotel">
                  <Image
                    className="option__btn-hotel-inside"
                    src={hotel}
                    alt="image_btn-hotel"
                  />
                  <Link href="/FindHotel" className="option__btn-hotel-name">
                    Show Hotels
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptionsMain;
