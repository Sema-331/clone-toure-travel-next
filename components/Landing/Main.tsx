// import React from 'react'
// import FooterMain from "@/components/Landing/Footer/FooterMain";
// import MainHeader from "@/components/Landing/Header/MainHeader";
// import Hero from "@/components/Landing/Hero/Hero";
// import OptionsMain from "@/components/Landing/Options/OptionsMain";
// import Rewies from "@/components/Landing/Rewies/Rewies";
// import TripMain from "@/components/Landing/Trip/TripMain";
// import { db } from "@/prismaData/db";
// import { authOptions } from "@/type-libs/lib";
// import { getServerSession } from "next-auth";

// interface getSearchParams {
//     searchParams: {
//       search: string;
//       variaty: string;
//       sort_price: string;
//       hotel_rate: string;
//       freebies_options: string;
//       amenities_options: string;
//       min_price: string;
//       max_price: string
//       name_airport_from: string;
//       name_airport_to: string;
//       type: string;
//       date_from: Date
//       date_from_hotel: Date,
//       date_check_out: string,
//       type_room: string,
//     }
//   }

// const Main = async () => {
//     const session = await getServerSession(authOptions);
//     const user2 = await db.user.findFirst({
//         where: {
//             email: session?.user.email
//         }
//     })

//     return (
//       <>
//       {
//         user2?.adress ? <>lol</> : null
//       }
//         <MainHeader />
//           <main>
//             <Hero searchParams={searchParams}/>
//             <TripMain user2={user2} searchParams={searchParams} />
//             <OptionsMain />
//             <Rewies />
//           </main>
//         <FooterMain />
//       </>
//     );
// }

// export default Main
