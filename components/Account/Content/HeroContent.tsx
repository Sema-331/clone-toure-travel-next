import React from "react";
import HeroConentInfo from "./HeroConentInfo";
import ServerComponent from "@/components/FlyghtOption/Header/ServerComponent";
import ServerComponentEmail from "@/components/FlyghtOption/Header/ServerComponentEmail";
import { prisma } from "@/prismaData/db";
import { authOptions } from "@/type-libs/lib";
import { getServerSession } from "next-auth";
import { User } from "@/interfaces/interface";
import { getUserUnique } from "@/dbQueries/dbQueries";

interface Session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
  user: PrType;
}

type PrType = Pick<User, "email" | "image" | "id" | "name" | "userName">;

interface Int {
  session: Session;
}

const HeroContent = async () => {
  const session = await getServerSession(authOptions);
  const userSession = await getUserUnique(session);
  // console.log(userSession?.image)
  // console.log(userSession?.backgroundImage)

  return (
    <div className="board-user">
      <div className="board-user__main-block">
        <HeroConentInfo
          session={session}
          userSession={userSession}
          serverComponentEmail={<ServerComponentEmail />}
          serverComponent={<ServerComponent />}
        />
      </div>
    </div>
  );
};

export default HeroContent;

// import React from 'react'
// import HeroConentInfo from './HeroConentInfo'
// import ServerComponent from '@/components/FlyghtOption/Header/ServerComponent'
// import ServerComponentEmail from '@/components/FlyghtOption/Header/ServerComponentEmail'
// import { prisma } from '@/prismaData/db'

// const HeroContent = async () => {

//   const user = await prisma.test.findUnique({
//     where: {
//       id: 2,
//     },
//   })

//   return (
//     <div className="board-user">
//         <div className="board-user__main-block">
//             <HeroConentInfo user={user?.image} serverComponentEmail={<ServerComponentEmail />} serverComponent={<ServerComponent />} />
//         </div>
//     </div>
//   )
// }

// export default HeroContent
