import Image from "next/image";
import React from "react";
import CustomBack from "./../../PaymentMethod/CustomBack";
import CustomHeader from "@/components/Authorization/CustomHeader";
import SwiperImages from "@/components/Authorization/SwiperImages";
import logo_black from "./../../../../public/images/Logo_black.png";

const VerifyCodeMain = () => {
  return (
    <main className="main_cl-login">
      <div className="container">
        <div className="verify">
          <div className="verify__block-main">
            <div className="verify__block-content">
              <Image
                src={logo_black}
                alt="image_logo"
                className="verify__image-logo"
              />
              <CustomBack
                image_arrow={"/images/chevron_back.png"}
                name={"Back to Login"}
              />
              <div className="verify__block-header-info">
                <CustomHeader
                  title="Verify code"
                  description="An authentication code has been sent to your email."
                />
                <form action="">
                  <div className="verify__block-form-field">
                    <label htmlFor="" className="verify__label-form">
                      Enter Code
                    </label>
                    <input
                      placeholder="Code..."
                      type="password"
                      className="verify__input-value"
                      required
                    />
                  </div>
                  <p className="verify__description">
                    Didn’t receive a code?
                    <span className="verify__description-uu">Resend</span>
                  </p>
                  <button type="submit" className="verify__btn-submit">
                    Verify
                  </button>
                </form>
              </div>
            </div>
            <SwiperImages
              name_class={"verify__image-slider"}
              image_class={"verify__image-swipe"}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default VerifyCodeMain;
