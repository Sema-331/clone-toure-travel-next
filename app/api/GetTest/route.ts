import { prisma } from "@/prismaData/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await prisma.table_route.findMany({
      include: {
        idTypeClass: {
          include: {
            id_table_ticket: {
              include: {
                classTypeTicket: {
                  include: {
                    id_table_ticket: true,
                  },
                },
              },
            },
          },
        },
        id_table_comp: true,
        from_airport: true,
        to_airport: true,
        Table_ticket: {
          include: {
            classTypeTicket: {
              include: {
                id_table_ticket: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json({ res }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 405 });
  }
}
