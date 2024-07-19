"use client";

import React from "react";
import Cookies from "js-cookie";
import arrow_right from "./../../../../public/images/chevron_forward_right.png";
import logout_icon from "./../../../../public/images/Logout.png";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useAppDispatch } from "@/helperRedux/helperRedux";
import { handleClickSignOutUser } from "@/slice/slices";
import { Cookie } from "next/font/google";
import { Logout } from "@/services/Logout";

const LogoutBtn = () => {
  const { handleCLickLogout } = Logout();

  return (
    <div
      onClick={handleCLickLogout}
      className="header-fly__block-support-logout"
    >
      <div className="header-fly__block-support-inside">
        <Image
          src={logout_icon}
          alt="icon_option"
          className="header-fly__icon-option"
        />
        <p className="header-fly__description-name-option">Logout</p>
      </div>
    </div>
  );
};

export default LogoutBtn;
