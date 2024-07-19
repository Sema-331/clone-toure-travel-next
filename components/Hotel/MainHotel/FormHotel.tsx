"use client";

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import PromoFormBlock from "./PromoFormBlock";
import FormComponentsInside from "./FormComponentsInside";
import useFormPersist from "react-hook-form-persist";

interface FormIntHotel {
  name_country_hotel: string;
  check_out: string;
  check_in: string;
  room_guest: {
    label: string;
    value: string;
  };
}

interface Int {
  onSearch: () => void;
  setSearchQuery: (v: string) => void;
  setNameTypes: (v: string) => void;
  setDateStartFroms: (v: string) => void;
  setDateCheckout: (v: string) => void;
}

const FormHotel = ({
  onSearch,
  setSearchQuery,
  setNameTypes,
  setDateStartFroms,
  setDateCheckout,
}: Int) => {
  const {
    register,
    control,
    setValue,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<FormIntHotel>({
    mode: "onBlur",
  });

  useFormPersist(
    "form2",
    { watch, setValue },
    {
      storage: typeof window !== "undefined" ? window.localStorage : undefined,
    }
  );

  return (
    <form className="form_hotel" onSubmit={handleSubmit(onSearch)} action="">
      <div className="search__block-form-field">
        <FormComponentsInside
          setNameTypes={setNameTypes}
          setDateStartFroms={setDateStartFroms}
          setDateCheckout={setDateCheckout}
          setSearchQuery={setSearchQuery}
          register={register}
          errors={errors}
          control={control}
        />
      </div>
      <PromoFormBlock register={register} />
    </form>
  );
};

export default FormHotel;
