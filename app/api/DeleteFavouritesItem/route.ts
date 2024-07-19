import { db, prisma } from "@/prismaData/db";
import { User, subscribe_to_updates } from "@prisma/client";
import { NextResponse } from "next/server"

export async function DELETE(request: Request){
 
    try {
        const res = await request.json()
        const {userId, hotelId} = res;
        const result = await db.favourites_hotel.delete({
            where: {
                userId_hotelId: {userId, hotelId}
            }
        })
    return NextResponse.json({result}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Something'}, {status: 500})
    }
}