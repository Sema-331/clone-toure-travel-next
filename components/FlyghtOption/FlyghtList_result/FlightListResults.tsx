"use client";

import FormFill from "@/components/Landing/Hero/FormFill";
import React, { memo, useEffect, useState } from "react";
import FlyRoute from "./FlyRoute";
import { useAppDispatch, useAppSelector } from "@/helperRedux/helperRedux";
import { handlePuchValue } from "@/slice/slices";
import Skeleton from "@/ui/Skeleton/Fly_ticket/skeleton";
import FormFiltersSideLeft from "./FormFiltersSideLeft";
import NavOptimalTimeFly from "./NavOptimalTimeFly";
import ComponentShowingContent from "./ComponentShowingContent";
import ErrorRequest from "./ErrorRequest";
import LoadMore from "@/hooks/LoadMore";
import RemoveTypeClass from "@/hooks/RemoveTypeClass";
import URLSearchFlights from "@/hooks/URLSearchFlights";

interface IntProp {
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
  searchParams: {
    name_airport_from: string;
    name_airport_to: string;
    type: string;
    min_price: string;
    max_price: string;
    name_airlines: string;
    trips: string;
    sort_price: string;
    date_from: Date;
    route_rate: string;
    sort_date: string;
  };
}

const FlightListResults = memo(({ user2, searchParams }: IntProp) => {
  const dispatch = useAppDispatch();
  const selectorLoad = useAppSelector(
    (item) => item.redSlice.checkedValueVisibleItemFly
  );

  console.log(selectorLoad);

  const { stateVisibleProduct, loadMoreProduct } = LoadMore();
  const [stateLoading, setStateLoading] = useState<boolean>(true);

  const [stateRat, setStateRat] = useState<boolean>(true);
  useState<String>("Cheapest");
  const [stateModalSort, setStateModalSort] = useState<string>("Recommended");

  const [stateRoute, setStateRoute] = useState([]);
  useEffect(() => {
    const handleGetData = async () => {
      const res = await fetch("/api/GetRoutePlane");
      const result = await res.json();
      console.log(result);
      setStateRoute(result.data);
    };
    handleGetData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/SearchMainPageFly?name_airport_from=${searchParams.name_airport_from}&name_airport_to=${searchParams.name_airport_to}&date_from=${searchParams.date_from}&type=${searchParams.type}&min_price=${searchParams.min_price}&max_price=${searchParams.max_price}&name_airlines=${searchParams.name_airlines}&trips=${searchParams.trips}&sort_price=${searchParams.sort_price}&route_rate=${searchParams.route_rate}&sort_date=${searchParams.sort_date}`
        );
        const data = await res.json();
        setTest(data);
        dispatch(handlePuchValue(data));
        setStateLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [searchParams]);

  const {
    onSearch,
    setStateSortDate,
    setStateSearch,
    setStateRateRoute,
    setStateMaxPrice,
    setStateMinPrice,
    setDateStartFrom,
    setNameType,
    setNameAirportFrom,
    setNameAirportTo,
    test,
    setTest,
    stateMinPrice,
    stateMaxPrice,
    setStateNameAirlines,
    setStateTrips,
  } = URLSearchFlights(searchParams);

  const { handleFnCheckedInputTrips, handleFnCheckedInput } = RemoveTypeClass(
    setStateNameAirlines,
    setStateTrips
  );

  console.log("main component");

  return (
    <section>
      <div className="container">
        <div className="fly-res">
          <div className="fly-res__block">
            {stateRoute.map((item: { review_table_single_fly: any }) => (
              <>{item.review_table_single_fly.length}</>
            ))}
            <FormFill
              onSearch={onSearch}
              setNameType={setNameType}
              setDateStartFrom={setDateStartFrom}
              setNameAirportTo={setNameAirportTo}
              setNameAirportFrom={setNameAirportFrom}
            />
          </div>
          <div className="fly-res__main-block-search-results">
            <div className="fly-res__block-search-results">
              <div className="fly-res__block-search-results-inside">
                <h2 className="fly-res__block-header">Filters</h2>
                <FormFiltersSideLeft
                  handleFnCheckedInputTrips={handleFnCheckedInputTrips}
                  handleFnCheckedInput={handleFnCheckedInput}
                  stateRat={stateRat}
                  setStateRat={setStateRat}
                  setStateRateRoute={setStateRateRoute}
                  onSearch={onSearch}
                  setStateMinPrice={setStateMinPrice}
                  setStateMaxPrice={setStateMaxPrice}
                  stateMinPrice={stateMinPrice}
                  stateMaxPrice={stateMaxPrice}
                />
              </div>
            </div>
            <div className="fly-res__block-uu-blb">
              <div className="fly-res__block-results">
                <NavOptimalTimeFly
                  setStateSortDate={setStateSortDate}
                  setStateSearch={setStateSearch}
                />
                <ComponentShowingContent
                  stateRoute={stateRoute}
                  stateVisibleProduct={stateVisibleProduct}
                  stateModalSort={stateModalSort}
                  setStateSearch={setStateSearch}
                  setStateModalSort={setStateModalSort}
                  test={test}
                />
              </div>
              {!stateLoading ? (
                test.length > 0 ? (
                  test
                    .slice(0, stateVisibleProduct)
                    .map((item: { id: number }) => (
                      <>
                        {item.id}
                        <FlyRoute user2={user2} key={item.id} item={item} />
                      </>
                    ))
                ) : (
                  <ErrorRequest />
                )
              ) : (
                <div className="fly-res__skeleton-block">
                  <Skeleton />
                </div>
              )}
              {test.length > 0 ? (
                <button
                  onClick={() => loadMoreProduct(test.length)}
                  className={
                    stateVisibleProduct === test.length
                      ? "fly-res__show-more-res-disabled"
                      : "fly-res__show-more-res"
                  }
                >
                  Show more results
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FlightListResults;
