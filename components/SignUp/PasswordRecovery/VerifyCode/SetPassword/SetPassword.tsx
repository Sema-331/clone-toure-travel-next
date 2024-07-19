import React from "react";
import "./../../../../../styles/Login/SetPassword.scss";
import Image from "next/image";
import logo_black from "./../../../../../public/images/Logo_black.png";
import CustomHeader from "@/components/Authorization/CustomHeader";
import SwiperImages from "@/components/Authorization/SwiperImages";
import FormSetPassword from "./FormSetPassword";

const SetPassword = () => {
  return (
    <main className="main_cl-login">
      <div className="container">
        <div className="set-password">
          <div className="set-password__block-main">
            <div className="set-password__block-content">
              <Image
                src={logo_black}
                alt="image_logo"
                className="set-password__image-logo"
              />
              <div className="set-password__block-content-header">
                <CustomHeader
                  title="Set a password"
                  description="Your previous password has been reseted. Please set a new password for your account."
                />
                <FormSetPassword />
              </div>
            </div>
            <SwiperImages
              name_class={"set-password__image-slider"}
              image_class={"set-password__image-swipe"}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SetPassword;
