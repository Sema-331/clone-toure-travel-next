"use client";

import React, { useState } from "react";

const Pagination = (userSecond: any) => {
  const [pageNumber, setPageNumber] = useState(1);
  const postNumber = 2;

  const currentPageNumber = (pageNumber - 1) * postNumber;
  const paginatedPosts = userSecond.slice(
    currentPageNumber,
    currentPageNumber + postNumber
  );

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    if (currentPageNumber + postNumber >= userSecond.length) return;
    setPageNumber(pageNumber + 1);
  };

  return { handlePrev, handleNext, pageNumber, paginatedPosts, postNumber };
};

export default Pagination;
