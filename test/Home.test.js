// import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import OptionsMain from "@/components/Landing/Options/OptionsMain";
import SearchCity from "@/components/Landing/Header/SearchCity";
import { StoreProvider } from "@/store/StoreProvider";
import Geo from "@/components/Landing/Header/Geo";
import { usePathname } from "next/navigation";
import FormFooter from "@/components/Landing/Footer/FormFooter";
import AddPromoModal from "@/components/Landing/Hero/AddPromoModal";
import ModalPromoCode from "@/components/Landing/Hero/ModalPromoCode";
import { convertationTime } from "@/helpers/ConvertingTime";
const searchParams = {
  search: "test",
  variaty: "type1",
  sort_price: "low-to-high",
  hotel_rate: "5",
  freebies_options: "free-breakfast",
  amenities_options: "pool",
  min_price: "100",
  max_price: "500",
  name_airport_from: "JFK",
  name_airport_to: "LAX",
  type: "flight",
  date_from: new Date("2023-07-01"),
  date_from_hotel: new Date("2023-07-01"),
  date_check_out: "2023-07-07",
  type_room: "suite",
};

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("all home page test", () => {
  test("render", () => {
    render(<OptionsMain />);
    const elem = screen.getByText(
      /Search Flights & Places Hire to our most popular destinations/i
    );
    expect(elem).toBeInTheDocument();
  });
  test("find findl flight", () => {
    render(
      <StoreProvider>
        <SearchCity setState={() => true} />
      </StoreProvider>
    );
    const elem = screen.getByText(/Where are you located/i);
    expect(elem).toBeInTheDocument();
  });
  test("find findl flight2", () => {
    usePathname.mockReturnValue("/FindFly");
    render(
      <StoreProvider>
        <Geo userSession={""} />
      </StoreProvider>
    );
    const elem = screen.queryByText(/Where are you located/i);
    expect(elem).not.toBeInTheDocument();
  });
  test("test3", async () => {
    usePathname.mockReturnValue("/FindFly");
    render(
      <StoreProvider>
        <Geo userSession={""} />
      </StoreProvider>
    );
    const elem = screen.getByTestId("openModal");
    expect(elem).toBeInTheDocument();
    fireEvent.click(elem);
    const elem2 = screen.queryByText("Where are you located");
    expect(
      await screen.findByText("Where are you located")
    ).toBeInTheDocument();
    screen.debug();
  });
  // test("test5", () => {
  //   render(<SearchBlock searchParams={searchParams} />);
  //   const elem = screen.getByText(/Helping Others/i);
  //   expect(elem).toBeInTheDocument();
  // });
  test("test6", async () => {
    render(<FormFooter />);
    const btn = screen.getByText("Subscribe");
    expect(btn).toBeInTheDocument();
    const input = screen.getByTestId("input");
    expect(
      screen.queryByText("You have successfully subscribed to the updates")
    ).not.toBeInTheDocument();
    //   fireEvent.input(input, { target: { value: "svelesik@inbox.ru" } });
    fireEvent.click(btn);
    expect(await screen.findByText("Required field")).toBeInTheDocument();
    // expect(await screen.findByText("Error")).toBeInTheDocument();
  });
  test("test7", async () => {
    const mockRegister = () => ({
      name: "promo_code",
      onChange: () => {},
      onBlur: () => {},
      ref: () => {},
    });
    render(<AddPromoModal register={mockRegister} />);

    expect(screen.queryByText(/Add Promo Code/i)).toBeInTheDocument();
    expect(screen.getByTestId("btnOpenModal")).toBeInTheDocument();
    expect(screen.queryByText(/your code/i)).not.toBeInTheDocument();

    // Ожидание открытия модального окна
    fireEvent.click(screen.getByTestId("btnOpenModal"));
    expect(await screen.findByText("Enter your code")).toBeInTheDocument();

    // Получение элементов после открытия модального окна
    const elem = await screen.findByTestId("jojo");
    const btn = await screen.findByTestId("koko");

    // Изменение значения input
    fireEvent.change(elem, { target: { value: "fofo" } });
    expect(elem).toHaveValue("fofo");
    // expect(elem.value).toBe("fofo"); // Проверка значения input

    // // Клик по кнопке
    fireEvent.click(btn);
    expect(screen.queryByText("Your code:fofo")).toBeInTheDocument();

    // // Проверка наличия текста после клика по кнопке

    screen.debug();
  });
  test("test form footer", async () => {
    render(<FormFooter />);
    const elem = screen.getByPlaceholderText("Your email adress");
    expect(elem).toBeInTheDocument();
    fireEvent.change(elem, { value: { target: "semavelesik@mail.ru" } });
    //expect(elem.value).toBe("semavelesik@mail.ru");
    const btn = screen.getByTestId("btn-footer");
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    // await expect(screen.queryByTestId("lolo")).toBeInTheDocument();
  });
  test("ghfjdks", () => {
    const dateFirst = new Date("2024-07-25T12:00:00");
    const dateSecond = new Date("2024-07-25T11:00:00");
    const res = convertationTime(dateFirst, dateSecond);
    expect(res).tobe(60);
  });
  test("gjfdk", () => {
    const date1 = new Date("2024-07-25T11:00:00");
    const date2 = new Date("2024-07-25T12:00:00");

    const result = convertationTime(date1, date2);
    expect(result).toBe(-60);
  });

  test("ghfjdksd", () => {
    const date1 = new Date("2024-07-25T12:00:00");
    const date2 = new Date("2024-07-25T12:00:00");

    const result = convertationTime(date1, date2);
    expect(result).toBe(0);
  });

  test("gfdjskmnf", () => {
    const date1 = new Date("2024-07-25T12:00:00Z"); // UTC time
    const date2 = new Date("2024-07-25T14:00:00+02:00"); // UTC+2 time

    const result = convertationTime(date1, date2);
    expect(result).toBe(0);
  });
  // test("lale", () => {
  //   const mockRegister = () => ({
  //     name: "promo_code",
  //     onChange: () => {},
  //     onBlur: () => {},
  //     ref: () => {},
  //   });

  //   render(<AddPromoModal register={mockRegister} />);

  //   const btnOpenModal = screen.getByTestId("btnOpenModal");
  //   expect(btnOpenModal).toBeInTheDocument();

  //   act(() => {
  //     fireEvent.click(btnOpenModal);
  //   });

  //   const elem = screen.findByTestId("jojo");
  //   expect(elem).toBeInTheDocument();

  //   const btn = screen.queryByTestId("koko");
  //   expect(btn).toBeInTheDocument();

  //   // fireEvent.change(elem, { target: { value: "bobob" } });
  //   // expect(elem).toBeInTheDocument();
  //   // expect(screen.queryByText("bobob")).toBeInTheDocument();
  // });
  test("convertTets", () => {
    const date =
      "Sun Jul 28 2024 00:00:00 GMT+0500 (Екатеринбург, стандартное время)";
    const fn = formatDateString(date);
    expect(fn).toBe("2024/07/28");
  });
});
