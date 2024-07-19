import { db, prisma } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { getServerSession } from "next-auth";

export const getReviews = async () => {
  return await db.table_Reviews.findMany({
    include: {
      id_user: true,
    },
  });
};

export const getUser = async () => {
  const session = await getServerSession(authOptions);
  return await db.user.findFirst({
    where: {
      email: session?.user.email,
    },
  });
};

export const getFavouuritesHotel = async (userId: any) => {
  return await db.favourites_hotel.findFirst({
    where: {
      userId: userId,
    },
  });
};

export const getFavouritesTicket = async (userId: any) => {
  return await db.table_favourites_fly.findFirst({
    where: {
      idUser: userId,
    },
  });
};

export const getUserUnique = async (session: any) => {
  return await db.user.findUnique({
    where: {
      email: session ? session.user.email! : "null",
    },
  });
};

export const getTableRoutes = async (ticket_id: number) => {
  return await prisma.table_route.findMany({
    where: {
      id: Number(ticket_id),
    },
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
            where: {
              idClassType: Number(ticket_id),
            },
            include: {
              id_table_ticket: true,
            },
          },
        },
      },
    },
  });
};

export const getTableTickets = async (ticket_id: number) => {
  return await prisma.table_ticket.findMany({
    include: {
      classTypeTicket: {
        where: {
          idClassType: Number(ticket_id),
        },
        include: {
          id_table_ticket: true,
        },
      },
      id_table_route: true,
    },
  });
};

export const getReviewSingleTicket = async (ticket_id: number) => {
  return await db.review_table_single_fly.findMany({
    where: {
      fly_route_id: Number(ticket_id),
    },
    include: {
      user: true,
    },
  });
};

export const getReviewSingles = async () => {
  return await db.review_table_single_fly.findMany({
    include: {
      user: true,
    },
  });
};

export const getTableRouteBooking = async (ticket_id: number) => {
  return await prisma.table_route.findMany({
    where: {
      id: Number(ticket_id),
    },
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
          classTypeTicket: true,
        },
      },
    },
  });
};

export const getTableTicketSingle = async (Book_id: number) => {
  return await prisma.table_ticket.findMany({
    where: {
      id: Number(Book_id),
    },
    include: {
      classTypeTicket: {
        include: {
          id_table_ticket: true,
        },
      },
      id_table_route: true,
    },
  });
};

export const getUserPrisma = async () => {
  const session = await getServerSession(authOptions);
  return await prisma.user.findUnique({
    where: {
      email: session ? session.user.email! : "null",
    },
  });
};

export const getTableHistoryFly = async (
  ticket_id: number,
  Book_id: number
) => {
  return await db.table_history_fly.findFirst({
    where: {
      idTableRoute: Number(ticket_id),
    },
    include: {
      id_table_route_history: {
        include: {
          id_table_comp: true,
          Table_ticket: {
            where: {
              id: Number(Book_id),
            },
            include: {
              classTypeTicket: {
                where: {
                  idClassTypeTicket: Number(Book_id),
                },
              },
            },
          },
        },
      },
    },
  });
};

export const getTableRoomHotel = async (hotel_id: number) => {
  return await db.table_room_hotel.findMany({
    where: {
      id: Number(hotel_id),
    },
    include: {
      table_type_room: true,
    },
  });
};

export const getSingleReview = async (hotel_id: number) => {
  const session = await getServerSession(authOptions);
  return await db.review_table_single_hotel.findMany({
    where: {
      hotelId: Number(hotel_id),
      userId: session?.user.id,
    },
    include: {
      user: true,
      hotel: true,
    },
  });
};
// export const getUniqueUser = async () => {
//     const userSession = await prisma.user.findUnique({
//         where: {
//           email: session ? session.user.email! : "null",
//         },
//       });
// }
