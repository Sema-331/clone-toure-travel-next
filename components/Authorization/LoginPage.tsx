"use client";

import React from "react";
import logo from "./../../public/images/Logo_black.png";
import Image from "next/image";
import SwiperImages from "./SwiperImages";
import CustomHeader from "./CustomHeader";
import FormSignIn from "./FormSignIn";

const LoginPage = () => {
  return (
    <main className="main_cl-login">
      <div className="container">
        <div className="login__block-main">
          <div className="login__block">
            <div className="login__block-form-authorization">
              <Image src={logo} alt="logo_image" className="login__image" />
              <div className="login__form-authorization-inside">
                <CustomHeader
                  title={"Login"}
                  description={"Login to access your Golobe account"}
                />
                <FormSignIn />
              </div>
            </div>
            <SwiperImages
              name_class={"login__image-slider"}
              image_class={"login__image-slider"}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
