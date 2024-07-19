import { db, prisma } from "@/prismaData/db";
import { User, subscribe_to_updates } from "@prisma/client";
import { NextResponse } from "next/server"

export async function DELETE(request: Request){
 
    try {
        const res = await request.json()
        const {id, idUser, cardholderName, card_number, expMonth, expYear, cvc} = res;
        const result = await db.credit_card_users.delete({
            where: {
                id,
                cardholderName,
                card_number,
                expMonth,
                expYear,
                cvc,
                idUser
            }
        })
    return NextResponse.json({result}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Something'}, {status: 500})
    }
}