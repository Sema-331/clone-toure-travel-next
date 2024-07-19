import React from "react";

interface FreebiesInt {
  item: string;
  setStateFreebiesoptions: any;
}

const FreebiesSingleComponent = ({
  item,
  setStateFreebiesoptions,
}: FreebiesInt) => {
  const handlePushFreebiesOptions = (value: string) => {
    setStateFreebiesoptions((prev: string[]) => [...prev, value]);
  };

  return (
    <div className="hotel__block-list-item">
      <input
        onClick={() => handlePushFreebiesOptions(item)}
        type="checkbox"
        className="hotel__input-option-name"
      />
      <p className="hotel__name-airlines-select">{item}</p>
    </div>
  );
};

export default FreebiesSingleComponent;
