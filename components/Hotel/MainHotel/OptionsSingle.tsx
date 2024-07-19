import { formatDateString } from "@/helpers/FormDateString";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const OptionsSingle = ({ item }: any) => {
  const router = useRouter();
  const dates = formatDateString(new Date().toString());
  const datesCheckOut = formatDateString(new Date().toString(), 5);
  const onSearchHotel = (event: React.FormEvent) => {
    event.preventDefault();
    const newUrl = `/FindHotel/ResultsHotels?search=${item.search}&date_from_hotel=${dates}&date_check_out=${datesCheckOut}&type_room=1 double bed or 2 twin beds&variaty=Hotels`;
    router.push(newUrl);
  };

  return (
    <div className="options__block-places-inside">
      <Image
        src={item.image}
        alt="single_image_place"
        className="options__image-place"
        fill={true}
      />
      <div className="options__block-content">
        <div className="options__block-content-name">
          <h2 className="options__header-single-place">{item.title}</h2>
          <p className="options__description-single-place">
            {item.description}
          </p>
        </div>
        <p className="options__price-place">{item.price}</p>
      </div>
      <button
        type="submit"
        onClick={onSearchHotel}
        className="options__btn-mode-details"
      >
        Book a Hotel
      </button>
    </div>
  );
};

export default OptionsSingle;
