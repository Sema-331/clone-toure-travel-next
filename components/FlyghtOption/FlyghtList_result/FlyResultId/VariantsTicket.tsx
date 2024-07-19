import React from "react";
import SingleVariantTicketn from "./SingleVariantTicketn";

interface IntData {
  data: any;
  itemSecond: any;
  value: number;
}

const VariantsTicket = ({ data, itemSecond, value }: IntData) => {
  return (
    <section>
      <div className="container">
        {data.map((item: any, i: number) => (
          <SingleVariantTicketn
            itemSecond={itemSecond}
            value={value}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};

export default VariantsTicket;
