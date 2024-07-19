"use client";

import React, { useState } from "react";
import SingleCommentComponent from "./SingleCommentComponent";
import PaginationComment from "./PaginationComment";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Pagination from "@/ui/Pagination";

interface NewInt {
  userSecond: any;
}

const CommentComponentUU = ({ userSecond }: NewInt) => {
  const { handlePrev, handleNext, pageNumber, paginatedPosts, postNumber } =
    Pagination(userSecond);

  return (
    <div>
      <div className="commnet__block-list-box">
        <>
          {paginatedPosts.map((item: any) => (
            <SingleCommentComponent
              item={item}
              key={item.id}
              author_image={"/images/Ellipse 1.png"}
            />
          ))}
        </>
      </div>
      {userSecond.length > 0 ? (
        <PaginationComment
          handlePrev={handlePrev}
          handleNext={handleNext}
          pageNumber={pageNumber}
          totalPages={Math.ceil(userSecond.length / postNumber)}
        />
      ) : null}
    </div>
  );
};

export default CommentComponentUU;
