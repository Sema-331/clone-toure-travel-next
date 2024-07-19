"use client";

import { optionsArr } from "@/helpers/arr/optionsArr";
import HeadersName from "@/components/FlyghtOption/Options/Headers";
import Btn from "@/components/Landing/Rewies/Btn";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import OptionsSingle from "./OptionsSingle";
import { formatDateString } from "@/helpers/FormDateString";

interface getSearchParams {
  searchParams: {
    search: string;
    variaty: string;
    date_from_hotel: Date;
    date_check_out: string;
    type_room: string;
  };
}

const OptionsHotel = ({ searchParams }: getSearchParams) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/search?search=${searchParams.search}&date_from_hotel=${searchParams.date_from_hotel}&type_room=${searchParams.type_room}&date_check_out=${searchParams.date_check_out}&variaty=Hotels`
        );
        const data = await res.json();
        setState(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <section>
      <div className="container">
        <div className="options">
          <HeadersName />
          <div className="options__block-places">
            {optionsArr.map((item) => (
              <OptionsSingle key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptionsHotel;
