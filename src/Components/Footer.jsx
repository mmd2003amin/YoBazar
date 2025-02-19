import React from "react";
import footerData from "../constant/footerData";

import { BsTruck, BsArrowUpCircle } from "react-icons/bs";
import { FaCircleArrowUp } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { GiTransportationRings } from "react-icons/gi";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="font-vazirMedium mt-5 border-t border-gray-200 border-solid p-5 centering flex-col items-start icons-footer xs:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <div>
          <BsTruck className="size-6" />
          <span>تحویل رایگان</span>
        </div>
        <div>
          <GiTransportationRings className="size-6" />
          <span>حمل و نقل بدون تماس</span>
        </div>
        <div>
          <TbTruckReturn className="size-6" />
          <span>مرجوعی تضمینی</span>
        </div>
        <div>
          <MdOutlineSecurity className="size-6" />
          <span>پرداخت امن</span>
        </div>
      </div>

      <div className="font-vazirMedium border-t border-gray-200 border-solid p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {footerData.map((list) => (
            <Link to={list.path} key={list.id} className="mb-8">
              <h1 className="text-2xl md:text-lg mb-3 text-center">
                {list.name}
              </h1>
              <ul className="centering flex-col">
                {list.item.map((item) => (
                  <li
                    key={item}
                    className="text-gray-800 hover:text-black md:text-sm cursor-pointer transition-all mb-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>

      <div className="font-vazirMedium mb-6">
        <h1 className="text-center mx-auto text-lg mb-5 xs:text-right w-11/12 xs:w-2/3 sm:w-1/2 lg:w-2/6 xs:mr-[7%]">
          به خبرنامه ما بپیوندید و برای اولین سفارش خود ۲۰ دلار دریافت کنید
        </h1>
        <div className="centering flex-col lg:flex-row lg:justify-start md:items-start lg:items-center w-11/12 mx-auto">
          <input
            className="w-full md:w-1/2 lg:w-1/3 h-[52px] lg:h-10 lg:text-sm p-2 border border-gray-200 border-solid rounded-3xl outline-none"
            type="text"
            placeholder="آدرس ایمیل..."
          />
          <button className="w-full md:w-1/2 lg:w-32 h-[52px] lg:h-10 lg:text-sm p-2  bg-red-500 hover:bg-red-600 transition-all text-white mt-2 lg:mr-2 rounded-3xl">
            اشتراک
          </button>
        </div>
      </div>

      <div className="centering justify-start mr-[7%] mb-14 md:mb-2 social-icons">
        <FaFacebookF className="hover:text-blue-900" />
        <FaInstagram className="hover:text-red-700" />
        <FaYoutube className="hover:text-red-700" />
        <FaPinterestP className="hover:text-red-700" />
        <FaLinkedinIn className="hover:text-blue-900" />
      </div>

      <FaCircleArrowUp
        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
        className="text-cyan-700 fixed left-3 bottom-24 md:bottom-3 z-50 cursor-pointer size-12"
      />
    </>
  );
};

export default Footer;
