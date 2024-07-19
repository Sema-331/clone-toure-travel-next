import { prisma } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { User, subscribe_to_updates } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export async function POST(request: any) { 

    try {
    const res = await request.json()
    const session = await getServerSession(authOptions);
    const {email, userName, phoneNumber, date_birth, adress} = res;

    const updateData: any = {};
        if (email) updateData.email = email;
        if (userName) updateData.userName = userName;
        if (phoneNumber) updateData.phoneNumber = phoneNumber;
        if (adress) updateData.adress = adress;
        if (date_birth) updateData.date_birth = date_birth;

    const updateUser = await prisma.user.update({
        where: {
          email: session?.user.email!,
        },
        data: updateData,
      })

    return NextResponse.json({updateUser}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Something'}, {status: 500})
    }
}