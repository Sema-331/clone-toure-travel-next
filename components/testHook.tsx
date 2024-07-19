"use client"

import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '@/helperRedux/helperRedux';
import { handlePuchValue } from '@/slice/slices';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

interface getSearchParams {
    searchParams: {
      name_airport_from: string;
      name_airport_to: string;
      type: string;
      date_from: Date
    }
    item: any,
    ticket: any
  }

const TestHooks = ({searchParams, item, ticket}: getSearchParams) => {

  const dispatch = useAppDispatch()
  const selector = useAppSelector((item) => item.redSlice.arrRouteFly)
  const [state, setState] = useState([])

  const search = useSearchParams();
  const router = useRouter();
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/SearchMainPageFly?name_airport_from=${searchParams.name_airport_from}&name_airport_to=${searchParams.name_airport_to}&date_from=${searchParams.date_from}&type=${searchParams.type}`);
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

  function formatDateString(dateString: any) {
    const decodedDateString = decodeURIComponent(dateString);
    const date = new Date(decodedDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    console.log(dateString)
    return `${year}/${month}/${day}`;
  }

  const [adress, setAdress] = useState('Moscow')
  // const [date, setDate] = useState(new Date())

  const dates = formatDateString(new Date())
  // console.log(formatDateString(date))
  console.log(dates)

const onSearchTicket = (event: React.FormEvent) => {
  event.preventDefault()
  const newUrl = `/test2?name_airport_from=${adress}&name_airport_to=${item.airport_to}&type=Econom&date_from=${dates}`;

  router.push(newUrl);
};

// useEffect(() => {
//   const handelClick = async () => {
//   const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c14d0cfdfcmsh075ac3a0391d536p156151jsn8c050c7092a0',
// 		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
//   }
//   handelClick()
// }, [])

  return (
    <div>
      <form onSubmit={onSearchTicket} action="">
        <input type="text" onChange={(e) => setAdress(e.target.value)} value={adress} />
        <button type='submit'>Submit</button>
      </form>
        <Button variant="contained">Hello world</Button>;
        {
       Array.isArray(selector) ? selector.map((item: any) => (
          <>{item.id},,{item.rate}</>
        )) : null
      }
      <div className='trip__block-places-list-box' key={item.id}>
            <div className='trip__block-places-image'>
                <Image alt='image_places' className='trip__images-places' src={item.image} />
            </div>
            <div className='trip__block-description-place'>
                <h2 className='trip__header-places-block'>{item.title}</h2>
                <div className='trip__block-lis-box-description'>
                  <button onSubmit={onSearchTicket} type='submit'>SUBMIT</button>
                    <Button onSubmit={onSearchTicket} variant="contained" className='trip__description-places'>{item.description1}</Button>
                    <Button variant="contained" className='trip__description-places'>{item.description2}</Button>
                    <Button variant="contained" className='trip__description-places'>{item.description3}</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestHooks