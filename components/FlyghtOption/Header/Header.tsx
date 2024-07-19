import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "./../../../public/images/Logo_black.png";
import "./../../../styles/Flyght/headerFly.scss";
import SignComponents from "./SignComponents";
import LinkRoutes from "./LinkRoutes";
import { getServerSession } from "next-auth";
import { authOptions } from "@/type-libs/lib";
import { prisma } from "@/prismaData/db";
import { getUserUnique } from "@/dbQueries/dbQueries";

const Header = async () => {
  const session = await getServerSession(authOptions);
  const userSession = await getUserUnique(session);

  return (
    <header>
      <div className="header__block-uu-our">
        <div className="container">
          <div className="header-fly">
            <nav className="header-fly__nav">
              <LinkRoutes userSession={userSession} />
              <div className="header-fly__logo">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="main_logo"
                    className="header-fly__main-logo"
                  />
                </Link>
              </div>
              <SignComponents session={session} userSession={userSession} />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
