import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Slider from "../parts/Slider";
import TrendingPosts from "../parts/TrendingPosts";
import FrehStories from "../parts/FrehStories";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <TrendingPosts />
      <FrehStories />
      <Footer />
    </>
  );
};

export default Home;
