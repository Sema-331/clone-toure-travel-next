"use client";

import React, { ReactHTMLElement, useEffect, useRef, useState } from "react";
import image_favourites from "./../../../public/images/Fill=False_favourites.png";
import image_favourites_fill from "./../../../public/images/favourites_icon_fill.png";
import logo_ticket from "./../../../public/images/image 40.png";
import close_icon from "./../../../public/images/close_icon.svg";
import Image from "next/image";
import Link from "next/link";
import { ToggleModalClose } from "@/services/ToggleModalClose";

const ComponentModalAuth = () => {
  // const ref = useRef<HTMLDivElement>(null)
  // const [stateModal, setStateModal] = useState<boolean>(false)

  // const handleToggleModal = (e: any) => {
  //     if(ref.current && ref.current.contains(e.target as HTMLDivElement)) {
  //         setStateModal(true)
  //     } else if (ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
  //         setStateModal(false)
  //     }
  // }

  // useEffect(() => {
  //     document.addEventListener('click', handleToggleModal)
  //     return () => {
  //         document.removeEventListener('click', handleToggleModal)
  //     }
  // }, ['fly-res__block-modal-uu'])

  const { state, ref, setState } = ToggleModalClose("fly-res__block-modal-uu");
  console.log(state);

  return (
    <div className="fly-res__block-modal-uu" ref={ref}>
      <button
        onClick={() => setState(true)}
        className="fly-res__favourites-btn"
      >
        <Image src={image_favourites} alt="image_favourites" />
      </button>
      {state ? (
        <div className="fly-res__block-modal-need-auth">
          <button onClick={() => setState(false)}>
            <Image
              src={close_icon}
              alt="close_icon"
              className="fly-res__close-icon-modal"
            />
          </button>
          <h2 className="fly-res__header-fav-list">Favorites list</h2>
          <div className="fly-res__instructions-for-add-fav">
            <p className="fly-res__description-go-to-login">
              <span>Log in</span> to add to favorites
            </p>
            <p className="fly-res__description-go-to-register">
              Is this your first time here? <span>Register!</span>
            </p>
          </div>
          <div className="fly-res__block-btn-for-auth">
            {/* <button className='fly-res__btn-login'> */}
            <Link href="/Login" className="fly-res__btn-login">
              Log in
            </Link>
            {/* </button> */}
            {/* <button className='fly-res__btn-register'> */}
            <Link href="/SignUp" className="fly-res__btn-register">
              Registration
            </Link>
            {/* </button> */}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ComponentModalAuth;
