import Image from "next/image";
import React, { memo } from "react";
import FavouritesComponents from "./FavouritesComponents";
import Link from "next/link";
import FavouritesFly from "./FavouritesFly";
import { convertationTime } from "@/helpers/ConvertingTime";

interface ItemRoute {
  item: any;
  user2: any;
}

const FlyRoute = memo(function FlyRoute({ item, user2 }: ItemRoute) {
  // Предположим, что item.time_fly_to и item.time_fly_from представлены строками времени
  // let a = new Date(item.time_fly_to);
  // let b = new Date(item.time_fly_from);
  // // Если оба являются объектами Date, можно вычислить разницу в миллисекундах
  // let differenceInMilliseconds = (a as any) - (b as any);

  // // Переводим разницу в минуты
  // let differenceInMinutes = differenceInMilliseconds / (1000 * 60);

  let differenceInMinutes = convertationTime(
    item.time_fly_to,
    item.time_fly_from
  );

  return (
    <div data-testid={item.id} className="fly-res__list-item-ticket-buy">
      {item.id},,{user2.id}
      <div className="fly-res__block-image-ticket">
        <Image
          src={item.id_table_comp.image_company}
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
                  {item.review_table_single_fly.length === 0
                    ? "4.5*"
                    : (
                        item.review_table_single_fly.reduce(
                          (accum: number, value: { rating: string }) =>
                            accum + Number(value.rating),
                          0
                        ) / item.review_table_single_fly.length
                      ).toFixed(1)}
                </p>
                <p className="fly-res__description-gg">
                  <span>Very Good</span>
                  {item.review_table_single_fly.length} reviews
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
                      {new Date(item.time_fly_from)
                        .toLocaleTimeString()
                        .slice(0, 5)}{" "}
                      pm
                    </p>
                    <hr />
                    <p className="fly-res__description-info-fly-time-right">
                      {new Date(item.time_fly_to)
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
                      {new Date(item.time_fly_from)
                        .toLocaleTimeString()
                        .slice(0, 5)}{" "}
                      pm
                    </p>
                    <hr />
                    <p className="fly-res__description-info-fly-time-right">
                      {new Date(item.time_fly_from)
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
            <p className="fly-res__description-price-start">Starting from</p>
            <p className="fly-res__price-finaly">${item.price}</p>
          </div>
        </div>
        <div className="fly-res__more-info-detailed-ticket">
          <FavouritesFly item={item} user2={user2} />
          <Link
            data-testid={`btn_show_more-${item.id}`}
            href={`/FindFly/FlightList_result/${item.id}?type_class=Econom`}
            className="fly-res__btn-view-detailed"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
});

export default FlyRoute;
