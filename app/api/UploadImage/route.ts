import { db } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const { image } = res;
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const result = await db.user.update({
      where: {
        email: session.user.email ?? '', // Используем email из сессии
      },
      data: {
        image: image,
      },
    });

    return NextResponse.json({ result }, { status: 201 });
  } catch (error) {
    console.error("Error updating image URL:", error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
