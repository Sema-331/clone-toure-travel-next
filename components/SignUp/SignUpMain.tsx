import React from "react";
import SwiperImages from "../Authorization/SwiperImages";
import logo from "./../../public/images/Logo_black.png";
import Image from "next/image";
import CustomHeader from "../Authorization/CustomHeader";
import FormSign from "./FormSign";

const SignUpMain = () => {
  console.log("signupmain");

  return (
    <main className="main_cl-login">
      <div className="container">
        <div className="sign">
          <div className="sign__block-inside">
            <SwiperImages
              name_class={"sign__image-slider"}
              image_class={"sign__image-slider"}
            />
            <div className="sign__block-content-description">
              <Image src={logo} alt="image_logo" className="sign__image-logo" />
              <div className="sign__register-user">
                <CustomHeader
                  title="Sign up"
                  description="Let’s get you all st up so you can access your personal account."
                />
                <FormSign />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpMain;
