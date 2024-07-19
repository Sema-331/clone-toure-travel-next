"use client";

import Image from "next/image";
import React from "react";
import fill from "./../../../public/images/Filled=True.png";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import AddPromoModal from "./AddPromoModal";
import FormLandingFly from "./FormLandingFly";
import useFormPersist from "react-hook-form-persist";

interface FormInt {
  email: string;
  password: string;
  date_input_first: string;
  date_input_second: string;
  from: string;
  to: string;
  depart: string;
  class_avia: string;
  room_type: string;
  trip: string;
  promo_code: string;
  firstName: {
    value: string;
    label: string;
  };
}

interface NewInt {
  setNameType: (v: string) => void;
  setDateStartFrom: (v: string) => void;
  setNameAirportTo: (v: string) => void;
  setNameAirportFrom: (v: string) => void;
  onSearch: () => void;
}

const Form = ({
  setNameType,
  setDateStartFrom,
  setNameAirportTo,
  setNameAirportFrom,
  onSearch,
}: NewInt) => {
  const {
    register,
    control,
    watch,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInt>({
    mode: "onBlur",
  });

  useFormPersist(
    "form2",
    { watch, setValue },
    {
      storage: typeof window !== "undefined" ? window.localStorage : undefined,
    }
  );

  console.log("second");

  return (
    <form
      className="form_landing-select"
      onSubmit={handleSubmit(onSearch)}
      action=""
    >
      <FormLandingFly
        setNameAirportFrom={setNameAirportFrom}
        setNameAirportTo={setNameAirportTo}
        setDateStartFrom={setDateStartFrom}
        setNameType={setNameType}
        register={register}
        errors={errors}
        control={control}
      />
      <div className="seacrh__block-options-users">
        <AddPromoModal register={register} />
        <button type="submit" className="search__btn-show-variants">
          <Image src={fill} alt="show_btn" className="search__image-variants" />
          <p className="search__description-variants">Show Flights</p>
        </button>
      </div>
    </form>
  );
};

export default Form;
