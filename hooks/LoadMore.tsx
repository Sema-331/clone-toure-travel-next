"use client";

import { useAppDispatch } from "@/helperRedux/helperRedux";
import { handleCliclLoadMoreFly } from "@/slice/slices";
import React, { useState } from "react";

const LoadMore = () => {
  const dispatch = useAppDispatch();

  const [stateVisibleProduct, setStateVisibleValue] = useState<number>(1);
  const loadMoreProduct = (valueLength: number) => {
    if (valueLength > stateVisibleProduct) {
      setStateVisibleValue((prev) => prev + 1);
      dispatch(handleCliclLoadMoreFly(stateVisibleProduct + 1));
    }
    return;
  };
  return { loadMoreProduct, stateVisibleProduct, setStateVisibleValue };
};

export default LoadMore;
