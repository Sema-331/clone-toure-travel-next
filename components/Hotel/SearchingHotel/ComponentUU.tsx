// "use client"

// import { db } from '@/prismaData/db'
// import { Prisma } from '@prisma/client'
// import React, { useEffect, useState } from 'react'

// const ComponentUU = () => {

//     const [stateItem, setStateItem] = useState([])
//     const [stateVariatySort, setStateVaritySort] = useState<Prisma.SortOrder | undefined>('asc')
//     const [stateVariatyHotel, setStateVariatyHotel] = useState('Hotels')

//     useEffect(() => {
//         // Функция для загрузки элементов из базы данных и их сортировки
//         const loadItems = async () => {
//           try {
//             const user2 = await db.table_room_hotel.findMany({

//             })
//             setStateItem(user2);
//           } catch (error) {
//             console.error('Ошибка при загрузке элементов:', error);
//           }
//         };

//         loadItems();
//       }, []);

//       console.log(stateItem)

//   return (
//     <div className='hotel__block-uu-blb'>
//     {
//         stateItem.map((item) => (
//             <>{item.id}</>
//         ))
//     }
//         {/* <ComponentTypeHotel item={prodHotels} prodMotels={prodMotels} prodResorts={prodResorts} />
//         <HotelItems user2={user2} prodHotels={prodHotels} prodMotels={prodMotels} prodResorts={prodResorts} /> */}
//     </div>
//   )
// }

// export default ComponentUU
