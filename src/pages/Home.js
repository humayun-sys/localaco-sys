import React from "react";

import { Link } from "react-router-dom";

import { ImAndroid } from "react-icons/im";
// import { FaApple } from "react-icons/fa";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";

// import SwiperCore, { Navigation, Pagination } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/scrollbar/scrollbar.scss";

import Footer from "../components/Footer";
import Features from "../components/Features";

// SwiperCore.use([Navigation, Pagination]);

export default function Home() {
  return (
    <>
      <div className="banner__wrapper">
        <div className="banner__text">
          <h1 className="banner__title">Connecting Creativity </h1>
          <p className="banner__subtitle">
            Locolaco is an Indian Social Media App Developed By Qaago
            Technologies Pvt. Ltd. That encourage People to Create and Discover
            Short Entertaining & Funny Dubbed Videos
          </p>

          <div className="banner__buttons__wrapper">
            {/* <div className="banner__button apple">
              <Link to="/">
                <FaApple />
                <div className="button__text">
                  <p>Available</p>
                  <span>on Apple Store</span>
                </div>
              </Link>
            </div> */}
            <div className="banner__button  apple">
              <Link to="/">
                <ImAndroid />
                <div className="button__text">
                  <p>Available</p>
                  <span>on Play Store</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="banner__image">
          <img
            src={require("../assets/img/banner-img.png")}
            alt="Mobile Home Screen"
          />
        </div>
      </div>

      {/* <div className="stats__wrapper">
        <div className="stats__container">
          <div className="stats">
            <h1>100k+</h1>
            <p>Total Downloads</p>
          </div>

          <div className="stats">
            <h1>10k+</h1>
            <p>Positive Reviews</p>
          </div>

          <div className="stats">
            <h1>50k+</h1>
            <p>Daily Visitors</p>
          </div>

          <div className="stats">
            <h1>15k+</h1>
            <p>Pro Users</p>
          </div>
        </div>
      </div> */}

      <Features />

      {/* <div className="features__wrapper">
        <div className="section__heading">
          <h1>Best Features</h1>
          <p>
            Aliqua duis aliqua ea labore exercitation quis dolore eiusmod
            pariatur
          </p>
          <p>Laboris id enim veniam cupidatat sit id qui id.</p>
        </div>
        <div className="feature__container">
          <div className="feature">
            <div className="feature__icon">
              <FaGlobe />
            </div>
            <h2>Modern Design</h2>
            <p>
              Aliqua duis aliqua ea labore exercitation quis dolore eiusmod
              pariatur. Laboris id enim veniam cupidatat sit id.
            </p>
          </div>
          <div className="feature">
            <div className="feature__icon">
              <GiPencilBrush />
            </div>
            <h2>Simple UI</h2>
            <p>
              Aliqua duis aliqua ea labore exercitation quis dolore eiusmod
              pariatur. Laboris id enim veniam cupidatat sit id.
            </p>
          </div>
          <div className="feature">
            <div className="feature__icon">
              <BiSupport />
            </div>
            <h2>Great Support</h2>
            <p>
              Aliqua duis aliqua ea labore exercitation quis dolore eiusmod
              pariatur. Laboris id enim veniam cupidatat sit id.
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className="testimonial__wrapper">
        <div className="image__overlay"></div>
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="slider__wrapper"
        >
          <SwiperSlide className="silde">
            <img src={require("../assets/img/t.jpg")} alt="User" />
            <h3>Amanda Rose</h3>
            <div className="testimonial__rating">
              <AiFillStar className="star__filled" />
              <AiFillStar className="star__filled" />
              <AiFillStar className="star__filled" />
              <AiFillStar className="star__filled" />
              <AiOutlineStar className="star__unfilled" />
            </div>
            <p>
              Mollit ut consectetur exercitation adipisicing laborum ullamco
              duis Lorem laboris nostrud et. Do pariatur culpa do eiusmod sunt
              aute in commodo ex sint. Dolor velit mollit sit nulla adipisicing
              est nisi ut enim nisi dolore. Deserunt ad eu commodo quis duis
              Lorem commodo exercitation ut.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../assets/img/t.jpg")} alt="User" />
            <h3>Amanda Rose</h3>
            <div className="testimonial__rating">
              <AiFillStar className="star__filled" />
              <AiFillStar className="star__filled" />
              <AiFillStar className="star__filled" />
              <AiFillStar className="star__filled" />
              <AiFillStar className="star__filled" />
            </div>
            <p>
              Mollit ut consectetur exercitation adipisicing laborum ullamco
              duis Lorem laboris nostrud et. Do pariatur culpa do eiusmod sunt
              aute in commodo ex sint. Dolor velit mollit sit nulla adipisicing
              est nisi ut enim nisi dolore. Deserunt ad eu commodo quis duis
              Lorem commodo exercitation ut.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../assets/img/t.jpg")} alt="User" />
            <h3>Amanda Rose</h3>
            <div className="testimonial__rating">
              <AiFillStar className="star__filled" />
              <AiFillStar className="star__filled" />
              <AiFillStar className="star__filled" />
              <AiOutlineStar className="star__unfilled" />
              <AiOutlineStar className="star__unfilled" />
            </div>
            <p>
              Mollit ut consectetur exercitation adipisicing laborum ullamco
              duis Lorem laboris nostrud et. Do pariatur culpa do eiusmod sunt
              aute in commodo ex sint. Dolor velit mollit sit nulla adipisicing
              est nisi ut enim nisi dolore. Deserunt ad eu commodo quis duis
              Lorem commodo exercitation ut.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../assets/img/t.jpg")} alt="User" />
            <h3>Amanda Rose</h3>
            <div className="testimonial__rating">
              <AiFillStar className="star__filled" />
              <AiFillStar className="star__filled" />
              <AiFillStar className="star__filled" />
              <AiFillStar className="star__filled" />
              <AiOutlineStar className="star__unfilled" />
            </div>
            <p>
              Mollit ut consectetur exercitation adipisicing laborum ullamco
              duis Lorem laboris nostrud et. Do pariatur culpa do eiusmod sunt
              aute in commodo ex sint. Dolor velit mollit sit nulla adipisicing
              est nisi ut enim nisi dolore. Deserunt ad eu commodo quis duis
              Lorem commodo exercitation ut.
            </p>
          </SwiperSlide>
        </Swiper>
      </div> */}
      <div className="download__wrapper">
        <div className="section__heading">
          <h1>Download Now</h1>
          <p>App is available for Download on Play Store</p>
        </div>
        <div className="download__container">
          <div className="banner__buttons__wrapper">
            {/* <div className="banner__button apple">
              <Link to="/">
                <FaApple />
                <div className="button__text">
                  <p>Available</p>
                  <span>on Apple Store</span>
                </div>
              </Link>
            </div> */}
            <div className="banner__button apple">
              <Link to="/">
                <ImAndroid />
                <div className="button__text">
                  <p>Available</p>
                  <span>on Play Store</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
