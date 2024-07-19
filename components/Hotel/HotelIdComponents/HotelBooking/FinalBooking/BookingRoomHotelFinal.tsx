import React from "react";
import location_icon from "./../../../../../public/images/Location.png";
import share_icon from "./../../../../../public/images/Share=True.png";
import image_time from "./../../../../../public/images/Frame 2608694_1.png";
import image_gate from "./../../../../../public/images/Frame 2608697.png";
import code_image from "./../../../../../public/images/Frame 2608686.png";
import user_image from "./../../../../../public/images/Ellipse 1.png";
import build_icon from "./../../../../../public/images/building.png";
import vector_1 from "./../../../../../public/images/Vector 1.png";
import vector_4 from "./../../../../../public/images/Vector 4.png";
import image_block from "./../../../../../public/images/download 2.png";
import user_image_default from "./../../../../../public/images/user.svg";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/type-libs/lib";
import { prisma } from "@/prismaData/db";

interface IntItem {
  item: {
    id: number;
    star_hotel: string | null;
    check_in_date: Date;
    check_out_date: Date;
    room_number: number;
    price: number;
    name_hotel: string;
    rate: string;
    geo_hotel: string;
    freebies_options: string[];
    idHotel: number;
    variaty_hotel: string;
    main_image: string;
    amenities_option: string[];
    image_slider?: string | null;
  }[];
  userId: {
    id: number;
    description_type_room: string;
    price_type_room_hotel: number;
    id_hotel_tpye_room: number;
  }[];
}

