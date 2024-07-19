"use client";

import Image from "next/image";
import React, { useState } from "react";
import add_card from "./../../../public/images/Add_circle.png";
import ModalAddCard from "./ModalAddCard";

const AddCardComponent = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <div
        onClick={() => setState(true)}
        className="card-active__block-add-new-card"
      >
        <div className="card-active__block-add-inside">
          <Image
            src={add_card}
            alt="image_add_new_card"
            className="card-active__image-adds"
          />
          <p className="card-active__description-for-new-card">
            Add a new card
          </p>
        </div>
      </div>
      {state ? <ModalAddCard /> : null}
    </>
  );
};

export default AddCardComponent;
