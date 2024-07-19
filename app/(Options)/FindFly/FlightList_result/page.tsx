import FlightListResults from "@/components/FlyghtOption/FlyghtList_result/FlightListResults";
import React from "react";
import "./../../../../styles/Flyght/flyRes.scss";
import { db, prisma } from "@/prismaData/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/type-libs/lib";
import { getUser } from "@/dbQueries/dbQueries";

interface getSearchParams {
  searchParams: {
    name_airport_from: string;
    name_airport_to: string;
    type: string;
    min_price: string;
    max_price: string;
    name_airlines: string;
    trips: string;
    sort_price: string;
    date_from: Date;
    route_rate: string;
    sort_date: string;
  };
}

const FlightList = async ({ searchParams }: getSearchParams) => {
  // const session = await getServerSession(authOptions);
  // const user2 = await db.user.findFirst({
  //     where: {
  //         email: session?.user.email
  //     }
  // })

  const user2 = await getUser();

  return <FlightListResults searchParams={searchParams} user2={user2} />;
};

export default FlightList;
