import Image from "next/image";
import Link from "next/link";
import React from "react";
import image_first from "./../../../public/images/Rectangle 5 (1).png";

const HotelRoomSingle = ({
  item,
}: {
  item: {
    description_type_room: any;
    price_type_room_hotel: any;
    id_hotel_tpye_room: any;
    id: any;
  };
}) => {
  return (
    <div className="alls__block-list-item-rooms">
      <div className="alls__block-image-room">
        <Image
          src={image_first}
          alt="image_room"
          className="alls__image-room"
        />
        <p className="alls__description-room">
          Superior room - {item.description_type_room}
        </p>
      </div>
      <div className="alls__block-more-info-detailed">
        <p className="alls__description-final-price">
          <span>${item.price_type_room_hotel}</span>/night
        </p>
        <Link
          href={`/FindHotel/ResultsHotels/${item.id_hotel_tpye_room}/${item.id}`}
          className="alls__btn-detailed-info"
        >
          Book now
        </Link>
      </div>
    </div>
  );
};

export default HotelRoomSingle;
