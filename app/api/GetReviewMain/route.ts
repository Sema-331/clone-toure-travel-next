import { db, prisma } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { User, subscribe_to_updates } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export async function GET(request: any) { 

    try {
        const user = await db.table_Reviews.findMany({
        
            include: {
                id_user: true
            }
        })
    return NextResponse.json({user}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Something'}, {status: 500})
    }
}
