"use client";

import { useAppDispatch } from "@/helperRedux/helperRedux";
import { handleCLickLoadMore } from "@/slice/slices";
import React, { useState } from "react";

const LoadMoreProduct = () => {
  const dispatch = useAppDispatch();
  const [stateVisibleProduct, setStateVisibleValue] = useState<number>(1);
  const loadMoreProduct = () => {
    setStateVisibleValue((prev) => prev + 1);
    dispatch(handleCLickLoadMore(stateVisibleProduct + 1));
  };
  const handleLoadMore = (valueLength: number) => {
    if (stateVisibleProduct !== valueLength) {
      loadMoreProduct();
    }
  };

  return { stateVisibleProduct, handleLoadMore };
};

export default LoadMoreProduct;
