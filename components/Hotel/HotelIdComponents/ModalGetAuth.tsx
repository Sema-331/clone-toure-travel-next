import Image from "next/image";
import Link from "next/link";
import React from "react";
import close_icon from "./../../../public/images/close_icon.svg";
import PortalContainer from "@/components/PortalContainer/PortalContainer";

interface PropDate {
  setState: (v: boolean) => void;
}

const ModalGetAuth = ({ setState }: PropDate) => {
  return (
    <PortalContainer>
      <div className="comment__block-main-need-sign-in">
        <div className="comment__block-main-need-sign-in-inside">
          <button
            onClick={() => setState(false)}
            className="comment__btn-image-close"
          >
            <Image
              src={close_icon}
              alt="close_icon"
              className="comment__icon-close-modal"
            />
          </button>
          <h2 className="comment__header-need-sign">You are not logged in</h2>
          <div className="comment__block-need-sign-content">
            <div className="comment__block-description-content">
              <p className="comment__description-options-for-user">
                You need to log in or register
              </p>
              <p className="comment__mid-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur, quia.
              </p>
              <Link href="/Login" className="comment__btn-log-in-user">
                Log in
              </Link>
              <Link href="/SignUp" className="comment__btn-sign-in-for-user">
                Sign in
              </Link>
            </div>
            {/* <div className='comment__block-image-need-sign-in'>
                        <Image src={rectange_3} className='comment__image-need-sign-in' alt='image_need_sign' />
                    </div> */}
          </div>
        </div>
      </div>
    </PortalContainer>
  );
};

export default ModalGetAuth;
