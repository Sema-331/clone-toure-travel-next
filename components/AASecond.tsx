// import { prisma } from '@/prismaData/db'
// import React, { useEffect } from 'react'
// import AA from './AA'

// interface PropsItem {

// }

// interface getSearchParams {
//     searchParams: {
//       search: string;
//     };
//     posts: any
// }

// const getPosts = async ({
//   searchParams,
// }: getSearchParams): Promise<PropsItem[]> => {
//   const res = await fetch(
//     `http://localhost:3000/api/search?search=${searchParams.search}`
//   );
//   return res.json();
// };

// const AASecond = async ({ searchParams, posts }: getSearchParams) => {

//    const res = await getPosts({ searchParams });

//   return (
//     <div>
//         {res.map((item) => (
//           <>{item.id}{item.price}</>
//       ))}
//         <AA />
//         {
//             posts.map((item) => (
//                 <>{item.id}{item.price}</>
//             ))
//         }
//     </div>
//   )
// }

// export default AASecond
"use client"

import { prisma } from '@/prismaData/db'
import React, { useEffect, useState } from 'react'
import AA from './AA'
import AAA from './AAA';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface PropsItem {

}

interface getSearchParams {
    searchParams: {
      search: string;
      variaty: string;
      sort_price: string;
    };
    posts: any
}

const AASecond = ({ searchParams, posts }: getSearchParams) => {

  const [state, setState] = useState([])

  const [stateCount, setStateCount] = useState<number>(0)
  const [hoverState, setHoverState] = useState<number>(0)

  // useEffect(() => {
  //   const count = setInterval(() => setStateCount(prev =>
  //     prev + 1
  //   ), 1000)
  //   return () => {
  //     clearInterval(count)
  //   }
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/search?search=${searchParams.search}&variaty=${searchParams.variaty}&sort_price=${searchParams.sort_price}`);
        const data = await res.json();
        setState(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [searchParams]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/TestSearchURL');
        const data = await res.json();
        setState(data.user2);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [])

  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("search") : ""
  );
  const [searchQueryVariaty, setSearchQueryVariaty] = useState<string | null>(
    search ? search.get("variaty") : ""
  );
  const [stateSearch, setStateSearch] = useState<string | null>(
    search ? search.get("sort_price") : ""
  );

  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
  
    const encodedSearchQuery = searchQuery ? encodeURI(searchQuery) : "";
    const encodedSearchQueryVariaty = searchQueryVariaty ? encodeURI(searchQueryVariaty) : "";
    const encodedSearchQuerySort = stateSearch ? encodeURI(stateSearch) : "";
  
    // Собираем URL-строку только с заполненными параметрами
    const queryParams = [];
    if (encodedSearchQuery) queryParams.push(`search=${encodedSearchQuery}`);
    if (encodedSearchQueryVariaty) queryParams.push(`variaty=${encodedSearchQueryVariaty}`);
    if (encodedSearchQuerySort) queryParams.push(`sort_price=${encodedSearchQuerySort}`);
    
    // Собираем новый URL 
    const queryString = queryParams.join("&");
    const newUrl = queryString ? `/test?${queryString}` : "/test";
  
    console.log(newUrl)
    // Перенаправляем пользователя на новый URL
    router.push(newUrl);
  };

  console.log(state)

  const pathname = usePathname();
  const searchParamssecond = useSearchParams();
  const currentPage = Number(searchParamssecond.get('page')) || 1;
 
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div>
        {state.length > 0 ? state.map((item: any) => (
          <>{item.id}{item.price}</>
      )) : null}
        <AA onSearch={onSearch} setSearchQuery={setSearchQuery} setSearchQueryVariaty={setSearchQueryVariaty} setStateSearch={setStateSearch} />
        <AAA onSearch={onSearch} setSearchQuery={setSearchQuery} />
        {/* {
            posts.map((item) => (
                <>{item.id}{item.price}</>
            ))
        } */}
        {/* <p onMouseEnter={() => }>{stateCount}</p> */}
    </div>
  )
}

export default AASecond