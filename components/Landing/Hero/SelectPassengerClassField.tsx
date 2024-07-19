"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Select, { components, DropdownIndicatorProps } from "react-select";
import { Control, Controller, UseFormReturn, useForm } from "react-hook-form";
import ticket_check from "./../../../public/images/ticketCheck.svg";
import "react-datepicker/dist/react-datepicker.css";
import AddPromoModal from "./AddPromoModal";

interface FormValues {
  "translation.cz.name": string;
}

interface FormInt {
  register: UseFormReturn["register"];
  control: Control<FormValues>;
  setNameType: any;
}

const SelectPassengerClassField = ({
  register,
  control,
  setNameType,
}: FormInt) => {
  const options = [
    { value: "Econom", label: "1 Passenger, Economy" },
    { value: "1 Passenger, Comfort", label: "1 Passenger, Comfort" },
    { value: "1 Passenger, Business", label: "1 Passenger, Business" },
    { value: "1 Passenger, First Class", label: "1 Passenger, First Class" },
  ];

  const DropdownIndicator = (props: DropdownIndicatorProps<any, true>) => {
    return (
      <components.DropdownIndicator {...props}>
        <Image src={ticket_check} height={28} width={28} alt="icon_form" />
      </components.DropdownIndicator>
    );
  };

  return (
    <Controller
      control={control}
      name="class_avia"
      rules={{ required: true }}
      render={(renderProps) => {
        const { ref, ...rest } = renderProps.field;
        return (
          <Select
            options={options}
            menuPlacement="auto"
            isSearchable={true}
            {...register("class")}
            {...renderProps.field}
            onChange={(e: any) => {
              setNameType(e.value);
              console.log(e);
              renderProps.field.onChange(e);
            }}
            components={{ DropdownIndicator }}
          />
        );
      }}
    />
  );
};

export default SelectPassengerClassField;
