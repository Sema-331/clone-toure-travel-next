import { urlSearchFOrmHotel } from "@/services/UpdateInfoUser";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const URLSearchHotel = ({ searchParams }: any) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await urlSearchFOrmHotel(searchParams);
        setState(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [searchParams]);

  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("search") : ""
  );
  console.log(searchQuery);
  const [nameTypes, setNameTypes] = useState<string | null>(
    search ? search.get("type_room") : ""
  );
  console.log(nameTypes);
  const [dateStartFroms, setDateStartFroms] = useState<string | null>(
    search ? search.get("date_from_hotel") : ""
  );
  console.log(dateStartFroms);
  const [dateCheckOut, setDateCheckout] = useState<string | null>(
    search ? search.get("date_check_out") : ""
  );
  console.log(dateCheckOut);
  const [searchQueryVariaty, setSearchQueryVariaty] = useState<string | null>(
    search ? search.get("variaty") : ""
  );
  const router = useRouter();

  const onSearch = () => {
    // event.preventDefault();

    const encodedSearchQuery = searchQuery ? encodeURI(searchQuery) : "";
    const encodedSearchDateFrom = dateStartFroms
      ? encodeURI(dateStartFroms)
      : "";
    const encodedSearchDateCheckout = dateCheckOut
      ? encodeURI(dateCheckOut)
      : "";
    const encodedTypeRoom = nameTypes ? encodeURI(nameTypes) : "";
    const encodedSearchQueryVariaty = searchQueryVariaty
      ? encodeURI(searchQueryVariaty)
      : "";
    const queryParams = [];
    if (encodedSearchQuery) queryParams.push(`search=${encodedSearchQuery}`);
    if (encodedSearchDateFrom)
      queryParams.push(`date_from_hotel=${encodedSearchDateFrom}`);
    if (encodedSearchDateCheckout)
      queryParams.push(`date_check_out=${encodedSearchDateCheckout}`);
    if (encodedTypeRoom) queryParams.push(`type_room=${encodedTypeRoom}`);
    if (!encodedSearchQueryVariaty) queryParams.push(`variaty=Hotels`);
    const queryString = queryParams.join("&");
    console.log(queryString);
    const newUrl = queryString
      ? `/FindHotel/ResultsHotels?${queryString}`
      : "/";

    console.log(newUrl);
    router.push(newUrl);
  };
  return {
    searchQuery,
    setSearchQuery,
    onSearch,
    setNameTypes,
    setDateStartFroms,
    setDateCheckout,
  };
};

export default URLSearchHotel;
