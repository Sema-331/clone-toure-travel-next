"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const URLSearchHotelFilteres = ({ searchParams }: any) => {
  const search = useSearchParams();
  console.log(search.get("variaty") === "Hotels");
  const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("search") : ""
  );
  const [nameType, setNameType] = useState<string | null>(
    search ? search.get("type_room") : ""
  );

  const [dateStartFrom, setDateStartFrom] = useState<string | null>(
    search ? search.get("date_from_hotel") : ""
  );
  console.log(dateStartFrom);
  const [dateCheckOut, setDateCheckout] = useState<string | null>(
    search ? search.get("date_check_out") : ""
  );
  const [searchQueryVariaty, setSearchQueryVariaty] = useState<string | null>(
    search ? search.get("variaty") : ""
  );
  const [stateHotelRate, setStateHotelRate] = useState<string | null>(
    search ? search.get("hotel_rate") : ""
  );

  const [stateMinPrice, setStateMinPrice] = useState<string | null>(
    search ? search.get("min_price") : ""
  );
  const [stateMaxPrice, setStateMaxPrice] = useState<string | null>(
    search ? search.get("max_price") : ""
  );
  const [stateTrips, setStateTrips] = useState<string[] | null>(
    search ? search.getAll("freebies_options") : []
  );
  const [stateAmenities, setStateAmenities] = useState<string[] | null>(
    search ? search.getAll("amenities_options") : []
  );
  const [stateSortPrice, setStateSortPrice] = useState<string | null>(
    search ? search.get("sort_price") : ""
  );
  console.log(stateSortPrice);

  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const encodedSearchQuery = searchQuery ? encodeURI(searchQuery) : "";
    const encodedType = nameType ? encodeURI(nameType) : "";
    const encodedDateStart = dateStartFrom ? encodeURI(dateStartFrom) : "";
    const encodedDateCheckOut = dateCheckOut ? encodeURI(dateCheckOut) : "";

    const encodedSearchQueryVariaty = searchQueryVariaty
      ? encodeURI(searchQueryVariaty)
      : "";
    const encodedHotelRate = stateHotelRate ? encodeURI(stateHotelRate) : "";

    const encodedHotel_trips = stateTrips
      ? stateTrips!.map((item) => encodeURI(item)).join(",")
      : "";
    const encodedAmenitiesOptions = stateAmenities
      ? stateAmenities.map((item) => encodeURI(item)).join(",")
      : "";
    const min_price = stateMinPrice ? encodeURI(stateMinPrice) : "";
    const max_price = stateMaxPrice ? encodeURI(stateMaxPrice) : "";
    const encodedSortPrice = stateSortPrice ? encodeURI(stateSortPrice) : "";

    const queryParams = [];
    if (encodedSearchQuery) queryParams.push(`search=${encodedSearchQuery}`);
    if (encodedType) queryParams.push(`type_room=${encodedType}`);
    if (encodedDateStart)
      queryParams.push(`date_from_hotel=${encodedDateStart}`);
    if (encodedDateCheckOut)
      queryParams.push(`date_check_out=${encodedDateCheckOut}`);

    if (encodedSearchQueryVariaty) {
      queryParams.push(`variaty=${encodedSearchQueryVariaty}`);
    } else {
      queryParams.push("variaty=Hotels");
    }
    if (encodedHotelRate) queryParams.push(`hotel_rate=${encodedHotelRate}`);
    if (min_price) queryParams.push(`min_price=${min_price}`);
    if (max_price) queryParams.push(`max_price=${max_price}`);
    if (encodedHotel_trips)
      queryParams.push(`freebies_options=${encodedHotel_trips}`);
    if (encodedAmenitiesOptions)
      queryParams.push(`amenities_options=${encodedAmenitiesOptions}`);
    if (encodedSortPrice) queryParams.push(`sort_price=${encodedSortPrice}`);

    const queryString = queryParams.join("&");
    const newUrl = queryString
      ? `/FindHotel/ResultsHotels?${queryString}`
      : "/FindHotel/ResultsHotels";

    console.log(newUrl);
    router.push(newUrl);
  };

  return {
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
  };
};

export default URLSearchHotelFilteres;
