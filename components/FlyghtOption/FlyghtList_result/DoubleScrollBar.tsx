'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import Slider from 'react-slider';
import arrow_up from './../../../public/images/chevron_down_up.png'

interface IntValues {
    name: string,
    image_value: string,
    opt_min: string,
    opt_max: string
}

const PriceSlider = ({name, image_value, opt_min, opt_max}: IntValues) => {
  const [values, setValues] = useState([0, 100]);
  const handleChange = (newValues: any) => setValues(newValues);

  const [price, setPrice] = useState(false)

  return (
    <div className='fly-res__first-slide'>
        <div className='fly-res__block-name-content'>
            <p className='fly-res__description-content-name'>{name}</p>
            <Image src={image_value} alt='image_close' className='fly-res__close-content' width={24} height={24} />
        </div>
        <div className='fly-res__block-uu-togggle' >
      <Slider
        className="slider"
        value={values}
        onChange={handleChange}
        min={0}
        max={100}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <label className='fly-res__min-price' htmlFor="minPrice">{opt_min}</label>
          <input
            type="number"
            id="minPrice"
            value={values[0]}
            onChange={(e) => handleChange([+e.target.value, values[1]])}
          />
        </div>
        <div>
          <label className='fly-res__min-price' htmlFor="maxPrice">{opt_max}</label>
          <input
            type="number"
            id="maxPrice"
            value={values[1]}
            onChange={(e) => handleChange([values[0], +e.target.value])}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default PriceSlider;