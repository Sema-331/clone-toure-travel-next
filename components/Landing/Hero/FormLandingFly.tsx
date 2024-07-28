import React, { useEffect, useRef, useState } from "react";
import fill from "./../../../public/images/Filled=True.png";
import Select, { components, DropdownIndicatorProps } from "react-select";
import { Controller, UseFormReturn, useForm } from "react-hook-form";
import swap from "./../../../public/images/ion_swap-horizontal.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddPromoModal from "./AddPromoModal";
import SelectPassengerClassField from "./SelectPassengerClassField";
import Image from "next/image";
import useFormPersist from "react-hook-form-persist";
import ErrorComponent from "@/components/FormEvents/InputErrorComponent/ErrorComponent";
import { z } from "zod";
import { formatDateString } from "@/helpers/FormDateString";

interface MyInt {
  // register: UseFormReturn['register'];
  register: any;
  errors: any;
  control: any;
  check_out?: string;
  check_in?: string;
  room_guest?: string;
  setNameType: (v: string) => void;
  setNameAirportFrom: (v: string) => void;
  setNameAirportTo: (v: string) => void;
  setDateStartFrom: (v: string) => void;
}

const FormLandingFly = ({
  register,
  errors,
  control,
  setNameType,
  setNameAirportFrom,
  setNameAirportTo,
  setDateStartFrom,
}: MyInt) => {
  const options = [
    { value: "Lahore", label: "Lahore" },
    { value: "Karachi", label: "Karachi" },
    { value: "Russia", label: "Russia" },
    { value: "USA", label: "USA" },
  ];

  // function formatDateString(dateString: any) {
  //   // Преобразование закодированной строки в обычную строку
  //   const decodedDateString = decodeURIComponent(dateString);

  //   // Преобразование строки даты в объект Date
  //   const date = new Date(decodedDateString);

  //   // Извлечение года, месяца и дня
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, "0"); // Месяц от 0 до 11, поэтому добавляем 1
  //   const day = String(date.getDate()).padStart(2, "0");

  //   // Форматирование в строку YYYY/MM/DD
  //   return `${year}/${month}/${day}`;
  // }

  const DropdownIndicator = (props: DropdownIndicatorProps<any, true>) => {
    return (
      <components.DropdownIndicator {...props}>
        <Image src={swap} height={28} width={28} alt="icon_form" />
      </components.DropdownIndicator>
    );
  };

  return (
    <div className="search__block-form-field">
      <div className="search__label-ff">
        <label className="search__label-forms">From</label>
        <Controller
          data-testid="input1"
          control={control}
          name="from"
          rules={{ required: true }}
          render={(renderProps) => {
            const { ref, ...rest } = renderProps.field;
            return (
              <Select
                options={options}
                menuPlacement="auto"
                isSearchable={true}
                {...register("from")}
                {...renderProps.field}
                required
                onChange={(e: any) => {
                  setNameAirportFrom(e.value);
                  console.log(e);
                  renderProps.field.onChange(e);
                }}
                components={{ DropdownIndicator }}
              />
            );
          }}
        />
        {errors?.from && <ErrorComponent errors={errors.from?.message} />}
        {/* <Image src={swap} alt='icon_swap' className='search__image-swap' /> */}
      </div>
      <div className="search__label-f">
        <label className="search__label-forms">To</label>
        <Controller
          control={control}
          name="to"
          rules={{ required: true }}
          render={(renderProps) => {
            const { ref, ...rest } = renderProps.field;
            return (
              <Select
                required
                options={options}
                menuPlacement="auto"
                isSearchable={true}
                {...register("to")}
                {...renderProps.field}
                onChange={(e: any) => {
                  console.log(e);
                  setNameAirportTo(e.value);
                  renderProps.field.onChange(e);
                }}
                components={{ DropdownIndicator }}
              />
            );
          }}
        />
        <div>
          {errors?.to && <ErrorComponent errors={errors.to?.message} />}
        </div>
      </div>
      {/* <div className='search__label-s'>
          <label className='search__label-forms' htmlFor="">Trip</label>
          <Controller
        control={control}
        name="trip"
        rules={{ required: true }}
        render={renderProps => {
          const { ref, ...rest } = renderProps.field;
          return (
            <Select
              options={options}
              menuPlacement="auto"              
              isSearchable={false}
              {...register('trip')}
              {...renderProps.field}
              onChange={e => {
                console.log(e);
                renderProps.field.onChange(e);
              }}
              components={{DropdownIndicatorS}}
            />
          );
        }}
      />
          <Image src={arrow_down} alt='icon_swap' className='search__image-arrows' />
      </div> */}
      <div className="search__label-t">
        <label className="search__label-forms" htmlFor="">
          Depart-Return
        </label>
        <Controller
          control={control}
          {...register("date_input_first")}
          name="date_input_first"
          render={({ field }) => (
            <DatePicker
              required
              className="date__select"
              placeholderText="Select date"
              onChange={(date) => {
                console.log(date);
                console.log(formatDateString(date as any));
                setDateStartFrom(formatDateString(date as any));
                field.onChange(date);
              }}
              selected={field.value}
              minDate={new Date()}
            />
          )}
        />
        <div>
          {errors.date_input_first && (
            <ErrorComponent errors={errors.firstName?.message} />
          )}
        </div>
      </div>
      <div className="search__label-s">
        <label className="search__label-forms" htmlFor="">
          Depart-Return
        </label>
        <Controller
          control={control}
          {...register("date_input_second")}
          name="date_input_second"
          render={({ field }) => (
            <DatePicker
              required
              className="date__select"
              placeholderText="Select date"
              onChange={(date) => field.onChange(date)}
              minDate={new Date()}
              selected={field.value}
            />
          )}
        />
        {/* <CalendarRange className='search__image-dates' /> */}
      </div>
      <div className="search__label-fo">
        <label className="search__label-forms" htmlFor="">
          Passenger-Class
        </label>
        <SelectPassengerClassField
          setNameType={setNameType}
          register={register}
          control={control}
        />
      </div>
    </div>
  );
};

export default FormLandingFly;
