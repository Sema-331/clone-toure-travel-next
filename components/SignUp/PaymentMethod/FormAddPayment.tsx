"use client";

import CustomFooter from "@/components/Authorization/CustomFooter";
import Image from "next/image";
import arrow_down from "./../../../public/images/chevron_down.png";
import card_name_icon from "./../../../public/images/trailing-iconvisa.png";
import React, { useState } from "react";
import { useController } from "react-hook-form";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const FormAddPayment = () => {
  const {
    watch,
    register,
    reset,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: {
      cardholderName: "",
      number: "",
      expMonth: "",
      expYear: "",
      cvc: "",
    },
  });

  const {
    field: cardNumberField,
    fieldState: { error: cardNumberError },
  } = useController({
    control,
    name: "number",
    rules: {
      required: "Can't be blank",
      minLength: {
        value: 19,
        message: "Incomplete card number",
      },
      pattern: {
        value: /^(?=.*\d)[\d ]+$/,
        message: "Wrong format, numbers only",
      },
    },
  });

  const [isComplete, setIsComplete] = useState(false);

  function onSubmit(data: any, event: any) {
    event.preventDefault();
    // Send data to backend 👇
    console.log(data);
    setIsComplete(true);
  }

  function handleContinue() {
    setIsComplete(false);
    reset();
  }

  function formatCardNumber(numberStr: any) {
    return numberStr
      .replace(/\W/gi, "")
      .replace(/(.{4})/g, "$1 ")
      .substring(0, 19);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="">
      <div className="payment__block-form-main-card">
        <div className="payment__block-form-user-data-card">
          <div className="payment__block-field-card-number">
            <div className="payment__block-input-inside-with-images">
              <label className="payment__label-form-fill" htmlFor="card-number">
                Card Number
              </label>
              <input
                className="payment__input-form-fill"
                id="card-number"
                onChange={(e) => {
                  cardNumberField.onChange(formatCardNumber(e.target.value));
                }}
                placeholder="0000 0000 0000 0000"
                onBlur={cardNumberField.onBlur}
                value={cardNumberField.value}
                ref={cardNumberField.ref}
                inputMode="numeric"
              />
              <Image
                src={card_name_icon}
                alt="icon_card"
                className="payment__image-card-name"
              />
            </div>
            {cardNumberError && (
              <p className="error">{cardNumberError.message}</p>
            )}
          </div>
          <div className="payment__block-uu">
            <div className="payment__blb-inside">
              <label className="payment__label" htmlFor="card-exp-month">
                EXP. DATE (MM/YY)
              </label>
              <div className="payment__lals">
                <input
                  className="payment__input payment__input-date payment__input-form-fill"
                  id="card-exp-month"
                  {...register("expMonth", {
                    min: { value: 1, message: "Invalid date" },
                    max: { value: 12, message: "Invalid date" },
                    required: "Can't be blank",
                  })}
                  maxLength={2}
                  inputMode="numeric"
                  placeholder="MM"
                />
                <input
                  className="payment__input payment__input-month payment__input-form-fill"
                  id="card-exp-year"
                  {...register("expYear", {
                    required: "Can't be blank",
                    min: {
                      value: new Date().getFullYear() % 2000,
                      message: "Invalid date",
                    },
                    max: {
                      value: 99,
                      message: "Invalid date",
                    },
                  })}
                  maxLength={2}
                  inputMode="numeric"
                  placeholder="YY"
                />
              </div>
              {(errors.expMonth && (
                <p className="error">{errors.expMonth.message}</p>
              )) ||
                (errors.expYear && (
                  <p className="error">{errors.expYear.message}</p>
                ))}
            </div>
            <div className="payment__block-field-data">
              <label className="payment__label-form-fill-uu" htmlFor="card-cvc">
                CVC
              </label>
              <input
                className="payment__input-form-fill-uu"
                id="card-cvc"
                {...register("cvc", {
                  pattern: {
                    value: /[0-9]{3}/,
                    message: "Must be 3 digits",
                  },
                  required: "Can't be blank",
                })}
                maxLength={3}
                inputMode="numeric"
                placeholder="e.g. 123"
              />
              {errors.cvc && <p className="error">{errors.cvc.message}</p>}
            </div>
          </div>
          <div className="payment__block-field-name-card-user">
            <label
              className="payment__label-form-fill"
              htmlFor="cardholder-name"
            >
              Name on Card
            </label>
            <input
              className="payment__input-form-fill"
              type="phone"
              id="cardholder-name"
              {...register("cardholderName", { required: "Can't be blank" })}
              placeholder="e.g. Jane Appleseed"
            />
            {errors.cardholderName && (
              <p className="error">{errors.cardholderName.message}</p>
            )}
          </div>
          <div className="payment__block-field-country">
            <label className="payment__label-form-fill" htmlFor="">
              Country of Region
            </label>
            <input
              className="payment__input-form-fill"
              placeholder="Country of Region"
              type="phone"
            />
            <Image
              src={arrow_down}
              alt="image_arrow-down"
              className="payment__arrow-image"
            />
          </div>
        </div>
      </div>
      <div className="payment__block-agree">
        <input type="checkbox" className="payment__agree-checked" />
        <p className="payment__description-content">
          Securely save my information for 1-click checkout
        </p>
      </div>
      <CustomFooter btn_content={"Create account"} block_options={false} />
    </form>
  );
};

export default FormAddPayment;
