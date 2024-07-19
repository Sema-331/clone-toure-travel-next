import React from "react";
import AddCardComponent from "./AddCardComponent";
import OptionsChoice from "../Options/OptionsChoice";
import CrditCardActive from "./CrditCardActive";
import ModalAddCard from "./ModalAddCard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/type-libs/lib";
import { db } from "@/prismaData/db";

const PaymentCard = async () => {
  const session = await getServerSession(authOptions);
  const findUser = await db.user.findFirst({
    where: {
      email: session?.user.email,
    },
  });

  const cardValue = await db.credit_card_users.findMany({
    where: {
      idUser: session?.user.email as string,
    },
  });

  console.log("payment");

  return (
    <section>
      <div className="container">
        <div className="card-active">
          <div className="card-active__block-main">
            <OptionsChoice choice_page={"pay"} />
            <div className="card-active__block-info-credit-card">
              <h2 className="card-active__header-block">Payment methods</h2>
              <ModalAddCard cardValue={cardValue} findUser={findUser} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentCard;
