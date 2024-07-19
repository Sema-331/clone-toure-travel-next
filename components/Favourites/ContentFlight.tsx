import React, { useState } from "react";
import Ticket from "../Account/HistoryAccount/Ticket";
import Link from "next/link";
import Image from "next/image";
import image_null from "./../../public/images/favouritesNull.svg";
import FlyRoute from "../FlyghtOption/FlyghtList_result/FlyRoute";
import FavouritesFlyRoute from "./FavouritesFlyRoute";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Loader from "@/ui/Loader/Loader";
import {
  fetchFavouritesFly,
  handleDeleteFavourites,
} from "@/services/UpdateInfoUser";

interface IntProp {
  user2: any;
  user4: any;
}

const ContentFlight = ({ user2, user4 }: IntProp) => {
  console.log("fav4");
  const queryClient = useQueryClient();

  const { data, error, isPending } = useQuery({
    queryKey: ["favourites_fly"],
    queryFn: fetchFavouritesFly,
  });

  const mutationDelete = useMutation({
    mutationFn: handleDeleteFavourites,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favourites_fly"] });
    },
  });

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    mutationDelete.mutate();
  };

  console.log(data?.user2);

  if (isPending) {
    return <Loader />;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
      {data?.user2.length === 0 ? (
        <div className="favourites__block-no-ticket">
          <div className="favourites__block-description-txt-ticket">
            <h2 className="favourites__header-info-ticket">
              There is nothing in the selected fly ticket right now
            </h2>
            <p className="favourites__description-info-ticket">
              To add ticket to your favorites, go to hotel
            </p>
            <Link href="/FindFly" className="favourites__btn-go-to-ticket">
              Go to
            </Link>
          </div>
          <div className="favourites__block-image-uu-ticket">
            <Image
              src={image_null}
              alt="image_no_hotel"
              className="favourites__image-uu-ticket"
            />
          </div>
        </div>
      ) : (
        <>
          <button type="submit" onClick={handleDelete}>
            DELETE
          </button>
          {data?.user2.map((item: any) => (
            <FavouritesFlyRoute
              item={item}
              user2={user2}
              key={item.id}
              user4={user4}
            />
          ))}
          {/* <Ticket />
          <Ticket />
          <Ticket /> */}
        </>
      )}
    </>
  );
};

export default ContentFlight;
