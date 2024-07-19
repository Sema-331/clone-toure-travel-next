import React from "react";
import "./../../../styles/Account/choice.scss";
import OptionsChoice from "./OptionsChoice";
import FormOptionsChangeAccount from "./FormOptionsChangeAccount";
import ServerComponent from "@/components/FlyghtOption/Header/ServerComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/type-libs/lib";
import { db } from "@/prismaData/db";

const Options = async () => {
  const session = await getServerSession(authOptions);
  const user2 = await db.user.findMany({
    where: {
      email: session?.user.email,
    },
  });

  // const handleCLick = async () => {
  // const updateUser = await prisma.user.update({
  //     where: {
  //       email: session?.user.email,
  //     },
  //     data: {
  //       userName: 'Viola the Magnificent',
  //     },
  //   })
  //   return updateUser
  // }
  // console.log(session?.user.email === user2.)

  return (
    <section>
      <div className="container">
        <div className="choice">
          {user2.map((item) => (
            <>{item.id}</>
          ))}
          <div className="choice__block">
            <OptionsChoice choice_page={"account"} />
            <div className="choice__block-account-user-info">
              <h2 className="choice__header-name-block">Account</h2>
              {user2.map((item) => (
                <FormOptionsChangeAccount key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Options;
