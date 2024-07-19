import React from "react";

const ValidationForms = ({
  id,
  placeholder,
  register,
  validation,
  type,
  className,
}: any) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      {...register(id, validation)}
      className={className}
      type={type}
    />
  );
};

export default ValidationForms;
