import { prisma } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export async function POST(request: any){
    const res = await request.json()
    const {rating, description_review, userId, fly_route_id} = res;
     const result = await prisma.review_table_single_fly.create({
        data: {
            rating: rating,
            description_review: description_review,
            userId: userId,
            fly_route_id: fly_route_id
        }
     })

    return NextResponse.json({result})
}