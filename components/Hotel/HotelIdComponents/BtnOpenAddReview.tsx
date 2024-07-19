"use client";

import { useAppDispatch, useAppSelector } from "@/helperRedux/helperRedux";
import { signIn } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import back_arrow from "./../../../public/images/chevron_forward_left.png";
import Image from "next/image";
import star_icon from "./../../../public/images/star_unfill.svg";
import star_icon_grey from "./../../../public/images/star_fill_grey.svg";
import close_icon from "./../../../public/images/close_icon.svg";
import danger_icon from "./../../../public/images/danger_icon.svg";
import rectange_3 from "./../../../public/images/Rectangle 3 (3).png";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookie from "js-cookie";
import dynamic from "next/dynamic";
import { ToggleModalClose } from "@/services/ToggleModalClose";
import { createPortal } from "react-dom";
import PortalContainer from "@/components/PortalContainer/PortalContainer";
import InputField from "@/components/FormEvents/InputField/InputField";
import { z } from "zod";
import ErrorComponent from "@/components/FormEvents/InputErrorComponent/ErrorComponent";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormInt {
  header: string;
  description: string;
  userName: string;
  mark: string;
}

interface NewInt {
  item: any;
  user3: any;
}

const schemaZod = z.object({
  header: z.string().min(1, "Required field").min(2, "Minimum 2 symbol"),
  description: z.string().min(1, "Required field").min(2, "Minimum 2 symbol"),
  userName: z
    .string()
    .min(1, "Required field")
    .min(2, "Minimum 2 symbol")
    .regex(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/, "Error userName"),
  mark: z.string(),
});

type SchemaType = z.infer<typeof schemaZod>;

