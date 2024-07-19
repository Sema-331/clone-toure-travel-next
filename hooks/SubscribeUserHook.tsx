"use client";

import { subscribeEmail } from "@/services/UpdateInfoUser";
import React, { useState } from "react";

const SubscribeUserHook = () => {
  const [stateModal, setStateModal] = useState<boolean>(false);
  const [stateModalError, setStateModalError] = useState<boolean>(false);
  const onSubmitHandler = async (data: { email: string }) => {
    const res = await subscribeEmail({ email: data.email });
    if (!res.ok) {
      console.log(stateModalError);
      setStateModalError(true);
      setStateModal(false);
      setTimeout(() => {
        setStateModalError(false);
      }, 5000);
    } else {
      console.log(data);
      setStateModal(true);
      setStateModalError(false);
      setTimeout(() => {
        setStateModal(false);
      }, 5000);
    }
  };

  return { onSubmitHandler, stateModal, stateModalError };
};

export default SubscribeUserHook;
