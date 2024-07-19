import Image from "next/image";
import React from "react";
import danger_icon from "./../../../public/images/danger_icon.svg";

const ErrorComponent = ({ errors }: any) => {
  return (
    <div className="check__form-danger">
      <Image
        src={danger_icon}
        alt="icon_danger"
        className="check__form-image"
      />
      <p>{errors || "Error"}</p>
    </div>
  );
};

export default ErrorComponent;
