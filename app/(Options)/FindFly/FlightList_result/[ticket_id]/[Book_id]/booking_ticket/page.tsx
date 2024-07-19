import BookingTicketLL from "@/components/BookingTicket/BookingTicketLL";
import React from "react";
import "./../../../../../../../styles/Flyght/booking.scss";
import { db, prisma } from "@/prismaData/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/type-libs/lib";
import { getTableHistoryFly, getUserPrisma } from "@/dbQueries/dbQueries";

interface IntParams {
  params: {
    ticket_id: number;
    Book_id: number;
  };
}

const Booking = async ({ params: { ticket_id, Book_id } }: IntParams) => {
  const userSession = await getUserPrisma();
  const data = await getTableHistoryFly(ticket_id, Book_id);

  return <BookingTicketLL userSession={userSession} data={data} />;
};

export default Booking;
