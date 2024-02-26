import React, { useState } from "react";
import detailsCardsData from "../../constant/detailsCardsData";
import { Link } from "react-router-dom";

const Card = ({ data , name }) => {
  const [hover, setHover] = useState(null);
  const page = window.location.pathname;

  return (
    <div 
     onMouseEnter={() => setHover(true)} 
     onMouseLeave={() => setHover(null)} 
     className={`cursor-pointer ${name !== "slider" ? "shadow-xl rounded-md" : "pb-5"}`}
    >
      <Link 
       to={`${name === "detail" 
       ? `/${data.page}/${data.id}` 
       : `${page === "/" 
       ? `${data.page}/${data.id}` 
       : `${page === `${page}/${data.id}`}` 
       && `${data.id}`}`}`}
      >

        <p className={`${name !== "slider" && "hidden"} h-fit z-20 w-24 absolute -top-4 -right-2 p-1 rounded-sm text-sm text-center -rotate-90 text-white bg-red-600`}>
          {data.discount}
        </p>

        <div className="overflow-hidden relative h-72 mb-1 rounded-md">
          <img
            src={hover ? data.image2 : data.image1}
            alt={data.name}
            className={`w-full h-full rounded-md ${hover && "scale-105"} duration-300`}
          />

          <div className={`details-cards ${!hover && "md:-left-9"}`}>
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

          <div className={`add-to-cart ${!hover && "md:-bottom-10"}`}>
            افزودن به سبد خرید
          </div>
        </div>

        <div className="text-white font-vazirRegular text-sm centering flex-col bg-cyan-800 rounded-md w-full p-2">
          <h1 className="text-lg font-vazirMediu mb-2">{data.name}</h1>
          <p className={`${name === "slider" && "line-through opacity-70"}`}>{data.price !== "ناموجود" ? data.price.toLocaleString() : data.price}</p>
          <p>{data.priceDiscount && data.priceDiscount.toLocaleString()}</p>
        </div>
      </Link>
    </div>
  );
};
export default Card;
