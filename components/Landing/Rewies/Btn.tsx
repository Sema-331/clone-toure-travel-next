import Link from "next/link";
import React from "react";

const Btn = () => {
  return (
    <div className="reviews__btn-block">
      <Link href="/Reviews" className="reviews__btn">
        See All
      </Link>
    </div>
  );
};

export default Btn;
