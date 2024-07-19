import Image from "next/image";
import React from "react";
import Link from "next/link";
import image_null from "./../../public/images/favouritesNull.svg";
import FavouritesFly from "../FlyghtOption/FlyghtList_result/FavouritesFly";
import { convertationTime } from "@/helpers/ConvertingTime";

interface ItemRoute {
  item: any;
  user2: any;
  user4: any;
}

const FavouritesFlyRoute = ({ item, user2, user4 }: ItemRoute) => {
  const differenceInMinutes = convertationTime(
    item.id_table_route_history.time_fly_to,
    item.id_table_route_history.time_fly_from
  );

  return (
    <>
      {user2?.id === user4?.idUser ? (
        <div
          data-testid={`test-${item.id}`}
          className="fly-res__list-item-ticket-buy"
        >
          {item.id},,,{item.idTableRoute}
          <div className="fly-res__block-image-ticket">
            <Image
              src={item.id_table_route_history.id_table_comp.image_company}
              width={200}
              height={150}
              alt="image_logo_company_ticket"
              className="fly-res__main-image-ticket"
            />
          </div>
          <div className="fly-res__block-main-info-about-ticket">
            <div className="fly-res__block-bjb">
              <div className="fly-res__block-inside-info">
                <div className="fly-res__block-rat-price">
                  <div className="fly-res__block-rat">
                    <p className="fly-res__block-main-rat">
                      {item.id_table_route_history.rate.length === 1
                        ? Number(item.id_table_route_history.rate).toFixed(1)
                        : (
                            item.id_table_route_history.rate.reduce(
                              (accum: number, value: string) =>
                                accum + Number(value),
                              0
                            ) / item.id_table_route_history.rate.length
                          ).toFixed(1)}
                    </p>
                    <p className="fly-res__description-gg">
                      <span>Very Good</span>54 reviews
                    </p>
                  </div>
                </div>
                <div className="fly-res__block-time-flight">
                  <input
                    type="checkbox"
                    className="fly-res__input-time-fly-select"
                  />
                  <div className="fly-res__time-fly-block-inside">
                    <div className="fly-res__block-time-fly-detailed">
                      <div className="fly-res__block-insides-times">
                        <p className="fly-res__description-info-fly-time">
                          {new Date(item.id_table_route_history.time_fly_from)
                            .toLocaleTimeString()
                            .slice(0, 5)}{" "}
                          pm
                        </p>
                        <hr />
                        <p className="fly-res__description-info-fly-time-right">
                          {new Date(item.id_table_route_history.time_fly_to)
                            .toLocaleTimeString()
                            .slice(0, 5)}{" "}
                          pm
                        </p>
                      </div>
                      <p className="fly-res__description-company-airlines">
                        Emirates
                      </p>
                    </div>
                  </div>
                  <p className="fly-res__description-stopped">non stop</p>
                  <div className="fly-res__block-tt">
                    <p className="fly-res__description-tt-first">
                      {Math.floor(differenceInMinutes / 60)}h{" "}
                      {(differenceInMinutes % 60).toFixed(0)}m
                    </p>
                    <p className="fly-res__description-tt-second">EWR-BNA</p>
                  </div>
                </div>
                <div className="fly-res__block-time-flight">
                  <input
                    type="checkbox"
                    className="fly-res__input-time-fly-select"
                  />
                  <div className="fly-res__time-fly-block-inside">
                    <div className="fly-res__block-time-fly-detailed">
                      <div className="fly-res__block-insides-times">
                        <p className="fly-res__description-info-fly-time">
                          {new Date(item.id_table_route_history.time_fly_from)
                            .toLocaleTimeString()
                            .slice(0, 5)}{" "}
                          pm
                        </p>
                        <hr />
                        <p className="fly-res__description-info-fly-time-right">
                          {new Date(item.id_table_route_history.time_fly_from)
                            .toLocaleTimeString()
                            .slice(0, 5)}{" "}
                          pm
                        </p>
                      </div>
                      <p className="fly-res__description-company-airlines">
                        Emirates
                      </p>
                    </div>
                  </div>
                  <p className="fly-res__description-stopped">non stop</p>
                  <div className="fly-res__block-tt">
                    <p className="fly-res__description-tt-first">
                      {Math.floor(differenceInMinutes / 60)}h{" "}
                      {(differenceInMinutes % 60).toFixed(0)}m
                    </p>
                    <p className="fly-res__description-tt-second">EWR-BNA</p>
                  </div>
                </div>
              </div>
              <div className="fly-res__block-price">
                <p className="fly-res__description-price-start">
                  Starting from
                </p>
                <p className="fly-res__price-finaly">
                  ${item.id_table_route_history.price}
                </p>
              </div>
            </div>
            <div className="fly-res__more-info-detailed-ticket">
              <FavouritesFly item={item} user2={user2} />
              <Link
                href={`/FindFly/FlightList_result/${item.idTableRoute}`}
                className="fly-res__btn-view-detailed"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default FavouritesFlyRoute;
