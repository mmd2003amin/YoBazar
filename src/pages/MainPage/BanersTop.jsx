import React from "react";
import Banner from "./Banner";
import bannerTopData from "../../constant/bannerData";

const BannersTop = () => {
  const data1 = bannerTopData.slice(0, 3);
  const data2 = bannerTopData.slice(3, 5);

  return (
    <>
      <div className="banner-container">
        {data1.map((item) => (
          <Banner key={item.id} data={item} name="topOne" />
        ))}
      </div>

      <div className="banner-container">
        {data2.map((item) => (
          <Banner key={item.id} data={item} name="topTow" />
        ))}
      </div>
    </>
  );
};

export default BannersTop;
