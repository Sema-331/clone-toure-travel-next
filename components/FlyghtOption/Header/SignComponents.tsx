"use client";

import React, { useEffect, useState } from "react";
import UserOptionsModal from "./UserOptionsModal";
import Link from "next/link";
import FavouritesModal from "./FavouritesModal";
import Cookie from "js-cookie";
import MyLoaderHeader from "@/ui/Skeleton/Header/skeletonHeader";
import { UsersessionInt } from "@/interfaces/interface";
import { Session as NextAuthSession } from "next-auth";

interface PropDate extends UsersessionInt {
  session: NextAuthSession | null;
}

const SignComponents = ({ userSession, session }: PropDate) => {
  // const getFavouritesCountHotel = await prisma.favourites_hotel.findMany({

  // })
  // const getFavouritesCountTicket = await prisma.favourites_fly_ticket.findMany({

  // })
  // console.log(getFavouritesCountHotel.length)
  // console.log(getFavouritesCountTicket.length)
  // console.log(getFavouritesCountHotel.length + getFavouritesCountTicket.length)
  // const a = getFavouritesCountHotel.length + getFavouritesCountTicket.length

  const [state, setState] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getLogin = Cookie.get("loggedin");
    if (getLogin) {
      setState(true);
      setIsLoading(true);
    }
    setIsLoading(false);
    setState(false);
  }, []);
  const getLogin = Cookie.get("loggedin");
  console.log(typeof getLogin);

  if (isLoading) {
    return <MyLoaderHeader />;
  }

  return (
    <>
      {getLogin ? (
        <div className="change-comp__main-block">
          <FavouritesModal placePage="secondary" />
          <UserOptionsModal session={session} userSession={userSession} />
        </div>
      ) : (
        <div className="header-fly__block-log">
          <Link href="/Login">
            <button className="header-fly__authorization-log">Login</button>
          </Link>
          <Link href="/SignUp">
            <button className="header-fly__authorization-sign-up">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default SignComponents;

//typeof session?.user.email === 'string'
