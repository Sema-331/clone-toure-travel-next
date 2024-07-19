import { db, prisma } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { User, subscribe_to_updates } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export async function GET(request: any) { 

    try {
      const user2 = await db.favourites_hotel.findMany({
        include: {
            hotel: {
                include: {
                    id_hotel: true
                }
            }
        }
      })
    return NextResponse.json({user2}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Something'}, {status: 500})
    }
}