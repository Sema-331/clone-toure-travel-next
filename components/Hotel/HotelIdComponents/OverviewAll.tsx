import React from "react";
import Image from "next/image";
import vector_image from "./../../../public/images/Vector (1).png";
import { getRateSum } from "@/helpers/RateSum";
import HotelRoomSingle from "./HotelRoomSingle";

interface OverviewInt {
  // overview: {
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
  //     table_type_room: {
  //         id: number;
  //         description_type_room: string;
  //         price_type_room_hotel: number;
  //         id_hotel_tpye_room: number;
  //     }[]
  // }[],
  overview: any;
  userSecond: any;
}

const OverviewAll = ({ overview, userSecond }: OverviewInt) => {
  const value = getRateSum(userSecond);

  return (
    <section>
      <div className="container">
        <div className="alls">
          <div className="alls__block-main">
            <div className="alls__block-uu">
              <div className="alls__block-description-overview">
                <h2 className="alls__header-block-overview">Overview</h2>
                <p className="alls__description-main">
                  Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park
                  Bosphorus Hotel Istanbul has risen from the ashes of the
                  historic Park Hotel, which also served as Foreign Affairs
                  Palace 120 years ago and is hosting its guests by assuming
                  this hospitality mission. With its 452 luxurious rooms and
                  suites, 8500 m2 SPA and fitness area, 18 meeting rooms
                  including 4 dividable ones and 3 terraces with Bosphorus view,
                  Istanbuls largest terrace with Bosphorus view (4500 m2) and
                  latest technology infrastructure, CVK Park Bosphorus Hotel
                  Istanbul is destined to be the popular attraction point of the
                  city. Room and suite categories at various sizes with city and
                  Bosphorus view, as well as 68 separate luxury suites, are
                  offered to its special guests as a wide variety of selection.
                </p>
              </div>
              <div className="alls__block-uu-main">
                <div className="alls__block-overviews">
                  <div className="alls__block-view-overview">
                    <p className="alls__description-float-count">
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
                    </p>
                    <div className="alls__block-uu-float">
                      <p className="alls__description-mark-overview">
                        {Number(value) >= 4.5
                          ? "Very Good"
                          : Number(value) > 4.0 && Number(value) < 4.5
                          ? "Good"
                          : Number(value) > 3.5 && Number(value) < 4.0
                          ? "Quite"
                          : "Bad"}
                      </p>
                      <p className="alls__description-total-count-review">
                        371 reviews
                      </p>
                    </div>
                  </div>
                </div>
                <div className="alls__block-uu-second">
                  <div className="alls__block-another-overview">
                    <Image
                      src={vector_image}
                      alt="vector_icon"
                      className="alls__vector-icon"
                    />
                    <p className="alls__description-overview">Near park</p>
                  </div>
                  <div className="alls__block-another-overview">
                    <Image
                      src={vector_image}
                      alt="vector_icon"
                      className="alls__vector-icon"
                    />
                    <p className="alls__description-overview">Near Nightlife</p>
                  </div>
                  <div className="alls__block-another-overview">
                    <Image
                      src={vector_image}
                      alt="vector_icon"
                      className="alls__vector-icon"
                    />
                    <p className="alls__description-overview">Near theater</p>
                  </div>
                  <div className="alls__block-another-overview">
                    <Image
                      src={vector_image}
                      alt="vector_icon"
                      className="alls__vector-icon"
                    />
                    <p className="alls__description-overview">Clean Hotel</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="alls__block-avaible">
              <h2 className="alls__header-avaible">Available Rooms</h2>
              {overview.map(
                (item: {
                  id: number;
                  table_type_room: {
                    id: number;
                    description_type_room: string;
                    price_type_room_hotel: number;
                    id_hotel_tpye_room: number;
                  }[];
                }) => (
                  <div className="alls__list-box-rooms" key={item.id}>
                    {item.table_type_room.map((item) => (
                      <HotelRoomSingle key={item.id} item={item} />
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewAll;
