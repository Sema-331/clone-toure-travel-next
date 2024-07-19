import { prisma } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { User, subscribe_to_updates } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export async function GET(request: any) { 

    try {
    const user = await prisma.hotel.findMany({
      include: {
          table_room_hotel: true
      },
      where: {
          table_room_hotel: {
              some: {
                  rate: '11'
              }
          }
      }
    }
  )
    return NextResponse.json({user}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Something'}, {status: 500})
    }
}
// import { prisma, db } from '@/prismaData/db';

// // Пример простого API-маршрута для поиска пользователей по имени
// export default async function GET(req: any, res: any) {
//     try {
//       const { rate } = req.query; // Получаем значение параметра запроса из URL
//       // Здесь можно выполнить логику поиска пользователей в вашей базе данных
//       // В этом примере мы просто возвращаем имя пользователя из параметра запроса
//             const user = await prisma.hotel.findMany({
//               include: {
//                   table_room_hotel: true,
//               },
//               where: {
//                   table_room_hotel: {
//                       some: {
//                           rate: rate as string
//                       }
//                   }
//               }
//             }
//           )
//       res.status(200).json({ user });
//     } catch (error) {
//       console.error('Error searching users:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   }