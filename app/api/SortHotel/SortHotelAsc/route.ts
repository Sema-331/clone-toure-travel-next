import { db, prisma } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { User, subscribe_to_updates } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export async function GET(req: any) { 

    try {
        // const body = await req.json()
        // const { variaty_hotel } = body
        const user2 = await db.table_room_hotel.findMany({
            orderBy: {
                price: 'desc'
            }
        })
    return NextResponse.json({user2}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Something'}, {status: 500})
    }
}