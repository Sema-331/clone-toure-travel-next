"use client";

import Image from "next/image";
import React, { useState } from "react";
import star_icon from "./../../public/images/star_unfill.svg";
import star_icon_grey from "./../../public/images/star_fill_grey.svg";
import { useRouter } from "next/navigation";
import photo from "./../../public/images/photoSelect.svg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { User } from "@/interfaces/interface";

interface FormInt {
  userSecond: {
    id: number;
    idUser: string;
    header_txt: string;
    description_txt: string;
    image_review: string | null;
    mark: string;
  };
}

type PropType = Pick<User, "id">;

interface PropInt {
  userSecond: PropType | null;
}

const ReviewsFormComponent = ({ userSecond }: PropInt) => {
  const [rate, setRate] = useState<number>();
  const [rateColor, setRateColor] = useState(null);
  const [stateHeader, setStateHeader] = useState<string>("");
  const [stateDescription, setStateDescription] = useState<string>("");

  const handleSubmit = async () => {
    const res = await fetch("/api/AddReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        header_txt: stateHeader,
        mark: rate?.toString(),
        description_txt: stateDescription,
        idUser: userSecond!.id,
      }),
    });
    if (res.ok) {
      // router.refresh()
      console.log("Все хорошо");
    }
    console.log("Все плохо");
  };

  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: handleSubmit,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["reviews_main"] });
    },
  });

  const handleSubmitReview = (e: any) => {
    e.preventDefault();
    mutation.mutate();
  };

  console.log(rate);
  console.log(stateHeader);
  console.log(stateDescription);

  return (
    <form
      onSubmit={handleSubmitReview}
      className="reviews__form-block"
      action=""
    >
      <label className="reviews__label-form" htmlFor="">
        Rate
      </label>
      <div className="reviews__block-rate-hotel">
        {[...Array(5)].map((_, i) => {
          const current = i + 1;
          return (
            <>
              <button
                className="reviews__btn-rate-change"
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
                  className="reviews__modal-rate-star"
                />
              </button>
            </>
          );
        })}
      </div>
      <div className="reviews__block-field-form">
        <label className="reviews__label-form" htmlFor="">
          Header
        </label>
        <input
          onChange={(e) => setStateHeader(e.target.value)}
          type="text"
          value={stateHeader}
          className="reviews__input-field"
        />
      </div>
      <div className="reviews__block-field-form-side">
        <label className="reviews__label-form" htmlFor="">
          Description
        </label>
        <textarea
          onChange={(e) => setStateDescription(e.target.value)}
          className="reviews__input-field"
          value={stateDescription}
          name=""
          id=""
          cols={30}
          rows={10}
        ></textarea>
      </div>
      <div className="reviews__block-select-image">
        <p className="reviews__description-name">
          Select image <span> (don`t required)</span>
        </p>
        <button className="reviews__btn-choose-photo">
          <Image
            src={photo}
            alt="select photo"
            className="reviews__select-image"
          />
        </button>
      </div>
      <button type="submit" className="reviews__btn-submit-form">
        Submit
      </button>
    </form>
  );
};

export default ReviewsFormComponent;
