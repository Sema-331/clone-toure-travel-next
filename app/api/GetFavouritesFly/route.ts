import { db, prisma } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { User, subscribe_to_updates } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export async function GET(request: any) { 

    try {
      const user2 = await db.table_favourites_fly.findMany({
        include: {
            id_table_route_history: {
                include: {
                    id_table_comp: true,
                    from_airport: true,
                    to_airport: true
                }
            },
          }
      })
    return NextResponse.json({user2}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Something'}, {status: 500})
    }
}