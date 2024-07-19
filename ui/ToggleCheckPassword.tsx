"use client";

import Image from "next/image";
import React, { useState } from "react";
import eye_on from "./../public/images/eye_on.svg";
import eye_off from "./../public/images/eye_off.svg";

const ToggleCheckPassword = () => {
  const [stateEyeSecond, setStateEyeSecond] = useState<boolean>(false);

  return (
    <>
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
    </>
  );
};

export default ToggleCheckPassword;
