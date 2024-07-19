import React from "react";
import location_icon from "./../../public/images/Location.png";
import plane_image from "./../../public/images/Frame 286.png";
import share_icon from "./../../public/images/Share=True.png";
import image_date from "./../../public/images/Frame 2608694.png";
import image_time from "./../../public/images/Frame 2608694_1.png";
import image_gate from "./../../public/images/Frame 2608697.png";
import image_sit_number from "./../../public/images/Frame 2608697_1.png";
import code_image from "./../../public/images/Frame 2608686.png";
import user_image from "./../../public/images/Ellipse 1.png";
import ellips_first from "./../../public/images/Mask group.png";
import t from "./../../public/images/Ellipse 10.png";
import image_user_travel from "./../../public/images/Rectangle 25.png";
import user_image_default from "./../../public/images/user.svg";
import Image from "next/image";
import Link from "next/link";
import { IntData } from "@/interfaces/interface";
import { convertationTime } from "@/helpers/ConvertingTime";

const BookingTicketLL = ({ data, userSession }: IntData) => {
  let differenceInMinutes = convertationTime(
    data?.id_table_route_history?.time_fly_to as Date,
    data?.id_table_route_history?.time_fly_from as Date
  );

  return (
    <section>
      <div className="container">
        <div className="booking">
          <div className="booking__main-block">
            <div className="booking_info-block">
              <div className="bookign__block-info-plane">
                <h2 className="booking__header-name-plane">
                  {data?.id_table_route_history.id_table_comp.name_company}{" "}
                  {data?.id_table_route_history.name_plane}
                </h2>
                <p className="booking__description-price-ticket">
                  $
                  {data?.id_table_route_history.Table_ticket.map((item) => (
                    <>
                      {item.classTypeTicket.map((item) => (
                        <>{item.price}</>
                      ))}
                    </>
                  ))}
                </p>
              </div>
              <div className="booking__block-uu-options">
                <div className="bookign__block-location">
                  <Image
                    src={location_icon}
                    alt="icon_location"
                    className="bookign__image-geo"
                  />
                  <p className="bookign__description-location-geo">
                    {data?.id_table_route_history.geo_airplane}
                  </p>
                </div>
                <div className="bookign__block-interactive">
                  <button className="booking__share-btn">
                    <Image
                      src={share_icon}
                      alt="icon_share"
                      className="booking__image-share"
                    />
                  </button>
                  <button className="bookign__download-ticket">Download</button>
                </div>
              </div>
            </div>
            <div className="bookign__main-ticket">
              <div className="bookign__block-time">
                <div className="bookign__block-time-inside">
                  <div className="bookign__time-fly">
                    <p className="booking__description-time">
                      {new Date(
                        data?.id_table_route_history?.time_fly_from as Date
                      )
                        .toLocaleTimeString()
                        .slice(0, 5)}{" "}
                      pm
                    </p>
                    <p className="bookign__description-name">Newark(EWR)</p>
                  </div>
                </div>
                <div className="bookign__block-image-plane">
                  <Image
                    src={plane_image}
                    alt="image_plane"
                    className="bookign__image-plane"
                  />
                </div>
                <div className="bookign__time-fly">
                  <p className="booking__description-time">
                    {new Date(data?.id_table_route_history?.time_fly_to as Date)
                      .toLocaleTimeString()
                      .slice(0, 5)}{" "}
                    pm
                  </p>
                  <p className="bookign__description-name">Newark(EWR)</p>
                </div>
              </div>
              <div className="bookign__blockinfo-ticket-with-user">
                <div className="bookign__block-info-user">
                  <div className="booking__block-user-image-name">
                    {typeof userSession.image !== "string" ? (
                      <Image
                        className="booking__image-user"
                        src={user_image_default}
                        alt="image_user"
                      />
                    ) : (
                      <Image
                        className="booking__image-user"
                        width={50}
                        height={50}
                        src={userSession?.image as string}
                        alt="image_user"
                      />
                    )}
                    <div className="booking__block-uu-description">
                      <p className="booking__description-user-name">
                        {userSession?.userName.slice(0, 1).toUpperCase() +
                          userSession?.userName.slice(1).toLowerCase()}{" "}
                        {userSession?.lastName.slice(0, 1).toUpperCase() +
                          userSession?.lastName.slice(1).toLowerCase()}
                      </p>
                      <p className="booking__description-user-num">
                        Boarding Pass N’123
                      </p>
                    </div>
                  </div>
                  <p className="bookign__description-class-ticket">
                    {data?.id_table_route_history.Table_ticket.map((item) => (
                      <>
                        {item.classTypeTicket.map((item) => (
                          <>{item.name_type}</>
                        ))}
                      </>
                    ))}
                  </p>
                </div>
                <div className="bookign__detailed-info-ticket">
                  <div className="booking__block-detailed-info-ticket-inside">
                    <div className="bookign__list-item">
                      <Image
                        src={image_date}
                        alt="icon_info"
                        className="booking__image-icon"
                      />
                      <div className="booking__inf-ticket-user">
                        <p className="booking__description-name">Date</p>
                        <p className="booking__description-value">
                          Newark(EWR)
                        </p>
                      </div>
                    </div>
                    <div className="bookign__list-item">
                      <Image
                        src={image_gate}
                        alt="icon_info"
                        className="booking__image-icon"
                      />
                      <div className="booking__inf-ticket-user">
                        <p className="booking__description-name">Flyght time</p>
                        <p className="booking__description-value">
                          {Math.floor(differenceInMinutes / 60)}h{" "}
                          {(differenceInMinutes % 60).toFixed(0)}
                        </p>
                      </div>
                    </div>
                    <div className="bookign__list-item">
                      <Image
                        src={image_time}
                        alt="icon_info"
                        className="booking__image-icon"
                      />
                      <div className="booking__inf-ticket-user">
                        <p className="booking__description-name">Gate</p>
                        <p className="booking__description-value">
                          {data?.id_table_route_history.Table_ticket.map(
                            (item) => (
                              <>{item.row}</>
                            )
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="bookign__list-item">
                      <Image
                        src={image_sit_number}
                        alt="icon_info"
                        className="booking__image-icon"
                      />
                      <div className="booking__inf-ticket-user">
                        <p className="booking__description-name">Seat</p>
                        <p className="booking__description-value">
                          {data?.id_table_route_history.Table_ticket.map(
                            (item) => (
                              <>{item.place}</>
                            )
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bookign__block-barcode">
                    <div className="booking__block-description-barcode">
                      <p className="booking__description-name-barcode">EK</p>
                      <p className="booking__description-value-barcode">
                        ABC12345
                      </p>
                    </div>
                    <Image src={code_image} alt="image_code" />
                  </div>
                </div>
              </div>
              <div className="booking__block-fly-images">
                <div className="booking__block-hight">
                  <div className="booking__block-user-uu">
                    <Image
                      src={image_user_travel}
                      alt="image_user_travel_logo"
                      className="booking__image-travel-logo"
                    />
                    <div className="booking__block-description-user-uu">
                      <p className="booking__desc-user-name-uu">
                        {userSession?.userName.slice(0, 1).toUpperCase() +
                          userSession?.userName.slice(1).toLowerCase()}{" "}
                        {userSession?.lastName.slice(0, 1).toUpperCase() +
                          userSession?.lastName.slice(1).toLowerCase()}
                      </p>
                      <p className="booking__description-user-ticket-num">
                        Boarding Pass N’123
                      </p>
                    </div>
                    <div className="booking__block-lnl">
                      <Image
                        src={ellips_first}
                        alt="image_font"
                        fill={true}
                        className="booking__image-ellips"
                      />
                      <Image
                        src={t}
                        alt="image_font"
                        fill={true}
                        className="booking__image-content"
                      />
                    </div>
                  </div>
                </div>
                <div className="booking__block-low">
                  <div className="booking__block-user-uu">
                    <Image
                      src={image_user_travel}
                      alt="image_user_travel_logo"
                      className="booking__image-travel-logo"
                    />
                    <div className="booking__block-description-user-uu">
                      <p className="booking__desc-user-name-uu">
                        {userSession?.userName.slice(0, 1).toUpperCase() +
                          userSession?.userName.slice(1).toLowerCase()}{" "}
                        {userSession?.lastName.slice(0, 1).toUpperCase() +
                          userSession?.lastName.slice(1).toLowerCase()}
                      </p>
                      <p className="booking__description-user-ticket-num">
                        Boarding Pass N’123
                      </p>
                    </div>
                    <div className="booking__block-lnl">
                      <Image
                        src={ellips_first}
                        alt="image_font"
                        fill={true}
                        className="booking__image-ellips"
                      />
                      <Image
                        src={t}
                        alt="image_font"
                        fill={true}
                        className="booking__image-content"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bookign__block-uul">
              <div className="booking__block-terms">
                <h2 className="booking__header-term">Terms and Conditions</h2>
                <div className="booking__block-descr">
                  <h3 className="bookign__header-block-description">
                    Payments
                  </h3>
                  <ul className="bookign__list-box">
                    <li className="booking__list-item">
                      <p className="booking__description-main-term">
                        If you are purchasing your ticket using a debit or
                        credit card via the Website, we will process these
                        payments via the automated secure common payment gateway
                        which will be subject to fraud screening purposes.{" "}
                      </p>
                    </li>
                    <li className="booking__list-item">
                      <p className="booking__description-main-term">
                        If you do not supply the correct card billing address
                        and/or cardholder information, your booking will not be
                        confirmed and the overall cost may increase. We reserve
                        the right to cancel your booking if payment is declined
                        for any reason or if you have supplied incorrect card
                        information. If we become aware of, or is notified of,
                        any fraud or illegal activity associated with the
                        payment for the booking, the booking will be cancelled
                        and you will be liable for all costs and expenses
                        arising from such cancellation, without prejudice to any
                        action that may be taken against us.
                      </p>
                    </li>
                    <li className="booking__list-item">
                      <p className="booking__description-main-term">
                        Golobe may require the card holder to provide additional
                        payment verification upon request by either submitting
                        an online form or visiting the nearest Golobe office, or
                        at the airport at the time of check-in. Golobe reserves
                        the right to deny boarding or to collect a guarantee
                        payment (in cash or from another credit card) if the
                        card originally used for the purchase cannot be
                        presented by the cardholder at check-in or when
                        collecting the tickets, or in the case the original
                        payment has been withheld or disputed by the card
                        issuing bank. Credit card details are held in a secured
                        environment and transferred through an internationally
                        accepted system.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="booking__block-contacts">
                <h2 className="booking__header-block-contact">Contact Us</h2>
                <p className="booking__description-contact">
                  If you have any questions about our Website or our Terms of
                  Use, please contact:
                </p>
                <p className="booking__description-contact">
                  Golobe Group Q.C.S.C
                </p>
                <p className="booking__description-contact">Golobe Tower</p>
                <p className="booking__description-contact">P.O. Box: 22550</p>
                <p className="booking__description-contact">
                  Doha, State of Qatar
                </p>
                <p className="booking__description-contact">
                  Further contact details can be found at{" "}
                  <Link href="/">golobe.com/help</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingTicketLL;
