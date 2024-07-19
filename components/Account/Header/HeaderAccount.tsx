import Image from "next/image";
import Link from "next/link";
import React from "react";
import airplane from "./../../../public/images/airplane_black.png";
import logo from "./../../../public/images/Logo_black.png";
import hotel from "./../../../public/images/ion_bed_black.png";
import favourites_black from "./../../../public/images/Vector_heart-black.png";
import user_image from "./../../../public/images/user.svg";

const HeaderAccount = () => {
  return (
    <header>
      <div className="container">
        <div className="header-account">
          <nav className="header-account__nav">
            <div className="header-account__block-options">
              <div className="header-account__block-user">
                <Link className="header-account__link-user" href="">
                  <Image
                    className="header-account__image-user"
                    src={airplane}
                    alt="image_user"
                  />
                  <p className="header-account__descripion-user">Find Flight</p>
                </Link>
              </div>
              <div className="header-account__block-hotel">
                <Link className="header-account__hotel-link" href="">
                  <Image
                    src={hotel}
                    alt="image_hotel"
                    className="header-account__image-hotel"
                  />
                  <p className="header-account__descritpion-hotel">
                    Find Stays
                  </p>
                </Link>
              </div>
            </div>
            <div className="header-account__logo">
              <Link href="/">
                <Image
                  src={logo}
                  alt="main_logo"
                  className="header-account__main-logo"
                />
              </Link>
            </div>
            <div className="header-account__block-user">
              <div className="header-account__block-favourites-item">
                <Image
                  src={favourites_black}
                  alt="image_favourites"
                  className="header-account__image-favourites"
                />
                <p className="header-account__name-favourites">Favourites</p>
              </div>
              <div className="header-account__block-user-image">
                <Image
                  src={user_image}
                  alt="image_user"
                  className="header-account__image-user"
                />
                <p className="header-account__user-name">John. D</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderAccount;
