import React, { useState } from "react";
import MobileGroupButton from "./MobileGroupButton";
import MobileMenu from "./MobileMenu";

import logo from "../assets/logo.png";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  const [ showMenu , setShowMenu ] = useState(false);

  return (
    <>
      <div className="sticky top-0 centering justify-between bg-header p-2 md:px-6 h-16 md:flex-row-reverse">
        <div className="hidden md:centering">
          <LuUser2 className="size-6 mr-4" onClick={() => setShow(true)} />
          <div className="relative">
            <FiHeart className="size-6 mr-4" />
            <span className="quantity">0</span>
          </div>
          <div className="relative">
            <BsCart3 className="size-6 mr-4" />
            <span className="quantity">0</span>
          </div>
        </div>

        <img
          src={logo}
          alt="logo"
          className="w-24 xs:w-32 md:absolute left-0 right-0 md:mx-auto"
        />

        <div className="centering bg-gray-100 p-2 rounded-lg xs:rounded-xl">
          <input
            type="text"
            placeholder="جستجو..."
            className="border-none outline-none font-vazirRegular bg-transparent w-32 xs:w-52 lg:w-72"
          />
          <IoIosSearch className="size-5" />
        </div>
      </div>

      <div className="hidden md:centering w-full h-8 py-5 sticky top-16 shadow-md bg-header">
        <ul className="list-menu centering">
          <li>
            <span>صفحات</span>
            <IoIosArrowDown />
          </li>
          <li>
            <span>فروشگاه</span>
            <IoIosArrowDown />
          </li>
          <li>
            <span>دسته‌ها</span>
            <IoIosArrowDown />
          </li>
          <li>
            <span>مردانه</span>
            <IoIosArrowDown />
          </li>
          <li>
            <span>زنانه</span>
            <IoIosArrowDown />
          </li>
          <li>
            <span>وبلاگ</span>
          </li>
          <li>
            <span>تماس</span>
          </li>
        </ul>
      </div>

      <MobileGroupButton showMenu={showMenu} setShowMenu={setShowMenu}/>
      <MobileMenu showMenu={showMenu}/>
    </>
  );
};

export default Header;
