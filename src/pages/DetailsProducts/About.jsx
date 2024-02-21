import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const About = ({ data }) => {
  return (
    <div className="mt-16 p-5 w-full md:mr-14 lg:mr-0">
      <h1 className="text-xl font-vazirBold">{data.name}</h1>

      <div className="centering justify-start mt-3">
        <div className="ml-2 border border-solid border-[#d19d1e] text-[#d19d1e] hover:bg-[#d19d1e] hover:text-white transition-all cursor-pointer rounded-md centering px-2 py-0.5">
          <p>{data.star}</p>
          <FaStar className="size-5 mr-2" />
        </div>
        <div className="centering mr-2 text-gray-800">
          <p>بازدید :</p>
          <p className="mr-1">{data.view}</p>
        </div>
      </div>

      <div className="centering justify-start text-cyan-800 font-vazirBold mt-3 text-lg">
        <div className="centering">
          {data.price !== "ناموجود" ? data.price.toLocaleString() : data.price}{" "}
          <p className={`${data.price === "ناموجود" && "hidden"}`}>تومان</p>
        </div>
        <div className={`${data.priceDiscount === undefined && "hidden"} centering mr-3 line-through opacity-70`}>
          {data.priceDiscount && data.priceDiscount.toLocaleString()}
          <p>تومان</p>
        </div>
      </div>

      <ul className="my-3 text-gray-700">
        {data.items.map((item, index) => (
          <li key={index}>● {item}</li>
        ))}
      </ul>
      <hr />

      <div className="buttons-details mt-3 centering justify-start sm:justify-center md:justify-start flex-col sm:flex-row md:flex-col lg:flex-row">
        <div className="bg-cyan-700 hover:bg-cyan-800">
          <p>افزودن به سبد‌خرید</p>
          <IoCartOutline className="mr-2 size-5"/>
        </div>
        <div className="bg-red-500 hover:bg-red-600">
          <p>افزودن به علاقه‌مندی</p>
          <IoMdHeartEmpty className="mr-2 size-5"/>
        </div>
      </div>
    </div>
  );
};

export default About;
