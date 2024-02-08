import React, { useState } from "react";
import detailsCardsData from "../../constant/detailsCardsData";

const SlideAmazing = ({ data }) => {
  const [hover, setHover] = useState(null);

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(null)}>
      <p className="h-fit z-20 w-24 absolute -top-4 -right-2 p-1 rounded-sm text-sm text-center -rotate-90 text-white bg-red-600">
        {data.discount}
      </p>

      <div className="overflow-hidden relative h-72 mb-1">
        <img
          src={hover ? data.image2 : data.image1}
          alt={data.name}
          className="w-full h-full rounded-md"
        />

        <div className={`details-cards ${!hover && "-left-9"}`}>
          {detailsCardsData.map((item) => (
            <div key={item.id} className="mb-2 group centering">
              <p className={`title-details-cards`}>
                {item.title}
              </p>
              <i className="icon-details-cards">
                {item.icon}
              </i>
            </div>
          ))}
        </div>

        <div className={`add-to-cart ${!hover && "-bottom-10"}`}>
          افزودن به سبد خرید
        </div>
      </div>

      <div className="text-white font-vazirRegular text-sm centering flex-col bg-cyan-800 rounded-md w-full p-2 mb-5">
        <h1 className="text-lg font-vazirMediu mb-2">{data.name}</h1>
        <p className="line-through opacity-70">{data.price}</p>
        <p>{data.priceDiscount}</p>
      </div>
    </div>
  );
};

export default SlideAmazing;
