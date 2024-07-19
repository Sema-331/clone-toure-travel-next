import { db } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export async function POST(request: Request){
 
    try {
        const res = await request.json()
        const {idUser, place, row, idTableRoute, typeClass} = res;

        const result = await db.table_history_fly.create({
            data: { 
                idTableRoute: idTableRoute,
                place: place,
                row: row,
                idUser: idUser,
                typeClass: typeClass
            }
         })
    return NextResponse.json({result}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Something'}, {status: 500})
    }
}