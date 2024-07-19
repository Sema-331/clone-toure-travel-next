import InputField from "@/components/FormEvents/InputField/InputField";
import React from "react";

interface PropInt {
  setStateMinPrice: (v: string) => void;
  setStateMaxPrice: (v: string) => void;
  stateMinPrice: string | null;
  stateMaxPrice: string | null;
}

const FilterPriceComponent = ({
  setStateMinPrice,
  setStateMaxPrice,
  stateMinPrice,
  stateMaxPrice,
}: PropInt) => {
  console.log(stateMinPrice);
  return (
    <div className="fly-res__block-fill-field-values">
      <div className="fly-res__block-price-start">
        <label className="fly-res__label-price-start" htmlFor="">
          Min
        </label>
        <InputField
          className="fly-res__field-fill"
          type="number"
          placeholder="Min price..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setStateMinPrice(e.target.value)
          }
          value={stateMinPrice as string}
        />
      </div>
      <div className="fly-res__block-price-end">
        <label className="fly-res__label-price-end" htmlFor="">
          Max
        </label>
        <InputField
          className="fly-res__field-fill"
          type="number"
          placeholder="Max price..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setStateMaxPrice(e.target.value)
          }
          value={stateMaxPrice as string}
        />
      </div>
    </div>
  );
};

export default FilterPriceComponent;
