// import { NextApiRequest, NextApiResponse } from 'next';
// import { prisma } from '@/prismaData/db';
// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(req: NextRequest, res: NextResponse) {
//   try {
//     const { searchParams } = new URL(req.url);
//     // const page = searchParams.get("page") || 1;
//     // const search = searchParams.get("search") || "";
//     // const variaty = searchParams.get("variaty") || "";
//     // const sort_price = searchParams.get("sort_price") || 'asc';
//     // const rate = searchParams.get("hotel_rate") || '';
//     // const freebies_options = searchParams.get("freebies_options") || '';
//     // const amenities_options = searchParams.get("amenities_options") || '';
//     // const min_price = searchParams.get("min_price") || '';
//     // const max_price = searchParams.get("max_price") || '';
//     // const sortOrder: string = sort_price === 'asc' || sort_price === 'desc' ? sort_price : 'asc';
//     const name_airport_from = searchParams.get('name_airport_from') || ''
//     const name_airport_to = searchParams.get('name_airport_to') || ''
//     const type = searchParams.get('type') || ''
//     const rate = searchParams.get('rate_route') || '';
//     const min_price = searchParams.get("min_price") || 0;
//     const max_price = searchParams.get("max_price")
//     const name_company = searchParams.get("name_company") || '';
//     const trips = searchParams.get("trips") || '';
//     const sort_price = searchParams.get("sort_price") || 'asc';
//     const sortOrder: string = sort_price === 'asc' || sort_price === 'desc' ? sort_price : 'asc';
//     const date_from = searchParams.get('date_from') ? new Date(searchParams.get('date_from')) : undefined;
//     if (!name_airport_from && name_airport_to && type && min_price) {
//         console.log('req.query:', name_airport_from, name_airport_to, type, min_price);
//       return NextResponse.json({ message: 'Query parameter miss' });
//     }

//     const priceFilter: {
//       gte?: number;
//       // lte?: number;
//     } = {};

//     if (min_price) priceFilter.gte = parseFloat(min_price);
//     // if (max_price) priceFilter.lte = Number(max_price);

//     // const whereClause: any = {
//     //   from_airport: {
//     //     name_airport: {
//     //       contains: name_airport_from,
//     //     },
//     //   },
//     //   to_airport: {
//     //     name_airport: {
//     //       contains: name_airport_to,
//     //     },
//     //   },
//     //   time_fly_from: {
//     //     gte: date_from,
//     //   },
//     //   idTypeClass: {
//     //     some: {
//     //       name_type: {
//     //         contains: type,
//     //       },
//     //     },
//     //   },
//     // };

//     // const whereClause: any = {
//     //   from_airport: {
//     //     name_airport: {
//     //       contains: name_airport_from,
//     //     },
//     //   },
//     //   to_airport: {
//     //     name_airport: {
//     //       contains: name_airport_to,
//     //     },
//     //   },
//     //   time_fly_from: {
//     //     gte: date_from,
//     //   },
//     //   idTypeClass: {
//     //     some: {
//     //       name_type: {
//     //         contains: type,
//     //       },
//     //     },
//     //   },
//     // };

//     // if (Object.keys(priceFilter).length > 0) {
//     //   whereClause.price = priceFilter;
//     // }

//     const whereClause: any = {
//       from_airport: {
//         name_airport: {
//           contains: name_airport_from,
//         },
//       },
//       to_airport: {
//         name_airport: {
//           contains: name_airport_to,
//         },
//       },
//       time_fly_from: {
//         gte: date_from,
//       },
//       idTypeClass: {
//         some: {
//           name_type: {
//             contains: type,
//           },
//         },
//       },
//     };

//     // Добавляем фильтр по цене только если указано значение min_price
//     if (min_price) {
//       whereClause.price = priceFilter;
//     }

