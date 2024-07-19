"use client";

import { useRouter } from "next/navigation";
import React from "react";

const RemoveTypeClass = (setStateNameAirlines?: any, setStateTrips?: any) => {
  const router = useRouter();

  const onRemoveTypeClass = (
    typeToRemove: string,
    type: string,
    typeState: any
  ) => {
    const searchParams = new URLSearchParams(window.location.search);
    let typeClassValues = searchParams.getAll(type).join(",").split(",");
    typeClassValues = typeClassValues.filter((value) => value !== typeToRemove);
    console.log(typeClassValues);
    searchParams.delete(type);
    typeClassValues.forEach((value) => {
      searchParams.append(type, value);
    });
    const newUrl = `/FindFly/FlightList_result?${searchParams.toString()}`;
    console.log(newUrl);
    router.push(newUrl);
    typeState(typeClassValues);
  };

  const handleFnCheckedInput = (
    v: boolean,
    typeToRemove: string,
    type: string
  ) => {
    v
      ? onRemoveTypeClass(typeToRemove, type, setStateNameAirlines)
      : setStateNameAirlines((prev: string[]) => [
          ...(prev as string[]),
          typeToRemove,
        ]);
  };

  const handleFnCheckedInputTrips = (
    v: boolean,
    typeToRemove: string,
    type: string
  ) => {
    v
      ? onRemoveTypeClass(typeToRemove, type, setStateTrips)
      : setStateTrips((prev: string[]) => [
          ...(prev as string[]),
          typeToRemove,
        ]);
  };

  return { handleFnCheckedInputTrips, handleFnCheckedInput };
};

export default RemoveTypeClass;
