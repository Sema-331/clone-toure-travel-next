import React, { memo, useEffect, useState } from "react";
import ItemHotel from "../Hotel/SearchingHotel/ItemHotel";
import image_null from "./../../public/images/favouritesNull.svg";
import Image from "next/image";
import Link from "next/link";
import HotelFavouritesItem from "./hotelFavouritesItem";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/ui/Loader/Loader";

interface ItemInt {
  session: any;
  user3: any;
  user2: any;
}

interface NewInt {
  sessiom: any;
  user2: any;
}

const ContentHotel = memo(function ContHotel({
  user2,
  user3,
  session,
}: ItemInt) {
  // console.log(session === '084ee054-c87f-457e-b50f-a5d9ef270d7e', user2.email, session.email, state.user2.length)

  console.log("fav3");
  const fetchFavouritesHotel = async () => {
    const res = await fetch("/api/GetFavouritesHotel");
    if (!res.ok) {
      throw new Error("Failed to fetch favourites hotel");
    }
    return res.json();
  };

  const { data, error, isPending } = useQuery({
    queryKey: ["favourites_hotel"],
    queryFn: fetchFavouritesHotel,
  });

  console.log(data?.user2);

  if (isPending) {
    return <Loader />;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div className="favourites__block-list-box">
      {
        data.user2?.length !== 0 ? (
          <>
            {/* {
          state?.map((item) => (
            <div key={item.id}>{item.id}</div>
          ))
        } */}
            <HotelFavouritesItem user2={user2} state={data.user2} />
          </>
        ) : (
          <div className="favourites__block-no-hotel">
            <div className="favourites__block-description-txt">
              <h2 className="favourites__header-info">
                There is nothing in the selected hotels right now
              </h2>
              <p className="favourites__description-info">
                To add hotels to your favorites, go to hotel
              </p>
              <Link href="/FindHotel" className="favourites__btn-go-to">
                Go to
              </Link>
            </div>
            <div className="favourites__block-image-uu">
              <Image
                src={image_null}
                alt="image_no_hotel"
                className="favourites__image-uu"
              />
            </div>
          </div>
        )
        // {/* <ItemHotel logo_image={'/images/Rectangle 3 (8).png'} name_hotel={'CVK Park Bosphorus Hotel Istanbul'} price_hotel={240} location_hotel={'Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437'} reviews_hotel={371} />
        // <ItemHotel logo_image={'/images/Rectangle 3 (9).png'} name_hotel={'Eresin Hotels Sultanahmet - Boutique Class'} price_hotel={240} location_hotel={'Kucukayasofya No. 40 Sultanahmet, Istanbul 34022'} reviews_hotel={54} />
        // <ItemHotel logo_image={'/images/Rectangle 3 (10).png'} name_hotel={'Eresin Hotels Sultanahmet - Boutique Class'} price_hotel={104} location_hotel={'Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437'} reviews_hotel={54} />
        // <ItemHotel logo_image={'/images/Rectangle 3 (11).png'} name_hotel={'Eresin Hotels Sultanahmet - Boutique Class'} price_hotel={104} location_hotel={'Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437'} reviews_hotel={54} /> */}
      }
    </div>
  );
});

export default ContentHotel;
