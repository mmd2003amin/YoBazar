import React from "react";
import SliderHeader from "./modules/SliderHeader";
import Pages from "./modules/Pages";
import BannersTop from "./modules/BanersTop";
import AmazingSlider from "./modules/AmazingSlider";
import BannersBottom from "./modules/BannersBottom";
import Cards from "./modules/Cards";
import SliderFooter from "./modules/SliderFooter";

const MainPage = () => {
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
