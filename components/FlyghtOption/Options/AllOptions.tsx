"use client";

import { optionsArr } from "@/helpers/arr/optionsArr";
import React, { useEffect, useState } from "react";
import SingleOption from "./SingleOption";
import { useAppDispatch, useAppSelector } from "@/helperRedux/helperRedux";
import { useSearchParams } from "next/navigation";
import { handlePuchValue } from "@/slice/slices";
import { formatDateString } from "@/helpers/FormDateString";
import { fetchData } from "next-auth/client/_utils";
import UrlTickerFn from "@/hooks/UrlTickerFn";

interface PropInt {
  user2: {
    id: string;
    userName: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    lastName: string | null;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    date_birth: string | null;
  } | null;
  searchParams: {
    name_airport_from: string;
    name_airport_to: string;
    type: string;
    date_from: Date;
  };
}

const AllOptions = ({ searchParams, user2 }: PropInt) => {
  const fetchData = UrlTickerFn(searchParams);

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  return (
    <div className="options__block-places">
      {optionsArr.map((item) => (
        <SingleOption key={item.id} user2={user2} item={item} />
      ))}
    </div>
  );
};

export default AllOptions;
