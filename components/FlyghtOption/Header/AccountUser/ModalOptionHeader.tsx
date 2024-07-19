"use client";

import Image from "next/image";
import React, { useState } from "react";
import user_logo from "./../../../../public/images/Ellipse 1.png";
import arrow_right from "./../../../../public/images/chevron_forward_right.png";
import arrow_left from "./../../../../public/images/chevron_levt.svg";
import user_icon from "./../../../../public/images/user_icon.png";
import card_icon from "./../../../../public/images/card.png";
import setting_icon from "./../../../../public/images/settings.png";
import user_image from "./../../../../public/images/user.svg";
import support_icon from "./../../../../public/images/Support.png";
import LogoutBtn from "./LogoutBtn";
import Link from "next/link";
import { Session as NextAuthSession } from "next-auth";

interface IntImage {
  userSession: any;
  session: NextAuthSession | null;
}

const ModalOptionHeader = ({ userSession, session }: IntImage) => {
  const [stateAccount, setStateAccount] = useState<boolean>(false);
  const [statepayments, setStatePayments] = useState<boolean>(false);
  const [stateSettings, setStateSettings] = useState<boolean>(false);
  const [stateSupport, setStateSupport] = useState<boolean>(false);

  return (
    <div className="header-fly__block-main-modal">
      <div className="header-fly__block-short-info">
        {typeof userSession?.image !== "string" ? (
          <div className="header-fly__block-image-changes">
            <Image
              src={user_image}
              alt="icon_user_profile"
              className="header-fly__modal-image-profile"
            />
          </div>
        ) : (
          <div className="header-fly__block-image-changes">
            <Image
              width={30}
              height={30}
              src={userSession?.image!}
              alt="icon_user_profile"
              className="header-fly__modal-image-profile"
            />
          </div>
        )}
        <div className="header-fly__block-description-short-info">
          <p className="header-fly__description-user-name">
            {userSession?.userName.slice(0, 1).toUpperCase() +
              userSession?.userName.slice(1).toLowerCase() +
              " " +
              userSession?.lastName.slice(0, 1).toUpperCase() +
              userSession?.lastName.slice(1).toLowerCase() +
              "."}
          </p>
          <p className="header-fly__description-online-query">Online</p>
        </div>
      </div>
      <div className="header-fly__block-params">
        <div
          onMouseEnter={() => setStateAccount(true)}
          onMouseLeave={() => setStateAccount(false)}
          className="header-fly__block-option-user"
        >
          <div className="header-fly__block-name-option">
            <Image
              src={user_icon}
              alt="icon_option"
              className="header-fly__image-option"
            />
            <p className="header-fly__description-option">My account</p>
          </div>
          {stateAccount ? (
            <Image
              src={arrow_left}
              alt="icon_arrow"
              className="header-fly__icon-arrow"
            />
          ) : (
            <Image
              src={arrow_right}
              alt="icon_arrow"
              className="header-fly__icon-arrow"
            />
          )}
          {stateAccount ? (
            <div className="header-fly__block-modal-insides-options">
              <div className="header-fly__block-list-box-options">
                <div className="header-fly__block-single-option">
                  <Link href="/Account">Account</Link>
                </div>
                <div className="header-fly__block-single-option">
                  <Link href="/Account/History">History</Link>
                </div>
                <div className="header-fly__block-single-option">
                  <Link href="/Account/Payment_method">Payment method</Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div
          onMouseOver={() => setStatePayments(true)}
          onMouseLeave={() => setStatePayments(false)}
          className="header-fly__block-option-user"
        >
          <div className="header-fly__block-name-option">
            <Image
              src={card_icon}
              alt="icon_option"
              className="header-fly__image-option"
            />
            <p className="header-fly__description-option">Payments</p>
          </div>
          {statepayments ? (
            <Image
              src={arrow_left}
              alt="icon_arrow"
              className="header-fly__icon-arrow"
            />
          ) : (
            <Image
              src={arrow_right}
              alt="icon_arrow"
              className="header-fly__icon-arrow"
            />
          )}
          {statepayments ? (
            <div className="header-fly__block-modal-insides-options">
              <div className="header-fly__block-single-option">
                <Link href="/Account/Payment_method">Add card</Link>
              </div>
            </div>
          ) : null}
        </div>
        <div
          onMouseOver={() => setStateSettings(true)}
          onMouseLeave={() => setStateSettings(false)}
          className="header-fly__block-option-user"
        >
          <div className="header-fly__block-name-option">
            <Image
              src={setting_icon}
              alt="icon_option"
              className="header-fly__image-option"
            />
            <p className="header-fly__description-option">Settings</p>
          </div>
          {stateSettings ? (
            <Image
              src={arrow_left}
              alt="icon_arrow"
              className="header-fly__icon-arrow"
            />
          ) : (
            <Image
              src={arrow_right}
              alt="icon_arrow"
              className="header-fly__icon-arrow"
            />
          )}
          {stateSettings ? (
            <div className="header-fly__block-modal-insides-options">
              <div className="header-fly__block-single-option">
                <Link href="/Account">change</Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="header-fly__block-logout">
        <div
          onMouseEnter={() => setStateSupport(true)}
          onMouseLeave={() => setStateSupport(false)}
          className="header-fly__block-support"
        >
          <div className="header-fly__block-support-inside">
            <Image
              src={support_icon}
              alt="icon_option"
              className="header-fly__icon-option"
            />
            <p className="header-fly__description-name-option">Support</p>
          </div>
          {stateSupport ? (
            <Image
              src={arrow_left}
              alt="icon_arrow"
              className="header-fly__icon-arrow"
            />
          ) : (
            <Image
              src={arrow_right}
              alt="icon_arrow"
              className="header-fly__icon-arrow"
            />
          )}
          {stateSupport ? (
            <div className="header-fly__block-modal-insides-options">
              <div className="header-fly__block-single-option">
                <Link
                  href="/Account"
                  className="header-fly__description-not-avaible"
                >
                  Not avaible
                </Link>
              </div>
            </div>
          ) : null}
        </div>
        <LogoutBtn />
      </div>
    </div>
  );
};

export default ModalOptionHeader;
