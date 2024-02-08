import React from "react";
import SliderHeader from "./MainPage/SliderHeader";
import Pages from "./MainPage/Pages";
import BannersTop from "./MainPage/BanersTop";
import AmazingSlider from "./MainPage/AmazingSlider";

const MainPage = () => {
  return (
    <div>
      <SliderHeader />
      <Pages />
      <BannersTop />
      <AmazingSlider />
    </div>
  );
};

export default MainPage;
