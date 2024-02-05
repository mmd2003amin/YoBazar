import React, { useState } from "react";
import MobileGroupButton from "./MobileGroupButton";
import MobileMenu from "./MobileMenu";
import SubMenu from "./SubMenu";

//Data
import {
  PagesSubMenu,
  StoreSubMenu,
  CategoriesSubMenu,
  ManSubMenu,
  WomanSubMenu,
} from "../constant/SubMenuData";
import ItemsMenu from "../constant/ItemsMenu";

//Icons
import logo from "../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [data, setData] = useState({
    data: PagesSubMenu,
    nameSub: "صفحات",
  });

  const showSubMenuHandler = (e , id) => {
    const name = e.target.innerText;

    name === "صفحات" && setData({ data: PagesSubMenu, nameSub: "صفحات" });
    name === "فروشگاه" && setData({ data: StoreSubMenu, nameSub: "فروشگاه" });
    name === "دسته‌ها" && setData({ data: CategoriesSubMenu, nameSub: "دسته‌ها" });
    name === "مردانه" && setData({ data: ManSubMenu, nameSub: "مردانه" });
    name === "زنانه" && setData({ data: WomanSubMenu, nameSub: "زنانه" });

    setShowSubMenu(id);
  };

  return (
    <>
      <div className="sticky top-0 centering justify-between bg-header p-2 md:px-6 h-16 md:flex-row-reverse z-10">
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

      <div className="hidden md:centering w-full h-8 py-5 sticky top-16 shadow-md bg-header z-10">
        <ul className="list-menu centering">
          {ItemsMenu.map((item) => (
            <li key={item.id}>
              <span
                className="py-5"
                onMouseEnter={(e) => showSubMenuHandler(e ,item.id)}
                onMouseLeave={() => setShowSubMenu(false)}
              >
                {item.name}
              </span>
              <MdOutlineArrowBackIos
                className={`${
                  showSubMenu === item.id && " rotate-[-90deg]"
                } duration-150 size-2.5 mr-1`}
              />
            </li>
          ))}
          <li>وبلاگ</li>
          <li>تماس</li>
        </ul>
      </div>

      <MobileGroupButton showMenu={showMenu} setShowMenu={setShowMenu} />
      <MobileMenu showMenu={showMenu} />
      <SubMenu showSubMenu={showSubMenu} setShowSubMenu={setShowSubMenu} data={data} />
    </>
  );
};

export default Header;
