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
} from "@/slice/slices";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IntItem {
  item?: {
    id: number;
    name_hotel: string;
    userId: string;
    star_hotel: string | null;
    check_in_date: Date;
    check_out_date: Date;
    room_number: number;
    price: string;
    rate: string;
    geo_hotel: string;
    freebies_options: string[];
    amenities_option: string[];
    variaty_hotel: string;
    idHotel: number;
  };
  itemSecond?: any;
}

const AddFavouritesBtn = ({ item, itemSecond }: IntItem) => {
  console.log(itemSecond.id);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const [stateSpinner, setStateSpinner] = useState<boolean>(false);
  const [stateFavouritesAdd, setStateFavouritesAdd] = useState<boolean>(false);
  const pathname = usePathname();

  const handleAddFavourites = async () => {
    const res = await fetch("/api/AddHotelFavourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: itemSecond.id,
        hotelId: pathname === "/Favourites" ? item.hotelId : item.id,
      }),
    });
    if (res.ok) {
      router.refresh();
      console.log("Все хорошо");
    }
    console.log("Все плохо");
  };

  const handleDeleteFavourites = async () => {
    const res = await fetch("/api/DeleteFavouritesItem", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: pathname === "/Favourites" ? item?.userId : itemSecond.id,
        hotelId: pathname === "/Favourites" ? item.hotelId : item.id,
      }),
      cache: "force-cache",
      next: {
        revalidate: 200,
      },
    });
    if (res.ok) {
      console.log("Все хорошо");
    }
    console.log("Все плохо");
  };

  function removeFromLocalStorageByValue(valueToRemove: number) {
    // Получаем текущее содержимое localStorage
    const currentLocalStorage = localStorage.getItem("authority_hotel");

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
    localStorage.setItem("authority_hotel", JSON.stringify(items));
  }

  const handleClickFavouritesBtn = () => {
    handleAddFavourites();
    setStateFavouritesAdd(true);
    dispatch(handleClickFavoritesAdd(item.id));
  };

  const handleClickFavouritesBtnDelete = () => {
    handleDeleteFavourites();
    setStateFavouritesAdd(false);
    removeFromLocalStorageByValue(
      pathname === "/Favourites" ? item.hotelId : item.id
    );
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

  const value = localStorage.getItem("authority_hotel");

  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: handleDeleteFavourites,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["favourites_hotel"] });
    },
  });

  const handelSubmit = () => {
    handleDeleteFavourites();
    setStateFavouritesAdd(false);
    removeFromLocalStorageByValue(
      pathname === "/Favourites" ? item.hotelId : item.id
    );
    mutation.mutate();
  };

  return (
    <div>
      <button onClick={() => removeFromLocalStorageByValue(1)}>DELETE</button>
      {itemSecond.id},,,,item.id{item.id}item.id,,,,{item.hotelId}
      {stateSpinner ? (
        <div className="block-for-loader">
          <span className="loader"></span>
        </div>
      ) : null}
      {pathname === "/Favourites" ? (
        <>
          <button
            onClick={() =>
              dispatch(handleClickFavoritesRemove(String(item.hotelId)))
            }
          >
            DELETE
          </button>
          <button
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
              onClick={() => handleClickFavouritesBtnDelete()}
              className="fly-res__favourites-btn"
            >
              <Image src={image_favourites_fill} alt="image_favourites_fill" />
            </button>
          ) : (
            <button
              onClick={() => handleClickFavouritesBtn()}
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

export default AddFavouritesBtn;
