import MainHotelBookingComponent from "@/components/Hotel/HotelIdComponents/HotelBooking/MainHotelBookingComponent";
import React from "react";
import "./../../../../../../styles/Hotel/BookHotel/book.scss";
import { db } from "@/prismaData/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/type-libs/lib";

interface SingleInt {
  params: {
    Booking_Hotel: number;
    hotel_id: number;
  };
}

export async function generateMetadata({ params }: SingleInt) {
  return {
    title: `#${params.hotel_id}, type - ${params.Booking_Hotel}`,
    description: `hotel is number - ${params.hotel_id}, type - ${params.Booking_Hotel}`,
    openGraph: {
      title: `#${params.hotel_id}`,
      description: `hotel is number - ${params.hotel_id}, type - ${params.Booking_Hotel}`,
      type: "website",
      locale: "ru_Ru",
      siteName: "TourTravel",
    },
  };
}

const BookingHotel = async ({
  params: { Booking_Hotel, hotel_id },
}: SingleInt) => {
  const user2 = await db.table_type_room.findFirst({
    // include: {
    //   table_type_room: true
    // },
    where: {
      id: Number(Booking_Hotel),
    },
  });

  const userMain = await db.table_room_hotel.findFirst({
    // include: {
    //   table_type_room: true
    // },
    where: {
      id: Number(hotel_id),
    },
  });

  const session = await getServerSession(authOptions);

  const userSecond = await db.user.findFirst({
    where: {
      email: session?.user.email,
    },
  });

  const userSeconds = await db.review_table_single_hotel.findMany({
    where: {
      hotelId: Number(hotel_id),
      userId: session?.user.id,
    },
    include: {
      user: true,
      hotel: true,
    },
  });

  return (
    <>
      <>
        {(
          userSeconds?.reduce((prev, item) => prev + Number(item.rating), 0) /
          userSeconds?.length
        ).toFixed(1)}
      </>
      {/* {userSecond?.id}
    {user2?.id} */}
      {typeof userMain?.price}
      {/* {
      user2.map((item) => (
        <>{item.table_type_room.map((item) => (
          <>{item.price_type_room_hotel}</>
        ))}</>
      ))
    } */}
      {/* {
      user2.map((item) => (
        <>{item.id}</>
      ))
    } */}
      {}
      <MainHotelBookingComponent
        userSeconds={userSeconds}
        userSecond={userSecond}
        itemId={user2}
        item={userMain}
      />
    </>
  );
};

export default BookingHotel;
