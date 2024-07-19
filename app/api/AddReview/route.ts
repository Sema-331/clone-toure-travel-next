import { prisma } from "@/prismaData/db";
import { NextResponse } from "next/server"

export async function POST(request: any){
    const res = await request.json()
    const {header_txt, description_txt, mark, idUser} = res;
     const result = await prisma.table_Reviews.create({
        data: {
            header_txt,
            mark,
            description_txt,
            idUser
        }
     })

    return NextResponse.json({result})
}