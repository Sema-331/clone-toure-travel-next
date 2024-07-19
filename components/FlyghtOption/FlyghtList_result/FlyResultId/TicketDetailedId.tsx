"use client";

import React, { useEffect, useState } from "react";
import FavouritesComponents from "../FavouritesComponents";
import loaction_image from "./../../../../public/images/Location.png";
import image_font from "./../../../../public/images/Rectangle 3 (7).png";
import share from "./../../../../public/images/Share=True.png";
import Image from "next/image";
import image_1 from "./../../../../public/images/Frame 186.png";
import image_2 from "./../../../../public/images/Frame 142.png";
import image_3 from "./../../../../public/images/Frame 189.png";
import image_4 from "./../../../../public/images/Frame 185.png";
import image_5 from "./../../../../public/images/Frame 182.png";
import image_6 from "./../../../../public/images/Frame 187.png";
import image_7 from "./../../../../public/images/Frame 189.png";
import image_8 from "./../../../../public/images/Frame 183.png";
import image_9 from "./../../../../public/images/Frame 184.png";
import search_button from "./../../../../public/images/Vector_search.png";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/helperRedux/helperRedux";
import { hadnleToggleLoad, handleClickCHckbox } from "@/slice/slices";
import FavouritesFly from "../FavouritesFly";

interface ClassTypeTicket {
  id: number;
  name_type: string;
  price: number;
  idClassType: number;
  idClassTypeTicket: number;
  id_table_ticket: TableTicket[];
}

interface TableTicket {
  id: number;
  idTableRoute: number;
  idUser: string;
  place: string;
  row: string;
  classTypeTicket: ClassTypeTicket[];
}

interface TableRoute {
  id: number;
  from_airport_fly: number;
  to_airport_fly: number;
  price: number;
  time_fly_from: Date;
  time_fly_to: Date;
  count_places: string;
  name_plane: string;
  trips: string[];
  rate: string[];
  type_class: string[];
  idTableComp: number;
  Table_ticket: TableTicket[];
  image_plane: string;
  geo_airplane: string;
  slider_image: string[];
  idTypeClass: ClassTypeTicket[];
  table_history_fly: any[];
  table_favourites_fly: any[];
  review_table_single_fly: any[];
  id_table_comp: any;
  from_airport: any;
  to_airport: any;
}

interface DataResponse {
  id: number;
  from_airport_fly: number;
  to_airport_fly: number;
  price: number;
  time_fly_from: Date;
  time_fly_to: Date;
  count_places: string;
  name_plane: string;
  trips: string[];
  rate: string[];
  type_class: string[];
  idTableComp: number;
  Table_ticket: TableTicket[];
  image_plane: string;
  geo_airplane: string;
  slider_image: string[];
  idTypeClass: ClassTypeTicket[];
  table_history_fly: any[];
  table_favourites_fly: any[];
  review_table_single_fly: any[];
  id_table_comp: any;
  from_airport: any;
  to_airport: any;
}

interface IntData {
  data: any;
  searchParams: {
    type_class: string;
  };
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
    date_birth: string | null;
  } | null;
  rest: any;
  item: any;
}

