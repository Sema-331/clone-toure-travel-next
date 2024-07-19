"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorComponent from "@/components/FormEvents/InputErrorComponent/ErrorComponent";
import ResultsSubscribes from "./ResultsSubscribes";
import { z } from "zod";
import InputField from "@/components/FormEvents/InputField/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribeEmail } from "@/services/UpdateInfoUser";
import SubscribeUserHook from "@/hooks/SubscribeUserHook";

// interface FormInt {
//   email: string;
// }

const schemaZod = z.object({
  email: z
    .string()
    .min(1, "Required field")
    .regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email adress"),
});

type TypeZod = z.infer<typeof schemaZod>;

const FormFooter = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TypeZod>({
    mode: "onBlur",
    resolver: zodResolver(schemaZod),
  });

  const { onSubmitHandler, stateModal, stateModalError } = SubscribeUserHook();

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="footer__block-input"
    >
      <div className="footer__block-checking">
        <InputField
          data-testid="input"
          className="footer__input-mail"
          placeholder="Your email adress"
          type="text"
          register={register("email")}
        />
        <div>
          {errors?.email && <ErrorComponent errors={errors?.email?.message} />}
        </div>
      </div>
      <div className="footer__block-pup-up-uu">
        <button data-testid="btn-footer" className="footer__submit">
          Subscribe
        </button>
        <ResultsSubscribes
          stateModalError={stateModalError}
          stateModal={stateModal}
        />
      </div>
    </form>
  );
};

export default FormFooter;
