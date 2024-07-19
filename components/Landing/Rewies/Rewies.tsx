import React from "react";
import Btn from "./Btn";
import Link from "next/link";
import ReviewComponentUser from "./ReviewComponentUser";
import { db, prisma } from "@/prismaData/db";
import SwiperComponents from "./SwiperComponents";
import NullReviews from "@/components/Hotel/HotelIdComponents/NullReviews";
import BtnNoFill from "@/components/BtnNoFill/BtnNoFill";

const Rewies = async () => {
  const user = await db.table_Reviews.findMany({
    include: {
      id_user: true,
    },
  });

  // const szieVariants = ['xs', 's', 'm', 'l', 'xl']
  // const selectedColor = ['black', 'white', 'red']
  // const category = ['new', 'sale']
  // const selectSize = searchParams || 'xs'
  // const selectColor = searchParams|| 'black'
  // const selectCategory = searchParams
  let a = 5;
  let color;

  return (
    <section>
      {user.map((item) => (
        <>{item.id_user.id}</>
      ))}
      {/* <div>
            {
                szieVariants.map((item, index) => (
                    <Link key={index} href={`?${a === 6 ? color=selectColor : ''}&size=${item}`}>
                        <button type='button' className={selectSize === item ? 'active__btn' : 'disabled__btn'}>{item}</button>
                    </Link>
                ))
            }
        </div>
        <div>
            {
                selectedColor.map((item, index) => (
                    <Link key={index} href={`?color=${item}&size=${selectSize}`}>
                        <button className={ selectColor === item ? 'selected__color-btn' : 'disabled__color-btn' }>{item}</button>
                    </Link>
                ))
            }
        </div>
        <div>
            {
                category.map((item, i) => (
                    <Link key={i} href={`?category=${item}`}>
                        <button className={selectCategory === item ? 'selected__color-btn' : 'disabled__color-btn' } key={i}>{item}</button>
                    </Link>
                ))
            }
        </div> */}
      <div className="container">
        <div className="reviews">
          <div className="reviews__block-main">
            <div className="reviews__block-see">
              <div className="reviews__block-names">
                <h2 className="reviews__name-header">Reviews</h2>
                <p className="reviews__name-description">
                  What people says about Golobe facilities
                </p>
              </div>
              {/* <Link href='/'> */}
              <div className="reviews__btn-block">
                <BtnNoFill href="/Reviews" className="reviews__btn">
                  See All
                </BtnNoFill>
                {/* </Link> */}
              </div>
              {/* </Link> */}
            </div>
            <div className="reviews__block-feedback">
              {user.length === 0 ? (
                <NullReviews type="company" />
              ) : user.length < 4 ? (
                user.map((item) => (
                  <ReviewComponentUser key={item.id} item={item} />
                ))
              ) : (
                <SwiperComponents user={user} />
              )}
              {/* <div className='reviews__block-main-list-box'>
                            <div className="reviews__block-inside">
                            <h1 className='reviews__feedback-header'>“A real sense of community, nurtured”</h1>
                            <div className='reviews__block-description-feedback'>
                                <p className='reviews__description-inside'>
                                Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.
                                </p>
                                <button className='reviews__btn-feedback-full'>
                                    View more
                                </button>
                                <div className='reviews__block-stars-rat'>
                                    
                                </div>
                            </div>
                            <div className='reviews__block-name-user'>
                                <h2 className='reviews__name-user'>Olga</h2>
                                <p className='reviews__studio-user'>Weave Studios – Kai Tak</p>
                                <div className='reviews__system-user-block'>
                                    <Image src={system_image} alt='image_system' className='reviews__system-image'/>
                                    <p className='reviews__system-name'>Google</p>
                                </div>
                            </div>
                            <Image src={first_image} alt='image_place' className='image_place'/>
                            </div>
                        </div>
                        <div className='reviews__block-main-list-box'>
                            <div className="reviews__block-inside">
                            <h1 className='reviews__feedback-header'>“A real sense of community, nurtured”</h1>
                            <div className='reviews__block-description-feedback'>
                                <p className='reviews__description-inside'>
                                Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.
                                </p>
                                <button className='reviews__btn-feedback-full'>
                                    View more
                                </button>
                                <div className='reviews__block-stars-rat'>
                                    <Image src={star} alt='image_star_rat' className='reviews__image-star'/>
                                    <Image src={star} alt='image_star_rat' className='reviews__image-star'/>
                                    <Image src={star} alt='image_star_rat' className='reviews__image-star'/>
                                    <Image src={star} alt='image_star_rat' className='reviews__image-star'/>
                                    <Image src={star} alt='image_star_rat' className='reviews__image-star'/>
                                </div>
                            </div>
                            <div className='reviews__block-name-user'>
                                <h2 className='reviews__name-user'>Olga</h2>
                                <p className='reviews__studio-user'>Weave Studios – Kai Tak</p>
                                <div className='reviews__system-user-block'>
                                    <Image src={system_image} alt='image_system' className='reviews__system-image'/>
                                    <p className='reviews__system-name'>Google</p>
                                </div>
                            </div>
                            <Image src={second_image} alt='image_place' className='image_place'/>
                            </div> 
                        </div>
                        <div className='reviews__block-main-list-box'>
                            <div className="reviews__block-inside">
                            <h1 className='reviews__feedback-header'>“A real sense of community, nurtured”</h1>
                            <div className='reviews__block-description-feedback'>
                                <p className='reviews__description-inside'>
                                Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.
                                </p>
                                <button className='reviews__btn-feedback-full'>
                                    View more
                                </button>
                                <div className='reviews__block-stars-rat'>
                                    <Image src={star} alt='image_star_rat' className='reviews__image-star'/>
                                    <Image src={star} alt='image_star_rat' className='reviews__image-star'/>
                                    <Image src={star} alt='image_star_rat' className='reviews__image-star'/>
                                    <Image src={star} alt='image_star_rat' className='reviews__image-star'/>
                                    <Image src={star} alt='image_star_rat' className='reviews__image-star'/>
                                </div>
                            </div>
                            <div className='reviews__block-name-user'>
                                <h2 className='reviews__name-user'>Olga</h2>
                                <p className='reviews__studio-user'>Weave Studios – Kai Tak</p>
                                <div className='reviews__system-user-block'>
                                    <Image src={system_image} alt='image_system' className='reviews__system-image'/>
                                    <p className='reviews__system-name'>Google</p>
                                </div>
                            </div>
                            <Image src={third_image} alt='image_place' className='image_place'/>
                            </div>
                        </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewies;
