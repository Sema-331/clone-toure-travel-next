import { db } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export async function POST(request: Request){
 
    try {
        const res = await request.json()
        const {userId, hotelId, type_room_hotel_id } = res;

        const result = await db.history_table_hotel.create({
            data: { 
                hotelId, 
                userId,
                type_room_hotel_id
            }
         })
    return NextResponse.json({result}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Something'}, {status: 500})
    }
}