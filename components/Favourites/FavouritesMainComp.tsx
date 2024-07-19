import React from "react";
import ChangeValueFavourites from "./ChangeValueFavourites";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/type-libs/lib";
import { db, prisma } from "@/prismaData/db";
import {
  getFavouritesTicket,
  getFavouuritesHotel,
  getUser,
  getUserPrisma,
} from "@/dbQueries/dbQueries";

const FavouritesMainComp = async () => {
  const userSession = await getUserPrisma();
  const user2 = await getUser();
  const user3 = await getFavouuritesHotel(user2?.id);
  const user4 = await getFavouritesTicket(user2?.id);

  return (
    <section>
      <div className="container">
        <div className="favourites">
          <div className="favourites__block">
            <h1 className="favourites__main-header">Favourites</h1>
            <ChangeValueFavourites
              user4={user4}
              user3={user3}
              user2={user2}
              session={userSession}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavouritesMainComp;
