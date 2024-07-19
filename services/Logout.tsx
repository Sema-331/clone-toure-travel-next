"use client";

import { useAppDispatch } from "@/helperRedux/helperRedux";
import { handleClickSignOutUser } from "@/slice/slices";
import { signOut } from "next-auth/react";
import React from "react";
import Cookies from "js-cookie";

export const Logout = () => {
  const dispatch = useAppDispatch();

  const handleCLickLogout = () => {
    dispatch(handleClickSignOutUser());
    signOut({
      redirect: true,
      callbackUrl: `${window.location.origin}/Login`,
    });
    Cookies.remove("loggedin");
  };

  return { handleCLickLogout };
};
