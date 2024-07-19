"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomFooter from "../Authorization/CustomFooter";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/helperRedux/helperRedux";
import { handleCLickToggleCheckbox } from "@/slice/slices";
import Image from "next/image";
import danger_icon from "./../../public/images/danger_icon.svg";
import eye_on from "./../../public/images/eye_on.svg";
import eye_off from "./../../public/images/eye_off.svg";
import ErrorComponent from "../FormEvents/InputErrorComponent/ErrorComponent";
import ValidationForms from "../FormEvents/ValidationForms";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../FormEvents/InputField/InputField";

interface FormInt {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const schemaZod = z
  .object({
    firstName: z
      .string()
      .min(1, "Required field")
      .min(2, "Minimum 2 symbol")
      .regex(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/),
    lastName: z
      .string()
      .min(1, "Required field")
      .min(2, "Minimum 2 symbol")
      .regex(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/),
    email: z
      .string()
      .min(1, "Required field")
      .regex(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email adress"
      ),
    phoneNumber: z
      .string()
      .min(1, "Required field")
      .regex(
        /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
        "Invalid phone number"
      ),
    password: z
      .string()
      .min(1, "Required field")
      .min(2, "Minimum 2 symbol")
      .regex(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/, ""),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type TypeZod = z.infer<typeof schemaZod>;

const FormSign = () => {
  const [stateUserNameError, setStateUserNameError] = useState<boolean>(false);
  const [stateEmailError, setStateEmailError] = useState<boolean>(false);
  const [stateEye, setStateEye] = useState<boolean>(false);
  const [stateEyeSecond, setStateEyeSecond] = useState<boolean>(false);
  const selector = useAppSelector((item) => item.redSlice.list);
  const dispatch = useAppDispatch();
  const [stateSpinner, setStateSpinner] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TypeZod>({
    mode: "onBlur",
    resolver: zodResolver(schemaZod),
  });

  const onSubmit: SubmitHandler<FormInt> = async (data) => {
    console.log("signup");
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        email: data.email,
        password: data.password,
      }),
    });
    if (response.status === 409) {
      setStateEmailError(true);
    }
    if (response.status === 410) {
      setStateUserNameError(true);
    }
    if (
      response.ok &&
      selector === true &&
      data.password === data.confirmPassword
    ) {
      //Checked!
      setStateSpinner(true);
      router.push("/Login");
    } else {
      console.error("failed");
    }
    console.log(data);
  };
  console.log(selector);
  console.log("form");
  return (
    <form onSubmit={handleSubmit(onSubmit)} action="">
      {stateSpinner ? (
        <div className="block-for-loader">
          <span className="loader"></span>
        </div>
      ) : null}
      <div className="sign__block-form-main">
        <div className="sign__block-form-user-data">
          <div className="sign__block-field-data">
            <label className="sign__label-form-fill" htmlFor="first-name">
              First Name
            </label>
            {/* <ValidationForms
              id="first-name"
              placeholder="John"
              {...register("firstName", {
                required: "Required field",
                pattern: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
                minLength: {
                  value: 2,
                  message: "Minimum 2 symbol",
                },
              })}
              className="sign__input-form-fill"
              type="text"
            /> */}
            <InputField
              id="first-name"
              placeholder="John"
              register={register("firstName")}
              className="sign__input-form-fill"
              type="text"
            />
            {/* <input
              id="first-name"
              placeholder="John"
              {...register("firstName", {
                required: "Required field",
                pattern: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
                minLength: {
                  value: 2,
                  message: "Minimum 2 symbol",
                },
              })}
              className="sign__input-form-fill"
              type="text"
            /> */}
            <div>
              {errors?.firstName && (
                <ErrorComponent errors={errors?.firstName?.message} />
                // <div className="check__form-danger">
                //   <Image
                //     src={danger_icon}
                //     alt="icon_danger"
                //     className="check__form-image"
                //   />
                //   <p>{errors?.firstName?.message || "Error"}</p>
                // </div>
              )}
            </div>
          </div>
          <div className="sign__block-field-data">
            <label className="sign__label-form-fill" htmlFor="last-name">
              Last Name
            </label>
            <InputField
              id="last-name"
              placeholder="Mackflayer"
              register={register("lastName")}
              className="sign__input-form-fill"
              type="text"
            />
            {/* <input
              id="last-name"
              placeholder="Mackflayer"
              {...register("lastName", {
                required: "Required field",
                pattern: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
                minLength: {
                  value: 2,
                  message: "Minimum 2 symbol",
                },
              })}
              className="sign__input-form-fill"
              type="text"
            /> */}
            <div>
              {errors?.lastName && (
                <ErrorComponent errors={errors?.lastName?.message} />
              )}
            </div>
          </div>
          <div className="sign__block-field-data">
            <label className="sign__label-form-fill" htmlFor="email">
              Email
            </label>
            <InputField
              id="email"
              placeholder="svelesik@inbox.ru"
              register={register("email")}
              className="sign__input-form-fill"
              type="email"
            />
            {/* <input
              id="email"
              placeholder="svelesik@inbox.ru"
              {...register("email", {
                required: "Required field",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              className="sign__input-form-fill"
              type="email"
              {...register("email")}
            /> */}
            <div>
              {errors?.email && (
                <ErrorComponent errors={errors?.email?.message} />
              )}
            </div>
          </div>
          <div className="sign__block-field-data">
            <label className="sign__label-form-fill" htmlFor="phoneNumber">
              Phone Number
            </label>
            <InputField
              id="phoneNumber"
              placeholder="+7 927 308 23 56"
              register={register("phoneNumber")}
              className="sign__input-form-fill"
              type="phone"
            />
            {/* <input
              id="phoneNumber"
              placeholder="+7 927 308 23 56"
              {...register("phoneNumber", {
                required: "Required field",
                pattern: {
                  value:
                    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                  message: "invalid phone number",
                },
              })}
              className="sign__input-form-fill"
              type="phone"
            /> */}
            <div>
              {errors?.phoneNumber && (
                <ErrorComponent errors={errors?.phoneNumber?.message} />
              )}
            </div>
          </div>
        </div>
        <div className="sign__block-user-password">
          <div className="sign__block-user-password-fill">
            {stateEye ? (
              <Image
                className="sign__eye-image-toggle"
                onClick={() => setStateEye(false)}
                src={eye_on}
                alt="eye_icon"
              />
            ) : (
              <Image
                className="sign__eye-image-toggle"
                onClick={() => setStateEye(true)}
                src={eye_off}
                alt="eye_icon"
              />
            )}
            <label className="sign__label-for-password" htmlFor="password">
              Password
            </label>
            <InputField
              id="password"
              placeholder="Enter the password"
              register={register("password")}
              className="sign__input-form-fill-password"
              type={stateEye ? "text" : "password"}
            />
            {/* <input
              id="password"
              placeholder="Enter the password"
              {...register("password", {
                required: "Required field",
                pattern: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
                minLength: {
                  value: 2,
                  message: "Minimum 2 symbol",
                },
              })}
              className="sign__input-form-fill-password"
              type={stateEye ? "text" : "password"}
            /> */}
            <div>
              {errors?.password && (
                <ErrorComponent errors={errors?.password?.message} />
              )}
            </div>
          </div>
          <div className="sign__block-user-password-fill">
            {stateEyeSecond ? (
              <Image
                className="sign__eye-image-toggle"
                onClick={() => setStateEyeSecond(false)}
                src={eye_on}
                alt="eye_icon"
              />
            ) : (
              <Image
                className="sign__eye-image-toggle"
                onClick={() => setStateEyeSecond(true)}
                src={eye_off}
                alt="eye_icon"
              />
            )}
            <label
              className="sign__label-for-password"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <InputField
              id="confirmPassword"
              placeholder="Confirm your password"
              className="sign__input-form-fill-password"
              type={stateEyeSecond ? "tetx" : "password"}
              register={register("confirmPassword")}
            />
            {/* <input
              id="confirmPassword"
              placeholder="Confirm your password"
              className="sign__input-form-fill-password"
              type={stateEyeSecond ? "tetx" : "password"}
              {...register("confirmPassword")}
            /> */}
            <div>
              {errors?.confirmPassword && (
                <ErrorComponent errors={errors?.confirmPassword.message} />
              )}
            </div>
          </div>
        </div>
      </div>
      {stateEmailError ? (
        <div className="sign__block-error-email">
          <p className="sign__description-error-email">
            User with this email already exists
          </p>
        </div>
      ) : null}
      {stateUserNameError ? (
        <div className="sign__block-error-userName">
          <p className="sign__description-error-userName">
            User with this username already exists
          </p>
        </div>
      ) : null}
      <div className="sign__block-checked">
        <div className="sign__block-agree-add-card-payment">
          <p className="sign__add-card-description">
            Do you want to add a card?
          </p>
          <Link
            className="sign__link-add-card"
            href="/SignUp/AddPayment_method"
          >
            Add card
          </Link>
        </div>
        <div className="sign__block-agree">
          <input
            type="checkbox"
            defaultChecked={selector}
            onChange={() => dispatch(handleCLickToggleCheckbox())}
            className="sign__agree-checked"
          />
          <p className="sign__description-content">
            I agree to all the <span className="sign__term">Terms</span> and{" "}
            <span className="sign__privacy">Privacy Policies</span>
          </p>
        </div>
      </div>
      <CustomFooter
        checked={true}
        btn_content={"Create account"}
        login_with={"Or Sign up with"}
        intructions_create_account={"Already have an account?"}
        sign={"Login"}
        block_options={true}
      />
    </form>
  );
};

export default FormSign;
