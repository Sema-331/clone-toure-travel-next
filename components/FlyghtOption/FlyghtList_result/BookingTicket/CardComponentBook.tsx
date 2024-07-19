"use client";

import React, { useRef, useState } from "react";
import add_circle from "./../../../../public/images/Add_circle.png";
import Image from "next/image";
import "./../../../../styles/Flyght/adds.scss";
import ModalFormAddCard from "@/components/Account/PaymentMethodCarts/ModalFormAddCard";
import CreditCradVar from "./CreditCradVar";
import { useAppSelector } from "@/helperRedux/helperRedux";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import CreditCardQueries from "@/hooks/CreditCardQueries";

interface IntItem {
  // item: {
  //     id: number;
  //     userId: string;
  //     star_hotel: string | null;
  //     check_in_date: Date;
  //     check_out_date: Date;
  //     room_number: number;
  //     price: string;
  //     name_hotel: string;
  //     rate: string;
  //     geo_hotel: string;
  //     freebies_options: string[];
  //     amenities_option: string[];
  //     variaty_hotel: string;
  //     idHotel: number;
  // },
  //     itemId: {
  //     id: number;
  //     description_type_room: string;
  //     price_type_room_hotel: number;
  //     id_hotel_tpye_room: number;
  // },
  itemId: any;
  userSecond: any;
  cardValue: {
    id: number;
    cardholderName: string;
    cvc: string;
    expMonth: string;
    expYear: string;
    card_number: string;
    country_of_region: string | null;
    idUser: string;
  }[];
  findUser: {
    password: string;
    createdAt: Date;
    updatedAt: Date;
    userName: string;
    id: string;
    email?: string | null;
    emailVerified: Date | null;
    image: string | null;
    name: string | null;
    backgroundImage: string | null;
    phoneNumber: string | null;
    adress: string | null;
    date_birth: string | null;
  } | null;
  news?: any;
  item: any;
}

const CardComponentBook = ({
  item,
  itemId,
  userSecond,
  cardValue,
  findUser,
  news,
}: IntItem) => {
  const { stateCheckedSelectedCreditCard } = useAppSelector(
    (item) => item.redSlice
  );
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<boolean>(false);
  const [stateAddCard, setStateAddCard] = useState<boolean>(false);

  const ModaleAddCreditCard = dynamic(
    () => import("@/components/Account/PaymentMethodCarts/ModalFormAddCard")
  );

  const pathName = usePathname();

  const getCard = async () => {
    const res = await fetch("/api/GetCreditCard");
    if (!res.ok) {
      throw new Error("error fetch");
    }
    return await res.json();
  };

  const { data } = useQuery({
    queryKey: ["credit_card"],
    queryFn: getCard,
  });

  const { handleSuccessPay, handleSuccessPayFly, stateBtn } = CreditCardQueries(
    {
      item,
      itemId,
      userSecond,
      cardValue,
      findUser,
      news,
    }
  );

  return (
    <div className="sec_adds-block-main">
      {stateBtn ? (
        <div className="block-for-loader">
          <span className="loader"></span>
        </div>
      ) : null}
      {/* <div className="container"> */}
      <div className="adds">
        <div className="adds__block-main">
          {data?.result.map((item: any) => (
            <CreditCradVar key={item.id} item={item} />
          ))}
          <button
            onClick={() => setState(true)}
            type="button"
            className="adds__block-add-new-card"
          >
            <Image
              src={add_circle}
              alt="icon_add_card"
              className="adds__image-add-card"
            />
            <p className="adds__description-add-card">Add a new card</p>
          </button>
        </div>
        {pathName.includes("FindFly/FlightList_result") ? (
          <div className="card-active__btn-pay-product">
            {stateCheckedSelectedCreditCard && cardValue.length > 0 ? (
              <button
                onClick={() => handleSuccessPayFly()}
                type="button"
                className="card-active__btn-pay-success"
              >
                Pay
              </button>
            ) : (
              <button type="button" className="card-active__btn-pay-disabled">
                Pay
              </button>
            )}
          </div>
        ) : (
          <div className="card-active__btn-pay-product">
            {stateCheckedSelectedCreditCard && cardValue.length > 0 ? (
              <button
                onClick={() => handleSuccessPay()}
                type="button"
                className="card-active__btn-pay-success"
              >
                Pay
              </button>
            ) : (
              <button type="button" className="card-active__btn-pay-disabled">
                Pay
              </button>
            )}
          </div>
        )}
      </div>
      <div className="adds__block-uu-modal" ref={ref}>
        {state ? (
          <ModaleAddCreditCard
            findUser={findUser}
            setStateAddCard={setStateAddCard}
            setState={setState}
          />
        ) : null}
        {/* </div> */}
      </div>
    </div>
  );
};

export default CardComponentBook;
