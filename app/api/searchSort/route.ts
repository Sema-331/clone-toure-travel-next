import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/prismaData/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page") || 1;
    // const search = searchParams.get("search") || "";
    // const variaty = searchParams.get("variaty") || "";
    const sort_price = searchParams.get("sort_price") || 'asc';
    if (!sort_price ) {
        console.log('req.query:', sort_price,);
      return NextResponse.json({ message: 'Query parameter miss' });
    }

    const products = await prisma.table_room_hotel.findMany({
    //   where: {
    //     // OR: [
    //     //   { price: { contains: search } },
    //        variaty_hotel: { contains: variaty },
    //     // ],
    //   },
    });
    console.log('req.query:', sort_price, page );
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error searching products:', error);
    return NextResponse.json({ message: 'Internal server error' });
  }
}