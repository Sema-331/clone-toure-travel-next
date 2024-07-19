import React, { useState } from "react";
import Btn from "@/components/Landing/Rewies/Btn";
import Image from "next/image";
import { useAppSelector } from "@/helperRedux/helperRedux";
import { useRouter } from "next/navigation";
import { formatDateString } from "@/helpers/FormDateString";

interface PropInt {
  user2: {
    id: string;
    userName: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    lastName: string | null;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    adress?: string | null;
    date_birth: string | null;
  } | null;
  item: {
    id: number;
    image: any;
    search: string;
    title: string;
    description: string;
    price: string;
  };
}

const SingleOption = ({ item, user2 }: PropInt) => {
  const selector = useAppSelector((item) => item.redSlice.stateCity);
  const [stateGeo, setStateGeo] = useState<boolean>(false);

  const dates = formatDateString(new Date().toString());
  const router = useRouter();
  const onSearchTicket = (event: React.FormEvent) => {
    event.preventDefault();
    if (user2?.adress?.length || selector.length > 0) {
      setStateGeo(false);
      const newUrl = `/FindFly/FlightList_result?name_airport_from=${
        user2?.adress ? user2?.adress : selector
      }&name_airport_to=${item.title}&type=Econom&date_from=${dates}`;

      router.push(newUrl);
    } else {
      setStateGeo(true);
    }
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
        onClick={onSearchTicket}
        className="options__btn-mode-details"
      >
        Book Flight
      </button>
    </div>
  );
};

export default SingleOption;
