import { prisma } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { User, subscribe_to_updates } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export async function POST(request: any) { 

    try {
    const res = await request.json()

    const session = await getServerSession(authOptions);
    const userSession = await prisma.user.findUnique({
      where: {
        email: session?.user.email!,
      },
    }) 
    if(typeof userSession === undefined) {
        return NextResponse.json({message: 'Undefined!!!!'}, {status: 201})
    }

    if(typeof userSession === null) {
        return NextResponse.json({message: 'null!!!!'}, {status: 201})
    }

    return NextResponse.json({userSession}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Something'}, {status: 500})
    }
}