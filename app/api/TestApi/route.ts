import { prisma } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { User, subscribe_to_updates } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export async function POST(request: any) { 

    try {
    const res = await request.json()
    const session = await getServerSession(authOptions);
    const {image, backgroundImage} = res;

    const updateUser = await prisma.user.update({
        where: {
          email: session?.user.email!,
        },
        data: {
            backgroundImage: backgroundImage,
            image: image, 
        },
      })

    return NextResponse.json({updateUser}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Something'}, {status: 500})
    }
}