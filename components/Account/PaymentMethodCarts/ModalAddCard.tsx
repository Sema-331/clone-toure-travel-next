"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import add_card from "./../../../public/images/Add_circle.png";
import ModalFormAddCard from "./ModalFormAddCard";
import CrditCardActive from "./CrditCardActive";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import BtnNoFill from "@/components/BtnNoFill/BtnNoFill";

interface FormInt {
  findUser: {
    id: string;
    userName: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    lastName: string | null;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    date_birth: string | null;
  } | null;
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
}

const ModalAddCard = ({ findUser, cardValue }: any) => {
  // const selector = useAppSelector((item) => item.redSlice.creditCard)

  console.log("payment1");
  const ComponentAddCreditCard = dynamic(() => import("./ModalFormAddCard"));

  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<boolean>(false);
  const [stateAddCard, setStateAddCard] = useState<boolean>(false);

  const handleToggleModalAddCard = (e: MouseEvent) => {
    if (ref.current && ref.current.contains(e.target as HTMLDivElement)) {
      setState(true);
    } else if (
      ref.current &&
      ref.current.contains(e.target as HTMLDivElement)
    ) {
      setState(false);
    }
  };

  const fetchCreditCards = async () => {
    const res = await fetch("/api/GetCreditCard");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  };

  useEffect(() => {
    document.addEventListener("click", handleToggleModalAddCard);
    return () => {
      document.removeEventListener("click", handleToggleModalAddCard);
    };
  }, ["cgc"]);

  console.log(state);

  const { data, error, isLoading } = useQuery({
    queryKey: ["credit_card"],
    queryFn: fetchCreditCards,
  });

  console.log(data?.result);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  console.log(data?.result);

  return (
    <div className="card-active__block-interactive-cards">
      {/* {
                selector.map((card, i) => (
                    <CrditCardActive key={i} card={card} />
                ))
              } */}
      {data?.result.map((card: any) => (
        <CrditCardActive key={card.id} card={card} />
      ))}
      <div ref={ref} className="cgc">
        <div
          onClick={() => setState(true)}
          className="card-active__block-add-new-card"
        >
          <BtnNoFill type="button" className="card-active__block-add-inside">
            <Image
              src={add_card}
              alt="image_add_new_card"
              className="card-active__image-adds"
            />
            <p className="card-active__description-for-new-card">
              Add a new card
            </p>
          </BtnNoFill>
          {/* <div className="card-active__block-add-inside">
            <Image
              src={add_card}
              alt="image_add_new_card"
              className="card-active__image-adds"
            />
            <p className="card-active__description-for-new-card">
              Add a new card
            </p>
          </div> */}
        </div>
        <div className="card-active__btn-pay-product">
          <button className="card-active__btn-pay-success">Pay</button>
        </div>
        {state ? (
          <div className="create">
            <ComponentAddCreditCard
              findUser={findUser}
              setStateAddCard={setStateAddCard}
              setState={setState}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ModalAddCard;
