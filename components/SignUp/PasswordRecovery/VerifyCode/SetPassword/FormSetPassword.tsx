"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import danger_icon from "./../../../../../public/images/danger_icon.svg";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorComponent from "@/components/FormEvents/InputErrorComponent/ErrorComponent";
import InputField from "@/components/FormEvents/InputField/InputField";

interface ResetPasswordConfirm {
  password: string;
  confirmPassword: string;
}

const schemaZod = z
  .object({
    password: z
      .string()
      .min(1, "Required field")
      .min(2, "Minimum 2 symbol")
      .regex(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/, ""),
    confirmPassword: z
      .string()
      .min(1, "Required field")
      .min(2, "Minimum 2 symbol")
      .regex(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/, ""),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Paaword must match",
    path: ["confirmPassword"],
  });

type TypeZod = z.infer<typeof schemaZod>;

const FormSetPassword = () => {
  const [stateFirst, setStateFirst] = useState<string>("");
  const [stateSecond, setStateSecond] = useState<string>("");

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<TypeZod>({
    mode: "onBlur",
    resolver: zodResolver(schemaZod),
  });

  const onSubmit = async (e: any, data: any) => {
    e.preventDefault();
    if (stateFirst !== stateSecond) {
      console.log("ERROR");
    }
    console.log(data);
  };

  const typeNewPassword = (e: React.FormEvent<HTMLInputElement>) => {
    setStateFirst(e.currentTarget.value);
    console.log(stateFirst);
  };

  const ConfirmPassword = (e: React.FormEvent<HTMLInputElement>) => {
    setStateSecond(e.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="">
      <div className="set-password__block-form-field">
        <label htmlFor="" className="set-password__label-form">
          Create Password
        </label>
        <InputField
          value={stateFirst}
          placeholder="New password..."
          type="password"
          className="set-password__input-value"
          register={register("password")}
          onChange={typeNewPassword}
        />
        {/* <input
          value={stateFirst}
          placeholder="New password..."
          type="password"
          className="set-password__input-value"
          {...register("password")}
          onChange={typeNewPassword}
        /> */}
        <div>
          {errors?.password && (
            <ErrorComponent errors={errors?.password?.message} />
            // <div className="check__form-danger">
            //   <Image
            //     src={danger_icon}
            //     alt="icon_danger"
            //     className="check__form-image"
            //   />
            //   <p>{errors?.password?.message || "Error"}</p>
            // </div>
          )}
        </div>
      </div>
      <div className="set-password__block-form-field">
        <label htmlFor="" className="set-password__label-form">
          Re-enter Password
        </label>
        <InputField
          value={stateSecond}
          placeholder="Confirm password"
          type="password"
          className="set-password__input-value"
          register={register("confirmPassword")}
          onChange={ConfirmPassword}
        />
        {/* <input
          value={stateSecond}
          placeholder="Confirm password"
          type="password"
          className="set-password__input-value"
          {...register("confirmPassword")}
          onChange={ConfirmPassword}
        /> */}
        <div>
          {errors?.confirmPassword && (
            <ErrorComponent errors={errors?.confirmPassword?.message} />
          )}
        </div>
      </div>
      <button type="submit" className="set-password__btn-submit">
        Set password
      </button>
    </form>
  );
};

export default FormSetPassword;

/**
 * {
            required: "Required field",
            pattern: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
            minLength: {
              value: 2,
              message: "Minimum 2 symbol",
            },
            validate: (value: string) => {
              if (watch("password") !== value) {
                return "Your passwords do no match";
              }
            },
          }
 */
