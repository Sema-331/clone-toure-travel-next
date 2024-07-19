import { prisma } from "@/prismaData/db";
import { User, subscribe_to_updates } from "@prisma/client";
import { NextResponse } from "next/server"

export async function POST(request: any){
    // try {
    // const res = await request.json()
    // const {email, id} = res;

    //  const userEmail = await prisma.subscribe_to_updates.findUnique({
    //     where: {
    //         id: id,
    //         email: email
    //     }
    // })

    // if (userEmail) {
    //     return NextResponse.json({user: null, message: 'User with this email already exists'}, {status: 409})
    // }

    // const result = await prisma.subscribe_to_updates.create({
    //     data: {
    //         email: email
    //     }
    //  })

    // return NextResponse.json({result}, {status: 201})
    // } catch {
    //     return NextResponse.json({message: 'Something'}, {status: 500})
    // }

    try {
    const res = await request.json()
    const {email} = res;

    const result = await prisma.subscribe_to_updates.create({
    data: {
            email: email
        }
     })
    //  const getUser: subscribe_to_updates | null = await prisma.subscribe_to_updates.findUnique({
    //     where: {
    //       email: email,
    //     },
    //   })
    return NextResponse.json({result}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Something'}, {status: 500})
    }
    // if (typeof email !== 'string') {
    //     return res.status(404).send('invalid username')
    // }

    // const userEmail = await prisma.subscribe_to_updates.findUnique({
    //         where: {
    //             id: id,
    //             email: email
    //         }
    //     })
    // console.log(userEmail)
}