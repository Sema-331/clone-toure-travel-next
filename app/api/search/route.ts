import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/prismaData/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page") || 1;
    const search = searchParams.get("search") || "";
    const type_room = searchParams.get("type_room") || "";
    const variaty = searchParams.get("variaty") || "";
    const dateFromString = searchParams.get('date_from_hotel');
    const date_check_out = searchParams.get('date_check_out');
    const date_from = dateFromString ? new Date(dateFromString) : undefined;
    const sort_price = searchParams.get("sort_price") || 'asc';
    const rate = parseFloat(searchParams.get("hotel_rate") || '');
    const freebies_options = searchParams.get("freebies_options") ? searchParams.get("freebies_options")!.split(",") : [];
    const amenities_options = searchParams.get("amenities_options") ? searchParams.get("amenities_options")!.split(",") : [];
    const min_price = searchParams.get("min_price") || '';
    const max_price = searchParams.get("max_price") || '';
    const sortOrder: any = sort_price === 'asc' || sort_price === 'desc' ? sort_price : 'asc';
    if (!search && !variaty && !sort_price) {
        console.log('req.query:', search, variaty, sort_price);
      return NextResponse.json({ message: 'Query parameter miss' });
    }

    const minPriceNumber = parseFloat(min_price);

    const priceFilter: { gte?: number } = {};
    if (!isNaN(Number(minPriceNumber))) {
      priceFilter.gte = Number(minPriceNumber);
    }

    const whereClause: any = {
      id_hotel: {
        info_Hotel: {
          contains: search
        }
      },
      check_in_date: {
        gte: date_from
      },
      table_type_room: {
        some: {
          description_type_room: {
            contains: type_room
          }
        }
      },
      variaty_hotel: { contains: variaty }
    }

    if (priceFilter.gte !== undefined) {
      whereClause.price = priceFilter;
    }

    if (freebies_options[0] !== 'undefined') {
      whereClause.freebies_options = {
        hasSome: freebies_options
      }
    }

    if (amenities_options[0] !== 'undefined') {
      whereClause.amenities_option = {
        hasSome: amenities_options
      }
    }

    const sort: any = {};
    if (sort_price !== 'undefined') {
      sort.price = sort_price;
    }


    console.log(amenities_options, typeof amenities_options)
    console.log('price: ' + min_price)
    console.log('typeof price: '+ typeof Number(min_price))

    const products = await prisma.table_room_hotel.findMany({
      where: whereClause,
      orderBy: sort,
      include: {
        review_table_single_hotel: true
      }
      // where: {
      //   price: {gte: min_price}
      // }
      // where: {
      //   AND: [
      //     {
      //       id_hotel: {
      //         info_Hotel: {
      //           contains: search
      //         }
      //       }
      //     },
      //     { variaty_hotel: { contains: variaty } },
      //     { rate: { gt: rate === '' ? '0' : rate } }
      //   ],
      //   OR: [
      //     {price: { gt: min_price }},
      //     {price: { lt: max_price }},
      //     // { rate: { gte: rate || '0' } },
      //     { freebies_options: { has: freebies_options}},
      //     { amenities_option: { has: amenities_options}},
      //   ]
      // },
      // orderBy: {
      //   price: sortOrder,
      // }
    });

    const newRes = products.filter((item) => {
      const rew = item.review_table_single_hotel.map((item: any) => parseFloat(item.rating)).filter((fil) => !isNaN(fil))
      const averageRate = rew.reduce((accum, item) => accum + item, 0) / rew.length;
      return isNaN(rate) || averageRate >= rate
    })

    console.log('req.query:', search, variaty, sort_price, rate, freebies_options, amenities_options, min_price, max_price);
    return NextResponse.json(newRes);
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

/***
 * 
 * 
 * 
 * import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/prismaData/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page") || 1;
    const search = searchParams.get("search") || "";
    const variaty = searchParams.get("variaty") || "";
    const sort_price = searchParams.get("sort_price") || 'asc';
    if (!search && !variaty && !sort_price) {
        console.log('req.query:', search, variaty, sort_price);
      return NextResponse.json({ message: 'Query parameter miss' });
    }

    const products = await prisma.table_room_hotel.findMany({
      where: {
        OR: [
          { price: { contains: search } },
          { variaty_hotel: { contains: variaty } },
        ],
      },
      orderBy: {
        price: sort_price,
      }
    });
    console.log('req.query:', search, variaty, sort_price);
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error searching products:', error);
    return NextResponse.json({ message: 'Internal server error' });
  }
}
 */