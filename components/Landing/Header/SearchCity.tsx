"use client";

import Image from "next/image";
import React, { memo, useEffect, useRef, useState } from "react";
import close_image from "./../../../public/images/close_icon.svg";
import search_image from "./../../../public/images/landing-page-house-searching-concept_23-2148304425 (1).jpg";
import { useAppDispatch, useAppSelector } from "@/helperRedux/helperRedux";
import { handleAddCities } from "@/slice/slices";
import { ToggleModalClose } from "@/services/ToggleModalClose";
import Loader from "@/ui/Loader/Loader";
import getCities from "@/services/getCities";

interface PropInt {
  setState: (v: boolean) => void;
}

const SearchCity = memo(function SearchCity({ setState }: PropInt) {
  console.log("click");

  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const secondRef = useRef(null);
  // const [stateCity, setStateCity] = useState([]);
  // const [filteredCities, setFilteredCities] = useState([]);
  const [inputState, setInputState] = useState("");
  // const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  // const { ref, setState } = ToggleModalClose("");

  // const [stateCountLength, setStateCountLength] = useState<number>(2)

  const handleCloseModal = (e: MouseEvent) => {
    if (ref.current && ref.current.contains(e.target as any)) {
      setState(true);
    } else if (ref.current && !ref.current.contains(e.target as any)) {
      setState(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseModal);
    return () => {
      document.removeEventListener("click", handleCloseModal);
    };
  }, []);

  const {
    fetchCities,
    stateCity,
    filteredCities,
    loading,
    setStateCity,
    setFilteredCities,
    setLoading,
  } = getCities();

  useEffect(() => {
    fetchCities();
  }, []);

  const handleInclude = (e: any) => {
    const query = e.target.value.toLowerCase();
    setInputState(query);
    setSearchLoading(true);

    setTimeout(() => {
      const filtered = stateCity.filter((item: any) =>
        item.name.toLowerCase().startsWith(query)
      );
      setFilteredCities(filtered);
      setSearchLoading(false);
    }, 500); // Simulate a delay of 500ms
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="head__block-modal-search-city" ref={ref}>
      {/* <input
        ref={secondRef}
          type='text'
          style={{ border: '1px solid red' }}
          value={inputState}
          onChange={handleInclude}
        />
        {searchLoading ? (
          <div>...Searching</div>
        ) : (
          <ul>
            { inputState.length >=2 ?  filteredCities.slice(0, 20).map((item: any) => (
              <li key={item.name}>{item.name}</li>
            )): null}
          </ul>
        )}
        {
            stateCity.filter((item: any) => item.population > 1000000).map((item: any) => (
                <>{item.name}</>
            ))
        } */}
      <div className="head__block-inside-modal">
        <div className="head__block-image-search">
          <Image
            src={search_image}
            alt="image_search"
            className="head__image-search"
          />
        </div>
        <div className="head__block-main-searching">
          <h2 className="head__description-header">Where are you located</h2>
          <div className="head__block-searching-input">
            <input
              className="head__input-searching"
              ref={secondRef}
              type="text"
              placeholder="Start searching"
              value={inputState}
              onChange={handleInclude}
            />
            {searchLoading ? (
              <div className="head__search-load">...Searching</div>
            ) : (
              <ul className="head__list-box-res">
                {inputState.length >= 2 ? (
                  filteredCities.map((item: any, i: number) => (
                    <li
                      data-testid={`list-item-cities-${i}`}
                      className="head__list-item-res"
                      key={i}
                    >
                      <p>{i}</p>
                      <div
                        onClick={() => dispatch(handleAddCities(item.name))}
                        className="head__main-block-res"
                      >
                        <div className="head__block-name-res-city">
                          <p className="head__description-name">
                            г. {item.name}
                          </p>
                        </div>
                        <div className="head__block-more-info-object">
                          <h3 className="head__header-uu">
                            {item.district} Федеральный округ,{" "}
                          </h3>
                          <p className="head__description-variaty">
                            {item.subject.toLowerCase().includes("край") ||
                            item.subject.toLowerCase().includes("область") ||
                            item.subject.toLowerCase().includes("ао") ? (
                              item.subject
                            ) : (
                              <> Республика {item.subject}</>
                            )}
                          </p>
                        </div>
                      </div>
                      {/* <button onClick={() => dispatch(handleAddCities(item.name))}>{item.name}</button> */}
                    </li>
                  ))
                ) : inputState.length === 1 ? (
                  <p>Недостаточно символов</p>
                ) : null}
              </ul>
            )}
          </div>
          <div className="head__block-cities-population-more">
            {stateCity
              .filter((item: any) => item.population > 548000)
              .map((item: any) => (
                <button
                  type="button"
                  onClick={() => dispatch(handleAddCities(item.name))}
                  key={item.id}
                  className="head__name-city"
                >
                  г. {item.name}
                </button>
              ))}
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setState(false)}
        className="head__close-modal-searching"
      >
        <Image
          src={close_image}
          alt="close_icon"
          className="head__image-searching-closes"
        />
      </button>
    </div>
  );
});

export default SearchCity;
