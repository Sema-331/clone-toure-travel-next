import { CustomBtn } from "@/interfaces/interface";
import Image from "next/image";
import React from "react";

const CustomBtn = ({ title, image, classN }: CustomBtn) => {
  return (
    <button className="search__btn-show-variants">
      {image ? (
        <Image
          className={`btn ${classN}`}
          src={image}
          alt="image_btn"
          height={16}
          width={16}
        />
      ) : null}
      <p>{title}</p>
    </button>
  );
};

export default CustomBtn;
