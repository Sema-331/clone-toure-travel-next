import Image from "next/image";
import React from "react";
import logo_ticket from "./../../../public/images/Frame 2608789.png";
import image_date from "./../../../public/images/Frame 2608694.png";
import image_time from "./../../../public/images/Frame 2608694_1.png";
import image_gate from "./../../../public/images/Frame 2608697.png";
import null_shop_cart from "./../../../public/images/null_shopping_cart.png";
import image_sit_number from "./../../../public/images/Frame 2608697_1.png";
import image_right from "./../../../public/images/chevron_forward.png";
import Link from "next/link";

interface IntItem {
  item: any;
  user3: any;
}

const Ticket = ({ item, user3 }: IntItem) => {
  let a = new Date(item?.id_table_route_history.time_fly_to);
  let b = new Date(item?.id_table_route_history.time_fly_from);
  // Если оба являются объектами Date, можно вычислить разницу в миллисекундах
  let differenceInMilliseconds = (a as any) - (b as any);

  // Переводим разницу в минуты
  let differenceInMinutes = differenceInMilliseconds / (1000 * 60);

  console.log(Math.floor(differenceInMinutes / 60), differenceInMinutes % 60);

  return (
    <>
      {item.idUser === user3.id ? (
        <div className="history-account__block-list-box-item">
          <div className="history-account__list-item">
            <div className="history-account__block-date-info">
              <div className="history-account__block-road-info">
                <Image
                  src={logo_ticket}
                  alt="image_logo-ticket"
                  className="history-account__image-logo-ticket"
                />
                <div className="history-account__block-lot">
                  <div className="history-account__block-infro-from">
                    <p className="history-accoun__name-city">
                      {item.id_table_route_history.from_airport.name_airport}
                    </p>
                    <p className="history-account__time-departure">
                      {new Date(item.id_table_route_history.time_fly_from)
                        .toLocaleTimeString()
                        .slice(0, 5)}{" "}
                      pm
                    </p>
                  </div>
                  <div className="history-account__block-alias">
                    <hr />
                  </div>
                  <div className="history-account__block-to-user">
                    <p className="history-accoun__name-city-to-arrival">
                      {item.id_table_route_history.to_airport.name_airport}
                    </p>
                    <p className="history-account__time-arrival">
                      {new Date(item.id_table_route_history.time_fly_to)
                        .toLocaleTimeString()
                        .slice(0, 5)}{" "}
                      pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="history-account__block-ticket-detailed-info">
                <div className="history-account__block-date-detailed">
                  <Image
                    src={image_date}
                    alt="image_date"
                    className="history-account__image-date"
                  />
                  <div className="history-account__block-date-detailed-inside">
                    <p className="history-account__description-date">Date</p>
                    <p className="history-account__description-date-time">
                      {
                        new Date(item.id_table_route_history.time_fly_from)
                          .toLocaleString()
                          .split(",")[0]
                      }
                    </p>
                  </div>
                </div>
                <div className="history-account__block-gate-detailed">
                  <Image
                    src={image_time}
                    alt="gate"
                    className="history-account__image-gate"
                  />
                  <div className="history-account__block-gate-detailed-inside">
                    <p className="history-account__description-gate">Gate</p>
                    <p className="history-account__description-gate-num">
                      {item.row}
                    </p>
                  </div>
                </div>
                <div className="history-account__block-flight-time-detailed">
                  <Image
                    src={image_gate}
                    alt="image_flight-time"
                    className="history-account__image-flight-time"
                  />
                  <div className="history-account__block-flight-time-detailed-inside">
                    <p className="history-account__description-flight-time">
                      Flight time
                    </p>
                    <p className="history-account__description-flight-time-time">
                      {Math.floor(differenceInMinutes / 60)}h{" "}
                      {(differenceInMinutes % 60).toFixed(0)}
                    </p>
                  </div>
                </div>
                <div className="history-account__block-seat-num-detailed">
                  <Image
                    src={image_sit_number}
                    alt="image_seat-num"
                    className="history-account__image-seat-num"
                  />
                  <div className="history-account__block-seat-num-detailed-inside">
                    <p className="history-account__name-seat-num">Seat no.</p>
                    <p className="history-account__description-seat-num">
                      {item.place}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="history-account__block-download-ticket">
              <button className="history-account__btn-upload">
                Download Ticket
              </button>
              {/* {item.id_table_route_history.Table_ticket.map((item) => (
                <>
                  {item.idTabletype},,{item.idTableRoute}
                </>
              ))} */}
              <Link
                href={`/FindFly/FlightList_result/${item.idTableRoute}/${item.id_type_class.idClassTypeTicket}/booking_ticket`}
                className="history-account__block-arrows"
              >
                <Image
                  src={image_right}
                  alt="image_arrow_right"
                  className="history-account__arrow-right"
                />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Ticket;
