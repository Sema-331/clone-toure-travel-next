"use client";

import { useAppDispatch, useAppSelector } from "@/helperRedux/helperRedux";
import { urlSearchFormTicket } from "@/services/UpdateInfoUser";
import { handlePuchValue } from "@/slice/slices";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const URLSearchTicket = ({ searchParams }: any) => {
  const dispatch = useAppDispatch();
  const search = useSearchParams();
  const router = useRouter();
  const selector = useAppSelector((item) => item.redSlice.arrRouteFly);
  // const [state, setState] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await urlSearchFormTicket(searchParams);
        // setState(data);
        dispatch(handlePuchValue(data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [searchParams]);

  console.log(selector);
  // console.log(state);
  const searchTicket = useSearchParams();
  const [nameAirportFrom, setNameAirportFrom] = useState<string | null>(
    search ? search.get("name_airport_from") : ""
  );
  console.log(nameAirportFrom);
  const [nameAirportTo, setNameAirportTo] = useState<string | null>(
    search ? search.get("name_airport_to") : ""
  );
  console.log(nameAirportTo);
  const [nameType, setNameType] = useState<string | null>(
    search ? search.get("type") : ""
  );
  console.log(nameType);
  const [dateStartFrom, setDateStartFrom] = useState<string | null>(
    search ? search.get("date_from") : ""
  );
  console.log(dateStartFrom);
  // const routerTicket = useRouter();

  console.log(nameAirportFrom);

  const onSearchTicket = () => {
    const encodedSearchQuery = nameAirportFrom
      ? encodeURI(nameAirportFrom)
      : "";
    const encodedSearchQueryVariaty = nameAirportTo
      ? encodeURI(nameAirportTo)
      : "";
    const encodedSearchQuerySort = nameType ? encodeURI(nameType) : "";
    const encodedHotel_rate = dateStartFrom ? encodeURI(dateStartFrom) : "";
    const queryParams = [];
    if (encodedSearchQuery)
      queryParams.push(`name_airport_from=${encodedSearchQuery}`);
    if (encodedSearchQueryVariaty)
      queryParams.push(`name_airport_to=${encodedSearchQueryVariaty}`);
    if (encodedSearchQuerySort)
      queryParams.push(`type=${encodedSearchQuerySort}`);
    if (encodedHotel_rate) queryParams.push(`date_from=${encodedHotel_rate}`);
    console.log(encodedHotel_rate);
    const queryString = queryParams.join("&");
    const newUrl = queryString
      ? `/FindFly/FlightList_result?${queryString}`
      : "/FindFly";

    console.log(newUrl);
    router.push(newUrl);
  };
  return {
    setNameType,
    setDateStartFrom,
    setNameAirportTo,
    setNameAirportFrom,
    onSearchTicket,
  };
};

export default URLSearchTicket;
