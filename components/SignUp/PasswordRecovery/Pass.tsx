import Image from "next/image";
import React from "react";
import CustomBack from "../PaymentMethod/CustomBack";
import logo from "./../../../public/images/Logo_black.png";
import CustomHeader from "@/components/Authorization/CustomHeader";
import SwiperImages from "@/components/Authorization/SwiperImages";
import FormCompResetPass from "./FormCompResetPass";

const Pass = () => {
  return (
    <main className="main_cl-login">
      <div className="container">
        <div className="pass">
          <div className="pass__block-main">
            <div className="pass__block-content">
              <Image src={logo} alt="image_logo" className="pass__image-logo" />
              <CustomBack
                image_arrow={"/images/chevron_back.png"}
                name={"Back to Login"}
              />
              <div className="pass__block-header-info">
                <CustomHeader
                  title="Forgot your password?"
                  description="Don’t worry, happens to all of us. Enter your email below to recover your password."
                />
                <FormCompResetPass />
              </div>
            </div>
            <SwiperImages
              name_class={"pass__image-slider"}
              image_class={"pass__image-swipe"}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pass;
