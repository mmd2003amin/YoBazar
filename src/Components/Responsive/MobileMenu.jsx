import React from "react";
import ItemsMenu from "../../constant/ItemsMenu";

import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const MobileMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "translate-x-0" : "translate-x-[-770px]"
      } duration-300 bg-white w-full h-full z-20 fixed top-0 md:hidden`}
    >
      <hr className="w-11/12 mx-auto" />

      <ul className="list-menu-mobile centering flex-col">
        <li>
          <Link onClick={() => setShowMenu(false)} to="/favorites" className="centering justify-between w-full">
            <span>علاقه‌مندی‌ها</span>
            <IoIosArrowForward />
          </Link>
        </li>
        {ItemsMenu.map((item) => (
          <li onClick={() => setShowMenu(false)} key={item.id}>
            <Link to={item.path} className="centering justify-between w-full">
              <span>{item.name[1]}</span>
              <IoIosArrowForward />
            </Link>
          </li>
        ))}
        <li>وبلاگ</li>
        <li>تماس</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