const TicketDetailedId = ({
  data,
  searchParams,
  user2,
  rest,
  item,
}: IntData) => {
  const selector = useAppSelector((item) => item.redSlice.dataCheckboxFly);
  const [stateFirst, setStateFirst] = useState<boolean>(true);
  const [stateSecond, setStateSecond] = useState<boolean>(false);
  const [stateThird, setStateThird] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const search = useSearchParams();
  const router = useRouter();

  const [stateTypeClass, setStateTypeClass] = useState<string[] | null>(
    search ? search.getAll("type_class") : []
  );
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/searchRouteCheckbox?type_class=${searchParams.type_class}`
        );
        const data = await res.json();
        setState(data);
        dispatch(handleClickCHckbox(data));
        dispatch(hadnleToggleLoad(false));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, [searchParams]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const res = await fetch('/api/TestSearchCheckboxUrl');
  //         const data = await res.json();
  //         setState(data);
  //         dispatch(handleClickCHckbox(data))
  //       } catch (error) {
  //         console.error('Error fetching products:', error);
  //       }
  //     };

  //     fetchData();
  //     if(stateTypeClass?.length === 0) {
  //       router.push(`/FindFly/FlightList_result/6`)
  //     }
  //   }, [])

  //   console.log(stateTypeClass)
  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const encodedType_class = stateTypeClass
      ? stateTypeClass!.map((item) => encodeURI(item)).join(",")
      : "";
    console.log(stateTypeClass);

    console.log(encodedType_class);
    // Собираем URL-строку только с заполненными параметрами
    const queryParams = [];
    if (encodedType_class) queryParams.push(`type_class=${encodedType_class}`);
    console.log(encodedType_class);

    // Собираем новый URL
    const queryString = queryParams.join("&");
    const newUrl = queryString
      ? `/FindFly/FlightList_result/${item.id}/?${queryString}`
      : "/FindFly/FlightList_result";

    console.log(queryString);

    console.log(newUrl);
    // Перенаправляем пользователя на новый URL
    router.push(newUrl, undefined, { scroll: false });
    // setStateTypeClass(typeClassValues);
  };

  //   const handlePushFreebiesOptions = (value: string) => {
  //     setStateTypeClass(stateTypeClass?.push(value))
  // }

  console.log(state);
  console.log(selector);

  const onRemoveTypeClass = (typeToRemove: string) => {
    // Создаем новый объект URLSearchParams на основе текущего URL
    const searchParams = new URLSearchParams(window.location.search);

    // Получаем текущие значения параметра "type_class"
    let typeClassValues = searchParams
      .getAll("type_class")
      .join(",")
      .split(",");

    // Удаляем значение typeToRemove из массива значений
    typeClassValues = typeClassValues.filter((value) => value !== typeToRemove);

    console.log(typeClassValues);

    // Обновляем параметр "type_class" в URLSearchParams
    searchParams.delete("type_class");
    typeClassValues.forEach((value) => {
      searchParams.append("type_class", value);
    });

    // Собираем новый URL
    const newUrl = `/FindFly/FlightList_result/1?${searchParams.toString()}`;

    console.log(newUrl);
    // Перенаправляем пользователя на новый URL
    router.push(newUrl);

    // Обновляем состояние stateTypeClass
    setStateTypeClass(typeClassValues);
  };

  // useEffect(() => {
  //     setStateTypeClass(search.getAll("type_class"));
  // }, [searchParams]);

  useEffect(() => {
    setStateFirst;
  }, []);

  const handleFnCheckedInput = (stateInput: boolean, typeToRemove: string) => {
    stateInput
      ? onRemoveTypeClass(typeToRemove)
      : setStateTypeClass((prev) => [...prev, typeToRemove]);
  };

  const value =
    rest.length === 0
      ? "4.5*"
      : (
          rest.reduce((prev, item) => prev + Number(item.rating), 0) /
          rest.length
        ).toFixed(1);

  return (
    <section>
      {
        // state.map((item) => (
        //     <>
        //         {item.classTypeTicket.length !== 0 ?
        //             <>{item.row}</>
        //          : null}
        //     </>
        // ))
      }
      <button onClick={() => onRemoveTypeClass("Econom")}>DELETE ECONOM</button>
      <button onClick={() => onRemoveTypeClass("First Class")}>
        DELETE fIRST CLASS
      </button>
      <div className="container">
        {data.map((item, i) => (
          <div key={i} className="view__block">
            <div className="view__block-main">
              <div className="view__block-info">
                <div className="view__info-plane">
                  <div className="view__block-detailed-location-inside">
                    <h2 className="view__name-plane">
                      {item.id_table_comp.name_company} {item.name_plane}
                    </h2>
                    <div className="view__block-desc">
                      <Image
                        src={loaction_image}
                        alt="icon_location"
                        className="view__icon-location"
                      />
                      <p className="view__description-location">
                        {item.geo_airplane}
                      </p>
                    </div>
                    <div className="view__block-ratings">
                      <p className="view__describe-rate">{value}</p>
                      <p className="view__description-reviews">
                        <span>
                          {value > 3 && value < 4 ? (
                            <>Medium</>
                          ) : value > 4 && value < 4.5 ? (
                            <>Good</>
                          ) : (
                            <>Very Good</>
                          )}
                        </span>
                        54 reviews
                      </p>
                    </div>
                  </div>
                  <div className="view__options">
                    <p className="view__price-plane-ticket">${item.price}</p>
                    <div className="view__block-utint">
                      {/* <FavouritesComponents /> */}
                      <FavouritesFly item={item} user2={user2} />
                      <button className="view__share-links">
                        <Image
                          src={share}
                          className="view__share-links-image"
                          alt="image_share"
                        />
                      </button>
                      <button className="view__book-ticket">Book now</button>
                    </div>
                  </div>
                </div>
                <div className="view__block-Imge-font">
                  <Image
                    src={image_font}
                    alt="image_font"
                    className="view__image-font"
                  />
                </div>
                <div className="view__gallery-image">
                  <div className="view__block-gallery-image-insides">
                    <h2 className="view__header-gallery">
                      Basic Economy Features
                    </h2>
                    <form onSubmit={onSearch} className="view__choose-class">
                      <div className="view__choose-class-list-item">
                        <input
                          type="checkbox"
                          className="view__checkbox-agree"
                          onChange={() => setStateFirst(!stateFirst)}
                          checked={stateFirst}
                          onClick={() =>
                            handleFnCheckedInput(stateFirst, "Econom")
                          }
                        />
                        <p className="view__description-name-class-choose">
                          Economy
                        </p>
                      </div>
                      <div className="view__choose-class-list-item">
                        <input
                          data-testid="input_checkbox2"
                          type="checkbox"
                          className="view__checkbox-agree"
                          checked={stateSecond}
                          onChange={() => setStateSecond(!stateSecond)}
                          onClick={() =>
                            handleFnCheckedInput(stateSecond, "First Class")
                          }
                        />
                        <p className="view__description-name-class-choose">
                          First Class
                        </p>
                      </div>
                      <div className="view__choose-class-list-item">
                        <input
                          type="checkbox"
                          className="view__checkbox-agree"
                          checked={stateThird}
                          onChange={() => setStateThird(!stateThird)}
                          onClick={() =>
                            handleFnCheckedInput(stateThird, "Business")
                          }
                        />
                        <p className="view__description-name-class-choose">
                          Busines Class
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="view__btn-search-checkboxes"
                      >
                        <Image
                          src={search_button}
                          alt="btn_search"
                          className="view__button-search"
                        />
                      </button>
                    </form>
                  </div>
                  {stateFirst ? (
                    <div
                      className={
                        stateSecond
                          ? "view__block-main-gallery-active"
                          : "view__block-main-gallery"
                      }
                    >
                      <Image
                        src={image_1}
                        alt="image_gallery"
                        className="view__image-gallery"
                      />
                      <Image
                        src={image_2}
                        alt="image_gallery"
                        className="view__image-gallery"
                      />
                      <Image
                        src={image_3}
                        alt="image_gallery"
                        className="view__image-gallery"
                      />
                      <Image
                        src={image_4}
                        alt="image_gallery"
                        className="view__image-gallery"
                      />
                      <Image
                        src={image_5}
                        alt="image_gallery"
                        className="view__image-gallery"
                      />
                      <Image
                        src={image_6}
                        alt="image_gallery"
                        className="view__image-gallery"
                      />
                      <Image
                        src={image_7}
                        alt="image_gallery"
                        className="view__image-gallery"
                      />
                      <Image
                        src={image_8}
                        alt="image_gallery"
                        className="view__image-gallery"
                      />
                      <Image
                        src={image_9}
                        alt="image_gallery"
                        className="view__image-gallery"
                      />
                    </div>
                  ) : null}
                  {stateSecond ? (
                    <>
                      <h2 className="view__header-gallery-hint">
                        First Class Features
                      </h2>
                      <div
                        className={
                          stateThird
                            ? "view__block-main-gallery-active"
                            : "view__block-main-gallery"
                        }
                      >
                        <Image
                          src={image_1}
                          alt="image_gallery"
                          className="view__image-gallery"
                        />
                        <Image
                          src={image_2}
                          alt="image_gallery"
                          className="view__image-gallery"
                        />
                        <Image
                          src={image_3}
                          alt="image_gallery"
                          className="view__image-gallery"
                        />
                        <Image
                          src={image_4}
                          alt="image_gallery"
                          className="view__image-gallery"
                        />
                        <Image
                          src={image_5}
                          alt="image_gallery"
                          className="view__image-gallery"
                        />
                        <Image
                          src={image_6}
                          alt="image_gallery"
                          className="view__image-gallery"
                        />
                        <Image
                          src={image_7}
                          alt="image_gallery"
                          className="view__image-gallery"
                        />
                        <Image
                          src={image_8}
                          alt="image_gallery"
                          className="view__image-gallery"
                        />
                        <Image
                          src={image_9}
                          alt="image_gallery"
                          className="view__image-gallery"
                        />
                      </div>
                    </>
                  ) : null}
                  {stateThird ? (
                    <>
                      <h2 className="view__header-gallery-hint">
                        Business Class Features
                      </h2>
                      <div className="view__block-main-gallery">
                        <Image
                          src={image_1}
                          alt="image_gallery"
                          className="view__image-gallery"
                        />
                        <Image
                          src={image_2}
                          alt="image_gallery"
                          className="view__image-gallery"
                        />
                        <Image
                          src={image_3}
                          alt="image_gallery"
                          className="view__image-gallery"
                        />
                        <Image
                          src={image_4}
                          alt="image_gallery"
                          className="view__image-gallery"
                        />
                        <Image
                          src={image_5}
                          alt="image_gallery"
                          className="view__image-gallery"
                        />
                        <Image
                          src={image_6}
                          alt="image_gallery"
                          className="view__image-gallery"
                        />
                        <Image
                          src={image_7}
                          alt="image_gallery"
                          className="view__image-gallery"
                        />
                        <Image
                          src={image_8}
                          alt="image_gallery"
                          className="view__image-gallery"
                        />
                        <Image
                          src={image_9}
                          alt="image_gallery"
                          className="view__image-gallery"
                        />
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TicketDetailedId;
