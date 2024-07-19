"use client";

import React, { useEffect, useState } from "react";
import logo_ticket from "./../../../../public/images/image 40.png";
import airplane from "./../../../../public/images/airplane_black.png";
import wifi from "./../../../../public/images/Wifi.png";
import stop_watch from "./../../../../public/images/ion_stopwatch.png";
import fast_food from "./../../../../public/images/ion_fast-food.png";
import row_sit from "./../../../../public/images/rowSit.svg";
import arrow_right from "./../../../../public/images/chevron_forward_right.png";
import arrow_right_move from "./../../../../public/images/arrow_right_move.svg";
import sit from "./../../../../public/images/ic_round-airline-seat-recline-normal.png";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/helperRedux/helperRedux";
import { usePathname, useRouter } from "next/navigation";
import { convertationTime } from "@/helpers/ConvertingTime";

interface IntItem {
  item: {
    time_fly_to: Date;
    time_fly_from: Date;
    id: any;
    name_plane: string;
    id_table_comp: {
      image_company: string;
      name_company: string;
    };
    from_airport: {
      name_airport: string;
    };
    to_airport: {
      name_airport: string;
    };
  };
  itemSecond: any;
  values: number;
}

interface IntSelector {
  classTypeTicket: {
    idClassType: any;
  }[];
}

const TicketForBooking = ({ item, itemSecond, values }: IntItem) => {
  console.log("a");
  const selector = useAppSelector((item) => item.redSlice.dataCheckboxFly);
  let differenceInMinutes = convertationTime(
    item.time_fly_to,
    item.time_fly_from
  );

  const path = usePathname();

  const rtr =
    path === `/FindFly/FlightList_result/${item.id}` ? selector : itemSecond;
  // const rr = path === `/FindFly/FlightList_result/${item.id}` ?  :

  // console.log(path === '/FindFly/FlightList_result' ? true : false)
  console.log(rtr);
  return (
    <>
      {selector.map((item: IntSelector) => (
        <>
          {item.classTypeTicket.map((item) => (
            <>{item.idClassType == values ? <>Good</> : <>Bad</>}</>
          ))}
        </>
      ))}
      {/* {
        itemSecond.map((item) => (
            <>{item.classTypeTicket.map((item) => (
                <>{item.id}</>
            ))}</>
        ))
    } */}
      {
        // {
        //     itemSecond.map((value) => (
        //       <>{value.id_table_route.id}{value.classTypeTicket.map((value) => (
        //         <>{value.name_type},,,{value.price}</>
        //       ))}</>
        //     ))
        //   }
        //
        rtr.map((value: any) =>
          value.idTableRoute == values && value.classTypeTicket.length != 0 ? (
            <>
              {
                value?.classTypeTicket.map((news: any) => (
                  <Link
                    key={item.id}
                    href={`/FindFly/FlightList_result/${item.id}/${value.id}`}
                  >
                    ,,{value.id},,{item.id},,{news.id}
                    <div
                      data-testid={`ticket-${value.id}`}
                      key={value.id}
                      className="vars__block-uu"
                    >
                      {/* <div key={value.id} className={stateHover ? 'vars__block-uu-active' : 'vars__block-uu'}> */}
                      {/* <Link href={`/FindFly/FlightList_result/${item.id}/${value.id}`}>LINK</Link>
            <div>
                <Image src={arrow_right} alt='arrow_right' />
            </div> */}
                      {/* {
                stateHover ? <Image src={arrow_right_move} alt='arrow_link' className='vars__arrow-link-ticket' /> : null
            } */}
                      <h2 className="vars__head-name-type">{news.name_type}</h2>

                      <div className="vars__block-uu-date">
                        <p className="vars__description-info-date-num">
                          Return {item.time_fly_from.toDateString()}
                        </p>
                        <p className="vars__description-info-flyght-time">
                          <>{news.price}</>$
                        </p>
                      </div>
                      <div className="vars__block-plane-comfortable">
                        <div className="vars__block-plane-list-item">
                          <Image
                            src={item.id_table_comp.image_company}
                            width={80}
                            height={55}
                            alt="image_logo_ticket"
                            className="vars__image-ticket"
                          />
                          <div className="vars__block-info-company-plane">
                            <p className="vars__nmae-company-fly">
                              {item.id_table_comp.name_company}
                            </p>
                            <p className="vars__name-plane-fly">
                              {item.name_plane}
                            </p>
                          </div>
                        </div>
                        <div className="vars__block-comfortble-option">
                          <div className="vars__block-inside-uu">
                            <Image
                              src={airplane}
                              alt="icon_option_comfortable"
                              className="vars__icon_option_comfortable"
                            />
                          </div>
                          <div className="vars__block-inside-uu">
                            <Image
                              src={wifi}
                              alt="icon_option_comfortable"
                              className="vars__icon_option_comfortable"
                            />
                          </div>
                          <div className="vars__block-inside-uu">
                            <Image
                              src={stop_watch}
                              alt="icon_option_comfortable"
                              className="vars__icon_option_comfortable"
                            />
                          </div>
                          <div className="vars__block-inside-uu">
                            <Image
                              src={fast_food}
                              alt="icon_option_comfortable"
                              className="vars__icon_option_comfortable"
                            />
                          </div>
                          <div className="vars__block-inside-uu">
                            <Image
                              src={sit}
                              alt="icon_option_comfortable"
                              className="vars__icon_option_comfortable"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="vars__main-block-info-ticket">
                        <div className="vars__time-from-to">
                          <div className="vars__block-info-time-inside">
                            <div className="vars__time-from">
                              <p className="vars__time-from-description">
                                {new Date(item.time_fly_from)
                                  .toLocaleTimeString()
                                  .slice(0, 5)}{" "}
                                pm
                              </p>
                              <p className="vars__description-name">
                                {item.from_airport.name_airport}
                              </p>
                            </div>
                            <div className="vars__block-image-plane">
                              <hr className="vars__border" />
                              <Image
                                src={airplane}
                                alt="image_plane"
                                className="vars__image-plane"
                              />
                              <hr className="vars__border-second" />
                            </div>
                            <div className="vars__block-time-to">
                              <p className="vars__time-to-description">
                                {new Date(item.time_fly_to)
                                  .toLocaleTimeString()
                                  .slice(0, 5)}{" "}
                                pm
                              </p>
                              <p className="vars__description-name-to">
                                {item.to_airport.name_airport}
                              </p>
                            </div>
                          </div>
                          <div className="vars__block-info-time-fly">
                            <p className="vars__description-time-fly-value">
                              {Math.floor(differenceInMinutes / 60)}h{" "}
                              {(differenceInMinutes % 60).toFixed(0)}m
                            </p>
                          </div>
                        </div>
                        <div className="vars__block-actual-ticket">
                          <div className="vars__block-seat-type">
                            <p className="vars__description-seat-num">Seat</p>
                            <div className="vars__block-inside-seat-value-ticket">
                              <Image
                                src={sit}
                                alt="sit_num"
                                className="vars__image-sit"
                              />
                              <p className="vars__description-seat">
                                {value.place}
                              </p>
                            </div>
                          </div>
                          <div className="vars__block-row-ticket">
                            <p className="vars__description-row-num">Row</p>
                            <div className="vars__block-inside-value-row">
                              <Image
                                src={row_sit}
                                alt="row"
                                className="vars__image-row"
                              />
                              <p className="vars__row-value">{value.row}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
                // <div onMouseEnter={() => setStateHover(true)} onMouseLeave={() => setStateHover(false)}>
                // </div>
              }
            </>
          ) : null
        )
      }
    </>
  );
};

export default TicketForBooking;
