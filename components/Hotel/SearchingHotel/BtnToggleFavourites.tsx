"use client";

import React, { useState } from "react";
import image_favourites from "./../../../public/images/Fill=False_favourites.png";
import image_favourites_fill from "./../../../public/images/favourites_icon_fill.png";
import Image from "next/image";

const BtnToggleFavourites = () => {
  const [state, setState] = useState<boolean>(false);

  return (
    <button onClick={() => setState(!state)} className="hotel__favourites-btn">
      {state ? (
        <Image src={image_favourites_fill} alt="image_favourites" />
      ) : (
        <Image src={image_favourites} alt="image_favourites" />
      )}
    </button>
  );
};

export default BtnToggleFavourites;
