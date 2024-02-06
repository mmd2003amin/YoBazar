import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const Banner = ({ data, name }) => {
  return (
    <div
      className={`group overflow-hidden rounded-md mb-2 md:mx-2 w-full relative cursor-pointer ${
        name === "topOne" ? "md:w-1/3" : "md:w-1/2"
      }`}
    >
      <img
        src={data.image}
        alt="banner"
        className="rounded-md group-hover:rotate-[4deg] group-hover:scale-110 w-full duration-500"
      />

      <h1
        className={`absolute font-vazirRegular text-2xl w-full ${
          name === "topOne"
            ? "text-center bottom-20"
            : "top-12 right-5 md:right-12"
        }`}
      >
        {data.title}
      </h1>

      <div
        className={`${
          name === "topOne"
            ? "-translate-x-16 group-hover:translate-x-0 bottom-8 right-0 left-0 mx-auto"
            : "top-24 right-3 md:right-10"
        } duration-300 overflow-hidden w-fit absolute`}
      >
        <div className="translate-x-32 group-hover:-translate-x-0 duration-300 centering">
          <span>نمایش همه مدل ها</span>
          <IoIosArrowRoundBack className="mr-1 size-8" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