const BtnOpenAddReview = ({ item, user3 }: NewInt) => {
  const ComponentModalAuth = dynamic(() => import("./ModalGetAuth"));

  const pathName = usePathname();
  const [stateModalReview, setStateModalReview] = useState<boolean>(true);
  const [rate, setRate] = useState<number>();
  const [rateColor, setRateColor] = useState(null);

  const { state, ref, setState } = ToggleModalClose("comment__main-block-uus");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SchemaType>({
    mode: "onBlur",
    resolver: zodResolver(schemaZod),
  });

  const onSubmit: SubmitHandler<SchemaType> = async (data) => {
    const a = {
      data,
      rate,
    };
    console.log(a);
    const response = await fetch("/api/AddSingleReviewItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: Number(rate),
        description_review: a.data.description,
        userId: user3.id,
        hotelId: item.id,
      }),
    });

    if (response.ok) {
      //Checked!
      // router.push('/Login')
      reset();
      // setState(false);
      notify();
      console.log("Все успешно!");
    } else {
      console.error("failed");
    }
    console.log(a);
  };

  const onSubmitFly: SubmitHandler<SchemaType> = async (data) => {
    const a = {
      data,
      rate,
    };
    console.log(a);
    const response = await fetch("/api/AddSingleCommentRoute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: Number(rate),
        description_review: a.data.description,
        userId: user3.id,
        fly_route_id: item.id,
      }),
    });

    if (response.ok) {
      //Checked!
      // router.push('/Login')
      reset();
      setState(false);
      notify();
      console.log("Все успешно!");
    } else {
      console.error("failed");
    }
    console.log(a);
  };

  const notify = () => toast.success("Success !");

  console.log(rate);

  const loggedIn = Cookie.get("loggedin");
  console.log(loggedIn);

  return (
    <div ref={ref} className="comment__main-block-uus">
      {item.id},{user3.id}
      <ToastContainer />
      <button
        type="button"
        onClick={() => setState(!state)}
        className="comment__btn-add-your-review"
      >
        Give your review
      </button>
      {state ? (
        <>
          {loggedIn ? (
            // <PortalContainer>
            <div className="comment__block-modal-add-review">
              <button
                onClick={() => setState(false)}
                className="comment__btn-close-modal"
              >
                <Image
                  src={close_icon}
                  alt="icon_close_form"
                  className="comment__close-modal-icon"
                />
              </button>
              <div className="comment__block-headers">
                <h2 className="comment__header-block">Write of review</h2>
                <p className="comment__description-step-count">
                  Step {stateModalReview ? 1 : 2} of 2
                </p>
              </div>
              <div className="comment__block-form-modal">
                <form
                  onSubmit={
                    pathName.includes("/FindFly/FlightList_result/")
                      ? handleSubmit(onSubmitFly)
                      : handleSubmit(onSubmit)
                  }
                  action=""
                >
                  {stateModalReview ? (
                    <div className="comment__block-main-first-page-info">
                      <div className="comment__block-rate-hotel">
                        {[...Array(5)].map((_, i) => {
                          const current = i + 1;
                          return (
                            <>
                              <button
                                className="comment__btn-rate-change"
                                type="button"
                                onClick={() => setRate(current)}
                                key={i}
                              >
                                <Image
                                  src={
                                    current <= (rateColor ?? rate ?? 0)
                                      ? star_icon
                                      : star_icon_grey
                                  }
                                  alt="star_icon"
                                  className="comment__modal-rate-star"
                                />
                              </button>
                            </>
                          );
                        })}
                      </div>
                      <div className="comment__label-header-txt">
                        <label className="comment__label-txt" htmlFor="">
                          Header
                        </label>
                        <InputField
                          placeholder="Type your header..."
                          className="comment__input-fill"
                          type="text"
                          register={register("header")}
                        />
                        {/* <input
                          placeholder="Type your header..."
                          className="comment__input-fill"
                          type="text"
                          {...register("header", {
                            required: "Required field",
                            minLength: {
                              value: 2,
                              message: "Minimum 2 symbol",
                            },
                          })}
                        /> */}
                        <div>
                          {errors?.header && (
                            <ErrorComponent errors={errors?.header.message} />
                          )}
                        </div>
                      </div>
                      {/* <InputField 
                      register={register('mark')}
                        placeholder="Type your header..."
                        className="comment__input-fill"
                        type="number"/>
                      {/* <input
                        placeholder="Type your header..."
                        className="comment__input-fill"
                        type="number"
                        {...register("mark", {
                          required: "Required field",
                          minLength: {
                            value: 2,
                            message: "Minimum 2 symbol",
                          },
                        })}
                      /> */}
                      <div className="comment__block-description-txt">
                        <label className="comment__label-txt" htmlFor="">
                          Description
                        </label>
                        <textarea
                          placeholder="Type your description..."
                          className="comment__input-fill"
                          id=""
                          maxLength={1000}
                          {...register("description", {
                            required: "Required field",
                            minLength: {
                              value: 2,
                              message: "Minimum 2 symbol",
                            },
                          })}
                        />
                        <div>
                          {errors?.description && (
                            <ErrorComponent
                              errors={errors?.description.message}
                            />
                          )}
                        </div>
                      </div>
                      <div className="comment__block-userName-txt">
                        <label className="comment__label-txt" htmlFor="">
                          User
                        </label>
                        <InputField
                          placeholder="Type your name..."
                          className="comment__input-fill"
                          type="text"
                          register={register("userName")}
                        />
                        {/* <input
                          placeholder="Type your name..."
                          className="comment__input-fill"
                          type="text"
                          {...register("userName", {
                            required: "Required field",
                            pattern: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
                            minLength: {
                              value: 2,
                              message: "Minimum 2 symbol",
                            },
                          })}
                        /> */}
                        <div>
                          {errors?.userName && (
                            <ErrorComponent errors={errors?.userName.message} />
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="comment__block-need-sign-in">
                      <h2 className="comment__header-sign-in-block">
                        Do you want to upload a photo?
                      </h2>
                    </div>
                  )}
                  <div className="comment__block-btn-options-uu">
                    <button className="comment__btn-submit-modal" type="submit">
                      Submit
                    </button>
                    {stateModalReview ? (
                      <button
                        type="button"
                        className="comment__btn-more-option"
                        onClick={() => setStateModalReview(false)}
                      >
                        More Options
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setStateModalReview(true)}
                        className="comment__btn-more-options-inside"
                      >
                        <Image
                          className="comment__image-arrow-left"
                          src={back_arrow}
                          alt="icon_back"
                        />
                        Back
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          ) : (
            // </PortalContainer>
            <ComponentModalAuth setState={setState} />
          )}
        </>
      ) : null}
    </div>
  );
};

export default BtnOpenAddReview;
