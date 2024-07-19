import BtnContinue from "@/components/FlyghtOption/FlyghtList_result/BookingTicket/BtnContinue";
import Image from "next/image";
import logo_mini from "./../../../../public/images/download 1.png";
import icon_location from "./../../../../public/images/Location.png";
import icon_building from "./../../../../public/images/Vector (3).png";
import mini_logo_hotel from "./../../../../public/images/Rectangle 3 (8).png";
import React from "react";
import BookingTicketPayments from "@/components/FlyghtOption/FlyghtList_result/BookingTicket/BookingTicketPayments";
import { db } from "@/prismaData/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/type-libs/lib";

interface IntItem {
  // item: {
  //   id: number;
  //   userId: string;
  //   star_hotel: string | null;
  //   check_in_date: Date;
  //   check_out_date: Date;
  //   room_number: number;
  //   price: string;
  //   name_hotel: string;
  //   rate: string;
  //   geo_hotel: string;
  //   freebies_options: string[];
  //   amenities_option: string[];
  //   variaty_hotel: string;
  //   idHotel: number;
  // },
  //   itemId: {
  //   id: number;
  //   description_type_room: string;
  //   price_type_room_hotel: number;
  //   id_hotel_tpye_room: number;
  // },
  // userSecond: any
  item: any;
  itemId: any;
  userSecond: any;
  userSeconds: any;
}

const MainHotelBookingComponent = async ({
  item,
  itemId,
  userSecond,
  userSeconds,
}: IntItem) => {
  const cardValue = await db.credit_card_users.findMany({});

  const session = await getServerSession(authOptions);
  const findUser = await db.user.findFirst({
    where: {
      email: session?.user.email,
    },
  });

  const value = (
    userSeconds?.reduce(
      (prev: number, item: { rating: string }) => prev + Number(item.rating),
      0
    ) / userSeconds?.length
  ).toFixed(1);

  return (
    <section>
      <div className="container">
        <div className="book-hotel">
          <div className="book-hotel__main-block">
            <div className="book-hotel__block-interactive">
              <div className="book-hotel__block-room-ticket">
                <div className="book-hotel__block-type-room">
                  <h2 className="book-hotel__description-type">
                    Superior room - {itemId?.description_type_room}
                  </h2>

                  <p className="book-hotel__description-price">
                    <span>${itemId?.price_type_room_hotel}</span>/night
                  </p>
                </div>
                <div className="book-hotel__block-info-hotel">
                  <Image
                    src={logo_mini}
                    alt="icon_logo_hotel"
                    className="book-hotel__image-logo"
                  />
                  <div className="book-hotel__block-name-location">
                    <h2 className="book-hotel__name-hotel">
                      {item?.name_hotel}
                    </h2>

                    <div className="book-hotel__block-location-hotel">
                      <Image
                        src={icon_location}
                        alt="icon_location"
                        className="book-hotel__icon-location"
                      />

                      <p className="book-hotel__location-name">
                        {item?.geo_hotel}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="book-hotel__block-date-checking">
                  <div className="book-hotel__block-check-in">
                    <p className="book-hotel__date-check-in">
                      {item?.check_in_date.toDateString()}
                    </p>
                    <p className="book-hotel__description-check">Check-in</p>
                  </div>
                  <div className="book-hotel__block-image">
                    <hr className="book-hotel__hr-first" />
                    <Image
                      src={icon_building}
                      alt="icon_build"
                      className="book-hotel__icon-hotel"
                    />
                    <hr className="book-hotel__hr-second" />
                  </div>
                  <div className="book-hotel__block-check-out">
                    <p className="book-hotel__description-date-check-out">
                      {item?.check_out_date.toDateString()}
                    </p>
                    <p className="book-hotel__description-check-out">
                      Check-out
                    </p>
                  </div>
                </div>
              </div>
              <BookingTicketPayments itemId={itemId} item={item} />
              {/* <CardComponentbook-hotel /> */}
              <BtnContinue
                findUser={findUser}
                cardValue={cardValue}
                userSecond={userSecond}
                itemId={itemId}
                item={item}
              />
            </div>
            <div className="book-hotel__block-final-information">
              <div className="book-hotel__blockinfo-plane">
                <Image
                  src={mini_logo_hotel}
                  alt="mini_logo_plane"
                  className="book-hotel__image-mini-logo"
                />
                <div className="book-hotel__block-uus">
                  <div className="book-hotel__inf-plane">
                    <p className="book-hotel__description-name-company-plane">
                      {item?.name_hotel.length >= 18
                        ? item?.name_hotel.slice(0, 18) + "..."
                        : item?.name_hotel}
                    </p>

                    <p className="book-hotel__description-name-plane">
                      Superior room - {itemId?.description_type_room}
                    </p>
                  </div>
                  <div className="book-hotel__block-review-description">
                    <div className="book-hotel__review-avarge">{value}</div>
                    <p className="book-hotel__description-avarge">
                      <span>Very Good</span>54 reviews
                    </p>
                  </div>
                </div>
              </div>
              <p className="book-hotel__protected-description">
                Your book-hoteling is protected by <span>golobe</span>
              </p>
              <div className="book-hotel__block-jkj">
                <div className="book-hotel__block-price-list">
                  <h2 className="book-hotel__header-price">Price Details</h2>
                  <div className="book-hotel__block-list-item-prices">
                    <p className="book-hotel__name-prices">Base Fare </p>
                    <p className="book-hotel__description-count-price">
                      ${itemId?.price_type_room_hotel}
                    </p>
                  </div>
                  <div className="book-hotel__block-list-item-prices">
                    <p className="book-hotel__name-prices">Discount</p>
                    <p className="book-hotel__description-count-price">$0</p>
                  </div>
                  <div className="book-hotel__block-list-item-prices">
                    <p className="book-hotel__name-prices">Taxes</p>
                    <p className="book-hotel__description-count-price">$20</p>
                  </div>
                  <div className="book-hotel__block-list-item-prices">
                    <p className="book-hotel__name-prices">Service Fee</p>
                    <p className="book-hotel__description-count-price">$5</p>
                  </div>
                </div>
                <div className="book-hotel__total-count-price">
                  <p className="book-hotel__name-total-price">Total</p>
                  <p className="book-hotel__total-price">
                    ${itemId?.price_type_room_hotel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHotelBookingComponent;
