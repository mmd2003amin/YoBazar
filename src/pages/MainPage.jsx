import React from "react";
import SliderHeader from "./MainPage/SliderHeader";
import Pages from "./MainPage/Pages";
import BannersTop from "./MainPage/BanersTop";
import AmazingSlider from "./MainPage/AmazingSlider";
import BannersBottom from "./MainPage/BannersBottom";
import Cards from "./MainPage/Cards";
import SliderFooter from "./MainPage/SliderFooter";

const MainPage = () => {
  window.scrollTo(0,0);
  return (
    <div>
      <SliderHeader />
      <Pages />
      <BannersTop />
      <AmazingSlider />
      <BannersBottom />
      <Cards />
      <SliderFooter />
    </div>
  );
};

export default MainPage;
