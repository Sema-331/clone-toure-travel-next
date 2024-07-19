import React, { memo } from "react";
import icon_arrow_left from "./../../../public/images/chevron_forward_left.png";
import icon_arrow_right from "./../../../public/images/chevron_forward_right.png";
import Image from "next/image";

const PaginationComment = memo(
  ({ pageNumber, handlePrev, handleNext, totalPages }: any) => {
    console.log("pag2");
    return (
      <div className="comment__block-interactive-review">
        <button onClick={handlePrev} type="button">
          <Image
            src={icon_arrow_left}
            alt="icon_left_arrow"
            className="comment__arrow-left"
          />
        </button>
        <p className="comment__active-page">
          {pageNumber} of {totalPages}
        </p>
        <button onClick={handleNext} type="button">
          <Image
            src={icon_arrow_right}
            alt="icon_right_arrow"
            className="comment__arrow-right"
          />
        </button>
      </div>
    );
  }
);

export default PaginationComment;
