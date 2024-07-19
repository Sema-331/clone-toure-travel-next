import React from "react";
import SubscribeBlock from "./SubscribeBlock";
import footer_logo from "./../../../public/images/Logo_footer.png";
import faceebok from "./../../../public/images/akar-icons_facebook-fill.png";
import twitter from "./../../../public/images/akar-icons_twitter-fill.png";
import youtube from "./../../../public/images/akar-icons_youtube-fill.png";
import instagram from "./../../../public/images/ant-design_instagram-filled.png";
import Image from "next/image";
import Link from "next/link";

const FooterMain = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__block-main">
          <div className="footer__block-uu">
            <SubscribeBlock />
          </div>
          <div className="footer__blocks">
            <div className="footer__block-logo">
              <Image
                src={footer_logo}
                className="footer__logo-image"
                alt="footer_image"
              />
              <ul className="footer__block-icons-social-media">
                <li className="footer__list-box-icons">
                  <Image
                    src={faceebok}
                    alt="image_icons-media"
                    className="footer__icons-image"
                  />
                </li>
                <li className="footer__list-box-icons">
                  <Image
                    src={twitter}
                    alt="image_icons-media"
                    className="footer__icons-image"
                  />
                </li>
                <li className="footer__list-box-icons">
                  <Image
                    src={youtube}
                    alt="image_icons-media"
                    className="footer__icons-image"
                  />
                </li>
                <li className="footer__list-box-icons">
                  <Image
                    src={instagram}
                    alt="image_icons-media"
                    className="footer__icons-image"
                  />
                </li>
              </ul>
            </div>
            <div className="footer__block-navigation">
              <div className="footer__block-list-item">
                <p className="footer__name-nav">Our Destinations</p>
                <Link className="footer__link" href="/">
                  Canada
                </Link>
                <Link className="footer__link" href="/">
                  Alaska
                </Link>
                <Link className="footer__link" href="/">
                  France
                </Link>
                <Link className="footer__link" href="/">
                  Iceland
                </Link>
              </div>
              <div className="footer__block-list-item">
                <p className="footer__name-nav">Our Activities</p>
                <Link className="footer__link" href="/">
                  Northern Lights
                </Link>
                <Link className="footer__link" href="/">
                  Cruising & sailing
                </Link>
                <Link className="footer__link" href="/">
                  Multi-activities
                </Link>
                <Link className="footer__link" href="/">
                  Kayaing
                </Link>
              </div>
              <div className="footer__block-list-item">
                <p className="footer__name-nav">Travel Blogs</p>
                <Link className="footer__link" href="/">
                  Bali Travel Guide
                </Link>
                <Link className="footer__link" href="/">
                  Sri Lanks Travel Guide
                </Link>
                <Link className="footer__link" href="/">
                  Peru Travel Guide
                </Link>
                <Link className="footer__link" href="/">
                  Bali Travel Guide
                </Link>
              </div>
              <div className="footer__block-uu-reviews">
                <div className="footer__block-uu-reviews-inside">
                  <div className="footer__block-list-item">
                    <p className="footer__name-nav">About Us</p>
                    <Link className="footer__link" href="/">
                      Our Story
                    </Link>
                    <Link className="footer__link" href="/">
                      Work with us
                    </Link>
                  </div>
                  <div className="footer__block-list-item">
                    <p className="footer__name-nav">Contact Us</p>
                    <Link className="footer__link" href="/">
                      Our Story
                    </Link>
                    <Link className="footer__link" href="/">
                      Work with us
                    </Link>
                  </div>
                </div>
                <div className="footer__block-reviews-go">
                  <p className="footer__description-rev">Leave a review</p>
                  <Link href="/Reviews" className="footer__btn-rev-go">
                    Send
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
