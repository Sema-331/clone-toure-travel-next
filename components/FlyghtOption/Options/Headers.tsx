import BtnNoFill from "@/components/BtnNoFill/BtnNoFill";
import Btn from "@/components/Landing/Rewies/Btn";
import React from "react";

const HeadersName = () => {
  return (
    <div className="options__block-headers">
      <div className="options__block-inside">
        <h2 className="options__header-inside">Fall into travel</h2>
        <p className="options__description-inside">
          Going somewhere to celebrate this season? Whether you’re going home or
          somewhere to roam, we’ve got the travel tools to get you to your
          destination.
        </p>
      </div>
      <div className="reviews__btn-block">
        <BtnNoFill href="/Reviews" className="reviews__btn">
          See All
        </BtnNoFill>
      </div>
      {/* <Btn /> */}
    </div>
  );
};

export default HeadersName;
