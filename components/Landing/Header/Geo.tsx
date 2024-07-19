"use client";

import React, { useState } from "react";
import geo from "./../../../public/images/geo.svg";
import geo_icon_black from "./../../../public/images/geo_icon_black.svg";
import { useAppSelector } from "@/helperRedux/helperRedux";
import Image from "next/image";
import SearchCity from "./SearchCity";
import { usePathname, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { UsersessionInt } from "@/interfaces/interface";

interface UserSession {
  id: string;
  userName: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  lastName: string | null;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  date_birth: string | null;
  adress: string | null;
}

interface MainInt {
  userSession: UserSession;
}

type AdressOnly = Pick<UserSession, "adress">;

interface Props {
  userSession: AdressOnly;
}

interface Prop {
  userSession: UsersessionInt;
}

//UserSession -- использовать тут, any поставил чтобы проверить корректность тестов
const Geo = ({ userSession }: any) => {
  const pathName = usePathname();
  const selector = useAppSelector((item) => item.redSlice.stateCity);
  const [state, setState] = useState<boolean>(false);

  const ComponentSearchCity = dynamic(() => import("./SearchCity"));

  return (
    <>
      <button
        data-testid="openModal"
        onClick={() => setState(true)}
        className="head__btn-change-city"
      >
        <Image
          src={
            pathName.includes("/FindFly") ||
            pathName.includes("/FindHotel") ||
            pathName.includes("/Favourites") ||
            pathName.includes("/Account")
              ? geo_icon_black
              : geo
          }
          alt="icon_location"
          className="head__icon-location"
        />
        <p className="head__name-selected-city">
          г. {userSession?.adress ? userSession?.adress : selector}
        </p>
      </button>
      {state ? <ComponentSearchCity setState={setState} /> : null}
    </>
  );
};

export default Geo;
