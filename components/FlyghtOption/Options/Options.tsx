import React from "react";
import HeadersName from "./Headers";
import AllOptions from "./AllOptions";
import { db } from "@/prismaData/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/type-libs/lib";

const Options = async ({ searchParams }: any) => {
  const session = await getServerSession(authOptions);
  const user2 = await db.user.findFirst({
    where: {
      email: session?.user.email,
    },
  });

  return (
    <section>
      <div className="container">
        <div className="options">
          <HeadersName />
          <AllOptions user2={user2} searchParams={searchParams} />
        </div>
      </div>
    </section>
  );
};

export default Options;
