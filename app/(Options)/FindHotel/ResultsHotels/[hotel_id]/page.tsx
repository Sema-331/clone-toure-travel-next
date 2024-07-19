import CoomentComponent from "@/components/Hotel/HotelIdComponents/CoomentComponent";
import HoteIdComp from "@/components/Hotel/HotelIdComponents/HoteIdComp";
import LocationHotel from "@/components/Hotel/HotelIdComponents/LocationHotel";
import OverviewAll from "@/components/Hotel/HotelIdComponents/OverviewAll";
import { getSingleReview, getTableRoomHotel } from "@/dbQueries/dbQueries";
import React from "react";

interface SingleInt {
  params: {
    hotel_id: number;
  };
}
export async function generateMetadata({ params }: SingleInt) {
  return {
    title: `#${params.hotel_id}`,
    description: `hotel is number - ${params.hotel_id}`,
    openGraph: {
      title: `#${params.hotel_id}`,
      description: `hotel is number - ${params.hotel_id}`,
      type: "website",
      locale: "ru_Ru",
      siteName: "TourTravel",
    },
  };
}

const HotelId = async ({ params: { hotel_id } }: SingleInt) => {
  const user2 = await getTableRoomHotel(hotel_id);
  const userSecond = await getSingleReview(hotel_id);

  return (
    <>
      <HoteIdComp userSecond={userSecond} item={user2} />
      <OverviewAll userSecond={userSecond} overview={user2} />
      <LocationHotel />
      <CoomentComponent userSecond={userSecond} user2={user2} />
    </>
  );
};

export default HotelId;
