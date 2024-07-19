// pages/api/search.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/prismaData/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("hotel") || "";
    if (!search) {
        console.log('req.query:', search);
      return NextResponse.json({ message: 'Query parameter miss' });
    }

    const products = await prisma.table_room_hotel.findMany({
      where: {
        OR: [
          { name_hotel: { contains: search } }
        ],
      }
    });
    console.log('req.query:', search);
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error searching products:', error);
    return NextResponse.json({ message: 'Internal server error' });
  }
}
// pages/api/search.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { prisma } from '@/prismaData/db';
// import { NextResponse } from 'next/server';

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         const {q: query} = req.query
//         console.log('API', query)
//         return NextResponse.json({message: 'good'})
//     } catch (error) {
//         return NextResponse.json({message: 'bad'})
//     }
// // }
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   const { searchParams } = new URL(req.url);
//   const page = searchParams.get("page") || 1;
//   const search = searchParams.get("search") || "";
//   try {
//     if (search) {
//         NextResponse.json({message: 'yes'})
//     }
//   } catch (error) {
//     NextResponse.json({message: 'no'})
//   }
//   console.log('Search', search)
// }

