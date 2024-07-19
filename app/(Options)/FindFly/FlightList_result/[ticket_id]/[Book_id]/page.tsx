import BookingTicket from "@/components/FlyghtOption/FlyghtList_result/BookingTicket/BookingTicket";
import React from "react";
import "./../../../../../../styles/Flyght/book.scss";
import CardComponentBook from "@/components/FlyghtOption/FlyghtList_result/BookingTicket/CardComponentBook";
import { prisma } from "@/prismaData/db";
import {
  getTableRouteBooking,
  getTableTicketSingle,
} from "@/dbQueries/dbQueries";

interface SingleInt {
  params: {
    Book_id: number;
    ticket_id: number;
  };
}

export async function generateMetadata({ params }: SingleInt) {
  return {
    title: `#${params.ticket_id}`,
    description: `ticket number is - ${params.ticket_id}, type - ${params.Book_id}`,
    openGraph: {
      title: `#${params.ticket_id}`,
      description: `hotel number is - ${params.ticket_id}, type - ${params.Book_id}`,
      type: "website",
      locale: "ru_Ru",
      siteName: "TourTravel",
    },
  };
}

const page = async ({ params: { Book_id, ticket_id } }: SingleInt) => {
  const data = await getTableRouteBooking(ticket_id);

  const itemSecond = await getTableTicketSingle(Book_id);

  return (
    <BookingTicket
      Book_id={Book_id}
      value={ticket_id}
      data={data}
      itemSecond={itemSecond}
    />
  );
};

export default page;
