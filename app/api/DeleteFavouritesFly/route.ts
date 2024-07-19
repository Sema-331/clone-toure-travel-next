import { db, prisma } from "@/prismaData/db";
import { User, subscribe_to_updates } from "@prisma/client";
import { NextResponse } from "next/server"

export async function DELETE(request: Request){
 
    try {
        const res = await request.json()
        const {idUser, idTableRoute} = res;
        const result = await db.table_favourites_fly.deleteMany({
            where: {
                idUser: idUser,
                idTableRoute: idTableRoute
            }
        })
    return NextResponse.json({result}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Something'}, {status: 500})
    }
}