import Test4Component from '@/components/test4Component'
import TestIsr from '@/components/testISR'
import { prisma } from '@/prismaData/db'
import Image from 'next/image'
import React from 'react'

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
      variaty: string,
    }
  }

const page = async ({ searchParams }: getSearchParams) => {

  const res = await prisma.user.findMany({

  })

  return (
    <div>
      {
        res.map((item) => (
          <Image key={item.id} src={item.image ? item.image : ''} width={200} height={200} alt='image' />
        ))
      }
        <Test4Component searchParams={searchParams} />
        <TestIsr />
    </div>
  )
}

export default page

/**
 * // "use client"

// import React, { useEffect, useState } from 'react'
// import image from './../../../public/images/Frame 36.png'
// import Image from 'next/image'
// import Form from '@/components/Landing/Hero/Form'
// import { useRouter, useSearchParams } from 'next/navigation'
// import { useAppDispatch, useAppSelector } from '@/helperRedux/helperRedux'
// import { handlePuchValue } from '@/slice/slices'

// interface getSearchParams {
//     searchParams: {
//       name_airport_from: string;
//       name_airport_to: string;
//       type: string;
//       date_from: Date
//     }
//   }
  

// const Tets3 = ({searchParams}: getSearchParams) => {

//     const dispatch = useAppDispatch()
//     const selector = useAppSelector((item) => item.redSlice.arrRouteFly)
//     const [state, setState] = useState([])
  
//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const res = await fetch(`http://localhost:3000/api/SearchMainPageFly?name_airport_from=${searchParams.name_airport_from}&name_airport_to=${searchParams.name_airport_to}&date_from=${searchParams.date_from}&type=${searchParams.type}`);
//             const data = await res.json();
//             setState(data);
//             dispatch(handlePuchValue(data))
//             console.log(data)
//           } catch (error) {
//             console.error('Error fetching products:', error);
//           }
//         };
    
//         fetchData();
//       }, [searchParams]);
  
//       console.log(selector)
//       console.log(state)
//       const search = useSearchParams();
//       const [nameAirportFrom, setNameAirportFrom] = useState<string | null>(
//         search ? search.get("name_airport_from") : ""
//       );
//       const [nameAirportTo, setNameAirportTo] = useState<string | null>(
//         search ? search.get("name_airport_to") : ""
//       );
//       const [nameType, setNameType] = useState<string | null>(
//         search ? search.get("type") : ""
//       );
    
//       const [dateStartFrom, setDateStartFrom] = useState<string | null>(
//         search ? search.get("date_from") : ""
//       );
//       // const [stateMinPrice, setStateMinPrice] = useState<string | null>(
//       //   search ? search.get("min_price") : '0'
//       // );
//       // console.log(stateMinPrice)
//       // const [stateMaxPrice, setStateMaxPrice] = useState<string | null>(
//       //   search ? search.get("max_price") : ""
//       // );
  
//       // // const [stateFreebiesoptions, setStateFreebiesoptions] = useState<string | null>(
//       // //   search ? search.get("freebies_options") : ""
//       // // );
//       // const [stateNameAirlines, setStateNameAirlines] = useState<string | null>(search ? search.get("name_airlines") : '');
  
//       // console.log(stateNameAirlines, stateNameAirlines?.length, typeof stateNameAirlines)
  
//       // const [stateTrips, setStateTrips] = useState<string[] | null>(
//       //   search ? search.getAll("trips") : []
//       // );
//       const router = useRouter();
    
//         console.log(nameAirportFrom)
//         // console.log(stateTrips!.map((item) => encodeURI(item)).join(','))
  
//       // console.log(stateNameAirlines)
//       const onSearch = (event: React.FormEvent) => {
//         // event.preventDefault();
      
//         const encodedSearchQuery = nameAirportFrom ? encodeURI(nameAirportFrom) : "";
//         const encodedSearchQueryVariaty = nameAirportTo ? encodeURI(nameAirportTo) : "";
//         const encodedSearchQuerySort = nameType ? encodeURI(nameType) : "";
//         const encodedHotel_rate = dateStartFrom ? encodeURI(dateStartFrom) : "";
//         // const encodedHotel_airlines = stateNameAirlines ? encodeURI(stateNameAirlines) : "";
//         // const encodedHotel_trips = stateTrips ? stateTrips!.map((item) => encodeURI(item)).join(',') : "";
//         // const min_price = stateMinPrice ? encodeURI(stateMinPrice) : '';
//         // const max_price = stateMaxPrice ? encodeURI(stateMaxPrice) : "";
      
//         // console.log(encodedHotel_airlines)
//         // Собираем URL-строку только с заполненными параметрами
//         const queryParams = [];
//         if (encodedSearchQuery) queryParams.push(`name_airport_from=${encodedSearchQuery}`);
//         if (encodedSearchQueryVariaty) queryParams.push(`name_airport_to=${encodedSearchQueryVariaty}`);
//         if (encodedSearchQuerySort) queryParams.push(`type=${encodedSearchQuerySort}`);
//         // if (min_price) queryParams.push(`min_price=${min_price}`);
//         // if (max_price) queryParams.push(`max_price=${max_price}`);
//         if (encodedHotel_rate) queryParams.push(`date_from=${encodedHotel_rate}`);
//         // if (encodedHotel_airlines) queryParams.push(`name_airlines=${encodedHotel_airlines}`);
//         // if (encodedHotel_trips) queryParams.push(`trips=${encodedHotel_trips}`);
        
//         console.log(encodedHotel_rate)
//         // Собираем новый URL 
//         const queryString = queryParams.join("&");
//         const newUrl = queryString ? `/FindFly/FlightList_result?${queryString}` : "/FindFly";
      
//         console.log(newUrl)
//         // Перенаправляем пользователя на новый URL
//         router.push(newUrl);
//       };

//   return (
//     <div>
//         <form action="">
//             <button type='submit'>Submit</button>
//         </form>
//         {
//        Array.isArray(state) ? state.map((item: any) => (
//           <>{item.id},,{item.rate}</>
//         )) : null
//       }
//     </div>
//   )
// }

// // export const revalidate = 10

// export default Tets3

// /**
//  * import FooterMain from '@/components/Landing/Footer/FooterMain'
// import MainHeader from '@/components/Landing/Header/MainHeader'
// import Image from 'next/image'
// import './../styles/404/not-found.scss'
// import React from 'react'
// import error_image from './../public/images/404_image (1).png'
// import arrow_right from './../public/images/chevron_forward_right.png'
// import Link from 'next/link'

// const NotFound = () => {
//   return (
//     <>
//         <MainHeader />
//         <main>
//             <section>
//                 <div className='container'>
//                     <div className='not-foung-page__main-block'>
//                         <div className='not-foung-page__block-main-info'>
//                             <div className="not-foung-page__block-image">
//                                 <Image className='not-found-page__image-main' src={error_image} alt='alt' />
//                             </div>
//                             <div className='not-found-page__block'>
//                                 <h1 className='not-found-page__header-error'>#404</h1>
//                                 <p className='not-found-page__description-error'>We couldn`t find the page using your link</p>
//                                 <Link href='/' className='not-found-page__go-to-main-btn'>
//                                     <p className='not-found-page__description-btn'>go to the main page</p>
//                                     <Image src={arrow_right} alt='icon_btn' className='not-found-page__icon-arrow' />
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </main>
//         <FooterMain />
//     </>
//   )
// }

// export default NotFound
//  */
