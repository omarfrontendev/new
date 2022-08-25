import React from "react";
import styles from "./.module.scss";
import SwiperSlider from "../SwiperSlider";
import { SwiperSlide } from "swiper/react";
import OfferCard from "../OfferCard";

const offersArray = [
  {
    description: "60% off the full Price of tridint Food",
    img: "/assets/unnamed.png",
  },
  {
    description: "60% off the full Price of tridint Food",
    img: "/assets/unnamed.png",
  },
  {
    description: "60% off the full Price of tridint Food",
    img: "/assets/unnamed.png",
  },
  {
    description: "60% off the full Price of tridint Food",
    img: "/assets/unnamed.png",
  },
];

export default function OffersSlider() {
  return (
    <div className={styles.offers__slider__wrapper}>
      <SwiperSlider
        paginated={false}
        centeredSlides={true}
        loop={true}
        autoPlay={{ play: true, delay: 5000 }}
        breakPoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 14,
          },
          567: {
            slidesPerView: 1.5,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 36,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 42,
          },
        }}
      >
        {offersArray.map((offer, index) => (
          <SwiperSlide key={index}>
            <OfferCard
              index={index}
              description={offer.description}
              img={offer.img}
            />
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </div>
  );
}
