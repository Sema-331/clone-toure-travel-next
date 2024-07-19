import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputPropInt {
  id?: string;
  value?: any;
  dataId?: string;
  placeholder: string;
  type: string;
  className: string;
  register?: UseFormRegisterReturn<string>;
  onChange?: (e?: any) => void;
}

const InputField = ({
  value,
  dataId,
  placeholder,
  type,
  className,
  register,
  onChange,
  id,
}: InputPropInt) => {
  return (
    <input
      id={id}
      data-testid={dataId}
      value={value}
      placeholder={placeholder}
      type={type}
      className={className}
      {...register}
      onChange={onChange}
    />
  );
};

export default InputField;

// const randomRgbColor = () => {
//   const generateRandomColor = Math.round(Math.random() * 255);

//   const arrColor = [];

//   for (let i = 0; i < 3; i++) {
//     const num = generateRandomColor;
//     arrColor.push(num);
//   }

//   return `rgb(${arrColor[0]}, ${arrColor[1]}, ${arrColor[2]})`;
// };

// console.log(randomRgbColor)
