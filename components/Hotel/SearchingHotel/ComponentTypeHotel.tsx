"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import arrow_down from "./../../../public/images/chevron_down_down.png";
import arrow_up from "./../../../public/images/chevron_down_up.png";
import { useAppDispatch, useAppSelector } from "@/helperRedux/helperRedux";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { ToggleModalClose } from "@/services/ToggleModalClose";

interface MyInt {
  states: any;
  setSearchQueryVariaty: (v: string) => void;
  onSearch: (e: React.FormEvent) => void;
  searchQueryVariaty: string | null;
  setStateSortPrice: (v: string) => void;
}

const ComponentTypeHotel = ({
  states,
  setSearchQueryVariaty,
  onSearch,
  setStateSortPrice,
}: MyInt) => {
  const ComponentSortModal = dynamic(() => import("./ComponentSorts"));

  const selectorCheck = useAppSelector(
    (item) => item.redSlice.checkedValueVisibleItem
  );
  const secondSelector = useAppSelector(
    (item) => item.redSlice.checkedValueVisibleItem
  );
  const [stateValeuSort, setStateValueSort] = useState<string>("Recommended");

  const { state, ref, setState } = ToggleModalClose("hotel__block-uu-modals");

  useEffect(() => {}, [secondSelector]);

  const search = useSearchParams();

  return (
    <form onSubmit={onSearch} className="hotel__block-results">
      <div className="hotel__block-optimal-time-fly-list-box">
        <button
          onClick={() => setSearchQueryVariaty("Hotels")}
          className={
            search.get("variaty") === "Hotels"
              ? "hotel__block-list-item-content-active"
              : "hotel__block-list-item-content"
          }
        >
          <div className="hotel__uu-blocks">
            <p className="hotel__name-list-item">Hotels</p>
            <p className="hotel__description-time">{} places</p>
          </div>
        </button>
        <button
          onClick={() => setSearchQueryVariaty("Motels")}
          className={
            search.get("variaty") === "Motels"
              ? "hotel__block-list-item-content-active"
              : "hotel__block-list-item-content"
          }
        >
          <div className="hotel__uu-blocks">
            <p className="hotel__name-list-item">Motels</p>
            <p className="hotel__description-time">{} places</p>
          </div>
        </button>
        <button
          onClick={() => setSearchQueryVariaty("Resorts")}
          className={
            search.get("variaty") === "Resorts"
              ? "hotel__block-list-item-content-active"
              : "hotel__block-list-item-content"
          }
        >
          <div className="hotel__uu-blocks">
            <p className="hotel__name-list-item">Resorts</p>
            <p className="hotel__description-time">{} places</p>
          </div>
        </button>
      </div>
      <div className="hotel__block-show-content-length">
        <div className="hotel__block-length-content-inside">
          <p className="hotel__description-content">
            Showing {selectorCheck} of
          </p>
          <span>{states.length} places</span>
        </div>
        <div ref={ref} className="hotel__block-uu-modals">
          <div
            onClick={() => setState(!state)}
            className="hotel__block-sort-by"
          >
            <p className="hotel__description-sorts">
              <span>Sort by: </span>
              {stateValeuSort}
            </p>
            {state ? (
              <Image
                src={arrow_up}
                alt="image_arrow_down"
                className="hotel__image-uu"
              />
            ) : (
              <Image
                src={arrow_down}
                alt="image_arrow_down"
                className="hotel__image-uu"
              />
            )}
          </div>
          {state ? (
            <ComponentSortModal
              stateValeuSort={stateValeuSort}
              setStateValueSort={setStateValueSort}
              setStateSortPrice={setStateSortPrice}
            />
          ) : null}
        </div>
      </div>
    </form>
    // <div className="hotel__block-results">
    // <div className="hotel__block-optimal-time-fly-list-box">
    //     <button onClick={handleVariatyClick('Hotels')} className={ stateTypeHotel === 'Hotels' ? "hotel__block-list-item-content-active" : "hotel__block-list-item-content" }>
    //         <div className='hotel__uu-blocks'>
    //             <p className="hotel__name-list-item">Hotels</p>
    //             <p className="hotel__description-time">{} places</p>
    //         </div>
    //     </button>
    //     <div onClick={() => {
    //         dispatch(handleClickChangeVariatyHotel('Motels'))
    //         setStateTypeHotel('Motels')
    //         handleVariatyClick('Motels')
    //     }} className={ stateTypeHotel === 'Motels' ? "hotel__block-list-item-content-active" : "hotel__block-list-item-content" }>
    //         <div className='hotel__uu-blocks'>
    //             <p className="hotel__name-list-item">Motels</p>
    //             <p className="hotel__description-time">{} places</p>
    //         </div>
    //     </div>
    //     <div onClick={() => {
    //         dispatch(handleClickChangeVariatyHotel('Resorts'))
    //         handleVariatyClick('Resorts')
    //     }} className={ stateTypeHotel === 'Resorts' ? "hotel__block-list-item-content-active" : "hotel__block-list-item-content" }>
    //         <div className='hotel__uu-blocks'>
    //             <p className="hotel__name-list-item">Resorts</p>
    //             <p className="hotel__description-time">{} places</p>
    //         </div>
    //     </div>
    // </div>
    // <div className="hotel__block-show-content-length">
    //     <div className="hotel__block-length-content-inside">
    //         <p className="hotel__description-content">Showing {} of</p>
    //         <span>{} places</span>
    //     </div>
    //     <div ref={ref} className='hotel__block-uu-modals'>
    //         <div onClick={() => setStateModalSort(!stateModalSort)} className="hotel__block-sort-by">
    //             <p className="hotel__description-sorts"><span>Sort by: </span>{stateValeuSort}</p>
    //             {
    //                 stateModalSort ? <Image src={arrow_up} alt='image_arrow_down' className='hotel__image-uu' /> : <Image src={arrow_down} alt='image_arrow_down' className='hotel__image-uu' />
    //             }
    //         </div>
    //         { stateModalSort ?
    //             <div className='fly-res__block-modal-sorts'>
    //                 <div onClick={() => setStateValueSort('Recommended')} className='fly-res__block-btn-sort'>
    //                     <button className='fly-res__btn-sort-option'>
    //                         <p className='fly-res__name-description-sort'>Recommended</p>
    //                         {
    //                             stateValeuSort === 'Recommended' ? <Image className='fly-res__image-selected' src={tick_icon} alt='icon_arrow' /> : null
    //                         }
    //                     </button>
    //                 </div>
    //                 <div onClick={() => setStateValueSort('Price decrease')} className='fly-res__block-btn-sort'>
    //                     <button onClick={() => {
    //                         dispatch(handleStateDesc())
    //                     }} type='button' className='fly-res__btn-sort-option'>
    //                         <p className='fly-res__name-description-sort'>Price decrease</p>
    //                         {
    //                             stateValeuSort === 'Price decrease' ? <Image className='fly-res__image-selected' src={tick_icon} alt='icon_arrow' /> : null
    //                         }
    //                     </button>
    //                 </div>
    //                 <div onClick={() => {
    //                     handleCLickGetItemAsc()
    //                     setStateValueSort('Price increase')
    //                 }} className='fly-res__block-btn-sort'>
    //                     <button type='button' className='fly-res__btn-sort-option'>
    //                         <p className='fly-res__name-description-sort'>Price increase</p>
    //                         {
    //                             stateValeuSort === 'Price increase' ? <Image className='fly-res__image-selected' src={tick_icon} alt='icon_arrow' /> : null
    //                         }
    //                     </button>
    //                 </div>
    //             </div> : null
    //         }
    //     </div>
    // </div>
    // </div>
  );
};

export default ComponentTypeHotel;
