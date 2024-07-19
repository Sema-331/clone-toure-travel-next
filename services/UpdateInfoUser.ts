export const updateUser = async (userInfo: {
  userName: string;
  email: string | null;
  phoneNumber: string | null;
  adress: string | null;
  date_birth: string | null;
}) => {
  const res = await fetch("/api/UpdateInfoUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  return res;
};

export const urlSearchFOrmHotel = async ({ searchParams }: any) => {
  const res = await fetch(
    `http://localhost:3000/api/search?search=${searchParams.search}&date_from_hotel=${searchParams.date_from_hotel}&type_room=${searchParams.type_room}&date_check_out=${searchParams.date_check_out}&variaty=Hotels`
  );
  if (!res.ok) {
    throw new Error("failed fetch");
  }
  return await res.json();
};

export const urlSearchFormTicket = async ({ searchParams }: any) => {
  const res = await fetch(
    `http://localhost:3000/api/SearchMainPageFly?name_airport_from=${searchParams.name_airport_from}&name_airport_to=${searchParams.name_airport_to}&date_from=${searchParams.date_from}&type=${searchParams.type}`
  );
  if (!res.ok) {
    throw new Error("failed fetch");
  }
  return await res.json();
};

export const subscribeEmail = async (data: { email: string }) => {
  const res = await fetch("/api/subscribeUpdates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res;
};

export const fetchFavouritesFly = async () => {
  const res = await fetch("/api/GetFavouritesFly");
  if (!res.ok) {
    throw new Error("Failed to fetch favourites hotel");
  }
  return res.json();
};

export const handleDeleteFavourites = async () => {
  const res = await fetch("/api/DeleteFavouritesFly", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      iduser: "4d6ec45e-60f4-4fc5-b60e-ba91f8e18272",
      idTableRoute: 1,
    }),
  });
  if (res.ok) {
    console.log("Все хорошо");
  }
  console.log("Все плохо");
};
