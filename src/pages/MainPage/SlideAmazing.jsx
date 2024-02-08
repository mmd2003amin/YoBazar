import React from "react";

const SlideAmazing = ({ data }) => {
  return (
    <>
      <p className="h-fit w-24 absolute -top-4 -right-2 p-1 rounded-sm text-sm text-center -rotate-90 text-white bg-red-600">
        {data.discount}
      </p>
      <img
        src={data.image1}
        alt={data.name}
        className="w-full h-72 mb-1 rounded-md"
      />
      <div className="text-white font-vazirRegular text-sm centering flex-col bg-cyan-800 rounded-md w-full p-2 mb-5">
        <h1 className="text-lg font-vazirMediu mb-2">{data.name}</h1>
        <p className="line-through opacity-70">{data.price}</p>
        <p>{data.priceDiscount}</p>
      </div>
    </>
  );
};

export default SlideAmazing;
