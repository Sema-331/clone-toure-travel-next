import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/prismaData/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url); 
    const type_class = searchParams.get("type_class") || '';
    const typeClassArray = type_class.split(',').map(item => item.trim());
    if (type_class.length === 0) {
        console.log('req.query:', type_class);
      return NextResponse.json({ message: 'Query parameter "type_class" is missing' });
    }

    const products = await prisma.table_ticket.findMany({
      include: {
        classTypeTicket: {
          where: {
            name_type: {in: typeClassArray}
          },
          include: {
            id_table_ticket: true
          }
        },
        id_table_route: true
      }
      // where: {
      //   OR: [
      //     { type_class: {has: type_class}}
      //   ]
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
      // }
    });
    console.log('req.query:', type_class);
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error searching products:', error);
    return NextResponse.json({ message: 'Internal server error' });
  }
}

/**
 * 
 * import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/prismaData/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const type_class = searchParams.get("type_class") || ''
    if (!type_class) {
        console.log('req.query:', type_class);
      return NextResponse.json({ message: 'Query parameter miss' });
    }

    const products = await prisma.table_ticket.findMany({
      include: {
        classTypeTicket: {
          select: {
            name_type: true
          }
        }
      }

      // where: {
      //   OR: [
      //     { type_class: {has: type_class}}
      //   ]
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
      // }
    });
    
    console.log('req.query:', type_class);
    const nameTypesArray = products.map(item => item.classTypeTicket.map((item) => item.name_type));

    // Проверяем, содержится ли каждое значение 'name_type' в массиве 'type_class'
    const matchingNameTypes = nameTypesArray.filter(nameType => type_class.includes(nameType));

    return NextResponse.json({ products });
  } catch (error) {
    console.error('Error searching products:', error);
    return NextResponse.json({ message: 'Internal server error' });
  }
}

 */