"use client";

import { CalendarRange, TicketCheck } from "lucide-react";
import Image from "next/image";
import React, { memo } from "react";
import swap from "./../../../public/images/ion_swap-horizontal.png";
import arrow_down from "./../../../public/images/chevron_down.png";
import CustomBtn from "@/components/Custom/CustomBtn";
import FormLandingFly from "./FormLandingFly";
import search from "./../../../public/images/Vector_search.png";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FilterRateByTicket from "@/components/FlyghtOption/FlyghtList_result/FilterRateByTicket";

interface FormInt {
  email: string;
  password: string;
  date_input_first: string;
  date_input_second: string;
  from: string;
  to: string;
  depart: string;
  class: string;
  trip: string;
  promo_code: string;
  firstName: {
    value: string;
    label: string;
  };
}

interface PropForm {
  setNameType: any;
  setDateStartFrom: any;
  setNameAirportFrom: any;
  setNameAirportTo: any;
  onSearch: (e: React.FormEvent) => void;
}

const arrSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const schema = z.object({
  from: arrSchema,
  to: arrSchema,
  date_input_first: z.date(),
  // date_input_first: z.date().refine((date) => date >= new Date(), {
  //   message: "Date must be in the future",
  // }),
  date_input_second: z.date().refine((date) => date >= new Date(), {
    message: "Date must be in the future",
  }),
  passenger_class: z.string().min(1, "Required field"),
});

type ZodType = z.infer<typeof schema>;

const FormFill = memo(
  ({
    setNameType,
    setDateStartFrom,
    setNameAirportFrom,
    setNameAirportTo,
    onSearch,
  }: PropForm) => {
    const {
      register,
      control,
      watch,
      setValue,
      formState: { errors },
      handleSubmit,
    } = useForm<ZodType>({
      mode: "onBlur",
      resolver: zodResolver(schema),
    });

    useFormPersist(
      "form2",
      { watch, setValue },
      {
        storage:
          typeof window !== "undefined" ? window.localStorage : undefined,
      }
    );

    // const submitHandler = () => {
    //   onSearch();
    // };
    console.log("form");

    return (
      <form className="form_landing-select" action="" onSubmit={onSearch}>
        <FormLandingFly
          setNameType={setNameType}
          setDateStartFrom={setDateStartFrom}
          setNameAirportFrom={setNameAirportFrom}
          setNameAirportTo={setNameAirportTo}
          register={register}
          errors={errors}
          control={control}
        />
        <button type="submit" className="fly-res__search-btn">
          <Image
            src={search}
            className="fly-res__image-search"
            alt="image_search"
          />
        </button>
      </form>
    );
  }
);

export default FormFill;

/**
 * 
 * import { CalendarRange, TicketCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import swap from './../../../public/images/ion_swap-horizontal.png'
import arrow_down from './../../../public/images/chevron_down.png'
import CustomBtn from '@/components/Custom/CustomBtn'
import HJH from './Fields/Trip/Trip'
import FromField from './Fields/From/FromField'
import ToField from './Fields/To/ToField'
import TypeClassField from './Fields/TypeClass/TypeClassField'

const FormFill = () => {
  return (
    <div className='search__block-form-field'>
        <div className='search__label-f'>
            <FromField />
        </div>
        <div className='search__label-f'>
            <ToField />
        </div>
        <div className='search__label-s'>
            <HJH />
        </div>
        <div className='search__label-t'>
            <input className='search__input-ff' type="text" required/>
            <label className='search__label-forms' htmlFor="">Depart-Return</label>
            <CalendarRange className='search__image-dates' />
        </div>
        <div className='search__label-fo'>
            <TypeClassField />
        </div>
    </div>
  )
}

export default FormFill
 */
