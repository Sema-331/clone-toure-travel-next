"use client";

import { useAppDispatch } from "@/helperRedux/helperRedux";
import { handlePuchValue } from "@/slice/slices";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const URLSearchFlights = ({ searchParams }: any) => {
  const dispatch = useAppDispatch();

  const [test, setTest] = useState([]);
  // console.log(states);
  const search = useSearchParams();
  const [nameAirportFrom, setNameAirportFrom] = useState<string | null>(
    search ? search.get("name_airport_from") : ""
  );
  const [nameAirportTo, setNameAirportTo] = useState<string | null>(
    search ? search.get("name_airport_to") : ""
  );
  const [nameType, setNameType] = useState<string | null>(
    search ? search.get("type") : ""
  );

  const [dateStartFrom, setDateStartFrom] = useState<string | null>(
    search ? search.get("date_from") : ""
  );
  const [stateMinPrice, setStateMinPrice] = useState<string | null>(
    search ? search.get("min_price") : "0"
  );
  //   console.log(stateMinPrice)
  const [stateMaxPrice, setStateMaxPrice] = useState<string | null>(
    search ? search.get("max_price") : ""
  );
  const [stateNameAirlines, setStateNameAirlines] = useState<string[] | null>(
    search ? search.getAll("name_airlines") : []
  );

  console.log(
    stateNameAirlines,
    stateNameAirlines?.length,
    typeof stateNameAirlines
  );

  const [stateTrips, setStateTrips] = useState<string[] | null>(
    search ? search.getAll("trips") : []
  );
  //   const [rate, setRate] = useState<string | null>(
  //     search ? search.get("min_price") : '0')

  const [stateRateRoute, setStateRateRoute] = useState<string | null>(
    search ? search.get("route_rate") : "0"
  );

  const [stateSearch, setStateSearch] = useState<string | null>(
    search ? search.get("sort_price") : ""
  );

  const [stateSortdate, setStateSortDate] = useState<string | null>(
    search ? search.get("sort_date") : ""
  );

  const router = useRouter();

  console.log(nameAirportFrom);

  console.log(stateNameAirlines);
  const onSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      const encodedSearchQuery = nameAirportFrom
        ? encodeURI(nameAirportFrom)
        : "";
      const encodedSearchQueryVariaty = nameAirportTo
        ? encodeURI(nameAirportTo)
        : "";
      const encodedSearchQuerySort = nameType ? encodeURI(nameType) : "";
      const encodedHotel_rate = dateStartFrom ? encodeURI(dateStartFrom) : "";
      const encodedHotel_airlines = stateNameAirlines
        ? stateNameAirlines!.map((item) => encodeURI(item)).join(",")
        : "";
      const encodedHotel_trips = stateTrips
        ? stateTrips!.map((item) => encodeURI(item)).join(",")
        : "";
      const min_price = stateMinPrice ? encodeURI(stateMinPrice) : "";
      const max_price = stateMaxPrice ? encodeURI(stateMaxPrice) : "";
      // const rate_fly = rate ? encodeURI(rate) : "0";
      const encodedstateRateRoute = stateRateRoute
        ? encodeURI(stateRateRoute)
        : "";
      const encodStateSearch = stateSearch ? encodeURI(stateSearch) : "";
      const encodSortDate = stateSortdate ? encodeURI(stateSortdate) : "";
      console.log(encodedHotel_airlines);
      console.log(encodedHotel_airlines);
      // Собираем URL-строку только с заполненными параметрами
      const queryParams = [];
      if (encodedSearchQuery)
        queryParams.push(`name_airport_from=${encodedSearchQuery}`);
      if (encodedSearchQueryVariaty)
        queryParams.push(`name_airport_to=${encodedSearchQueryVariaty}`);
      if (encodedSearchQuerySort)
        queryParams.push(`type=${encodedSearchQuerySort}`);
      if (min_price) queryParams.push(`min_price=${min_price}`);
      if (max_price) queryParams.push(`max_price=${max_price}`);
      if (encodedHotel_rate) queryParams.push(`date_from=${encodedHotel_rate}`);
      if (encodedHotel_airlines)
        queryParams.push(`name_airlines=${encodedHotel_airlines}`);
      if (encodedHotel_trips) queryParams.push(`trips=${encodedHotel_trips}`);
      // if(rate_fly) queryParams.push(`route_rate=${rate_fly}`)
      if (encodedstateRateRoute)
        queryParams.push(`route_rate=${encodedstateRateRoute}`);
      if (encodStateSearch) queryParams.push(`sort_price=${encodStateSearch}`);
      if (encodSortDate) queryParams.push(`sort_date=${encodSortDate}`);

      console.log(encodedHotel_rate);
      // Собираем новый URL
      const queryString = queryParams.join("&");
      const newUrl = queryString
        ? `/FindFly/FlightList_result?${queryString}`
        : "/FindFly";

      console.log(newUrl);
      // Перенаправляем пользователя на новый URL
      router.push(newUrl);
      console.log("ggghgfdjkdmfnghufdkdmnghjfdkmfgnhjfdkmfgnjfdkmfnghfjdkm");
    },
    [
      nameAirportFrom,
      nameAirportTo,
      nameType,
      dateStartFrom,
      stateMinPrice,
      stateMaxPrice,
      stateNameAirlines,
      stateTrips,
      stateRateRoute,
      stateSearch,
      stateSortdate,
    ]
  );

  return {
    onSearch,
    setStateSortDate,
    setStateSearch,
    setStateRateRoute,
    setStateTrips,
    setStateNameAirlines,
    setStateMaxPrice,
    setStateMinPrice,
    setDateStartFrom,
    setNameType,
    setNameAirportFrom,
    setNameAirportTo,
    test,
    setTest,
    stateMinPrice,
    stateMaxPrice,
  };
};

export default URLSearchFlights;
