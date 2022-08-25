import React from "react";
import CardsRow from "../CardsRow";
import styles from "./.module.scss";
import ResturantsSlider from "../ResturantsSlider";

export default function PopResturantsSlider() {
  return (
    <div className={styles.pop__resturants__slider__wrapper}>
      <CardsRow title={"Popular Resturants"} link="/popular">
        <ResturantsSlider />
      </CardsRow>
    </div>
  );
}
