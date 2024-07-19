import React, { memo } from "react";
import FilterPriceComponent from "./FilterPriceComponent";
import FilterRateByTicket from "./FilterRateByTicket";
import AirlinesNameFilters from "./AirlinesNameFilters";
import BlockTripsTicket from "./BlockTripsTicket";

interface PropDate {
  onSearch: (e: React.FormEvent) => void;
  setStateMinPrice: (v: string) => void;
  setStateMaxPrice: (v: string) => void;
  stateMinPrice: string | null;
  stateMaxPrice: string | null;
  setStateRateRoute: (e: any) => void;
  stateRat: any;
  setStateRat: any;
  handleFnCheckedInput: (
    v: boolean,
    typeToRemove: string,
    type: string
  ) => void;
  handleFnCheckedInputTrips: (
    v: boolean,
    typeToRemove: string,
    type: string
  ) => void;
}

const FormFiltersSideLeft = memo(
  ({
    onSearch,
    setStateMinPrice,
    setStateMaxPrice,
    stateMinPrice,
    stateMaxPrice,
    setStateRateRoute,
    stateRat,
    setStateRat,
    handleFnCheckedInput,
    handleFnCheckedInputTrips,
  }: PropDate) => {
    console.log("form left");
    return (
      <form onSubmit={onSearch}>
        <FilterPriceComponent
          setStateMinPrice={setStateMinPrice}
          setStateMaxPrice={setStateMaxPrice}
          stateMinPrice={stateMinPrice}
          stateMaxPrice={stateMaxPrice}
        />
        <FilterRateByTicket
          stateRat={stateRat}
          setStateRat={setStateRat}
          setStateRateRoute={setStateRateRoute}
        />
        <AirlinesNameFilters handleFnCheckedInput={handleFnCheckedInput} />
        <BlockTripsTicket
          handleFnCheckedInputTrips={handleFnCheckedInputTrips}
        />
      </form>
    );
  }
);

export default FormFiltersSideLeft;
