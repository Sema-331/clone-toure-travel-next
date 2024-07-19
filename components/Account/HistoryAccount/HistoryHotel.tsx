import Image from "next/image";
import React from "react";
import logo_hotel from "./../../../public/images/Frame 2608789_hotel.png";
import image_date from "./../../../public/images/Frame 2608694.png";
import image_time from "./../../../public/images/Frame 2608694_1.png";
import image_gate from "./../../../public/images/Frame 2608697.png";
import image_right from "./../../../public/images/chevron_forward.png";
import Link from "next/link";

interface ItemInt {
  item: {
    userId: string;
    hotelId: number;
    type_room_hotel_id: number;
    hotel: {
      check_in_date: Date;
      check_out_date: Date;
    };
  };
  user3: any;
}

const HistoryHotel = ({ item, user3 }: ItemInt) => {
  return (
    <>
      {item.userId === user3.id ? (
        <div className="history-account__block-list-box-item">
          <div className="history-account__list-item">
            <div className="history-account__block-date-info">
              <div className="history-account__block-road-info">
                <Image
                  src={logo_hotel}
                  alt="image_logo-ticket"
                  className="history-account__image-logo-ticket"
                />
                <div className="history-account__block-lot">
                  <div className="history-account__block-infro-from">
                    <p className="history-accoun__name-city">Check-in</p>
                    <p className="history-account__time-departure">
                      {item.hotel.check_in_date.toDateString()}
                    </p>
                  </div>
                  <div className="history-account__block-alias">
                    <hr />
                  </div>
                  <div className="history-account__block-to-user">
                    <p className="history-accoun__name-city-to-arrival">
                      Check out
                    </p>
                    <p className="history-account__time-arrival">
                      {item.hotel.check_out_date.toDateString()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="history-account__block-ticket-detailed-info">
                <div className="history-account__block-date-detailed">
                  <Image
                    src={image_gate}
                    alt="image_date"
                    className="history-account__image-date"
                  />
                  <div className="history-account__block-date-detailed-inside">
                    <p className="history-account__description-date">
                      Check-In time
                    </p>
                    <p className="history-account__description-date-time">
                      {item.hotel.check_in_date
                        .toLocaleTimeString()
                        .slice(0, 5)}
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
                    <p className="history-account__description-gate">
                      Room no.
                    </p>
                    <p className="history-account__description-gate-num">
                      On arrival
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
                      Check-in-out
                    </p>
                    <p className="history-account__description-flight-time-time">
                      {item.hotel.check_out_date
                        .toLocaleTimeString()
                        .slice(0, 5)}
                    </p>
                  </div>
                </div>
                {/* <div className="history-account__block-seat-num-detailed">
                        <Image src={image_sit_number} alt='image_seat-num' className='history-account__image-seat-num' />
                        <div className="history-account__block-seat-num-detailed-inside">
                            <p className='history-account__name-seat-num'>Seat no.</p>
                            <p className='history-account__description-seat-num'>128</p>
                        </div>
                    </div> */}
              </div>
            </div>
            <div className="history-account__block-download-ticket">
              <button className="history-account__btn-upload">
                Download Ticket
              </button>
              <Link
                href={`/FindHotel/ResultsHotels/${item.hotelId}/${item.type_room_hotel_id}/booking_room_hotel`}
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

export default HistoryHotel;
