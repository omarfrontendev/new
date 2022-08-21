import React from "react";
import SwiperSlider from "../SwiperSlider";
import { SwiperSlide } from "swiper/react";
import ResSumCard from "../ResSumCard";

export default function ResturantsSlider() {
  const resturants = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="resturants__slider__wrapper">
      <SwiperSlider
        loop={false}
        centeredSlides={false}
        paginated={false}
        autoPlay={{ play: true, delay: 5000 }}
        breakPoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          425: {
            slidesPerView: 3,
            spaceBetween: 21,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 21,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 21,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 21,
          },
          1440: {
            slidesPerView: 7.5,
            spaceBetween: 21,
          },
        }}
      >
        {resturants.map((item, index) => (
          <SwiperSlide key={index}>
            <ResSumCard />
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </div>
  );
}
