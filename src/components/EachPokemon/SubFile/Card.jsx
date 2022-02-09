import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, { Autoplay } from "swiper";

function Card({ eachPokemon }) {
  SwiperCore.use([Autoplay]);
  return (
    <div
      className="cardcontainer"
      style={{ backgroundColor: eachPokemon[0].bgcolor }}
    >
      <div className="cardheader">
        <h3>{eachPokemon[0].name} Cards</h3>
      </div>
      <Swiper
        className="mySwiper"
        spaceBetween={10}
        loop={true}
        slidesPerView={5}
        grabCursor={true}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide className="mySwiperSlide">
          <img
            src={process.env.PUBLIC_URL + "/images/cards/BW5_EN_2.png"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="mySwiperSlide">
          <img
            src={process.env.PUBLIC_URL + "/images/cards/SM35_EN_2.png"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="mySwiperSlide">
          <img
            src={process.env.PUBLIC_URL + "/images/cards/EX14_EN_35.png"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="mySwiperSlide">
          <img
            src={process.env.PUBLIC_URL + "/images/cards/EX6_EN_35.png"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="mySwiperSlide">
          <img
            src={process.env.PUBLIC_URL + "/images/cards/SM35_EN_2.png"}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Card;
