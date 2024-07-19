"use client";

import React, { useState } from "react";
import focus_icon from "./../../../../public/images/info.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface IntItem {
  item: any;
  itemId: any;
}

const BookingTicketPayments = ({ item, itemId }: IntItem) => {
  console.log("b");
  // console.log(item.map((item) => (
  //   parseFloat(item.price[1])
  // )))
  const [statePaymentMethod, setStatePaymentMethod] = useState<string>("var_1");
  const [stateInfo, setStateInfo] = useState<boolean>(false);

  const pathName = usePathname();

  const a = itemId?.price_type_room_hotel / 2;

  return (
    <div className="book__block-pay-options">
      <div className="book__block-uu">
        <label
          onClick={() => setStatePaymentMethod("var_1")}
          htmlFor="var_1"
          className={
            statePaymentMethod === "var_1"
              ? "book__block-select-auto-active"
              : "book__block-select-auto"
          }
        >
          <div className="book__block-seelct-inside">
            <h2 className="book__header-option">Pay in full</h2>
            <p className="book__description-option">
              Pay the total and you are all set
            </p>
          </div>
          <input
            type="radio"
            id="var_1"
            checked={statePaymentMethod === "var_1" ? true : false}
            name="type-select"
            className="book__select-option-type"
          />
        </label>
        <label htmlFor="var_2" className="book__block-unselect-auto">
          <div className="book__block-unselect-inside">
            <div
              onClick={() => setStatePaymentMethod("var_2")}
              className={
                statePaymentMethod === "var_2"
                  ? "book__block-uu-inp-active"
                  : "book__block-uu-inp"
              }
            >
              <div className="book__block-description-var-second">
                <h2 className="book__header-option-unselect">
                  Pay part now, part later
                </h2>
                {pathName.includes("FindFly/FlightList_result/") ? (
                  <p className="book__description-option-unselect">
                    Pay{" "}
                    {item.map((item: { classTypeTicket: [] }) => (
                      <>
                        {item?.classTypeTicket.map(
                          (item: { price: string }) => (
                            <>{Number(item.price) / 2}</>
                          )
                        )}
                      </>
                    ))}{" "}
                    now, and the rest{" "}
                    <>
                      {item.map((item: { classTypeTicket: [] }) => (
                        <>
                          {item?.classTypeTicket.map(
                            (item: { price: string }) => (
                              <>{Number(item.price) / 2}</>
                            )
                          )}
                        </>
                      ))}
                    </>{" "}
                    will be automatically charged to the same payment method on
                    Nov 14, 2022. No extra fees.
                  </p>
                ) : (
                  <p className="book__description-option-unselect">
                    Pay {a} now, and the rest {a} will be automatically charged
                    to the same payment method on Nov 14, 2022. No extra fees.
                  </p>
                )}
              </div>
              <input
                type="radio"
                id="var_2"
                name="type-select"
                checked={statePaymentMethod === "var_2" ? true : false}
                className="book__select-option-type-unselect"
              />
            </div>
            <div
              onMouseEnter={() => setStateInfo(true)}
              onMouseLeave={() => setStateInfo(false)}
              className="book__block-modal-uu"
            >
              <p className="book__more-info">More info</p>
              {stateInfo ? (
                <div className="book__modal-more-info">
                  <div className="book__block-icon-modal">
                    <Image
                      src={focus_icon}
                      alt="focus_icon"
                      className="book__icon-focus"
                    />
                  </div>
                  <div className="book__block-description-modal">
                    <h2 className="book__modal-header-more-info">
                      Lorem ipsum dolor sit amet.
                    </h2>
                    <p className="book__modal-description-more-info">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolorum dolorem itaque nisi quas, dicta ipsum fuga iusto
                      et earum libero.
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default BookingTicketPayments;
