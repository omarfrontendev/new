import React from "react";
import { Routes, Route } from "react-router-dom";

// // PAGES
import StartPage from "../../pages/StartPage";
import HomePage from "../../pages/Homepage";
import ResturantsPage from "../../pages/AllResturantsPage";
import PopularResturantsPage from "../../pages/PopularResturantsPage";
import RecommendedPage from "../../pages/RecommendedPage";
import FavouritesPage from "../../pages/FavouritesPage";
import SearchResultsPage from "../../pages/SearchResultsPage";
import RestaurantDetailsPage from "../../pages/RestaurantDetailsPage";
import ResturantInfoPage from "../../pages/ResturantInfoPage";
import OrderDetailsPage from "../../pages/OrderDetailsPage";
import OrderTrackingPage from "../../pages/OrderTrackingPage";
import ResetPasswordPage from "../../pages/ResetPasswordPage";

// Components
import Layout from "../../layout";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/global.style.scss";

// SCRIPTS
import "bootstrap/dist/js/bootstrap";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/resturants" element={<ResturantsPage />} />
        <Route path="/popular" element={<PopularResturantsPage />} />
        <Route path="/recommended" element={<RecommendedPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/restaurant-details" element={<RestaurantDetailsPage />} />
        <Route path="/resturant-info" element={<ResturantInfoPage />} />
        <Route path="/order-details" element={<OrderDetailsPage />} />
        <Route path="/order-tracking" element={<OrderTrackingPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </Layout>
  );
}
