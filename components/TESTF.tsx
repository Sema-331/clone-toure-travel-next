"use client";

import React, { useEffect, useState } from "react";
import image from "./../../../public/images/Frame 36.png";
import Image from "next/image";
import Form from "@/components/Landing/Hero/Form";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/helperRedux/helperRedux";
import { handlePuchValue } from "@/slice/slices";
import { airlins } from "@/helpers/Helperdb/AirlinesDb";
import { dateTrip } from "@/helpers/Helperdb/DateTripTicket";
import TESTFComponent from "./TESTFComponent";

interface getSearchParams {
  searchParams: {
    name_airport_from: string;
    name_airport_to: string;
    type: string;
    min_price: string;
    max_price: string;
    name_airlines: string;
    trips: string;
    sort_price: string;
    date_from: Date;
    route_rate: string;
    sort_date: string;
  };
}

const Test22 = ({ searchParams }: getSearchParams) => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((item) => item.redSlice.arrRouteFly);
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/SearchMainPageFly?name_airport_from=${searchParams.name_airport_from}&name_airport_to=${searchParams.name_airport_to}&date_from=${searchParams.date_from}&type=${searchParams.type}&min_price=${searchParams.min_price}&max_price=${searchParams.max_price}&name_airlines=${searchParams.name_airlines}&trips=${searchParams.trips}&sort_price=${searchParams.sort_price}&route_rate=${searchParams.route_rate}&sort_date=${searchParams.sort_date}`
        );
        const data = await res.json();
        setState(data);
        dispatch(handlePuchValue(data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [searchParams]);

  console.log(selector);
  console.log(state);
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
  console.log(stateMinPrice);
  const [stateMaxPrice, setStateMaxPrice] = useState<string | null>(
    search ? search.get("max_price") : ""
  );

  const [rate, setRate] = useState<string | null>(
    search ? search.get("min_price") : "0"
  );
  // const [stateFreebiesoptions, setStateFreebiesoptions] = useState<string | null>(
  //   search ? search.get("freebies_options") : ""
  // );
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

  const [stateSearch, setStateSearch] = useState<string | null>(
    search ? search.get("sort_price") : ""
  );

  const [stateSortdate, setStateSortDate] = useState<string | null>(
    search ? search.get("sort_date") : ""
  );

  const router = useRouter();

  console.log(nameAirportFrom);
  console.log(stateTrips!.map((item) => encodeURI(item)).join(","));

  console.log(stateNameAirlines);
  const onSearch = (event: React.FormEvent) => {
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
    const rate_fly = rate ? encodeURI(rate) : "";
    const encodStateSearch = stateSearch ? encodeURI(stateSearch) : "";
    const encodSortDate = stateSortdate ? encodeURI(stateSortdate) : "";

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
    if (rate_fly) queryParams.push(`route_rate=${rate_fly}`);
    if (encodStateSearch) queryParams.push(`sort_price=${encodStateSearch}`);
    if (encodSortDate) queryParams.push(`sort_date=${encodSortDate}`);

    console.log(encodedHotel_rate);
    // Собираем новый URL
    const queryString = queryParams.join("&");
    const newUrl = queryString ? `/test2?${queryString}` : "/test2";

    console.log(newUrl);
    // Перенаправляем пользователя на новый URL
    router.push(newUrl);
  };

  const option = [
    {
      id: 1,
      value: "Emirates",
    },
    {
      id: 2,
      value: "Fly Dubay",
    },
  ];

  // const handelClickNameAirlines = (value: string) => {
  //   setStateNameAirlines((prev: any)  => [...prev, value])
  // }

  const onRemoveTypeClass = (
    typeToRemove: string,
    type: string,
    typeState: any
  ) => {
    // Создаем новый объект URLSearchParams на основе текущего URL
    const searchParams = new URLSearchParams(window.location.search);

    // Получаем текущие значения параметра "type_class"
    let typeClassValues = searchParams.getAll(type).join(",").split(",");

    // Удаляем значение typeToRemove из массива значений
    typeClassValues = typeClassValues.filter((value) => value !== typeToRemove);

    console.log(typeClassValues);

    // Обновляем параметр "type_class" в URLSearchParams
    searchParams.delete(type);
    typeClassValues.forEach((value) => {
      searchParams.append(type, value);
    });

    // Собираем новый URL
    const newUrl = `/test2?${searchParams.toString()}`;

    console.log(newUrl);
    // Перенаправляем пользователя на новый URL
    router.push(newUrl);

    // Обновляем состояние stateTypeClass
    typeState(typeClassValues);
  };

  const handleFnCheckedInput = (
    v: boolean,
    typeToRemove: string,
    type: string
  ) => {
    v
      ? onRemoveTypeClass(typeToRemove, type, setStateNameAirlines)
      : setStateNameAirlines((prev: any) => [...prev, typeToRemove]);
  };

  const [statef, setStateF] = useState(false);
  const [states, setStates] = useState(false);
  const [statet, setStatet] = useState(false);
  const [statefe, setStatefe] = useState(false);

  return (
    <>
      <div>TESTF</div>
      <form onSubmit={onSearch} action="">
        <input
          type="text"
          style={{ border: "1px solid red" }}
          onChange={(e) => setNameAirportFrom(e.target.value)}
          value={nameAirportFrom as string}
          placeholder="from"
        />
        <input
          type="text"
          style={{ border: "1px solid red" }}
          onChange={(e) => setNameAirportTo(e.target.value)}
          value={nameAirportTo as string}
          placeholder="to"
        />
        <input
          type="date"
          style={{ border: "1px solid red" }}
          onChange={(e) => setDateStartFrom(e.target.value)}
          value={dateStartFrom as string}
          placeholder="date"
        />
        <input
          type="text"
          style={{ border: "1px solid red" }}
          onChange={(e) => setNameType(e.target.value)}
          value={nameType as string}
          placeholder="text"
        />
        {/* <input type="checkbox" onClick={() => setStateNameAirlines('Emirates')}/> */}
        {
          // option.map((item) => (
          //   <input type="checkbox" key={item.id} value={item.value} onChange={() => handelClickNameAirlines(item.value)} />
          // ))
        }
        {/* <button onClick={() => handelClickNameAirlines('Emirates')}>Emirates</button> */}
        <button type="button" onClick={() => setStateMinPrice("200")}>
          price
        </button>
        <label htmlFor="">
          <input
            checked={statef}
            type="Checkbox"
            onChange={() => setStateF(!statef)}
            onClick={() =>
              handleFnCheckedInput(statef, "Emirates", "name_airlines")
            }
          />
        </label>
        <label htmlFor="">
          <input
            checked={states}
            type="Checkbox"
            onChange={() => setStates(!states)}
            onClick={() =>
              handleFnCheckedInput(states, "Fly Dubay", "name_airlines")
            }
          />
        </label>
        <label htmlFor="">
          <input
            checked={statet}
            type="Checkbox"
            onChange={() => setStatet(!statet)}
            onClick={() =>
              handleFnCheckedInput(statet, "Qatar", "name_airlines")
            }
          />
        </label>
        <label htmlFor="">
          <input
            checked={statefe}
            type="Checkbox"
            onChange={() => setStatefe(!statefe)}
            onClick={() =>
              handleFnCheckedInput(statefe, "Etihad", "name_airlines")
            }
          />
        </label>
        {dateTrip.map((item) => (
          <TESTFComponent
            setStateTrips={setStateTrips}
            key={item.id}
            item={item.value}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
      {Array.isArray(state)
        ? state.map((item: any) => (
            <>
              {item.id},,{item.rate}
            </>
          ))
        : null}
    </>
  );
};

export default Test22;

/**
 * "use client"

import React, { useEffect, useState } from 'react'
import image from './../../../public/images/Frame 36.png'
import Image from 'next/image'
import Form from '@/components/Landing/Hero/Form'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/helperRedux/helperRedux'
import { handlePuchValue } from '@/slice/slices'
import { airlins } from '@/Helperdb/AirlinesDb'


interface getSearchParams {
  searchParams: {
    name_airport_from: string;
    name_airport_to: string;
    type: string;
    min_price: string;
    max_price: string;
    name_airlines: string;
    trips: string;
    sort_price: string;
    date_from: Date
    route_rate: string
    sort_date: string
  }
}

const Test22 = ({searchParams}: getSearchParams) => {

  const dispatch = useAppDispatch()
  const selector = useAppSelector((item) => item.redSlice.arrRouteFly)
  const [state, setState] = useState([])

  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(`http://localhost:3000/api/SearchMainPageFly?name_airport_from=${searchParams.name_airport_from}&name_airport_to=${searchParams.name_airport_to}&date_from=${searchParams.date_from}&type=${searchParams.type}&min_price=${searchParams.min_price}&max_price=${searchParams.max_price}&name_airlines=${searchParams.name_airlines}&trips=${searchParams.trips}&sort_price=${searchParams.sort_price}&route_rate=${searchParams.route_rate}&sort_date=${searchParams.sort_date}`);
          const data = await res.json();
          setState(data);
          dispatch(handlePuchValue(data))
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchData();
    }, [searchParams]);

    console.log(selector)
    console.log(state)
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
      search ? search.get("min_price") : '0'
    );
    console.log(stateMinPrice)
    const [stateMaxPrice, setStateMaxPrice] = useState<string | null>(
      search ? search.get("max_price") : ""
    );

    const [rate, setRate] = useState<string | null>(
      search ? search.get("min_price") : '0')
    // const [stateFreebiesoptions, setStateFreebiesoptions] = useState<string | null>(
    //   search ? search.get("freebies_options") : ""
    // );
    const [stateNameAirlines, setStateNameAirlines] = useState<string[] | null>(search ? search.getAll("name_airlines") : []);

    console.log(stateNameAirlines, stateNameAirlines?.length, typeof stateNameAirlines)

    const [stateTrips, setStateTrips] = useState<string[] | null>(
      search ? search.getAll("trips") : []
    );

    const [stateSearch, setStateSearch] = useState<string | null>(
      search ? search.get("sort_price") : ""
    );

    const [stateSortdate, setStateSortDate] = useState<string | null>(
      search ? search.get("sort_date") : ""
    );

    const router = useRouter();
  
      console.log(nameAirportFrom)
      console.log(stateTrips!.map((item) => encodeURI(item)).join(','))

    console.log(stateNameAirlines)
    const onSearch = (event: React.FormEvent) => {
      event.preventDefault();
    
      const encodedSearchQuery = nameAirportFrom ? encodeURI(nameAirportFrom) : "";
      const encodedSearchQueryVariaty = nameAirportTo ? encodeURI(nameAirportTo) : "";
      const encodedSearchQuerySort = nameType ? encodeURI(nameType) : "";
      const encodedHotel_rate = dateStartFrom ? encodeURI(dateStartFrom) : "";
      const encodedHotel_airlines = stateNameAirlines ? stateNameAirlines!.map((item) => encodeURI(item)).join(',') : "";
      const encodedHotel_trips = stateTrips ? stateTrips!.map((item) => encodeURI(item)).join(',') : "";
      const min_price = stateMinPrice ? encodeURI(stateMinPrice) : 100;
      const max_price = stateMaxPrice ? encodeURI(stateMaxPrice) : "";
      const rate_fly = rate ? encodeURI(rate) : "0";
      const encodStateSearch = stateSearch ? encodeURI(stateSearch) : 'asc'
      const encodSortDate = stateSortdate ? encodeURI(stateSortdate) : 'asc'

      console.log(encodedHotel_airlines)
      // Собираем URL-строку только с заполненными параметрами
      const queryParams = [];
      if (encodedSearchQuery) queryParams.push(`name_airport_from=${encodedSearchQuery}`);
      if (encodedSearchQueryVariaty) queryParams.push(`name_airport_to=${encodedSearchQueryVariaty}`);
      if (encodedSearchQuerySort) queryParams.push(`type=${encodedSearchQuerySort}`);
      if (min_price) queryParams.push(`min_price=${min_price}`);
      if (max_price) queryParams.push(`max_price=${max_price}`);
      if (encodedHotel_rate) queryParams.push(`date_from=${encodedHotel_rate}`);
      if (encodedHotel_airlines) queryParams.push(`name_airlines=${encodedHotel_airlines}`);
      if (encodedHotel_trips) queryParams.push(`trips=${encodedHotel_trips}`);
      if(rate_fly) queryParams.push(`route_rate=${rate_fly}`)
      if(encodStateSearch) queryParams.push(`sort_price=${encodStateSearch}`)
      if(encodSortDate) queryParams.push(`sort_date=${encodSortDate}`)

      console.log(encodedHotel_rate)
      // Собираем новый URL 
      const queryString = queryParams.join("&");
      const newUrl = queryString ? `/test2?${queryString}` : "/test2";
    
      console.log(newUrl)
      // Перенаправляем пользователя на новый URL
      router.push(newUrl);
    };

    const option = [
      {
        id: 1,
        value: "Emirates"
      },
      {
        id: 2,
        value: "Fly Dubay"
      }
    ]

    // const handelClickNameAirlines = (value: string) => {
    //   setStateNameAirlines((prev: any)  => [...prev, value])
    // }

  return (
    <>
      <div>TESTF</div>
      <form onSubmit={onSearch} action="">
        <input type="text" style={{border: '1px solid red'}} onChange={(e) => setNameAirportFrom(e.target.value)} value={nameAirportFrom as string} placeholder='from' />
        <input type="text" style={{border: '1px solid red'}} onChange={(e) => setNameAirportTo(e.target.value)} value={nameAirportTo as string} placeholder='to' />
        <input type="date" style={{border: '1px solid red'}} onChange={(e) => setDateStartFrom(e.target.value)} value={dateStartFrom as string} placeholder='date' />
        <input type="text" style={{border: '1px solid red'}} onChange={(e) => setNameType(e.target.value)} value={nameType as string} placeholder='text' />
        {/* <input type="checkbox" onClick={() => setStateNameAirlines('Emirates')}/> */
{
  // option.map((item) => (
  //   <input type="checkbox" key={item.id} value={item.value} onChange={() => handelClickNameAirlines(item.value)} />
  // ))
}
{
  /* <button onClick={() => handelClickNameAirlines('Emirates')}>Emirates</button> */
}
//         <button type='button' onClick={() => setStateMinPrice('200')}>price</button>
//         {
//           airlins.map((item) => (
//               <label key={item.id} htmlFor="">
//                 {item.value}
//                 <input type="Checkbox" value={item.id} onClick={() => setStateNameAirlines(prev => [...prev, item.value])} />
//               </label>
//           ))
//         }
//         <button type='submit'>Submit</button>
//       </form>
//       {
//        Array.isArray(state) ? state.map((item) => (
//           <>{item.id},,{item.rate}</>
//         )) : null
//       }
//     </>
//   )
// }

// export default Test22
//  */
