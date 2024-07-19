import Image from "next/image";
import React from "react";
import group from "./../../../public/images/Logo.png";
import search_fly from "./../../../public/images/airplane.png";
import search_stop from "./../../../public/images/ion_bed.png";
import Link from "next/link";
import AuthComponent from "./AuthComponent";
import Cookie from "js-cookie";
import { getServerSession } from "next-auth";
import { authOptions } from "@/type-libs/lib";
import { prisma } from "@/prismaData/db";
import Geo from "./Geo";

const Nav = async () => {
  console.log(11);
  const session = await getServerSession(authOptions);
  const userSession = await prisma.user.findUnique({
    where: {
      email: session ? session?.user?.email! : "null",
    },
  });

  // let a = Cookies.get('loggedin')
  console.log("AuthComponent");
  console.log(session?.user);
  // console.log(getLogin)
  console.log(userSession?.adress);
  console.log();
  console.log("session:" + session?.user);
  console.log(typeof session?.user.email);

  // console.log(Cookie.get('loggedin'))

  console.log("Nav");

  return (
    <div className="head__block-uu">
      <button type="button">CLICK</button>
      <Image
        src="/images/Rectangle31.png"
        alt="image"
        fill={true}
        className="images"
      />
      <nav className="head__nav">
        <div className="head__block-main">
          <div className="head__block-insides">
            <div className="head__block-search">
              <Link href="/FindFly" className="head__block-search-fly">
                <Image
                  src={search_fly}
                  className="head__image-search"
                  alt="search__fly_image"
                />
                <p className="head__description-fly-search">Find Flight</p>
              </Link>
              <Link href="/FindHotel" className="head__block-search-stop">
                <Image
                  src={search_stop}
                  className="head__image-search-stop"
                  alt="search__stop_image"
                />
                <p className="head__description-stop-search">Find Hotel</p>
              </Link>
            </div>
            <Geo userSession={userSession} />
          </div>
          <div className="head__main-logo-block">
            <Image
              src={group}
              className="head__main-logo-image"
              alt="logo_image"
            />
          </div>
          <AuthComponent session={session} userSession={userSession} />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
