import React from "react";
import Hero from "./components/hero";
import WatchProductsMain from "./components/watchProducts/watchProductsMain";
import MannualVideo from "./components/mannualVideo";
import EssentialFeaturingMain from "./components/essentialFeaturing/essentialFeaturingMain";
import ReviewsMain from "./components/reviews/reviewsMain";
import WatchFeatures from "./components/watchFeatures";
import NavBar from "./components/navBar";
const Main = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <MannualVideo />
      <WatchFeatures />
      <WatchProductsMain />
      <EssentialFeaturingMain />
      <ReviewsMain />
    </div>
  );
};

export default Main;
