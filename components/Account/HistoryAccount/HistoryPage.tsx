import React from "react";
import OptionsChoice from "../Options/OptionsChoice";
import UUComponent from "./UUComponent";
import ModalFilters from "./ModalFilters";
import { db } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { getServerSession } from "next-auth";

// async function getHotels() {
//     const user2 = await db.history_table_hotel.findMany({
//         include: {
//             hotel: {
//                 include: {
//                     table_type_room: {
//                         where: {
//                             id: Number(Booking_Hotel)
//                         }
//                     }
//                 }
//             }
//         }
//     })
//     return user2
// }

const HistoryPage = async () => {
  const session = await getServerSession(authOptions);

  const user2 = await db.history_table_hotel.findMany({
    include: {
      user: true,
      hotel: {
        include: {
          id_hotel: true,
        },
      },
    },
  });

  // const user3 = await db.table_history_fly.findMany({
  //     include: {
  //         id_user_history: true,

  //     }
  // })

  console.log(user2);

  const user3 = await db.user.findFirst({
    where: {
      email: session?.user.email,
    },
  });

  const data = await db.table_history_fly.findMany({
    include: {
      id_type_class: true,
      id_table_route_history: {
        include: {
          idTypeClass: true,
          id_table_comp: true,
          from_airport: true,
          to_airport: true,
          Table_ticket: true,
        },
      },
    },
  });

  return (
    <section>
      {data.map((item) => (
        <>{item.idUser == user3?.id ? "good" : "baad"}</>
      ))}
      {/* {
            data.map((item) => (
                <div key={item.id}>{item.id_table_route_history.Table_ticket.map((item) => (
                    <>{item.classTypeTicket.map((item) => (
                        <>{item.idClassTypeTicket}</>
                    ))}</>
                ))}</div>
            ))
        }
        {
            data.map((item) => (
                <div key={item.id}>{item.classTypeTicket_history.map((item) => (
                    <>{item.id}</>
                ))}</div>
            ))
        }
        {
            data.map((item) => (
                <div key={item.id}>{item.idTableRoute},,</div>
            ))
        }
        {
            data.map((item) => (
                <div key={item.id}>{item.classTypeTicket_history.map((item) => (
                    <>{item.id}</>
                ))}</div>
            ))
        } */}
      {/* {
            data.map((item) => (
                <>{item.id}{item.id_table_route_history.time_fly_from}</>
            ))
        }
        {
            data.map((item) => (
                <>,,,,{item.idTableRoute},,,</>
            ))
        }
        {
            data.map((item) => (
                <>{item.id_table_route_history.Table_ticket.map((item) => (
                    <>{item.id}</>
                ))}</>
            ))
        }
        {
            user2.map((item) => (
                <>{item.userId}</>
            ))
        } */}
      <div className="container">
        <div className="history-account">
          <div className="history-account__block-main">
            <OptionsChoice choice_page={"history"} />
            <div className="history-account__block-history-user-pay">
              <div className="history-account__block-uu">
                <h2 className="history-account__header-block">
                  Tickets/Bookings
                </h2>
                <ModalFilters />
              </div>
              <UUComponent
                data={data}
                user3={user3}
                session={session}
                user2={user2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryPage;
