import Image from "next/image";
import React from "react";
import card_logo from "./../../../public/images/card_logo.svg";

interface CardInt {
  card: {
    cardholderName?: string | undefined;
    number?: string;
    expMonth?: string;
    expYear?: string;
    cvc?: string;
  };
}

const SchemaCreditCard = ({ card }: CardInt) => {
  return (
    <div className="pay__block-side-inside">
      <div className="pay__schema-first">
        <article className="front-card">
          <Image
            className="pay__image-font"
            src={"/images/bg-card-front.png"}
            alt="image_credit_card"
            fill={true}
          />
          <Image src={card_logo} alt="" className="pay__side-iamge" />
          <div className="pay__block-card-num">
            <h2 className="pay__heade-card-num">
              {card?.number || "0000 0000 0000 0000"}
            </h2>
            <ul className="pay__list-box-info-user">
              <li className="pay__list-item-name-user">
                {card.cardholderName!.toUpperCase() || "SEMEN VELESIK"}
              </li>
              <li className="pay__list-item-date-user">
                {card?.expMonth || "00"}/{card?.expYear || "00"}
              </li>
            </ul>
          </div>
        </article>
      </div>
      <div className="pay__block-schema-second">
        <article className="back-card">
          <Image
            src={"/images/bg-card-back.png"}
            alt="image_credit_card"
            fill={true}
          />
          <p className="pay__back-card-description">{card?.cvc || "000"}</p>
        </article>
      </div>
    </div>
  );
};

export default SchemaCreditCard;