//     const products = await prisma.table_route.findMany({
//         // where: {
//         //   from_airport: {
//         //     name_airport: {
//         //       contains: name_airport_from,
//         //     },
//         //   },
//         //   to_airport: {
//         //     name_airport: {
//         //       contains: name_airport_to,
//         //     },
//         //   },
//         //   price: {
//         //     gte: min_price ? Number(min_price) : undefined,
//         //     // lte: max_price ? Number(max_price) : undefined,
//         //   },
//         //   time_fly_from: {
//         //     gte: date_from,
//         //   },
//         //   idTypeClass: {
//         //     some: {
//         //       name_type: {
//         //         contains: type,
//         //       },
//         //     },
//         //   },
//         // },
//         // include: {
//         //   from_airport: true,
//         //   to_airport: true,
//         //   idTypeClass: {
//         //     where: {
//         //       name_type: {
//         //         contains: type,
//         //       },
//         //     },
//         //   },
//         // },
//         // orderBy: {
//         //   price: sortOrder,
//         // },
//         where: whereClause,
//           include: {
//             id_table_comp: true,
//             from_airport: true,
//             to_airport: true,
//             idTypeClass: true,
//             review_table_single_fly: true
//           },
//       });
//     console.log('req.query:'+ name_airport_from, name_airport_to, type, min_price);
//     return NextResponse.json(products);
//   } catch (error) {
//     console.error('Error searching products:', error);
//     return NextResponse.json({ message: 'Internal server error' });
//   }
// }

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prismaData/db';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const name_airport_from = searchParams.get('name_airport_from') || '';
    const name_airport_to = searchParams.get('name_airport_to') || '';
    const type = searchParams.get('type') || '';
    const min_price = searchParams.get("min_price") || '0';
    // const date_from = searchParams.get('date_from') ? new Date(searchParams.get('date_from')) : undefined;
    const dateFromString = searchParams.get('date_from_hotel');
    const date_from = dateFromString ? new Date(dateFromString) : undefined;
    const name_airlines = searchParams.get('name_airlines') || '';
    const rateFilter = parseFloat(searchParams.get("route_rate") || '0');
    const trips = searchParams.get("trips") ? searchParams.get("trips")!.split(",") : [];
    const sort_price = searchParams.get("sort_price") || 'asc';
    const sort_date = searchParams.get("sort_date") || 'asc';
    // const type_class = searchParams.get("type_class") || '';
    const typeClassArray = name_airlines.split(',').map(item => item.trim());
    // const tripsUpdate = trips.split(',').map(item => item.trim());

    // Parse min_price to a number
    const minPriceNumber = parseFloat(min_price);

    // Construct the price filter
    const priceFilter: { gte?: number } = {};
    if (!isNaN(minPriceNumber)) {
      priceFilter.gte = minPriceNumber;
    }

    const whereClause: any = {
      from_airport: {
        name_airport: {
          contains: name_airport_from,
        },
      },
      to_airport: {
        name_airport: {
          contains: name_airport_to,
        },
      },
      time_fly_from: {
        gte: date_from,
      },
      idTypeClass: {
        some: {
          name_type: {
            contains: type,
          },
        },
      },
      // trips: {has: {trips}}
      // rate: rate
      // id_table_comp: {
      //   name_company: {
      //     contains: name_airlines,
      //   },
      // },
    };

    // Add price filter only if it's valid
    if (priceFilter.gte !== undefined) {
      whereClause.price = priceFilter;
    }

    if (name_airlines !== 'undefined') {
      whereClause.id_table_comp = {
        name_company: {
          in: typeClassArray,
        },
      };
    }

    if (trips[0] !== 'undefined') {
      whereClause.trips = {
        hasSome: trips
      }
    }

    // const aaa = sort_price !== 'undefined' && sort_price

    const sort: any = {};
    if (sort_price !== 'undefined') {
      sort.price = sort_price;
    }

    if (sort_date !== 'undefined') {
      sort.time_fly_from = sort_date;
    }

    console.log(trips)
    console.log(typeof trips)
    console.log(name_airlines !== 'undefined')

    console.log('name_airlines: '+name_airlines, 'name_airlines: ' + typeof name_airlines, 'name_airlines: ' + name_airlines?.length, 'name_airlines: ' )
    console.log((searchParams.get('name_airlines'))?.length)
    // console.log(name_airlines.trim().length > 0)

    const products = await prisma.table_route.findMany({
      where: whereClause,
      orderBy: sort,
      include: {
        id_table_comp: true,
        from_airport: true,
        to_airport: true,
        idTypeClass: true,
        review_table_single_fly: true,
      },
    });

    const filteredProducts = products.filter(product => {
      const reviewRatings = product.review_table_single_fly.map(review => (review.rating)).filter(rating => !isNaN(rating));
      const averageRate = reviewRatings.reduce((sum, rating) => sum + rating, 0) / reviewRatings.length;
      return isNaN(rateFilter) || averageRate >= rateFilter;
    });

    console.log('req.query:', name_airport_from, name_airport_to, type, min_price, name_airlines, trips, rateFilter, sort_price, sort_date);
    return NextResponse.json(filteredProducts);
  } catch (error) {
    console.error('Error searching products:', error);
    return NextResponse.json({ message: 'Internal server error' });
  }
}
