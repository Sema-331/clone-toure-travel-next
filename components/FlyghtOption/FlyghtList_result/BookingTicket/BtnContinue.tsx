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
import { signIn } from "next-auth/react";
import { z } from "zod";
import InputField from "@/components/FormEvents/InputField/InputField";
import ErrorComponent from "@/components/FormEvents/InputErrorComponent/ErrorComponent";

interface FormInt {
  phoneNumber?: string;
}

interface ItemInt {
  item: {
    id: number;
    userId: string;
    star_hotel: string | null;
    check_in_date: Date;
    check_out_date: Date;
    room_number: number;
    price: string;
    name_hotel: string;
    rate: string;
    geo_hotel: string;
    freebies_options: string[];
    amenities_option: string[];
    variaty_hotel: string;
    idHotel: number;
  }[];
  itemId: {
    id: number;
    description_type_room: string;
    price_type_room_hotel: number;
    id_hotel_tpye_room: number;
  };
  userSecond: any;
  cardValue: {
    id: number;
    cardholderName: string;
    cvc: string;
    expMonth: string;
    expYear: string;
    card_number: string;
    country_of_region: string | null;
    idUser: string;
  }[];
  findUser: {
    password: string;
    createdAt: Date;
    updatedAt: Date;
    userName: string;
    id: string;
    email?: string | null;
    emailVerified: Date | null;
    image: string | null;
    name: string | null;
    backgroundImage: string | null;
    phoneNumber: string | null;
    adress: string | null;
    date_birth: string | null;
  } | null;
  news?: any;
}

const schemaZod = z.object({
  phoneNumber: z
    .string()
    .min(1, "Required field")
    .regex(
      /^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/,
      "invalid phone number"
    ),
});

type TypeZod = z.infer<typeof schemaZod>;

const BtnContinue = ({
  item,
  itemId,
  userSecond,
  cardValue,
  findUser,
  news,
}: FormInt & ItemInt) => {
  const [state, setState] = useState<boolean>(true);
  console.log(state);
  console.log("c");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<TypeZod>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormInt> = async (data) => {
    console.log(data);
  };

  const loggedIn = Cookie.get("loggedin");

  // console.log(itemId.id, itemId.idTableRoute)

  const loginGitHub = () => {
    signIn("github", {
      callbackUrl: `http://localhost:3000/FindFly/FlightList_result/${itemId.id}/${itemId.id}`,
    }); //??//
  };
  const loginWithGoogle = () => {
    signIn("google", {
      callbackUrl: `http://localhost:3000/FindFly/FlightList_result/${itemId.id}/${itemId.id}`,
    }); //??//
  };

  return (
    <>
      {!loggedIn ? (
        <div className="book__block-log-to-booking">
          <h2 className="book__log-header">Login or Sign up to book</h2>
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div className="book__block-input">
              <label htmlFor="" className="book__label-for-field">
                Phone Number
              </label>
              <InputField
                type="text"
                className="book__block-input-field"
                placeholder="Type your number..."
                register={register("phoneNumber")}
              />
              <div>
                {errors?.phoneNumber && (
                  <ErrorComponent errors={errors.phoneNumber.message} />
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
              <div onClick={loginWithGoogle} className="login__block-google">
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
              <p className="book__description-email-log">Continue with email</p>
            </button>
          </form>
        </div>
      ) : (
        <CardComponentBook
          news={news}
          findUser={findUser}
          cardValue={cardValue}
          userSecond={userSecond}
          itemId={itemId}
          item={item}
        />
      )}
    </>
  );
};

export default BtnContinue;
