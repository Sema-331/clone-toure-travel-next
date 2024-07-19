"use client";

import React, { useEffect, useRef, useState } from "react";
import icon_favourites from "./../../../public/images/favourites_fill.png";
import fff_heart from "./../../../public/images/heart.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SmallVersionFavourites from "./SmallVersionFavourites";
import classNames from "classnames";
import dynamic from "next/dynamic";

interface IntPlace {
  placePage: string;
}

const FavouritesModal = ({ placePage }: IntPlace) => {
  const ComponentHoverFavourites = dynamic(
    () => import("./ModalHoverFavourites")
  );

  const pathname = usePathname();
  // const ref = useRef(null)
  const [stateLengthFavouritesItems, setStateLengthFavouritesItems] = useState(
    []
  );
  const [stateModal, setStateModal] = useState<boolean>(false);

  // const handleToggleModalFavourites = (e: any) => {
  //     if (ref.current && ref.current.contains(e.target)) {
  //         setStateModal(true)
  //     } else if (ref.current && !ref.current.contains(e.target)) {
  //         setStateModal(false)
  //     }
  // }

  // useEffect(() => {
  //     document.addEventListener('click', handleToggleModalFavourites)
  //     return () => {
  //         document.removeEventListener('click', handleToggleModalFavourites)
  //     }
  // }, ['change-comp__block-favourites-outside'])
  // const handleClickChoose = async () => {
  //     const res = await fetch('/api/GetFavouritesHotel')
  //     const result = await res.json()
  //     console.log(result)
  //     setStateLengthFavouritesItems(result)
  //   }

  //   useEffect(() => {
  //     handleClickChoose()
  // }, [])

  //   console.log(stateLengthFavouritesItems.length)

  return (
    <div
      onMouseEnter={() => setStateModal(true)}
      onMouseLeave={() => setStateModal(false)}
      className={classNames({
        "change-comp__block-favourites-outside-active":
          pathname === "Favourites",
        "change-comp__block-favourites-outside": pathname !== "Favourites",
      })}
    >
      <Link
        href="/Favourites"
        onClick={() => setStateModal(!stateModal)}
        className="change-comp__favourites-block"
      >
        <p className="change-description__length-favourites-item">
          {stateLengthFavouritesItems}
        </p>
        {stateModal ? (
          <>
            {placePage === "secondary" ? (
              <Image
                src={icon_favourites}
                alt="icon_favourites"
                className="change-comp__image-favourites"
              />
            ) : (
              <Image
                src={fff_heart}
                alt="icon_favourites"
                className="change-comp__image-favourites"
              />
            )}
          </>
        ) : (
          <>
            {placePage === "secondary" ? (
              <Image
                src={icon_favourites}
                alt="icon_favourites"
                className="change-comp__image-favourites"
              />
            ) : (
              <Image
                src={fff_heart}
                alt="icon_favourites"
                className="change-comp__image-favourites"
              />
            )}
          </>
        )}
        <p className="change-comp__description-fav">Favourites</p>
      </Link>
      {stateModal ? <ComponentHoverFavourites /> : <SmallVersionFavourites />}
    </div>
  );
};

export default FavouritesModal;
