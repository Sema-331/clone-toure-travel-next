import { db } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export async function POST(request: Request){
 
    try {
        const res = await request.json()
        const {cardholderName, cvc, expMonth, expYear, card_number, country_of_region, idUser} = res;

        const result = await db.credit_card_users.create({
            data: { 
                cardholderName, 
                cvc,
                expMonth,
                expYear,
                card_number,
                country_of_region,
                idUser
            }
         })
    return NextResponse.json({result}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Something'}, {status: 500})
    }
}