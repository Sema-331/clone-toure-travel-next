"use client";

import React, { useEffect, useState } from "react";
import FormSearching from "./FormSearching";
import ComponentFiltersSideLeft from "./ComponentFiltersSideLeft";
import ComponentTypeHotel from "./ComponentTypeHotel";
import HotelItems from "./HotelItems";
import URLSearchHotelFilteres from "@/hooks/URLSearchHotelFilteres";
import { getSearchParams } from "@/interfaces/interface";
import { useRouter, useSearchParams } from "next/navigation";

const SearchResultsHotels = ({ searchParams, user2 }: getSearchParams) => {
  const [states, setStates] = useState([]);
  const [stateLoad, setStateLoad] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/search?search=${searchParams.search}&date_from_hotel=${searchParams.date_from_hotel}&type_room=${searchParams.type_room}&date_check_out=${searchParams.date_check_out}&min_price=${searchParams.min_price}&max_price=${searchParams.max_price}&hotel_rate=${searchParams.hotel_rate}&freebies_options=${searchParams.freebies_options}&amenities_options=${searchParams.amenities_options}&variaty=${searchParams.variaty}&sort_price=${searchParams.sort_price}`
        );
        const data = await res.json();
        setStates(data);
        setStateLoad(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [searchParams]);

  const {
    onSearch,
    setDateCheckout,
    setDateStartFrom,
    setNameType,
    searchQuery,
    setSearchQuery,
    setStateHotelRate,
    stateMinPrice,
    stateMaxPrice,
    setStateMinPrice,
    setStateMaxPrice,
    setStateTrips,
    setStateAmenities,
    setStateSortPrice,
    searchQueryVariaty,
    setSearchQueryVariaty,
  } = URLSearchHotelFilteres(searchParams);

  return (
    <section>
      <div className="container">
        <div className="hotel">
          <div className="hotel__block">
            <FormSearching
              onSearch={onSearch}
              setDateCheckout={setDateCheckout}
              setDateStartFroms={setDateStartFrom}
              setNameTypes={setNameType}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          <div className="hotel__main-block-search-results">
            <ComponentFiltersSideLeft
              setStateHotelRate={setStateHotelRate}
              stateMinPrice={stateMinPrice}
              stateMaxPrice={stateMaxPrice}
              setStateMinPrice={setStateMinPrice}
              setStateMaxPrice={setStateMaxPrice}
              setStateAmenitiesOptions={setStateAmenities}
              setStateFreebiesoptions={setStateTrips}
              onSearch={onSearch}
            />
            <div className="hotel__block-uu-blb">
              <ComponentTypeHotel
                setStateSortPrice={setStateSortPrice}
                searchQueryVariaty={searchQueryVariaty}
                onSearch={onSearch}
                setSearchQueryVariaty={setSearchQueryVariaty}
                states={states}
              />
              <HotelItems user2={user2} stateLoad={stateLoad} states={states} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResultsHotels;
