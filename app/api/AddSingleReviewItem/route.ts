import { prisma } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export async function POST(request: any){
    const res = await request.json()
    const {rating, description_review, userId, hotelId} = res;
     const result = await prisma.review_table_single_hotel.create({
        data: {
            rating,
            description_review,
            userId,
            hotelId
        }
     })

    return NextResponse.json({result})
}