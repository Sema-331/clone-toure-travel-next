import Image from "next/image";
import React from "react";
import research_img from "./../../../public/images/man-is-looking-computer-screen-with-magnifying-glass-that-says-research_9206-8543.jpg";

const ErrorRequest = () => {
  return (
    <div className="hotel__block-failed-search">
      <div className="hotel__image-sad-smile">
        <Image className="hotel__image-sad" src={research_img} alt="icon" />
      </div>
      <div className="hotel__description-recommended-by-failed">
        <h2 className="hotel__header-recommended">
          We didn`t find anything for your request
        </h2>
        <p className="hotel__description-recommended">
          Change the request or refer to our recommendations
        </p>
      </div>
    </div>
  );
};

export default ErrorRequest;
