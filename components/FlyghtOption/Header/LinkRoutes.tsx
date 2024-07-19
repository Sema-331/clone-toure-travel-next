"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import airplane from "./../../../public/images/airplane_black.png";
import hotel from "./../../../public/images/ion_bed_black.png";
import Geo from "@/components/Landing/Header/Geo";
import classNames from "classnames";
import { UsersessionInt } from "@/interfaces/interface";

const LinkRoutes = ({ userSession }: UsersessionInt) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="header-fly__block-uu-options">
      <div className="header-fly__block-options">
        <div
          className={classNames({
            "header-fly__block-fly-active": pathname === "/FindFly",
            "header-fly__block-fly": pathname !== "/FindFly",
          })}
        >
          <Link className="header-fly__link-fly" href="/FindFly">
            <Image
              className="header-fly__image-fly"
              src={airplane}
              alt="image_fly"
            />
            <p className="header-fly__descripion-fly">Find Flight</p>
          </Link>
        </div>
        <div
          className={classNames({
            "header-fly__block-hotel-active": pathname === "/FindHotel",
            "header-fly__block-hotel": pathname !== "/FindHotel",
          })}
        >
          <Link className="header-fly__hotel-link" href="/FindHotel">
            <Image
              src={hotel}
              alt="image_hotel"
              className="header-fly__image-hotel"
            />
            <p className="header-fly__descritpion-hotel">Find Stays</p>
          </Link>
        </div>
      </div>
      <Geo userSession={userSession} />
    </div>
  );
};

export default LinkRoutes;
