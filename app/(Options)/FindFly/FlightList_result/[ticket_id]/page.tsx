import TicketDetailedId from "@/components/FlyghtOption/FlyghtList_result/FlyResultId/TicketDetailedId";
import React from "react";
import "./../../../../../styles/Flyght/view.scss";
import "./../../../../../styles/Flyght/vars.scss";
import VariantsTicket from "@/components/FlyghtOption/FlyghtList_result/FlyResultId/VariantsTicket";
import CommentFlyRoute from "@/components/FlyghtOption/FlyghtList_result/FlyResultId/CommentFlyRoute";
import {
  getReviewSingleTicket,
  getTableRoutes,
  getTableTickets,
  getUser,
} from "@/dbQueries/dbQueries";

interface SingleInt {
  params: {
    ticket_id: number;
  };
  searchParams: {
    type_class: string;
  };
}

export async function generateMetadata({ params }: SingleInt) {
  return {
    title: `#${params.ticket_id}`,
    description: `ticket number is - ${params.ticket_id}`,
    openGraph: {
      title: `#${params.ticket_id}`,
      description: `hotel number is - ${params.ticket_id}`,
      type: "website",
      locale: "ru_Ru",
      siteName: "TourTravel",
    },
  };
}

const page = async ({ params: { ticket_id }, searchParams }: SingleInt) => {
  const data = await getTableRoutes(ticket_id);

  const itemSecond = await getTableTickets(ticket_id);
  const user2 = await getUser();
  const res = await getReviewSingleTicket(ticket_id);

  return (
    <>
      {data.map((item) => (
        <TicketDetailedId
          key={item.id}
          user2={user2}
          rest={res}
          searchParams={searchParams}
          data={data}
          item={item}
        />
      ))}
      <VariantsTicket value={ticket_id} data={data} itemSecond={itemSecond} />
      <CommentFlyRoute rest={res} data={data} />
    </>
  );
};

export async function generateStaticParams() {
  try {
    const res = await fetch("http://localhost:3000/api/GetTest");
    const data = await res.json();

    console.log("API Response:", data);

    if (!Array.isArray(data?.res)) {
      console.error("Expected an array but got:", data?.res);
      return [];
    }

    return data.res.map((item: any) => ({
      slug: item.ticket_id,
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default page;
