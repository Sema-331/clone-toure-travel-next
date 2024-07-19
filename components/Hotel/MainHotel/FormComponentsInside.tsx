import Image from "next/image";
import image_calendar from "./../../../public/images/Fill=True_calendar.png";
import state from "./../../../public/images/ion_bed_black.png";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select, { DropdownIndicatorProps, components } from "react-select";
import user_image from "./../../../public/images/User=True.png";
import React from "react";
import { formatDateString } from "@/helpers/FormDateString";
import ErrorComponent from "@/components/FormEvents/InputErrorComponent/ErrorComponent";
import { options } from "@/helpers/arr/ArrOPtions";

interface MyInt {
  // register: UseFormReturn<FieldValues>['register'];
  register: any;
  errors: any;
  control: any;
  check_out?: string;
  check_in?: string;
  room_guest?: string;
  setSearchQuery: (v: string) => void;
  setNameTypes: (v: string) => void;
  setDateStartFroms: (v: string) => void;
  setDateCheckout: (v: string) => void;
}

const FormComponentsInside = ({
  register,
  errors,
  control,
  setSearchQuery,
  setNameTypes,
  setDateStartFroms,
  setDateCheckout,
}: MyInt) => {
  const DropdownIndicator = (props: DropdownIndicatorProps<any, true>) => {
    return (
      <components.DropdownIndicator {...props}>
        <Image src={user_image} height={28} width={28} alt="icon_form" />
      </components.DropdownIndicator>
    );
  };

  return (
    <>
      <div className="search__label-f">
        <label className="search__label-forms">Enter Destination</label>
        <input
          placeholder="Select country & hotel"
          className="search__input-ff"
          type="text"
          {...register("name_country_hotel", {
            required: "Required field",
            minLength: {
              value: 5,
              message: "Minimum 5 symbol",
            },
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchQuery(e.target.value);
            },
          })}
        />
        <div>
          {errors?.name_country_hotel && (
            <ErrorComponent errors={errors?.name_country_hotel} />
          )}
        </div>
        <Image src={state} alt="icon_swap" className="search__image-swap" />
      </div>
      <div className="search__label-s">
        <label className="search__label-forms" htmlFor="">
          Check-in
        </label>
        <Controller
          {...register("check_in")}
          control={control}
          name="check_in"
          render={({ field }) => (
            <DatePicker
              required
              className="date__select"
              placeholderText="Select date"
              onChange={(date) => {
                setDateStartFroms(formatDateString(date as any));
                console.log(formatDateString(date as any));
                console.log(typeof date);
                console.log(date);
                field.onChange(date);
              }}
              selected={field.value}
              minDate={new Date()}
            />
          )}
        />
        <Image
          src={image_calendar}
          alt="icon_swap"
          className="search__image-dates"
        />
      </div>
      <div className="search__label-t">
        <label className="search__label-forms" htmlFor="">
          Check-out
        </label>
        <Controller
          {...register("check_out")}
          control={control}
          name="check_out"
          render={({ field }) => (
            <DatePicker
              required
              className="date__select"
              placeholderText="Select date"
              onChange={(date) => {
                setDateCheckout(formatDateString(date as any));
                console.log(setDateCheckout(formatDateString(date as any)));
                field.onChange(date);
              }}
              selected={field.value}
              minDate={new Date()}
            />
          )}
        />
        <Image
          src={image_calendar}
          alt="icon_calendar"
          className="search__image-dates"
        />
      </div>
      <div className="search__label-fo">
        <label className="search__label-forms" htmlFor="">
          Rooms & Guest
        </label>
        <Controller
          control={control}
          name="room_guest"
          rules={{ required: true }}
          render={(renderProps) => {
            const { ref, ...rest } = renderProps.field;

            return (
              <Select
                options={options}
                menuPlacement="auto"
                isSearchable={true}
                {...register("room_guest")}
                {...renderProps.field}
                onChange={(e: any) => {
                  console.log(e);
                  setNameTypes(e.value);
                  console.log(setNameTypes(e.value));
                  renderProps.field.onChange(e);
                }}
                components={{ DropdownIndicator }}
              />
            );
          }}
        />
      </div>
    </>
  );
};

export default FormComponentsInside;
