"use client";

import React, { useEffect, useState } from "react";
import image_favourites from "./../../../public/images/Fill=False_favourites.png";
import image_favourites_fill from "./../../../public/images/favourites_icon_fill.png";
import logo_ticket from "./../../../public/images/image 40.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { authOptions } from "@/type-libs/lib";
import { useRouter } from "next/navigation";
import { getServerSession } from "next-auth";
import { useAppDispatch, useAppSelector } from "@/helperRedux/helperRedux";
import {
  handleClickFavoritesAdd,
  handleClickFavoritesRemove,
  handleClickFavoritesRemoveRoute,
  handleClickFavoritesAddRoute,
} from "@/slice/slices";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IntItem {
  item: any;
  user2: any;
}

const AddFavouritesBtnFly = ({ item, user2 }: IntItem) => {
  const dispatch = useAppDispatch();
  const [stateSpinner, setStateSpinner] = useState<boolean>(false);
  const [stateFavouritesAdd, setStateFavouritesAdd] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  function removeFromLocalStorageByValue(valueToRemove: number) {
    // Получаем текущее содержимое localStorage
    const currentLocalStorage = localStorage.getItem("authority_route_ticket");

    // Парсим JSON-строку в объект
    const items = JSON.parse(currentLocalStorage as string);

    // Проходим по всем элементам и удаляем тот, который имеет значение, равное valueToRemove
    for (const key in items) {
      if (items.hasOwnProperty(key) && items[key] === valueToRemove) {
        delete items[key];
        break; // Выходим из цикла после удаления первого совпадения
      }
    }

    // Преобразуем объект обратно в JSON-строку и сохраняем в localStorage
    localStorage.setItem("authority_route_ticket", JSON.stringify(items));
  }

  const handleAddFavouritesTicket = async () => {
    const res = await fetch("/api/AddFavouritesFlyTicket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idTableRoute: item.id,
        idUser: user2.id,
      }),
    });
    if (res.ok) {
      router.refresh();
      console.log("Все хорошо");
    }
    console.log("Все плохо");
  };

  const handleClickAddFavourites = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(handleClickFavoritesAddRoute(item.id));
    handleAddFavouritesTicket();
    setStateFavouritesAdd(true);
  };

  const handleDeleteFavourites = async () => {
    const res = await fetch("/api/DeleteFavouritesFly", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        iduser: user2.id,
        idTableRoute: pathname === "/Favourites" ? item.idTableRoute : item.id,
      }),
    });
    if (res.ok) {
      console.log("Все хорошо");
      setStateSpinner(true);
      // client.invalidateQueries({queryKey: ['favourites_fly']});
      setTimeout(() => {
        setStateSpinner(false);
        // router.refresh()
      }, 2000);
    }
    console.log("Все плохо");
  };

  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: handleDeleteFavourites,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["favourites_fly"] });
    },
  });

  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    removeFromLocalStorageByValue(item.idTableRoute);
    mutation.mutate();
    setStateFavouritesAdd(false);
  };

  const handleClickFavouritesBtnDelete = () => {
    // dispatch(handleClickFavoritesRemoveRoute(item.id))
    removeFromLocalStorageByValue(item.idTableRoute);
    handleDeleteFavourites();
    setStateFavouritesAdd(false);
    // dispatch(handleClickFavoritesRemove(item.id))
    // setState(state.filter((value) => value !== item.id))
    // localStorage.setItem('authority_hotel', JSON.stringify(state));
    // setState(state.filter(id => id !== item.id));
    // dispatch(handleClickFavoritesRemove(item.id))
  };

  const handleClickFavouritesBtnDeleteSearch = () => {
    // dispatch(handleClickFavoritesRemoveRoute(item.id))
    removeFromLocalStorageByValue(item.id);
    handleDeleteFavourites();
    setStateFavouritesAdd(false);
    // dispatch(handleClickFavoritesRemove(item.id))
    // setState(state.filter((value) => value !== item.id))
    // localStorage.setItem('authority_hotel', JSON.stringify(state));
    // setState(state.filter(id => id !== item.id));
    // dispatch(handleClickFavoritesRemove(item.id))
  };

  // const handleClickRemoveItemFavourites = () => {
  //   // handleDeleteFavourites()
  //   setStateFavouritesAdd(false)
  // }

  // console.log(stateFavouritesAdd)
  // console.log(selector.includes(item.id))

  // useEffect(() => {
  //     const savedFavorites = JSON.parse(localStorage.getItem('authority_hotel')) || [];
  //     setState(savedFavorites)
  //   }, []) //state

  // useEffect(() => {
  //   localStorage.setItem('authority_hotel', JSON.stringify(state));
  //   setState(state.filter(id => id !== item.id));
  // }, [state])

  const value = localStorage.getItem("authority_route_ticket");

  return (
    <div>
      {stateSpinner ? (
        <div className="block-for-loader">
          <span className="loader"></span>
        </div>
      ) : null}
      {pathname === "/Favourites" ? (
        <>
          <button
            type="button"
            style={{ background: "red" }}
            onClick={handelSubmit}
            className="fly-res__favourites-btn"
          >
            <Image src={image_favourites_fill} alt="image_favourites" />
          </button>
        </>
      ) : (
        <>
          {value?.includes(item.id) ? (
            <button
              style={{ background: "blue" }}
              type="button"
              onClick={handleClickFavouritesBtnDeleteSearch}
              className="fly-res__favourites-btn"
            >
              <Image src={image_favourites_fill} alt="image_favourites_fill" />
            </button>
          ) : (
            <button
              style={{ background: "green" }}
              type="button"
              onClick={handleClickAddFavourites}
              className="fly-res__favourites-btn"
            >
              <Image src={image_favourites} alt="image_favourites" />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default AddFavouritesBtnFly;
