import { db } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET() {
    try {

        const session = await getServerSession(authOptions);
        const res = await db.user.findFirst({
            where: {
                email: session?.user.email 
            }
        })

        return NextResponse.json({res}, {status: 201})
    } catch {
        return NextResponse.json({message: 'error get'}, {status: 405})
    }
} 