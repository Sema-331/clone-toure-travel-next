import FooterMain from '@/components/Landing/Footer/FooterMain'
import MainHeader from '@/components/Landing/Header/MainHeader'
import Image from 'next/image'
import './../styles/404/not-found.scss'
import React from 'react'
import error_image from './../public/images/404_image (1).png'
import arrow_right from './../public/images/chevron_forward_right.png'
import Link from 'next/link'

const ErrorPage = () => {
  return (
    <>
        {/* <MainHeader /> */}
        <main>
            <section>
                <div className='container'>
                    <div className='not-foung-page__main-block'>
                        <div className='not-foung-page__block-main-info'>
                            <div className="not-foung-page__block-image">
                                <Image className='not-found-page__image-main' src={error_image} alt='alt' />
                            </div>
                            <div className='not-found-page__block'>
                                <h1 className='not-found-page__header-error'>#404</h1>
                                <p className='not-found-page__description-error'>We couldn`t find the page using your link</p>
                                <Link href='/' className='not-found-page__go-to-main-btn'>
                                    <p className='not-found-page__description-btn'>go to the main page</p>
                                    <Image src={arrow_right} alt='icon_btn' className='not-found-page__icon-arrow' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        {/* <FooterMain /> */}
    </>
  )
}

export default ErrorPage