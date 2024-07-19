import Image from "next/image";
import React from "react";
import star_icon from "./../../../public/images/Star.png";
import location_icon from "./../../../public/images/Location.png";
import shar_icon from "./../../../public/images/Share=True.png";
import favorites_image from "./../../../public/images/Fill=False_favourites.png";
import ComponentViewFullImages from "./ComponentViewFullImages";
import Link from "next/link";
import FavouritesComponents from "@/components/FlyghtOption/FlyghtList_result/FavouritesComponents";
import { getServerSession } from "next-auth";
import { authOptions } from "@/type-libs/lib";
import { db } from "@/prismaData/db";
import { getUser } from "@/dbQueries/dbQueries";
import { getRateSum } from "@/helpers/RateSum";

interface IntItem {
  // item: {
  //     id: number;
  //     userId: string;
  //     star_hotel: string | null;
  //     check_in_date: Date;
  //     check_out_date: Date;
  //     room_number: number;
  //     price: string;
  //     name_hotel: string;
  //     rate: string;
  //     geo_hotel: string;
  //     freebies_options: string[];
  //     amenities_option: string[];
  //     variaty_hotel: string;
  //     idHotel: number;
  //     main_image: string,
  //     images_slider: string[]
  // }[],
  item: any;
  userSecond: any;
}

const HoteIdComp = async ({ item, userSecond }: IntItem) => {
  const user2 = await getUser();

  const value = getRateSum(userSecond);

  return (
    <section>
      {item.map((item: any) => (
        <div key={item.id} className="container">
          <div className="single-hotel">
            <div className="single-hotel__main-block">
              <div className="single-hotel__block-inside">
                <div className="single-hotel__block-info-selected-hotel">
                  <div className="single-hotel__block-uu">
                    <h2 className="single-hotel__header-block">
                      {item.name_hotel}
                    </h2>
                    <div className="single-hotel__block-stars-hotel">
                      <Image
                        src={star_icon}
                        alt="star_icon"
                        className="single-hotel__image-stars"
                      />
                      <Image
                        src={star_icon}
                        alt="star_icon"
                        className="single-hotel__image-stars"
                      />
                      <Image
                        src={star_icon}
                        alt="star_icon"
                        className="single-hotel__image-stars"
                      />
                      <Image
                        src={star_icon}
                        alt="star_icon"
                        className="single-hotel__image-stars"
                      />
                      <Image
                        src={star_icon}
                        alt="star_icon"
                        className="single-hotel__image-stars"
                      />
                      <p className="single-hotel__description-count-star">
                        {item.star_hotel} Star Hotel
                      </p>
                    </div>
                  </div>
                  <div className="single-hotel__block-location">
                    <Image
                      src={location_icon}
                      alt=""
                      className="single-hotel__image-geo"
                    />
                    <p className="single-hotel__description-geo">
                      {item.geo_hotel}
                    </p>
                  </div>
                  <div className="single-hotel__block-rat">
                    <div className="single-hotel__float-count">
                      {userSecond.length === 0 ? (
                        <>5.0</>
                      ) : userSecond.length === 1 ? (
                        <>
                          {userSecond.map((item: { rating: string }) => (
                            <>{item.rating}</>
                          ))}
                        </>
                      ) : (
                        <>
                          {(
                            userSecond.reduce(
                              (prev: number, item: { rating: string }) =>
                                prev + Number(item.rating),
                              0
                            ) / userSecond.length
                          ).toFixed(1)}
                        </>
                      )}
                    </div>
                    <p className="single-hotel__description-reviews">
                      <span>
                        {Number(value) >= 4.5
                          ? "Very Good"
                          : Number(value) > 4.0 && Number(value) < 4.5
                          ? "Good"
                          : Number(value) > 3.5 && Number(value) < 4.0
                          ? "Quite"
                          : "Bad"}
                      </span>{" "}
                      371 reviews
                    </p>
                  </div>
                </div>
                <div className="single-hotel__block-price-selected-hotel">
                  <div className="single-hotel__block-price">
                    <p className="single-hotel__price-count">
                      <span>${item.price}</span>/night
                    </p>
                  </div>
                  <div className="single-hotel__block-options">
                    <FavouritesComponents user2={user2} item={item} />
                    <button className="single-hotel__share-link">
                      <Image
                        src={shar_icon}
                        alt="share_icon"
                        className="single-hotel__share-icon"
                      />
                    </button>
                    <Link
                      href={`/FindHotel/ResultsHotels/${item.id}/Booking_Hotel`}
                      className="single-hotel__book"
                    >
                      Book now
                    </Link>
                  </div>
                </div>
              </div>
              <ComponentViewFullImages item={item} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HoteIdComp;
