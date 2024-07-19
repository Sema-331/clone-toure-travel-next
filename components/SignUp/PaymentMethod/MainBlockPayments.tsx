"use client";

import CustomFooter from "@/components/Authorization/CustomFooter";
import Image from "next/image";
import arrow_down from "./../../../public/images/chevron_down.png";
import card_name_icon from "./../../../public/images/trailing-iconvisa.png";
import React, { useState } from "react";
import { useController } from "react-hook-form";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import SchemaCreditCard from "./SchemaCreditCard";
import logo from "./../../../public/images/Logo (1).png";
import CustomBack from "./CustomBack";
import CustomHeader from "@/components/Authorization/CustomHeader";
import success from "./../../../public/images/Success_btn_card.svg";
import { useRouter } from "next/navigation";
import useFormPersist from "react-hook-form-persist";

const MainBlockPayments = () => {
  const [state, setState] = useState<boolean>(false);
  const [stateInput, setSatteInput] = useState<boolean>(false);
  const {
    watch,
    register,
    reset,
    setValue,
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

  const router = useRouter();
  function onSubmit(data: any, event: any) {
    event.preventDefault();
    const card = watch();
    if (
      card.cardholderName &&
      card.cvc &&
      card.expMonth &&
      card.expYear &&
      card.number &&
      stateInput
    ) {
      setState(true);
    }
    // Send data to backend 👇
    console.log(data);
    setTimeout(() => {
      router.back();
    }, 3000);
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

  useFormPersist(
    "form_credit",
    { watch, setValue },
    {
      storage: typeof window !== "undefined" ? window.localStorage : undefined,
    }
  );

  return (
    <div className="payment__block-inside">
      <SchemaCreditCard card={watch()} />
      <div className="payment__block-content-card">
        <Image src={logo} alt="image_logo" className="payment__image-logo" />
        <CustomBack image_arrow={"/images/chevron_back.png"} name={"Back"} />
        <div className="payment__register-card-user">
          <CustomHeader
            title="Add a payment method"
            description="Let’s get you all st up so you can access your personal account."
          />
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div className="payment__block-form-main-card">
              <div className="payment__block-form-user-data-card">
                <div className="payment__block-field-card-number">
                  <div className="payment__block-input-inside-with-images">
                    <label
                      className="payment__label-form-fill"
                      htmlFor="card-number"
                    >
                      Card Number
                    </label>
                    <input
                      className="payment__input-form-fill"
                      id="card-number"
                      onChange={(e) => {
                        cardNumberField.onChange(
                          formatCardNumber(e.target.value)
                        );
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
                    <label
                      className="payment__label-form-fill-uu"
                      htmlFor="card-cvc"
                    >
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
                    {errors.cvc && (
                      <p className="error">{errors.cvc.message}</p>
                    )}
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
                    {...register("cardholderName", {
                      required: "Can't be blank",
                    })}
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
              <input
                type="checkbox"
                onChange={() => setSatteInput(!stateInput)}
                checked={stateInput ? true : false}
                className="payment__agree-checked"
              />
              <p className="payment__description-content">
                Securely save my information for 1-click checkout
              </p>
            </div>
            <button type="submit" className="login__btn-submit">
              {state ? (
                <>
                  <Image
                    src={success}
                    alt="icon_success"
                    className="payment__image-success"
                  />
                  <p className="payment__description-variant-success">
                    Success
                  </p>
                </>
              ) : (
                <>Add Card</>
              )}
            </button>
          </form>
          <p className="payment__description-footer">
            By confirming your subscription, you allow The Outdoor Inn Crowd
            Limited to charge your card for this payment and future payments in
            accordance with their terms. You can always cancel your
            subscription.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainBlockPayments;
