"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

interface IntTest {
  setSearchQuery: any
  setSearchQueryVariaty: any
  setStateSearch: any
  onSearch: any
}

const AA = ({setSearchQuery, setSearchQueryVariaty, setStateSearch, onSearch}: IntTest) => {

  // const search = useSearchParams();
  // const [searchQuery, setSearchQuery] = useState<string | null>(
  //   search ? search.get("search") : ""
  // );
  // const [searchQueryVariaty, setSearchQueryVariaty] = useState<string | null>(
  //   search ? search.get("variaty") : "Hotels"
  // );
  // const [stateSearch, setStateSearch] = useState<string | null>(
  //   search ? search.get("sort_price") : "asc"
  // );
  // const router = useRouter();

  // const onSearch = (event: React.FormEvent) => {
  //   event.preventDefault();
  
  //   const encodedSearchQuery = searchQuery ? encodeURI(searchQuery) : "";
  //   const encodedSearchQueryVariaty = searchQueryVariaty ? encodeURI(searchQueryVariaty) : "";
  //   const encodedSearchQuerySort = stateSearch ? encodeURI(stateSearch) : "";
  
  //   // Собираем URL-строку только с заполненными параметрами
  //   const queryParams = [];
  //   if (encodedSearchQuery) queryParams.push(`search=${encodedSearchQuery}`);
  //   if (encodedSearchQueryVariaty) queryParams.push(`variaty=${encodedSearchQueryVariaty}`);
  //   if (encodedSearchQuerySort) queryParams.push(`sort_price=${encodedSearchQuerySort}`);
    
  //   // Собираем новый URL
  //   const queryString = queryParams.join("&");
  //   const newUrl = queryString ? `/test?${queryString}` : "/test";
  
  //   // Перенаправляем пользователя на новый URL
  //   router.push(newUrl);
  // };

  // const [searchParams, setSearchParams] = useState(new URLSearchParams());
  // const addToSearchParams = (key, value) => {
  //   const params = new URLSearchParams(searchParams.toString());
  //   params.set(key, value);
  //   setSearchParams(params);
  //   const queryString = params.toString();
  //   router.push(`${pathName}?${queryString}`);
  // };

  return (
    <form onSubmit={onSearch} className="flex justify-center w-2/3">
    <>
    <>
      <button style={{border: '1px solid red'}} >Add Search</button>
      <button style={{border: '1px solid blue'}} onClick={() => setSearchQueryVariaty('Motels')}>Add Variaty</button>
      <button style={{border: '1px solid green'}} onClick={() => setStateSearch('desc')}>Add Sort Price</button>
    </>
      <>{/* <input
        style={{border: '1px solid red'}}
        value={searchQuery || ""}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-green-700 placeholder:text-zinc-400"
        placeholder="What are you looking for?"
      />
      <input
        style={{border: '1px solid red'}}
        value={searchQueryVariaty || ""}
        onChange={(event) => setSearchQueryVariaty(event.target.value)}
        className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-green-700 placeholder:text-zinc-400"
        placeholder="What are you looking for?"
      />
      <input
        style={{border: '1px solid red'}}
        value={stateSearch || ""}
        onChange={(event) => setStateSearch(event.target.value)}
        className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-green-700 placeholder:text-zinc-400"
        placeholder="What are you looking for?"
      /> */}
      {/* <button type='submit'>submit</button>
    </form> */}
    
    </>
    </>
    </form>
  )
}

export default AA