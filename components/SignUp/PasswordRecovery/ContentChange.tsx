import React from "react";
import facebook from "./.././../../public/images/Vector.png";
import google from "./.././../../public/images/flat-color-icons_google.png";
import apple from "./.././../../public/images/ant-design_apple-filled.png";
import Image from "next/image";
import CustomHeader from "@/components/Authorization/CustomHeader";
import BtnChange from "./BtnChange";

const ContentChange = () => {
  return (
    <div className="pass__block-header-info">
      <CustomHeader
        title="Forgot your password?"
        description="Don’t worry, happens to all of us. Enter your email below to recover your password."
      />
      <form action="">
        <div className="pass__block-form-field">
          <input type="text" className="pass__input-value" required />
          <label htmlFor="" className="pass__label-form">
            Email
          </label>
        </div>
        <>
          <BtnChange />
          <div className="login__block-options-login-with">
            <hr />
            <p className="login__login-with">Or login with</p>
          </div>
          <div className="login__block-options-log">
            <div className="login__block-facebook">
              <Image src={facebook} alt="image_options-login" />
            </div>
            <div className="login__block-google">
              <Image src={google} alt="image_options-login" />
            </div>
            <div className="login__block-apple">
              <Image src={apple} alt="image_options-login" />
            </div>
          </div>
        </>
      </form>
    </div>
  );
};

export default ContentChange;
