"use client";

import React, { useState } from "react";
import CustomFooter from "./CustomFooter";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/helperRedux/helperRedux";
import {
  handleClickSignInUser,
  handleToggleSpinnerLogin,
} from "@/slice/slices";
import danger_icon from "./../../public/images/danger_icon.svg";
import eye_on from "./../../public/images/eye_on.svg";
import eye_off from "./../../public/images/eye_off.svg";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../FormEvents/InputField/InputField";

interface FormInt {
  email: string;
  password: string;
}

const schemaZod = z.object({
  email: z.string().min(1, "Required field").email(),
  password: z
    .string()
    .min(1, "Required field")
    .min(2, "Minimum 2 symbols")
    .regex(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/, "Invalid password format"),
});

type TypeZod = z.infer<typeof schemaZod>;

const FormSignIn = () => {
  const [error, setError] = useState<boolean>(false);
  const { toggleValueLoginSpinner, checkLoginUser } = useAppSelector(
    (item) => item.redSlice
  );
  const [statePassword, setStatePassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<TypeZod>({
    mode: "onBlur",
    resolver: zodResolver(schemaZod),
  });
  console.log("render comp");
  const onSubmit: SubmitHandler<TypeZod> = async (data) => {
    const signData = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (!signData?.ok) {
      console.log(signData?.error);
      setError(true);
    } else {
      router.refresh();
      setError(false);
      router.replace("/FindFly");
      Cookies.set("loggedin", true);
      // dispatch(handleLogedin())
      dispatch(handleToggleSpinnerLogin());
      dispatch(handleClickSignInUser());
    }
    console.log(signData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="">
      {toggleValueLoginSpinner ? (
        <div className="block-for-loader">
          <span className="loader"></span>
        </div>
      ) : null}
      <div className="login__form-block-field">
        <label className="login__label" htmlFor="email">
          Email
        </label>
        <InputField
          placeholder="Email"
          id="email"
          className="login__input"
          type="email"
          register={register("email")}
        />
        {/* <input
          placeholder="Email"
          id="email"
          className="login__input"
          type="email"
          {...register("email")}
          required
        /> */}
        <div>
          {errors?.email && (
            <div className="check__form-danger">
              <Image
                src={danger_icon}
                alt="icon_danger"
                className="check__form-image"
              />
              <p>{errors?.email?.message || "Error"}</p>
            </div>
          )}
        </div>
      </div>
      <div className="login__form-block-field">
        <label className="login__label" htmlFor="">
          Password
        </label>
        {statePassword ? (
          <Image
            className="login__image-toggle-eye"
            onClick={() => setStatePassword(false)}
            src={eye_on}
            alt="icon_eye"
          />
        ) : (
          <Image
            className="login__image-toggle-eye"
            onClick={() => setStatePassword(true)}
            src={eye_off}
            alt="icon_eye"
          />
        )}
        {/* <input
          placeholder="Type your password..."
          {...register("password")}
          className="login__input"
          type={statePassword ? "text" : "password"}
          required
        /> */}
        <InputField
          placeholder="Type your password..."
          register={register("password")}
          className="login__input"
          type={statePassword ? "text" : "password"}
        />
        <div>
          {errors?.password && (
            <div className="check__form-danger">
              <Image
                src={danger_icon}
                alt="icon_danger"
                className="check__form-image"
              />
              <p>{errors?.password?.message || "Error"}</p>
            </div>
          )}
        </div>
      </div>
      {error ? (
        <div className="login__error-block">
          <p className="login__description-error">
            Email or password is incorrect
          </p>
        </div>
      ) : null}
      <div className="login__check-block">
        <div className="login__check-block-input">
          <input className="login__checkbox-field" type="checkbox" />
          <span className="login__remember">Remember me</span>
        </div>
        <Link href="/Login/PasswordRecovery" className="login__forgot">
          Forgot Password?
        </Link>
      </div>
      {/* <button type='submit'>Sign in</button> */}
      <CustomFooter
        btn_content={"Login"}
        login_with={"Or login with"}
        intructions_create_account={"Don’t have an account?"}
        sign={"Sign up"}
        block_options={true}
      />
    </form>
  );
};

export default FormSignIn;
