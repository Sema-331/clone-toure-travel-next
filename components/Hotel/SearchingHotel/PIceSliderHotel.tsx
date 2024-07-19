"use client";

import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slider";

interface IntValues {
  name: string;
  image_value: string;
  opt_min: string;
  opt_max: string;
}

const PriceSliderHotel = ({
  name,
  image_value,
  opt_min,
  opt_max,
}: IntValues) => {
  const [values, setValues] = useState([0, 100]);
  const handleChange = (newValues: any) => setValues(newValues);

  return (
    <div className="hotel__first-slide">
      <div className="hotel__block-name-content">
        <p className="hotel__description-content-name">{name}</p>
        <Image
          src={image_value}
          alt="image_close"
          className="hotel__close-content"
          width={24}
          height={24}
        />
      </div>
      <Slider
        className="slider"
        value={values}
        onChange={handleChange}
        min={0}
        max={100}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <label className="hotel__min-price" htmlFor="minPrice">
            {opt_min}
          </label>
          <input
            type="number"
            id="minPrice"
            value={values[0]}
            onChange={(e) => handleChange([+e.target.value, values[1]])}
          />
        </div>
        <div>
          <label className="hotel__min-price" htmlFor="maxPrice">
            {opt_max}
          </label>
          <input
            type="number"
            id="maxPrice"
            value={values[1]}
            onChange={(e) => handleChange([values[0], +e.target.value])}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceSliderHotel;
