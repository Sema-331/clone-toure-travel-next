"use client";

import React from "react";
import rule_image from "./../../../../public/images/ion_stopwatch.png";
import Image from "next/image";
import TicketForBooking from "./TicketForBooking";
import Skeleton from "@/ui/Skeleton/Fly_ticket/skeleton";
import { useAppSelector } from "@/helperRedux/helperRedux";

interface PropDate {
  item: any;
  value: number;
  itemSecond: any;
}

const SingleVariantTicketn = ({ item, value, itemSecond }: PropDate) => {
  const selector = useAppSelector(
    (item) => item.redSlice.stateLoadFlyTypeTicket
  );

  return (
    <div className="vars">
      {item.id == value && "YESS"}
      <div className="vars__main-block">
        <div className="vars__block-policies">
          <h2 className="vars__header-policies">
            {item.id_table_comp.name_company} Airlines Policies
          </h2>
          <div className="vars__block-unitific">
            <div className="vars__block-rules-first">
              <Image
                src={rule_image}
                alt="icon_rule"
                className="vars__image-rule"
              />
              <p className="vars__description-rule">
                Pre-flight cleaning, installation of cabin HEPA filters.
              </p>
            </div>
            <div className="vars__block-rules-second">
              <Image
                src={rule_image}
                alt="icon_rule"
                className="vars__image-rule"
              />
              <p className="vars__description-rule">
                Pre-flight health screening questions.
              </p>
            </div>
          </div>
        </div>
        <div className="vars__block-type-economy-ticket">
          {item.id == value ? (
            !selector ? (
              <TicketForBooking
                values={value}
                itemSecond={itemSecond}
                item={item}
              />
            ) : (
              <Skeleton />
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SingleVariantTicketn;
