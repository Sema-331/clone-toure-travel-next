import BookingRoomHotelFinal from "@/components/Hotel/HotelIdComponents/HotelBooking/FinalBooking/BookingRoomHotelFinal";
import { db } from "@/prismaData/db";
import React from "react";

interface SingleInt {
  params: {
    hotel_id: number;
    Booking_Hotel: number;
  };
}

const BookingRoomFinal = async ({
  params: { hotel_id, Booking_Hotel },
}: SingleInt) => {
  const user2 = await db.table_room_hotel.findMany({
    where: {
      id: Number(hotel_id),
    },
  });

  const userId = await db.table_type_room.findMany({
    where: {
      id: Number(Booking_Hotel),
    },
  });

  return (
    <>
      <BookingRoomHotelFinal userId={userId} item={user2} />
    </>
  );
};
// export async function generateStaticParams() {
//   return [{ slug: "a" }, { slug: "b" }, { slug: "c" }];
// const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
// const res2 = await res.json();
// return res2.map(({ id }) => id);
// }

export default BookingRoomFinal;
