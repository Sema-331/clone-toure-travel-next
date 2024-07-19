"use client";

import React, { useState } from "react";
import CardComponentBook from "./CardComponentBook";
import Image from "next/image";
import icon_email from "./../../../../public/images/ion_mail.png";
import danger_icon from "./../../../../public/images/danger_icon.svg";
import mini_logo from "./../../../../public/images/Frame 186__3.png";
import facebook from "./../../../../public/images/akar-icons_facebook-fill.png";
import google from "./../../../../public/images/flat-color-icons_google.png";
import apple from "./../../../../public/images/ant-design_apple-filled.png";
import { useAppSelector } from "@/helperRedux/helperRedux";
import { SubmitHandler, useForm } from "react-hook-form";
import Cookie from "js-cookie";

interface FormInt {
  phoneNumber: string;
}

const BtnContinuePlane = () => {
  const selector = useAppSelector((item) => item.redSlice.checkLoginUser);
  const [state, setState] = useState(true);
  console.log(state);

  const {
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<FormInt>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormInt> = async (data) => {
    console.log(data);
  };

  const loggedIn = Cookie.get("loggedin");

  return (
    <>
      {
        loggedIn ? (
          <div className="book__block-log-to-booking">
            <h2 className="book__log-header">Login or Sign up to book</h2>
            <form onSubmit={handleSubmit(onSubmit)} action="">
              <div className="book__block-input">
                <label htmlFor="" className="book__label-for-field">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="book__block-input-field"
                  placeholder="Type your number..."
                  {...register("phoneNumber", {
                    required: "Required field",
                    pattern: {
                      value: /^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/,
                      message: "invalid phone number",
                    },
                  })}
                />
                <div>
                  {errors?.phoneNumber && (
                    <div className="check__form-danger">
                      <Image
                        src={danger_icon}
                        alt="icon_danger"
                        className="check__form-image"
                      />
                      <p>{errors?.phoneNumber?.message || "Error"}</p>
                    </div>
                  )}
                </div>
              </div>
              <p className="book__description-field">
                We’ll call or text you to confirm your number. Standard message
                and data rates apply. Privacy Policy
              </p>
              <button type="submit" className="login__btn-submit">
                Continue
              </button>
              <div className="login__block-options-login-with">
                <hr />
                <p className="login__login-with">Or</p>
              </div>
              <div className="login__block-options-log">
                <div className="login__block-facebook">
                  <Image src={facebook} alt="image_options-login" />
                </div>
                <div className="login__block-google">
                  <Image src={google} alt="image_options-login" />
                </div>
                <div className="login__block-apple">
                  <Image src={apple} alt="image_options-login" />
                </div>
              </div>
              <button className="book__btn-log-email">
                <Image
                  src={icon_email}
                  alt="icon_email"
                  className="book__icon-email"
                />
                <p className="book__description-email-log">
                  Continue with email
                </p>
              </button>
            </form>
          </div>
        ) : null
        // <CardComponentBook findUser={findUser} cardValue={cardValue} userSecond={userSecond} itemId={itemId} item={item} />
      }
    </>
  );
};

export default BtnContinuePlane;
