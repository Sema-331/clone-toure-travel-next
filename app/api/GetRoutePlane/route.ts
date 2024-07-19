import { db, prisma } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { User, subscribe_to_updates } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export async function GET(request: any) { 

    try {
        const data = await db.table_route.findMany({
            include: {
                id_table_comp: true,
                from_airport: true,
                to_airport: true,
                review_table_single_fly: true
              }
        })
    return NextResponse.json({data}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Something'}, {status: 500})
    }
}