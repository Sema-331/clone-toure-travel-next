import SearchResultsHotels from "@/components/Hotel/SearchingHotel/SearchResultsHotels";
import { getUser } from "@/dbQueries/dbQueries";
import React from "react";

interface getSearchParams {
  searchParams: {
    search: string;
    variaty: string;
    sort_price: string;
    hotel_rate: string;
    freebies_options: string;
    amenities_options: string;
    min_price: string;
    max_price: string;
    date_from_hotel: Date;
    type_room: string;
    date_check_out: string;
  };
}

const SerachHotelPage = async ({ searchParams }: getSearchParams) => {
  const user2 = await getUser();

  return <SearchResultsHotels user2={user2} searchParams={searchParams} />;
};

export default SerachHotelPage;
