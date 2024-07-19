import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface IntItem {
  itemId: any;
  userSecond: any;
  cardValue: {
    id: number;
    cardholderName: string;
    cvc: string;
    expMonth: string;
    expYear: string;
    card_number: string;
    country_of_region: string | null;
    idUser: string;
  }[];
  findUser: {
    password: string;
    createdAt: Date;
    updatedAt: Date;
    userName: string;
    id: string;
    email?: string | null;
    emailVerified: Date | null;
    image: string | null;
    name: string | null;
    backgroundImage: string | null;
    phoneNumber: string | null;
    adress: string | null;
    date_birth: string | null;
  } | null;
  news?: any;
  item: any;
}

const CreditCardQueries = ({
  item,
  itemId,
  userSecond,
  cardValue,
  findUser,
  news,
}: IntItem) => {
  const [stateBtn, setStateBtn] = useState<boolean>(false);
  const [stateGuard, setStateGuard] = useState<boolean>(false);

  const router = useRouter();

  const handleClickSuccessPayHistoryAdd = async () => {
    const res = await fetch("/api/AddHistoryHotel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hotelId: item.id,
        userId: userSecond.id,
        type_room_hotel_id: itemId.id,
      }),
    });
    if (res.ok) {
      router.refresh();
      console.log("Все хорошо");
    }
    console.log("Все плохо");
  };

  const handleSuccessPay = () => {
    setStateBtn(true);
    handleClickSuccessPayHistoryAdd();
    // Cookies.set('success_pay', true)
    setTimeout(() => {
      router.push(
        `/FindHotel/ResultsHotels/${item.id}/${itemId.id}/booking_room_hotel`
      );
    }, 3000);
  };

  const handleClickSuccessPayHistoryAddFly = async () => {
    // const session = await getServerSession(authOptions);
    const res = await fetch("/api/AddHistoryTicket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idTableRoute: itemId.idTableRoute,
        place: itemId.place,
        row: itemId.row,
        idUser: userSecond.id,
        typeClass: news.id,
      }),
    });
    if (res.ok) {
      router.refresh();
      console.log("Все хорошо");
    }
    console.log("Все плохо");
  };

  const handleSuccessPayFly = () => {
    setStateBtn(true);
    handleClickSuccessPayHistoryAddFly();
    // Cookies.set('success_pay', true)
    setStateGuard(true);
    setTimeout(() => {
      router.push(
        `/FindFly/FlightList_result/${itemId.idTableRoute}/${itemId.id}/booking_ticket`
      );
    }, 3000);
  };

  return { handleSuccessPay, handleSuccessPayFly, stateBtn };
};

export default CreditCardQueries;
