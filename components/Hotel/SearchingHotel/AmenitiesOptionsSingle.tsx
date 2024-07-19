import React from "react";

interface IntAmenitiesOptions {
  item: string;
  setStateAmenitiesOptions: any;
}

const AmenitiesOptionsSingle = ({
  item,
  setStateAmenitiesOptions,
}: IntAmenitiesOptions) => {
  const handleClickPushValue = (value: string) => {
    setStateAmenitiesOptions((prev: string[]) => [...prev, value]);
  };

  return (
    <div className="hotel__block-list-item">
      <input
        onClick={() => handleClickPushValue(item)}
        type="checkbox"
        className="hotel__input-option-trips"
      />
      <p className="hotel__trips-airlines-select">{item}</p>
    </div>
  );
};

export default AmenitiesOptionsSingle;
