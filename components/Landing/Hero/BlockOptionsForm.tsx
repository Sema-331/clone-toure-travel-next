import Image from "next/image";
import React from "react";
import img_flights from "./../../../public/images/airplane_black.png";
import img_stays from "./../../../public/images/ion_bed_black.png";

const BlockOptionsForm = () => {
  return (
    <div className="search__block-options-uu">
      <div className="search__block-options-inside-first">
        <div className="search__block-flights">
          <Image
            src={img_flights}
            alt="image_flight"
            className="search__image-fly"
          />
          <p className="search__descr-fly">Flyghts</p>
        </div>
      </div>
      <div className="search__block-options-inside-second">
        <div className="search__block-stays">
          <Image
            src={img_stays}
            className="search__image-stay"
            alt="image_stays"
          />
          <p className="search__descr-stays">Stays</p>
        </div>
      </div>
    </div>
  );
};

export default BlockOptionsForm;
