"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

interface IntBack {
  image_arrow: string;
  name: string;
}

const CustomBack = ({ image_arrow, name }: IntBack) => {
  const router = useRouter();

  return (
    <div onClick={() => router.back()} className="payment__block-go-back">
      <Image
        src={image_arrow}
        alt="icon_go_back"
        className="payment__icon-back"
        width={24}
        height={24}
      />
      <p className="payment__description-name">{name}</p>
    </div>
  );
};

export default CustomBack;
