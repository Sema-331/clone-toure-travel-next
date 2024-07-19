import Image from "next/image";
import mini_logo from "./../../../../public/images/Frame 186__3.png";
import React from "react";

interface IntItem {
  item: any;
  itemSecond: {
    classTypeTicket: {
      name_type: string;
      price: number;
    }[];
  }[];
}

const FinalInfoComponent = ({ item, itemSecond }: IntItem) => {
  console.log("d");
  return (
    <>
      {itemSecond.map((value, i: number) => (
        <div key={i} className="book__block-final-information">
          <div className="book__blockinfo-plane">
            <Image
              src={item.image_plane}
              width={129}
              height={129}
              alt="mini_logo_plane"
              className="book__image-mini-logo"
            />
            <div className="book__block-uus">
              <div className="book__inf-plane">
                <p className="book__description-name-company-plane">
                  {value.classTypeTicket.map((item) => (
                    <>{item.name_type}</>
                  ))}
                </p>
                <p className="book__description-name-plane">
                  {item.id_table_comp.name_company} {item.name_plane}
                </p>
              </div>
              <div className="book__block-review-description">
                <div className="book__review-avarge">4.2</div>
                <p className="book__description-avarge">
                  <span>Very Good</span>54 reviews
                </p>
              </div>
            </div>
          </div>
          <p className="book__protected-description">
            Your booking is protected by <span>golobe</span>
          </p>
          <div className="book__block-jkj">
            <div className="book__block-price-list">
              <h2 className="book__header-price">Price Details</h2>
              <div className="book__block-list-item-prices">
                <p className="book__name-prices">Base Fare </p>
                <p className="book__description-count-price">
                  $
                  {value.classTypeTicket.map((item) => (
                    <>{item.price}</>
                  ))}
                </p>
              </div>
              <div className="book__block-list-item-prices">
                <p className="book__name-prices">Discount</p>
                <p className="book__description-count-price">$0</p>
              </div>
              <div className="book__block-list-item-prices">
                <p className="book__name-prices">Taxes</p>
                <p className="book__description-count-price">
                  $
                  {value.classTypeTicket.map((item) => (
                    <>{(Number(item.price) / 100) * 7.5}</>
                  ))}
                </p>
              </div>
              <div className="book__block-list-item-prices">
                <p className="book__name-prices">Service Fee</p>
                <p className="book__description-count-price">$0</p>
              </div>
            </div>
            <div className="book__total-count-price">
              <p className="book__name-total-price">Total</p>
              <p className="book__total-price">
                $
                {value.classTypeTicket.map((item) => (
                  <>{(Number(item.price) / 100) * 7.5 + Number(item.price)}</>
                ))}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FinalInfoComponent;
