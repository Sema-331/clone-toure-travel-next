import { db } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET(hotel_id: any) {
    try {
        const session = await getServerSession(authOptions);
        const res = await db.review_table_single_hotel.findMany({
            where: {
                hotelId: Number(hotel_id),
                userId: session?.user.id
            },
            include: {
              user: true
            }
        })

        return NextResponse.json({res}, {status: 200})
    } catch {
        return NextResponse.json({message: 'error response'}, {status: 405})
    }
}
