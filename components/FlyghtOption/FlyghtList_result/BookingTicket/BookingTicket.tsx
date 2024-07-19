import React from "react";
import TicketForBooking from "../FlyResultId/TicketForBooking";
import CustomFooter from "@/components/Authorization/CustomFooter";
import Image from "next/image";
import icon_email from "./../../../../public/images/ion_mail.png";
import facebook from "./../../../../public/images/akar-icons_facebook-fill.png";
import google from "./../../../../public/images/flat-color-icons_google.png";
import apple from "./../../../../public/images/ant-design_apple-filled.png";
import BtnContinue from "./BtnContinue";
import CardComponentBook from "./CardComponentBook";
import BookingTicketPayments from "./BookingTicketPayments";
import FinalInfoComponent from "./FinalInfoComponent";
import BtnContinuePlane from "./BtnContinuePlane";
import { getServerSession } from "next-auth";
import { authOptions } from "@/type-libs/lib";
import { db } from "@/prismaData/db";
import { getUser } from "@/dbQueries/dbQueries";

interface IntData {
  data: any;
  itemSecond: any;
  value: number;
  Book_id: number;
}

const BookingTicket = async ({ data, itemSecond, value, Book_id }: IntData) => {
  const userSecond = await getUser();

  const cardValue = await db.credit_card_users.findMany({});

  return (
    <section>
      <div className="container">
        <div className="book">
          {data.map((item: any) => (
            <div key={item.id} className="book__main-block">
              <div className="book__block-interactive">
                <TicketForBooking
                  values={value}
                  itemSecond={itemSecond}
                  item={item}
                />
                <BookingTicketPayments item={itemSecond} />
                {/* <CardComponentBook /> */}
                {itemSecond.map((item: any, i: number) =>
                  item.classTypeTicket.map((news: any, i: number) => (
                    <BtnContinue
                      news={news}
                      key={i}
                      findUser={userSecond}
                      item={data.id}
                      cardValue={cardValue}
                      userSecond={userSecond}
                      itemId={item}
                    />
                  ))
                )}
                {/* <BtnContinuePlane /> */}
              </div>
              <FinalInfoComponent itemSecond={itemSecond} item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingTicket;
