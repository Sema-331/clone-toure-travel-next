"use client";

import FavouritesModal from "@/components/FlyghtOption/Header/FavouritesModal";
import ServerComponent from "@/components/FlyghtOption/Header/ServerComponent";
import UserOptionsModal from "@/components/FlyghtOption/Header/UserOptionsModal";
import { useAppSelector } from "@/helperRedux/helperRedux";
import { prisma } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import MyLoaderHeader from "@/ui/Skeleton/Header/skeletonHeader";
import { Session } from "@supabase/supabase-js";
import { Session as NextAuthSession } from "next-auth";
import BtnNoFill from "@/components/BtnNoFill/BtnNoFill";

interface PropDate {
  userSession: any;
  session: NextAuthSession | null;
}

const AuthComponent: React.FC<PropDate> = ({ userSession, session }) => {
  console.log(111);
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

  // useEffect(() => {
  //   async function getInfo() {
  //     const res = await fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/countries')
  //     const result = await res.json()
  //     setData(result)
  //     console.log(result)
  //   }
  //   getInfo()
  // }, [])

  if (isLoading) {
    return <MyLoaderHeader />;
  }

  return (
    <>
      {/* <button type='button' onClick={() => console.log('CLICK')}>CLick</button> */}
      {getLogin ? (
        <div className="change-comp__main-block">
          <FavouritesModal placePage="main" />
          <UserOptionsModal userSession={userSession} session={session} />
        </div>
      ) : (
        <div className="head__block-authorization">
          {/* <Link href="/Login" className="head__btn-authorization-log">
            Login
          </Link> */}
          <BtnNoFill href="/Login" className="head__btn-authorization-log">
            Login
          </BtnNoFill>
          <BtnNoFill href="/SignUp" className="head__btn-authorization-sign-up">
            Sign up
          </BtnNoFill>
          {/* <Link href="/SignUp" className="head__btn-authorization-sign-up">
            Sign up
          </Link> */}
        </div>
      )}
    </>
  );
};

export default AuthComponent;

// import FavouritesModal from '@/components/FlyghtOption/Header/FavouritesModal';
// import ServerComponent from '@/components/FlyghtOption/Header/ServerComponent';
// import UserOptionsModal from '@/components/FlyghtOption/Header/UserOptionsModal';
// import { useAppSelector } from '@/helperRedux/helperRedux'
// import { prisma } from '@/prismaData/db';
// import { authOptions } from '@/type-libs/lib';
// import { getServerSession } from 'next-auth';
// import Link from 'next/link'
// import React  from 'react'

// const AuthComponent = async () => {

//     const session = await getServerSession(authOptions);
//     const userSession = await prisma.user.findUnique({
//       where: {
//         email: !session ? 'null' : session.user.email!,
//       },
//     })

//     console.log(userSession)
//     console.log(session)

//   return (
//     <>
//         {
//         typeof session?.user === 'null' ? (
//                 <div className="change-comp__main-block">
//                     <FavouritesModal placePage='main' />
//                     <UserOptionsModal userSession={userSession} serverComponent={<ServerComponent />}/>
//                 </div>
//             ) : <div className='head__block-authorization'>
//             <Link href='/Login' className='head__btn-authorization-log'>Login</Link>
//             <Link href='/SignUp' className='head__btn-authorization-sign-up'>Sign up</Link>
//         </div>
//         }
//     </>
//   )
// }

// export default AuthComponent
