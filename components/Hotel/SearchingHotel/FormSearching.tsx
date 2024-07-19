"use client";

import React, { useState } from "react";
import user_image from "./../../../public/images/User=True.png";
import image_calendar from "./../../../public/images/Fill=True_calendar.png";
import state from "./../../../public/images/ion_bed_black.png";
import Image from "next/image";
import search from "./../../../public/images/Vector_search.png";
import add_image from "./../../../public/images/add-outline.png";
import danger_icon from "./../../../public/images/danger_icon.svg";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select, { DropdownIndicatorProps, components } from "react-select";
import AddPromoModal from "@/components/Landing/Hero/AddPromoModal";
import FormComponentsInside from "../MainHotel/FormComponentsInside";
import PromoFormBlock from "../MainHotel/PromoFormBlock";
import useFormPersist from "react-hook-form-persist";
import { useRouter, useSearchParams } from "next/navigation";

interface FormIntHotel {
  name_country_hotel: string;
  check_out: string;
  check_in: string;
  room_guest: string;
}

interface Intsearch {
  setSearchQuery: (v: string) => void;
  searchQuery: string | null;
  onSearch: (v: React.FormEvent) => void;
  setDateCheckout: (v: string) => void;
  setDateStartFroms: (v: string) => void;
  setNameTypes: (v: string) => void;
}

const FormSearching = ({
  setSearchQuery,
  setDateCheckout,
  setDateStartFroms,
  setNameTypes,
  searchQuery,
  onSearch,
}: Intsearch) => {
  const {
    register,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormIntHotel>({
    mode: "onBlur",
  });

  //   const submitHandler = (values: any) => {
  //     console.log(values)
  //     // onSearch()
  // }

  useFormPersist(
    "form2",
    { watch, setValue },
    {
      storage: typeof window !== "undefined" ? window.localStorage : undefined,
    }
  );

  return (
    <form className="form_hotel" onSubmit={onSearch} action="">
      <input
        style={{ border: "1px solid blue" }}
        onChange={(e: any) => setSearchQuery(e.target.value)}
        value={searchQuery as string}
      />
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
        <button className="hotel__search-btn">
          <Image
            src={search}
            className="hotel__image-search"
            alt="image_search"
          />
        </button>
      </div>
      {/* <PromoFormBlock register={register} /> */}
    </form>
  );
};

export default FormSearching;
