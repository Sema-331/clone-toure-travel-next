import React from "react";
import image_map from "./../../../public/images/Frame 2608705.png";
import Image from "next/image";
import BtnNoFill from "@/components/BtnNoFill/BtnNoFill";

const Places = () => {
  return (
    <section>
      <div className="container">
        <div className="places__block">
          <div className="places__block-description">
            <div className="places__block-description-inside">
              <h2 className="places__header">Let`s go places together</h2>
              <p className="places__description">
                Discover the latest offers and news and start planning your next
                trip with us.
              </p>
            </div>
            <div className="reviews__btn-block">
              <BtnNoFill className="reviews__btn">See All</BtnNoFill>
            </div>
          </div>
          <div className="places__block-images">
            <Image
              src={image_map}
              alt="image_map"
              className="places__image-map"
              fill={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Places;
