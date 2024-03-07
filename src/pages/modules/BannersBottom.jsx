import React from "react";

import image1 from "../../assets/Banner/bottom-banner/1.jpg";
import image2 from "../../assets/Banner/bottom-banner/2.jpg";
import image3 from "../../assets/Banner/bottom-banner/3.jpg";
import image4 from "../../assets/Banner/bottom-banner/4.jpg";
import { Link } from "react-router-dom";

const BannersBottom = () => {
  return (
    <div className="box-banners-bottom w-11/12 md:w-[98%] mt-6 centering flex-col mx-auto cursor-pointer">
      <div>
        <Link to="man" className="banner-bottom md:ml-1.5">
          <img src={image1} alt="banner1" className="w-full h-full rounded-md"/>
        </Link>
        <Link to="woman" className="banner-bottom md:w-[57%]">
          <img src={image4} alt="banner2" className="w-full h-full rounded-md"/>
        </Link>
      </div>

      <div>
        <Link to="man" className="banner-bottom md:w-[57%]">
          <img src={image2} alt="banner3" className="w-full h-full rounded-md" />
        </Link>
        <Link to="woman" className="banner-bottom md:mr-1.5">
          <img src={image3} alt="banner4" className="w-full h-full rounded-md" />
        </Link>
      </div>
    </div>
  );
};

export default BannersBottom;
