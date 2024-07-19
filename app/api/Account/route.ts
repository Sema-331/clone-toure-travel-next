import { prisma } from "@/prismaData/db";
import { subscribe_to_updates } from "@prisma/client";
import { NextResponse } from "next/server"

export async function POST(request: any){
    try {
        const res = await request.json()
        const {email} = res;
    
        // const result = await prisma.subscribe_to_updates.create({
        // data: {
        //         email: email
        //     }
        //  })
         const getUser: subscribe_to_updates | null = await prisma.subscribe_to_updates.findUnique({
            where: {
              email: email,
            },
          })
        return NextResponse.json({getUser}, {status: 201})
        } catch (error) {
            return NextResponse.json({message: 'Something'}, {status: 500})
        }
}