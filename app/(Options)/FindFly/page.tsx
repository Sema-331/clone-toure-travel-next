import Hero from "@/components/FlyghtOption/Hero/Hero";
import Options from "@/components/FlyghtOption/Options/Options";
import Places from "@/components/FlyghtOption/Places/Places";
import Tender from "@/components/FlyghtOption/Tender/Tender";
import { authOptions } from "@/type-libs/lib";
import { getServerSession } from "next-auth";
import React from "react";

interface getSearchParams {
  searchParams: {
    name_airport_from: string;
    name_airport_to: string;
    type: string;
    date_from: Date;
  };
}

const FindFly = async ({ searchParams }: getSearchParams) => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div>{session?.token?.userName}</div>
      <Hero searchParams={searchParams} />
      <Places />
      <Options searchParams={searchParams} />
      <Tender />
    </>
  );
};

export default FindFly;
