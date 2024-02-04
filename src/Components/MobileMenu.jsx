import React from "react";

import { IoMdMenu } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const MobileMenu = ({ showMenu }) => {
  return (
    <div className={`${showMenu ? "translate-x-0" : "translate-x-[-770px]"}  duration-300 bg-white w-full h-full z-20 fixed top-0 md:hidden`}>
      <div className="centering py-4 justify-start mr-[5%]">
        <IoMdMenu className="size-6 ml-2"/>
        <span>منو</span>
      </div>

      <hr className="w-11/12 mx-auto"/>

      <ul className="centering flex-col list-menu-mobile">
          <li>
            <span>صفحات</span>
            <IoIosArrowForward />
          </li>
          <li>
            <span>فروشگاه</span>
            <IoIosArrowForward />
          </li>
          <li>
            <span>دسته‌ها</span>
            <IoIosArrowForward />
          </li>
          <li>
            <span>مردانه</span>
            <IoIosArrowForward />
          </li>
          <li>
            <span>زنانه</span>
            <IoIosArrowForward />
          </li>
          <li>
            <span>وبلاگ</span>
          </li>
          <li>
            <span>تماس</span>
          </li>
        </ul>
    </div>
  );
};

export default MobileMenu;
