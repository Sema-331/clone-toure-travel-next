"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import supabase from '@/lib/supabase';
import { v4 as uuidv4 } from "uuid";

interface getSearchParams {
    searchParams: {
      search: string,
      type_room: string,
      date_from_hotel: Date,
      date_check_out: string,
      min_price: string,
      max_price: string,
      freebies_options: string,
      amenities_options: string,
      variaty: string   
    }
  }

const Test4Component = ({searchParams}: getSearchParams) => {

    const [state, setState] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            // const res = await fetch(`http://localhost:3000/api/search?search=${searchParams.search}&variaty=${searchParams.variaty}&sort_price=${searchParams.sort_price}&hotel_rate=${searchParams.hotel_rate}&freebies_options=${searchParams.freebies_options}&amenities_options=${searchParams.amenities_options}&min_price=${searchParams.min_price}&max_price=${searchParams.max_price}`);
            const res = await fetch(`http://localhost:3000/api/search?search=${searchParams.search}&date_from_hotel=${searchParams.date_from_hotel}&type_room=${searchParams.type_room}&date_check_out=${searchParams.date_check_out}&min_price=${searchParams.min_price}&max_price=${searchParams.max_price}&freebies_options=${searchParams.freebies_options}&amenities_options=${searchParams.amenities_options}&variaty=${searchParams.variaty}`)
            const data = await res.json();
            setState(data);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchData();
      }, [searchParams]);

      const search = useSearchParams();
      const [searchQuery, setSearchQuery] = useState<string | null>(
        search ? search.get("search") : ""
      );
      const [nameType, setNameType] = useState<string | null>(
        search ? search.get("type_room") : ""
      );
    
      const [dateStartFrom, setDateStartFrom] = useState<string | null>(
        search ? search.get("date_from") : ""
      );
      console.log(dateStartFrom)
      const [dateCheckOut, setDateCheckout] = useState<string | null>(
        search ? search.get("date_from") : ""
      );
      console.log(dateCheckOut)
      const [searchQueryVariaty, setSearchQueryVariaty] = useState<string | null>(
        search ? search.get("variaty") : ""
      );

      // useEffect(() => {
      //   if (!searchQueryVariaty) {
      //     router.push('/test4?variaty=Hotels')
      //   }
      // }, [])
    //   const [stateSearch, setStateSearch] = useState<string | null>(
    //     search ? search.get("sort_price") : ""
    //   );
    
    //   const [stateHotelRate, setStateHotelRate] = useState<string | null>(
    //     search ? search.get("hotel_rate") : ""
    //   );
      const [stateMinPrice, setStateMinPrice] = useState<string | null>(
        search ? search.get("min_price") : ""
      );
      const [stateMaxPrice, setStateMaxPrice] = useState<string | null>(
        search ? search.get("max_price") : ""
      );
      const [stateTrips, setStateTrips] = useState<string[] | null>(
        search ? search.getAll("freebies_options") : []
      );
      const [stateAmenities, setStateAmenities] = useState<string[] | null>(
        search ? search.getAll("amenities_options") : []
      );
      // const [stateFreebiesoptions, setStateFreebiesoptions] = useState<string | null>(
      //   search ? search.get("freebies_options") : ""
      // );
    //   const [stateFreebiesoptions, setStateFreebiesoptions] = useState<string[] | null>(search ? search.getAll("freebies_options") : []);

    //   const [stateAmenitiesOptions, setStateAmenitiesOptions] = useState<string[] | null>(
    //     search ? search.getAll("amenities_options") : []
    //   );
      const router = useRouter();
    
      const onSearch = (event: React.FormEvent) => {
        event.preventDefault();
      
        const encodedSearchQuery = searchQuery ? encodeURI(searchQuery) : "";
        const encodedSearchDateFrom = dateStartFrom ? encodeURI(dateStartFrom) : '';
        const encodedSearchDateCheckout = dateCheckOut ? encodeURI(dateCheckOut) : '';
        const encodedTypeRoom = nameType ? encodeURI(nameType) : '';
        const encodedMinPrice = stateMinPrice ? encodeURI(stateMinPrice) : ''
        const encodedMaxPrice = stateMaxPrice ? encodeURI(stateMaxPrice) : ''
        const encodedHotel_trips = stateTrips ? stateTrips!.map((item) => encodeURI(item)).join(',') : "";
        const encodedAmenitiesOptions = stateAmenities ? stateAmenities.map((item) => encodeURI(item)).join(',') : ''
        const encodedSearchQueryVariaty = searchQueryVariaty ? encodeURI(searchQueryVariaty) : "";
        // const encodedSearchQuerySort = stateSearch ? encodeURI(stateSearch) : "";
        // const encodedHotel_rate = stateHotelRate ? encodeURI(stateHotelRate) : "";
        // const encodedHotel_freebiesOption = stateFreebiesoptions ? stateFreebiesoptions!.map(option => encodeURI(option)).join(',') : "";
        // const encodedHotel_amenities_option = stateAmenitiesOptions ? stateAmenitiesOptions!.map((item) => encodeURI(item)).join(',') : "";
        // const min_price = stateMinPrice ? encodeURI(stateMinPrice) : "";
        // const max_price = stateMaxPrice ? encodeURI(stateMaxPrice) : "";
      
        // console.log(encodedHotel_freebiesOption)
        // Собираем URL-строку только с заполненными параметрами
        const queryParams = [];
        if (encodedSearchQuery) queryParams.push(`search=${encodedSearchQuery}`);
        if (encodedSearchDateFrom) queryParams.push(`date_from=${encodedSearchDateFrom}`)
        if (encodedSearchDateCheckout) queryParams.push(`date_check_out=${encodedSearchDateCheckout}`)
        if (encodedTypeRoom) queryParams.push(`type_room=${encodedTypeRoom}`)
        if (encodedMinPrice) queryParams.push(`min_price=${encodedMinPrice}`)
        if (encodedMaxPrice) queryParams.push(`stateMaxPrice=${encodedMaxPrice}`)
        if (encodedHotel_trips) queryParams.push(`freebies_options=${encodedHotel_trips}`);
        if (encodedAmenitiesOptions) queryParams.push(`amenities_options=${encodedAmenitiesOptions}`)
        if (encodedSearchQueryVariaty) queryParams.push(`variaty=${encodedSearchQueryVariaty}`);
        // if (encodedSearchQuerySort) queryParams.push(`sort_price=${encodedSearchQuerySort}`);
        // if (min_price) queryParams.push(`min_price=${min_price}`);
        // if (max_price) queryParams.push(`max_price=${max_price}`);
        // if (encodedHotel_rate) queryParams.push(`hotel_rate=${encodedHotel_rate}`);
        // if (encodedHotel_freebiesOption) queryParams.push(`freebies_options=${encodedHotel_freebiesOption}`);
        // if (encodedHotel_amenities_option) queryParams.push(`amenities_options=${encodedHotel_amenities_option}`);
        
        // console.log(encodedHotel_rate)
        // Собираем новый URL 
        const queryString = queryParams.join("&");
        const newUrl = queryString ? `/test4?${queryString}` : "test4";
      
        console.log(newUrl)
        // Перенаправляем пользователя на новый URL
        router.push(newUrl);
      };

      function formatDateString(dateString: any, day_value?: any) {
        const decodedDateString = decodeURIComponent(new Date().toString());
        const date = new Date(decodedDateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0');
        const date_check_out = Number(day) + day_value ? Number(day_value) : 0
        console.log(day)
        console.log(date_check_out)
        return `${year}/${month}/${date_check_out}`;
      }

    //   const dates = formatDateString(new Date())

      console.log(state)
      console.log(dateStartFrom)
      
      const [posts, setPosts]=useState([])
      const [pageNumber, setPageNumber]= useState(1)
      const [postNumber]= useState(5)
  
  
      const currentPageNumber = (pageNumber * postNumber) - postNumber  
      const paginatedPosts = posts.splice(currentPageNumber, postNumber)
  
      const handlePrev =()=>{
          if(pageNumber === 1) return
          setPageNumber(pageNumber - 1)
      }
      const handleNext =()=>{
          setPageNumber(pageNumber + 1)
      }
  
      useEffect(()=>{
  
          fetch('https://jsonplaceholder.typicode.com/posts?_limit=50')
          .then(res => res.json())
          .then(data=>{
              setPosts(data)
          })
      }, [])   

      /**test upload image */


      const [file, setFile] = useState<File | null>(null);

      const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          setFile(e.target.files[0]);
        }
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!file) return;
    
        const filename = `${uuidv4()}-${file.name}`;
    
        const { data, error } = await supabase.storage
          .from('second_bucket')
          .upload(filename, file, {
            cacheControl: '3600',
            upsert: false,
          });
    
        if (error) {
          console.error('Error uploading file:', error);
          return;
        }
    
        const publicUrl = supabase.storage
          .from('second_bucket')
          .getPublicUrl(filename).data.publicUrl;
    
        const res = await fetch('/api/UploadBackgroundImage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            backgroundImage: publicUrl,
          }),
        });
    
        if (res.ok) {
          console.log('Image URL saved to database successfully');
        } else {
          console.error('Error saving image URL to database');
        }
      };

  return (
    <>
    <div>
        <form action="" onSubmit={onSearch}>
            <input style={{border: '2px solid red'}} type="text" onChange={(e) => setSearchQuery(e.target.value)} />
            <input style={{border: '2px solid red'}} type="date" onChange={(e) => setDateStartFrom(formatDateString(e.target.value, 5))} />
            <input style={{border: '2px solid red'}} type="date" onChange={(e) => setDateCheckout(formatDateString(e.target.value))} />
            <input style={{border: '2px solid red'}} type="text" onChange={(e) => setNameType(e.target.value)} />
            <button type='submit' >SUBMIT</button>
        </form>
        {
           Array.isArray(state) ? state.map((item) => (
                <>{item.id}</>
            )) : null
        }
    </div>
    <div>
    <h2>Posts</h2>
    {paginatedPosts.map((post)=>(
        <div style={{border: '1px solid red'}} key={post.id}>
            <h2>{post.title} </h2>
            <p>{post.body} </p>
        </div>
    ))}
    <div>Page {pageNumber} </div>
    <div>
        <button type='button' onClick={handlePrev} >prev</button>
        <button type='button' onClick={handleNext}>next</button>
    </div>
</div>
<br /><br /><br /><br /><br />
   <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
</>
  )
}

export default Test4Component