import Image from 'next/image'
import React from 'react'
import FavouritesComponents from './FavouritesComponents'
import Link from 'next/link'

interface LogoInt {
    logo_image: string
}

const ItemTicket = ({logo_image}: LogoInt) => {
  return (
    <div className="fly-res__list-item-ticket-buy">
        <div className="fly-res__block-image-ticket">
            <Image src={logo_image} width={200} height={150} alt='image_logo_company_ticket' className="fly-res__main-image-ticket" />
        </div>
        <div className="fly-res__block-main-info-about-ticket">
            <div className='fly-res__block-bjb'>
                <div className="fly-res__block-inside-info">
                    <div className="fly-res__block-rat-price">
                        <div className="fly-res__block-rat">
                            <p className="fly-res__block-main-rat">4.2</p>
                            <p className="fly-res__description-gg"><span>Very Good</span>54 reviews</p>
                        </div>
                    </div>
                    <div className="fly-res__block-time-flight">
                        <input type="checkbox" className="fly-res__input-time-fly-select" />
                        <div className="fly-res__time-fly-block-inside">
                            <div className="fly-res__block-time-fly-detailed">
                                <div className='fly-res__block-insides-times'>
                                    <p className="fly-res__description-info-fly-time">12:00 pm</p>
                                    <hr />
                                    <p className="fly-res__description-info-fly-time-right">01:28pm</p>
                                </div>
                                <p className="fly-res__description-company-airlines">Emirates</p>
                            </div>
                        </div>
                        <p className="fly-res__description-stopped">non stop</p>
                        <div className="fly-res__block-tt">
                            <p className="fly-res__description-tt-first">2h 28m</p>
                            <p className="fly-res__description-tt-second">EWR-BNA</p>
                        </div>
                    </div>
                    <div className="fly-res__block-time-flight">
                        <input type="checkbox" className="fly-res__input-time-fly-select" />
                        <div className="fly-res__time-fly-block-inside">
                            <div className="fly-res__block-time-fly-detailed">
                                <div className='fly-res__block-insides-times'>
                                    <p className="fly-res__description-info-fly-time">12:00 pm</p>
                                    <hr />
                                    <p className="fly-res__description-info-fly-time-right">01:28pm</p>
                                </div>
                                <p className="fly-res__description-company-airlines">Emirates</p>
                            </div>
                        </div>
                        <p className="fly-res__description-stopped">non stop</p>
                        <div className="fly-res__block-tt">
                            <p className="fly-res__description-tt-first">2h 28m</p>
                            <p className="fly-res__description-tt-second">EWR-BNA</p>
                        </div>
                    </div>
                </div>
                <div className="fly-res__block-price">
                    <p className="fly-res__description-price-start">Starting from</p>
                    <p className="fly-res__price-finaly">$104</p>
                </div>
            </div>
            <div className="fly-res__more-info-detailed-ticket">
                {/* <FavouritesComponents /> */}
                <Link href='/FindFly/FlightList_result/ticket_id' className='fly-res__btn-view-detailed'>
                    View Details
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ItemTicket