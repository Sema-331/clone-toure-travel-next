"use client";

import React, { useState } from "react";
import Image from "next/image";
import facebook from "./.././../../public/images/Vector.png";
import google from "./.././../../public/images/flat-color-icons_google.png";
import apple from "./.././../../public/images/ant-design_apple-filled.png";
import danger_icon from "./.././../../public/images/danger_icon.svg";
import BtnComponentPass from "./VerifyCode/BtnComponentPass";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ErrorComponent from "@/components/FormEvents/InputErrorComponent/ErrorComponent";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormEmail {
  email: string;
}

const schemaZod = z.object({
  email: z
    .string()
    .min(1, "Required field")
    .email()
    .regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "invalid email address"),
});

type TypeZod = z.infer<typeof schemaZod>;

const FormCompResetPass = () => {
  const {
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<TypeZod>({
    mode: "onBlur",
    resolver: zodResolver(schemaZod),
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="pass__block-form-field">
        <label htmlFor="email" className="pass__label-form">
          Email
        </label>
        <input
          placeholder="Type your email..."
          id="email"
          {...register("email")}
          type="text"
          className="pass__input-value"
        />
        <div>
          {errors?.email && (
            <ErrorComponent errors={errors?.email?.message} />
            // <div className="check__form-danger">
            //   <Image
            //     src={danger_icon}
            //     alt="icon_danger"
            //     className="check__form-image"
            //   />
            //   <p>{errors?.email?.message || "Error"}</p>
            // </div>
          )}
        </div>
      </div>
      <BtnComponentPass />
      <div className="login__block-options-login-with">
        <hr />
        <p className="login__login-with">Or login with</p>
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
    </form>
  );
};

export default FormCompResetPass;
