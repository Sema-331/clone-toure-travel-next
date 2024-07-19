"use client";

import Image from "next/image";
import React, {
  MouseEvent,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import user_logo from "./../../../public/images/Ellipse 1.png";
import icon_arrow_down from "./../../../public/images/arrow_down_fill.png";
import user_image from "./../../../public/images/user.svg";
import ModalOptionHeader from "./AccountUser/ModalOptionHeader";
import { getServerSession } from "next-auth";
import { authOptions } from "@/type-libs/lib";
import ServerComponent from "./ServerComponent";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { Session as NextAuthSession } from "next-auth";
import { ToggleModalClose } from "@/services/ToggleModalClose";

interface IntServer {
  // serverComponent: any
  userSession: any;
  session: NextAuthSession | null;
}

const UserOptionsModal = memo(function UserOptionsModal({
  userSession,
  session,
}: IntServer) {
  const ComponentModalOptionHeader = dynamic(
    () => import("./AccountUser/ModalOptionHeader")
  );

  let a = Cookies.get("loggedin");
  console.log(a);

  const { state, ref, setState } = ToggleModalClose("change-comp__block-uus");
  // const [state, setState] = useState(false);
  // const ref = useRef<HTMLDivElement>(null);

  // const handleToggleComponent = useCallback((e: any) => {
  //   if (ref.current && ref.current.contains(e.target as HTMLDivElement)) {
  //     setState(true);
  //     console.log(true);
  //   } else if (
  //     ref.current &&
  //     !ref.current.contains(e.target as HTMLDivElement)
  //   ) {
  //     setState(false);
  //     console.log(false);
  //   }
  // }, []);

  // console.log(typeof session?.user.image);

  // useEffect(() => {
  //   document.addEventListener("click", handleToggleComponent);
  //   return () => {
  //     document.removeEventListener("click", handleToggleComponent);
  //   };
  // }, ["change-comp__block-uus"]);

  return (
    <div ref={ref} className="change-comp__block-uus">
      <div onClick={() => setState(!state)} className="change-comp__user-block">
        <div className="change-comp__block-images">
          {typeof userSession?.image !== "string" ? (
            <Image
              src={user_image}
              alt="image_user_profile"
              className="change-comp__image-main"
            />
          ) : (
            <Image
              width={20}
              height={20}
              src={userSession?.image}
              alt="image_user_profile"
              className="change-comp__image-main"
            />
          )}
          <Image
            src={icon_arrow_down}
            alt="icon_view_option"
            className="change-comp__image-secondary"
          />
        </div>
        <p className="change-comp__description-userName">
          {userSession?.userName.slice(0, 1).toUpperCase() +
            userSession?.userName.slice(1).toLowerCase() +
            " " +
            userSession?.lastName.slice(0, 1).toUpperCase() +
            "."}
        </p>
      </div>
      {state ? (
        <ComponentModalOptionHeader
          session={session}
          userSession={userSession}
        />
      ) : null}
    </div>
  );
});

export default UserOptionsModal;
