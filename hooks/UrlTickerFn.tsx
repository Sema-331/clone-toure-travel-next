"use client";

import { useAppDispatch } from "@/helperRedux/helperRedux";
import { handlePuchValue } from "@/slice/slices";
import React from "react";

const UrlTickerFn = (searchParams: any) => {
  const dispatch = useAppDispatch();

  const fetchData = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/SearchMainPageFly?name_airport_from=${searchParams.name_airport_from}&name_airport_to=${searchParams.name_airport_to}&date_from=${searchParams.date_from}&type=${searchParams.type}`
      );
      const data = await res.json();
      // setState(data);
      dispatch(handlePuchValue(data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return fetchData;
};

export default UrlTickerFn;
