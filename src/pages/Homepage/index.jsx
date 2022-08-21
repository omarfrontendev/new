import React from "react";
import OffersSlider from "../../components/OffersSlider";
import RecommendedSlider from "../../components/RecommendedSlider";
import PopResturantsSlider from "../../components/PopResturantsSlider";

export default function HomePage() {
  return (
    <div className="home__page__wrapper">
      <OffersSlider />
      <RecommendedSlider />
      <PopResturantsSlider />
    </div>
  );
}
