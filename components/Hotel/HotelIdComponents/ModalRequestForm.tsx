// import React from 'react'

// const ModalRequestForm = () => {
//   return (
//     <div className="comment__block-modal-add-review">
//                 <button
//                   onClick={() => setState(false)}
//                   className="comment__btn-close-modal"
//                 >
//                   <Image
//                     src={close_icon}
//                     alt="icon_close_form"
//                     className="comment__close-modal-icon"
//                   />
//                 </button>
//                 <div className="comment__block-headers">
//                   <h2 className="comment__header-block">Write of review</h2>
//                   <p className="comment__description-step-count">
//                     Step {stateModalReview ? 1 : 2} of 2
//                   </p>
//                 </div>
//                 <div className="comment__block-form-modal">
//                   <form
//                     onSubmit={
//                       pathName.includes("/FindFly/FlightList_result/")
//                         ? handleSubmit(onSubmitFly)
//                         : handleSubmit(onSubmit)
//                     }
//                     action=""
//                   >
//                     {stateModalReview ? (
//                       <div className="comment__block-main-first-page-info">
//                         <div className="comment__block-rate-hotel">
//                           {[...Array(5)].map((_, i) => {
//                             const current = i + 1;
//                             return (
//                               <>
//                                 <button
//                                   className="comment__btn-rate-change"
//                                   type="button"
//                                   onClick={() => setRate(current)}
//                                   key={i}
//                                 >
//                                   <Image
//                                     src={
//                                       current <= (rateColor || rate)
//                                         ? star_icon
//                                         : star_icon_grey
//                                     }
//                                     alt="star_icon"
//                                     className="comment__modal-rate-star"
//                                   />
//                                 </button>
//                               </>
//                             );
//                           })}
//                         </div>
//                         <div className="comment__label-header-txt">
//                           <label className="comment__label-txt" htmlFor="">
//                             Header
//                           </label>
//                           <input
//                             placeholder="Type your header..."
//                             className="comment__input-fill"
//                             type="text"
//                             {...register("header", {
//                               required: "Required field",
//                               minLength: {
//                                 value: 2,
//                                 message: "Minimum 2 symbol",
//                               },
//                             })}
//                           />
//                           <div>
//                             {errors?.header && (
//                               <div className="check__form-danger">
//                                 <Image
//                                   src={danger_icon}
//                                   alt="icon_danger"
//                                   className="check__form-image"
//                                 />
//                                 <p>{errors?.header?.message || "Error"}</p>
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                         <input
//                           placeholder="Type your header..."
//                           className="comment__input-fill"
//                           type="number"
//                           {...register("mark", {
//                             required: "Required field",
//                             minLength: {
//                               value: 2,
//                               message: "Minimum 2 symbol",
//                             },
//                           })}
//                         />
//                         <div className="comment__block-description-txt">
//                           <label className="comment__label-txt" htmlFor="">
//                             Description
//                           </label>
//                           <textarea
//                             placeholder="Type your description..."
//                             className="comment__input-fill"
//                             id=""
//                             maxLength={1000}
//                             {...register("description", {
//                               required: "Required field",
//                               minLength: {
//                                 value: 2,
//                                 message: "Minimum 2 symbol",
//                               },
//                             })}
//                           />
//                           <div>
//                             {errors?.description && (
//                               <div className="check__form-danger">
//                                 <Image
//                                   src={danger_icon}
//                                   alt="icon_danger"
//                                   className="check__form-image"
//                                 />
//                                 <p>{errors?.description?.message || "Error"}</p>
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                         <div className="comment__block-userName-txt">
//                           <label className="comment__label-txt" htmlFor="">
//                             User
//                           </label>
//                           <input
//                             placeholder="Type your name..."
//                             className="comment__input-fill"
//                             type="text"
//                             {...register("userName", {
//                               required: "Required field",
//                               pattern: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
//                               minLength: {
//                                 value: 2,
//                                 message: "Minimum 2 symbol",
//                               },
//                             })}
//                           />
//                           <div>
//                             {errors?.userName && (
//                               <div className="check__form-danger">
//                                 <Image
//                                   src={danger_icon}
//                                   alt="icon_danger"
//                                   className="check__form-image"
//                                 />
//                                 <p>{errors?.userName?.message || "Error"}</p>
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="comment__block-need-sign-in">
//                         <h2 className="comment__header-sign-in-block">
//                           Do you want to upload a photo?
//                         </h2>
//                         {/* <div className={ image === null ? 'account__block-svg-change-photo' : 'account__block-svg-change-photo-active'}>
//                                       {
//                                         image === null ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                                         <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 10C0.75 16.937 3.063 19.25 10 19.25C16.937 19.25 19.25 16.937 19.25 10C19.25 3.063 16.937 0.75 10 0.75C3.063 0.75 0.75 3.063 0.75 10Z" stroke="#46A358" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//                                         <path fill-rule="evenodd" clip-rule="evenodd" d="M8.59866 6.78419C8.59866 7.75719 7.81066 8.54519 6.83766 8.54519C5.86566 8.54519 5.07666 7.75719 5.07666 6.78419C5.07666 5.81119 5.86566 5.02319 6.83766 5.02319C7.81066 5.02319 8.59866 5.81119 8.59866 6.78419Z" stroke="#46A358" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//                                         <path d="M19.1203 12.6664C18.2393 11.7604 16.9933 9.92944 14.7043 9.92944C12.4153 9.92944 12.3653 13.9674 10.0293 13.9674C7.69231 13.9674 6.75131 12.5964 5.22831 13.3124C3.70631 14.0274 2.46631 16.8734 2.46631 16.8734" stroke="#46A358" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//                                       </svg> : <img className='image__change' src={image} alt="" />
//                                       }
//                                       </div> */}
//                         {/* <input onChange={onImageChange} type="file" id="file-input" name="file-input" />
//                                 <label id="file-input-label" for="file-input" className='account__button-save-change'>Add photo</label> */}
//                       </div>
//                     )}
//                     <div className="comment__block-btn-options-uu">
//                       <button
//                         className="comment__btn-submit-modal"
//                         type="submit"
//                       >
//                         Submit
//                       </button>
//                       {stateModalReview ? (
//                         <button
//                           type="button"
//                           className="comment__btn-more-option"
//                           onClick={() => setStateModalReview(false)}
//                         >
//                           More Options
//                         </button>
//                       ) : (
//                         <button
//                           type="button"
//                           onClick={() => setStateModalReview(true)}
//                           className="comment__btn-more-options-inside"
//                         >
//                           <Image
//                             className="comment__image-arrow-left"
//                             src={back_arrow}
//                             alt="icon_back"
//                           />
//                           Back
//                         </button>
//                       )}
//                       {/* <button type='button' className='comment__btn-more-option' onClick={() => setStateModalReview(false)} >{ stateModalReview ? <>More options</> :
//                                 <div className='comment__btn-more-options-inside'>
//                                     <Image src={back_arrow} alt='icon_back' className='comment__image-arrow-left' />
//                                     <button type='button' onClick={() => setStateModalReview(true)} className='comment__description-name-back'>Back</button>
//                                 </div> }
//                                 </button> */}
//                     </div>
//                   </form>
//                 </div>
//               </div>
//   )
// }

// export default ModalRequestForm