const reservationRoomHotelFinal = async ({ item, userId }: IntItem) => {
  const session = await getServerSession(authOptions);
  const userSession = await prisma.user.findUnique({
    where: {
      id: session?.user.id,
      email: session ? session.user.email! : "null",
    },
  });

  return (
    <section>
      <div className="container">
        <div className="reservation">
          <div className="reservation__main-block">
            <div className="reservation_info-block">
              <div className="reservation__block-info-plane">
                {item.map((item) => (
                  <h2 key={item.id} className="reservation__header-name-plane">
                    {item.name_hotel}
                  </h2>
                ))}
                {userId.map((item) => (
                  <p
                    key={item.id}
                    className="reservation__description-price-ticket"
                  >
                    ${item.price_type_room_hotel}
                  </p>
                ))}
              </div>
              <div className="reservation__block-uu-options">
                <div className="reservation__block-location">
                  <Image
                    src={location_icon}
                    alt="icon_location"
                    className="reservation__image-geo"
                  />
                  {item.map((item) => (
                    <p
                      key={item.id}
                      className="reservation__description-location-geo"
                    >
                      {item.geo_hotel}
                    </p>
                  ))}
                </div>
                <div className="reservation__block-interactive">
                  <button className="reservation__share-btn">
                    <Image
                      src={share_icon}
                      alt="icon_share"
                      className="reservation__image-share"
                    />
                  </button>
                  <button className="reservation__download-ticket">
                    Download
                  </button>
                </div>
              </div>
            </div>
            <div className="reservation__main-ticket">
              <div className="reservation__block-time">
                <div className="reservation__block-time-inside">
                  <div className="reservation__time-fly">
                    {item.map((item) => (
                      <p
                        key={item.id}
                        className="reservation__description-time"
                      >
                        {item.check_in_date.toDateString()}
                      </p>
                    ))}
                    <p className="reservation__description-name">Check-In</p>
                  </div>
                </div>
                <div className="reservation__block-image-plane">
                  <Image
                    src={vector_1}
                    alt="image_vector_first"
                    className="reservation__image-vector-first"
                  />
                  <Image
                    src={build_icon}
                    alt="image_plane"
                    className="reservation__image-plane"
                  />
                  <Image
                    className="reservation__image-vector-second"
                    src={vector_4}
                    alt="image_vector_second"
                  />
                </div>
                <div className="reservation__time-fly">
                  {item.map((item) => (
                    <p key={item.id} className="reservation__description-time">
                      {item.check_out_date.toDateString()}
                    </p>
                  ))}
                  <p className="reservation__description-name">Check-Out</p>
                </div>
              </div>
              <div className="reservation__blockinfo-ticket-with-user">
                <div className="reservation__block-info-user">
                  <div className="reservation__block-user-image-name">
                    {typeof userSession?.image !== "string" ? (
                      <Image
                        src={user_image_default}
                        alt="image_user"
                        className="reservation__image-user-default"
                      />
                    ) : (
                      <Image
                        src={userSession?.image as string}
                        width={50}
                        height={50}
                        alt="image_user"
                        className="reservation__image-user"
                      />
                    )}
                    {/* <Image className='reservation__image-user' src={user_image} alt='image_user' /> */}
                    <div className="reservation__block-uu-description">
                      <p className="reservation__description-user-name">
                        {userSession!.userName.slice(0, 1).toUpperCase() +
                          userSession!.userName.slice(1).toLocaleLowerCase()}
                      </p>
                    </div>
                  </div>
                  {userId.map((item) => (
                    <p
                      key={item.id}
                      className="reservation__description-class-ticket"
                    >
                      Superior room - {item.description_type_room}
                    </p>
                  ))}
                </div>
                <div className="reservation__detailed-info-ticket">
                  <div className="reservation__block-detailed-info-ticket-inside">
                    <div className="reservation__list-item">
                      <Image
                        src={image_gate}
                        alt="icon_info"
                        className="reservation__image-icon"
                      />
                      <div className="reservation__inf-ticket-user">
                        <p className="reservation__description-name">
                          Check-In-time
                        </p>
                        {item.map((item) => (
                          <p
                            key={item.id}
                            className="reservation__description-value"
                          >
                            {item.check_in_date
                              .toLocaleTimeString()
                              .slice(0, 5)}{" "}
                            pm
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="reservation__list-item">
                      <Image
                        src={image_gate}
                        alt="icon_info"
                        className="reservation__image-icon"
                      />
                      <div className="reservation__inf-ticket-user">
                        <p className="reservation__description-name">
                          Check-out-time
                        </p>
                        {item.map((item) => (
                          <p
                            key={item.id}
                            className="reservation__description-value"
                          >
                            {item.check_in_date
                              .toLocaleTimeString()
                              .slice(0, 5)}{" "}
                            pm
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="reservation__list-item">
                      <Image
                        src={image_time}
                        alt="icon_info"
                        className="reservation__image-icon"
                      />
                      <div className="reservation__inf-ticket-user">
                        <p className="reservation__description-name">
                          Room no.
                        </p>
                        <p className="reservation__description-value">
                          On arival
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="reservation__block-barcode">
                    <div className="reservation__block-description-barcode">
                      <p className="reservation__description-name-barcode">
                        EK
                      </p>
                      <p className="reservation__description-value-barcode">
                        ABC12345
                      </p>
                    </div>
                    <Image src={code_image} alt="image_code" />
                  </div>
                </div>
              </div>
              <div className="reservation__block-fly-images">
                <div className="reservation__block-low">
                  <Image
                    src={image_block}
                    alt="image_logo"
                    className="reservation__image-logo"
                  />
                </div>
              </div>
            </div>
            <div className="reservation__block-uul">
              <div className="reservation__block-terms">
                <h2 className="reservation__header-term">
                  Terms and Conditions
                </h2>
                <div className="reservation__block-descr">
                  <h3 className="reservation__header-block-description">
                    Payments
                  </h3>
                  <ul className="reservation__list-box">
                    <li className="reservation__list-item">
                      <p className="reservation__description-main-term">
                        If you are purchasing your ticket using a debit or
                        credit card via the Website, we will process these
                        payments via the automated secure common payment gateway
                        which will be subject to fraud screening purposes.{" "}
                      </p>
                    </li>
                    <li className="reservation__list-item">
                      <p className="reservation__description-main-term">
                        If you do not supply the correct card billing address
                        and/or cardholder information, your reservation will not
                        be confirmed and the overall cost may increase. We
                        reserve the right to cancel your reservation if payment
                        is declined for any reason or if you have supplied
                        incorrect card information. If we become aware of, or is
                        notified of, any fraud or illegal activity associated
                        with the payment for the reservation, the reservation
                        will be cancelled and you will be liable for all costs
                        and expenses arising from such cancellation, without
                        prejudice to any action that may be taken against us.
                      </p>
                    </li>
                    <li className="reservation__list-item">
                      <p className="reservation__description-main-term">
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
              <div className="reservation__block-contacts">
                <h2 className="reservation__header-block-contact">
                  Contact Us
                </h2>
                <p className="reservation__description-contact">
                  If you have any questions about our Website or our Terms of
                  Use, please contact:
                </p>
                <p className="reservation__description-contact">
                  Golobe Group Q.C.S.C
                </p>
                <p className="reservation__description-contact">Golobe Tower</p>
                <p className="reservation__description-contact">
                  P.O. Box: 22550
                </p>
                <p className="reservation__description-contact">
                  Doha, State of Qatar
                </p>
                <p className="reservation__description-contact">
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

export default reservationRoomHotelFinal;
