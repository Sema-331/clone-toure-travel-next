import React, { useState } from "react";
import BtnComponentPass from "./VerifyCode/BtnComponentPass";

const ClientComponentChange = () => {
  return (
    <>
      <div className="pass__block-form-field">
        <input type="text" className="pass__input-value" required />
        <label htmlFor="" className="pass__label-form">
          Email
        </label>
      </div>
      <BtnComponentPass />
    </>
  );
};

export default ClientComponentChange;
