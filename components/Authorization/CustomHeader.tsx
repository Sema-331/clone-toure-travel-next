import React from "react";

interface IntCustomHeader {
  title: string;
  description: string;
}

const CustomHeader = ({ title, description }: IntCustomHeader) => {
  return (
    <>
      <h2 className="login__name-header">{title}</h2>
      <p className="login__description-name">{description}</p>
    </>
  );
};

export default CustomHeader;
