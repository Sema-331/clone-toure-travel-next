import { useAppSelector } from "@/helperRedux/helperRedux";
import React from "react";
import ComponentModalAuth from "./ComponentModalAuth";
import AddFavouritesBtnFly from "./AddFavouritesBtnFly";
import Cookie from "js-cookie";
import dynamic from "next/dynamic";

interface IntProp {
  user2: any;
  item: any;
}

const FavouritesFly = ({ user2, item }: IntProp) => {
  const ComponentModalAuthDynamic = dynamic(
    () => import("./ComponentModalAuth")
  );
  const loggedIn = Cookie.get("loggedin");
  const selector = useAppSelector((item) => item.redSlice.checkLoginUser);

  return (
    <>
      {loggedIn ? (
        <>
          <AddFavouritesBtnFly user2={user2} item={item} />
        </>
      ) : (
        <ComponentModalAuthDynamic />
      )}
    </>
  );
};

/**
 *   const handleAddFavouritesTicket = async () => {
    const res = await fetch('/api/AddFavouritesFlyTicket', {
      method: 'POST', 
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idTableRoute: item.id,
          idUser: itemSecond.id
        })
    })
    if(res.ok) {
      router.refresh()
      console.log('Все хорошо')
    } 
    console.log('Все плохо')
  }
 */

export default FavouritesFly;
