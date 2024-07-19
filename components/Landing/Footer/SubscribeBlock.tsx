import Image from "next/image";
import React from "react";
import image_subscribe from "./../../../public/images/emojione-v1_open-mailbox-with-lowered-flag.png";
import FormFooter from "./FormFooter";

const SubscribeBlock = () => {
  return (
    <div className="footer__subscribe-main">
      <div className="footer__description-block">
        <h2 className="footer__header-subscribe">Subscribe Newsletter</h2>
        <div className="footer__description-name-block">
          <h3 className="footer__head-name">The Travel</h3>
          <p className="footer__descriprion-name">
            Get inspired! Receive travel discounts, tips and behind the scenes
            stories.
          </p>
        </div>
        <FormFooter />
      </div>
      <div className="footer__subscribe-block-image">
        <Image
          src={image_subscribe}
          alt="image_subscribe"
          className="footer__image-subscribe"
        />
      </div>
    </div>
  );
};

export default SubscribeBlock;
