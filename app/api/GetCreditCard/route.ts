import { db } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        const result = await db.credit_card_users.findMany({
            where: {
                id_user: {
                    email: session?.user.email as string
                }
              }
        })

        return NextResponse.json({result}, {status: 200})
    } catch {
        return NextResponse.json({message: 'Somethings'}, {status: 405})
    }
}