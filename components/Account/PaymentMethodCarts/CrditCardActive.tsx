"use client";

import React from "react";
import delete_icons from "./../../../public/images/Bin.png";
import logo_card from "./../../../public/images/Vector_visa.png";
import Image from "next/image";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface CardInt {
  card: {
    id: number;
    cardholderName: string;
    cvc: string;
    expMonth: string;
    expYear: string;
    card_number: string;
    country_of_region: string | null;
    idUser: string;
  };
}

const CrditCardActive = ({ card }: CardInt) => {
  const handleDeleteFavourites = async () => {
    const res = await fetch("/api/DeleteCreditCard", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: card.id,
        cardholderName: card.cardholderName,
        card_number: card.card_number,
        expMonth: card.expMonth,
        expYear: card.expYear,
        cvc: card.cvc,
        idUser: card.idUser,
      }),
    });
    if (res.ok) {
      console.log("Все хорошо");
    }
    console.log("Все плохо");
  };

  const client = useQueryClient();

  const deleteCard = useMutation({
    mutationFn: handleDeleteFavourites,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["credit_card"] });
    },
  });

  const handleSubmitDelete = () => {
    // e.preventDefault()
    deleteCard.mutate();
  };

  return (
    <div
      data-testid={`data-testid-card-${card.id}`}
      className="card-active__block-active-card"
    >
      <div className="card-active__block-info-num">
        <div className="card-active__block-insides">
          <p className="card-active__description-main-num">
            {card.card_number || "0000 0000 0000 0000"}
          </p>
          <p className="card-active__sum-num">
            {card.cardholderName!.toUpperCase() || "SEMEN VELESIK"}
          </p>
        </div>
        <button
          data-testid={`data-testid-btn-delete-${card.id}`}
          type="button"
          onClick={handleSubmitDelete}
        >
          <Image
            src={delete_icons}
            alt="image_delete"
            className="card-active__image-delete-card"
          />
        </button>
      </div>
      <div className="card-active__block-info-date">
        <div className="card-active__block-inside-date">
          <p className="card-active__description-valid">ValidThru</p>
          <p className="card-active__description-date">
            {card.expMonth || "00"}/{card.expYear || "00"}
          </p>
        </div>
        <Image
          src={logo_card}
          alt="image_card_Logo"
          className="card-active__image-logo-card"
        />
      </div>
    </div>
  );
};

export default CrditCardActive;
